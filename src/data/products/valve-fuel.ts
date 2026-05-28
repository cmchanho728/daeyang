import type { CategoryData } from "./types";
import { baseUrl } from "./base";

export const valveFuel: CategoryData = {
    pageTitle: "유조차 밸브",
    pageDescription: "차단/체크/안전 밸브 등 유조차 밸브 제품 라인업입니다.",

    products: [
      {
        id: "ball",
        name: "사방밸브",
        img: `${baseUrl}products/tl/valve/4way-80.jpg`,
        cardImg: `${baseUrl}products/tl/valve/4way-80.jpg`,
        images: [
          {
            src: `${baseUrl}products/tl/valve/4way-50.jpg`,
            alt: "사방밸브 50A",
          },          
          {
            src: `${baseUrl}products/tl/valve/4way-65.jpg`,
            alt: "사방밸브 65A",
          },          
          {
            src: `${baseUrl}products/tl/valve/4way-80.jpg`,
            alt: "사방밸브 80A",
          },
        ],
        specImg: `${baseUrl}products/tl/valve/4way-outer.jpg`,
        drawings: [
          {
            src: `${baseUrl}products/tl/valve/4way-50-outer.jpg`,
            alt: "사방밸브 50A 외관도",
          },
          {
            src: `${baseUrl}products/tl/valve/4way-65-outer.jpg`,
            alt: "사방밸브 65A 외관도",
          },
          {
            src: `${baseUrl}products/tl/valve/4way-80-outer.jpg`,
            alt: "사방밸브 80A 외관도",
          },
        ],        
        specs: {
          "모델명": "유뇨차 용 사방밸브",
          "규격": "80A  ||  65A  ||  50A",
          "형식": "80A: 원형  ||  65A: 원형  ||  50A: 사각",
          "재질": "80A: SUS, FC  ||  65A: SUS, FC  ||  50A: FC",
          "무게": "80A: 16.6Kg  ||  65A: 16Kg  ||  50A: 9.5Kg",
          "조작방식": "수동 레버",
          "비고": "유체를 흡입, 배출, 정지, 중력 모드로 조작합니다.",
        },
      },
      {
        id: "check",
        name: "이방밸브",
        img: `${baseUrl}products/tl/valve/2way-80.jpg`,
        cardImg: `${baseUrl}products/tl/valve/2way-80.jpg`,
        specImg: `${baseUrl}products/tl/valve/2way-80-outer.jpg`,
        specs: {
          "모델명": "유조차 용 이방밸브",
          "규격": "80A  ||  55A",
          "형식": "80A: 볼밸브  ||  50A: 볼밸브",
          "재질": "80A: SUS, FC  ||  50A: FC",
          "무게": "80A: 8.6Kg  ||  50A: 7.5Kg",
          "조작방식": "수동 레버",
          "비고": "탱크 내부와 외부를 연결 및 차단 합니다.",
        },
      },
      {
        id: "shutoff",
        name: "바이페스밸브",
        img: `${baseUrl}products/tl/valve/bypass.jpg`,
        cardImg: `${baseUrl}products/tl/valve/bypass.jpg`,
        specImg: `${baseUrl}products/tl/valve/bypass-outer.jpg`,
        specs: {
          "모델명": "유조차 용 안전밸브",
          "규격": "65A",
          "형식": "인라인 스프링 밸브",
          "재질": "SUS, FC",
          "무게": "6.5Kg",
          "작동압력": "2~2.5Kgf/cm2",
          "비고": "배관 내부가 일정 압력을 초과하지 않도록 압력을 유지시킵니다.",
        },
      },
      {
        id: "bottom",
        name: "보톰밸브",
        img: `${baseUrl}products/tl/valve/bottom.jpg`,
        cardImg: `${baseUrl}products/tl/valve/bottom.jpg`,
        specImg: `${baseUrl}products/tl/valve/bottom-outer.jpg`,
        specs: {
          "모델명": "유조차 용 보톰밸브",
          "규격": "80A",
          "형식": "",
          "재질": "SUS, FC",
          "무게": "Kg",          
          "비고": "탱크 내부와 외부의 물질을 흡입, 배출 및 차단합니다.",
        },
      },
      {
        id: "lever",
        name: "레버식 보톰밸브",
        img: `${baseUrl}products/tl/valve/lever.jpg`,
        cardImg: `${baseUrl}products/tl/valve/lever.jpg`,
        specImg: `${baseUrl}products/tl/valve/lever-outer.jpg`,
        specs: {
          "모델명": "유조차 용 레버식 보톰밸브",
          "규격": "50A",
          "형식": "",
          "재질": "FC",
          "무게": "Kg",          
          "비고": "탱크 밑면에 부착하여 와이어로 연결하여 레버로 개폐 작동합니다.",
        },
      },
      {
        id: "main",
        name: "메인밸브",
        img: `${baseUrl}products/tl/valve/main.jpg`,
        cardImg: `${baseUrl}products/tl/valve/main.jpg`,
        specImg: `${baseUrl}products/tl/valve/main-outer.jpg`,
        specs: {
          "모델명": "유조차 용 메인밸브",
          "규격": "80A",
          "형식": "",
          "재질": "SUS, FC",
          "무게": "Kg",          
          "비고": "탱크 내부, 외부 물질을 흡입, 배출 및 차단합니다.",
        },
      },
      {
        id: "airvent",
        name: "에어벤트(에어누끼)",
        img: `${baseUrl}products/tl/valve/airvent.jpg`,
        cardImg: `${baseUrl}products/tl/valve/airvent.jpg`,
        specImg: `${baseUrl}products/tl/valve/airvent-outer.jpg`,
        specs: {
          "모델명": "유조차 용 에어벤트(에어누끼)",
          "규격": "",
          "형식": "인라인 스프링 밸브",
          "재질": "SUS, AL",
          "무게": "Kg",
          "작동압력": "0.2Kgf/cm2",
          "비고": "탱크 내부가 일정 압력을 초과하지 않도록 압력을 유지시킵니다.",
        },
      },
    ],
};
