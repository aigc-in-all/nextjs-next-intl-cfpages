import { Link, Locale, routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

type Props = {
    params: {
        locale: Locale,
        id: string
    }
}

export async function generateStaticParams() {
    // 模拟一些博客文章 ID
    const posts = ['1', '2', '3']; // 这里应该是你实际的博客文章 ID 列表

    // 为每个语言和博客 ID 的组合生成参数
    const params = routing.locales.flatMap((locale) =>
        posts.map((id) => ({
            locale,
            id
        }))
    );

    return params;
}

export default function BlogPostPage({ params: { locale, id } }: Props) {
    // Enable static rendering
    setRequestLocale(locale);

    return (
        <div>
            <h1 className="text-center text-2xl font-bold">Blog Post {id}</h1>
            <Link href={`/blog`} className="block">Back to Blog List</Link>
        </div>
    )
}