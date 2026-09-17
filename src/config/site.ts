const phoneDisplay = "031-858-2277";

export const site = {
  // 정식 상호(Header 로고, Footer, 홈 h1 등)
  companyName: "대양특장 주식회사",
  // 축약형(브라우저 탭 제목, meta 설명, 각 페이지 타이틀 접미사 " | 대양특장" 등)
  shortName: "대양특장",
  formerName: "대양상사",
  phone: {
    display: phoneDisplay,
    href: `tel:${phoneDisplay.replace(/-/g, "")}`,
  },
  email: "daeyangsss@kakao.com",
  kakaoUrl: "https://pf.kakao.com/_bjkAX/chat",
  address: "경기도 양주시 남면 은남로 76-4",
  siteUrl: "https://www.dyic.kr",

  // 값이 정해지면 채운다. 빈 문자열이면 화면에 표시하지 않는다.
  representative: "",
  businessRegistrationNumber: "",
  fax: "",
  businessHours: "",

  // 검색엔진 소유 확인 코드. 값이 있을 때만 BaseLayout이 해당 meta 태그를 출력한다.
  naverSiteVerification: "4b3676167b6a52b0307bd2d0c03eaeb4cc787444",
  googleSiteVerification: "PrRkt1a59aCwUjGWy6xDeCBho2xJH33Ku6tQg5E2y7M",
};
