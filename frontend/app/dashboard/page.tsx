"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/lib/auth-context";
import { 
  IconArrowRight, 
  IconBell, 
  IconDotsVertical, 
  IconNotes, 
  IconFileText, 
  IconFileSearch, 
  IconClipboardText,
  IconExternalLink,
  IconEdit,
  IconDownload
} from "@tabler/icons-react";

export default function DashboardOverview() {
  const { user } = useAuth();
  
  // Options menu is closed (null) by default
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close menu on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenuIndex(null);
      }
    }
    if (activeMenuIndex !== null) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [activeMenuIndex]);

  const categories = [
    { 
      name: "Assignment", 
      desc: "Structured academic submission", 
      gradient: "from-[#1fa2ff] via-[#6d76f8] to-[#f694e9]",
      icon: IconNotes,
      imageSrc: "/upload/Assignment.png",
      imageAlt: "Assignment illustration"
    },
    { 
      name: "Essay", 
      desc: "Argumentative, descriptive, analytical", 
      gradient: "from-[#0ba5ec] via-[#5d6cf8] to-[#ea63ca]",
      icon: IconFileText,
      imageSrc: "/upload/Essay.png",
      imageAlt: "Essay illustration"
    },
    { 
      name: "Research Paper", 
      desc: "Full academic research format", 
      gradient: "from-[#0284c7] via-[#4361ee] to-[#b57bf7]",
      icon: IconFileSearch,
      imageSrc: "/upload/Research.png",
      imageAlt: "Research Paper illustration"
    },
    { 
      name: "Report", 
      desc: "Formal structured reports", 
      gradient: "from-[#5b5bf7] via-[#9b53f8] to-[#f472b6]",
      icon: IconClipboardText,
      imageSrc: "/upload/Report.png",
      imageAlt: "Report illustration"
    },
  ];

  const recentDocs = [
    { title: "Machine learning Assignment", type: "Assignment", status: "Completed", date: "2 days ago" },
    { title: "Essay About African life", type: "Essay", status: "Draft", date: "5 days ago" },
    { title: "University Research", type: "Research", status: "Completed", date: "5 days ago" },
    { title: "Geography Assignment", type: "Assignment", status: "Draft", date: "1 week ago" },
  ];

  return (
    <div className="flex flex-col gap-8 w-full">
      
      {/* Top Header inside white canvas */}
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
            Welcome back, {user?.name?.split(" ")[0] || "Orhan"}
          </h1>
          <p className="text-sm font-medium text-slate-400 mt-0.5">
            Dashboard
          </p>
        </div>

        <div className="flex items-center gap-6">
          {/* Notification Bell */}
          <button 
            type="button"
            className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-700 transition-colors focus:outline-none"
            aria-label="Notifications"
          >
            <IconBell className="w-5 h-5 text-slate-700" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#2458f5] rounded-full ring-2 ring-white"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-200 shadow-xs flex-shrink-0">
              <img 
                src={user?.avatar || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"} 
                alt={user?.name || "Orhan Bey"} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-[14px] font-bold text-slate-900 leading-tight">
                {user?.name || "Orhan Bey"}
              </span>
              <span className="text-[11px] font-medium text-slate-400 leading-none mt-0.5">
                {user?.plan || "Free"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Action Cards Row - Exact Height 174px with Faded Frosted Glass & Uploaded Assets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5 w-full">
        {categories.map((cat) => {
          const IconBadge = cat.icon;

          return (
            <div 
              key={cat.name} 
              className={`bg-gradient-to-br ${cat.gradient} rounded-[24px] h-[174px] relative overflow-hidden flex flex-col justify-between group shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5`}
            >
              {/* Background ambient light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl pointer-events-none" />

              {/* Top-Left Translucent Badge */}
              <div className="p-3.5 z-10 flex items-start justify-between">
                <div className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-xs">
                  <IconBadge className="w-4 h-4" />
                </div>
              </div>

              {/* Official Uploaded Asset Illustration from /upload folder */}
              <div className="absolute right-3.5 top-2 w-[90px] h-[105px] pointer-events-none z-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={cat.imageSrc}
                  alt={cat.imageAlt}
                  width={90}
                  height={105}
                  className="object-contain drop-shadow-md select-none"
                  priority
                />
              </div>

              {/* Bottom Frosted Glass Bar with Upper Corners Fade-Out */}
              <div 
                className="z-10 p-3.5 pt-4 flex items-end justify-between rounded-b-[24px] relative"
                style={{
                  background: "linear-gradient(to top, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.16) 65%, rgba(255, 255, 255, 0.0) 100%)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  maskImage: "linear-gradient(to top, black 55%, rgba(0, 0, 0, 0.7) 82%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to top, black 55%, rgba(0, 0, 0, 0.7) 82%, transparent 100%)"
                }}
              >
                <div className="flex flex-col">
                  <span className="font-bold text-white text-[15px] leading-tight drop-shadow-xs">
                    {cat.name}
                  </span>
                  <span className="text-[10px] text-white/90 font-medium leading-tight mt-0.5 max-w-[130px] drop-shadow-xs">
                    {cat.desc}
                  </span>
                </div>

                <Link href="/dashboard/generate" className="flex-shrink-0">
                  <button 
                    type="button"
                    className="bg-white/95 hover:bg-white text-slate-900 text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm whitespace-nowrap transition-transform hover:scale-105 active:scale-95"
                  >
                    <span>Start Generating</span>
                    <IconArrowRight className="w-3 h-3 text-slate-800" />
                  </button>
                </Link>
              </div>

            </div>
          );
        })}
      </div>

      {/* Bottom Section: Continue Working + Usage Overview */}
      <div className="flex flex-col xl:flex-row gap-6 xl:gap-8 items-start w-full">
        
        {/* Left Column: Continue Working */}
        <div className="flex-1 w-full min-w-0 flex flex-col">
          <h2 className="text-[21px] font-bold text-slate-900 mb-4 tracking-tight">
            Continue Working
          </h2>

          <div ref={menuRef} className="flex flex-col w-full relative overflow-visible">
            {recentDocs.map((doc, idx) => {
              const isMenuOpen = activeMenuIndex === idx;

              return (
                <div 
                  key={idx}
                  className="flex items-center justify-between py-4 border-b border-slate-100 hover:bg-slate-50/50 px-2 rounded-xl transition-colors relative"
                >
                  {/* Left: Thumbnail & Title & Date */}
                  <div className="flex items-center gap-3.5 min-w-0 flex-1">
                    <div className="w-10 h-10 rounded-xl bg-[#d9d9d9] flex-shrink-0 shadow-2xs" />
                    <div className="flex flex-col min-w-0">
                      <span className="text-[14px] sm:text-[15px] font-bold text-slate-800 truncate mb-0.5">
                        {doc.title}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {doc.date}
                      </span>
                    </div>
                  </div>

                  {/* Middle Column: Type */}
                  <div className="w-24 sm:w-36 text-left flex-shrink-0 px-2">
                    <span className="text-[13px] sm:text-[14px] font-bold text-slate-700">
                      {doc.type}
                    </span>
                  </div>

                  {/* Status Column */}
                  <div className="w-20 sm:w-28 text-left flex-shrink-0">
                    <span className={`text-[12px] sm:text-[13px] font-bold ${
                      doc.status === "Completed" ? "text-[#16a34a]" : "text-[#22c55e]"
                    }`}>
                      {doc.status}
                    </span>
                  </div>

                  {/* Actions (Menu button + popover) */}
                  <div className="relative flex-shrink-0">
                    <button 
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMenuIndex(isMenuOpen ? null : idx);
                      }}
                      className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
                      aria-label="Document options"
                    >
                      <IconDotsVertical className="w-4 h-4" />
                    </button>

                    {/* Popover Menu - Only visible when explicitly opened */}
                    {isMenuOpen && (
                      <div 
                        className="absolute right-0 top-7 z-40 bg-white border border-slate-200 rounded-xl shadow-xl p-1.5 w-32 flex flex-col text-left text-xs font-semibold text-slate-700 animate-in fade-in zoom-in-95 duration-150"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button 
                          type="button"
                          onClick={() => setActiveMenuIndex(null)}
                          className="px-2.5 py-1.5 rounded-lg hover:bg-slate-100 text-slate-800 flex items-center justify-between transition-colors"
                        >
                          <span>Open</span>
                          <IconExternalLink className="w-3.5 h-3.5 text-slate-400" />
                        </button>
                        <button 
                          type="button"
                          onClick={() => setActiveMenuIndex(null)}
                          className="px-2.5 py-1.5 rounded-lg hover:bg-slate-100 text-slate-800 flex items-center justify-between transition-colors"
                        >
                          <span>Edit</span>
                          <IconEdit className="w-3.5 h-3.5 text-slate-400" />
                        </button>
                        <button 
                          type="button"
                          onClick={() => setActiveMenuIndex(null)}
                          className="px-2.5 py-1.5 rounded-lg hover:bg-slate-100 text-slate-800 flex items-center justify-between transition-colors"
                        >
                          <span>Download</span>
                          <IconDownload className="w-3.5 h-3.5 text-slate-400" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Bottom See full history link */}
            <div className="flex justify-end pt-4 pr-1">
              <Link 
                href="/dashboard/documents" 
                className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-slate-900 transition-colors"
              >
                <span>See full history</span>
                <IconArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Usage Overview Card */}
        <div className="w-full xl:w-[310px] flex-shrink-0">
          <div className="bg-[#0047e0] rounded-[32px] p-7 min-h-[380px] xl:min-h-[420px] relative overflow-hidden flex flex-col justify-between shadow-lg shadow-blue-700/20 text-white">
            
            {/* Organic Flowing Cyan Waves matching the exact design */}
            <svg 
              className="absolute -bottom-4 -left-4 w-[130%] h-[180px] opacity-90 pointer-events-none"
              viewBox="0 0 320 180" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M-20 180C40 100 130 90 220 130C280 155 310 120 340 100V180H-20Z" 
                fill="#0099ff" 
              />
              <path 
                d="M-20 180C60 130 160 130 250 150C300 162 330 140 340 130V180H-20Z" 
                fill="#00e5ff" 
              />
              <circle cx="280" cy="50" r="70" fill="#3b82f6" fillOpacity="0.35" />
            </svg>

            {/* Card Content Header */}
            <div className="relative z-10 flex flex-col">
              <h3 className="text-[22px] font-bold text-white tracking-tight mb-7">
                Usage Overview
              </h3>

              <div className="flex items-center gap-3.5">
                {/* Free Plan Box */}
                <div className="flex-1 bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex flex-col shadow-xs">
                  <span className="text-[20px] font-bold text-white mb-0.5 leading-none">
                    Free
                  </span>
                  <span className="text-[11px] font-medium text-blue-100/80 leading-tight">
                    Current Plan
                  </span>
                </div>

                {/* Generations Used Box */}
                <div className="flex-1 bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex flex-col shadow-xs">
                  <span className="text-[20px] font-bold text-white mb-0.5 leading-none">
                    2/5
                  </span>
                  <span className="text-[11px] font-medium text-blue-100/80 leading-tight">
                    Generations used
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Upgrade Action */}
            <div className="relative z-10 mt-auto pt-6 flex justify-center">
              <Link href="/dashboard/billing">
                <button 
                  type="button"
                  className="bg-white/25 hover:bg-white/35 backdrop-blur-md border border-white/30 text-white rounded-full px-5 py-2.5 text-xs font-bold flex items-center gap-2.5 transition-all shadow-md active:scale-95 group"
                >
                  <span>Upgrade</span>
                  <div className="w-4 h-4 rounded-full bg-white text-[#0047e0] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <IconArrowRight className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                </button>
              </Link>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
