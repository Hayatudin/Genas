"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  IconCircleCheck, 
  IconArrowLeft, 
  IconSparkles, 
  IconCopy, 
  IconCheck,
  IconBrandX,
  IconBrandTiktok,
  IconBrandYoutube,
  IconBrandInstagram
} from "@tabler/icons-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [copied, setCopied] = useState(false);

  const websiteUrl = "https://genas.ai"; // Placeholder URL as requested

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json().catch(() => ({ error: 'Invalid response from server.' }));

      if (response.ok) {
        setMessage({ type: 'success', text: data.message });
        setEmail("");
      } else {
        setMessage({ type: 'error', text: data.error || 'Something went wrong.' });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setMessage({ type: 'error', text: 'Failed to join. Please check your database connection or try again later.' });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(websiteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { icon: <IconBrandX className="w-5 h-5" />, label: "Share", color: "hover:bg-white/10", url: `https://x.com/intent/tweet?url=${websiteUrl}` },
    { icon: <IconBrandTiktok className="w-5 h-5" />, label: "Share", color: "hover:bg-[#ff0050]/20", url: "https://www.tiktok.com/@genassai?is_from_webapp=1&sender_device=pc" },
    { icon: <IconBrandYoutube className="w-5 h-5" />, label: "Share", color: "hover:bg-[#ff0000]/20", url: "https://www.youtube.com/@GenassAi" },
    { icon: <IconBrandInstagram className="w-5 h-5" />, label: "Share", color: "hover:bg-[#e1306c]/20", url: "https://www.instagram.com/genassai/" },
  ];

  return (
    <div className="min-h-screen bg-[#000000] flex flex-col items-center px-4 relative overflow-hidden font-sans">
      
      {/* --- Specialized Lighting Effects --- */}
      {/* Top Left Blue Beam */}
      <motion.div 
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.25) 0%, transparent 70%)',
          filter: 'blur(80px)',
          transform: 'rotate(-15deg)'
        }}
      />
      
      <div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute top-[-200px] left-[-100px] w-[400px] h-[800px] opacity-[0.15] mix-blend-screen"
          style={{
            background: 'conic-gradient(from 180deg at 50% 0%, transparent 0deg, #3b82f6 30deg, transparent 60deg)',
            filter: 'blur(40px)',
            transform: 'rotate(-45deg)'
          }}
        />
      </div>

      {/* Top Right Blue Beam (Updated by user preference previously) */}
      <motion.div 
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-10%] w-[50%] h-[60%] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(7, 26, 118, 0.3) 0%, transparent 70%)',
          filter: 'blur(80px)',
          transform: 'rotate(15deg)'
        }}
      />

      <div className="absolute top-0 right-0 w-full h-[600px] pointer-events-none z-0 overflow-hidden flex justify-end">
        <div 
          className="absolute top-[-200px] right-[-100px] w-[400px] h-[800px] opacity-[0.2] mix-blend-screen"
          style={{
            background: 'conic-gradient(from 180deg at 50% 0%, transparent 0deg, #446fefff 30deg, transparent 60deg)',
            filter: 'blur(40px)',
            transform: 'rotate(45deg)'
          }}
        />
      </div>

      {/* --- Header Section --- */}
      <header className="w-full max-w-4xl pt-12 mb-20 relative z-20">
        <div className="flex items-center justify-between w-full px-4">
          <Link href="/" className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors">
            <IconArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="hidden sm:inline text-xs font-medium uppercase tracking-widest">Back</span>
          </Link>

          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center gap-4 sm:gap-8 w-full max-w-[500px]">
               <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-white/30 relative">
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white rotate-45 border border-black z-10" />
               </div>
               
               <Link href="/" className="relative w-28 h-8 md:w-32 md:h-10 hover:opacity-80 transition-opacity">
                 <Image 
                    src="/images/genas-logo.png" 
                    alt="Genas Logo" 
                    fill 
                    className="object-contain brightness-0 invert" 
                    priority 
                 />
               </Link>

               <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-white/10 to-white/30 relative">
                 <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white rotate-45 border border-black z-10" />
               </div>
            </div>
          </div>
          <div className="w-10 sm:w-20" />
        </div>
      </header>

      {/* --- Main Content --- */}
      <main className="max-w-3xl w-full text-center flex flex-col items-center relative z-20 px-4">
        
        <AnimatePresence mode="wait">
          {message?.type === 'success' ? (
            <motion.div 
              key="success-view"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center w-full max-w-xl"
            >
              {/* Success Badge */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ">
                
              </div>

              <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
                You're on the waitlist
              </h1>
              <p className="text-sm md:text-base text-white/40 max-w-sm mx-auto mb-10 leading-relaxed font-medium">
                You've successfully secured your spot. Excited? Feel free to refer your friends!
              </p>

              {/* Referral Widget */}
              <div className="w-full relative group mb-10">
                <div className="flex items-center p-1.5 bg-[#1a1a1a]/40 backdrop-blur-2xl rounded-full border border-white/5 group-hover:border-white/10 transition-all">
                  <input 
                    type="text" 
                    readOnly
                    value={websiteUrl}
                    className="flex-1 bg-transparent px-6 py-3 text-white/40 focus:outline-none text-sm md:text-base cursor-default select-all"
                  />
                  <button 
                    onClick={copyToClipboard}
                    className="relative w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#1e1e1e] flex items-center justify-center text-white/80 hover:text-white transition-colors hover:bg-[#252525]"
                  >
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.div key="check" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
                          <IconCheck className="w-5 h-5 text-green-500" />
                        </motion.div>
                      ) : (
                        <motion.div key="copy" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
                          <IconCopy className="w-5 h-5" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Tooltip */}
                    {copied && (
                      <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -top-10 bg-white text-black text-[10px] font-bold px-2 py-1 rounded shadow-xl"
                      >
                        Copied!
                      </motion.span>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 text-white/20 text-xs font-semibold uppercase tracking-widest mb-8">
                <div className="w-8 h-[1px] bg-white/10" />
                Or
                <div className="w-8 h-[1px] bg-white/10" />
              </div>

              {/* Social Share Buttons */}
              <div className="flex flex-wrap justify-center gap-3 w-full">
                {socialLinks.map((social, idx) => (
                  <button 
                    key={idx}
                    onClick={() => window.open(social.url, '_blank')}
                    className={`flex items-center gap-3 bg-[#111111] border border-white/5 rounded-full px-5 py-3 transition-all ${social.color} hover:scale-105 group active:scale-95`}
                  >
                    <span className="text-white/60 group-hover:text-white transition-colors">{social.icon}</span>
                    <span className="text-white text-sm font-semibold">{social.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="form-view" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center">
              <h1 className="text-4xl md:text-7xl font-semibold text-white mb-6 tracking-tight">
                Get early access
              </h1>
              <p className="text-sm md:text-base text-white/40 max-w-md mx-auto mb-12 leading-relaxed font-medium">
                We're getting close. Sign up to get early access to <br className="hidden md:block" /> Genas and start building your academic future.
              </p>

              <div className="w-full max-w-lg relative mb-12">
                <form 
                  onSubmit={handleSubmit}
                  className="group relative flex items-center p-1.5 bg-[#1a1a1a]/40 backdrop-blur-2xl rounded-full border border-white/10 focus-within:border-white/20 transition-all shadow-2xl"
                >
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    className="flex-1 bg-transparent px-6 py-3 text-white placeholder:text-white/20 focus:outline-none text-sm md:text-base disabled:opacity-50"
                  />
                  <Button 
                    type="submit"
                    disabled={isLoading}
                    className="rounded-full bg-white hover:bg-white/90 text-black px-6 md:px-8 py-3 text-sm font-bold h-11 md:h-12 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  >
                    {isLoading ? "..." : "Join waitlist"}
                  </Button>
                </form>

                {message?.type === 'error' && (
                   <motion.p 
                     initial={{ opacity: 0 }} 
                     animate={{ opacity: 1 }} 
                     className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-red-500 font-medium whitespace-nowrap"
                   >
                     {message.text}
                   </motion.p>
                )}
              </div>

              {/* Social Proof Alt (Hidden in success view) */}
              <div className="flex flex-col items-center gap-4 mt-4">
                <div className="flex items-center -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-black overflow-hidden relative bg-neutral-800 shadow-xl">
                       <Image 
                          src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                          alt="User" 
                          fill 
                          className="object-cover" 
                       />
                    </div>
                  ))}
                </div>
                <p className="text-[12px] md:text-sm font-medium text-white/40 tracking-tight">
                   Join <span className="text-white">+100 others</span> on the waitlist
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      {/* Floating Sparkles Decor */}
      <div className="absolute bottom-[20%] left-[10%] opacity-20 animate-pulse">
        <IconSparkles className="text-white w-4 h-4" />
      </div>
      <div className="absolute top-[30%] right-[15%] opacity-20 animate-pulse delay-700">
        <IconSparkles className="text-white w-3 h-3" stroke={1} />
      </div>

    </div>
  );
}
