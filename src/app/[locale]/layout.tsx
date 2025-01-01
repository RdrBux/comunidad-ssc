import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { sourceSerif } from "@/utils/fonts";
import { Analytics } from '@vercel/analytics/react';
import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from 'next-intl';
/* import StickyBanner from "@/components/sticky-banner"; */

const inter = Inter({ subsets: ["latin"] });

interface Props {
  params: { locale: string };
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {

  const t = await getTranslations('namespace')

  return {
    title: t('home'),
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.className} ${sourceSerif.variable} tracking-tight antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {/* <StickyBanner /> */}
          <div className="relative">{children}</div>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
