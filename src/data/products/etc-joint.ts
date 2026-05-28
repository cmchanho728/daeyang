import type { CategoryData } from "./types";
import { baseUrl } from "./base";

export const etcJoint: CategoryData = {
    pageTitle: "조인트",
    pageDescription: "동력전달용 등속조인트/일반조인트입니다.",

    products: [
      {
        id: "joint-short",
        name: "등속조인트 (숏)",
        img: `${baseUrl}products/etc/joint/joint-short.jpg`,
        cardImg: `${baseUrl}products/etc/joint/joint-short.jpg`,
        specImg: undefined,
        specs: {
          "길이": "78mm ~ 105mm",
          "형식- 현대(기본)": "59mm x 46mm",
          "비고": "차의 미션과 펌프의 동력 전달용 등속 조인트 입니다.",
        },
      },
      {
        id: "joint-long",
        name: "등속조인트 (롱)",
        img: `${baseUrl}products/etc/joint/joint-long.jpg`,
        cardImg: `${baseUrl}products/etc/joint/joint-long.jpg`,
        specImg: undefined,
        specs: {
          "길이": "120mm 이상",
          "형식- 현대(기본)": "59mm x 46mm",
          "형식- 대우신형": "53mm x 53mm, 추가 플렌지 필요",
          "형식- 대우구형": "60mm x 35mm, 추가 플렌지 필요",
          "형식- 볼보": "61mm x 51mm, 추가 플렌지 필요",
          "비고": "차의 미션과 펌프의 동력 전달용 등속 조인트 입니다.",
        },
      },
      {
        id: "joint",
        name: "일반조인트",
        img: `${baseUrl}products/etc/joint/joint.jpg`,
        cardImg: `${baseUrl}products/etc/joint/joint.jpg`,
        specImg: undefined,
        specs: {
          "길이": "300mm 이상",
          "형식- 현대(기본)": "59mm x 46mm",
          "형식- 그 외": "문의 필요",
          "비고": "차의 미션과 펌프의 동력 전달용 등속 조인트 입니다.",
        },
      },
    ],
};
