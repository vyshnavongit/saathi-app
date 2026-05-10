"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"

import {
  BookOpen,
  Users,
  Building,
  Phone,
  Bus,
  Coffee,
  MapPin,
  Compass
} from "lucide-react"
import { ThemeToggle } from "../components/ThemeToggle"
import { BackgroundShapes } from "../components/BackgroundShapes"


// Force Turbopack rebuild
export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading time (e.g., fetching user data or assets)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 seconds splash screen

    return () => clearTimeout(timer)
  }, [])

  const items = [
    { name: "Academics", icon: BookOpen, href: "/academics" },
    { name: "Clubs and Community", icon: Users, href: "/clubs" },
    { name: "Campus and Hostel", icon: Building, href: "/campus" },
    { name: "Contacts", icon: Phone, href: "/contacts" },
    { name: "Transport", icon: Bus, href: "/transport" },
    { name: "Local Lifestyle", icon: Coffee, href: "/lifestyle" },
  ]

  const bottomItem = { name: "Student Guide", icon: MapPin, href: "/guide" }

  // --- Loading Screen ---
  if (isLoading) {
    return (
      <div className="min-h-screen bg-sand-dune dark:bg-[#0C1519] flex flex-col items-center justify-center isolate transition-all duration-1000">
        <div className="flex flex-col items-center gap-2 text-cyprus dark:text-[#CF9D7B] animate-in fade-in zoom-in-95 duration-1000 transition-colors">
          {/* Logo with Google-style Buffering Animation */}
          <div className="relative flex items-center justify-center w-30 h-30">
            {/* Background track */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="6" className="text-cyprus/10 dark:text-[#CF9D7B]/10" />
            </svg>
            {/* Animated spinning indicator */}
            <svg className="absolute inset-0 w-full h-full animate-[spin_1.5s_linear_infinite]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeDasharray="80 200" className="text-cyprus dark:text-[#CF9D7B]" />
            </svg>
            {/* Logo Image */}
            <Image 
             src="/logo.png" 
             alt="SAATHI Logo" 
             width={248} 
             height={248} 
             className="opacity-90 rounded-full" 
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">SAATHI</h1>
        </div>
      </div>
    )
  }

  // --- Main Application ---
  return (
    <div className="relative min-h-screen bg-sand-dune dark:bg-[#0C1519] px-6 py-10 overflow-hidden isolate transition-colors duration-300">
      
      <ThemeToggle />
      <BackgroundShapes />

      <div className="relative z-10 max-w-4xl mx-auto mt-12">
        <h1 className="text-4xl font-bold text-cyprus dark:text-[#CF9D7B] mb-12 text-center tracking-tight animate-in fade-in slide-in-from-top duration-700 transition-colors duration-300">
          Welcome to SAATHI
        </h1>

        {/* 3x2 Grid for the first 6 items - Reduced Sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5">
          {items.map((item, index) => (
            <Link key={item.name} href={item.href}>
              <div
                className="group p-6 rounded-3xl transition-all duration-300 flex flex-col items-center justify-center gap-4 cursor-pointer border border-white/20 dark:border-[#CF9D7B]/20 bg-cyprus/80 dark:bg-[#CF9D7B]/10 backdrop-blur-md text-[#FAFAFA] dark:text-[#CF9D7B] hover:bg-[#FAFAFA]/85 dark:hover:bg-[#CF9D7B]/20 hover:border-cyprus/30 dark:hover:border-[#CF9D7B]/50 hover:text-cyprus dark:hover:text-[#FAFAFA] shadow-lg hover:shadow-xl text-center h-44 animate-in fade-in duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="bg-[#FAFAFA]/20 dark:bg-[#CF9D7B]/20 group-hover:bg-cyprus/10 dark:group-hover:bg-[#0C1519]/50 p-4 rounded-2xl transition-colors duration-300 shadow-inner">
                  <item.icon className="w-8 h-8" />
                </div>
                <span className="font-bold text-lg">{item.name}</span>
              </div>
            </Link>
          ))}

        </div>

        {/* 1 centered item at the bottom - Reduced Size */}
        <div className="flex justify-center">
          <Link href={bottomItem.href} className="w-full sm:w-1/2 md:w-1/3">
            <div 
              className="group p-6 rounded-3xl transition-all duration-300 flex flex-col items-center justify-center gap-4 cursor-pointer border border-white/20 dark:border-[#CF9D7B]/20 bg-cyprus/80 dark:bg-[#CF9D7B]/10 backdrop-blur-md text-[#FAFAFA] dark:text-[#CF9D7B] hover:bg-[#FAFAFA]/85 dark:hover:bg-[#CF9D7B]/20 hover:border-cyprus/30 dark:hover:border-[#CF9D7B]/50 hover:text-cyprus dark:hover:text-[#FAFAFA] shadow-lg hover:shadow-xl text-center h-44 animate-in fade-in duration-500"
              style={{ animationDelay: '300ms' }}
            >
              <div className="bg-[#FAFAFA]/20 dark:bg-[#CF9D7B]/20 group-hover:bg-cyprus/10 dark:group-hover:bg-[#0C1519]/50 p-4 rounded-2xl transition-colors duration-300 shadow-inner">
                <bottomItem.icon className="w-8 h-8" />
              </div>
              <span className="font-bold text-lg">{bottomItem.name}</span>
            </div>
          </Link>
        </div>

      </div>

    </div>
  )
}