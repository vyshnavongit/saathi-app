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
  Compass,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Star
} from "lucide-react"


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
      <div className="min-h-screen bg-sand-dune flex flex-col items-center justify-center isolate transition-opacity duration-1000">
        <div className="flex flex-col items-center gap-2 text-cyprus animate-in fade-in zoom-in-95 duration-1000">
          {/* Logo Placeholder */}
          <Image 
           src="/logo.png" 
           alt="SAATHI Logo" 
           width={320} 
           height={320} 
           className="opacity-90 animate-[pulse_3s_ease-in-out_infinite]" 
          />
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-2">SAATHI</h1>
            <p className="text-base font-medium opacity-70">Starting up...</p>
          </div>
        </div>
      </div>
    )
  }

  // --- Main Application ---
  return (
    <div className="relative min-h-screen bg-sand-dune px-6 py-10 overflow-hidden isolate">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[40%] left-[5%] w-[800px] h-[600px] bg-[#C1E1C1] rounded-[50%_50%_20%_80%/50%_20%_80%_50%] filter blur-[40px] opacity-65 rotate-[45deg]" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] bg-[#E6E6FA] rounded-[20%_80%_50%_50%/80%_50%_50%_20%] filter blur-[40px] opacity-70 -rotate-[30deg]" />

        {/* Random Floating Elements (No fill, 50% opacity) */}
        <Circle className="absolute top-[15%] left-[10%] w-12 h-12 text-cyprus opacity-50 -rotate-12" strokeWidth={1.5} />
        <Triangle className="absolute top-[25%] right-[15%] w-16 h-16 text-cyprus opacity-50 rotate-45" strokeWidth={1.5} />
        <Square className="absolute bottom-[20%] left-[15%] w-10 h-10 text-cyprus opacity-50 rotate-12" strokeWidth={1.5} />
        <Hexagon className="absolute bottom-[30%] right-[10%] w-14 h-14 text-cyprus opacity-50 rotate-[60deg]" strokeWidth={1.5} />
        <Star className="absolute top-[50%] left-[4%] w-8 h-8 text-cyprus opacity-50 -rotate-45" strokeWidth={1.5} />
        <Circle className="absolute top-[60%] right-[5%] w-6 h-6 text-cyprus opacity-50 rotate-90" strokeWidth={1.5} />
        <Triangle className="absolute bottom-[10%] right-[30%] w-8 h-8 text-cyprus opacity-50 -rotate-[30deg]" strokeWidth={1.5} />
        <Square className="absolute top-[10%] right-[40%] w-5 h-5 text-cyprus opacity-50 rotate-12" strokeWidth={1.5} />
        
        {/* Additional 10 elements */}
        <Hexagon className="absolute top-[5%] right-[25%] w-7 h-7 text-cyprus opacity-50 rotate-[15deg]" strokeWidth={1.5} />
        <Star className="absolute bottom-[40%] left-[20%] w-10 h-10 text-cyprus opacity-50 rotate-180" strokeWidth={1.5} />
        <Circle className="absolute top-[35%] left-[40%] w-5 h-5 text-cyprus opacity-50 -rotate-90" strokeWidth={1.5} />
        <Triangle className="absolute bottom-[15%] left-[45%] w-12 h-12 text-cyprus opacity-50 rotate-[75deg]" strokeWidth={1.5} />
        <Square className="absolute top-[45%] right-[20%] w-8 h-8 text-cyprus opacity-50 rotate-45" strokeWidth={1.5} />
        <Hexagon className="absolute bottom-[5%] left-[5%] w-16 h-16 text-cyprus opacity-50 -rotate-12" strokeWidth={1.5} />
        <Star className="absolute top-[80%] right-[15%] w-12 h-12 text-cyprus opacity-50 rotate-[120deg]" strokeWidth={1.5} />
        <Circle className="absolute top-[10%] left-[60%] w-14 h-14 text-cyprus opacity-50 rotate-[30deg]" strokeWidth={1.5} />
        <Triangle className="absolute top-[75%] left-[30%] w-6 h-6 text-cyprus opacity-50 rotate-[-60deg]" strokeWidth={1.5} />
        <Square className="absolute bottom-[40%] right-[45%] w-9 h-9 text-cyprus opacity-50 rotate-[-15deg]" strokeWidth={1.5} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto mt-12">
        <h1 className="text-4xl font-bold text-cyprus mb-12 text-center tracking-tight animate-in fade-in slide-in-from-top duration-700">
          Welcome to SAATHI
        </h1>

        {/* 3x2 Grid for the first 6 items - Reduced Sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5">
          {items.map((item, index) => (
            <Link key={item.name} href={item.href}>
              <div
                className="group p-6 rounded-3xl transition-all duration-300 flex flex-col items-center justify-center gap-4 cursor-pointer border border-white/20 bg-cyprus/80 backdrop-blur-md text-[#FAFAFA] hover:bg-[#FAFAFA]/85 hover:border-cyprus/30 hover:text-cyprus shadow-lg hover:shadow-xl text-center h-44 animate-in fade-in duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="bg-[#FAFAFA]/20 group-hover:bg-cyprus/10 p-4 rounded-2xl transition-colors duration-300 shadow-inner">
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
              className="group p-6 rounded-3xl transition-all duration-300 flex flex-col items-center justify-center gap-4 cursor-pointer border border-white/20 bg-cyprus/80 backdrop-blur-md text-[#FAFAFA] hover:bg-[#FAFAFA]/85 hover:border-cyprus/30 hover:text-cyprus shadow-lg hover:shadow-xl text-center h-44 animate-in fade-in duration-500"
              style={{ animationDelay: '300ms' }}
            >
              <div className="bg-[#FAFAFA]/20 group-hover:bg-cyprus/10 p-4 rounded-2xl transition-colors duration-300 shadow-inner">
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