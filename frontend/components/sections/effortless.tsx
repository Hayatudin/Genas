"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconSparkles, IconDownload, IconBrain } from "@tabler/icons-react";

const CardWrapper = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`w-[175px] h-[250px] md:w-[210px] md:h-[300px] bg-gradient-to-b from-[#7394F5] to-[#c7d9fc] rounded-[24px] md:rounded-[32px] shadow-[0_12px_28px_rgba(0,0,0,0.12)] border-[1.2px] border-[#a0bcff] flex flex-col p-1.5 transition-transform duration-500 ease-in-out ${className}`}>
    <div className="w-full h-full bg-[#f4f7fc] rounded-[18px] md:rounded-[26px] overflow-hidden flex flex-col p-2 md:p-3 border-[1.5px] border-white shadow-inner relative z-10">
      <div className="flex-1 w-full relative overflow-hidden rounded-[12px] md:rounded-[18px] mb-2 md:mb-3 border border-slate-200/50 bg-white">
        {children}
      </div>
      {/* Footer Buttons */}
      <div className="w-full flex justify-between items-center gap-2">
        <div className="bg-gradient-to-b from-[#6292F8] to-[#2164FF] text-white text-[9px] md:text-[11px] font-bold py-2 md:py-2.5 rounded-full text-center cursor-pointer hover:bg-[#3252d9] transition-colors flex-1">
          Use Template
        </div>
        <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-gradient-to-b from-[#FFFFFF] to-[#C0C0C0] border-2 border-[#A6A6A6] flex items-center justify-center text-slate-500 font-medium text-[16px] md:text-[20px] flex-shrink-0 cursor-pointer hover:scale-105 transition-transform">
          <span className="mb-[1px] md:mb-[2px] leading-none">+</span>
        </div>
      </div>
    </div>
  </div>
);

