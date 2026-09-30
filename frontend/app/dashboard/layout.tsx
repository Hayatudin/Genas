"use client";

import { useState } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import Link from "next/link";
import Image from "next/image";
import { IconMenu2, IconX } from "@tabler/icons-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#eef2f6] p-3 sm:p-5 lg:p-7 flex flex-col lg:flex-row gap-6 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Mobile Top Header (only on screens < lg) */}
      <div className="lg:hidden flex items-center justify-between bg-white px-5 py-3.5 rounded-2xl border border-slate-200/60 shadow-sm">
        <Link href="/" className="inline-flex items-center gap-2.5">
          <div className="relative w-7 h-7">
            <Image 
              src="/images/genas-logo.png" 
              alt="Genas" 
              fill 
              className="object-contain"
            />
          </div>
          <span className="text-lg font-bold text-slate-900">Genas</span>
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
        >
          {mobileMenuOpen ? <IconX className="w-5 h-5" /> : <IconMenu2 className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm p-4 flex flex-col justify-end" onClick={() => setMobileMenuOpen(false)}>
          <div className="bg-white rounded-3xl p-6 shadow-2xl flex flex-col gap-4" onClick={(e) => e.stopPropagation()}>
            <Sidebar isCollapsed={false} setIsCollapsed={setIsCollapsed} />
          </div>
        </div>
      )}

      {/* Desktop Sidebar (Left) */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Main White Canvas Card (Right) */}
      <div className="flex-1 min-w-0 bg-white rounded-[32px] sm:rounded-[36px] lg:rounded-[40px] shadow-[0_12px_40px_-15px_rgba(0,0,0,0.04)] border border-slate-200/60 p-6 sm:p-8 lg:p-10 flex flex-col overflow-hidden">
        {children}
      </div>
    </div>
  );
}
