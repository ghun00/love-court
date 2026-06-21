export const REQUEST_ANCHOR = "#request";

export const HOW_TO_USE_STEPS = [
  {
    id: 1,
    label: "01. 정보 입력",
    title: "촬영 정보를 남겨주세요",
    description: "촬영 날짜, 장소, 종목, 인원, 기타 특징을 간단히 입력해요",
    emoji: "/images/step-emoji-1.svg",
    emojiWidth: 31,
  },
  {
    id: 2,
    label: "02. 의뢰 전달",
    title: "작가님께 의뢰를 전달해요",
    description: "입력하신 촬영 정보를 바탕으로 조건에 맞는 작가님들께 의뢰를 전달합니다",
    emoji: "/images/step-emoji-2.svg",
    emojiWidth: 58,
  },
  {
    id: 3,
    label: "03. 견적 확인",
    title: "작가님들의 견적을 확인해요",
    description: "여러 작가님의 포트폴리오와 견적을 한곳에서 비교할 수 있어요",
    emoji: "/images/step-emoji-3.svg",
    emojiWidth: 39,
  },
  {
    id: 4,
    label: "04. 견적 선택",
    title: "원하는 작가님을 선택해요",
    description: "포트폴리오와 견적을 비교한 뒤 마음에 드는 작가님을 선택하세요",
    emoji: "/images/step-emoji-4.svg",
    emojiWidth: 32,
  },
  {
    id: 5,
    label: "05. 촬영 완료",
    title: "촬영 후 사진을 받아요",
    description: "촬영이 완료되면 결과물을 안전하게 전달받을 수 있어요",
    emoji: "/images/step-emoji-5.svg",
    emojiWidth: 42,
  },
] as const;

export const USE_CASES = [
  {
    title: "친구들과의 운동 모임",
    description: ["경기 및 운동 장면, 스틸컷까지", "자연스럽게 남길 수 있어요"],
    image: "/images/usecase-1.png",
    alt: "친구들과의 운동 모임 스포츠 스냅 촬영 일러스트",
  },
  {
    title: "테니스·배드민턴 모임",
    description: ["빠르게 움직이는 실내 스포츠의 순간도", "선명하게 기록해요"],
    image: "/images/usecase-2.png",
    alt: "테니스·배드민턴 모임 스포츠 스냅 촬영 일러스트",
  },
  {
    title: "동아리•동호회 이벤트",
    description: ["팀 분위기, 경기 장면, 단체 사진 등을", "한 번에 남길 수 있어요"],
    image: "/images/usecase-3.png",
    alt: "테니스 동호회 단체 촬영 일러스트",
  },
  {
    title: "브랜드·이벤트 행사",
    description: ["행사 현장과 참가자의 생생한", "순간을 기록할 수 있어요"],
    image: "/images/usecase-4.png",
    alt: "스포츠 이벤트 행사 촬영 일러스트",
  },
] as const;

export const TRUST_ITEMS = [
  {
    title: "안전 결제",
    description: "고객이 사진을 수령한 뒤 작가 정산이 진행돼요",
    image: "/images/trust-1.png",
    alt: "러브 코트 안전 결제 아이콘",
  },
  {
    title: "제공 정보 사전 안내",
    description: "촬영 전 원본과 보정본 제공 기준을 미리 안내해요",
    image: "/images/trust-2.png",
    alt: "제공 정보 사전 안내 아이콘",
  },
  {
    title: "무단 불참 보호",
    description: "작가 무단 불참 시 결제금 전액 환불 혹은 대체 촬영을 도와드려요",
    image: "/images/trust-3.png",
    alt: "무단 불참 보호 아이콘",
  },
  {
    title: "스포츠 전문 촬영",
    description: "단순 인물 스냅이 아니라 경기 장면, 단체컷, 자연스러운 순간까지 고려해요",
    image: "/images/trust-4.png",
    alt: "스포츠 전문 촬영 아이콘",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Q. 어떤 종목 촬영이 가능한가요?",
    answer:
      "현재는 테니스, 피클볼, 배드민턴, 러닝 이벤트, 동호회 경기 등 스포츠 활동을 중심으로 작가 매칭을 도와드리고 있습니다. 이외의 종목도 촬영 일정과 장소를 남겨주시면 가능 여부를 확인해드립니다.",
  },
  {
    question: "Q. 견적 요청은 무료인가요?",
    answer:
      "네. 촬영 정보를 남겨주시면 조건에 맞는 작가님들의 견적을 받아 전달해드립니다. 견적을 확인한 뒤 촬영 진행 여부를 결정하시면 됩니다.",
  },
  {
    question: "Q. 작가는 어떻게 선택하나요?",
    answer:
      "러브 코트가 촬영 일정, 장소, 종목, 인원, 예산을 바탕으로 가능한 작가님들의 견적을 받아드립니다. 고객님은 포트폴리오와 견적을 비교한 뒤 원하는 작가님을 직접 선택할 수 있습니다.",
  },
  {
    question: "Q. 촬영 비용은 어느 정도인가요?",
    answer:
      "촬영 비용은 종목, 지역, 촬영 시간, 인원, 제공 컷 수, 보정 여부에 따라 달라집니다. 촬영 정보를 남겨주시면 조건에 맞는 견적을 받아 안내드립니다.",
  },
  {
    question: "Q. 사진은 언제 받을 수 있나요?",
    answer:
      "사진 전달 일정은 작가님과 촬영 상품에 따라 달라질 수 있습니다. 보통 촬영 후 7일 이내 전달을 기준으로 하며, 최종 일정은 견적 단계에서 미리 안내드립니다.",
  },
  {
    question: "Q. 결제는 어떻게 진행되나요?",
    answer:
      "안전한 거래를 위해 러브 코트를 통해 결제가 진행됩니다. 고객님이 사진을 수령한 뒤 확인 절차를 거쳐 작가님 정산이 진행됩니다.",
  },
] as const;

export const HERO_BADGES = [
  { label: "안전 결제", icon: "shield" as const },
  { label: "무단 불참 전액 보상", icon: "handshake" as const },
  { label: "스포츠 스냅 전문", icon: "camera" as const },
] as const;
