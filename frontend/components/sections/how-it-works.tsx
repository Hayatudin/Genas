import { IconClipboardList, IconPencilSearch, IconFileDescription, IconFolders, IconTemplate, IconLayoutDashboard, IconSparkles, IconFile, IconEdit, IconBooks } from "@tabler/icons-react";
import Image from "next/image";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose a Category",
      description: "Select what you want to generate Assignment, Essay, Research, and more.",
      icons: (
        <div className="relative w-full h-36 flex items-center justify-center mb-2">
          {/* Card 1 Illustration Image */}
          <div className="relative w-full h-full z-10">
            <Image
              src="/images/file.png"
              alt="Choose a Category"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )
    },
    {
      number: "02",
      title: "Add Your Details",
      description: "Enter course, topic, depth, structure, and file format.",
      icons: (
        <div className="relative w-full h-36 flex flex-col items-center justify-center mb-2">
          {/* Main Red Card */}
          <div className="relative w-[96px] h-[112px] rounded-[14px] bg-gradient-to-b from-[#EF3C35] to-[#9C0400] shadow-[0_8px_32px_rgba(239,60,53,0.25)] border border-white/[0.08]">

            {/* Course Pill */}
            <div className="absolute -top-3 -right-8 bg-[#363636] border border-[#505050] rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 shadow-[0_12px_24px_rgba(0,0,0,0.6)] z-20 hover:scale-105 transition-transform duration-300">
              <IconFile className="w-3.5 h-3.5 text-[#B81818]" fill="currentColor" />
              <IconSparkles className="w-3 h-3 text-[#A3A3A3]" stroke={2} />
              <span className="text-[10px] text-[#E5E5E5] font-medium leading-none pr-0.5">Course</span>
            </div>

            {/* Title Pill */}
            <div className="absolute top-[22px] -left-12 bg-[#363636] border border-[#505050] rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 shadow-[0_12px_24px_rgba(0,0,0,0.6)] z-20 hover:scale-105 transition-transform duration-300">
              <IconFile className="w-3.5 h-3.5 text-[#B81818]" fill="currentColor" />
              <IconSparkles className="w-3 h-3 text-[#A3A3A3]" stroke={2} />
              <span className="text-[10px] text-[#E5E5E5] font-medium leading-none pr-0.5">Title</span>
            </div>

            {/* Description Pill */}
            <div className="absolute top-[52px] -right-5 bg-[#363636] border border-[#505050] rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 shadow-[0_12px_24px_rgba(0,0,0,0.6)] z-20 hover:scale-105 transition-transform duration-300">
              <IconEdit className="w-3.5 h-3.5 text-[#B81818]" fill="currentColor" />
              <IconSparkles className="w-3 h-3 text-[#A3A3A3]" stroke={2} />
              <span className="text-[10px] text-[#E5E5E5] font-medium leading-none pr-0.5">Description</span>
            </div>

            {/* Depth Pill */}
            <div className="absolute bottom-2 -left-8 bg-[#363636] border border-[#505050] rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 shadow-[0_12px_24px_rgba(0,0,0,0.6)] z-20 hover:scale-105 transition-transform duration-300">
              <IconBooks className="w-3.5 h-3.5 text-[#B81818]" fill="currentColor" />
              <IconSparkles className="w-3 h-3 text-[#A3A3A3]" stroke={2} />
              <span className="text-[10px] text-[#E5E5E5] font-medium leading-none pr-0.5">Depth</span>
            </div>

          </div>
        </div>
      )
    },
    {
      number: "03",
      title: "Pick a Template",
      description: "Choose a template you want to style your document.",
      icons: (
        <div className="relative w-full h-36 flex flex-col items-center justify-center mb-2">
          <div className="relative w-full h-full flex items-center justify-center inset-x-0">

            {/* Far Left Card */}
            <div className="absolute left-0 w-[56px] h-[68px] bg-[#C5201A] rounded-md overflow-hidden flex items-center justify-center border-[3px] border-[#C5201A] -rotate-[35deg] z-0">
              <div className="relative w-full h-full bg-white">
                <Image src="/images/template-1.jpg" alt="Template 1" fill className="object-cover" />
              </div>
            </div>

            {/* Mid Left Card */}
            <div className="absolute left-[16%] w-[64px] h-[84px] bg-[#DA3027] rounded-md overflow-hidden flex items-center justify-center border-[4px] border-[#DA3027] -rotate-[15deg] z-10 text-white">
              <div className="relative w-full h-full bg-white">
                <Image src="/images/template-2.jpg" alt="Template 2" fill className="object-cover" />
              </div>
            </div>

            {/* Far Right Card */}
            <div className="absolute right-0 w-[56px] h-[68px] bg-[#C5201A] rounded-md overflow-hidden flex flex-col items-center justify-between border-[3px] border-[#C5201A] rotate-[35deg] z-0">
              <div className="relative w-full h-full bg-white">
                <Image src="/images/template-1.jpg" alt="Template 5" fill className="object-cover" />
              </div>
            </div>

            {/* Mid Right Card */}
            <div className="absolute right-[16%] w-[64px] h-[84px] bg-[#DA3027] rounded-md overflow-hidden flex items-center justify-center border-[4px] border-[#DA3027] rotate-[15deg] z-10 text-white">
              <div className="relative w-full h-full bg-white">
                <Image src="/images/template-4.png" alt="Template 4" fill className="object-cover" />
              </div>
            </div>

            {/* Center Card */}
            <div className="relative w-[86px] h-[106px] rounded-[8px] bg-gradient-to-b from-[#EF3C35] to-[#9C0400] z-20 flex flex-col items-center justify-start p-1.5 gap-1.5">
              <div className="relative w-full h-[45%] bg-white rounded-[2px] overflow-hidden">
                <Image src="/images/template-3.jpg" alt="Template 3 Top" fill className="object-cover object-top" />
              </div>
              <div className="relative w-[85%] h-[35%] bg-white rounded-[2px] overflow-hidden">
                <Image src="/images/template-3.jpg" alt="Template 3 Bottom" fill className="object-cover object-bottom" />
              </div>

              {/* Buttons below center card */}
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full">
                <div className="bg-gradient-to-b from-[#5C5C5C] to-[#403E3F] text-[#E5E5E5] text-[5px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap">
                  Use Template
                </div>
                <div className="w-[15px] h-[15px] rounded-full bg-gradient-to-b from-[#F2F2F2] to-[#B0B0B0] flex items-center justify-center text-[#555] text-[12px] font-medium leading-none pb-[1px]">
                  +
                </div>
              </div>
            </div>

          </div>
        </div>
      )
    },
    {
      number: "04",
      title: "Generate Instantly",
      description: "Let AI generate the document instantly with the style you need.",
      icons: (
        <div className="relative w-full h-36 flex flex-col items-center justify-center mb-2">
          {/* Folder/Documents Image */}
          <div className="relative w-28 h-28 z-10">
            <Image
              src="/images/generate-folder.png"
              alt="Generate documents"
              fill
              className="object-contain"
            />
          </div>
          {/* Red circular sparkle button */}
          <div className="absolute bottom-9 translate-y-10 left-[50%] -translate-x-1/2 z-20 w-11 h-11 rounded-full bg-gradient-to-b from-[#FDA8A8] via-[#7E0905] to-[#FDA8A8]  border-2 border-[#910603] flex items-center justify-center shadow-[0_4px_16px_rgba(139,32,53,0.5)]">
            <IconSparkles className="w-6 h-6 text-white" stroke={1.5} />
          </div>
          {/* Grey "Generating" pill */}
          <div className="absolute bottom-8 translate-y-10 left-[65%] z-20 bg-[#403E3F] rounded-md px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
            <IconSparkles className="w-3 h-3 text-white/60" stroke={1.5} />
            <span className="text-[8px] text-white/60 font-medium">Generating</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#F5F5F5] flex flex-col items-center justify-center text-center px-4 relative z-10 border-t border-slate-100/50">

      {/* Header */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center justify-center bg-white text-slate-500 text-xs font-medium px-4 py-1.5 rounded-full mb-6">
          How it works
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
          How Genas works
        </h2>
        <p className="text-lg text-slate-500 font-medium">
          Everything you need to generate structured academic content, in one platform.
        </p>
      </div>

      {/* Timeline & Cards Container */}
      <div className="w-full max-w-6xl mx-auto relative px-4">

        {/* Timeline Line (Desktop only) */}
        <div className="hidden md:block w-[75%] mx-auto relative h-[2px] bg-[#3b60ff]/30 mb-12">
          {/* Timeline dots overlay */}
          <div className="absolute inset-x-0 -top-[5px] flex justify-between items-center">
            <div className="w-3 h-3 rounded-full bg-[#3b60ff]" />
            <div className="w-3 h-3 rounded-full bg-[#3b60ff] " />
            <div className="w-3 h-3 rounded-full bg-[#3b60ff] " />
            <div className="w-3 h-3 rounded-full bg-[#3b60ff] " />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            /* Gradient border wrapper */
            <div
              key={index}
              className="rounded-[22px] p-[1px] w-full bg-[url('/images/card-bg.png')] bg-cover bg-center hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="rounded-[21px] p-5 text-left relative overflow-hidden group h-full">
                {/* Image background pattern */}
                {/* <Image
                  src="/images/card-bg.png"
                  alt="Card Background"
                  fill
                  className="object-cover absolute inset-0 z-0 pointer-events-none rounded-[21px]"
                /> */}

                {/* Step number badge */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full border border-[#616161] bg-[#0E0E0E] flex items-center justify-center text-[15px] font-semibold text-white/70 text-center z-20 backdrop-blur-sm">
                  {step.number}
                </div>

                {/* Custom Icon Representation */}
                <div className="mt-6">
                  {step.icons}
                </div>

                {/* Text Content */}
                <div className="relative z-20 mt-1">
                  <h3 className="text-base font-semibold text-white mb-1.5">{step.title}</h3>
                  <p className="text-[10px] text-[#C8C8C8] leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

