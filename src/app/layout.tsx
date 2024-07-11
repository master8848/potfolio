import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sub/Navbar";
import { ThemeProvider } from "@/components/provider/ThemeProvider";
import { ToastProvider } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/sub/Footer";

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


        {children}
        <Toaster />
      </body>
    </html >
  );
}
