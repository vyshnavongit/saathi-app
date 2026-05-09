"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Camera,
  Palette,
  Trophy,
  Code,
  Users2,
  Leaf,
  Lightbulb,
  Image as ImageIcon,
  ChevronDown,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Star
} from "lucide-react"

// --- ClubCard Component ---
function ClubCard({ item }: { item: any }) {
  // We track the positions of the 3 cards.
  const [positions, setPositions] = useState([
    "center", // Card 1 starts at center
    "right",  // Card 2 starts at right
    "left"    // Card 3 starts at left
  ]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const intervalId = setInterval(() => {
      setPositions((prev) => [prev[2], prev[0], prev[1]]);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [isOpen]);

  const handleShuffle = () => {
    // Cycle the positions to shuffle the cards
    setPositions(prev => [prev[2], prev[0], prev[1]]);
  };

  const colors = isOpen 
    ? ["bg-[#FAFAFA]/10", "bg-[#FAFAFA]/20", "bg-[#FAFAFA]/30"] 
    : ["bg-cyprus/10", "bg-cyprus/20", "bg-cyprus/30"];

  return (
    <div className={`group p-6 md:p-8 rounded-3xl transition-all duration-300 flex flex-col gap-6 border-2 border-cyprus shadow-sm hover:shadow-md cursor-pointer ${isOpen ? "bg-cyprus text-[#FAFAFA]" : "bg-[#FAFAFA] text-cyprus hover:bg-cyprus hover:text-[#FAFAFA]"}`}>
      
      {/* Header / Option Trigger */}
      <div 
        className="flex items-center justify-between w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <div className={`p-4 rounded-2xl transition-colors duration-300 ${isOpen ? "bg-[#FAFAFA] text-cyprus" : "bg-cyprus/10 group-hover:bg-[#FAFAFA] group-hover:text-cyprus"}`}>
            <item.icon className="w-8 h-8" />
          </div>
          <h3 className="font-bold text-2xl">{item.name}</h3>
        </div>
        <div className={`transition-all duration-300 ${isOpen ? "rotate-180 text-[#FAFAFA]/70" : "rotate-0 opacity-50 group-hover:opacity-100"}`}>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>

      {/* Expandable Content (Placeholders inside the option) */}
      {isOpen && (
        <div className={`flex flex-col md:flex-row items-center gap-12 pt-4 border-t animate-in fade-in slide-in-from-top-4 duration-500 ${isOpen ? "border-[#FAFAFA]/20" : "border-cyprus/10"}`}>
          
          {/* Text / Info Side */}
          <div className="flex-1 w-full">
            <p className={`leading-relaxed text-sm md:text-base ${isOpen ? "text-[#FAFAFA]/90" : "text-cyprus/80"}`}>
              {item.description}
            </p>
          </div>

          {/* 3-Card Shuffle Side */}
          <div 
            className="relative w-full max-w-[260px] h-[160px] shrink-0 cursor-pointer mt-4 md:mt-0" 
            onClick={(e) => {
              e.stopPropagation(); // prevent accordion toggle
              handleShuffle();
            }}
            title="Click to shuffle photos"
          >
            {item.photos.map((photo: any, idx: number) => {
              const pos = positions[idx];
              
              let styles = "";
              if (pos === "center") {
                styles = "z-20 scale-100 translate-y-0 translate-x-0 opacity-100 shadow-xl";
              } else if (pos === "right") {
                styles = "z-10 scale-90 translate-x-8 md:translate-x-12 translate-y-4 md:translate-y-6 opacity-60 shadow-md";
              } else if (pos === "left") {
                styles = "z-10 scale-90 -translate-x-8 md:-translate-x-12 translate-y-4 md:translate-y-6 opacity-60 shadow-md";
              }

              return (
                <div 
                  key={photo.id}
                  className={`absolute top-0 left-0 w-full h-full rounded-2xl border flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${colors[idx]} ${styles} ${isOpen ? "border-[#FAFAFA]/20" : "border-cyprus/10"}`}
                >
                  <ImageIcon className={`w-8 h-8 mb-2 ${isOpen ? "text-[#FAFAFA]/60" : "text-cyprus/40"}`} />
                  <span className={`font-semibold text-sm px-2 text-center ${isOpen ? "text-[#FAFAFA]/80" : "text-cyprus/60"}`}>{photo.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// --- Main Page Component ---
export default function ClubsPage() {
  const clubs = [
    { 
      name: "Sports Club", 
      icon: Trophy,
      description: "Join the Sports Club to stay active, participate in inter-college tournaments, and build team spirit. We host events for football, basketball, cricket, and athletics.",
      photos: [ { id: 1, label: "Football" }, { id: 2, label: "Basketball" }, { id: 3, label: "Athletics" } ]
    },
    { 
      name: "Photography Club", 
      icon: Camera,
      description: "Capture the best moments on campus. From workshops on DSLR basics to photo walks and exhibitions, the Photography Club is for everyone who loves the lens.",
      photos: [ { id: 1, label: "Portraits" }, { id: 2, label: "Landscapes" }, { id: 3, label: "Events" } ]
    },
    { 
      name: "Arts Club", 
      icon: Palette,
      description: "Unleash your creativity with the Arts Club. Whether you are into painting, sketching, digital art, or crafts, we provide a welcoming space to express yourself.",
      photos: [ { id: 1, label: "Painting" }, { id: 2, label: "Sketching" }, { id: 3, label: "Exhibition" } ]
    }
  ]

  const communities = [
    { 
      name: "TinkerHub", 
      icon: Code,
      description: "A community of tech enthusiasts and innovators. Build projects, participate in hackathons, and learn the latest technologies together with peers.",
      photos: [ { id: 1, label: "Hackathon" }, { id: 2, label: "Workshops" }, { id: 3, label: "Projects" } ]
    },
    { 
      name: "Skill Development Club", 
      icon: Lightbulb,
      description: "Focus on enhancing your soft skills, leadership qualities, and professional development to prepare for the career ahead.",
      photos: [ { id: 1, label: "Seminars" }, { id: 2, label: "Public Speaking" }, { id: 3, label: "Networking" } ]
    },
    { 
      name: "Lenient Tree", 
      icon: Leaf,
      description: "Our environmental and nature club. Participate in tree planting drives, sustainability campaigns, and nature awareness programs.",
      photos: [ { id: 1, label: "Plantation" }, { id: 2, label: "Cleanup Drives" }, { id: 3, label: "Awareness" } ]
    },
    { 
      name: "μLearn", 
      icon: Users2,
      description: "An industry-academia community helping students learn new skills, network with professionals, and get career-ready through mentorship.",
      photos: [ { id: 1, label: "Bootcamps" }, { id: 2, label: "Mentorship" }, { id: 3, label: "Meetups" } ]
    }
  ]

  return (
    <div className="relative min-h-screen bg-sand-dune px-6 py-12 overflow-hidden isolate">
      {/* Background blobs (fixed so they remain during scroll) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
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

      <div className="relative z-10 max-w-5xl mx-auto mt-4 md:mt-12">
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

        <div className="flex flex-col gap-24">
          <section className="animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-2xl font-black text-cyprus tracking-[0.2em] mb-12 border-b border-cyprus/10 pb-4">
              CLUBS
            </h2>
            <div className="flex flex-col gap-8">
              {clubs.map((club) => (
                <ClubCard key={club.name} item={club} />
              ))}
            </div>
          </section>

          <section className="animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            <h2 className="text-2xl font-black text-cyprus tracking-[0.2em] mb-12 border-b border-cyprus/10 pb-4">
              COMMUNITIES
            </h2>
            <div className="flex flex-col gap-8">
              {communities.map((community) => (
                <ClubCard key={community.name} item={community} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}