"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Folder, ChevronRight, FileText } from "lucide-react"

type PathItem = {
  id: string;
  name: string;
  type: "root" | "semester" | "branch" | "stream" | "category" | "pyq-type" | "subject";
}

const subjectsData: Record<string, Record<string, string[]>> = {
  ece: {
    "1": ["Calculus", "Engineering Physics", "Introduction to Electronics Devices & Circuits", "Introduction to Electrical Engineering", "Computer Programming", "Soft Skills Development", "Computer Programming Laboratory", "Basic Electrical Lab", "Language Laboratory", "NSS/Nature Conservation Activities/Yoga"],
    "2": ["Linear Algebra & Transform Techniques", "Engineering Chemistry", "Digital Electronics", "Object Oriented Programming in C++", "Introduction to Cyber Physical Systems", "Environmental and Life Sciences", "Digital Electronics Lab", "Basic Electronics Lab"],
    "3": ["Differential Equations and Complex Variables", "Network Theory", "Electronic Circuits", "Digital System Design", "Microprocessors and Microcontrollers", "Solid State Devices", "Electronic Circuits Laboratory", "Digital Systems & Programming Laboratory", "Internship-I"],
    "4": ["Numerical and Statistical Techniques", "Analog Integrated Circuits", "Signals & Systems", "Electromagnetic Theory", "Introduction to Communication Engineering", "Python for Machine Learning Applications", "Universal Human Values", "Mini Project", "Analog Integrated Circuit Laboratory"],
    "5": ["Embedded Systems", "Microwave Engineering", "Digital Communication Engineering", "VLSI Design", "Digital Signal Processing", "Professional Elective I (MOOC)", "Digital Signal Processing Laboratory", "Communication Laboratory", "Internship-II"],
    "6": ["Information Theory and Coding", "Digital Image Processing", "Control System", "Antenna Theory", "Professional Elective II", "Professional Elective III", "Minor Project based on Embedded Systems", "Microwave Engineering Laboratory"],
  },
  cse: {
    "1": ["Calculus", "Engineering Physics", "Introduction to Electronics Devices & Circuits", "Introduction to Electrical Engineering", "Computer Programming", "Soft Skills Development", "Computer Programming Laboratory", "Basic Electrical Lab", "Language Laboratory", "NSS/Nature Conservation Activities/Yoga"],
    "2": ["Linear Algebra & Transform Techniques", "Engineering Chemistry", "Digital Electronics", "Object Oriented Programming in C++", "Introduction to Cyber Physical Systems", "Environmental and Life Sciences", "Digital Electronics Lab", "Basic Electronics Lab"],
    "3": ["Differential Equations and Complex Variables", "Computer Architecture and Organization", "Discrete Computational Structures", "Data Structures and Algorithms", "Principles of Programming Languages", "Automata Languages and Computations", "Data Structures Laboratory", "Object Oriented Programming Laboratory", "Internship-1"],
    "4": ["Numerical and Statistical Techniques", "Operating Systems", "Database Management Systems", "Data and Computer Communication", "Object Oriented Software Engineering", "Microprocessors", "Universal Human Values", "Database Management Systems Laboratory", "Operating System Laboratory"],
    "5": ["Mathematical Foundations for Machine Learning", "System Programming", "Data Mining", "Computer Graphics", "Advanced Microprocessors and Embedded Systems", "Professional Elective I (MOOC)", "Computer Graphics Laboratory", "IoT and Embedded Systems Laboratory", "Internship-II"],
    "6": ["Computer Networks", "Compiler Construction", "Analysis and Design of Algorithms", "Artificial Intelligence", "Cryptography and Network Security", "Professional Elective II", "Networks Laboratory", "Mini Project"],
  },
  it: {
    "1": ["Calculus", "Engineering Physics", "Introduction to Electronics Devices & Circuits", "Introduction to Electrical Engineering", "Computer Programming", "Soft Skills Development", "Computer Programming Laboratory", "Basic Electrical Lab", "Language Laboratory", "NSS/Nature Conservation Activities/Yoga"],
    "2": ["Linear Algebra & Transform Techniques", "Engineering Chemistry", "Digital Electronics", "Object Oriented Programming in C++", "Introduction to Cyber Physical Systems", "Environmental and Life Sciences", "Digital Electronics Lab", "Basic Electronics Lab"],
    "3": ["Differential Equations and Complex Variables", "Internet Programming", "Discrete Computational Structures", "Database Management Systems", "Data Structures and Algorithms in C++", "Computer Organization & Architecture", "Hardware Design & CPS Laboratory", "Data Structures in C++ Laboratory", "Internship-I"],
    "4": ["Numerical and Statistical Techniques", "Data Communication", "Operating Systems", "Software Engineering", "Formal Languages and Automata Theory", "Design and Analysis of Algorithms", "Universal Human Values", "Operating Systems Lab", "Mini Project (DBMS based)"],
    "5": ["Compiler Design", "Software Design and Architecture", "Internet of Things", "Big Data Analytics", "Internet Architecture & Design", "Professional Elective I (MOOC)", "Networking & Edge Computing Lab", "Software Engineering Lab", "Internship-II"],
    "6": ["Agile Project Methodology", "Data Security and Cryptography", "Deep Learning", "Cloud Computing", "Design and Development Mobile Application", "Professional Elective II", "Cloud and Data Analytics Laboratory", "Mini Project (Mobile App Development)"],
  },
  eee: {
    "1": ["Calculus", "Engineering Physics", "Introduction to Electronic Devices and Circuits", "Introduction to Electrical Engineering", "Computer Programming", "Soft Skills Development", "Computer Programming Laboratory", "Basic Electrical Engineering Laboratory", "Language Laboratory", "NSS/Nature Conservation Activities/Yoga"],
    "2": ["Linear Algebra and Transform Techniques", "Engineering Chemistry", "Digital Electronics", "Object Oriented Programming in C++", "Introduction to Cyber Physical Systems", "Environmental and Life Sciences", "Digital Electronics Laboratory", "Basic Electronics Laboratory"],
    "3": ["Differential Equations and Complex Variables", "Electrical Machines-I", "Circuits and Networks", "Measurements and Instrumentation", "Analog Integrated Circuits I", "Microprocessor and Microcontroller Based Systems", "Measurements and Instrumentation Laboratory", "Cyber Physical Systems Laboratory", "Internship-1"],
    "4": ["Numerical and Statistical Techniques", "Signals and Systems", "Electrical Machines-II", "Power Electronics", "Electro Magnetic Theory", "Analog Integrated Circuits II", "Universal Human Values", "Electrical Machines Laboratory-I", "Analog Integrated Circuits Laboratory"],
    "5": ["Power Semiconductor Drives", "Control Systems I", "Renewable Energy Sources", "Digital Signal Processing", "Power Systems-I", "Professional Elective I (MOOC)", "Power Electronics Laboratory", "Electrical Machines Laboratory-II", "Internship-II"],
    "6": ["Power Systems-II", "Control Systems-II", "Electric Vehicles", "Machine Learning", "VLSI Design", "Professional Elective II", "Mini Project", "Power Systems Laboratory"],
  },
  ce: {
    "1": ["Calculus", "Engineering Chemistry", "Engineering Graphics", "Basic Civil Engineering", "Basic Mechanical Engineering", "Environmental and Life Sciences", "Civil Engineering Workshop", "Mechanical Engineering Workshop"],
    "2": ["Computer Programming and Problem Solving", "Engineering Physics", "Engineering Mechanics", "Basic Electrical Engineering", "Basic Electronics Engineering", "Soft Skills Development", "Computer Programming Laboratory", "Basic Electrical and Electronics Engineering Laboratory", "Language Laboratory", "NSS/Nature Conservation Activities/Yoga"],
    "3": ["Linear Algebra and Transform Techniques", "Surveying-I", "Strength of Materials", "Concrete Technology", "Fluid Mechanics-I", "Building Technology and Functional Planning", "Strength of Materials Testing Laboratory", "Concrete Testing Laboratory", "Internship-1"],
    "4": ["Complex Variables and Partial Differential Equations", "Surveying-II", "Analysis of Structures-I", "Transportation Engineering-I", "Fluid Mechanics II", "Geotechnical Engineering-I", "Universal Human Values", "Survey Practices Laboratory", "Fluid Mechanics Laboratory"],
    "5": ["Numerical and Statistical Methods", "Design of Concrete Structures-I", "Analysis of Structures-II", "Transportation Engineering-II", "Geotechnical Engineering-II", "Professional Elective-I", "Geotechnical Engineering Laboratory", "Transportation Engineering Laboratory", "Internship-II"],
    "6": ["Environmental Engineering-I", "Design of Steel Structures", "Advanced Methods of Structural Analysis", "Water Resources and Irrigation Engineering", "Construction Management", "Professional Elective-II", "Environmental Engineering Laboratory", "Mini Project-Architecture Design Studio"],
  }
};

