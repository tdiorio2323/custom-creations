import type { Metadata } from "next";
import { metadata as base } from "@/lib/seo";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "../globals.css";

export const metadata: Metadata = base;

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-black">
        <Header />
        <main className="container py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
