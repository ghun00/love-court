import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { PainPointSection } from "@/components/landing/PainPointSection";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { HowToUseSection } from "@/components/landing/HowToUseSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { Footer } from "@/components/landing/Footer";
import { StructuredData } from "@/components/seo/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <HeroSection />
        <PainPointSection />
        <UseCasesSection />
        <HowToUseSection />
        <TrustSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
