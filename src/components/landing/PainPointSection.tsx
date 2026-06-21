import Image from "next/image";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";

export function PainPointSection() {
  return (
    <section
      aria-labelledby="pain-point-heading"
      className="bg-gray-5 px-5 py-12 md:px-8 md:py-[60px] lg:px-[120px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:gap-12">
        <ScrollReveal>
          <div className="flex flex-col gap-4 md:gap-6">
            <h2
              id="pain-point-heading"
              className="text-[28px] font-bold leading-[1.5] text-gray-black md:text-[40px] lg:text-[48px]"
            >
              좋아하는 운동의 순간은,
              <br />
              생각보다 쉽게 사라집니다.
            </h2>
            <p className="text-base leading-[1.5] text-gray-black md:text-xl lg:text-[28px]">
              좋은 코트를 예약하고, 좋아하는 운동복을 입고, 친구들과 즐겁게
              운동을 해도
              <br className="hidden md:block" />
              정작 남는 건 내가 없는 사진과 배경 사진, 흔들린 휴대폰 영상
              몇 개뿐일 때가 많습니다.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <StaggerItem>
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl blur-[2px]">
              <Image
                src="/images/pain-1.jpg"
                alt="스포츠 스냅 촬영 예시 — 테니스 코트에서 플레이 중인 장면"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 584px"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl blur-[2px]">
              <Image
                src="/images/pain-2.jpg"
                alt="스포츠 스냅 촬영 예시 — 운동 장면이 잘 담기지 않은 사진"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 584px"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
