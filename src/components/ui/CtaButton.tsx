"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  size?: "sm" | "lg";
  className?: string;
  showArrow?: boolean;
};

function ArrowIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CtaButton({
  href,
  children,
  size = "lg",
  className = "",
  showArrow = true,
}: CtaButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  const sizeClasses =
    size === "lg"
      ? "min-h-[48px] md:min-h-[60px] px-6 md:px-8 py-3 md:py-4 text-base md:text-xl"
      : "min-h-[48px] px-4 md:px-6 py-3 text-sm md:text-base";

  return (
    <motion.div
      whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={href}
        className={`inline-flex items-center justify-center gap-3 rounded-full bg-orange-700 font-bold text-gray-6 transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 active:bg-orange-700 ${sizeClasses} ${className}`}
      >
        {children}
        {showArrow && <ArrowIcon />}
      </Link>
    </motion.div>
  );
}
