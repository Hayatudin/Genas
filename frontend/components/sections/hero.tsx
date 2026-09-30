import { Button } from "@/components/ui/button";
import { IconSparkles, IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/background-01.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/80 rounded-full px-4 py-1.5 mb-8">
          <span className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
            <span className="relative flex h-2 w-2 mr-0.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
            </span>
            Built for Students, Educators & Researchers
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-[72px] leading-[1.1] font-semibold tracking-tight text-slate-900 mb-6 text-balance max-w-5xl mx-auto">
          Generate Academic Content with AI Instantly
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl font-medium leading-[1.6]">
          Genas helps you generate assignments, essays, research drafts, and academic content
          in minutes not hours.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
          <Link href="/signup">
            <Button className="rounded-full bg-[#2458f5] hover:bg-[#1a4cd2] text-white px-7 h-14 transition-all flex items-center gap-2 group font-semibold text-[15px] shadow-lg shadow-blue-500/25">
              <IconSparkles className="w-[18px] h-[18px]" />
              Start Generating Free
            </Button>
          </Link>
          <Link href="/#how-it-works">
            <Button variant="outline" className="rounded-full bg-white border-slate-200 text-slate-800 px-6 h-14 font-semibold text-[15px] flex items-center gap-3 group">
              How It Works
              <IconArrowUpRight className="w-[20px] h-[20px] text-slate-700" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

