import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from "next-intl/server";
import { Locale, routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Plausible from "@/components/Script/Plausible";
import { generateBaseMetadata } from "@/lib/metadata";

type Props = {
  children: React.ReactNode;
  params: { locale: Locale };
}

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  return await generateBaseMetadata();
}

export default async function RootLayout({ children, params: { locale } }: Props) {

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <GoogleAnalytics gaId="G-XXX" />
      <head>
        <Plausible />
      </head>
      <NextIntlClientProvider messages={messages}>
        <body className={`antialiased`}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow w-full max-w-5xl mx-auto px-2 md:px-4">
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
