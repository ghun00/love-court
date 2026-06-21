import Image from "next/image";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { USE_CASES } from "@/constants/landing";

export function UseCasesSection() {
  return (
    <section
      aria-labelledby="use-cases-heading"
      className="bg-gray-5 px-5 py-12 md:px-8 md:py-[60px] lg:px-[120px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:gap-12">
        <ScrollReveal>
          <h2
            id="use-cases-heading"
            className="text-[28px] font-bold leading-[1.5] text-gray-black md:text-[40px] lg:text-[48px]"
          >
            러브 코트는 그 순간을 제대로 남길 수 있도록
            <br className="hidden md:block" />
            스포츠 스냅 작가를 연결합니다.
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {USE_CASES.map((item) => (
            <StaggerItem key={item.title}>
              <article className="relative flex h-[280px] flex-col gap-3 overflow-hidden rounded-xl bg-gray-6 p-6 shadow-card md:h-[300px]">
                <h3 className="text-lg font-bold leading-[1.5] text-gray-black md:text-2xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-[1.5] text-gray1 md:text-base">
                  {item.description.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <div className="absolute bottom-0 right-3 size-32 md:right-3 md:size-40">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-contain object-bottom"
                    sizes="160px"
                  />
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
