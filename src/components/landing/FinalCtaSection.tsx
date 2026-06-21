import Image from "next/image";
import { CtaButton } from "@/components/ui/CtaButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { REQUEST_ANCHOR } from "@/constants/landing";

export function FinalCtaSection() {
  return (
    <section
      id="request"
      aria-labelledby="final-cta-heading"
      className="relative flex min-h-[480px] items-center justify-center overflow-hidden px-5 py-16 md:min-h-[600px] md:px-8 md:py-[60px] lg:px-[120px]"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/cta-bg.jpg"
          alt="테니스 코트 배경 — 러브 코트 견적 요청 CTA"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <ScrollReveal className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 text-center md:gap-12">
        <div className="flex flex-col gap-4 md:gap-6">
          <h2
            id="final-cta-heading"
            className="text-[28px] font-bold leading-[1.5] text-gray-6 md:text-[40px] lg:text-[48px]"
          >
            좋아하는 운동을 하는 소중한 순간,
            <br />
            사진으로 남겨두세요
          </h2>
          <p className="text-base leading-[1.5] text-gray-6 md:text-xl lg:text-[28px]">
            친구들과 함께한 랠리, 경기 후의 웃음, 몰입했던 플레이의
            순간까지.
          </p>
        </div>

        <CtaButton href={REQUEST_ANCHOR}>무료로 견적 받아보기</CtaButton>
      </ScrollReveal>
    </section>
  );
}
