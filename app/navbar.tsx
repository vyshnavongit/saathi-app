"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-2xl">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg transition-transform group-hover:rotate-12">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">SAATHI</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="/features" className="hover:text-primary transition-colors">Features</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Log in
          </Button>
          <Button size="sm" className="rounded-xl px-5 hover-glow">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  )
}