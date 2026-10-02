"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IconChevronDown, IconCheck } from "@tabler/icons-react";

export function StepDetails({ formData, updateForm, onNext, onBack }: any) {
  const formatOptions = [
    { 
      id: "DOCX", 
      label: "DOCX", 
      desc: "Fully customizable format compatible with Microsoft Word and similar editors.", 
      image: "/images/WORD.png" 
    },
    { 
      id: "PDF", 
      label: "PDF", 
      desc: "Fixed layout file ideal for sharing, printing, and universal viewing across all devices.", 
      image: "/images/PDF.png" 
    },
    { 
      id: "PPT", 
      label: "PPT", 
      desc: "Slide based format designed for visual presentations and classroom delivery.", 
      image: "/images/PPT.png" 
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [academicDropdownOpen, setAcademicDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAcademicDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const academicLevels = ["High School", "Undergraduate", "Master's", "PhD"];
  const faqs = [
    "How detailed should my instructions be?",
    "Can I edit the document after it's generated?",
    "Is the generated content plagiarism-free?",
    "What academic levels are supported?",
    "Can I regenerate if I'm not satisfied?",
    "What happens if I leave some fields empty?"
  ];

  const handleStructureToggle = (key: string) => {
    updateForm({ structure: { ...formData.structure, [key]: !formData.structure[key] } });
  };

  return (
    <div className="flex flex-col xl:flex-row gap-12 w-full pb-20">
      {/* Left: Configuration Form */}
      <div className="flex-1 flex flex-col gap-10">
        
        <div>
          <h2 className="text-[22px] font-bold text-slate-900 mb-1">Tell us about your document</h2>
          <p className="text-[14px] text-slate-500 font-medium">Provide the key details and requirements.</p>
        </div>

        {/* Basic Information */}
        <section className="flex flex-col gap-4">
          <h3 className="text-[14px] font-bold tracking-widest text-slate-800 uppercase">Basic Information</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-[14px] font-semibold text-slate-700">Course / Subject</label>
              <input 
                type="text" 
                placeholder="e.g., Object-Oriented Programming" 
                value={formData.course}
                onChange={(e) => updateForm({ course: e.target.value })}
                className="w-full border border-slate-200 rounded-lg px-4 h-11 text-[14px] focus:outline-none focus:ring-2 ring-[#3b60ff] transition-all bg-white"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-[14px] font-semibold text-slate-700">Topic / Title</label>
              <input 
                type="text" 
                placeholder="Enter your document title" 
                value={formData.topic}
                onChange={(e) => updateForm({ topic: e.target.value })}
                className="w-full border border-slate-200 rounded-lg px-4 h-11 text-[14px] focus:outline-none focus:ring-2 ring-[#3b60ff] transition-all bg-white"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2 mt-2">
            <label className="text-[14px] font-semibold text-slate-700">Instructions / Description</label>
            <textarea 
              placeholder="Add detailed instructions for generating your document..." 
              value={formData.instructions}
              onChange={(e) => updateForm({ instructions: e.target.value })}
              className="w-full border border-slate-200 rounded-lg p-4 h-32 text-[14px] focus:outline-none focus:ring-2 ring-[#3b60ff] transition-all bg-white resize-none"
            />
          </div>
        </section>

        {/* Academic Settings */}
        <section className="flex flex-col gap-4">
          <h3 className="text-[14px] font-bold tracking-widest text-slate-800 uppercase">Academic Settings</h3>
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Custom Interactive Academic Level Dropdown */}
            <div className="flex-1 flex flex-col gap-2 relative">
              <label className="text-[14px] font-semibold text-slate-700">Academic Level</label>
              <div className="relative" ref={dropdownRef}>
                <button 
                  type="button"
                  onClick={() => setAcademicDropdownOpen(!academicDropdownOpen)}
                  className="w-full border border-slate-200 rounded-lg px-4 h-11 text-[14px] bg-white flex items-center justify-between focus:outline-none focus:ring-2 ring-[#3b60ff] transition-all text-slate-800 font-medium cursor-pointer shadow-xs hover:border-slate-300"
                >
                  <span>{formData.academicLevel || "Undergraduate"}</span>
                  <IconChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${academicDropdownOpen ? "rotate-180 text-[#3b60ff]" : ""}`} />
                </button>

                {academicDropdownOpen && (
                  <div className="absolute top-[calc(100%+6px)] left-0 right-0 z-50 bg-white border border-slate-200 rounded-xl shadow-xl py-1.5 animate-in fade-in zoom-in-95 duration-150">
                    {academicLevels.map((lvl) => {
                      const isSelected = (formData.academicLevel || "Undergraduate") === lvl;
                      return (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => {
                            updateForm({ academicLevel: lvl });
                            setAcademicDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-2.5 text-left text-[13.5px] flex items-center justify-between transition-colors ${
                            isSelected 
                              ? "bg-blue-50/70 text-[#3b60ff] font-bold" 
                              : "text-slate-700 hover:bg-slate-50 font-medium"
                          }`}
                        >
                          <span>{lvl}</span>
                          {isSelected && <IconCheck className="w-4 h-4 text-[#3b60ff]" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex-[1.5] flex flex-col gap-2">
              <label className="text-[14px] font-semibold text-slate-700">Depth Level</label>
              <div className="flex items-center border border-slate-200 rounded-lg p-1 bg-white h-11">
                {["Basic", "Standard", "Detailed"].map(level => (
                  <button 
                    key={level}
                    onClick={() => updateForm({ depthLevel: level })}
                    className={`flex-1 h-full rounded-md text-[13px] font-bold transition-colors ${
                      formData.depthLevel === level ? "bg-[#3b60ff] text-white shadow-sm" : "hover:bg-slate-50 text-slate-600"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Structure Control */}
        <section className="flex flex-col gap-4">
          <h3 className="text-[14px] font-bold tracking-widest text-slate-800 uppercase">Structure Control</h3>
          <div className="bg-[#f8fafc]/50 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border border-slate-100">
            {[
              { key: "toc", label: "Table of Contents" },
              { key: "intro", label: "Introduction" },
              { key: "body", label: "Body" },
              { key: "conclusion", label: "Conclusion" },
              { key: "references", label: "References" }
            ].map(item => (
              <div key={item.key} className="flex items-center justify-between">
                <span className="text-[14px] font-semibold text-slate-700">{item.label}</span>
                <div 
                  onClick={() => handleStructureToggle(item.key)}
                  className={`w-10 h-[22px] rounded-full flex items-center p-1 cursor-pointer transition-colors ${
                    (formData.structure as any)[item.key] ? "bg-[#3b60ff]" : "bg-slate-200"
                  }`}
                >
                  <div className={`w-3.5 h-3.5 bg-white rounded-full shadow-sm transition-transform ${
                    (formData.structure as any)[item.key] ? "translate-x-[18px]" : "translate-x-0"
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* File Format */}
        <section className="flex flex-col gap-4">
          <h3 className="text-[14px] font-bold tracking-widest text-slate-800 uppercase">File Format</h3>
          <div className="flex flex-wrap gap-4 sm:gap-5 items-center">
             {formatOptions.map(format => {
               const isSelected = formData.format === format.id;
               return (
                 <div 
                   key={format.id}
                   onClick={() => updateForm({ format: format.id })}
                   className={`relative w-[204px] min-w-[204px] max-w-[204px] h-[170px] min-h-[170px] max-h-[170px] shrink-0 rounded-[20px] cursor-pointer overflow-hidden group shadow-sm transition-all duration-300 select-none ${
                     isSelected 
                       ? "ring-2 ring-[#2458f5] shadow-lg shadow-blue-500/20 scale-[1.01]" 
                       : "ring-1 ring-slate-800/10 hover:ring-slate-300 hover:shadow-md"
                   }`}
                 >
                   {/* Background Format Image (WORD.png / PDF.png / PPT.png) */}
                   <Image 
                     src={format.image}
                     alt={format.label}
                     width={204}
                     height={170}
                     className="w-[204px] h-[170px] object-cover object-center pointer-events-none select-none block"
                     priority
                   />

                   {/* Header Area: Format title next to the background icon */}
                   <div className="absolute top-0 left-0 right-0 h-[36%] flex items-center pl-[26%] pr-3 pointer-events-none">
                     <h4 className="text-white text-[19px] font-black tracking-tight drop-shadow-sm">
                       {format.id}
                     </h4>
                   </div>

                   {/* Content Area: Description & Selection button */}
                   <div className="absolute bottom-0 left-0 right-0 h-[64%] p-3.5 flex flex-col justify-between pointer-events-none">
                     <p className="text-[10px] font-medium leading-[1.35] text-white/90 drop-shadow-xs">
                       {format.desc}
                     </p>
                     
                     <div className="mt-auto flex justify-end">
                       <div className={`text-[10px] font-bold px-3 py-0.5 rounded-full transition-all shadow-2xs pointer-events-auto ${
                         isSelected 
                           ? "bg-white text-slate-900 shadow-sm" 
                           : "bg-white/20 hover:bg-white/30 text-white"
                       }`}>
                         {isSelected ? "Selected" : "Select"}
                       </div>
                     </div>
                   </div>
                 </div>
               );
             })}
          </div>
        </section>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-4 mb-20">
           <Button onClick={onBack} variant="outline" className="rounded-full bg-transparent border-slate-300 text-slate-600 px-6 h-10 font-bold text-[13px]">
             Back
           </Button>
           <Button onClick={onNext} className="rounded-full bg-[#3b60ff] hover:bg-[#3252d9] text-white px-8 h-10 shadow-sm transition-all font-bold text-[13px]">
             Continue
           </Button>
        </div>

      </div>

      {/* Right: FAQs Contextual */}
      <div className="w-full xl:w-[320px] 2xl:w-[400px] flex-shrink-0 animate-fade-in">
        <div className="flex flex-col gap-3 sticky top-10">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300"
            >
               <button 
                 onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                 className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
               >
                 <span className="text-[13px] font-bold text-slate-700 pr-4">{faq}</span>
                 <IconChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
               </button>
               <div className={`px-5 overflow-hidden transition-all duration-300 ${openFaq === idx ? "max-h-32 pb-4 opacity-100" : "max-h-0 opacity-0"}`}>
                 <p className="text-[12px] font-medium text-slate-500 leading-relaxed">
                   Based on your selection, providing clear bullet points in the instructions field ensures the AI understands your specific grading criteria perfectly.
                 </p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
