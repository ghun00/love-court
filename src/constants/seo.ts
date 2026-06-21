/** 사이트 URL — 도메인 확정 후 NEXT_PUBLIC_SITE_URL 환경변수 또는 이 값을 수정하세요 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://YOUR_DOMAIN.com";

/** Open Graph 대표 이미지 */
export const OG_IMAGE_PATH = "/og img.png";

export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 600;

/** Favicon */
export const FAVICON_PATH = "/favicon_love court.png";

/** Organization JSON-LD용 로고 URL */
export const LOGO_PATH = "/logo_withText.svg";

export const SITE_NAME = "러브 코트";

export const SEO_TITLE = "러브 코트 | 스포츠 스냅 작가 견적 비교·매칭";

export const SEO_DESCRIPTION =
  "테니스, 피클볼, 배드민턴, 동호회 이벤트까지. 촬영 일정과 장소만 남기면 스포츠 스냅 작가들의 견적을 받아서 직접 전달해드릴게요";

export const SEO_KEYWORDS = [
  "스포츠 스냅 작가",
  "스포츠 스냅 촬영",
  "테니스 스냅 촬영",
  "테니스 촬영 작가",
  "피클볼 스냅",
  "배드민턴 스냅",
  "동호회 촬영",
  "스포츠 이벤트 촬영",
  "스포츠 사진 작가 매칭",
  "스냅 작가 견적 비교",
] as const;

export const OG_TITLE = "운동하는 내 모습, 이제 제대로 남겨보세요 | 러브 코트";

export const OG_DESCRIPTION =
  "촬영 정보만 남기면 러브 코트가 스포츠 스냅 작가 견적을 받아드려요. 포트폴리오와 견적을 비교하고 원하는 작가를 직접 선택해보세요!";

export const TWITTER_DESCRIPTION =
  "테니스, 피클볼, 배드민턴, 동호회 이벤트까지. 스포츠 스냅 작가 견적을 받아 비교해보세요.";

export const OG_IMAGE_ALT = "러브 코트 스포츠 스냅 작가 매칭 서비스";

export const SERVICE_DESCRIPTION =
  "테니스, 피클볼, 배드민턴, 동호회 이벤트 등 스포츠 촬영 일정과 장소를 남기면 조건에 맞는 스포츠 스냅 작가 견적을 받아 비교할 수 있는 서비스입니다.";

export function absoluteUrl(path: string): string {
  return `${SITE_URL.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
}
