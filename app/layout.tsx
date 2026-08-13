import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { site } from "@/content/site";
import SparkleCursor from "@/components/ui/SparkleCursor";
import IntroPreloader from "@/components/ui/IntroPreloader";

export const metadata: Metadata = {
  title: `${site.name} | ${site.role}`,
  description: site.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <IntroPreloader />
        <SparkleCursor />
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
