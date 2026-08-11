"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/#features", label: "Features" },
    { href: "/#how-it-works", label: "Use Cases" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#resources", label: "Resources" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-[984px]">
      <nav className="flex items-center justify-between px-3 md:px-4 py-2 bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full border border-white/20 h-[61px] relative z-50">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center group">
            <div className="relative w-24 h-7 md:w-28 md:h-8">
              <Image
                src="/images/genas-logo.png"
                alt="Genas Logo"
                fill
                className="object-contain transition-transform"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center justify-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right CTA */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <Link href="/waitlist" className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Login
          </Link>
          <Link href="/waitlist" className="hidden sm:block">
            <Button className="rounded-full bg-[#3b60ff] hover:bg-[#3252d9] text-white px-6 md:px-8 py-3 text-sm h-auto transition-transform active:scale-95">
              Join Waitlist
            </Button>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <IconX className="w-6 h-6 text-slate-600" />
            ) : (
              <IconMenu2 className="w-6 h-6 text-slate-600" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-[70px] left-0 right-0 bg-white/95 backdrop-blur-xl rounded-[32px] border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-6 flex flex-col items-center space-y-4 md:hidden z-40 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-md font-medium text-slate-700 hover:text-[#3b60ff] transition-colors w-full text-center py-2"
              >
                {link.label} 
              </Link>
            ))}
            <div className="w-full h-px bg-slate-100 my-2" />
            <Link href="/waitlist" onClick={() => setIsOpen(false)} className="w-full text-center">
              <span className="text-md font-semibold text-slate-700 hover:text-[#3b60ff] transition-colors inline-block py-2">
                Login
              </span>
            </Link>
            <Link href="/waitlist" onClick={() => setIsOpen(false)} className="w-full">
              <Button className="w-full rounded-full bg-[#3b60ff] hover:bg-[#3252d9] text-white py-4 text-base h-auto shadow-lg shadow-blue-500/20">
                Join Waitlist
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
