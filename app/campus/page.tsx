"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Map as MapIcon,
  Building,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Star,
  User,
  Phone,
  MapPin
} from "lucide-react"

export default function CampusPage() {
  const [activeView, setActiveView] = useState<"campusMap" | "hostelInfo" | "hostelMap">("campusMap");
  const [activeTab, setActiveTab] = useState<"ladies" | "gents">("ladies");

  const ladiesHostels = [
    { name: "Aiswarya Hostel, Njanjaakkal, Pulincunnoo", contact: "Santhosh", phone: "9142246206" },
    { name: "Anija's Hostel, Padithara House, Pulincunnoo", contact: "Anija", phone: "8157987895" },
    { name: "Anju Home Stay, Njanjaakkal, Pulincunnoo", contact: "Jayamma", phone: "9539997672" },
    { name: "Arikudy Ladies Hostel, Near Circle Office, Pulincunnoo", contact: "Mathew Kuruvila", phone: "9447553423" },
    { name: "Asha Homestay", contact: "Sambanna Kumar", phone: "8075264588" },
    { name: "Babus Hostel, Opposite Engineering College", contact: "Sureshkumar A S", phone: "8848476768" },
    { name: "College Girls Hostel (Petals Hostel)", contact: "Principal, CUCEK", phone: "04772707500" },
    { name: "K.M Hostel", contact: "Mahesh", phone: "7594025753" },
    { name: "Manalayil", contact: "Animma Varghese", phone: "8376945147" },
    { name: "Muppathilchira Girls Hostel", contact: "M C Varghese", phone: "9656499882" },
    { name: "Padisserry Home Stay, Opposite Engineering College", contact: "Saji Satheesh", phone: "9061815862" },
    { name: "Punnoor Hostel", contact: "Mathew Chacko", phone: "9745069107" },
    { name: "Radhamadhavam, Near Engineering College", contact: "Ajitha Radhakrishnan", phone: "9349524770" },
    { name: "Raj Nivas", contact: "Biju K R", phone: "9447500490" },
    { name: "S H Hostel", contact: "Sister Ritty Maria", phone: "9946332043" },
    { name: "S S Hostel", contact: "Sajeev P Thomas", phone: "9995051567" },
    { name: "Sarang", contact: "Dhanya Mol T D", phone: "8078523371" },
    { name: "Vithuvattickal", contact: "Jolly James", phone: "9447500633" }
  ];

  const gentsHostels = [
    { name: "Abhi Hostel, Kattathara, Pulincunnoo", contact: "Ashok Kumar", phone: "7034244402" },
    { name: "Adhish Home Stay", contact: "K K Soman", phone: "9605346250" },
    { name: "Adithya Hostel", contact: "Sunilkumar", phone: "7597432572" },
    { name: "Ajayakumar Hostel", contact: "Ajayakumar", phone: "9946458384" },
    { name: "Alex Prayikkalam Hostel", contact: "Alex", phone: "9495152414" },
    { name: "Alphy Hostel", contact: "Tomichan Joseph", phone: "9846250711" },
    { name: "Aradhana Hostel", contact: "George Sebastian", phone: "9400159410" },
    { name: "Arikkudy Doctors Hostel", contact: "Dr. Babukutty", phone: "8301051243" },
    { name: "BIG B0 Hostel", contact: "Pratheesh Thomas", phone: "9562335352" },
    { name: "Bobys Boys Hostel", contact: "Mathew N K", phone: "9745593343" },
    { name: "Damodaran Valikketti Hostel", contact: "Damodaran Valikketti", phone: "9405636354" },
    { name: "Devu Home Stay", contact: "Kunjumon", phone: "9447375502" },
    { name: "Gourisankaram Hostel", contact: "Ajay Ramachandran", phone: "8893183559" },
    { name: "Heavens Hostel, Near Fathima Matha Church", contact: "Antony P J", phone: "9495854345" },
    { name: "Jayasree Hostel, Near Gym", contact: "Susheelan", phone: "9446316133" },
    { name: "Kairali Hostel, Pottumuppathu", contact: "Rajesh K", phone: "9447732331" },
    { name: "Kaithapparambu Boys Hostel, Near College", contact: "Krishnan Kutty", phone: "7034310085" },
    { name: "Kanachery Hostel, Near Gym", contact: "Thankachan Kanachery", phone: "9447108165" },
    { name: "Karrathara Hostel, Near CI Office", contact: "Akhilesh", phone: "9497220275" },
    { name: "Konnlyada Hostel, Near Old CI Office", contact: "Pankajakshan Nair", phone: "9946921751" },
    { name: "Krupa Hostel, Near Gym", contact: "Roji Antony", phone: "9846426572" },
    { name: "Lajeesh Hostel", contact: "N Lajeesh", phone: "9539074453" },
    { name: "LRS 1, Panithkkal H, Pulincunnu", contact: "Rani Louis", phone: "9447140358" },
    { name: "LRS 2, Panithkkal H, Pulincunnu", contact: "Rani Louis", phone: "9447140358" },
    { name: "M C Hostel", contact: "Sebastian Varghese", phone: "9846634939" },
    { name: "M C Hostel (M C Stores)", contact: "M C Jacob", phone: "9447457555" },
    { name: "Manalayil Boys Hostel 2", contact: "Alice Abraham", phone: "8921262136" },
    { name: "Manoj Kanachery Hostel", contact: "Manoj Kanachery", phone: "9495352419" },
    { name: "Michael Hostel", contact: "Michael", phone: "9447597335" },
    { name: "Nandanam Hostel", contact: "Ramesh Babu P K", phone: "9446143525" },
    { name: "Nasa Hostel", contact: "Thankappan", phone: "9048540306" },
    { name: "P K Kuttappan Hostel", contact: "P K Kuttappan", phone: "8547222071" },
    { name: "Parasseril Hostel", contact: "Manu Jacob", phone: "9495476920" },
    { name: "Patisseril Hostel", contact: "Sreekanth M", phone: "9497110380" },
    { name: "Purakkal Boys Hostel", contact: "P M Joseph", phone: "8589990859" },
    { name: "R K Hostel", contact: "Ratheesh Kumar K P", phone: "9747405320" },
    { name: "Shalom Hostel, Near MC Stores", contact: "Joji", phone: "9447504295" },
    { name: "Sreenandanam Hostel", contact: "Ratheesh", phone: "8590311364" },
    { name: "Syamala Hostel, Near Fathima Church", contact: "Syamala Monappah", phone: "9048497204" },
    { name: "Titto Hostel", contact: "Titto", phone: "9446923375" }
  ];

  const activeHostels = activeTab === "ladies" ? ladiesHostels : gentsHostels;

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
          Campus & Hostel
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-in fade-in slide-in-from-bottom duration-700">
          <button
            onClick={() => setActiveView("campusMap")}
            className={`flex-1 py-4 px-2 text-center rounded-2xl font-bold transition-all border-2 border-cyprus shadow-sm hover:shadow-md ${
              activeView === "campusMap"
                ? "bg-cyprus text-[#FAFAFA]"
                : "bg-[#FAFAFA] text-cyprus hover:bg-cyprus/10"
            }`}
          >
            Campus Map
          </button>
          <button
            onClick={() => setActiveView("hostelInfo")}
            className={`flex-1 py-4 px-2 text-center rounded-2xl font-bold transition-all border-2 border-cyprus shadow-sm hover:shadow-md ${
              activeView === "hostelInfo"
                ? "bg-cyprus text-[#FAFAFA]"
                : "bg-[#FAFAFA] text-cyprus hover:bg-cyprus/10"
            }`}
          >
            Hostel Info
          </button>
          <button
            onClick={() => setActiveView("hostelMap")}
            className={`flex-1 py-4 px-2 text-center rounded-2xl font-bold transition-all border-2 border-cyprus shadow-sm hover:shadow-md ${
              activeView === "hostelMap"
                ? "bg-cyprus text-[#FAFAFA]"
                : "bg-[#FAFAFA] text-cyprus hover:bg-cyprus/10"
            }`}
          >
            Hostel Maps
          </button>
        </div>

        <div className="flex flex-col">
          {/* Campus Map Section */}
          {activeView === "campusMap" && (
            <section className="animate-in fade-in slide-in-from-bottom duration-500">
              <div className="flex items-center gap-3 mb-8 border-b border-cyprus/10 pb-4">
                <MapIcon className="w-8 h-8 text-cyprus" />
                <h2 className="text-2xl font-black text-cyprus tracking-[0.2em]">
                  CAMPUS MAP
                </h2>
              </div>
              
              <div className="bg-[#FAFAFA] border-2 border-cyprus p-4 md:p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-full aspect-square md:aspect-[16/9] bg-cyprus/5 rounded-2xl border border-cyprus/10 overflow-hidden relative flex items-center justify-center">
                  <img 
                    src="/map.png" 
                    alt="Campus Map" 
                    className="absolute inset-0 w-full h-full object-contain object-center z-10"
                    onError={(e) => {
                      // Fallback if image not found
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="text-cyprus/40 flex flex-col items-center gap-2 absolute">
                    <MapIcon className="w-12 h-12" />
                    <span className="font-semibold text-center px-4">Map image goes here<br/>(Place `map.png` in your public folder)</span>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Hostel Facilities Section */}
          {activeView === "hostelInfo" && (
            <section className="animate-in fade-in slide-in-from-bottom duration-500">
              <div className="flex items-center gap-3 mb-8 border-b border-cyprus/10 pb-4">
                <Building className="w-8 h-8 text-cyprus" />
                <h2 className="text-2xl font-black text-cyprus tracking-[0.2em]">
                  HOSTEL FACILITIES
                </h2>
              </div>

              {/* Tab Controls */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setActiveTab("ladies")}
                  className={`flex-1 py-4 text-center rounded-2xl font-bold transition-all border-2 border-cyprus shadow-sm hover:shadow-md ${
                    activeTab === "ladies"
                      ? "bg-cyprus text-[#FAFAFA]"
                      : "bg-[#FAFAFA] text-cyprus hover:bg-cyprus/10"
                  }`}
                >
                  Ladies Hostels
                </button>
                <button
                  onClick={() => setActiveTab("gents")}
                  className={`flex-1 py-4 text-center rounded-2xl font-bold transition-all border-2 border-cyprus shadow-sm hover:shadow-md ${
                    activeTab === "gents"
                      ? "bg-cyprus text-[#FAFAFA]"
                      : "bg-[#FAFAFA] text-cyprus hover:bg-cyprus/10"
                  }`}
                >
                  Gents Hostels
                </button>
              </div>

              {/* Hostel List Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeHostels.map((hostel, index) => (
                  <div
                    key={index}
                    className="bg-[#FAFAFA] border-2 border-cyprus/20 p-5 rounded-2xl shadow-sm hover:border-cyprus hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <h3 className="font-bold text-cyprus text-lg mb-4">{hostel.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-cyprus/80">
                        <User className="w-4 h-4 shrink-0" />
                        <span className="text-sm font-medium">{hostel.contact}</span>
                      </div>
                      <a
                        href={`tel:${hostel.phone}`}
                        className="flex items-center gap-2 text-cyprus hover:text-opacity-70 transition-colors w-max"
                      >
                        <Phone className="w-4 h-4 shrink-0" />
                        <span className="text-sm font-bold">{hostel.phone}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Hostel Maps Section */}
          {activeView === "hostelMap" && (
            <section className="animate-in fade-in slide-in-from-bottom duration-500">
              <div className="flex items-center gap-3 mb-8 border-b border-cyprus/10 pb-4">
                <MapPin className="w-8 h-8 text-cyprus" />
                <h2 className="text-2xl font-black text-cyprus tracking-[0.2em]">
                  HOSTEL MAPS
                </h2>
              </div>
              
              {/* Tab Controls */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setActiveTab("ladies")}
                  className={`flex-1 py-4 text-center rounded-2xl font-bold transition-all border-2 border-cyprus shadow-sm hover:shadow-md ${
                    activeTab === "ladies"
                      ? "bg-cyprus text-[#FAFAFA]"
                      : "bg-[#FAFAFA] text-cyprus hover:bg-cyprus/10"
                  }`}
                >
                  Ladies Hostels Map
                </button>
                <button
                  onClick={() => setActiveTab("gents")}
                  className={`flex-1 py-4 text-center rounded-2xl font-bold transition-all border-2 border-cyprus shadow-sm hover:shadow-md ${
                    activeTab === "gents"
                      ? "bg-cyprus text-[#FAFAFA]"
                      : "bg-[#FAFAFA] text-cyprus hover:bg-cyprus/10"
                  }`}
                >
                  Gents Hostels Map
                </button>
              </div>

              <div className="bg-[#FAFAFA] border-2 border-cyprus p-4 md:p-6 rounded-3xl shadow-sm">
                <div className="w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl border border-cyprus/10 overflow-hidden relative">
                  {activeTab === "ladies" ? (
                    <iframe src="https://maps.google.com/maps?q=ladies+hostels+near+CUCEK,+Pulincunnoo&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{border: 0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0"></iframe>
                  ) : (
                    <iframe src="https://maps.google.com/maps?q=mens+hostels+near+CUCEK,+Pulincunnoo&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{border: 0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0"></iframe>
                  )}
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}