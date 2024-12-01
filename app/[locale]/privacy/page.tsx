import { Locale, routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

type Props = {
    params: {
        locale: Locale
    }
}

export async function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default function PrivacyPage({ params: { locale } }: Props) {
    // Enable static rendering
    setRequestLocale(locale);

    return (
        <div>Privacy</div>
    );
}