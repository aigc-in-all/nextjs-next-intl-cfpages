import { Link, Locale, routing } from "@/i18n/routing";
import { baseUrl } from "@/lib/metadata";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: {
    locale: Locale
  }
}

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const canonical = locale === routing.defaultLocale ? `${baseUrl}/` : `${baseUrl}/${locale}`;
  return {
    alternates: {
      canonical: canonical,
      languages: routing.locales.reduce((acc, lang) => {
        acc[lang] = lang === routing.defaultLocale ? `${baseUrl}/` : `${baseUrl}/${lang}`;
        return acc;
      }, {} as Record<string, string>),
    }
  }
}

export default function HomePage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}
