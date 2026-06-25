"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";

type StepItem = {
  number: number;
  title: string;
  description: string;
  imageSrc: string;
};

const ESimSetupGuideSection = () => {
  const t = useTranslations('howToInstall.setupGuide');
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState<"ios" | "android">("ios");

  const getSteps = (platform: "ios" | "android"): StepItem[] => {
    const steps = t.raw(`steps.${platform}`) as StepItem[];
    return steps.map((step: StepItem) => ({
      ...step,
      imageSrc: `/images/setup/${platform}-step${step.number}.png`
    }));
  };

  const currentSteps = getSteps(activeTab);

  // Get important notes from translations
  const importantNotes = t.raw(`notes.${activeTab}`) as string[];

  // Get platform name for the notes title
  const platformName = activeTab === "ios" ? t('ios') : t('android');

  return (
    <section ref={sectionRef} className="w-full px-4 py-16 sm:px-6 lg:px-8 bg-[#faf6ff] text-slate-900 overflow-hidden">
      <div className="mx-auto max-w-[1200px]">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9b51e0]">
              {t('label')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2c1342] tracking-tight">
            {t('title')}
          </h2>
          <motion.div className="h-[3.5px] w-14 mx-auto rounded-full bg-gradient-to-r from-[#563673] to-[#f16548] mt-4 mb-4" />
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Dynamic Segmented Control Switch */}
        <div className="flex justify-center mb-14">
          <div className="bg-[#eee5f8] p-1.5 rounded-full flex items-center w-64 relative shadow-inner">
            <button
              onClick={() => setActiveTab("ios")}
              className={`flex-1 text-center py-2 text-xs font-black rounded-full transition-all duration-300 z-10 ${
                activeTab === "ios" ? "text-white bg-[#4c1d73] shadow-md" : "text-[#4c1d73] opacity-75"
              }`}
            >
              {t('ios')}
            </button>
            <button
              onClick={() => setActiveTab("android")}
              className={`flex-1 text-center py-2 text-xs font-black rounded-full transition-all duration-300 z-10 ${
                activeTab === "android" ? "text-white bg-[#4c1d73] shadow-md" : "text-[#4c1d73] opacity-75"
              }`}
            >
              {t('android')}
            </button>
          </div>
        </div>

        {/* Step Grid Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          <AnimatePresence mode="wait">
            {currentSteps.map((step) => (
              <motion.div
                key={`${activeTab}-${step.number}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white border border-[#ebdff9] rounded-[32px] p-6 flex flex-col justify-between items-start shadow-sm min-h-[480px]"
              >
                <div className="w-full">
                  {/* Step Round Counter Bullet */}
                  <div className="w-8 h-8 rounded-full bg-[#9262bc] text-white flex items-center justify-center text-xs font-bold mb-4 shadow-sm">
                    {step.number}
                  </div>
                  <h3 className="text-base font-extrabold text-[#4c1d73] mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Simulated Phone UI Screen Container */}
                <div className="w-full bg-[#fbf9fe] rounded-2xl border border-slate-100 flex items-center justify-center p-4 min-h-[260px] relative overflow-hidden">
                  <div className="w-full max-w-[170px] aspect-[9/19] bg-white border-[4px] border-slate-800 rounded-[24px] relative shadow-md overflow-hidden flex flex-col justify-start">
                    {/* Dynamic Phone Top Notch Screen Decorator */}
                    <div className="w-16 h-3.5 bg-slate-800 rounded-b-xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center" />
                    
                    {/* Simulated Internal Settings Layout Box */}
                    <div className="p-2 pt-5 text-[6px] space-y-1.5 text-slate-400 select-none">
                      <div className="font-bold text-[7px] text-slate-800 mb-2 border-b border-slate-100 pb-1">
                        {activeTab === "ios" ? "Settings" : "Settings"}
                      </div>
                      <div className="flex items-center gap-1 bg-slate-50 p-1 rounded">
                        <div className="w-2 h-2 rounded bg-amber-500" /> Airplane Mode
                      </div>
                      <div className="flex items-center gap-1 bg-slate-50 p-1 rounded relative">
                        <div className="w-2 h-2 rounded bg-blue-500" /> Wi-Fi
                        {step.number === 1 && activeTab === "ios" && <div className="absolute right-1 w-2 h-2 rounded-full bg-red-500 animate-ping" />}
                      </div>
                      <div className="flex items-center justify-between bg-slate-50 p-1 rounded relative border border-purple-200/50">
                        <div className="flex items-center gap-1 text-slate-800 font-medium">
                          <div className={`w-2 h-2 rounded ${activeTab === "ios" ? "bg-emerald-500" : "bg-indigo-500"}`} /> 
                          {activeTab === "ios" ? "Cellular" : "Network"}
                        </div>
                        {step.number === 2 && <div className="w-2.5 h-2.5 rounded-full bg-red-500" />}
                      </div>
                      <div className="w-full h-10 bg-slate-100 rounded-md flex flex-col justify-center items-center gap-1 text-[5px]">
                        <div className="w-4/5 h-1 bg-slate-200 rounded" />
                        <div className="w-3/5 h-1 bg-slate-200 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic Important Bottom Sticky Context Alert Box */}
        <motion.div 
          layout
          className="bg-white border border-[#f5ebff] rounded-3xl p-6 md:p-8 shadow-[0_10px_30px_rgba(146,98,188,0.06)]"
        >
          <h4 className="text-sm font-extrabold text-[#d63384] mb-4 uppercase tracking-wider">
            {t('notesTitle', { platform: platformName })}
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {importantNotes.map((note, index) => (
              <li key={index} className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal font-medium">
                <span className="text-[#9262bc] mt-0.5">•</span>
                {note}
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default ESimSetupGuideSection;