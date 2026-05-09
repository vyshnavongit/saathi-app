"use client"

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
        <div className="flex flex-col items-center gap-6 text-cyprus animate-in fade-in zoom-in-95 duration-1000">
          <div className="p-6 bg-cyprus/5 rounded-3xl backdrop-blur-sm border border-cyprus/10 shadow-sm">
            {/* Logo Placeholder */}
            <Compass className="w-16 h-16 opacity-90 animate-[pulse_3s_ease-in-out_infinite]" />
          </div>
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
                className="glass group hover:bg-cyprus hover:text-sand-dune p-6 rounded-3xl transition-all duration-300 flex flex-col items-center justify-center gap-4 cursor-pointer border border-cyprus/5 shadow-sm text-center h-44 animate-in fade-in duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="bg-cyprus/10 group-hover:bg-sand-dune/20 p-4 rounded-2xl transition-colors text-cyprus group-hover:text-sand-dune">
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
              className="glass group hover:bg-cyprus hover:text-sand-dune p-6 rounded-3xl transition-all duration-300 flex flex-col items-center justify-center gap-4 cursor-pointer border border-cyprus/5 shadow-sm text-center h-44 animate-in fade-in duration-500"
              style={{ animationDelay: '300ms' }}
            >
              <div className="bg-cyprus/10 group-hover:bg-sand-dune/20 p-4 rounded-2xl transition-colors text-cyprus group-hover:text-sand-dune">
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