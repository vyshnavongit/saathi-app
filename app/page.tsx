"use client"

import Link from "next/link"
import {
  ArrowLeft,
  Camera,
  Palette,
  Trophy,
  Code,
  Users2,
  Leaf,
  Lightbulb
} from "lucide-react"

export default function ClubsPage() {

  const clubs = [
    { name: "Sports Club", icon: Trophy },
    { name: "Photography Club", icon: Camera },
    { name: "Arts Club", icon: Palette }
  ]

  const communities = [
    { name: "TinkerHub", icon: Code },
    { name: "Skill Development Club", icon: Lightbulb },
    { name: "Lenient Tree", icon: Leaf },
    { name: "μLearn", icon: Users2 }
  ]

  return (
    <div className="relative min-h-screen bg-sand-dune px-6 py-12 overflow-hidden isolate">

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

        <h1 className="text-4xl md:text-5xl font-bold text-cyprus mb-16 text-center tracking-tight animate-in fade-in slide-in-from-top duration-700">
          Clubs & Communities
        </h1>

        <div className="flex flex-col gap-20">

          <section className="animate-in fade-in slide-in-from-bottom duration-700">

            <h2 className="text-2xl font-black text-cyprus tracking-[0.2em] mb-8 border-b border-cyprus/10 pb-4">
              CLUBS
            </h2>

            <div className="grid gap-4">

              {clubs.map((club) => (
                <div
                  key={club.name}
                  className="glass group hover:bg-cyprus hover:text-sand-dune p-5 rounded-2xl transition-all duration-300 flex items-center gap-5 cursor-pointer border border-cyprus/5 shadow-sm"
                >

                  <div className="bg-cyprus/10 group-hover:bg-sand-dune/20 p-3 rounded-xl transition-colors text-cyprus group-hover:text-sand-dune">
                    <club.icon className="w-6 h-6" />
                  </div>

                  <span className="font-bold text-lg">
                    {club.name}
                  </span>

                </div>
              ))}

            </div>

          </section>

          <section className="animate-in fade-in slide-in-from-bottom duration-700 delay-200">

            <h2 className="text-2xl font-black text-cyprus tracking-[0.2em] mb-8 mt-8 border-b border-cyprus/10 pb-4">
              COMMUNITIES
            </h2>

            <div className="grid gap-4">

              {communities.map((community) => (
                <div
                  key={community.name}
                  className="glass group hover:bg-cyprus hover:text-sand-dune p-5 rounded-2xl transition-all duration-300 flex items-center gap-5 cursor-pointer border border-cyprus/5 shadow-sm"
                >

                  <div className="bg-cyprus/10 group-hover:bg-sand-dune/20 p-3 rounded-xl transition-colors text-cyprus group-hover:text-sand-dune">
                    <community.icon className="w-6 h-6" />
                  </div>

                  <span className="font-bold text-lg">
                    {community.name}
                  </span>

                </div>
              ))}

            </div>

          </section>

        </div>

      </div>

    </div>
  )
}