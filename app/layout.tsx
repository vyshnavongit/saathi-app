import type { Metadata } from "next"
import { Inter, Geist } from "next/font/google"
import "./globals.css";

import DynamicBackground from "@/components/DynamicBackground";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SAATHI",
  description: "Comprehensive AI partner for your daily productivity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)} suppressHydrationWarning>
      <body className={cn(inter.className, "antialiased relative min-h-screen")}>
        <DynamicBackground />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
