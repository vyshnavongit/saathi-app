"use client"

import Link from "next/link"
import {
  ArrowLeft,
  Lightbulb,
  CheckCircle2
} from "lucide-react"
import { ThemeToggle } from "../../components/ThemeToggle"
import { BackgroundShapes } from "../../components/BackgroundShapes"

export default function GuidePage() {

  const tips = [
    "CUSAT exams can be tricky. Focus on previous year question papers and maintain good internal marks.",
    
    "KSRTC is the only mode of bus transportation available; private buses do not operate in the area.",

    "Carry sunscreen and an umbrella throughout the year — not just during the monsoon, but also during summer due to the strong heat and sudden weather changes.",

    "Join communities like TinkerHub and IEEE for networking and technical growth.",

    "Build a good relationship with seniors. They help a lot during academics and placements.",

    "Keep digital copies of important documents with you, as printed copies may be required at any time.",

    "Respect hostel timings and campus rules.",

    "Explore the backwaters and local spots safely with friends."
  ]

  return (
    <div className="relative min-h-screen bg-sand-dune dark:bg-[#0C1519] px-6 py-12 overflow-hidden isolate transition-colors duration-300">

      <ThemeToggle />
      <BackgroundShapes />

      <div className="relative z-10 max-w-4xl mx-auto mt-20">

        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-cyprus dark:text-[#CF9D7B] px-4 py-2 -ml-4 rounded-full hover:bg-cyprus dark:hover:bg-[#CF9D7B] hover:text-[#FAFAFA] dark:hover:text-[#0C1519] transition-colors mb-10 group"
        >

          <ArrowLeft
            size={20}
            className="transition-transform group-hover:-translate-x-1"
          />

          <span className="font-bold tracking-tight uppercase text-sm">
            Back to Home
          </span>

        </Link>

        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">

          <div className="bg-cyprus/5 p-4 rounded-3xl mb-6">

            <Lightbulb className="w-10 h-10 text-cyprus" />

          </div>

          <h1 className="text-4xl md:text-5xl font-black text-cyprus dark:text-[#CF9D7B] tracking-tighter uppercase transition-colors duration-300">
            Student Guide
          </h1>

          <p className="mt-4 text-cyprus/60 dark:text-[#CF9D7B]/60 font-medium max-w-lg italic transition-colors duration-300">
            Essential tips for CUCEK students
          </p>

        </div>

        {/* Guide Box */}
        <div className="max-w-3xl mx-auto bg-[#FAFAFA] dark:bg-[#0C1519] border-2 border-cyprus dark:border-[#CF9D7B] p-8 md:p-12 rounded-[2.5rem] shadow-xl transition-colors duration-300">

          <ul className="space-y-6">

            {tips.map((tip, index) => (
              <li
                key={index}
                className="flex items-start gap-4 group p-4 -mx-4 rounded-2xl hover:bg-cyprus dark:hover:bg-[#CF9D7B] transition-colors duration-300 cursor-default"
              >

                <div className="mt-1 bg-cyprus/10 dark:bg-[#CF9D7B]/10 p-1 rounded-full group-hover:bg-[#FAFAFA]/20 dark:group-hover:bg-[#0C1519]/20 transition-colors duration-300 shrink-0">

                  <CheckCircle2
                    size={20}
                    className="text-cyprus dark:text-[#CF9D7B] group-hover:text-[#FAFAFA] dark:group-hover:text-[#0C1519] transition-colors duration-300"
                  />

                </div>

                <p className="text-cyprus/80 dark:text-[#CF9D7B]/80 group-hover:text-[#FAFAFA]/90 dark:group-hover:text-[#0C1519]/90 text-lg leading-relaxed font-medium transition-colors duration-300">
                  {tip}
                </p>

              </li>
            ))}

          </ul>

        </div>

      </div>

    </div>
  )
}