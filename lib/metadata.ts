import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { isDevelopment } from './utils';
import { Locale, routing } from '@/i18n/routing';

export const baseUrl = isDevelopment() ? "http://localhost:3000" : "https://example.com";

export async function generateBaseMetadata(): Promise<Metadata> {
    const t = await getTranslations('Metadata');
    return {
        title: t('title'),
        description: t('description'),
        keywords: t('keywords').split(','),
        openGraph: {
            title: t('og.title'),
            description: t('og.description'),
            images: [
                {
                    url: `${baseUrl}/og-image.jpg`,
                    width: 1200,
                    height: 630,
                },
            ],
            type: 'website',
        },
    };
}

export async function generateHomePageMetadata(locale: Locale): Promise<Metadata> {
    const t = await getTranslations('Metadata');
    const canonical = locale === routing.defaultLocale ? `${baseUrl}/` : `${baseUrl}/${locale}`;
    return {
        title: t('title'),
        description: t('description'),
        keywords: t('keywords').split(','),
        alternates: {
            canonical: canonical,
            languages: routing.locales.reduce((acc, lang) => {
                acc[lang] = lang === routing.defaultLocale ? `${baseUrl}/` : `${baseUrl}/${lang}`;
                return acc;
            }, {} as Record<string, string>),
        },
        openGraph: {
            title: t('og.title'),
            description: t('og.description'),
            url: canonical,
            images: [
                {
                    url: `${baseUrl}/og-image.jpg`,
                    width: 1200,
                    height: 630,
                },
            ],
            type: 'website',
        },
    };
}