"use client";

import { Sheet, SheetContent, SheetTrigger, SheetHeader } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "@/i18n/routing";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function MobileMenu() {
    const t = useTranslations('Header');
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px]">
                <SheetHeader className="border-b pb-4">
                    <div className="flex items-center gap-2">
                        <img 
                            src="/logo.png"
                            alt="Logo"
                            className="w-8 h-8"
                        />
                        <span className="font-bold text-lg">{t('title')}</span>
                    </div>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-8">
                    <Link 
                        href="/about" 
                        className="text-gray-600 hover:text-gray-900 whitespace-nowrap"
                        onClick={() => setOpen(false)}
                    >
                        {t('about')}
                    </Link>
                    <LocaleSwitcher />
                </div>
            </SheetContent>
        </Sheet>
    );
} 