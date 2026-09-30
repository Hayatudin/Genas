"use client";

import { usePathname } from "next/navigation";
import { IconBell } from "@tabler/icons-react";
import { useAuth } from "@/lib/auth-context";

export function Topbar({ title, subtitle }: { title?: string; subtitle?: string }) {
  const pathname = usePathname();
  const { user } = useAuth();

  let defaultTitle = "Welcome back, " + (user?.name?.split(" ")[0] || "Orhan");
  let defaultSubtitle = "Dashboard";

  if (pathname.includes("/generate")) {
    defaultTitle = "Generate Document";
    defaultSubtitle = "Create structured academic content tailored to your requirements.";
  } else if (pathname.includes("/templates")) {
    defaultTitle = "Templates";
    defaultSubtitle = "Browse and customize academic document structures.";
  } else if (pathname.includes("/billing")) {
    defaultTitle = "Usage & Plan";
    defaultSubtitle = "Manage your subscription, credits, and invoices.";
  } else if (pathname.includes("/favorites")) {
    defaultTitle = "Favorites";
    defaultSubtitle = "Quick access to your saved and pinned documents.";
  } else if (pathname.includes("/history")) {
    defaultTitle = "History";
    defaultSubtitle = "Review and export your previously generated work.";
  } else if (pathname.includes("/documents")) {
    defaultTitle = "My Documents";
    defaultSubtitle = "All your academic documents organized in one place.";
  } else if (pathname.includes("/settings")) {
    defaultTitle = "Settings";
    defaultSubtitle = "Personalize your account, preferences, and security.";
  }

  const displayTitle = title || defaultTitle;
  const displaySubtitle = subtitle || defaultSubtitle;

  return (
    <header className="flex items-center justify-between pb-8 w-full border-b border-slate-100 mb-8">
      <div className="flex flex-col">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
          {displayTitle}
        </h1>
        <p className="text-sm font-medium text-slate-400 mt-0.5">
          {displaySubtitle}
        </p>
      </div>

      <div className="flex items-center gap-6">
        {/* Notification Bell */}
        <button className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-700 transition-colors focus:outline-none">
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
    </header>
  );
}
