"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IconChevronDown } from "@tabler/icons-react";

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
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-[14px] font-semibold text-slate-700">Academic Level</label>
              <div className="relative">
                <select 
                  value={formData.academicLevel}
                  onChange={(e) => updateForm({ academicLevel: e.target.value })}
                  className="w-full border border-slate-200 rounded-lg px-4 h-11 text-[14px] appearance-none bg-white focus:outline-none focus:ring-2 ring-[#3b60ff]"
                >
                  <option>High School</option>
                  <option>Undergraduate</option>
                  <option>Master's</option>
                  <option>PhD</option>
                </select>
                <IconChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
             {formatOptions.map(format => {
               const isSelected = formData.format === format.id;
               return (
                 <div 
                   key={format.id}
                   onClick={() => updateForm({ format: format.id })}
                   className={`relative rounded-[24px] cursor-pointer overflow-hidden group shadow-sm transition-all duration-300 h-[225px] sm:h-[235px] flex flex-col justify-between select-none ${
                     isSelected 
                       ? "ring-2 ring-[#2458f5] shadow-lg shadow-blue-500/20 scale-[1.01]" 
                       : "ring-1 ring-slate-800/10 hover:ring-slate-300 hover:shadow-md"
                   }`}
                 >
                   {/* Background Format Image (WORD.png / PDF.png / PPT.png) */}
                   <Image 
                     src={format.image}
                     alt={format.label}
                     fill
                     className="object-cover object-center pointer-events-none select-none"
                     priority
                   />

                   {/* Header Area: Format title next to the background icon */}
                   <div className="relative z-10 h-[92px] sm:h-[98px] flex items-center pl-[24%] pr-4">
                     <h4 className="text-white text-2xl sm:text-[28px] font-black tracking-tight drop-shadow-sm">
                       {format.id}
                     </h4>
                   </div>

                   {/* Content Area: Description & Selection button */}
                   <div className="relative z-10 flex-1 p-4.5 sm:p-5 flex flex-col justify-between">
                     <p className="text-[11px] sm:text-[11.5px] font-medium leading-[1.55] text-white/85 drop-shadow-xs">
                       {format.desc}
                     </p>
                     
                     <div className="mt-auto flex justify-end">
                       <div className={`text-[10px] sm:text-[11px] font-bold px-3.5 py-1 rounded-full transition-all shadow-2xs ${
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
