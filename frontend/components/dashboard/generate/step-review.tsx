"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  IconDownload, 
  IconRefresh, 
  IconEdit, 
  IconChevronDown, 
  IconCopy, 
  IconZoomIn, 
  IconZoomOut, 
  IconArrowsMaximize, 
  IconArrowsMinimize, 
  IconCheck, 
  IconX,
  IconChevronLeft,
  IconChevronRight,
  IconFileText
} from "@tabler/icons-react";

export function StepReview({ formData, onBack }: any) {
  // State for toggling individual sections - all open by default with rich mock data
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    toc: true,
    intro: true,
    body: true,
    conclusion: true,
    references: true,
  });

  // State for screen & document preview controls
  const [zoom, setZoom] = useState<number>(1.0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  const totalPages = 4;
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(Math.round((prev + 0.2) * 100) / 100, 2.0));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(Math.round((prev - 0.2) * 100) / 100, 0.6));
  };

  const handleResetZoom = () => {
    setZoom(1.0);
  };

  const handleToggleFullscreen = () => {
    if (!isFullscreen) {
      setIsFullscreen(true);
      try {
        if (typeof document !== "undefined" && !document.fullscreenElement) {
          document.documentElement.requestFullscreen?.().catch(() => {});
        }
      } catch (err) {}
    } else {
      setIsFullscreen(false);
      try {
        if (typeof document !== "undefined" && document.fullscreenElement) {
          document.exitFullscreen?.().catch(() => {});
        }
      } catch (err) {}
    }
  };

  // Keyboard shortcut for fullscreen escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
        try {
          if (document.fullscreenElement) {
            document.exitFullscreen?.().catch(() => {});
          }
        } catch (err) {}
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  const showNotice = (msg: string) => {
    setActionNotice(msg);
    setTimeout(() => setActionNotice(null), 2500);
  };

  const documentSections = [
    {
      id: "toc",
      title: "Table of contents",
      content: (
        <div className="bg-slate-50/70 border border-slate-100 rounded-xl p-5 flex flex-col gap-2.5 text-slate-700 font-medium">
          <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-1.5 text-xs">
            <span className="font-semibold text-slate-900">1.0 Introduction to Object-Oriented Paradigm</span>
            <span className="text-slate-400">Page 1</span>
          </div>
          <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-1.5 text-xs pl-3">
            <span>1.1 Historical Evolution & Design Philosophy</span>
            <span className="text-slate-400">Page 1</span>
          </div>
          <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-1.5 text-xs pl-3">
            <span>1.2 Procedural vs. Object-Oriented Decomposition</span>
            <span className="text-slate-400">Page 1</span>
          </div>
          <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-1.5 text-xs">
            <span className="font-semibold text-slate-900">2.0 Core Architectural Pillars</span>
            <span className="text-slate-400">Page 2</span>
          </div>
          <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-1.5 text-xs pl-3">
            <span>2.1 Encapsulation and Invariant Protection</span>
            <span className="text-slate-400">Page 2</span>
          </div>
          <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-1.5 text-xs pl-3">
            <span>2.2 Data Abstraction & Interface Contracts</span>
            <span className="text-slate-400">Page 2</span>
          </div>
          <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-1.5 text-xs pl-3">
            <span>2.3 Class Hierarchies, Subtyping & Composition</span>
            <span className="text-slate-400">Page 2</span>
          </div>
          <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-1.5 text-xs pl-3">
            <span>2.4 Polymorphism & Dynamic Virtual Dispatch</span>
            <span className="text-slate-400">Page 3</span>
          </div>
          <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-1.5 text-xs">
            <span className="font-semibold text-slate-900">3.0 SOLID Principles & Architectural Patterns</span>
            <span className="text-slate-400">Page 3</span>
          </div>
          <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-1.5 text-xs">
            <span className="font-semibold text-slate-900">4.0 Memory Layout, Runtime Cost & Modern Hybrid Languages</span>
            <span className="text-slate-400">Page 4</span>
          </div>
          <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-1.5 text-xs">
            <span className="font-semibold text-slate-900">5.0 Conclusion & Critical Evaluation</span>
            <span className="text-slate-400">Page 4</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-slate-900">6.0 Academic References</span>
            <span className="text-slate-400">Page 4</span>
          </div>
        </div>
      ),
    },
    {
      id: "intro",
      title: "Introduction",
      content: (
        <div className="space-y-4 text-[13.5px] leading-[1.7] text-slate-600 font-normal">
          <p>
            Object-Oriented Programming (OOP) represents one of the foundational software design paradigms in modern computer science. Emerged in response to the growing complexity of software systems in the late 20th century, OOP introduced an architectural model predicated upon organizing systems into autonomous, collaborating units termed <strong className="font-semibold text-slate-900">objects</strong>. Each object encapsulates both computational state (attributes) and executable operations (methods), mirroring discrete entities and behaviors in real-world operational domains.
          </p>
          <p>
            In contrast to traditional procedural programming—which conceptualizes software execution as a sequence of procedural subroutine calls operating upon shared, often mutable global state—the object-oriented paradigm strictly mandates <strong className="font-semibold text-slate-900">information hiding</strong>, <strong className="font-semibold text-slate-900">data abstraction</strong>, and <strong className="font-semibold text-slate-900">contract-based interfaces</strong>. This design separation dramatically diminishes cognitive overhead for engineering teams, mitigates side-effect cascading during refactoring, and facilitates concurrent development across large-scale enterprise codebases.
          </p>
          <p>
            The primary objective of this academic document is to furnish a rigorous analysis of the core principles underpinning Object-Oriented Programming, examine the pragmatic application of the four fundamental pillars, evaluate the structural significance of the SOLID design tenets, and survey how contemporary high-level languages synthesize object orientation with modern functional programming paradigms.
          </p>
        </div>
      ),
    },
    {
      id: "body",
      title: "Body",
      content: (
        <div className="space-y-6 text-[13.5px] leading-[1.7] text-slate-600 font-normal">
          {/* Subsection 1 */}
          <div className="space-y-2">
            <h4 className="text-[15px] font-bold text-slate-900 tracking-tight">
              1. The Historical Paradigm Shift: From Procedural to Object-Centric Design
            </h4>
            <p>
              In early computational paradigms governed by languages such as ALGOL, Fortran, and C, programs were structured around linear algorithms and procedural decompositions. As software scopes expanded into multi-million-line enterprise applications, procedural architectures exhibited acute structural fragility: global data tables were vulnerable to unintended mutation, and alterations to a solitary data structure routinely triggered catastrophic regression failures throughout downstream consumer modules.
            </p>
            <p>
              The formalization of Object-Oriented Programming pioneered by Ole-Johan Dahl and Kristen Nygaard with Simula 67, and subsequently expanded into pure object messaging systems by Alan Kay with Smalltalk-80, radically transformed software engineering. By binding state tightly to behavior within isolated instances, OOP introduced bounded contexts where data can only be inspected or transformed through deliberate, public method contracts.
            </p>
          </div>

          {/* Subsection 2: The Four Pillars */}
          <div className="space-y-3">
            <h4 className="text-[15px] font-bold text-slate-900 tracking-tight">
              2. The Four Pillars of Object-Oriented Programming
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4">
                <div className="text-[13px] font-bold text-blue-600 mb-1">A. Encapsulation</div>
                <p className="text-[12.5px] leading-relaxed text-slate-600">
                  Encapsulation restricts direct access to internal state through access modifiers (<code className="text-slate-800 font-mono bg-white px-1 py-0.5 rounded border border-slate-200">private</code>, <code className="text-slate-800 font-mono bg-white px-1 py-0.5 rounded border border-slate-200">protected</code>). Mutators and accessors maintain strict class invariants, eliminating unvetted external modifications and ensuring deterministic data boundaries.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4">
                <div className="text-[13px] font-bold text-emerald-600 mb-1">B. Abstraction</div>
                <p className="text-[12.5px] leading-relaxed text-slate-600">
                  Abstraction exposes essential conceptual capabilities while concealing implementation intricacies through abstract base classes and interfaces. Consumers interface with high-level behavioral contracts without needing knowledge of internal algorithms or storage implementations.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4">
                <div className="text-[13px] font-bold text-indigo-600 mb-1">C. Inheritance</div>
                <p className="text-[12.5px] leading-relaxed text-slate-600">
                  Inheritance formalizes taxonomic &quot;is-a&quot; relationships, facilitating hierarchical code reuse and behavioral specialization. Derived subclasses inherit fields and methods from ancestral classes while tailoring specialized execution paths through method overriding.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4">
                <div className="text-[13px] font-bold text-amber-600 mb-1">D. Polymorphism</div>
                <p className="text-[12.5px] leading-relaxed text-slate-600">
                  Polymorphism allows homogeneous interfaces to govern heterogeneous underlying types. Dynamic dispatch via virtual method tables (<span className="italic">vtables</span>) ensures runtime resolution of appropriate method overrides based on the concrete runtime instance.
                </p>
              </div>
            </div>

            <p>
              When harmoniously synthesized, these four pillars empower developers to construct systems that exhibit high cohesion and loose coupling. While encapsulation guards localized data boundaries, polymorphism guarantees that client modules remain resilient against the introduction of novel derived variants.
            </p>
          </div>

          {/* Subsection 3: SOLID Principles */}
          <div className="space-y-2">
            <h4 className="text-[15px] font-bold text-slate-900 tracking-tight">
              3. The SOLID Architectural Design Tenets
            </h4>
            <p>
              To prevent the emergence of rigid, fragile, and immobile architectures, Robert C. Martin formulated the five SOLID design principles, establishing gold standards for resilient object-oriented software engineering:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[13px] text-slate-600">
              <li>
                <strong className="text-slate-800">Single Responsibility Principle (SRP):</strong> A class should possess one, and only one, motivation for modification, confining its domain scope to a singular operational objective.
              </li>
              <li>
                <strong className="text-slate-800">Open/Closed Principle (OCP):</strong> Software artifacts must remain open for extension but closed for modification, leveraging polymorphic abstraction rather than modifying core production routines.
              </li>
              <li>
                <strong className="text-slate-800">Liskov Substitution Principle (LSP):</strong> Subtypes must be transparently substitutable for their supertypes without altering the semantic correctness or invariants of the executing host program.
              </li>
              <li>
                <strong className="text-slate-800">Interface Segregation Principle (ISP):</strong> Clients should never be coerced into relying upon broad interface specifications comprising methods they do not invoke; fine-grained, role-focused interfaces are strictly preferred.
              </li>
              <li>
                <strong className="text-slate-800">Dependency Inversion Principle (DIP):</strong> High-level system policy modules must not depend upon low-level utility implementations; both must rely upon abstractions.
              </li>
            </ul>
          </div>

          {/* Subsection 4: Design Patterns & Modern Synthesis */}
          <div className="space-y-2">
            <h4 className="text-[15px] font-bold text-slate-900 tracking-tight">
              4. Design Patterns & Performance Considerations in Modern Languages
            </h4>
            <p>
              The structural flexibility afforded by OOP catalyzed the standardization of universal Gang of Four (GoF) design patterns—including the <em>Factory Method</em>, <em>Observer</em>, <em>Strategy</em>, and <em>Decorator</em>. These patterns establish proven architectural blueprints for decoupling object creation, distributed event broadcasting, and dynamic behavioral injection.
            </p>
            <p>
              In high-performance contexts, naive object-oriented modeling introduces measurable overheads: pointer indirection through heap allocations degrades CPU L1/L2 cache locality, and virtual dispatch calls inhibit inline compiler optimizations. Consequently, modern software systems implemented in languages such as Java 21, C# 12, TypeScript, and Rust adopt a pragmatic multiparadigm synthesis: combining the robust domain encapsulation and polymorphic typing of OOP with functional data-oriented techniques, immutable records, and exhaustive pattern matching.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "conclusion",
      title: "Conclusion",
      content: (
        <div className="space-y-4 text-[13.5px] leading-[1.7] text-slate-600 font-normal">
          <p>
            Object-Oriented Programming has indelibly shaped the trajectory of modern computing, evolving from an innovative academic concept into the default architectural backbone of enterprise software engineering. By standardizing mechanisms for data encapsulation, modular abstraction, hierarchical inheritance, and dynamic polymorphism, OOP provides developers with cognitive structures that translate complex real-world problem domains into intelligible, maintainable code architectures.
          </p>
          <p>
            Crucially, the continued durability of OOP stems not from dogmatic adherence to rigid class taxonomies, but from its capacity to integrate modern architectural insights. Principles such as favoring object composition over deep inheritance trees, adopting strict interface segregation, and welcoming functional immutability have addressed historical limitations regarding memory efficiency and state unpredictability.
          </p>
          <p>
            As software systems become increasingly distributed, multi-threaded, and heterogeneous, a thorough conceptual and practical mastery of Object-Oriented Programming remains an indispensable competency. It provides software architects and practitioners with the foundational vocabulary and structural discipline necessary to author resilient, scalable, and enduring digital solutions.
          </p>
        </div>
      ),
    },
    {
      id: "references",
      title: "Reference",
      content: (
        <div className="space-y-3 text-[12.5px] leading-[1.65] text-slate-600 font-normal">
          <div className="pl-6 -indent-6 border-b border-slate-100 pb-2.5">
            <span className="font-semibold text-slate-800">Booch, G., Maksimchuk, R. A., Engle, M. W., Young, B. J., Conallen, J., & Houston, K. A.</span> (2007). <em>Object-Oriented Analysis and Design with Applications</em> (3rd ed.). Addison-Wesley Professional.
          </div>
          <div className="pl-6 -indent-6 border-b border-slate-100 pb-2.5">
            <span className="font-semibold text-slate-800">Gamma, E., Helm, R., Johnson, R., & Vlissides, J.</span> (1994). <em>Design Patterns: Elements of Reusable Object-Oriented Software</em>. Addison-Wesley Longman Publishing Co.
          </div>
          <div className="pl-6 -indent-6 border-b border-slate-100 pb-2.5">
            <span className="font-semibold text-slate-800">Kay, A. C.</span> (1993). The Early History of Smalltalk. <em>ACM SIGPLAN Notices</em>, 28(3), 69–95. https://doi.org/10.1145/155360.155364
          </div>
          <div className="pl-6 -indent-6 border-b border-slate-100 pb-2.5">
            <span className="font-semibold text-slate-800">Liskov, B., & Wing, J. M.</span> (1994). A Behavioral Notion of Subtyping. <em>ACM Transactions on Programming Languages and Systems</em>, 16(6), 1811–1841.
          </div>
          <div className="pl-6 -indent-6 border-b border-slate-100 pb-2.5">
            <span className="font-semibold text-slate-800">Martin, R. C.</span> (2008). <em>Clean Code: A Handbook of Agile Software Craftsmanship</em>. Prentice Hall PTR.
          </div>
          <div className="pl-6 -indent-6 border-b border-slate-100 pb-2.5">
            <span className="font-semibold text-slate-800">Meyer, B.</span> (1997). <em>Object-Oriented Software Construction</em> (2nd ed.). Prentice Hall.
          </div>
          <div className="pl-6 -indent-6">
            <span className="font-semibold text-slate-800">Stroustrup, B.</span> (2013). <em>The C++ Programming Language</em> (4th ed.). Addison-Wesley.
          </div>
        </div>
      ),
    },
  ];

  return (
    <div ref={containerRef} className="flex flex-col xl:flex-row gap-12 w-full pb-20">
      
      {/* Toast Notification */}
      {actionNotice && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-full text-xs font-semibold shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <IconCheck className="w-4 h-4 text-emerald-400" />
          <span>{actionNotice}</span>
        </div>
      )}

      {/* Left Text Editor Area */}
      <div className="flex-1 flex flex-col gap-6 w-full max-w-4xl">
        {documentSections.map((section) => {
          const isOpen = !!openSections[section.id];
          return (
            <div key={section.id} className="flex flex-col border-b border-slate-100 pb-5 transition-all">
              {/* Clickable Header with working toggle */}
              <div 
                onClick={() => toggleSection(section.id)}
                className="flex items-center justify-between py-2 cursor-pointer group select-none hover:opacity-85 transition-opacity"
              >
                <div className="flex items-center gap-2.5">
                  <h3 className="text-[17px] font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {section.title}
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                    {isOpen ? "Expanded" : "Collapsed"}
                  </span>
                </div>
                <div className="p-1 rounded-full hover:bg-slate-100 transition-colors">
                  <IconChevronDown 
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-600" : "rotate-0"
                    }`} 
                  />
                </div>
              </div>
              
              {/* Section Content with show/hide toggle */}
              {isOpen && (
                <div className="mt-4 animate-in fade-in slide-in-from-top-1 duration-200 pr-2">
                  {section.content}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Right Preview & Actions */}
      <div className="w-full xl:w-[400px] flex-shrink-0 flex flex-col items-center bg-[#f8fafc]/50 border border-slate-100 rounded-[32px] p-8 shadow-sm h-fit sticky top-10">
         
         {/* Action Bar */}
         <div className="flex items-center gap-3 mb-8 w-full justify-center">
            <Button 
              onClick={() => showNotice("Document exported in " + (formData.format || "DOCX") + " format")}
              variant="outline" 
              className="flex-1 rounded-full bg-white border-slate-200 text-slate-700 h-10 shadow-sm font-bold text-[13px] hover:bg-slate-50 relative group"
            >
              <IconDownload className="w-4 h-4 mr-2 text-slate-500 group-hover:text-blue-600 transition-colors" />
              Download
            </Button>
            <Button 
              onClick={() => showNotice("Regenerating document content...")}
              variant="outline" 
              className="flex-1 rounded-full bg-white border-slate-200 text-slate-700 h-10 shadow-sm font-bold text-[13px] hover:bg-slate-50 relative group"
            >
              <IconRefresh className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-500 transition-colors" />
              Regenerate
            </Button>
            <Button 
              onClick={() => showNotice("Document opened in inline editor")}
              variant="outline" 
              className="flex-1 rounded-full bg-white border-slate-200 text-slate-700 h-10 shadow-sm font-bold text-[13px] hover:bg-slate-50 relative group"
            >
              <IconEdit className="w-4 h-4 mr-2 text-slate-500 group-hover:text-amber-500 transition-colors" />
              Edit
            </Button>
         </div>

         {/* Document Preview Thumbnail with responsive zoom scaling */}
         <div className="w-full flex justify-center items-start overflow-auto mb-6 min-h-[390px] max-h-[470px] py-2 scrollbar-thin">
           <div 
             style={{ 
               transform: `scale(${zoom})`, 
               transformOrigin: "top center",
               transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
             }}
             className="w-[280px] aspect-[1/1.414] bg-white rounded-lg shadow-[0_20px_45px_rgba(0,0,0,0.1)] border border-slate-200 flex flex-col p-7 relative overflow-hidden select-none shrink-0"
           >
              {/* Academic Color bar */}
              <div className="w-1.5 h-full bg-[#10b981] absolute top-0 left-0"></div>
              
              {/* Page 1: Cover Header */}
              {currentPage === 1 && (
                <>
                  <div className="text-[9px] font-bold text-slate-300 uppercase tracking-widest mb-6">Genas Generated</div>
                  <div className="w-full h-2 bg-slate-100 rounded-full mb-3"></div>
                  <div className="w-3/4 h-2 bg-slate-100 rounded-full mb-10"></div>
                  
                  <h4 className="text-[16px] font-bold text-slate-800 leading-tight mb-2">
                    {formData.topic || formData.course || "Object-Oriented Programming"}
                  </h4>
                  <div className="text-[11px] font-semibold text-[#10b981] mb-12 uppercase tracking-wide">
                    {formData.category || "Assignment"} • {formData.format || "DOCX"}
                  </div>
                  
                  <div className="w-1/2 h-0.5 bg-slate-200 rounded-full mb-1"></div>
                  <div className="text-[9px] font-medium text-slate-400 mt-auto">December 20, 2025</div>
                </>
              )}

              {/* Page 2: Table of Contents & Intro Preview */}
              {currentPage === 2 && (
                <>
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2">Table of Contents & Intro</div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full mb-4"></div>
                  <div className="space-y-2 mb-4 text-[8px] text-slate-600 font-mono">
                    <div className="flex justify-between"><span>1.0 Introduction</span><span>p. 1</span></div>
                    <div className="flex justify-between"><span>2.0 Core Pillars of OOP</span><span>p. 2</span></div>
                    <div className="flex justify-between"><span>3.0 SOLID Principles</span><span>p. 3</span></div>
                  </div>
                  <div className="text-[10px] font-bold text-slate-800 mb-1">1.0 Introduction</div>
                  <p className="text-[8px] leading-relaxed text-slate-500 line-clamp-6">
                    Object-Oriented Programming (OOP) is a fundamental paradigm in modern software development that emphasizes modularity, reusability, and scalability...
                  </p>
                  <div className="text-[8px] font-medium text-slate-400 mt-auto text-right">Page 2</div>
                </>
              )}

              {/* Page 3: Body Content Preview */}
              {currentPage === 3 && (
                <>
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2">2.0 Core Pillars of OOP</div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full mb-3"></div>
                  <p className="text-[8px] leading-relaxed text-slate-500 mb-3 line-clamp-4">
                    Encapsulation, Abstraction, Inheritance, and Polymorphism form the architectural backbone of reusable software modules...
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 mb-3">
                    <div className="bg-slate-50 p-1 rounded border border-slate-100 text-[7px] font-medium text-slate-600">Encapsulation</div>
                    <div className="bg-slate-50 p-1 rounded border border-slate-100 text-[7px] font-medium text-slate-600">Abstraction</div>
                    <div className="bg-slate-50 p-1 rounded border border-slate-100 text-[7px] font-medium text-slate-600">Inheritance</div>
                    <div className="bg-slate-50 p-1 rounded border border-slate-100 text-[7px] font-medium text-slate-600">Polymorphism</div>
                  </div>
                  <div className="text-[8px] font-medium text-slate-400 mt-auto text-right">Page 3</div>
                </>
              )}

              {/* Page 4: Conclusion & References Preview */}
              {currentPage === 4 && (
                <>
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2">Conclusion & References</div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full mb-3"></div>
                  <p className="text-[8px] leading-relaxed text-slate-500 mb-4 line-clamp-5">
                    In conclusion, Object-Oriented Programming continues to serve as an indispensable paradigm in software engineering...
                  </p>
                  <div className="text-[8px] font-bold text-slate-700 mb-1">References</div>
                  <div className="text-[6.5px] leading-tight text-slate-400 space-y-1">
                    <div>Gamma et al. (1994). Design Patterns.</div>
                    <div>Martin, R. C. (2008). Clean Code.</div>
                    <div>Stroustrup, B. (2013). C++ Programming Language.</div>
                  </div>
                  <div className="text-[8px] font-medium text-slate-400 mt-auto text-right">Page 4</div>
                </>
              )}
           </div>
         </div>

         {/* Screen Controls (Zoom In, Zoom Out, Page Switcher, Full Screen) */}
         <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
            {/* Zoom In Button */}
            <button 
              onClick={handleZoomIn}
              title="Zoom in"
              disabled={zoom >= 2.0}
              className="text-slate-500 hover:text-blue-600 disabled:opacity-40 disabled:hover:text-slate-500 transition-colors p-1 rounded-full hover:bg-slate-100"
            >
               <IconZoomIn className="w-4 h-4" />
            </button>

            {/* Zoom Out Button */}
            <button 
              onClick={handleZoomOut}
              title="Zoom out"
              disabled={zoom <= 0.6}
              className="text-slate-500 hover:text-blue-600 disabled:opacity-40 disabled:hover:text-slate-500 transition-colors p-1 rounded-full hover:bg-slate-100"
            >
               <IconZoomOut className="w-4 h-4" />
            </button>

            {/* Zoom Level Indicator with Reset */}
            <span 
              onClick={handleResetZoom}
              title="Click to reset zoom (100%)"
              className="text-[11px] font-bold text-slate-600 px-1 min-w-[38px] text-center select-none cursor-pointer hover:text-blue-600 transition-colors"
            >
              {Math.round(zoom * 100)}%
            </span>

            <div className="w-[1px] h-4 bg-slate-200 mx-0.5" />

            {/* Page Navigation */}
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage <= 1}
              title="Previous Page"
              className="text-slate-400 hover:text-slate-700 disabled:opacity-30 transition-colors p-0.5"
            >
              <IconChevronLeft className="w-3.5 h-3.5" />
            </button>

            <span className="text-[11px] font-bold text-slate-700 min-w-[28px] text-center select-none">
              {currentPage} / {totalPages}
            </span>

            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage >= totalPages}
              title="Next Page"
              className="text-slate-400 hover:text-slate-700 disabled:opacity-30 transition-colors p-0.5"
            >
              <IconChevronRight className="w-3.5 h-3.5" />
            </button>

            <div className="w-[1px] h-4 bg-slate-200 mx-0.5" />

            {/* Full Screen Button */}
            <button 
              onClick={handleToggleFullscreen}
              title={isFullscreen ? "Exit full screen" : "Make full screen"}
              className="text-slate-500 hover:text-blue-600 transition-colors p-1 rounded-full hover:bg-slate-100"
            >
               {isFullscreen ? <IconArrowsMinimize className="w-4 h-4" /> : <IconArrowsMaximize className="w-4 h-4" />}
            </button>
         </div>
         
         <div className="mt-8 text-center">
            <Button onClick={onBack} variant="link" className="text-slate-400 hover:text-slate-600 text-[12px] font-semibold underline-offset-4">
              Back to templates
            </Button>
         </div>
      </div>

      {/* FULL SCREEN MODAL / READER VIEW */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-md flex flex-col animate-in fade-in duration-200">
          {/* Full Screen Top Bar */}
          <div className="w-full bg-slate-900/95 border-b border-slate-800 px-6 py-3.5 flex items-center justify-between text-white select-none">
            <div className="flex items-center gap-3">
              <IconFileText className="w-5 h-5 text-blue-400" />
              <div>
                <h3 className="text-sm font-bold text-white tracking-tight">
                  {formData.topic || formData.course || "Object-Oriented Programming"}
                </h3>
                <span className="text-[11px] text-slate-400 font-medium">
                  {formData.category || "Assignment"} • {formData.academicLevel || "Undergraduate"}
                </span>
              </div>
            </div>

            {/* Full Screen Controls */}
            <div className="flex items-center gap-3 bg-slate-800/80 rounded-full px-4 py-1.5 border border-slate-700">
              <button 
                onClick={handleZoomOut} 
                title="Zoom out"
                disabled={zoom <= 0.6}
                className="text-slate-300 hover:text-white disabled:opacity-40 p-1"
              >
                <IconZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold text-slate-300 min-w-[42px] text-center">
                {Math.round(zoom * 100)}%
              </span>
              <button 
                onClick={handleZoomIn} 
                title="Zoom in"
                disabled={zoom >= 1.8}
                className="text-slate-300 hover:text-white disabled:opacity-40 p-1"
              >
                <IconZoomIn className="w-4 h-4" />
              </button>
              
              <div className="w-[1px] h-4 bg-slate-700 mx-1" />

              <button 
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage <= 1}
                className="text-slate-300 hover:text-white disabled:opacity-40 p-1"
              >
                <IconChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold text-slate-200">
                Page {currentPage} of {totalPages}
              </span>
              <button 
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage >= totalPages}
                className="text-slate-300 hover:text-white disabled:opacity-40 p-1"
              >
                <IconChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Exit Full Screen Button */}
            <button 
              onClick={() => setIsFullscreen(false)}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border border-slate-700"
            >
              <IconArrowsMinimize className="w-4 h-4" />
              <span>Exit Full Screen</span>
            </button>
          </div>

          {/* Full Screen Document Paper Container */}
          <div className="flex-1 overflow-auto p-8 flex justify-center items-start">
            <div 
              style={{ 
                transform: `scale(${zoom})`, 
                transformOrigin: "top center",
                transition: "transform 0.2s ease-out"
              }}
              className="w-full max-w-3xl bg-white text-slate-900 rounded-xl shadow-2xl p-12 md:p-16 my-6 border border-slate-200 space-y-10"
            >
              {/* Header inside paper */}
              <div className="border-b border-slate-200 pb-8 text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {formData.category || "Academic Assignment"}
                </span>
                <h1 className="text-3xl font-extrabold text-slate-900 mt-4 tracking-tight">
                  {formData.topic || formData.course || "Object-Oriented Programming"}
                </h1>
                <p className="text-sm font-medium text-slate-500 mt-2">
                  Academic Level: {formData.academicLevel || "Undergraduate"} • Format: {formData.format || "DOCX"} • Depth: {formData.depthLevel || "Standard"}
                </p>
              </div>

              {/* Document Sections in Paper */}
              {documentSections.map((section) => (
                <section key={section.id} className="space-y-4">
                  <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                    {section.title}
                  </h2>
                  <div className="text-sm leading-relaxed text-slate-700">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
