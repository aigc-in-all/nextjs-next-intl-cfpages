import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { isDevelopment } from '@/lib/utils';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'zh-TW', 'de'],

    // Used when no locale matches
    defaultLocale: 'en',

    // Prefix the locale to the pathname based on environment
    localePrefix: isDevelopment() ? 'always' : 'as-needed'
});

export type Locale = (typeof routing.locales)[number];

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);