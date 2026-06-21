import Image from "next/image";
import { CtaButton } from "@/components/ui/CtaButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HERO_BADGES, REQUEST_ANCHOR } from "@/constants/landing";

function BadgeIcon({
  type,
  className = "size-4 shrink-0 sm:size-6",
}: {
  type: "shield" | "handshake" | "camera";
  className?: string;
}) {
  if (type === "shield") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className={className}
      >
        <path
          d="M12 3L4 7V12C4 16.5 7.5 20.5 12 21C16.5 20.5 20 16.5 20 12V7L12 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 12L11 14L15 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "handshake") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className={className}
      >
        <path
          d="M4 14L8 18M8 18L12 14M8 18V21M16 10L20 14M16 10L12 14M16 10V7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12H6M18 12H22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M4 8H20V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 8L9 5H15L16 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] overflow-hidden rounded-b-[32px] bg-gray-5 md:rounded-b-[60px]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero_bg-pc.png"
          alt="테니스 코트에서 운동하는 장면 — 러브 코트 히어로 배경"
          fill
          priority
          className="object-cover object-[60%_center] md:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0d0d0d]/70" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 pb-36 pt-28 text-center md:px-8 md:pb-32 md:pt-24 lg:px-[120px]">
        <ScrollReveal className="mx-auto flex max-w-[970px] flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4 md:gap-8">
            <div className="flex flex-col items-center gap-1">
              <p className="text-lg font-medium text-orange-500 text-shadow-hero md:text-[28px]">
                스포츠 전문 스냅 작가 매칭 서비스
              </p>
              <div className="h-px w-full max-w-[373px] bg-orange-500" />
            </div>

            <h1
              id="hero-heading"
              className="text-[32px] font-extrabold leading-[1.4] text-white text-shadow-hero md:text-[48px] lg:text-[60px]"
            >
              운동하는 내 모습,
              <br />
              이제 제대로 남겨보세요.
            </h1>

            <p className="max-w-[850px] text-base font-medium leading-[1.5] text-gray-6 text-shadow-hero md:text-xl lg:text-[28px]">
              테니스, 피클볼, 배드민턴, 러닝 이벤트까지.
              <br  />
              일정과 장소만 남기면, 러브 코트가 스포츠 촬영 전문 스냅
              작가를 찾아드릴게요
            </p>
          </div>

          <CtaButton href={REQUEST_ANCHOR}>무료로 견적 받아보기</CtaButton>
        </ScrollReveal>

        {/* Badges */}
        <div className="absolute bottom-8 left-0 right-0 px-5 md:bottom-20 md:px-8 lg:px-[120px]">
          <ScrollReveal delay={0.15}>
            <ul className="mx-auto grid w-full grid-cols-3 gap-2 sm:flex sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center md:gap-4">
              {HERO_BADGES.map((badge) => (
                <li
                  key={badge.label}
                  className="flex min-w-0 flex-col items-center justify-center gap-1 rounded-full bg-white/15 px-1.5 py-2.5 text-[11px] font-medium leading-tight text-gray-6 shadow-[0_0_8px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:inline-flex sm:flex-row sm:gap-2 sm:px-4 sm:py-3 sm:text-sm md:text-xl"
                >
                  <BadgeIcon type={badge.icon} />
                  <span className="text-center">{badge.label}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
