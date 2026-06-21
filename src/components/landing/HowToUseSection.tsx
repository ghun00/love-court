"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HOW_TO_USE_STEPS } from "@/constants/landing";

export function HowToUseSection() {
  const [activeStep, setActiveStep] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="how-to-use-heading"
      className="bg-gray-5 px-5 py-12 md:px-8 md:py-[60px] lg:px-[120px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:gap-12">
        <ScrollReveal>
          <div className="flex flex-col gap-4 md:gap-6">
            <h2
              id="how-to-use-heading"
              className="text-[28px] font-bold leading-[1.5] text-gray-black md:text-[40px] lg:text-[48px]"
            >
              운동 일정만 남겨주세요.
              <br />
              작가 견적은 저희가 받아서 전달해드릴게요.
            </h2>
            <p className="text-base leading-[1.5] text-gray-black md:text-xl lg:text-[28px]">
              러브 코트가 조건에 맞는 스포츠 스냅 작가님들의 견적을
              받아드려요.
              <br className="hidden md:block" />
              포트폴리오와 견적을 비교한 뒤, 원하는 작가님을 직접
              선택해보세요!
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            className="flex flex-col gap-4 lg:flex-row lg:gap-4"
            role="tablist"
            aria-label="이용 방법 단계"
          >
            {HOW_TO_USE_STEPS.map((step, index) => {
              const isActive = activeStep === index;

              return (
                <motion.button
                  key={step.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`step-panel-${step.id}`}
                  id={`step-tab-${step.id}`}
                  onClick={() => setActiveStep(index)}
                  layout={!prefersReducedMotion}
                  transition={{
                    layout: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                  }}
                  className={`flex min-h-[200px] flex-col overflow-hidden rounded-xl p-6 text-left shadow-card transition-[background-color,box-shadow,transform] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 lg:min-h-[300px] ${
                    isActive
                      ? "bg-orange-700 lg:w-[360px] lg:shrink-0"
                      : "bg-gray-6 lg:flex-1"
                  } ${isActive ? "justify-between" : "justify-between"}`}
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : { scale: isActive ? 1.01 : 1.005, y: isActive ? -2 : 0 }
                  }
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.995 }}
                >
                  <p
                    className={`shrink-0 text-base font-bold leading-[1.5] md:text-lg ${
                      isActive ? "text-gray-6" : "text-gray-black"
                    }`}
                  >
                    {step.label}
                  </p>

                  <div
                    id={`step-panel-${step.id}`}
                    role="tabpanel"
                    aria-labelledby={`step-tab-${step.id}`}
                    className={`flex flex-col gap-3 ${isActive ? "mt-6" : "mt-auto"}`}
                  >
                    <motion.div
                      animate={{
                        opacity: isActive ? 1 : 0.4,
                        y: isActive ? 0 : 4,
                      }}
                      transition={{ duration: 0.25 }}
                      className="relative h-8"
                      style={{ width: step.emojiWidth }}
                    >
                      <Image
                        src={step.emoji}
                        alt=""
                        fill
                        className="object-contain object-left"
                        aria-hidden
                      />
                    </motion.div>

                    {isActive && (
                      <motion.div
                        initial={
                          prefersReducedMotion
                            ? { opacity: 1, height: "auto" }
                            : { opacity: 0, height: 0 }
                        }
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col gap-3 overflow-hidden"
                      >
                        <h3
                          className={`text-lg font-bold leading-[1.5] md:text-xl ${
                            isActive ? "text-gray-6" : "text-gray-black"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p className="text-sm font-medium leading-[1.5] text-gray-5 md:text-base">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
