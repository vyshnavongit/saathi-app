"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Phone, ChevronRight } from "lucide-react"
import { ThemeToggle } from "../../components/ThemeToggle"
import { BackgroundShapes } from "../../components/BackgroundShapes"

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
    <div className="relative min-h-screen bg-sand-dune dark:bg-[#0C1519] px-6 py-12 overflow-hidden isolate transition-colors duration-300">

      <ThemeToggle />
      <BackgroundShapes />

      <div className="relative z-10 max-w-4xl mx-auto mt-20">
        {selectedDept ? (
          <button
            onClick={() => setSelectedDept(null)}
            className="inline-flex items-center gap-2 text-cyprus dark:text-[#CF9D7B] hover:opacity-70 transition-opacity mb-8 group"
          >
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
            <span className="font-bold tracking-tight uppercase text-sm">Back to Departments</span>
          </button>
        ) : (
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cyprus dark:text-[#CF9D7B] hover:opacity-70 transition-opacity mb-8 group"
          >
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
            <span className="font-bold tracking-tight uppercase text-sm">Back to Home</span>
          </Link>
        )}

        <h1 className="text-4xl md:text-5xl font-bold text-cyprus dark:text-[#CF9D7B] mb-16 text-center tracking-tight animate-in fade-in slide-in-from-top duration-700 transition-colors duration-300">
          {selectedDept ? `${selectedDept} Contacts` : "Departmental Contacts"}
        </h1>

        <div className="max-w-3xl mx-auto">
          {!selectedDept ? (
            <div className="flex flex-col gap-4">
              {departments.map((dept, index) => (
                <div
                  key={dept.abbr}
                  onClick={() => setSelectedDept(dept.abbr)}
                  className="group p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border-2 border-cyprus dark:border-[#CF9D7B] bg-[#FAFAFA] dark:bg-[#0C1519] text-cyprus dark:text-[#CF9D7B] hover:bg-cyprus dark:hover:bg-[#CF9D7B] hover:text-[#FAFAFA] dark:hover:text-[#0C1519] shadow-sm hover:shadow-md cursor-pointer animate-in fade-in slide-in-from-bottom duration-500"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-5">
                      <div className="bg-cyprus/10 dark:bg-[#CF9D7B]/10 group-hover:bg-[#FAFAFA] dark:group-hover:bg-[#0C1519] group-hover:text-cyprus dark:group-hover:text-[#CF9D7B] p-3 rounded-xl transition-colors duration-300">
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
                  <h2 className="text-xl font-black text-cyprus dark:text-[#CF9D7B] tracking-wider mb-4 border-b border-cyprus/10 dark:border-[#CF9D7B]/10 pb-2 uppercase transition-colors duration-300">
                    HEAD OF DEPARTMENT (HOD)
                  </h2>
                  <div className="p-5 rounded-2xl border-2 border-cyprus dark:border-[#CF9D7B] bg-[#FAFAFA] dark:bg-[#0C1519] shadow-sm transition-colors duration-300">
                    <div className="grid grid-cols-3 items-center w-full text-cyprus dark:text-[#CF9D7B]">
                      <span className="font-bold text-lg">{contactData[selectedDept].hod.name}</span>
                      <span className="text-center text-sm opacity-70 font-medium uppercase tracking-tight">{contactData[selectedDept].hod.role}</span>
                      <span className="text-right font-mono font-semibold">{contactData[selectedDept].hod.phone}</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-black text-cyprus dark:text-[#CF9D7B] tracking-wider mb-4 border-b border-cyprus/10 dark:border-[#CF9D7B]/10 pb-2 uppercase transition-colors duration-300">
                    MENTORS & PROFESSOR
                  </h2>
                  <div className="flex flex-col gap-3">
                    {contactData[selectedDept].mentors.map((mentor, idx) => (
                      <div key={idx} className="p-5 rounded-2xl border-2 border-cyprus dark:border-[#CF9D7B] bg-[#FAFAFA] dark:bg-[#0C1519] shadow-sm transition-colors duration-300">
                        <div className="grid grid-cols-3 items-center w-full text-cyprus dark:text-[#CF9D7B]">
                          <span className="font-bold text-lg">{mentor.name}</span>
                          <span className="text-center text-sm opacity-70 font-medium">{mentor.role}</span>
                          <span className="text-right font-mono font-semibold">{mentor.phone}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-black text-cyprus dark:text-[#CF9D7B] tracking-wider mb-4 border-b border-cyprus/10 dark:border-[#CF9D7B]/10 pb-2 uppercase transition-colors duration-300">
                    BRANCH CAPTAIN
                  </h2>
                  <div className="p-5 rounded-2xl border-2 border-cyprus dark:border-[#CF9D7B] bg-[#FAFAFA] dark:bg-[#0C1519] shadow-sm transition-colors duration-300">
                    <div className="grid grid-cols-3 items-center w-full text-cyprus dark:text-[#CF9D7B]">
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