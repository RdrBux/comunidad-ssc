import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { sourceSerif } from "@/utils/fonts";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Comunidad del Saber Supercomplejo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${sourceSerif.variable} tracking-tight antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
