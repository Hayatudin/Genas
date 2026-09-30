"use client";

import { useState } from "react";
import { StepCategory } from "@/components/dashboard/generate/step-category";
import { StepDetails } from "@/components/dashboard/generate/step-details";
import { StepTemplate } from "@/components/dashboard/generate/step-template";
import { StepReview } from "@/components/dashboard/generate/step-review";

export default function GenerateDocumentPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    category: "Assignment",
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

      {/* Stepper matching attached design */}
      <div className="flex items-center w-full max-w-[620px] mb-8 sm:mb-10">
        {/* Step 1: Category */}
        <div className="flex flex-col items-start flex-shrink-0">
          <div className="w-5 h-5 rounded-full bg-[#2458f5] flex items-center justify-center text-white shadow-xs">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <div className="mt-2 text-xs sm:text-[13px] whitespace-nowrap">
            <span className="font-bold text-slate-900">01</span>
            <span className="font-medium text-slate-600 ml-1.5">Category</span>
          </div>
        </div>

        {/* Solid line between 1 and 2 */}
        <div className="flex-1 h-[2px] bg-[#2458f5] mx-3 sm:mx-4 -mt-6"></div>

        {/* Step 2: Details */}
        <div className="flex flex-col items-start flex-shrink-0">
          <div className="w-5 h-5 rounded-full border-2 border-[#2458f5] bg-white flex items-center justify-center">
            {currentStep > 2 && (
              <svg className="w-3 h-3 text-[#2458f5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            )}
          </div>
          <div className="mt-2 text-xs sm:text-[13px] whitespace-nowrap">
            <span className="font-bold text-slate-900">02</span>
            <span className="font-medium text-slate-500 ml-1.5">Details</span>
          </div>
        </div>

        {/* Dashed line between 2 and 3 */}
        <div className="flex-1 border-t-2 border-dashed border-[#2458f5] mx-3 sm:mx-4 -mt-6"></div>

        {/* Step 3: Template */}
        <div className="flex flex-col items-start flex-shrink-0">
          <div className="w-5 h-5 rounded-full border-2 border-[#2458f5] bg-white flex items-center justify-center">
            {currentStep > 3 && (
              <svg className="w-3 h-3 text-[#2458f5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            )}
          </div>
          <div className="mt-2 text-xs sm:text-[13px] whitespace-nowrap">
            <span className="font-bold text-slate-900">03</span>
            <span className="font-medium text-slate-500 ml-1.5">Template</span>
          </div>
        </div>

        {/* Dashed line between 3 and 4 */}
        <div className="flex-1 border-t-2 border-dashed border-[#2458f5] mx-3 sm:mx-4 -mt-6"></div>

        {/* Step 4: Review */}
        <div className="flex flex-col items-start flex-shrink-0">
          <div className="w-5 h-5 rounded-full border-2 border-[#2458f5] bg-white flex items-center justify-center">
            {currentStep > 4 && (
              <svg className="w-3 h-3 text-[#2458f5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            )}
          </div>
          <div className="mt-2 text-xs sm:text-[13px] whitespace-nowrap">
            <span className="font-bold text-slate-900">04</span>
            <span className="font-medium text-slate-500 ml-1.5">Review</span>
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
