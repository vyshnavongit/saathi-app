"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin, Navigation, Phone, ArrowRightLeft, ChevronLeft } from "lucide-react"
import { ThemeToggle } from "../../components/ThemeToggle"
import { BackgroundShapes } from "../../components/BackgroundShapes"

export default function TransportPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isChnToKyp, setIsChnToKyp] = useState(true);
  const [isAlpToTty, setIsAlpToTty] = useState(true);
  const [activeRoute, setActiveRoute] = useState<number | null>(null);

  const options = [
    { id: "bus-timing", name: "Bus Timing", icon: Clock },
    { id: "bus-stops", name: "Bus Stops", icon: MapPin },
    { id: "autorickshaws", name: "Autorickshaws", icon: Navigation },
  ];

  const routeData: Record<number, { from: string, to: string, timings: string[][] }> = {
    1: {
      from: "Alappuzha", to: "Thattassery",
      timings: [["5.30 AM", "6.15 AM"], ["6.10 AM", "6.55 AM"], ["6.40 AM", "7.25 AM"], ["7.10 AM", "7.55 AM"], ["7.40 AM", "8.25 AM"], ["8.00 AM", "8.45 AM"], ["8.30 AM", "9.15 AM"], ["9.00 AM", "9.45 AM"], ["9.20 AM", "10.05 AM"], ["9.50 AM", "10.35 AM"], ["10.30 AM", "11.15 AM"], ["11.00 AM", "11.45 AM"], ["11.40 AM", "12.25 PM"], ["12.10 PM", "12.55 PM"], ["12.30 PM", "1.15 PM"], ["1.20 PM", "2.05 PM"], ["1.40 PM", "2.25 PM"], ["2.00 PM", "2.45 PM"], ["2.30 PM", "3.15 PM"], ["3.00 PM", "3.45 PM"], ["3.50 PM", "4.35 PM"], ["4.10 PM", "4.55 PM"], ["4.30 PM", "5.15 PM"], ["5.10 PM", "5.55 PM"], ["6.00 PM", "6.45 PM"], ["6.40 PM", "7.25 PM"], ["7.40 PM", "8.25 PM"]]
    },
    2: {
      from: "Thattassery", to: "Alappuzha",
      timings: [["6.40 AM", "7.25 AM"], ["7.40 AM", "8.25 AM"], ["8.20 AM", "9.05 AM"], ["8.50 AM", "9.35 AM"], ["9.10 AM", "9.55 AM"], ["9.40 AM", "10.25 AM"], ["10.00 AM", "10.45 AM"], ["10.30 AM", "11.15 AM"], ["11.00 AM", "11.45 AM"], ["11.40 AM", "12.25 PM"], ["12.10 PM", "12.55 PM"], ["12.50 PM", "1.35 PM"], ["1.20 PM", "2.05 PM"], ["1.40 PM", "2.25 PM"], ["2.30 PM", "3.15 PM"], ["2.50 PM", "3.35 PM"], ["3.10 PM", "3.55 PM"], ["3.40 PM", "4.25 PM"], ["4.10 PM", "4.55 PM"], ["4.40 PM", "5.25 PM"], ["5.00 PM", "5.45 PM"], ["5.20 PM", "6.05 PM"], ["5.40 PM", "6.25 PM"], ["6.20 PM", "7.05 PM"], ["7.10 PM", "7.55 PM"], ["7.50 PM", "8.35 PM"], ["8.40 PM", "9.25 PM"]]
    },
    3: {
      from: "Changanassery", to: "Kayalpuram",
      timings: [["6.00 AM", "6.45 AM"], ["7.30 AM", "8.15 AM"], ["8.40 AM", "9.25 AM"], ["10.20 AM", "11.05 AM"], ["11.15 AM", "12.00 PM"], ["12.40 PM", "1.25 PM"], ["1.10 PM", "1.55 PM"], ["2.00 PM", "2.45 PM"], ["3.15 PM", "4.00 PM"], ["4.00 PM", "4.45 PM"], ["4.30 PM", "5.15 PM"], ["5.20 PM", "6.05 PM"], ["5.50 PM", "6.35 PM"], ["6.30 PM", "7.15 PM"], ["9.10 PM (Stay)", "9.55 PM"]]
    },
    4: {
      from: "Kayalpuram", to: "Changanassery",
      timings: [["5.20 AM", "6.05 AM"], ["7.15 AM", "8.00 AM"], ["8.30 AM", "9.15 AM"], ["8.50 AM", "9.35 AM"], ["10.00 AM", "10.45 AM"], ["11.30 AM", "12.15 PM"], ["12.30 PM", "1.15 PM"], ["2.25 PM", "3.10 PM"], ["3.15 PM", "4.00 PM"], ["4.15 PM", "5.00 PM"], ["5.15 PM", "6.00 PM"], ["5.45 PM", "6.30 PM"], ["7.05 PM", "7.50 PM"], ["7.40 PM", "8.25 PM"], ["8.00 PM", "8.45 PM"]]
    }
  };

  const autorickshawDrivers = [
    { name: "Raj Kumar", phone: "+91 98765 43210" },
    { name: "Suresh Singh", phone: "+91 98765 43211" },
    { name: "Ramesh Babu", phone: "+91 98765 43212" },
    { name: "Amit Patel", phone: "+91 98765 43213" },
    { name: "Vikram Sharma", phone: "+91 98765 43214" },
    { name: "Manoj Tiwari", phone: "+91 98765 43215" },
    { name: "Anil Yadav", phone: "+91 98765 43216" },
    { name: "Deepak Verma", phone: "+91 98765 43217" },
    { name: "Sunil Das", phone: "+91 98765 43218" },
    { name: "Sanjay Mishra", phone: "+91 98765 43219" },
  ];

  return (
    <div className="relative min-h-screen bg-sand-dune dark:bg-[#0C1519] px-6 py-12 overflow-hidden isolate transition-colors duration-300">
      
      <ThemeToggle />
      <BackgroundShapes />

      <div className="relative z-10 max-w-4xl mx-auto mt-4 md:mt-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-cyprus dark:text-[#CF9D7B] hover:opacity-70 transition-opacity mb-8 group"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          <span className="font-bold tracking-tight uppercase text-sm">Back to Home</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-cyprus dark:text-[#CF9D7B] mb-12 text-center tracking-tight animate-in fade-in slide-in-from-top duration-700 transition-colors duration-300">
          Transport
        </h1>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {options.map((option) => (
            <div 
              key={option.id} 
              className={`group p-5 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center gap-3 border-2 border-cyprus dark:border-[#CF9D7B] cursor-pointer text-center shadow-sm hover:shadow-md ${
                selectedOption === option.id 
                  ? "bg-cyprus dark:bg-[#CF9D7B] text-[#FAFAFA] dark:text-[#0C1519]" 
                  : "bg-[#FAFAFA] dark:bg-[#0C1519] text-cyprus dark:text-[#CF9D7B] hover:bg-cyprus dark:hover:bg-[#CF9D7B] hover:text-[#FAFAFA] dark:hover:text-[#0C1519]"
              }`}
              onClick={() => {
                setSelectedOption(selectedOption === option.id ? null : option.id);
                setActiveRoute(null);
              }}
            >
              <div className={`p-4 rounded-xl transition-colors duration-300 ${
                selectedOption === option.id
                  ? "bg-[#FAFAFA] dark:bg-[#0C1519] text-cyprus dark:text-[#CF9D7B]"
                  : "bg-cyprus/10 dark:bg-[#CF9D7B]/10 group-hover:bg-[#FAFAFA] dark:group-hover:bg-[#0C1519] group-hover:text-cyprus dark:group-hover:text-[#CF9D7B]"
              }`}>
                <option.icon className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold">{option.name}</h2>
            </div>
          ))}
        </div>

        {/* Content Area */}
        {selectedOption && (
          <div className="mt-8 p-8 rounded-2xl border-2 border-cyprus dark:border-[#CF9D7B] bg-[#FAFAFA] dark:bg-[#0C1519] shadow-sm animate-in fade-in zoom-in-95 duration-500 transition-colors duration-300">
             {selectedOption === "bus-timing" && (
               <div className="w-full">
                 <div className="flex flex-col items-center mb-8">
                   <Clock className="w-12 h-12 mb-3 text-cyprus/40 dark:text-[#CF9D7B]/40 transition-colors duration-300" />
                   <h3 className="text-xl font-bold text-cyprus dark:text-[#CF9D7B] text-center transition-colors duration-300">Bus Timing</h3>
                 </div>
                 
                 {!activeRoute ? (
                   <div className="flex flex-col gap-4 max-w-md mx-auto animate-in fade-in zoom-in-95 duration-300">
                     {/* Route 1/2: Alappuzha & Thattassery */}
                     <div 
                       className="group p-5 rounded-2xl flex items-center justify-between gap-4 border-2 border-cyprus dark:border-[#CF9D7B] bg-[#FAFAFA] dark:bg-[#0C1519] text-cyprus dark:text-[#CF9D7B] hover:bg-cyprus dark:hover:bg-[#CF9D7B] hover:text-[#FAFAFA] dark:hover:text-[#0C1519] shadow-sm hover:shadow-md cursor-pointer transition-all"
                       onClick={() => setActiveRoute(isAlpToTty ? 1 : 2)}
                     >
                       <span className="font-bold text-lg flex-1 text-center truncate">{isAlpToTty ? "Alappuzha" : "Thattassery"}</span>
                       <button 
                         onClick={(e) => { e.stopPropagation(); setIsAlpToTty(!isAlpToTty); }}
                         className="p-2.5 rounded-full bg-cyprus/10 dark:bg-[#CF9D7B]/10 group-hover:bg-[#FAFAFA] dark:group-hover:bg-[#0C1519] group-hover:text-cyprus dark:group-hover:text-[#CF9D7B] text-cyprus dark:text-[#CF9D7B] transition-colors shrink-0"
                         title="Reverse Direction"
                       >
                         <ArrowRightLeft className="w-5 h-5" />
                       </button>
                       <span className="font-bold text-lg flex-1 text-center truncate">{isAlpToTty ? "Thattassery" : "Alappuzha"}</span>
                     </div>

                     {/* Route 3/4: Changanassery & Kayalpuram */}
                     <div 
                       className="group p-5 rounded-2xl flex items-center justify-between gap-4 border-2 border-cyprus dark:border-[#CF9D7B] bg-[#FAFAFA] dark:bg-[#0C1519] text-cyprus dark:text-[#CF9D7B] hover:bg-cyprus dark:hover:bg-[#CF9D7B] hover:text-[#FAFAFA] dark:hover:text-[#0C1519] shadow-sm hover:shadow-md cursor-pointer transition-all"
                       onClick={() => setActiveRoute(isChnToKyp ? 3 : 4)}
                     >
                       <span className="font-bold text-lg flex-1 text-center truncate">{isChnToKyp ? "Changanassery" : "Kayalpuram"}</span>
                       <button 
                         onClick={(e) => { e.stopPropagation(); setIsChnToKyp(!isChnToKyp); }}
                         className="p-2.5 rounded-full bg-cyprus/10 dark:bg-[#CF9D7B]/10 group-hover:bg-[#FAFAFA] dark:group-hover:bg-[#0C1519] group-hover:text-cyprus dark:group-hover:text-[#CF9D7B] text-cyprus dark:text-[#CF9D7B] transition-colors shrink-0"
                         title="Reverse Direction"
                       >
                         <ArrowRightLeft className="w-5 h-5" />
                       </button>
                       <span className="font-bold text-lg flex-1 text-center truncate">{isChnToKyp ? "Kayalpuram" : "Changanassery"}</span>
                     </div>
                   </div>
                 ) : (
                   <div className="w-full max-w-2xl mx-auto animate-in fade-in slide-in-from-right-4 duration-300">
                     <button 
                       onClick={() => setActiveRoute(null)}
                       className="mb-6 inline-flex items-center gap-2 text-cyprus dark:text-[#CF9D7B] hover:opacity-70 transition-opacity font-bold uppercase text-sm tracking-tight"
                     >
                       <ChevronLeft className="w-5 h-5" />
                       Back to Routes
                     </button>
                     
                     <div className="border-2 border-cyprus dark:border-[#CF9D7B] rounded-2xl overflow-hidden bg-[#FAFAFA] dark:bg-[#0C1519] max-h-[400px] overflow-y-auto transition-colors duration-300">
                       <table className="w-full text-left border-collapse">
                         <thead className="bg-cyprus dark:bg-[#CF9D7B] text-[#FAFAFA] dark:text-[#0C1519] sticky top-0 shadow-sm transition-colors duration-300">
                           <tr>
                             <th className="p-4 font-bold text-center border-r border-[#FAFAFA]/20 dark:border-[#0C1519]/20 w-1/2">Departure ({routeData[activeRoute].from})</th>
                             <th className="p-4 font-bold text-center w-1/2">Arrival ({routeData[activeRoute].to})</th>
                           </tr>
                         </thead>
                         <tbody className="divide-y divide-cyprus/10 dark:divide-[#CF9D7B]/10">
                           {routeData[activeRoute].timings.map((timePair, idx) => (
                             <tr key={idx} className="hover:bg-cyprus/5 dark:hover:bg-[#CF9D7B]/5 transition-colors">
                               <td className="p-3 text-center border-r border-cyprus/10 dark:border-[#CF9D7B]/10 font-bold text-cyprus/90 dark:text-[#CF9D7B]/90">{timePair[0]}</td>
                               <td className="p-3 text-center font-medium text-cyprus/80 dark:text-[#CF9D7B]/80">{timePair[1]}</td>
                             </tr>
                           ))}
                         </tbody>
                       </table>
                     </div>
                   </div>
                 )}
               </div>
             )}
             
             {selectedOption === "bus-stops" && (
               <div className="w-full">
                 <div className="flex flex-col items-center mb-8">
                   <MapPin className="w-12 h-12 mb-3 text-cyprus/40 dark:text-[#CF9D7B]/40 transition-colors duration-300" />
                   <h3 className="text-xl font-bold text-cyprus dark:text-[#CF9D7B] text-center transition-colors duration-300">Bus Stops</h3>
                 </div>
                 <div className="w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden border-2 border-cyprus dark:border-[#CF9D7B] shadow-sm animate-in fade-in zoom-in-95 duration-500 transition-colors duration-300">
                   <iframe
                     src="https://www.google.com/maps/d/u/4/embed?mid=1ein7SL3J_g2PkgeO3t1jIqo6jxxEHsE&ehbc=2E312F&authuser=0"
                     width="100%"
                     height="100%"
                     style={{ border: 0 }}
                     allowFullScreen={false}
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                   ></iframe>
                 </div>
               </div>
             )}

             {selectedOption === "autorickshaws" && (
               <div className="w-full">
                 <div className="flex flex-col items-center mb-8">
                   <Navigation className="w-12 h-12 mb-3 text-cyprus/40 dark:text-[#CF9D7B]/40 transition-colors duration-300" />
                   <h3 className="text-xl font-bold text-cyprus dark:text-[#CF9D7B] text-center transition-colors duration-300">Autorickshaw Directory</h3>
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                   {autorickshawDrivers.map((driver, idx) => (
                     <a href={`tel:${driver.phone.replace(/\s+/g, '')}`} key={idx} className="group p-4 rounded-xl flex items-center justify-between gap-3 border-2 border-cyprus dark:border-[#CF9D7B] bg-[#FAFAFA] dark:bg-[#0C1519] text-cyprus dark:text-[#CF9D7B] hover:bg-cyprus dark:hover:bg-[#CF9D7B] hover:text-[#FAFAFA] dark:hover:text-[#0C1519] shadow-sm hover:shadow-md transition-all cursor-pointer">
                       <span className="font-bold text-base">{driver.name}</span>
                       <div className="flex items-center gap-2 opacity-80 group-hover:opacity-100">
                         <Phone className="w-4 h-4" />
                         <span className="text-sm font-medium">{driver.phone}</span>
                       </div>
                     </a>
                   ))}
                 </div>
               </div>
             )}
          </div>
        )}
      </div>
    </div>
  )
}