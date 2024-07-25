import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { sourceSerif } from "@/utils/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saber Supercomplejo",
  description: "Saber Supercomplejo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${sourceSerif.variable} tracking-tight antialiased`}>{children}</body>
    </html>
  );
}
