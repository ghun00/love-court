import Image from "next/image";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/logo_withText.svg"
      alt="러브 코트"
      width={215}
      height={42}
      priority
      className={`h-7 w-auto md:h-10 ${className ?? ""}`}
    />
  );
}
