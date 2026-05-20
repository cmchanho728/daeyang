import type { CategoryData } from "./types";
import { baseUrl } from "./base";

export const etcHose: CategoryData = {
  pageTitle: "호스",
  pageDescription: "유조차 및 분뇨차 라인 연결용 호스/피팅 부품입니다.",
  products: [
    {
      id: "hose-c",
      name: "청고압호스 C형",
      img: `${baseUrl}products/etc/hose/hose.jpg`,
      cardImg: `${baseUrl}products/etc/hose/hose.jpg`,
      specImg: `${baseUrl}products/etc/hose/hose-spec.jpg`,
      specs: {
        "규격": "2인치 || 2.5인치 || 3인치",
        "비고": "한미호스: 세부 규격 외관도 참조",
      },
    },
    {
      id: "hose-cf",
      name: "청고압호스 CF형",
      img: `${baseUrl}products/etc/hose/hose-cf.jpg`,
      cardImg: `${baseUrl}products/etc/hose/hose-cf.jpg`,
      specImg: `${baseUrl}products/etc/hose/hose-spec.jpg`,
      specs: {
        "규격": "2인치 || 2.5인치 || 3인치",
        "비고": "한미호스: 세부 규격 외관도 참조",
      },
    },
  ],
};

export default etcHose;