const TemplateCards = () => {
  // Ordered IDs corresponding to images: [card-3, card-6, Center, card-2, card-5/4]
  const [cardOrder, setCardOrder] = useState([0, 1, 2, 3, 4]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCardOrder((prev) => {
        const next = [...prev];
        const first = next.shift()!;
        next.push(first);
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Define 5 distinct slots (Far Left, Left, Center, Right, Far Right)
  const slots = [
    { x: "-80%", y: "12%", rotate: -12, zIndex: 10, scale: 0.75, opacity: 1 },
    { x: "-45%", y: "4%", rotate: -6, zIndex: 20, scale: 0.88, opacity: 1 },
    { x: "0%", y: "0%", rotate: 0, zIndex: 30, scale: 1.02, opacity: 1 }, // Front & Center
    { x: "45%", y: "4%", rotate: 6, zIndex: 20, scale: 0.88, opacity: 1 },
    { x: "80%", y: "12%", rotate: 12, zIndex: 10, scale: 0.75, opacity: 1 },
  ];

  const renderCardContent = (id: number) => {
    switch (id) {
      case 0:
        return (
          <CardWrapper>
            <Image src="/images/sec.png" alt="Template" fill className="object-cover" />
          </CardWrapper>
        );
      case 1:
        return (
          <CardWrapper>
            <Image src="/images/card-6.png" alt="Template" fill className="object-cover" />
          </CardWrapper>
        );
      case 2:
        return (
          <CardWrapper>
            <Image src="/images/hom.png" alt="Template" fill className="object-cover" />
          </CardWrapper>

        );
      case 3:
        return (
          <CardWrapper>
            <Image src="/images/cd.png" alt="Template" fill className="object-cover" />
          </CardWrapper>
        );
      case 4:
        return (
          <CardWrapper>
            <div className="w-full h-full flex flex-col gap-1">
              <div className="flex-1 relative rounded-[8px] md:rounded-[12px] overflow-hidden border border-slate-100">
                <Image src="/images/card-5.jpg" alt="Template" fill className="object-cover" />
              </div>
              <div className="flex-1 relative rounded-[8px] md:rounded-[12px] overflow-hidden border border-slate-100">
                <Image src="/images/card-4.jpg" alt="Template" fill className="object-cover" />
              </div>
            </div>
          </CardWrapper>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-[450px] flex items-center justify-center perspective-[1000px]">
      {cardOrder.map((id, index) => {
        const slot = slots[index];
        return (
          <motion.div
            key={id}
            initial={false}
            animate={{
              x: slot.x,
              y: slot.y,
              rotate: slot.rotate,
              zIndex: slot.zIndex,
              scale: slot.scale,
              opacity: slot.opacity,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
              mass: 1
            }}
            style={{ position: "absolute" }}
            className="cursor-pointer"
          >
            {renderCardContent(id)}
          </motion.div>
        );
      })}
    </div>
  );
};

export function Effortless() {
  return (
    <section className="py-24 bg-[#F5F5F5] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-20 relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center justify-center bg-white text-[#737373] text-[11px] font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
          why Genas
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight text-balance max-w-4xl mx-auto">
          What Makes Genas Effortless Yet Powerful
        </h2>
        <p className="text-lg md:text-xl text-[#737373] font-medium max-w-2xl mx-auto leading-relaxed">
          One intelligent workspace to generate, customize, and export academic work without complexity.
        </p>
      </div>

      {/* Container for alternating blocks */}
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-24 lg:gap-32 relative z-10 mt-8">

        {/* Block 1: Smart Academic AI */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ">
          <div className="flex-1 text-left lg:pr-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Smart Academic AI</h3>
            <p className="text-base lg:text-lg text-[#737373] font-medium leading-relaxed mb-8">
              AI trained for assignments, essays, and research. delivering clear structure, academic tone, and accurate formatting.
            </p>
            <Link href="/signup">
              <Button className="rounded-full bg-[#2458f5] hover:bg-[#1a4cd2] text-white px-6 h-12 transition-all shadow-md shadow-blue-500/20 font-semibold">
                <IconSparkles className="w-5 h-5 mr-1.5" />
                Get Started
              </Button>
            </Link>
          </div>
          <div className="flex-1 w-full bg-gradient-to-b from-[#DEEAFF] via-[#F3F7FF] to-[#DEEAFF] rounded-[40px] aspect-[4/3] flex items-center justify-center relative p-4 sm:p-6 overflow-hidden">

            {/* Background Details */}
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70%] flex justify-between items-center opacity-[0.06] z-0">
              <div className="flex-1 h-[2px] bg-slate-900"></div>
              <div className="w-5 h-5 rounded-full border-[2.5px] border-slate-900 mx-2"></div>
              <div className="w-16 h-10 border-[2.5px] border-slate-900 rounded-xl flex flex-col items-center justify-center mx-3 space-y-1">
                <div className="w-5 h-[2.5px] bg-slate-900"></div>
                <div className="w-[2.5px] h-3 bg-slate-900 gap-1"></div>
              </div>
              <div className="w-5 h-5 rounded-full border-[2.5px] border-slate-900 mx-2"></div>
              <div className="flex-1 h-[2px] bg-slate-900"></div>
            </div>

            {/* SVG Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" preserveAspectRatio="none" viewBox="0 0 100 100">
              {/* Faint paths */}
              <path d="M 40 25 C 50 25, 48 50, 58 50" fill="none" stroke="#6b8aff" strokeWidth="0.5" opacity="0.4" vectorEffect="non-scaling-stroke" />
              <path d="M 40 50 L 58 50" fill="none" stroke="#6b8aff" strokeWidth="0.5" opacity="0.4" vectorEffect="non-scaling-stroke" />
              <path d="M 40 75 C 50 75, 48 50, 58 50" fill="none" stroke="#6b8aff" strokeWidth="0.5" opacity="0.4" vectorEffect="non-scaling-stroke" />

              {/* Animated paths */}
              <motion.path
                d="M 40 25 C 50 25, 48 50, 58 50"
                fill="none" stroke="#3B60FF" strokeWidth="1.5"
                strokeDasharray="4 6"
                animate={{ strokeDashoffset: [0, -10] }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                vectorEffect="non-scaling-stroke"
                className="drop-shadow-sm"
              />
              <motion.path
                d="M 40 50 L 58 50"
                fill="none" stroke="#3B60FF" strokeWidth="1.5"
                strokeDasharray="4 6"
                animate={{ strokeDashoffset: [0, -10] }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                vectorEffect="non-scaling-stroke"
                className="drop-shadow-sm"
              />
              <motion.path
                d="M 40 75 C 50 75, 48 50, 58 50"
                fill="none" stroke="#3B60FF" strokeWidth="1.5"
                strokeDasharray="4 6"
                animate={{ strokeDashoffset: [0, -10] }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                vectorEffect="non-scaling-stroke"
                className="drop-shadow-sm"
              />
            </svg>

            {/* Left Cards */}
            <div className="absolute left-[8%] flex flex-col justify-between h-[60%] top-[20%] z-20 w-[35%] max-w-[170px]">
              {[
                { title: 'Topic' },
                { title: 'Instruction' },
                { title: 'File Format' }
              ].map((item, i) => (
                <div key={i} className="bg-white/95 backdrop-blur-sm rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.04)] px-3 py-2 sm:px-4 sm:py-2.5 flex items-center gap-3 sm:gap-4 w-full border border-white/80 transition-transform hover:-translate-y-1 duration-300">
                  <IconSparkles className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#3b60ff]" stroke={1.8} />
                  <div className="flex flex-col flex-1 mt-0.5">
                    <span className="text-[10px] text-left sm:text-[12px] md:text-[13px] font-medium text-slate-800 whitespace-nowrap">{item.title}</span>
                    <div className="h-[1px] w-full bg-slate-200 mt-1 sm:mt-[4px]"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Card */}
            <div className="absolute right-[8%] z-20 w-[42%] max-w-[200px] h-[72%] top-[14%]">
              {/* Background blue glow/shadow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#7394F5] to-[#F4F7FC] rounded-[24px] p-1.5">

                <div className="relative w-full h-full bg-white/95 backdrop-blur-md rounded-[18px] shadow-[0_15px_30px_rgba(0,0,0,0.08)] p-5 flex flex-col border-[2px] border-[#eaf0ff]">
                  <div className="text-[12px] sm:text-[14px] font-bold text-[#0f1f4d] leading-[1.3] mb-4">
                    Generated<br />Document Title
                  </div>
                  <div className="flex flex-col w-[95%]">
                    <div className="w-full h-[3px] bg-slate-300/80 rounded-full mb-2.5"></div>
                    <div className="w-[95%] h-[3px] bg-slate-300/80 rounded-full mb-2.5"></div>
                    <div className="w-[75%] h-[3px] bg-slate-300/80 rounded-full mb-4.5"></div>

                    <div className="w-full h-[3px] bg-slate-300/80 rounded-full mb-2.5 mt-2"></div>
                    <div className="w-[95%] h-[3px] bg-slate-300/80 rounded-full mb-2.5"></div>
                    <div className="w-[70%] h-[3px] bg-slate-300/80 rounded-full mb-4.5"></div>

                    <div className="w-full h-[3px] bg-slate-300/80 rounded-full mt-2 mb-2.5"></div>
                    <div className="w-[95%] h-[3px] bg-slate-300/80 rounded-full mb-2.5"></div>
                    <div className="w-[55%] h-[3px] bg-slate-300/80 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Block 2: Custom Templates */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full rounded-[48px] p-1.5 md:p-2 lg:p-[10px] aspect-[4/3] relative flex overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-[#DEEAFF] via-[#F3F7FF] to-[#DEEAFF] rounded-[42px] md:rounded-[42px] lg:rounded-[38px] relative overflow-hidden flex items-center justify-center perspective-[1200px]">
              <div className="absolute inset-0 pointer-events-none z-10"></div>
              <div className="scale-75 md:scale-95 lg:scale-100 flex items-center justify-center w-full h-full">
                <TemplateCards />
              </div>
            </div>
          </div>
          <div className="flex-1 text-left lg:pl-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Custom Templates</h3>
            <p className="text-base lg:text-lg text-[#737373] font-medium leading-relaxed mb-8">
              Choose your preferred document template, structure, depth, and sections before generation AI adapts instantly.
            </p>
            <Link href="/signup">
              <Button className="rounded-full bg-[#2458f5] hover:bg-[#1a4cd2] text-white px-6 h-12 transition-all shadow-md shadow-blue-500/20 font-semibold">
                <IconSparkles className="w-5 h-5 mr-1.5" />
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        {/* Block 3: Multiple Formats */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-left lg:pr-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Multiple Formats</h3>
            <p className="text-base lg:text-lg text-[#737373] font-medium leading-relaxed mb-8">
              Generate content in APA, MLA, Chicago, or custom formats ready for submission or review.
            </p>
            <Link href="/signup">
              <Button className="rounded-full bg-[#2458f5] hover:bg-[#1a4cd2] text-white px-6 h-12 transition-all shadow-md shadow-blue-500/20 font-semibold">
                <IconSparkles className="w-5 h-5 mr-1.5" />
                Get Started
              </Button>
            </Link>
          </div>
          <div className="flex-1 w-full bg-[#f4f8ff] rounded-[40px] p-6 lg:p-8 aspect-[4/3] flex items-center relative overflow-hidden border border-[#dce8ff] shadow-[inset_0_4px_20px_rgba(255,255,255,0.8)] perspective-[1000px]">
            {/* Soft gradient background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff] to-[#e4efff]/40 opacity-80" />

            <div className="w-full h-full flex items-center justify-between relative z-20">
              {/* Left Icon Panel */}
              <div className="w-[35%] flex items-center justify-center relative h-full">
                <div className="relative w-full max-w-[150px] aspect-[1/1.2] flex items-center justify-center z-20">
                  <Image src="/images/filee.png" alt="Document Template" fill className="object-contain" />
                  {/* Icon Details */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pt-2 sm:pt-8 opacity-90">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-3 relative text-[#3b60ff]">
                      <IconBrain className="w-full h-[80%]" stroke={1.5} />
                    </div>
                    <div className="flex flex-col gap-1.5 sm:gap-2 w-[55%]">
                      <div className="w-full h-1 sm:h-1.5 bg-[#3b60ff] opacity-20 rounded-full"></div>
                      <div className="w-[85%] h-1 sm:h-1.5 bg-[#3b60ff] opacity-20 rounded-full"></div>
                      <div className="w-[60%] h-1 sm:h-1.5 bg-[#3b60ff] opacity-20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Lines Area */}
              <div className="flex-1 h-full relative pointer-events-none -mx-4 z-10">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M 0 50 C 40 50, 60 18, 100 18" fill="none" stroke="#A7C6FF" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                  <path d="M 0 50 C 40 50, 60 38, 100 38" fill="none" stroke="#A7C6FF" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                  <path d="M 0 50 C 40 50, 60 62, 100 62" fill="none" stroke="#A7C6FF" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                  <path d="M 0 50 C 40 50, 60 82, 100 82" fill="none" stroke="#A7C6FF" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>

              {/* Right List Panel */}
              <div className="w-[48%] h-full flex flex-col justify-evenly pl-4 z-20">
                {[
                  { type: 'PDF', title: 'PDF Document' },
                  { type: 'DOCX', title: 'DOCX Document' },
                  { type: 'PPT', title: 'PPT Document' },
                  { type: 'TXT', title: 'TXT Document' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center transition-transform hover:-translate-x-1 duration-300 w-full max-w-[240px] ml-auto relative group">
                    <div className="relative w-11 h-11 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center bg-transparent">
                      <Image src="/images/filee.png" alt={item.type} fill className="object-contain drop-shadow-md" />
                      <div className="absolute z-10 bg-[#3b60ff] text-white text-[6px] sm:text-[8px] mt-6 font-bold px-2 py-0.5 rounded-[5px] shadow-sm transform -translate-y-0.5">
                        {item.type}
                      </div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-r-full shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-white/60 px-6 sm:px-6.5 py-1 sm:py-1.5">
                      <span className="text-[7px] sm:text-[10px] font-semibold text-slate-800 tracking-tight">{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Block 4: Export Instantly */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full bg-gradient-to-b from-[#B5D6FF] via-[#93C0F9] to-[#609DF0] rounded-[40px] aspect-[4/3] flex items-center justify-center relative shadow-[inset_0_4px_20px_rgba(255,255,255,0.4)] overflow-hidden">

            {/* Left Document */}
            <div className="absolute left-[5%] top-[26%] w-[124px] h-[142px] bg-white rounded-[10px] border-[6px] border-[#9DB6FF] shadow-[0_15px_30px_rgba(0,0,0,0.08)] p-3.5 flex flex-col z-10 transition-transform hover:-translate-y-2 duration-300">
              <div className="flex justify-between items-start mb-3">
                <div className="text-[8.5px] font-bold text-[#1e293b] leading-tight flex-1 pr-1">Generated<br />Document Title</div>
                <div className="w-[18px] h-[20px] relative flex-shrink-0 mt-0.5">
                  <Image src="/images/doc-word.png" alt="Word" fill className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col gap-2 relative z-10 mt-1">
                <div className="w-full h-[3px] bg-slate-300 rounded-full"></div>
                <div className="w-4/5 h-[3px] bg-slate-300 rounded-full mb-1"></div>
                <div className="w-full h-[3px] bg-slate-200 rounded-full"></div>
                <div className="w-full h-[3px] bg-slate-200 rounded-full"></div>
                <div className="w-2/3 h-[3px] bg-slate-200 rounded-full"></div>
              </div>
            </div>

            {/* Right Document */}
            <div className="absolute right-[5%] top-[26%] w-[124px] h-[142px] bg-white rounded-[10px] border-[6px] border-[#9DB6FF] shadow-[0_15px_30px_rgba(0,0,0,0.08)] p-3.5 flex flex-col z-10 transition-transform hover:-translate-y-2 duration-300">
              <div className="flex justify-between items-start mb-3">
                <div className="text-[8.5px] font-bold text-[#1e293b] leading-tight flex-1 pr-1">Generated<br />Document Title</div>
                <div className="w-[18px] h-[20px] relative flex-shrink-0 mt-0.5">
                  <Image src="/images/doc-pdf.png" alt="PDF" fill className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col gap-2 relative z-10 mt-1">
                <div className="w-full h-[3px] bg-slate-300 rounded-full"></div>
                <div className="w-4/5 h-[3px] bg-slate-300 rounded-full mb-1"></div>
                <div className="w-full h-[3px] bg-slate-200 rounded-full"></div>
                <div className="w-full h-[3px] bg-slate-200 rounded-full"></div>
                <div className="w-2/3 h-[3px] bg-slate-200 rounded-full"></div>
              </div>
            </div>

            {/* Center Document */}
            <div className="absolute left-1/2 top-[12%] -translate-x-1/2 w-[150px] h-[230px] bg-white rounded-[10px] border-[6px] border-[#7394F5] shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-5 flex flex-col z-20">
              <div className="text-[12px] font-bold text-[#141d3b] leading-snug mb-5">Generated<br />Document Title</div>
              <div className="flex flex-col gap-2.5">
                <div className="w-full h-[4px] bg-slate-300 rounded-full"></div>
                <div className="w-4/5 h-[4px] bg-slate-300 rounded-full mb-2"></div>
                <div className="w-full h-[4px] bg-slate-200 rounded-full"></div>
                <div className="w-full h-[4px] bg-slate-200 rounded-full"></div>
                <div className="w-4/5 h-[4px] bg-slate-200 rounded-full"></div>
                <div className="w-full h-[4px] bg-slate-200 rounded-full"></div>
                <div className="w-1/2 h-[4px] bg-slate-300 rounded-full"></div>
              </div>
            </div>

            {/* Left Arrow */}
            <div className="absolute left-[26%] top-[34%] w-[60px] h-[60px] z-10 pointer-events-none">
              <Image src="/images/arrow-green.png" alt="Arrow" fill className="object-contain object-bottom" />
            </div>

            {/* Right Arrow */}
            <div className="absolute right-[26%] top-[34%] w-[60px] h-[60px] z-10 pointer-events-none scale-x-[-1]">
              <Image src="/images/arrow-green.png" alt="Arrow" fill className="object-contain object-bottom" />
            </div>

            {/* Bottom Action Pill */}
            <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 bg-white rounded-full px-8 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex items-center justify-between w-[290px] z-30">
              {/* W Icon */}
              <div className="w-[46px] h-[52px] z-10 relative">
                <Image src="/images/doc-word.png" alt="Word" fill className="object-contain" />
              </div>

              {/* Central Download Button */}
              <div className="w-[72px] h-[72px] rounded-full bg-[#E5EDFC] border-[5px] border-[#9DB1FA] flex items-center justify-center p-[2px] cursor-pointer hover:scale-105 transition-transform z-40 absolute left-1/2 -translate-x-1/2 shadow-[0_8px_20px_rgba(64,86,232,0.4)]">
                <div className="w-full h-full rounded-full bg-gradient-to-b from-[#77AAF9] to-[#4056E8] flex items-center justify-center shadow-inner">
                  <IconDownload className="w-7 h-7 text-white" stroke={3} />
                </div>
              </div>

              {/* PDF Icon */}
              <div className="w-[46px] h-[52px] z-10 relative">
                <Image src="/images/doc-pdf.png" alt="PDF" fill className="object-contain" />
              </div>
            </div>

            {/* Hand Pointer Image */}
            <div className="absolute bottom-2 left-[46%] z-50 w-[140px] h-[140px] pointer-events-none drop-shadow-2xl">
              <Image
                src="/images/hand-pointer.png"
                alt="Hand Pointer"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Block 5: Export Instantly */}
          <div className="flex-1 text-left lg:pl-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Export Instantly</h3>
            <p className="text-base lg:text-lg text-[#737373] font-medium leading-relaxed mb-8">
              Download clean, submission-ready files in PDF, DOCX or PPT no extra formatting needed.
            </p>
            <Link href="/signup">
              <Button className="rounded-full bg-[#2458f5] hover:bg-[#1a4cd2] text-white px-6 h-12 transition-all shadow-md shadow-blue-500/20 font-semibold">
                <IconSparkles className="w-5 h-5 mr-1.5" />
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        {/* Block 5: Organized Dashboard */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-left lg:pr-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Organized Dashboard</h3>
            <p className="text-base lg:text-lg text-[#737373] font-medium leading-relaxed mb-8">
              All your generated documents are saved, categorized, and easy to manage in one place.
            </p>
            <Link href="/signup">
              <Button className="rounded-full bg-[#2458f5] hover:bg-[#1a4cd2] text-white px-6 h-12 transition-all shadow-md shadow-blue-500/20 font-semibold">
                <IconSparkles className="w-5 h-5 mr-1.5" />
                Get Started
              </Button>
            </Link>
          </div>
          <div className="flex-1 w-full bg-[#edf4ff] rounded-[40px] p-10 lg:p-14 aspect-[4/3] flex items-center justify-center relative overflow-hidden border border-[#d6e6ff] shadow-inner">
            {/* Actual Dashboard Image with sleek border and shadow */}
            <div className="w-full h-full bg-gradient-to-b rounded-4xl from-[#638EFF] to-[#D7E5FF] p-2">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/dashbo.png"
                  alt="Genas Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
