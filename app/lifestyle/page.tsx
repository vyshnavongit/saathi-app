"use client"

import Link from "next/link"

import {
  ArrowLeft,
  MapPin,
  Utensils,
  Dumbbell,
  Store,
  Landmark,
  Plus,
  ChevronRight
} from "lucide-react"

export default function LifestylePage() {

  const sections = [
    {
      heading: "Places",
      icon: MapPin,
      items: [
        {
          name: "Kayalpuram",
          slug: "kayalpuram"
        },

        {
          name: "Pulinkunnu Vallamkali (Rajiv Gandhi Trophy)",
          slug: "pulinkunnu-vallamkali"
}
      ]
    },

    {
      heading: "Food",
      icon: Utensils,
      items: [
        {
          name: "Tasty Grillz",
          slug: "tasty-grillz"
        },

        {
          name: "Daddy Cafe",
          slug: "daddy-cafe"
        },

        {
          name: "Taste of Arabia",
          slug: "taste-of-arabia"
        },
        {
          name: "Ice Spot",
          slug: "ice-spot"
}
      ]
    },

    {
      heading: "Fitness",
      icon: Dumbbell,
      items: [
        {
          name: "Body Style Gym",
          slug: "body-style-gym"
        },

        {
          name: "CUCEK Gym",
          slug: "cucek-gym"
        }
      ]
    },

    {
      heading: "Medical",
      icon: Plus,
      items: [
        {
          name: "Hospitals",
          slug: "hospitals"
        },

        {
          name: "Pharmacies",
          slug: "pharmacies"
        }
      ]
    },

    {
      heading: "General Stores",
      icon: Store,
      items: [
        {
          name: "MC Store",
          slug: "mc-store"
        },

        {
          name: "Extra Traders",
          slug: "extra-traders"
        },

        {
          name: "SMS Store",
          slug: "sms-store"
        }
      ]
    },

    {
      heading: "Religious Places",
      icon: Landmark,
      items: [
        {
          name: "Mosques",
          slug: "mosques"
        },

        {
          name: "Churches",
          slug: "churches"
        },

        {
          name: "Temples",
          slug: "temples"
        }
      ]
    }
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
        <div className="text-center mb-16">

          <h1 className="text-4xl md:text-5xl font-black text-cyprus tracking-tighter uppercase">
            Local Lifestyle
          </h1>

          <p className="mt-4 text-cyprus/60 font-medium italic">
            Explore places, food, fitness and essentials around CUCEK
          </p>

        </div>

        {/* Sections */}
        <div className="flex flex-col gap-10">

          {sections.map((section, index) => (

            <div
              key={section.heading}
              className="glass p-8 rounded-[2.5rem] border border-cyprus/10 shadow-xl animate-in fade-in slide-in-from-bottom duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >

              {/* Section Heading */}
              <div className="flex items-center gap-4 mb-6">

                <div className="bg-cyprus/10 p-3 rounded-2xl">

                  <section.icon
                    className="w-6 h-6 text-cyprus"
                  />

                </div>

                <h2 className="text-2xl font-black text-cyprus uppercase tracking-tight">
                  {section.heading}
                </h2>

              </div>

              {/* Items */}
              <div className="flex flex-col gap-4">

                {section.items.map((item) => (

                  <Link
                    key={item.slug}
                    href={`/lifestyle/${item.slug}`}
                    className="flex items-center justify-between bg-white/40 border border-cyprus/5 rounded-2xl px-5 py-4 hover:bg-cyprus hover:text-sand-dune transition-all duration-300 group"
                  >

                    <span className="font-semibold text-lg">
                      {item.name}
                    </span>

                    <ChevronRight
                      size={20}
                      className="opacity-50 group-hover:translate-x-1 transition-transform"
                    />

                  </Link>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}