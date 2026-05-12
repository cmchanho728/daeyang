import type { CategoryData } from "./types";
import { baseUrl } from "./base";

export const etcFlange: CategoryData = {
    pageTitle: "플랜지",
    pageDescription: "배관 연결용 플랜지입니다.",

    products: [
      {
        id: "nozzle",
        name: "노즐/미터",
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
      {
        id: "hose",
        name: "호스/피팅",
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
      {
        id: "coupler",
        name: "조인트/커플러",
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
