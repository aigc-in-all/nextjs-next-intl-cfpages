import { Link } from "@/i18n/routing";
import LocaleSwitcher from "./LocaleSwitcher";
import { getTranslations } from "next-intl/server";
import MobileMenu from "./MobileMenu";

const Header = async () => {
    const t = await getTranslations("Header");
    return (
        <header className="border-b">
            <div className="max-w-5xl mx-auto py-4 px-4 flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="w-8 h-8"
                        />
                        <span className="text-xl font-bold">{t('title')}</span>
                    </Link>
                </div>
                <div className="hidden md:flex items-center gap-6">
                    <Link
                        href="/blog"
                        className="text-gray-600 hover:text-gray-900 whitespace-nowrap"
                    >
                        {t('blog')}
                    </Link>
                    <Link
                        href="/about"
                        className="text-gray-600 hover:text-gray-900 whitespace-nowrap"
                    >
                        {t('about')}
                    </Link>
                    <LocaleSwitcher />
                </div>

                <MobileMenu />
            </div>
        </header>
    );
};

export default Header;