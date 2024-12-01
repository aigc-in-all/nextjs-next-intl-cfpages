import { Link, Locale, routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

type Props = {
    params: {
        locale: Locale
    }
}

export async function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default function BlogPage({ params: { locale } }: Props) {
    // Enable static rendering
    setRequestLocale(locale);

    return (
        <div>
            <h1 className="text-center text-2xl font-bold">Blog List</h1>
            <Link href={`/blog/1`} className="block">Blog Post 1</Link>
            <Link href={`/blog/2`} className="block">Blog Post 2</Link>
            <Link href={`/blog/3`} className="block">Blog Post 3</Link>
        </div>
    )
}