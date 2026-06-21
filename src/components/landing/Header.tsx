"use client";

import { Logo } from "@/components/ui/Logo";
import { REQUEST_ANCHOR } from "@/constants/landing";
import Link from "next/link";
import { useEffect, useState } from "react";

function ExternalLinkIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M11 3H17V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12L17 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 12V17H3V3H8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-gray-black/20 bg-gray-black/60 backdrop-blur-md"
          : "border-gray-black bg-transparent backdrop-blur-[2px]"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-8 lg:px-[120px] lg:py-6">
        <Link href="/" aria-label="러브 코트 홈">
          <Logo />
        </Link>

        <nav
          className="flex items-center gap-2 md:gap-4"
          aria-label="주요 메뉴"
        >
          <Link
            href="#"
            className="flex items-center justify-center gap-3 rounded-full px-6 py-3 font-bold text-gray-6 transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 sm:inline-flex"
          >
            작가님이세요?
            <ExternalLinkIcon />
          </Link>

          <Link
            href={REQUEST_ANCHOR}
            className="inline-flex min-h-[40px] items-center justify-center rounded-full bg-orange-700 px-4 py-3 sm:py-2 text-sm font-bold text-gray-6 transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 active:bg-orange-700 md:px-6 md:text-base"
          >
            <span className="hidden sm:inline">내 일정으로 견적 받아보기</span>
            <span className="sm:hidden">견적 받기</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
