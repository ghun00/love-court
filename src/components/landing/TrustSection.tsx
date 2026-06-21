import Image from "next/image";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { TRUST_ITEMS } from "@/constants/landing";

export function TrustSection() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="bg-gray-5 px-5 py-12 md:px-8 md:py-[60px] lg:px-[120px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 md:gap-12">
        <ScrollReveal>
          <h2
            id="trust-heading"
            className="text-center text-[28px] font-bold leading-[1.5] text-gray-black md:text-[40px] lg:text-[48px]"
          >
            처음 의뢰해도 불안하지 않도록,
            <br />
            거래는 러브 코트가 안전하게 관리해요.
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map((item) => (
            <StaggerItem key={item.title}>
              <article className="flex flex-col gap-3 overflow-hidden rounded-xl bg-trust-gradient p-6 shadow-card">
                <div className="flex h-[160px] items-center justify-center overflow-hidden rounded-xl md:h-[200px]">
                  <div className="relative size-32 md:size-40">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-contain"
                      sizes="160px"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold leading-[1.5] text-gray-6 md:text-2xl">
                  {item.title}
                </h3>
                <p className="text-sm font-medium leading-[1.5] text-gray-6 md:text-base">
                  {item.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
