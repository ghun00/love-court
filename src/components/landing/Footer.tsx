import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-4 px-5 py-12 md:px-8 md:py-[60px] lg:px-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
        <div className="flex flex-col gap-3">
          <p className="text-base font-medium text-gray1">러브 코트</p>
          <p className="text-sm leading-[1.5] text-gray2">
            프라이데이랩 | 대표자 : 한지훈 | 사업자 등록 번호 :
            481-11-03110
          </p>
          <p className="text-sm leading-[1.5] text-gray2">
            러브 코트는 고객과 촬영 작가를 연결하는 통신판매중개
            서비스입니다. 촬영 서비스의 진행 및 결과물 제공에 대한
            책임은 해당 작가에게 있으며, 결제 금액은 고객이 촬영
            결과물을 수령한 이후 작가에게 정산되는 안전 결제 방식으로
            운영됩니다. 작가의 무단 불참 등 고객 귀책이 아닌 사유로
            촬영이 진행되지 않은 경우에는 러브 코트 정책에 따라 결제
            금액 전액 환불 또는 대체 촬영을 지원합니다.
          </p>
        </div>

        <nav
          className="flex flex-wrap gap-4 text-base font-medium text-gray1"
          aria-label="법적 고지"
        >
          <Link
            href="#"
            className="transition-colors hover:text-gray-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            이용 약관
          </Link>
          <Link
            href="#"
            className="transition-colors hover:text-gray-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            개인정보 처리방침
          </Link>
        </nav>
      </div>
    </footer>
  );
}
