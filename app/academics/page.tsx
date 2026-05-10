"use client"

// Force Turbopack rebuild
import { useState } from "react"
import Link from "next/link"
import { BookOpen, ChevronRight, FileText, Home, Folder, Circle, Square, Triangle, Hexagon, Star } from "lucide-react"

export default function AcademicsPage() {
  const [selectedSemester, setSelectedSemester] = useState<any>(null);
  const [selectedStream, setSelectedStream] = useState<any>(null);
  const [selectedBranch, setSelectedBranch] = useState<any>(null);
  const [selectedContentType, setSelectedContentType] = useState<string | null>(null);
  const [selectedPyqType, setSelectedPyqType] = useState<string | null>(null);

  const semesters = [
    { id: "1", name: "Semester 1", type: "streams" },
    { id: "2", name: "Semester 2", type: "streams" },
    { id: "3", name: "Semester 3", type: "branches" },
    { id: "4", name: "Semester 4", type: "branches" },
    { id: "5", name: "Semester 5", type: "branches" },
    { id: "6", name: "Semester 6", type: "branches" },
  ]

  const streams = [
    { 
      id: "stream-a", 
      name: "Stream A",
      branches: [
        { id: "ce", name: "Civil Engineering (CE)" }
      ]
    },
    { 
      id: "stream-b", 
      name: "Stream B",
      branches: [
        { id: "cse", name: "Computer Science and Engineering (CSE)" },
        { id: "it", name: "Information Technology (IT)" },
        { id: "ece", name: "Electronics and Communication Engineering (ECE)" },
        { id: "eee", name: "Electrical and Electronics Engineering (EEE)" }
      ]
    }
  ];

  const branches = [
    { id: "cse", name: "Computer Science and Engineering (CSE)" },
    { id: "it", name: "Information Technology (IT)" },
    { id: "ece", name: "Electronics and Communication Engineering (ECE)" },
    { id: "eee", name: "Electrical and Electronics Engineering (EEE)" },
    { id: "ce", name: "Civil Engineering (CE)" }
  ];

  // Comprehensive Syllabus Data
  const syllabusData: Record<string, Record<string, string[]>> = {
    ece: {
      "1": ["Calculus", "Engineering Physics", "Introduction to Electronics Devices & Circuits", "Introduction to Electrical Engineering", "Computer Programming", "Soft Skills Development", "Computer Programming Laboratory", "Basic Electrical Lab", "Language Laboratory", "NSS/Nature Conservation Activities/Yoga"],
      "2": ["Linear Algebra & Transform Techniques", "Engineering Chemistry", "Digital Electronics", "Object Oriented Programming in C++", "Introduction to Cyber Physical Systems", "Environmental and Life Sciences", "Digital Electronics Lab", "Basic Electronics Lab"],
      "3": ["Differential Equations and Complex Variables", "Network Theory", "Electronic Circuits", "Digital System Design", "Microprocessors and Microcontrollers", "Solid State Devices", "Electronic Circuits Laboratory", "Digital Systems & Programming Laboratory", "Internship-I"],
      "4": ["Numerical and Statistical Techniques", "Analog Integrated Circuits", "Signals & Systems", "Electromagnetic Theory", "Introduction to Communication Engineering", "Python for Machine Learning Applications", "Universal Human Values", "Mini Project", "Analog Integrated Circuit Laboratory"],
      "5": ["Embedded Systems", "Microwave Engineering", "Digital Communication Engineering", "VLSI Design", "Digital Signal Processing", "Professional Elective I (MOOC)", "Digital Signal Processing Laboratory", "Communication Laboratory", "Internship-II"],
      "6": ["Information Theory and Coding", "Digital Image Processing", "Control System", "Antenna Theory", "Professional Elective II", "Professional Elective III", "Minor Project based on Embedded Systems", "Microwave Engineering Laboratory"]
    },
    cse: {
      "1": ["Calculus", "Engineering Physics", "Introduction to Electronics Devices & Circuits", "Introduction to Electrical Engineering", "Computer Programming", "Soft Skills Development", "Computer Programming Laboratory", "Basic Electrical Lab", "Language Laboratory", "NSS/Nature Conservation Activities/Yoga"],
      "2": ["Linear Algebra & Transform Techniques", "Engineering Chemistry", "Digital Electronics", "Object Oriented Programming in C++", "Introduction to Cyber Physical Systems", "Environmental and Life Sciences", "Digital Electronics Lab", "Basic Electronics Lab"],
      "3": ["Differential Equations and Complex Variables", "Computer Architecture and Organization", "Discrete Computational Structures", "Data Structures and Algorithms", "Principles of Programming Languages", "Automata Languages and Computations", "Data Structures Laboratory", "Object Oriented Programming Laboratory", "Internship-1"],
      "4": ["Numerical and Statistical Techniques", "Operating Systems", "Database Management Systems", "Data and Computer Communication", "Object Oriented Software Engineering", "Microprocessors", "Universal Human Values", "Database Management Systems Laboratory", "Operating System Laboratory"],
      "5": ["Mathematical Foundations for Machine Learning", "System Programming", "Data Mining", "Computer Graphics", "Advanced Microprocessors and Embedded Systems", "Professional Elective I (MOOC)", "Computer Graphics Laboratory", "IoT and Embedded Systems Laboratory", "Internship-II"],
      "6": ["Computer Networks", "Compiler Construction", "Analysis and Design of Algorithms", "Artificial Intelligence", "Cryptography and Network Security", "Professional Elective II", "Networks Laboratory", "Mini Project"]
    },
    it: {
      "1": ["Calculus", "Engineering Physics", "Introduction to Electronics Devices & Circuits", "Introduction to Electrical Engineering", "Computer Programming", "Soft Skills Development", "Computer Programming Laboratory", "Basic Electrical Lab", "Language Laboratory", "NSS/Nature Conservation Activities/Yoga"],
      "2": ["Linear Algebra & Transform Techniques", "Engineering Chemistry", "Digital Electronics", "Object Oriented Programming in C++", "Introduction to Cyber Physical Systems", "Environmental and Life Sciences", "Digital Electronics Lab", "Basic Electronics Lab"],
      "3": ["Differential Equations and Complex Variables", "Internet Programming", "Discrete Computational Structures", "Database Management Systems", "Data Structures and Algorithms in C++", "Computer Organization & Architecture", "Hardware Design & CPS Laboratory", "Data Structures in C++ Laboratory", "Internship-I"],
      "4": ["Numerical and Statistical Techniques", "Data Communication", "Operating Systems", "Software Engineering", "Formal Languages and Automata Theory", "Design and Analysis of Algorithms", "Universal Human Values", "Operating Systems Lab", "Mini Project (DBMS based)"],
      "5": ["Compiler Design", "Software Design and Architecture", "Internet of Things", "Big Data Analytics", "Internet Architecture & Design", "Professional Elective I (MOOC)", "Networking & Edge Computing Lab", "Software Engineering Lab", "Internship-II"],
      "6": ["Agile Project Methodology", "Data Security and Cryptography", "Deep Learning", "Cloud Computing", "Design and Development Mobile Application", "Professional Elective II", "Cloud and Data Analytics Laboratory", "Mini Project (Mobile App Development)"]
    },
    eee: {
      "1": ["Calculus", "Engineering Physics", "Introduction to Electronic Devices and Circuits", "Introduction to Electrical Engineering", "Computer Programming", "Soft Skills Development", "Computer Programming Laboratory", "Basic Electrical Engineering Laboratory", "Language Laboratory", "NSS/Nature Conservation Activities/Yoga"],
      "2": ["Linear Algebra and Transform Techniques", "Engineering Chemistry", "Digital Electronics", "Object Oriented Programming in C++", "Introduction to Cyber Physical Systems", "Environmental and Life Sciences", "Digital Electronics Laboratory", "Basic Electronics Laboratory"],
      "3": ["Differential Equations and Complex Variables", "Electrical Machines-I", "Circuits and Networks", "Measurements and Instrumentation", "Analog Integrated Circuits I", "Microprocessor and Microcontroller Based Systems", "Measurements and Instrumentation Laboratory", "Cyber Physical Systems Laboratory", "Internship-1"],
      "4": ["Numerical and Statistical Techniques", "Signals and Systems", "Electrical Machines-II", "Power Electronics", "Electro Magnetic Theory", "Analog Integrated Circuits II", "Universal Human Values", "Electrical Machines Laboratory-I", "Analog Integrated Circuits Laboratory"],
      "5": ["Power Semiconductor Drives", "Control Systems I", "Renewable Energy Sources", "Digital Signal Processing", "Power Systems-I", "Professional Elective I (MOOC)", "Power Electronics Laboratory", "Electrical Machines Laboratory-II", "Internship-II"],
      "6": ["Power Systems-II", "Control Systems-II", "Electric Vehicles", "Machine Learning", "VLSI Design", "Professional Elective II", "Mini Project", "Power Systems Laboratory"]
    },
    ce: {
      "1": ["Calculus", "Engineering Chemistry", "Engineering Graphics", "Basic Civil Engineering", "Basic Mechanical Engineering", "Environmental and Life Sciences", "Civil Engineering Workshop", "Mechanical Engineering Workshop"],
      "2": ["Computer Programming and Problem Solving", "Engineering Physics", "Engineering Mechanics", "Basic Electrical Engineering", "Basic Electronics Engineering", "Soft Skills Development", "Computer Programming Laboratory", "Basic Electrical and Electronics Engineering Laboratory", "Language Laboratory", "NSS/Nature Conservation Activities/Yoga"],
      "3": ["Linear Algebra and Transform Techniques", "Surveying-I", "Strength of Materials", "Concrete Technology", "Fluid Mechanics-I", "Building Technology and Functional Planning", "Strength of Materials Testing Laboratory", "Concrete Testing Laboratory", "Internship-1"],
      "4": ["Complex Variables and Partial Differential Equations", "Surveying-II", "Analysis of Structures-I", "Transportation Engineering-I", "Fluid Mechanics II", "Geotechnical Engineering-I", "Universal Human Values", "Survey Practices Laboratory", "Fluid Mechanics Laboratory"],
      "5": ["Numerical and Statistical Methods", "Design of Concrete Structures-I", "Analysis of Structures-II", "Transportation Engineering-II", "Geotechnical Engineering-II", "Professional Elective-I", "Geotechnical Engineering Laboratory", "Transportation Engineering Laboratory", "Internship-II"],
      "6": ["Environmental Engineering-I", "Design of Steel Structures", "Advanced Methods of Structural Analysis", "Water Resources and Irrigation Engineering", "Construction Management", "Professional Elective-II", "Environmental Engineering Laboratory", "Mini Project-Architecture Design Studio"]
    }
  };

  const currentSubjects = (selectedBranch && selectedSemester) ? syllabusData[selectedBranch.id]?.[selectedSemester.id] || [] : [];
  
  // Filter logic to separate labs from theory correctly.
  const isLabSubject = (name: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes("language lab") || lowerName.includes("language laboratory")) {
      return false; // Specifically requested exception
    }
    return lowerName.includes("lab") || lowerName.includes("laboratory");
  };

  const notesSubjects = currentSubjects.filter((s) => !isLabSubject(s));
  const recordSubjects = currentSubjects.filter((s) => isLabSubject(s));

  return (
    <div className="relative min-h-screen bg-sand-dune px-6 py-12 overflow-hidden isolate">
      {/* Background blobs */}
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

      <div className="relative z-10 max-w-4xl mx-auto mt-4 md:mt-12">
        <h1 className="text-4xl md:text-5xl font-bold text-cyprus mb-8 text-center tracking-tight animate-in fade-in slide-in-from-top duration-700">
          Academics
        </h1>

        {/* Directory Bar */}
        <div className="flex items-center flex-wrap gap-2 text-cyprus/80 mb-10 bg-[#FAFAFA] p-4 rounded-2xl border-2 border-cyprus shadow-sm animate-in fade-in slide-in-from-top-4">
          <Link href="/" className="hover:text-cyprus transition-colors flex items-center gap-1">
            <Home className="w-4 h-4" />
            <span className="text-sm font-medium">Home</span>
          </Link>
          <ChevronRight className="w-4 h-4 opacity-50" />
          <button 
            onClick={() => { setSelectedSemester(null); setSelectedStream(null); setSelectedBranch(null); setSelectedContentType(null); setSelectedPyqType(null); }}
            className={`hover:text-cyprus transition-colors flex items-center gap-1 text-sm font-medium ${!selectedSemester ? 'text-cyprus font-bold' : ''}`}
          >
            <Folder className="w-4 h-4" />
            Academics
          </button>

          {selectedSemester && (
            <>
              <ChevronRight className="w-4 h-4 opacity-50" />
              <button 
                onClick={() => { setSelectedStream(null); setSelectedBranch(null); setSelectedContentType(null); setSelectedPyqType(null); }}
                className={`hover:text-cyprus transition-colors flex items-center gap-1 text-sm font-medium ${!selectedBranch && !selectedStream ? 'text-cyprus font-bold' : ''}`}
              >
                <Folder className="w-4 h-4" />
                {selectedSemester.name}
              </button>
            </>
          )}

          {selectedStream && (
            <>
              <ChevronRight className="w-4 h-4 opacity-50" />
              <button 
                onClick={() => { setSelectedBranch(null); setSelectedContentType(null); setSelectedPyqType(null); }}
                className={`hover:text-cyprus transition-colors flex items-center gap-1 text-sm font-medium ${!selectedBranch ? 'text-cyprus font-bold' : ''}`}
              >
                <Folder className="w-4 h-4" />
                {selectedStream.name}
              </button>
            </>
          )}

          {selectedBranch && (
            <>
              <ChevronRight className="w-4 h-4 opacity-50" />
              <button 
                onClick={() => { setSelectedContentType(null); setSelectedPyqType(null); }}
                className={`hover:text-cyprus transition-colors flex items-center gap-1 text-sm font-medium ${!selectedContentType ? 'text-cyprus font-bold' : ''}`}
              >
                <Folder className="w-4 h-4" />
                {selectedBranch.name}
              </button>
            </>
          )}

          {selectedContentType && (
            <>
              <ChevronRight className="w-4 h-4 opacity-50" />
              <button 
                onClick={() => setSelectedPyqType(null)}
                className={`hover:text-cyprus transition-colors flex items-center gap-1 text-sm font-medium ${!selectedPyqType ? 'text-cyprus font-bold' : ''}`}
              >
                <Folder className="w-4 h-4" />
                {selectedContentType}
              </button>
            </>
          )}

          {selectedPyqType && (
            <>
              <ChevronRight className="w-4 h-4 opacity-50" />
              <span className="text-cyprus font-bold flex items-center gap-1 text-sm">
                <Folder className="w-4 h-4" />
                {selectedPyqType}
              </span>
            </>
          )}
        </div>

        {/* Content Area */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          {!selectedSemester && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {semesters.map((sem) => (
                <div 
                  key={sem.id} 
                  className="group p-4 md:p-5 rounded-2xl transition-all duration-300 flex flex-col items-center text-center gap-3 border-2 border-cyprus bg-[#FAFAFA] text-cyprus hover:bg-cyprus hover:text-[#FAFAFA] shadow-sm hover:shadow-md cursor-pointer"
                  onClick={() => setSelectedSemester(sem)}
                >
                  <div className="bg-cyprus/10 group-hover:bg-[#FAFAFA] group-hover:text-cyprus p-4 rounded-xl transition-colors duration-300">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <h2 className="text-xl font-bold">{sem.name}</h2>
                </div>
              ))}
            </div>
          )}

          {/* Streams level (for sem 1 & 2) */}
          {selectedSemester?.type === "streams" && !selectedStream && (
            <div className="grid grid-cols-1 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {streams.map((stream) => (
                 <div 
                   key={stream.id}
                   className="group p-4 rounded-xl transition-all duration-300 flex items-center justify-between border-2 border-cyprus bg-[#FAFAFA] text-cyprus hover:bg-cyprus hover:text-[#FAFAFA] shadow-sm hover:shadow-md cursor-pointer"
                   onClick={() => setSelectedStream(stream)}
                 >
                   <div className="flex items-center gap-3">
                     <div className="bg-cyprus/10 group-hover:bg-[#FAFAFA] group-hover:text-cyprus p-2.5 rounded-lg transition-colors duration-300">
                        <Folder className="w-5 h-5" />
                     </div>
                     <span className="font-bold text-base text-left">{stream.name}</span>
                   </div>
                   <ChevronRight className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity shrink-0" />
                 </div>
              ))}
            </div>
          )}

          {/* Branches level (for selected stream OR sem 3-6) */}
          {((selectedSemester?.type === "streams" && selectedStream && !selectedBranch) || 
            (selectedSemester?.type === "branches" && !selectedBranch)) && (
            <div className="grid grid-cols-1 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {(selectedStream ? selectedStream.branches : branches).map((branch: any) => (
                 <div 
                   key={branch.id}
                   className="group p-4 rounded-xl transition-all duration-300 flex items-center justify-between border-2 border-cyprus bg-[#FAFAFA] text-cyprus hover:bg-cyprus hover:text-[#FAFAFA] shadow-sm hover:shadow-md cursor-pointer"
                   onClick={() => setSelectedBranch(branch)}
                 >
                   <div className="flex items-center gap-3">
                     <div className="bg-cyprus/10 group-hover:bg-[#FAFAFA] group-hover:text-cyprus p-2.5 rounded-lg transition-colors duration-300">
                        <Folder className="w-5 h-5" />
                     </div>
                     <span className="font-bold text-base text-left">{branch.name}</span>
                   </div>
                   <ChevronRight className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity shrink-0" />
                 </div>
              ))}
            </div>
          )}

          {/* Branch Content Types: Notes, Record, PYQ */}
          {selectedBranch && !selectedContentType && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {["Notes", "Record", "PYQ"].map((type) => (
                <div 
                  key={type}
                  className="group p-5 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center gap-3 border-2 border-cyprus bg-[#FAFAFA] text-cyprus hover:bg-cyprus hover:text-[#FAFAFA] shadow-sm hover:shadow-md cursor-pointer text-center"
                  onClick={() => setSelectedContentType(type)}
                >
                  <div className="bg-cyprus/10 group-hover:bg-[#FAFAFA] group-hover:text-cyprus p-4 rounded-xl transition-colors duration-300">
                    <Folder className="w-8 h-8" />
                  </div>
                  <span className="font-bold text-xl">{type}</span>
                </div>
              ))}
            </div>
          )}

          {/* Note or Record Subjects Listing */}
          {(selectedContentType === 'Notes' || selectedContentType === 'Record') && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {(selectedContentType === 'Notes' ? notesSubjects : recordSubjects).length > 0 ? (
                (selectedContentType === 'Notes' ? notesSubjects : recordSubjects).map((sub, idx) => (
                  <div key={idx} className="group p-3 rounded-xl flex items-center gap-3 border-2 border-cyprus bg-[#FAFAFA] text-cyprus hover:bg-cyprus hover:text-[#FAFAFA] shadow-sm hover:shadow-md transition-all cursor-pointer">
                    <div className="bg-cyprus/10 group-hover:bg-[#FAFAFA] group-hover:text-cyprus p-2.5 rounded-lg shrink-0 transition-colors">
                       <FileText className="w-5 h-5" />
                    </div>
                    <span className="font-semibold leading-tight text-sm opacity-90 group-hover:opacity-100">{sub}</span>
                  </div>
                ))
              ) : (
                <div className="col-span-full p-8 rounded-2xl border-2 border-cyprus bg-[#FAFAFA] shadow-sm flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-500">
                   <FileText className="w-12 h-12 mb-3 text-cyprus/40" />
                   <h3 className="text-xl font-bold text-cyprus mb-2 text-center">No Subjects Found</h3>
                   <p className="text-cyprus/60 font-medium text-center">No subjects mapped to {selectedContentType} for this semester yet.</p>
                </div>
              )}
            </div>
          )}

          {/* PYQ Types: Internals & Externals */}
          {selectedContentType === 'PYQ' && !selectedPyqType && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {["Internals", "Externals"].map((type) => (
                <div 
                  key={type}
                  className="group p-4 rounded-xl transition-all duration-300 flex items-center justify-between border-2 border-cyprus bg-[#FAFAFA] text-cyprus hover:bg-cyprus hover:text-[#FAFAFA] shadow-sm hover:shadow-md cursor-pointer"
                  onClick={() => setSelectedPyqType(type)}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-cyprus/10 group-hover:bg-[#FAFAFA] group-hover:text-cyprus p-2.5 rounded-lg transition-colors duration-300">
                       <Folder className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-base">{type}</span>
                  </div>
                  <ChevronRight className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
              ))}
            </div>
          )}

          {/* PYQ Files / Empty State */}
          {selectedPyqType && (
            <div className="p-8 rounded-2xl border-2 border-cyprus bg-[#FAFAFA] shadow-sm flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-500">
                <FileText className="w-12 h-12 mb-3 text-cyprus/40 animate-pulse" />
                <h3 className="text-xl font-bold text-cyprus mb-2 text-center">{selectedPyqType}</h3>
                <p className="text-cyprus/60 font-medium text-center">No PYQ documents found for {selectedPyqType} yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}