const isRecordSubject = (subject: string) => {
  const lower = subject.toLowerCase();
  if (lower.includes("language lab")) return false;
  return lower.includes("lab");
};

export default function AcademicsPage() {
  const [path, setPath] = useState<PathItem[]>([{ id: "academics", name: "Academics", type: "root" }])

  const semesters = [
    { id: "1", name: "Semester 1" },
    { id: "2", name: "Semester 2" },
    { id: "3", name: "Semester 3" },
    { id: "4", name: "Semester 4" },
    { id: "5", name: "Semester 5" },
    { id: "6", name: "Semester 6" },
  ]

  const branches = [
    { id: "cse", name: "Computer Science and Engineering", short: "CSE" },
    { id: "it", name: "Information Technology", short: "IT" },
    { id: "ce", name: "Civil Engineering", short: "CE" },
    { id: "ece", name: "Electronics and Communication Engineering", short: "ECE" },
    { id: "eee", name: "Electrical and Electronics Engineering", short: "EEE" },
  ]

  const streams = [
    { id: "stream-a", name: "Stream A (Civil)", short: "Stream A" },
    { id: "stream-b", name: "Stream B (Others)", short: "Stream B" },
  ]

  const currentLevel = path[path.length - 1]

  const handleNavigate = (item: PathItem) => {
    setPath([...path, item])
  }

  const handleBreadcrumbClick = (index: number) => {
    setPath(path.slice(0, index + 1))
  }

  let content = null;

  if (currentLevel.type === "root") {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {semesters.map((sem) => (
          <button
            key={sem.id}
            onClick={() => handleNavigate({ id: sem.id, name: sem.name, type: "semester" })}
            className="bg-white/40 hover:bg-cyprus hover:text-sand-dune p-4 rounded-xl transition-all duration-200 flex items-center gap-4 cursor-pointer border border-cyprus/10 shadow-sm text-left group animate-in fade-in"
          >
            <Folder className="w-8 h-8 text-cyprus/60 group-hover:text-sand-dune/90 fill-cyprus/10 group-hover:fill-sand-dune/20" />
            <span className="font-semibold text-lg text-cyprus group-hover:text-sand-dune">{sem.name}</span>
          </button>
        ))}
      </div>
    )
  } else if (currentLevel.type === "semester") {
    const isSem1Or2 = currentLevel.id === "1" || currentLevel.id === "2"
    
    if (isSem1Or2) {
      content = (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {streams.map((stream) => (
            <button
              key={stream.id}
              onClick={() => handleNavigate({ id: stream.id, name: stream.short, type: "stream" })}
              className="bg-white/40 hover:bg-cyprus hover:text-sand-dune p-4 rounded-xl transition-all duration-200 flex items-center gap-4 cursor-pointer border border-cyprus/10 shadow-sm text-left group animate-in fade-in"
            >
              <Folder className="w-8 h-8 text-cyprus/60 group-hover:text-sand-dune/90 fill-cyprus/10 group-hover:fill-sand-dune/20 shrink-0" />
              <div>
                <div className="font-bold text-lg text-cyprus group-hover:text-sand-dune">{stream.short}</div>
                <div className="text-sm text-cyprus/70 group-hover:text-sand-dune/70">{stream.name}</div>
              </div>
            </button>
          ))}
        </div>
      )
    } else {
      content = (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {branches.map((branch) => (
            <button
              key={branch.id}
              onClick={() => handleNavigate({ id: branch.id, name: branch.short, type: "branch" })}
              className="bg-white/40 hover:bg-cyprus hover:text-sand-dune p-4 rounded-xl transition-all duration-200 flex items-center gap-4 cursor-pointer border border-cyprus/10 shadow-sm text-left group animate-in fade-in"
            >
              <Folder className="w-8 h-8 text-cyprus/60 group-hover:text-sand-dune/90 fill-cyprus/10 group-hover:fill-sand-dune/20 shrink-0" />
              <div>
                <div className="font-bold text-lg text-cyprus group-hover:text-sand-dune">{branch.short}</div>
                <div className="text-sm text-cyprus/70 group-hover:text-sand-dune/70">{branch.name}</div>
              </div>
            </button>
          ))}
        </div>
      )
    }
  } else if (currentLevel.type === "stream") {
    const streamBranches = currentLevel.id === "stream-a" 
      ? branches.filter(b => b.id === "ce")
      : branches.filter(b => b.id !== "ce");

    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {streamBranches.map((branch) => (
          <button
            key={branch.id}
            onClick={() => handleNavigate({ id: branch.id, name: branch.short, type: "branch" })}
            className="bg-white/40 hover:bg-cyprus hover:text-sand-dune p-4 rounded-xl transition-all duration-200 flex items-center gap-4 cursor-pointer border border-cyprus/10 shadow-sm text-left group animate-in fade-in"
          >
            <Folder className="w-8 h-8 text-cyprus/60 group-hover:text-sand-dune/90 fill-cyprus/10 group-hover:fill-sand-dune/20 shrink-0" />
            <div>
              <div className="font-bold text-lg text-cyprus group-hover:text-sand-dune">{branch.short}</div>
              <div className="text-sm text-cyprus/70 group-hover:text-sand-dune/70">{branch.name}</div>
            </div>
          </button>
        ))}
      </div>
    )
  } else if (currentLevel.type === "branch") {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => handleNavigate({ id: "notes", name: "Notes", type: "category" })}
          className="bg-white/40 hover:bg-cyprus hover:text-sand-dune p-4 rounded-xl transition-all duration-200 flex items-center gap-4 cursor-pointer border border-cyprus/10 shadow-sm text-left group animate-in fade-in"
        >
          <Folder className="w-8 h-8 text-cyprus/60 group-hover:text-sand-dune/90 fill-cyprus/10 group-hover:fill-sand-dune/20 shrink-0" />
          <span className="font-bold text-lg text-cyprus group-hover:text-sand-dune">Notes</span>
        </button>
        <button
          onClick={() => handleNavigate({ id: "record", name: "Record", type: "category" })}
          className="bg-white/40 hover:bg-cyprus hover:text-sand-dune p-4 rounded-xl transition-all duration-200 flex items-center gap-4 cursor-pointer border border-cyprus/10 shadow-sm text-left group animate-in fade-in"
        >
          <Folder className="w-8 h-8 text-cyprus/60 group-hover:text-sand-dune/90 fill-cyprus/10 group-hover:fill-sand-dune/20 shrink-0" />
          <span className="font-bold text-lg text-cyprus group-hover:text-sand-dune">Record</span>
        </button>
        <button
          onClick={() => handleNavigate({ id: "pyq", name: "PYQ", type: "category" })}
          className="bg-white/40 hover:bg-cyprus hover:text-sand-dune p-4 rounded-xl transition-all duration-200 flex items-center gap-4 cursor-pointer border border-cyprus/10 shadow-sm text-left group animate-in fade-in"
        >
          <Folder className="w-8 h-8 text-cyprus/60 group-hover:text-sand-dune/90 fill-cyprus/10 group-hover:fill-sand-dune/20 shrink-0" />
          <span className="font-bold text-lg text-cyprus group-hover:text-sand-dune">PYQ</span>
        </button>
      </div>
    )
  } else if (currentLevel.type === "category") {
    if (currentLevel.id === "pyq") {
      content = (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => handleNavigate({ id: "internals", name: "Internals", type: "pyq-type" })}
            className="bg-white/40 hover:bg-cyprus hover:text-sand-dune p-4 rounded-xl transition-all duration-200 flex items-center gap-4 cursor-pointer border border-cyprus/10 shadow-sm text-left group animate-in fade-in"
          >
            <Folder className="w-8 h-8 text-cyprus/60 group-hover:text-sand-dune/90 fill-cyprus/10 group-hover:fill-sand-dune/20 shrink-0" />
            <span className="font-bold text-lg text-cyprus group-hover:text-sand-dune">Internals</span>
          </button>
          <button
            onClick={() => handleNavigate({ id: "externals", name: "Externals", type: "pyq-type" })}
            className="bg-white/40 hover:bg-cyprus hover:text-sand-dune p-4 rounded-xl transition-all duration-200 flex items-center gap-4 cursor-pointer border border-cyprus/10 shadow-sm text-left group animate-in fade-in"
          >
            <Folder className="w-8 h-8 text-cyprus/60 group-hover:text-sand-dune/90 fill-cyprus/10 group-hover:fill-sand-dune/20 shrink-0" />
            <span className="font-bold text-lg text-cyprus group-hover:text-sand-dune">Externals</span>
          </button>
        </div>
      )
    } else {
      const semesterId = path.find(p => p.type === "semester")?.id as string;
      const branchId = path.find(p => p.type === "branch")?.id as string;
      const allSubjects = subjectsData[branchId]?.[semesterId] || [];
      
      let filteredSubjects = allSubjects;
      if (currentLevel.id === "notes") {
        filteredSubjects = allSubjects.filter(sub => !isRecordSubject(sub));
      } else if (currentLevel.id === "record") {
        filteredSubjects = allSubjects.filter(sub => isRecordSubject(sub));
      }

      content = (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSubjects.length > 0 ? filteredSubjects.map((subject, idx) => (
            <div
              key={idx}
              className="bg-white/40 hover:bg-cyprus hover:text-sand-dune p-4 rounded-xl transition-all duration-200 flex items-start gap-4 border border-cyprus/10 shadow-sm text-left group animate-in fade-in"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <FileText className="w-6 h-6 mt-0.5 text-cyprus/60 group-hover:text-sand-dune/90 shrink-0" />
              <span className="font-semibold text-base text-cyprus group-hover:text-sand-dune leading-snug">{subject}</span>
            </div>
          )) : (
            <div className="col-span-full flex flex-col items-center justify-center p-16 bg-white/20 rounded-2xl border border-cyprus/10">
              <FileText className="w-16 h-16 mb-4 text-cyprus/30" />
              <p className="text-cyprus/60 font-medium text-center">No subjects found in this category.</p>
            </div>
          )}
        </div>
      )
    }
  } else if (currentLevel.type === "pyq-type") {
    content = (
      <div className="flex flex-col items-center justify-center p-16 bg-white/20 rounded-2xl border border-cyprus/10 animate-in zoom-in-95">
        <FileText className="w-16 h-16 mb-4 text-cyprus/30" />
        <p className="text-cyprus/60 font-medium text-center">Previous year question papers for {currentLevel.name} will appear here.</p>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-sand-dune px-6 py-12 overflow-hidden isolate">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[40%] left-[5%] w-[800px] h-[600px] bg-[#C1E1C1] rounded-[50%_50%_20%_80%/50%_20%_80%_50%] filter blur-[40px] opacity-65 rotate-[45deg]" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] bg-[#E6E6FA] rounded-[20%_80%_50%_50%/80%_50%_50%_20%] filter blur-[40px] opacity-70 -rotate-[30deg]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto mt-12">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cyprus hover:opacity-70 transition-opacity mb-6 group"
          >
            <ArrowLeft
              size={20}
              className="transition-transform group-hover:-translate-x-1"
            />
            <span className="font-bold tracking-tight uppercase text-sm">
              Back to Home
            </span>
          </Link>

          {/* Dynamic Top Heading */}
          <h1 className="text-4xl md:text-5xl font-black text-cyprus tracking-tight mb-8">
            {path[0].name}
          </h1>

          {/* Breadcrumb / File Path */}
          <div className="flex items-center flex-wrap gap-2 text-sm font-medium text-cyprus/80 bg-white/40 p-4 rounded-xl border border-cyprus/10 backdrop-blur-md shadow-sm">
            {path.map((item, index) => (
              <div key={item.id} className="flex items-center gap-2">
                <button
                  onClick={() => handleBreadcrumbClick(index)}
                  className={`transition-colors hover:text-cyprus ${index === path.length - 1 ? "text-cyprus font-bold" : "text-cyprus/60"}`}
                >
                  {item.name}
                </button>
                {index < path.length - 1 && <ChevronRight size={16} className="text-cyprus/40" />}
              </div>
            ))}
          </div>
        </div>

        {/* File Explorer Content Area */}
        <div className="bg-white/30 backdrop-blur-md border border-cyprus/10 rounded-2xl p-6 min-h-[400px] shadow-sm">
          {content}
        </div>
      </div>
    </div>
  )
}
