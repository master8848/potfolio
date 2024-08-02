import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";
import Analitics from "./Analitics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saurav sanjel - Potfolio",
  description: "Saurav sanjel - Potfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={inter.className + ' dark'}>
        <Analitics>

          {children}
        </Analitics>

        <Toaster />
      </body>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-C3BQSF93S0"
        strategy="lazyOnload"

      />

    </html >
  );
}
