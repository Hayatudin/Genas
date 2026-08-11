import Image from "next/image";
import { IconSparkles } from "@tabler/icons-react";

export function MobileApp() {
  return (
    <section className="py-5 bg-[#F5F5F5] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        {/* Left Content */}
        <div className="flex-1 text-left flex flex-col gap-8">
          <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold text-slate-900 leading-[1.1] tracking-tight text-balance">
            Academic Writing Powered by Intelligence
          </h2>

          <div className="flex flex-col gap-8">
            <div className="flex gap-4 items-start group">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-[#3b60ff] transition-transform group-hover:scale-110">
                <IconSparkles className="w-6 h-6" />
              </div>
              <p className="text-lg md:text-xl text-[#737373] font-medium leading-relaxed">
                With Genas AI mobile, you can instantly generate well-structured academic documents wherever you are.
              </p>
            </div>

            <div className="flex gap-4 items-start group">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-[#3b60ff] transition-transform group-hover:scale-110">
                <IconSparkles className="w-6 h-6" />
              </div>
              <p className="text-lg md:text-xl text-[#737373] font-medium leading-relaxed">
                From assignments to research papers, experience smarter formatting, faster creation, and effortless editing all in one seamless app.
              </p>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="flex-1 w-full relative h-[650px] flex items-center justify-center">
          {/* Subtle glow behind phones */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[140px] pointer-events-none " />

          <div className="relative w-full max-w-[550px] h-[600px] ">
            {/* Back Phone - top left */}
            <div className="absolute left-0 top-40 w-[240px] md:w-[340px] transition-transform hover:scale-105 duration-500 z-10 -rotate-[5deg] xl:-translate-x-10">
              <Image
                src="/images/mock-2.png"
                alt="Mobile Mockup 2"
                width={400}
                height={800}
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              />
            </div>

            {/* Front Phone - bottom right */}
            <div className="absolute left-15 -top-2 w-[280px] md:w-[420px] transition-transform hover:scale-105 duration-500 z-20 rotate-[5deg] translate-y-12 drop-shadow-[-30px_30px_60px_rgba(0,0,0,0.25)] xl:translate-x-10">
              <Image
                src="/images/mock-1.png"
                alt="Mobile Mockup 1"
                width={400}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
