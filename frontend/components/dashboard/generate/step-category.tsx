"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { IconArrowRight } from "@tabler/icons-react";

export function StepCategory({ formData, updateForm, onNext }: any) {
  const router = useRouter();

  const categories = [
    {
      id: "Assignment",
      title: "Assignment",
      desc: "Structured academic submission with introduction, body, and conclusion.",
      imageSrc: "/upload/Assignment2.png",
      imageAlt: "Assignment binder notebook",
      bgClass: "bg-gradient-to-r from-[#205bf4] to-[#3a7bfb] text-white",
      isLight: false,
      imgClass: "absolute right-0 bottom-0 w-[220px] sm:w-[240px] h-[178px] flex items-end justify-end select-none pointer-events-none",
      imgWidth: 244,
      imgHeight: 172
    },
    {
      id: "Essay",
      title: "Essay",
      desc: "Argumentative, descriptive, analytical, or narrative format.",
      imageSrc: "/upload/Essay2.png",
      imageAlt: "Essay paper sheets and pen",
      bgClass: "bg-gradient-to-br from-[#f2f6fa] to-[#e8edf5] border border-slate-200/80 text-slate-900",
      isLight: true,
      imgClass: "absolute right-0 bottom-0 w-[185px] sm:w-[200px] h-[172px] flex items-end justify-end select-none pointer-events-none",
      imgWidth: 189,
      imgHeight: 165
    },
    {
      id: "Research Paper",
      title: "Research Paper",
      desc: "Full academic research structure with citations and references.",
      imageSrc: "/upload/Research2.png",
      imageAlt: "Research paper with magnifying glass",
      bgClass: "bg-gradient-to-br from-[#f2f6fa] to-[#e8edf5] border border-slate-200/80 text-slate-900",
      isLight: true,
      imgClass: "absolute right-0 bottom-0 w-[185px] sm:w-[200px] h-[168px] flex items-end justify-end select-none pointer-events-none",
      imgWidth: 192,
      imgHeight: 161
    },
    {
      id: "Report",
      title: "Report",
      desc: "Formal, structured report with headings and data sections.",
      imageSrc: "/upload/Report2.png",
      imageAlt: "Report clipboard and calculator",
      bgClass: "bg-gradient-to-r from-[#eb4f27] to-[#f4682c] text-white",
      isLight: false,
      imgClass: "absolute right-0 bottom-0 w-[180px] sm:w-[195px] h-[160px] flex items-end justify-end select-none pointer-events-none",
      imgWidth: 171,
      imgHeight: 146
    }
  ];

  return (
    <div className="flex flex-col xl:flex-row items-start gap-8 2xl:gap-12 w-full pb-8">
      {/* Left Column: Category Selection Grid (Exact 350x184 cards) */}
      <div className="flex flex-col flex-1 min-w-0">
        <h2 className="text-xl sm:text-[22px] font-bold text-slate-900 tracking-tight">
          What would you like to create?
        </h2>
        <p className="text-sm font-medium text-slate-400 mt-1 mb-6">
          Choose a document type to begin.
        </p>

        {/* Responsive 2x2 Grid filling available space */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 xl:gap-6 w-full">
          {categories.map((cat) => {
            const isSelected = formData.category === cat.id;

            const handleSelect = (e?: React.MouseEvent) => {
              if (e) e.stopPropagation();
              updateForm({ category: cat.id });
              onNext();
            };

            return (
              <div
                key={cat.id}
                onClick={() => handleSelect()}
                className={`relative overflow-hidden rounded-[24px] p-5 cursor-pointer shadow-sm transition-all duration-200 group flex flex-col justify-between w-full h-[184px] select-none ${cat.bgClass} ${
                  isSelected ? "ring-2 ring-[#2458f5] shadow-md scale-[1.01]" : "hover:shadow-md hover:scale-[1.005]"
                }`}
              >
                {/* Text Content */}
                <div className="flex flex-col z-10 max-w-[62%] sm:max-w-[60%]">
                  <h3 className={`text-[19px] sm:text-[20px] font-bold tracking-tight leading-snug ${cat.isLight ? "text-slate-900" : "text-white"}`}>
                    {cat.title}
                  </h3>
                  <p className={`text-[11px] sm:text-[11.5px] leading-relaxed mt-1 font-medium ${cat.isLight ? "text-slate-500" : "text-white/80"}`}>
                    {cat.desc}
                  </p>
                </div>

                {/* Bottom Select Pill Button - Automatically continues to the next step when clicked */}
                <div className="z-10 mt-auto">
                  <button
                    type="button"
                    onClick={handleSelect}
                    className={`inline-flex items-center justify-center rounded-full px-4 py-1 text-[11px] font-semibold transition-all select-none shadow-2xs hover:scale-105 active:scale-95 cursor-pointer ${
                      cat.id === "Assignment"
                        ? "bg-white text-slate-900 shadow-xs hover:bg-slate-50"
                        : cat.id === "Report"
                        ? "bg-[#fed7cc] hover:bg-[#fecbc0] text-[#c2410c]"
                        : "bg-[#dce9fd] hover:bg-[#d0e0fb] text-[#2458f5]"
                    }`}
                  >
                    Select
                  </button>
                </div>

                {/* Uploaded Illustration Asset: Aligned flush to the bottom with no gap */}
                <div className={cat.imgClass}>
                  <Image
                    src={cat.imageSrc}
                    alt={cat.imageAlt}
                    width={cat.imgWidth}
                    height={cat.imgHeight}
                    className="w-full h-full object-contain object-bottom select-none drop-shadow-sm"
                    priority
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons under the 2x2 grid, matching design placement */}
        <div className="flex items-center justify-end gap-3 mt-6 w-full pr-1">
          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="border border-slate-300 text-slate-600 hover:bg-slate-50 hover:text-slate-800 text-xs font-semibold px-5 py-2 rounded-full transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onNext}
            className="bg-[#2458f5] hover:bg-[#1d4ed8] text-white text-xs font-semibold px-6 py-2 rounded-full flex items-center gap-1.5 shadow-sm transition-transform active:scale-95"
          >
            <span>Continue</span>
            <IconArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Right Column: Tablet Device Frame with Document Preview */}
      <div className="flex flex-col flex-shrink-0 w-full xl:w-[320px] 2xl:w-[340px]">
        <div className="flex flex-col mb-4">
          <h3 className="text-[15px] font-bold text-slate-900 tracking-tight">
            Your document preview
          </h3>
          <p className="text-[11.5px] font-medium text-slate-400 mt-0.5">
            A preview will appear here once you select a category.
          </p>
        </div>

        {/* Tablet Device Frame */}
        <div className="w-full sm:w-[310px] xl:w-[320px] 2xl:w-[340px] h-[460px] sm:h-[490px] bg-[#16161a] rounded-[32px] p-4 flex items-center justify-center shadow-xl border border-slate-800/80 relative overflow-hidden">
          {/* Subtle Ambient reflection on tablet bezel */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          {/* Screen Content: Official Preview Document */}
          <div className="w-full h-full rounded-[22px] bg-slate-900/60 overflow-hidden flex items-center justify-center p-3 relative">
            <Image
              src="/upload/Preview.png"
              alt="Document Preview"
              width={220}
              height={290}
              className="object-contain rounded-md shadow-lg max-h-[440px] select-none"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
