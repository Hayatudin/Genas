"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  IconLayout2,
  IconSparkles, 
  IconTemplate, 
  IconHeart, 
  IconHistory, 
  IconFileText, 
  IconCalendarCheck, 
  IconSettings,
  IconStarFilled,
  IconArrowUpRight,
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarRightCollapse
} from "@tabler/icons-react";

export function Sidebar({ 
  isCollapsed, 
  setIsCollapsed 
}: { 
  isCollapsed: boolean; 
  setIsCollapsed: (val: boolean | ((prev: boolean) => boolean)) => void;
}) {
  const pathname = usePathname();

  const links = [
    { label: "Dashboard", href: "/dashboard", icon: IconLayout2 },
    { label: "Generate", href: "/dashboard/generate", icon: IconSparkles },
    { label: "Templates", href: "/dashboard/templates", icon: IconTemplate },
    { label: "Favorites", href: "/dashboard/favorites", icon: IconHeart },
    { label: "History", href: "/dashboard/history", icon: IconHistory },
    { label: "My Documents", href: "/dashboard/documents", icon: IconFileText },
    { label: "Usage & Plan", href: "/dashboard/billing", icon: IconCalendarCheck },
    { label: "Settings", href: "/dashboard/settings", icon: IconSettings },
  ];

  return (
    <aside 
      className={`sticky top-3 sm:top-5 lg:top-7 h-[calc(100vh-1.5rem)] sm:h-[calc(100vh-2.5rem)] lg:h-[calc(100vh-3.5rem)] flex flex-col justify-between flex-shrink-0 transition-all duration-300 hidden lg:flex ${
        isCollapsed ? 'w-[76px]' : 'w-[230px]'
      }`}
    >
      
      {/* Top Section */}
      <div className="flex flex-col gap-5 overflow-y-auto no-scrollbar">
        {/* Brand / Logo + Collapse Icon */}
        <div className={`flex items-center pt-1 px-2 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image 
                src="/images/genas-logo.png" 
                alt="Genas Logo" 
                fill 
                className="object-contain transition-transform group-hover:scale-105"
              />
            </div>
            {!isCollapsed && (
              <span className="text-[22px] font-bold text-slate-900 tracking-tight">
                Genas
              </span>
            )}
          </Link>

          {/* Collapse / Reveal Button */}
          <button
            type="button"
            onClick={() => setIsCollapsed((prev) => !prev)}
            className="p-1.5 rounded-xl hover:bg-white text-slate-400 hover:text-slate-800 transition-colors"
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <IconLayoutSidebarRightCollapse className="w-5 h-5 text-slate-600" />
            ) : (
              <IconLayoutSidebarLeftCollapse className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Navigation items */}
        <nav className="flex flex-col gap-1.5 w-full">
          {links.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center gap-3.5 py-3 rounded-2xl font-semibold text-[14px] transition-all ${
                  isActive
                    ? "bg-[#2458f5] text-white shadow-md shadow-blue-500/20"
                    : "text-[#5e6e82] hover:text-slate-900 hover:bg-white/60"
                } ${isCollapsed ? 'justify-center px-0' : 'px-4'}`}
                title={isCollapsed ? link.label : undefined}
              >
                <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-white" : "text-[#7a8a9e]"}`} />
                {!isCollapsed && <span className="whitespace-nowrap">{link.label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom: Get Premium Container - Stuck to bottom with exact height 187px */}
      <div className="pt-4 mt-auto">
        {!isCollapsed ? (
          <div className="h-[187px] bg-[#0546e0] rounded-[26px] p-5 relative overflow-hidden shadow-lg shadow-blue-700/20 text-white flex flex-col justify-between">
            {/* Wave SVG Background matching the design */}
            <svg
              className="absolute -bottom-2 -right-4 w-[170px] h-[140px] opacity-40 pointer-events-none"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 200C70 140 130 110 200 130V200H40Z"
                fill="#00e5ff"
              />
              <path
                d="M0 200C50 160 110 140 200 165V200H0Z"
                fill="#00b0ff"
              />
              <circle cx="170" cy="80" r="45" fill="#3b82f6" fillOpacity="0.4" />
            </svg>

            <div className="relative z-10 flex flex-col">
              <h4 className="flex items-center gap-1.5 text-white font-bold text-[16px] tracking-tight">
                <span>Get Premium</span>
                <IconStarFilled className="w-4 h-4 text-[#fbbf24]" />
              </h4>
              <p className="text-[11.5px] text-blue-100/80 mt-1 leading-relaxed font-medium">
                Unlock All premium features and continue generating more
              </p>
            </div>

            <Link href="/dashboard/billing" className="relative z-10 block mt-auto">
              <button className="w-full bg-white hover:bg-slate-50 text-[#0546e0] font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-between shadow-sm transition-transform active:scale-95">
                <span>Upgrade</span>
                <div className="w-5 h-5 rounded-md bg-blue-50 flex items-center justify-center text-[#0546e0]">
                  <IconArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </Link>
          </div>
        ) : (
          <Link href="/dashboard/billing" className="block">
            <div className="h-[187px] bg-[#0546e0] rounded-2xl p-3 flex flex-col items-center justify-between cursor-pointer shadow-md group py-4">
              <IconStarFilled className="w-6 h-6 text-[#fbbf24] group-hover:scale-110 transition-transform" title="Get Premium" />
              <span className="text-[10px] font-bold text-white uppercase tracking-wider text-center rotate-[-90deg]">
                Upgrade
              </span>
              <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center text-white">
                <IconArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>
        )}
      </div>

    </aside>
  );
}
