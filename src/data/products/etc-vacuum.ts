import type { CategoryData } from "./types";
import { baseUrl } from "./base";

export const etcVacuum: CategoryData = {
    pageTitle: "분뇨차 기타 부품",
    pageDescription: "호스/피팅/게이지/조인트 등 분뇨차 기타 부품 라인업입니다.",

    products: [
      {
        id: "manhole",
        name: "메인맨홀",
        img: `${baseUrl}products/vc/etc/manhole.jpg`,
        cardImg: `${baseUrl}products/vc/etc/manhole.jpg`,
        images: [
          {
            src: `${baseUrl}products/vc/etc/manhole.jpg`,
            alt: "분뇨차 메인맨홀",
          },
          {
            src: `${baseUrl}products/vc/etc/manhole-sus.jpg`,
            alt: "분뇨차 메인맨홀 SUS",
          },
        ],
        specImg: `${baseUrl}products/vc/etc/manhole-outer.jpg`,
        drawings: [
          {
            src: `${baseUrl}products/vc/etc/manhole-outer.jpg`,
            alt: "분뇨차 메인맨홀 외관도",
          },
          {
            src: `${baseUrl}products/vc/etc/manhole-outer.jpg`,
            alt: "분뇨차 메인맨홀 외관도",
          },
        ],
        specs: {
          "모델명": "분뇨차 용 메인맨홀",
          "규격": "Φ500",
          "형식": "플로팅 밸브",
          "재질": "SUS, FC",
          "무게": "23.5Kg",
          "부품별도판매": "볼, 볼집, 우끼밸브, 볼시트, 패킹류",
          "비고": "탱크 내부의 액체가 오일 순환 배관 라인으로 유입되는 것을 차단합니다.",
        },
      },
      {
        id: "oiltank",
        name: "오일통",
        img: `${baseUrl}products/vc/etc/oiltank-65a.jpg`,
        cardImg: `${baseUrl}products/vc/etc/oiltank-65a.jpg`,
        images: [
          {
            src: `${baseUrl}products/vc/etc/oiltank-65a.jpg`,
            alt: "분뇨차 오일통 65A",
          },
          {
            src: `${baseUrl}products/vc/etc/oiltank-50a.jpg`,
            alt: "분뇨차 오일통 50A",
          },
          {
            src: `${baseUrl}products/vc/etc/oiltank-65a-sus.jpg`,
            alt: "분뇨차 오일통 SUS 65A",
          },
        ],
        specImg: `${baseUrl}products/vc/etc/oiltank-65a-outer.jpg`,
        drawings: [
          {
            src: `${baseUrl}products/vc/etc/oiltank-65a-outer.jpg`,
            alt: "분뇨차 오일통 65A 외관도",
          },
          {
            src: `${baseUrl}products/vc/etc/oiltank-50a-outer.jpg`,
            alt: "분뇨차 오일통 50A 외관도",
          },
          {
            src: `${baseUrl}products/vc/etc/oiltank-65a-outer.jpg`,
            alt: "분뇨차 오일통 65A 외관도",
          },
        ],
        specs: {
          "모델명": "분뇨차 용 오일통",
          "규격": "65A  ||  50A",
          "형식": "",
          "재질": "SUS, FC",
          "무게": "Kg",
          "비고": "펌프에 공급하는 적정 오일량을 저장하는 탱크입니다.",
        },
      },
      {
        id: "airclean",
        name: "에어클리너",
        img: `${baseUrl}products/vc/etc/airclean.jpg`,
        cardImg: `${baseUrl}products/vc/etc/airclean.jpg`,
        images: [
          {
            src: `${baseUrl}products/vc/etc/airclean-65a.jpg`,
            alt: "분뇨차 에어클리너 65A",
          },
          {
            src: `${baseUrl}products/vc/etc/airclean-50a.jpg`,
            alt: "분뇨차 에어클리너 50A",
          },
          {
            src: `${baseUrl}products/vc/etc/airclean-65a-sus.jpg`,
            alt: "분뇨차 에어클리너 SUS 65A",
          },
        ],
        specImg: `${baseUrl}products/vc/etc/airclean.jpg`,
        drawings: [
          {
            src: `${baseUrl}products/vc/etc/airclean-65a-outer.jpg`,
            alt: "분뇨차 에어클리너 65A 외관도",
          },
          {
            src: `${baseUrl}products/vc/etc/airclean-50a-outer.jpg`,
            alt: "분뇨차 에어클리너 50A 외관도",
          },
          {
            src: `${baseUrl}products/vc/etc/airclean-65a-outer.jpg`,
            alt: "분뇨차 에어클리너 65A 외관도",
          },
        ],
        specs: {
          "모델명": "분뇨차 용 에어클리너",
          "규격": "65A ||  50A",
          "형식": "",
          "재질": "SUS, FC",
          "무게": "Kg",
          "비고": "탱크 내부의 액체가 넘는 경우나 펌프 작동 오일이 넘는 경우 육안으로 확인하는 장치입니다.",
        },
      },
      {
        id: "oilsep",
        name: "오일여과기",
        img: `${baseUrl}products/vc/etc/oilfilter-65a.jpg`,
        cardImg: `${baseUrl}products/vc/etc/oilfilter-65a.jpg`,
        images: [
          {
            src: `${baseUrl}products/vc/etc/oilfilter-65a.jpg`,
            alt: "분뇨차 오일여과기 65A",
          },
          {
            src: `${baseUrl}products/vc/etc/oilfilter-50a.jpg`,
            alt: "분뇨차 오일여과기 50A",
          },
          {
            src: `${baseUrl}products/vc/etc/oilfilter-65a-sus.jpg`,
            alt: "분뇨차 오일여과기 SUS 65A",
          }
        ],
        specImg: `${baseUrl}products/vc/etc/oilfilter-65a-outer.jpg`,
        drawings: [
          {
            src: `${baseUrl}products/vc/etc/oilfilter-65a-outer.jpg`,
            alt: "분뇨차 오일여과기 65A 외관도",
          },
          {
            src: `${baseUrl}products/vc/etc/oilfilter-50a-outer.jpg`,
            alt: "분뇨차 오일여과기 50A 외관도",
          },
          {
            src: `${baseUrl}products/vc/etc/oilfilter-65a-outer.jpg`,
            alt: "분뇨차 오일여과기 65A 외관도",
          },
        ],
        specs: {
          "모델명": "분뇨차 용 오일여과기",
          "규격": "65A  ||  50A",
          "형식": "",
          "재질": "SUS, FC",
          "무게": "Kg",
          "비고": "오일 순환 펌프에서 나온 공기와 오일을 분리해서 오일만 오일통을 보내줍니다.",
        },
      },
      {
        id: "deodor",
        name: "탈취기",
        img: `${baseUrl}products/vc/etc/deodorizer.jpg`,
        cardImg: `${baseUrl}products/vc/etc/deodorizer.jpg`,
        specImg: `${baseUrl}products/vc/etc/deodorizer-outer.jpg`,
        specs: {
          "모델명": "분뇨차 용 탈취기",
          "규격": "",
          "형식": "",
          "재질": "SUS",
          "무게": "Kg",
          "비고": "흡입 시 탱크 내부의 냄새를 제거합니다.",
        },
      },
      {
        id: "backmanhole",
        name: "뒷맨홀",
        img: `${baseUrl}products/vc/etc/backmanhole.jpg`,
        cardImg: `${baseUrl}products/vc/etc/backmanhole.jpg`,
        specImg: `${baseUrl}products/vc/etc/backmanhole-outer.jpg`,
        specs: {
          "모델명": "분뇨차 용 뒷맨홀",
          "규격": "Φ500",
          "형식": "맨홀",
          "재질": "FC",
          "무게": "Kg",          
          "비고": "탱크 내부 수리 및 내부 검사를 위한 맨홀입니다.",
        },
      },
    ],
};
