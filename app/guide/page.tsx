"use client"

import Link from "next/link"
import {
  ArrowLeft,
  Lightbulb,
  CheckCircle2
} from "lucide-react"

export default function GuidePage() {

  const tips = [
    "CUSAT exams can be tricky. Focus on previous year question papers and maintain good internal marks.",
    
    "Use KSRTC bus timings and ferry services properly. They are important in Kuttanad.",

    "Always carry an umbrella during monsoon season.",

    "Join communities like TinkerHub and IEEE for networking and technical growth.",

    "Build a good relationship with seniors. They help a lot during academics and placements.",

    "Keep digital copies of all important documents.",

    "Respect hostel timings and campus rules.",

    "Explore the backwaters and local spots safely with friends."
  ]

  return (
    <div className="relative min-h-screen bg-sand-dune px-6 py-12 overflow-hidden isolate">

      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

        <div className="absolute top-[40%] left-[5%] w-[800px] h-[600px] bg-[#C1E1C1] rounded-[50%_50%_20%_80%/50%_20%_80%_50%] blur-[40px] opacity-65 rotate-[45deg]" />

        <div className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] bg-[#E6E6FA] rounded-[20%_80%_50%_50%/80%_50%_50%_20%] blur-[40px] opacity-70 -rotate-[30deg]" />

      </div>

      <div className="relative z-10 max-w-4xl mx-auto mt-20">

        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-cyprus hover:opacity-70 transition-opacity mb-10 group"
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

          <h1 className="text-4xl md:text-5xl font-black text-cyprus tracking-tighter uppercase">
            Student Guide
          </h1>

          <p className="mt-4 text-cyprus/60 font-medium max-w-lg italic">
            Essential tips for CUCEK students
          </p>

        </div>

        {/* Guide Box */}
        <div className="max-w-3xl mx-auto glass p-8 md:p-12 rounded-[2.5rem] border border-cyprus/10 shadow-xl">

          <ul className="space-y-6">

            {tips.map((tip, index) => (
              <li
                key={index}
                className="flex items-start gap-4 group"
              >

                <div className="mt-1 bg-cyprus/10 p-1 rounded-full group-hover:bg-cyprus/20 transition-colors shrink-0">

                  <CheckCircle2
                    size={20}
                    className="text-cyprus"
                  />

                </div>

                <p className="text-cyprus/80 text-lg leading-relaxed font-medium">
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