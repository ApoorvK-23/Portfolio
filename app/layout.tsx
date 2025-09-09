import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apoorv Kulshrestha — Portfolio",
  description: "Data Analyst / Business Analyst portfolio — projects, case studies, and contact.",
  icons: [{ rel: "icon", url: "/logo.svg" }],
  themeColor: "#0b1220",   // more neutral
  // (Open Graph config unchanged)
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-bg text-foreground`}>
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
