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
import { ThemeToggle } from "../../components/ThemeToggle"
import { BackgroundShapes } from "../../components/BackgroundShapes"

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
    <div className="relative min-h-screen bg-sand-dune dark:bg-[#0C1519] px-6 py-12 overflow-hidden isolate transition-colors duration-300">

      <ThemeToggle />
      <BackgroundShapes />

      <div className="relative z-10 max-w-4xl mx-auto mt-4 md:mt-12">

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
        <div className="text-center mb-16">

          <h1 className="text-4xl md:text-5xl font-bold text-cyprus dark:text-[#CF9D7B] tracking-tight animate-in fade-in slide-in-from-top duration-700 transition-colors duration-300">
            Local Lifestyle
          </h1>

          <p className="mt-4 text-cyprus/60 dark:text-[#CF9D7B]/60 font-medium animate-in fade-in slide-in-from-top duration-700 delay-150 transition-colors duration-300">
            Explore places, food, fitness and essentials around CUCEK
          </p>

        </div>

        {/* Sections */}
        <div className="flex flex-col gap-10">

          {sections.map((section, index) => (

            <div
              key={section.heading}
              className="bg-[#FAFAFA] dark:bg-[#0C1519] border-2 border-cyprus dark:border-[#CF9D7B] p-8 rounded-[2.5rem] shadow-sm animate-in fade-in slide-in-from-bottom duration-500 transition-colors duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >

              {/* Section Heading */}
              <div className="flex items-center gap-3 mb-6 border-b border-cyprus/10 dark:border-[#CF9D7B]/10 pb-4 transition-colors duration-300">

                <div className="bg-cyprus/10 dark:bg-[#CF9D7B]/10 p-2.5 rounded-2xl transition-colors duration-300">

                  <section.icon
                    className="w-5 h-5 text-cyprus"
                  />

                </div>

                <h2 className="text-2xl font-black text-cyprus dark:text-[#CF9D7B] tracking-[0.2em] transition-colors duration-300">
                  {section.heading.toUpperCase()}
                </h2>

              </div>

              {/* Items */}
              <div className="flex flex-col gap-4">

                {section.items.map((item) => (

                  <Link
                    key={item.slug}
                    href={`/lifestyle/${item.slug}`}
                    className="flex items-center justify-between bg-[#FAFAFA] dark:bg-[#0C1519] border-2 border-cyprus/20 dark:border-[#CF9D7B]/20 hover:border-cyprus dark:hover:border-[#CF9D7B] hover:bg-cyprus dark:hover:bg-[#CF9D7B] text-cyprus dark:text-[#CF9D7B] hover:text-[#FAFAFA] dark:hover:text-[#0C1519] rounded-2xl px-5 py-4 transition-all duration-300 shadow-sm hover:shadow-md group"
                  >

                    <span className="font-bold text-lg">
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