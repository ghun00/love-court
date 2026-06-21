import { FAQ_ITEMS } from "@/constants/landing";
import {
  absoluteUrl,
  LOGO_PATH,
  SERVICE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/constants/seo";

function stripQuestionPrefix(question: string): string {
  return question.replace(/^Q\.\s*/, "");
}

export function getMainStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: absoluteUrl(LOGO_PATH),
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: "스포츠 스냅 작가 견적 비교·매칭 서비스",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: "ko-KR",
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service`,
        name: "스포츠 스냅 작가 견적 비교·매칭",
        serviceType: "Sports photography matching service",
        provider: {
          "@id": `${SITE_URL}/#organization`,
        },
        areaServed: {
          "@type": "Country",
          name: "KR",
        },
        description: SERVICE_DESCRIPTION,
      },
    ],
  };
}

export function getFaqStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: stripQuestionPrefix(item.question),
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
