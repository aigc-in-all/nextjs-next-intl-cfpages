import { Locale, routing } from "@/i18n/routing";
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

export default function AboutPage({ params: { locale } }: Props) {
    // Enable static rendering
    setRequestLocale(locale);
    const t = useTranslations('AboutPage');
    return <div>{t('title')}</div>;
}