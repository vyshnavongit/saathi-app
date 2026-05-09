import type { Metadata } from "next"
import { Inter, Geist } from "next/font/google"
import "./globals.css";

import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SAATHI - Your AI Companion",
  description: "Comprehensive AI partner for your daily productivity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body className={`${inter.className} antialiased`}>
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
