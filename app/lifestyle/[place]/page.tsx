"use client"

import Image from "next/image"
import Link from "next/link"

import { useParams } from "next/navigation"
import { useState, useEffect } from "react"

import {
  ArrowLeft,
  MapPin
} from "lucide-react"
import { ThemeToggle } from "../../../components/ThemeToggle"
import { BackgroundShapes } from "../../../components/BackgroundShapes"

export default function PlacePage() {

  const params = useParams()

  const place = params.place as string

  const places: Record<string, any> = {

    "kayalpuram": {

      title: "Kayalpuram",

      description:
        "Kayalpuram is a scenic village located in the Kuttanad taluk of the Alappuzha district in Kerala, India. Known for its quintessential backwater charm, it is a popular spot for its sunset views and religious significance, particularly centered around the local church.",

      images: [
        "/lifestyle/kayalpuram/1.png",
        "/lifestyle/kayalpuram/2.png",
        "/lifestyle/kayalpuram/3.png"
      ],

      map:
        "https://www.google.com/maps?q=Kayalpuram+Kerala&output=embed"
    },

    "tasty-grillz": {

      title: "Tasty Grillz",

      description:
        "Popular student-friendly food spot near CUCEK known for grilled dishes, shawarma and fast service.",

      images: [
        "/lifestyle/tasty-grillz/1.png",
        "/lifestyle/tasty-grillz/2.png",
        "/lifestyle/tasty-grillz/3.png"
      ],

     map:
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.542294172117!2d76.4364739366753!3d9.46147086055905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0883003354ed95%3A0xcfe0834fefcee85b!2sTASTY%20GRILLZ%20near%20body%20style%20gym%20pulinkunnu!5e0!3m2!1sen!2sin!4v1778390649896!5m2!1sen!2sin"
    },
    "pulinkunnu-vallamkali": {

  title: "Pulinkunnu Vallamkali (Rajiv Gandhi Trophy)",

  description:
    "The Rajiv Gandhi Trophy Boat Race, locally known as Pulinkunnu Vallamkali, is an annual snake boat race held on the last Saturday of August (or early September) at the Pampa River in Pulinkunnu, Alappuzha, Kerala. It commemorates late Prime Minister Rajiv Gandhi's 1985 visit to Kuttanad and features high-speed competition among Chundan Vallams (snake boats).",

  images: [
    "/lifestyle/pulinkunnu-vallamkali/1.png",
    "/lifestyle/pulinkunnu-vallamkali/2.png",
    "/lifestyle/pulinkunnu-vallamkali/3.png"
  ],

  map:
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62966.16829032196!2d76.35572414987463!3d9.47515689476535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b089d4ef11fb661%3A0xc103950b5053cb0!2sRajiv%20Gandhi%20Trophy%20Boat%20Race%20Starting%20Point!5e0!3m2!1sen!2sin!4v1778390618409!5m2!1sen!2sin"
},
"taste-of-arabia": {

  title: "Taste of Arabia",

  description:
    "This shop bridges the gap between home-cooked quality and fast-food convenience, offering a menu rooted in authentic, homemade flavors. Operating exclusively for takeaway and delivery, it serves as a reliable neighborhood staple for those seeking a real meal on the go. With delivery services running until 11 PM, it ensures that even late-night diners can enjoy the comfort of a fresh, handcrafted meal delivered straight to their door.",

  images: [
    "/lifestyle/taste-of-arabia/1.png"
  ],

  map:
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4030099.000144584!2d71.56913011249998!3d9.452620699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b089dc5651c94ff%3A0xb2407ad5da0fb84!2sTaste%20of%20arabia!5e0!3m2!1sen!2sin!4v1778390676062!5m2!1sen!2sin"
},
"daddy-cafe": {

  title: "Daddy's Cafe",

  description:
    "Daddy’s Cafe is a standard fast food shop situated in a high-traffic area. It serves a routine selection of quick-service meals and beverages to a steady stream of customers. The interior features basic seating and a simplified counter designed for efficiency and speed.",

  images: [
    "/lifestyle/daddy-cafe/1.png"
  ],

  map:
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.97193277515217!2d76.4398664!3d9.4607169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0882b390f607a1%3A0xe021af8676e2c38!2sDADDYS%20CAFE!5e0!3m2!1sen!2sin!4v1778390274249!5m2!1sen!2sin"
},
"body-style-gym": {

  title: "Body Style Fitness Centre & Multi Gym",

  description:
    "Body Style Fitness Centre & Multi Gym, located in Pullinkunnu, Kerala, is a highly-rated fitness facility. It is known for its premium equipment and professional training, particularly science-based coaching provided by trainers like Sethu.",

  images: [
    "/lifestyle/body-style-gym/1.png",
    "/lifestyle/body-style-gym/2.png",
    "/lifestyle/body-style-gym/3.png"
  ],

  map:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.97180242127976!2d76.43937641988339!3d9.460899114596824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0882b391dcd73b%3A0x426184d6c11acea2!2sBody%20Style%20Fitness%20Centre%20%26%20Multi%20Gym!5e0!3m2!1sen!2sin!4v1778390832737!5m2!1sen!2sin"
},
"cucek-gym": {

  title: "CUCEK Gym",

  description:
    "The gym at CUCEK offers a functional space for students to focus on their physical fitness between classes. It features a selection of essential strength training equipment and free weights suited for daily workouts. The facility provides a convenient environment for maintaining an active lifestyle right on campus.",

  images: [
    "/lifestyle/cucek-gym/1.png"
  ],

  map:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.97201825996686!2d76.43735311184352!3d9.460597403533425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0882b44325a447%3A0x5969418b179dd05b!2sFC6P%2B6W6%2C%20Pullinkunnu%2C%20Kerala%20688504!5e0!3m2!1sen!2sin!4v1778391132597!5m2!1sen!2sin"
},
"ice-spot": {

  title: "Ice Spot",

  description:
    "Ice Spot is a straightforward dessert shop that focuses on quick-service frozen treats. The menu mainly consists of standard ice cream scoops and various flavored ice bars for a quick snack. With its basic seating and functional layout, it serves as a simple stop for students and locals looking to cool off.",

  images: [
    "/lifestyle/ice-spot/1.png",
    "/lifestyle/ice-spot/2.png",
    "/lifestyle/ice-spot/3.png"
  ],

  map:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d983.8886876976405!2d76.43901118295503!3d9.46038259720136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08830010e73079%3A0x14e7e7cfb9b4798b!2sIcespot%20Pulinkunnu!5e0!3m2!1sen!2sin!4v1778392758448!5m2!1sen!2sin"
},
"mc-store": {

  title: "MC Store",

  description:
    "MC Store provides a streamlined shopping experience focused on high-demand consumer products and everyday supplies. The layout is designed for convenience, offering everything from packaged snacks to common domestic utilities. It is a practical neighborhood fixture where customers can depend on finding consistent stock for their immediate needs.",

  images: [
    "/lifestyle/mc-store/1.png",
    "/lifestyle/mc-store/2.png",
    "/lifestyle/mc-store/3.png"
  ],

  map:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d983.9001481653684!2d76.43805465687134!3d9.45637658697824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b089d4b5ca8577d%3A0x9d4532ea1e55ba7e!2sM%20C%20Store!5e0!3m2!1sen!2sin!4v1778393184824!5m2!1sen!2sin"
},

"extra-traders": {

  title: "Extra Traders",

  description:
    "Extra Traders is a versatile general-purpose store stocked with a wide range of daily essentials and household goods. From pantry staples to basic hardware, the shop is organized for quick navigation and efficient shopping. It serves as a reliable one-stop destination for locals looking to pick up multiple necessities in a single visit.",

  images: [
    "/lifestyle/extra-traders/1.png",
    "/lifestyle/extra-traders/2.png",
    "/lifestyle/extra-traders/3.png"
  ],

  map:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.97479133487485!2d76.43827610000001!3d9.4567202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b089d4b51b93179%3A0x49dba25652b7361b!2sExtra%20Traders!5e0!3m2!1sen!2sin!4v1778393303496!5m2!1sen!2sin"
},

"sms-store": {

  title: "SMS Store",

  description:
    "SMS Store is a compact retail outlet specializing in a variety of everyday sundries and essential household items. The shop focuses on providing a quick, accessible inventory for customers looking for routine supplies in a hurry. Its functional setup ensures a fast and efficient experience for the local community's daily shopping needs.",

  images: [
    "/lifestyle/sms-store/1.png"
  ],

  map:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.97263089236583!2d76.43863618656378!3d9.459740980682753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08831a40fc8ba1%3A0x96e7a583643d6a73!2sSMS%20STORE!5e0!3m2!1sen!2sin!4v1778393363307!5m2!1sen!2sin"
},
"hospitals": {

  title: "Taluk Head Quarters Hospital Pulinkunnu",

  description:
    "Taluk Head Quarters Hospital Pulinkunnu is a major government medical center providing 24-hour casualty and emergency services along with round-the-clock laboratory diagnostics. The facility features comprehensive Inpatient (IP) and Outpatient (OP) departments to support the healthcare needs of the Kuttanad region. It serves as a vital 24/7 lifeline for Alappuzha, ensuring accessible medical care and essential infrastructure for the local community. The hospital also has its own pharmacy store where medicines are available at lower prices.",

  images: [
    "/lifestyle/hospitals/1.png",
    "/lifestyle/hospitals/2.png",
    "/lifestyle/hospitals/3.png"
  ],

  map:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.2319014748596!2d76.43877856409455!3d9.445519804764036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b089d46191ad799%3A0xaa344b756bd77b67!2sTaluk%20Head%20Quarters%20Hospital%20Pulinkunnu!5e1!3m2!1sen!2sin!4v1778395103929!5m2!1sen!2sin"
},

"pharmacies": {

  title: "Central Medicals",

  description:
    "Central Medicals is your trusted local pharmacy, dedicated to providing a wide range of essential medicines and healthcare products with a commitment to quality care. Our friendly and knowledgeable staff is here to assist you with all your prescription and wellness needs in a welcoming environment. Please note that we are open daily to serve the community until our doors close at 7 PM.",

  images: [
    "/lifestyle/pharmacies/1.png"
  ],

  map:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.98003008062457!2d76.44041650768432!3d9.449391291149684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b089d49b3236227%3A0x55a3b70a41e4c900!2sPanangadans%20Medical%20Store!5e0!3m2!1sen!2sin!4v1778395587185!5m2!1sen!2sin"
},
"churches": {

  title: "Churches in Pulinkunnu",

  description:
    "Pulinkunnu is home to several churches that serve as important spiritual and cultural landmarks within the Kuttanad region. These churches are deeply connected to the local community and reflect the traditional Christian heritage of the area. Beyond worship, many also function as gathering spaces during festivals, celebrations and charitable activities throughout the year.",

  images: [
    "/lifestyle/churches/1.png",
    "/lifestyle/churches/2.png",
    "/lifestyle/churches/3.png",
    "/lifestyle/churches/4.png",
    "/lifestyle/churches/5.png",
  ],

  map:
  "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31484.580363819514!2d76.42404406699082!3d9.458827762191282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1schurches%20near%20Pulinkunnoo%2C%20Pullinkunnu%2C%20Kuttanad%20Taluk%2C%20Kerala!5e0!3m2!1sen!2sin!4v1778396387427!5m2!1sen!2sin"
},
"temples": {

  title: "Temples in Pulinkunnu",

  description:
    "Pulinkunnu and the surrounding Kuttanad region are home to several culturally important temples that reflect Kerala’s deep spiritual traditions. Notable temples include Koyical Bhadrakali Temple, known for its local festivals and traditional rituals; Sree Narayana Guru Temple, which serves as a peaceful spiritual center inspired by the teachings of Sree Narayana Guru; and Kannady Padinjare Madom Sree Bhagavathi Temple, a respected temple recognized for its heritage and community gatherings. These temples continue to play a major role in religious celebrations and local cultural life throughout the year.",

  images: [
    "/lifestyle/temples/1.png",
    "/lifestyle/temples/2.png",
    "/lifestyle/temples/3.png",
    "/lifestyle/temples/4.png",

  ],

  map:
    "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7871.203700291076!2d76.43503039489568!3d9.456266674789283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stemplesnear%20pulinkunnoo%2C%20pullinkunnu%2C%20kuttanad%20taluk%2C%20kerala!5e0!3m2!1sen!2sin!4v1778396499155!5m2!1sen!2sin"
},
"mosques": {

  title: "Mosques in Pulinkunnu",

  description:
    "Mosques in Pulinkunnu serve as important centers for worship, community gatherings and religious education within the Kuttanad region. Institutions such as Muhyadheen Juma Masjid play a central role in the daily spiritual life of local residents while also contributing to social and charitable activities. These mosques reflect the longstanding Muslim heritage of the area and remain active gathering spaces during festivals, Friday prayers and community events.",

  images: [
    "/lifestyle/mosques/1.png",
    "/lifestyle/mosques/2.png",
    "/lifestyle/mosques/3.png",
    "/lifestyle/mosques/4.png"
  ],

  map:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15742.734813490697!2d76.41210347414017!3d9.44910945157795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b089d364e60bae3%3A0xb89eaaed4fc10ebc!2sMuhyadheen%20Juma%20masjid!5e0!3m2!1sen!2sin!4v1778397091799!5m2!1sen!2sin"
},
  }

  const currentPlace = places[place]
  const displayImages = currentPlace ? currentPlace.images.slice(0, 3) : []

  const [positions, setPositions] = useState(() => {
    if (displayImages.length === 2) return ["center", "right"];
    return ["center", "right", "left"];
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (positions.length > 1) {
        setPositions((prev) => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [positions]);

  if (!currentPlace) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sand-dune">
        <h1 className="text-3xl font-bold text-cyprus">Place not found</h1>
      </div>
    );
  }

  const handleShuffle = () => {
    if (positions.length > 1) {
      setPositions((prev) => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
    }
  };

  const colors = ["bg-[#FAFAFA]", "bg-gray-50", "bg-gray-100"];

  return (
    <div className="relative min-h-screen bg-sand-dune dark:bg-[#0C1519] px-6 py-12 overflow-hidden isolate transition-colors duration-300">

      <ThemeToggle />
      <BackgroundShapes />

      <div className="relative z-10 max-w-5xl mx-auto mt-4 md:mt-12">

        {/* Back Button */}
        <Link
          href="/lifestyle"
          className="inline-flex items-center gap-2 text-cyprus dark:text-[#CF9D7B] px-4 py-2 -ml-4 rounded-full hover:bg-cyprus dark:hover:bg-[#CF9D7B] hover:text-[#FAFAFA] dark:hover:text-[#0C1519] transition-colors mb-10 group"
        >

          <ArrowLeft
            size={20}
            className="transition-transform group-hover:-translate-x-1"
          />

          <span className="font-bold tracking-tight uppercase text-sm">
            Back to Lifestyle
          </span>

        </Link>

        {/* Info & Photos Shuffle */}
        <div className="bg-[#FAFAFA] dark:bg-[#0C1519] border-2 border-cyprus dark:border-[#CF9D7B] p-8 md:p-12 rounded-[2.5rem] shadow-sm flex flex-col md:flex-row items-center gap-12 mb-12 animate-in fade-in slide-in-from-bottom duration-700 hover:bg-cyprus dark:hover:bg-[#CF9D7B] group transition-colors duration-300">
          <div className="flex-1 w-full">
            <h1 className="text-4xl md:text-5xl font-black text-cyprus dark:text-[#CF9D7B] group-hover:text-[#FAFAFA] dark:group-hover:text-[#0C1519] tracking-tight mb-6 transition-colors duration-300">
              {currentPlace.title}
            </h1>
            <p className="text-cyprus/70 dark:text-[#CF9D7B]/70 group-hover:text-[#FAFAFA]/80 dark:group-hover:text-[#0C1519]/80 text-lg leading-relaxed transition-colors duration-300">
              {currentPlace.description}
            </p>
          </div>

          {/* 3-Card Shuffle Side */}
          <div 
            className="relative w-full max-w-[280px] h-[180px] md:max-w-[320px] md:h-[220px] shrink-0 cursor-pointer mt-4 md:mt-0" 
            onClick={handleShuffle}
            title="Click to shuffle photos"
          >
            {displayImages.map((image: string, idx: number) => {
              const pos = positions[idx];
              let styles = "";
              if (pos === "center") {
                styles = "z-20 scale-100 translate-y-0 translate-x-0 opacity-100 shadow-xl";
              } else if (pos === "right") {
                styles = "z-10 scale-90 translate-x-8 md:translate-x-12 translate-y-4 md:translate-y-6 opacity-60 shadow-md";
              } else {
                styles = "z-10 scale-90 -translate-x-8 md:-translate-x-12 translate-y-4 md:translate-y-6 opacity-60 shadow-md";
              }

              return (
                <div 
                  key={image}
                  className={`absolute top-0 left-0 w-full h-full rounded-2xl border overflow-hidden flex flex-col items-center justify-center transition-all duration-500 ease-in-out border-cyprus/10 dark:border-[#CF9D7B]/10 ${colors[idx] || "bg-[#FAFAFA]"} ${styles}`}
                >
                  <Image 
                    src={image} 
                    alt={currentPlace.title} 
                    fill 
                    className="object-cover" 
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Map Embed */}
        {currentPlace.map && (
          <div className="w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden border-2 border-cyprus dark:border-[#CF9D7B] shadow-sm animate-in fade-in slide-in-from-bottom duration-700 delay-300 transition-colors duration-300">
            <iframe
              src={currentPlace.map}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}