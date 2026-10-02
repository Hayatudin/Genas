"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { StepCategory } from "@/components/dashboard/generate/step-category";
import { StepDetails } from "@/components/dashboard/generate/step-details";
import { StepTemplate } from "@/components/dashboard/generate/step-template";
import { StepReview } from "@/components/dashboard/generate/step-review";

function GenerateContent() {
  const searchParams = useSearchParams();
  const paramCategory = searchParams.get("category");
  const paramStep = searchParams.get("step");

  const [currentStep, setCurrentStep] = useState(paramStep === "2" || paramCategory ? 2 : 1);
  const [formData, setFormData] = useState({
    category: paramCategory || "Assignment",
    course: "",
    topic: "",
    instructions: "",
    academicLevel: "Undergraduate",
    depthLevel: "Standard",
    structure: {
      toc: true, intro: true, body: true, conclusion: true, references: true
    },
    format: "DOCX",
    template: "Classic Academic"
  });

  useEffect(() => {
    if (paramCategory) {
      setFormData(prev => ({ ...prev, category: paramCategory }));
    }
    if (paramStep === "2" || paramCategory) {
      setCurrentStep(2);
    }
  }, [paramCategory, paramStep]);

  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const handleBack = () => setCurrentStep(prev => Math.max(prev - 1, 1));
  const updateForm = (updates: any) => setFormData(p => ({ ...p, ...updates }));

  return (
    <div className="flex flex-col w-full">
      {/* Header section matching design */}
      <div className="flex flex-col mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight">
          Generate Document
        </h1>
        <p className="text-sm font-medium text-slate-400 mt-1">
          Create structured academic content tailored to your requirements.
        </p>
      </div>

      {/* Stepper with equal circle-to-line gaps, responsive flexible lines, and dynamic black title for finished steps */}
      <div className="w-full max-w-[980px] xl:max-w-[1060px] 2xl:max-w-[1140px] pr-10 sm:pr-14 mb-8 sm:mb-10 pb-5">
        <div className="flex items-center w-full">
          {/* Step 1: Category */}
          <div 
            onClick={() => setCurrentStep(1)}
            className="relative flex flex-col items-start flex-shrink-0 cursor-pointer"
          >
            <div className="w-5 h-5 rounded-full bg-[#2458f5] flex items-center justify-center text-white shadow-xs">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div className="absolute top-7 left-0 whitespace-nowrap text-xs sm:text-[13px] flex items-center select-none">
              <span className={`font-bold ${currentStep > 1 ? "text-black" : "text-slate-900"}`}>01</span>
              <span className={`ml-1.5 ${
                currentStep > 1 
                  ? "text-black font-bold" 
                  : "text-slate-600 font-medium"
              }`}>Category</span>
            </div>
          </div>

          {/* Line between Step 1 and Step 2: Equal gap on left and right, responsive flex-1 width */}
          <div className="flex-1 h-[2.5px] sm:h-[3px] bg-[#2458f5] mx-3 sm:mx-4 rounded-full" />

          {/* Step 2: Details */}
          <div 
            onClick={() => currentStep > 2 ? setCurrentStep(2) : null}
            className={`relative flex flex-col items-start flex-shrink-0 ${currentStep > 2 ? "cursor-pointer" : ""}`}
          >
            <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
              currentStep > 2 
                ? "bg-[#2458f5] text-white shadow-xs" 
                : "border-2 border-[#2458f5] bg-white"
            }`}>
              {currentStep > 2 && (
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
            </div>
            <div className="absolute top-7 left-0 whitespace-nowrap text-xs sm:text-[13px] flex items-center select-none">
              <span className={`font-bold ${
                currentStep > 2 
                  ? "text-black" 
                  : currentStep === 2 
                  ? "text-slate-900" 
                  : "text-slate-900"
              }`}>02</span>
              <span className={`ml-1.5 ${
                currentStep > 2 
                  ? "text-black font-bold" 
                  : currentStep === 2 
                  ? "text-slate-600 font-medium" 
                  : "text-slate-400 font-medium"
              }`}>Details</span>
            </div>
          </div>

          {/* Line between Step 2 and Step 3: Equal gap on left and right, responsive flex-1 width */}
          {currentStep > 2 ? (
            <div className="flex-1 h-[2.5px] sm:h-[3px] bg-[#2458f5] mx-3 sm:mx-4 rounded-full" />
          ) : (
            <div className="flex-1 border-t-[2.5px] sm:border-t-[3px] border-dashed border-[#2458f5] mx-3 sm:mx-4" />
          )}

          {/* Step 3: Template */}
          <div 
            onClick={() => currentStep > 3 ? setCurrentStep(3) : null}
            className={`relative flex flex-col items-start flex-shrink-0 ${currentStep > 3 ? "cursor-pointer" : ""}`}
          >
            <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
              currentStep > 3 
                ? "bg-[#2458f5] text-white shadow-xs" 
                : "border-2 border-[#2458f5] bg-white"
            }`}>
              {currentStep > 3 && (
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
            </div>
            <div className="absolute top-7 left-0 whitespace-nowrap text-xs sm:text-[13px] flex items-center select-none">
              <span className={`font-bold ${
                currentStep > 3 
                  ? "text-black" 
                  : currentStep === 3 
                  ? "text-slate-900" 
                  : "text-slate-900"
              }`}>03</span>
              <span className={`ml-1.5 ${
                currentStep > 3 
                  ? "text-black font-bold" 
                  : currentStep === 3 
                  ? "text-slate-600 font-medium" 
                  : "text-slate-400 font-medium"
              }`}>Template</span>
            </div>
          </div>

          {/* Line between Step 3 and Step 4: Equal gap on left and right, responsive flex-1 width */}
          {currentStep > 3 ? (
            <div className="flex-1 h-[2.5px] sm:h-[3px] bg-[#2458f5] mx-3 sm:mx-4 rounded-full" />
          ) : (
            <div className="flex-1 border-t-[2.5px] sm:border-t-[3px] border-dashed border-[#2458f5] mx-3 sm:mx-4" />
          )}

          {/* Step 4: Review */}
          <div className="relative flex flex-col items-start flex-shrink-0">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
              currentStep > 4 
                ? "bg-[#2458f5] text-white shadow-xs" 
                : "border-2 border-[#2458f5] bg-white"
            }`}>
              {currentStep > 4 && (
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
            </div>
            <div className="absolute top-7 left-0 whitespace-nowrap text-xs sm:text-[13px] flex items-center select-none">
              <span className={`font-bold ${
                currentStep >= 4 
                  ? "text-black" 
                  : "text-slate-900"
              }`}>04</span>
              <span className={`ml-1.5 ${
                currentStep >= 4 
                  ? "text-black font-bold" 
                  : "text-slate-400 font-medium"
              }`}>Review</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full flex flex-col">
        {currentStep === 1 && <StepCategory formData={formData} updateForm={updateForm} onNext={handleNext} />}
        {currentStep === 2 && <StepDetails formData={formData} updateForm={updateForm} onNext={handleNext} onBack={handleBack} />}
        {currentStep === 3 && <StepTemplate formData={formData} updateForm={updateForm} onNext={handleNext} onBack={handleBack} />}
        {currentStep === 4 && <StepReview formData={formData} onBack={handleBack} />}
      </div>
    </div>
  );
}

export default function GenerateDocumentPage() {
  return (
    <Suspense fallback={<div className="p-8 text-slate-400 font-medium">Loading generator...</div>}>
      <GenerateContent />
    </Suspense>
  );
}
