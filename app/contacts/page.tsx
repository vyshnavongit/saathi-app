"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Phone, ChevronRight, Circle, Square, Triangle, Hexagon, Star } from "lucide-react"

export default function ContactsPage() {
  const [selectedDept, setSelectedDept] = useState<string | null>(null)

  const departments = [
    { abbr: "CSE", name: "Computer Science" },
    { abbr: "IT", name: "Information Technology" },
    { abbr: "CE", name: "Civil Engineering" },
    { abbr: "ECE", name: "Electronics & Communications Engineering" },
    { abbr: "EEE", name: "Electrical & Electronics Engineering" }
  ]

  const contactData: Record<string, { 
    hod: { name: string; role: string; phone: string }; 
    mentors: { name: string; role: string; phone: string }[]; 
    captain: { name: string; role: string; phone: string } 
  }> = {
    CSE: {
      hod: { name: "Dr. Amit Bose", role: "HOD of CSE", phone: "+91 9876543210" },
      mentors: [
        { name: "Prof. Sangeeta Iyer", role: "Operating Systems", phone: "+91 9123456789" },
        { name: "Prof. Karthik Nair", role: "Computer Networks", phone: "+91 8234567890" }
      ],
      captain: { name: "Sourav Das", role: "Cap of Computer Science", phone: "+91 7345678901" }
    },
    IT: {
      hod: { name: "Dr. Meera Reddy", role: "HOD of IT", phone: "+91 9876543211" },
      mentors: [
        { name: "Prof. Sunita Gupta", role: "Cloud Computing", phone: "+91 9123456781" },
        { name: "Prof. Anil Kapoor", role: "DBMS", phone: "+91 8234567891" }
      ],
      captain: { name: "Rohan Mehta", role: "Cap of IT", phone: "+91 7345678902" }
    },
    CE: {
      hod: { name: "Dr. Sanjay Pandey", role: "HOD of CE", phone: "+91 9876543212" },
      mentors: [
        { name: "Prof. Lakshmi Narayanan", role: "Structural Analysis", phone: "+91 9123456782" },
        { name: "Prof. Vijay Kumar", role: "Surveying", phone: "+91 8234567892" }
      ],
      captain: { name: "Aditya Joshi", role: "Cap of Civil Engineering", phone: "+91 7345678903" }
    },
    ECE: {
      hod: { name: "Dr. Preeti Desai", role: "HOD of ECE", phone: "+91 9876543213" },
      mentors: [
        { name: "Prof. Manish Saxena", role: "Digital Electronics", phone: "+91 9123456783" },
        { name: "Prof. Kavita Krishnan", role: "Microprocessors", phone: "+91 8234567893" }
      ],
      captain: { name: "Sneha Patil", role: "Cap of ECE", phone: "+91 7345678904" }
    },
    EEE: {
      hod: { name: "Dr. Gireesh Hebbar", role: "HOD of EEE", phone: "+91 9876543214" },
      mentors: [
        { name: "Prof. Ravi Shankar", role: "Power Systems", phone: "+91 9123456784" },
        { name: "Prof. Deepa Malik", role: "Control Systems", phone: "+91 8234567894" }
      ],
      captain: { name: "Arjun Nair", role: "Cap of EEE", phone: "+91 7345678905" }
    }
  }

  return (
    <div className="relative min-h-screen bg-sand-dune px-6 py-12 overflow-hidden isolate">

      {/* Background blobs and floating elements */}
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

      <div className="relative z-10 max-w-4xl mx-auto mt-20">
        {selectedDept ? (
          <button
            onClick={() => setSelectedDept(null)}
            className="inline-flex items-center gap-2 text-cyprus hover:opacity-70 transition-opacity mb-8 group"
          >
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
            <span className="font-bold tracking-tight uppercase text-sm">Back to Departments</span>
          </button>
        ) : (
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cyprus hover:opacity-70 transition-opacity mb-8 group"
          >
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
            <span className="font-bold tracking-tight uppercase text-sm">Back to Home</span>
          </Link>
        )}

        <h1 className="text-4xl md:text-5xl font-bold text-cyprus mb-16 text-center tracking-tight animate-in fade-in slide-in-from-top duration-700">
          {selectedDept ? `${selectedDept} Contacts` : "Departmental Contacts"}
        </h1>

        <div className="max-w-3xl mx-auto">
          {!selectedDept ? (
            <div className="flex flex-col gap-4">
              {departments.map((dept, index) => (
                <div
                  key={dept.abbr}
                  onClick={() => setSelectedDept(dept.abbr)}
                  className="group p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border-2 border-cyprus bg-[#FAFAFA] text-cyprus hover:bg-cyprus hover:text-[#FAFAFA] shadow-sm hover:shadow-md cursor-pointer animate-in fade-in slide-in-from-bottom duration-500"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-5">
                      <div className="bg-cyprus/10 group-hover:bg-[#FAFAFA] group-hover:text-cyprus p-3 rounded-xl transition-colors duration-300">
                        <Phone className="w-6 h-6" />
                      </div>
                      <span className="font-black text-2xl tracking-tight">
                        {dept.abbr}
                      </span>
                    </div>
                    <span className="text-sm font-normal opacity-70 ml-1">
                      {dept.name}
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                </div>
              ))}
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom duration-700">
              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-black text-cyprus tracking-wider mb-4 border-b border-cyprus/10 pb-2 uppercase">
                    HEAD OF DEPARTMENT (HOD)
                  </h2>
                  <div className="p-5 rounded-2xl border-2 border-cyprus bg-[#FAFAFA] shadow-sm">
                    <div className="grid grid-cols-3 items-center w-full text-cyprus">
                      <span className="font-bold text-lg">{contactData[selectedDept].hod.name}</span>
                      <span className="text-center text-sm opacity-70 font-medium uppercase tracking-tight">{contactData[selectedDept].hod.role}</span>
                      <span className="text-right font-mono font-semibold">{contactData[selectedDept].hod.phone}</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-black text-cyprus tracking-wider mb-4 border-b border-cyprus/10 pb-2 uppercase">
                    MENTORS & PROFESSOR
                  </h2>
                  <div className="flex flex-col gap-3">
                    {contactData[selectedDept].mentors.map((mentor, idx) => (
                      <div key={idx} className="p-5 rounded-2xl border-2 border-cyprus bg-[#FAFAFA] shadow-sm">
                        <div className="grid grid-cols-3 items-center w-full text-cyprus">
                          <span className="font-bold text-lg">{mentor.name}</span>
                          <span className="text-center text-sm opacity-70 font-medium">{mentor.role}</span>
                          <span className="text-right font-mono font-semibold">{mentor.phone}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-black text-cyprus tracking-wider mb-4 border-b border-cyprus/10 pb-2 uppercase">
                    BRANCH CAPTAIN
                  </h2>
                  <div className="p-5 rounded-2xl border-2 border-cyprus bg-[#FAFAFA] shadow-sm">
                    <div className="grid grid-cols-3 items-center w-full text-cyprus">
                      <span className="font-bold text-lg">{contactData[selectedDept].captain.name}</span>
                      <span className="text-center text-sm opacity-70 font-medium">{contactData[selectedDept].captain.role}</span>
                      <span className="text-right font-mono font-semibold">{contactData[selectedDept].captain.phone}</span>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          )}
        </div>

      </div>

    </div>
  )
}