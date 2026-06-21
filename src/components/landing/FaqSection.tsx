"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FAQ_ITEMS } from "@/constants/landing";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.25 }}
      className="shrink-0 text-gray-black"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-gray-6 px-5 py-12 md:px-8 md:py-[60px] lg:px-[120px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:gap-12">
        <ScrollReveal>
          <div className="flex flex-col gap-4 md:gap-6">
            <h2
              id="faq-heading"
              className="text-[28px] font-bold leading-[1.5] text-gray-black md:text-[40px] lg:text-[48px]"
            >
              자주 묻는 질문
            </h2>
            <p className="text-base leading-[1.5] text-gray-black md:text-xl lg:text-[28px]">
              서비스 이용 및 촬영 전 궁금할 수 있는 내용을 미리
              정리했어요.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col gap-5">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.question} className="flex flex-col gap-5">
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                  >
                    <span className="text-base font-bold leading-[1.5] text-gray-black md:text-xl">
                      {item.question}
                    </span>
                    <ChevronIcon open={isOpen} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={
                          prefersReducedMotion
                            ? { opacity: 1, height: "auto" }
                            : { opacity: 0, height: 0 }
                        }
                        animate={{ opacity: 1, height: "auto" }}
                        exit={
                          prefersReducedMotion
                            ? { opacity: 0, height: 0 }
                            : { opacity: 0, height: 0 }
                        }
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-1 text-base leading-[1.6] text-gray1 md:text-xl md:leading-[1.5]">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="h-0.5 rounded-xl bg-gray-4" />
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
