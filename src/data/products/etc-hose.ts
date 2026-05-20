import type { CategoryData } from "./types";
import { baseUrl } from "./base";

export const etcHose: CategoryData = {
  pageTitle: "호스",
  pageDescription: "유조차 및 분뇨차 라인 연결용 호스/피팅 부품입니다.",
  products: [
    {
      id: "hose",
      name: "호스",
      img: `${baseUrl}products-tltruck.jpg`,
      cardImg: `${baseUrl}products-tltruck.jpg`,
      specImg: undefined,
      specs: {
        "규격": "확인 필요",
        "형식": "확인 필요",
        "재질": "확인 필요",
        "적용라인": "확인 필요",
        "연결방식": "확인 필요",
        "구성품": "확인 필요",
        "비고": "현장 조건에 따라 상이",
      },
    },
  ],
};

export default etcHose;
