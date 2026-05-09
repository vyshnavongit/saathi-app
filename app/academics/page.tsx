"use client"

import Link from "next/link"
import { ArrowLeft, Book } from "lucide-react"

export default function AcademicsPage() {
  const semesters = [
    { id: 1, name: "Semester 1", href: "/academics/semester-1" },
    { id: 2, name: "Semester 2", href: "/academics/semester-2" },
    { id: 3, name: "Semester 3", href: "/academics/semester-3" },
    { id: 4, name: "Semester 4", href: "/academics/semester-4" },
    { id: 5, name: "Semester 5", href: "/academics/semester-5" },
    { id: 6, name: "Semester 6", href: "/academics/semester-6" },
  ]

  return (
    <div className="relative min-h-screen bg-sand-dune px-6 py-12 overflow-hidden isolate">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[40%] left-[5%] w-[800px] h-[600px] bg-[#C1E1C1] rounded-[50%_50%_20%_80%/50%_20%_80%_50%] filter blur-[40px] opacity-65 rotate-[45deg]" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] bg-[#E6E6FA] rounded-[20%_80%_50%_50%/80%_50%_50%_20%] filter blur-[40px] opacity-70 -rotate-[30deg]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto mt-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-cyprus hover:opacity-70 transition-opacity mb-8 group"
        >
          <ArrowLeft
            size={20}
            className="transition-transform group-hover:-translate-x-1"
          />
          <span className="font-bold tracking-tight uppercase text-sm">
            Back to Home
          </span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-cyprus mb-16 text-center tracking-tight animate-in fade-in duration-500">
          Academics
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {semesters.map((semester, index) => (
            <Link key={semester.id} href={semester.href}>
              <div
                className="glass group hover:bg-cyprus hover:text-sand-dune p-8 rounded-2xl transition-all duration-300 flex items-center justify-between cursor-pointer border border-cyprus/5 shadow-sm animate-in fade-in duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-6">
                  <div className="bg-cyprus/10 group-hover:bg-sand-dune/20 w-14 h-14 flex items-center justify-center rounded-xl transition-colors text-cyprus group-hover:text-sand-dune">
                    <span className="font-black text-2xl">{semester.id}</span>
                  </div>
                  <span className="font-bold text-2xl">{semester.name}</span>
                </div>
                <Book className="w-8 h-8 opacity-30 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}