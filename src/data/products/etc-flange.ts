import type { CategoryData } from "./types";
import { baseUrl } from "./base";

export const etcFlange: CategoryData = {
    pageTitle: "플랜지",
    pageDescription: "배관 연결용 플랜지/가스켓입니다.",

    products: [
      {
        id: "flange-circle",
        name: "원형 플랜지",
        img: `${baseUrl}products/etc/flange/flange-circle.jpg`,
        cardImg: `${baseUrl}products/etc/flange/flange-circle.jpg`,
        specImg: `${baseUrl}products/etc/flange/flange-circle-spec.jpg`,
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
        id: "flange-rect",
        name: "사각 플랜지",
        img: `${baseUrl}products/etc/flange/flange-rect.jpg`,
        cardImg: `${baseUrl}products/etc/flange/flange-rect.jpg`,
        specImg: `${baseUrl}products/etc/flange/flange-rect-spec.jpg`,
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
        id: "gasket-circle",
        name: "원형 가스켓",
        img: `${baseUrl}products/etc/flange/gasket-circle.jpg`,
        cardImg: `${baseUrl}products/etc/flange/gasket-circle.jpg`,
        specImg: `${baseUrl}products/etc/flange/gasket-circle-spec.jpg`,
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
        id: "gasket-rect",
        name: "사각 가스켓",
        img: `${baseUrl}products/etc/flange/gasket-rect.jpg`,
        cardImg: `${baseUrl}products/etc/flange/gasket-rect.jpg`,
        specImg: `${baseUrl}products/etc/flange/gasket-rect-spec.jpg`,
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
