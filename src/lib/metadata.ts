import type { Metadata } from "next";
import {
  FAVICON_PATH,
  OG_DESCRIPTION,
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_PATH,
  OG_IMAGE_WIDTH,
  OG_TITLE,
  SEO_DESCRIPTION,
  SEO_KEYWORDS,
  SEO_TITLE,
  SITE_NAME,
  SITE_URL,
  TWITTER_DESCRIPTION,
} from "@/constants/seo";

export function createSiteMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    keywords: [...SEO_KEYWORDS],
    alternates: {
      canonical: "/",
    },
    icons: {
      icon: [{ url: FAVICON_PATH, type: "image/png" }],
      apple: [{ url: FAVICON_PATH, type: "image/png" }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: OG_TITLE,
      description: OG_DESCRIPTION,
      url: "/",
      siteName: SITE_NAME,
      locale: "ko_KR",
      type: "website",
      images: [
        {
          url: OG_IMAGE_PATH,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: OG_IMAGE_ALT,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: OG_TITLE,
      description: TWITTER_DESCRIPTION,
      images: [OG_IMAGE_PATH],
    },
    other: {
      "og:locale": "ko_KR",
    },
  };
}
