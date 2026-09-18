import type { CategoryData } from "./types";
import { baseUrl } from "./base";

export const valveVacuum: CategoryData = {
    pageTitle: "분뇨차 밸브",
    pageDescription: "체크/차단/안전 밸브 등 분뇨차용 밸브 제품 라인업입니다.",

    products: [
      {
        id: "shutoff",
        name: "사방밸브",
        img: `${baseUrl}products/vc/valve/4way-65a.jpg`,
        images: [
          {
            src: `${baseUrl}products/vc/valve/4way-65a.jpg`,
            alt: "분뇨차용 65A 사방밸브",
          },
          {
            src: `${baseUrl}products/vc/valve/4way-50a.jpg`,
            alt: "분뇨차용 50A 사방밸브 외관도",
          },
        ],
        specImg: `${baseUrl}products/vc/valve/4way-65a-outer.jpg`,
        drawings: [
          {
            src: `${baseUrl}products/vc/valve/4way-65a-outer.jpg`,
            alt: "분뇨차용 65A 사방밸브 외관도",
          },
          {
            src: `${baseUrl}products/vc/valve/4way-50a-outer.jpg`,
            alt: "분뇨차용 50A 사방밸브 내부도",
          }
        ],
        specs: {
          "모델명": "분뇨차용 사방밸브",
          "규격": "65A  ||  50A  ||  80A 별도 문의",
          "형식": "65A: 원형, 사각  ||  50A: 사각",
          "재질": "65A: SUS, FC  ||  50A: FC",
          "무게": "65A: 16.9kg  ||  50A: 9.5kg",
          "조작방식": "수동 레버",
          "비고": "탱크 내부 공기를 흡입, 배출, 대기압 모드로 조작합니다.",
        },
      },
      {
        id: "vc2way",
        name: "이방밸브",
        img: `${baseUrl}products/vc/valve/2way-80.jpg`,
        images: [
          {
            src: `${baseUrl}products/vc/valve/2way-65.jpg`,
            alt: "분뇨차용 65A 이방밸브",
          },
          {
            src: `${baseUrl}products/vc/valve/2way-80.jpg`,
            alt: "분뇨차용 80A 이방밸브",
          },
        ],
        specImg: `${baseUrl}products/vc/valve/2way-80-outer.jpg`,
        drawings: [
          {
            src: `${baseUrl}products/vc/valve/2way-65-outer.jpg`,
            alt: "분뇨차용 65A 이방밸브 외관도",
          },
          {
            src: `${baseUrl}products/vc/valve/2way-80-outer.jpg`,
            alt: "분뇨차용 80A 이방밸브 외관도",
          }
        ],
        specs: {
          "모델명": "분뇨차용 이방밸브",
          "규격": "80A  ||  65A",
          "형식": "80A: 커플링, 나사  ||  65A: 커플링, 호수꽂이",
          "재질": "80A: FC (볼: SUS)  ||  65A: FC (볼: SUS)",
          "무게": "80A: 9.2kg  ||  65A: 9.1kg",
          "조작방식": "수동 레버",
          "비고": "탱크 내부를 외부와 연결 및 차단 합니다. 스텐레스 볼로 마모 및 부식을 방지하였습니다.",
        },
      },
      {
        id: "check",
        name: "체크밸브",
        img: `${baseUrl}products/vc/valve/check.jpg`,
        specs: {
          "모델명": "분뇨차용 체크밸브",
          "규격": "80M  ||  50M",
          "형식": "80M: 인라인 스프링  ||  50M: 인라인 스프링",
          "재질": "80M: FC  ||  50M: FC",
          "무게": "80A: 4.7kg  ||  50A: 2.7kg",
          "비고": "펌프에 의해 발생한 기체의 압력 차이와 스프링의 힘을 이용해 자동으로 작동 공기의 역류를 방지합니다.",
        },
      },
      {
        id: "safety",
        name: "안전밸브",
        img: `${baseUrl}products/vc/valve/safety.jpg`,
        specImg: `${baseUrl}products/vc/valve/safety-outer.jpg`,
        specs: {
          "모델명": "분뇨차용 안전밸브",
          "규격": "",
          "형식": "",
          "재질": "FC",
          "무게": "문의",
          "비고": "탱크의 압력을 1.1kgf/cm² 이하로 유지시켜줍니다.",
        },
      },
    ],
};
