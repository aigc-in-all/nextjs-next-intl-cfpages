"use client";

import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { startTransition } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const LocaleSwitcher = () => {
    const locale = useLocale();
    const t = useTranslations('LocaleSwitcher');
    const router = useRouter();
    const pathname = usePathname();

    const handleLocaleChange = (newLocale: string) => {
        const nextLocale = newLocale as Locale;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <Select value={locale} onValueChange={handleLocaleChange}>
            <SelectTrigger>
                <SelectValue placeholder={t('label')} />
            </SelectTrigger>
            <SelectContent>
                {routing.locales.map((l) => (
                    <SelectItem key={l} value={l}>
                        {t(`locale-${l}`)}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}

export default LocaleSwitcher;