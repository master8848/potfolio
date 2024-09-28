import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/sub/Navbar";
import { ThemeProvider } from "@/components/provider/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/sub/Footer";
import { Suspense } from "react";

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
    <ThemeProvider>
      <div className="min-h-[102vh]">
        <Navbar />
        <main className=" bg-gray-800 dark:bg-dot-thick-neutral-700 text-gray-200 min-h-[90svh] pt-16">
          <Suspense>{children}</Suspense>
        </main>
        <Footer />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}
