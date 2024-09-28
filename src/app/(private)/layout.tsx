import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";
import NextAuthProvider from "@/lib/auth/Provider";

export const metadata = {
  title: "Dashboard",
  description: "Add blogs from here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAuthProvider>
      <ThemeProvider>
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 md:p-8 pt-2 p-8 overflow-y-auto">
            <Navbar />
            {children}
          </main>
        </div>
      </ThemeProvider>
    </NextAuthProvider>
  );
}
