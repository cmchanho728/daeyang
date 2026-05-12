import type { CategoryData } from "./types";
import { baseUrl } from "./base";

export const pumpVacuum: CategoryData = {
    pageTitle: "분뇨차 펌프",
    pageDescription: "분뇨차용 진공 펌프 제품 라인업입니다. 규격에 맞는 제품 상담 및 견적 문의가 가능합니다.",

    products: [
      {
        id: "10l",
        name: "진공펌프 10L (10000)",
        img: `${baseUrl}products/pump/pump-vacuum-10l.jpg`,
        cardImg: `${baseUrl}products/pump/pump-vacuum-10l.jpg`,
        specImg: `${baseUrl}products/pump/pump-vacuum-10l-outer.jpg`,
        specs: {
          "체적 용량": "10L",
          "흡입 / 토출": "85mm / 75mm",
          "최대 회전수 (RPM)": "500",
          "음압 / 가압": "0.08 Kg/cm2 / 0.1 Kg/cm2",
          "재질": "FC200",
          "중량": "57Kg",
        },
      },
      {
        id: "8l",
        name: "진공펌프 8L (8000)",
        img: `${baseUrl}products/pump/pump-vacuum-8l.jpg`,
        cardImg: `${baseUrl}products/pump/pump-vacuum-8l.jpg`,
        specImg: `${baseUrl}products/pump/pump-vacuum-8l-outer.jpg`,
        specs: {
          "체적 용량": "8L",
          "흡입 / 토출": "75mm / 75mm",
          "최대 회전수 (RPM)": "500",
          "음압 / 가압": "0.08 Kg/cm2 / 0.1 Kg/cm2",
          "재질": "FC200",
          "중량": "57Kg",
        },
      },
      {
        id: "5l",
        name: "진공펌프 5L (6000)",
        img: `${baseUrl}products/vc/pump/5l-long.jpg`,
        cardImg: `${baseUrl}products/vc/pump/5l-long.jpg`,
        images: [
          {
            src: `${baseUrl}products/vc/pump/5l-long.jpg`,
            alt: "진공펌프 5L 장축 이미지",
          },
          {
            src: `${baseUrl}products/vc/pump/5l-cw.jpg`,
            alt: "진공펌프 5L 단축 정방향 이미지",
          },
          {
            src: `${baseUrl}products/vc/pump/5l-ccw.jpg`,
            alt: "진공펌프 5L 단축 역방향 이미지",
          },
        ],
        specImg: `${baseUrl}products/vc/pump/5l-long-outer.jpg`,
        drawings: [
          {
            src: `${baseUrl}products/vc/pump/5l-long-outer.jpg`,
            alt: "진공펌프 5L 장축 외관도",
          },
          {
            src: `${baseUrl}products/vc/pump/5l-cw-outer.jpg`,
            alt: "진공펌프 5L 단축 정방향 외관도",
          },
          {
            src: `${baseUrl}products/vc/pump/5l-ccw-outer.jpg`,
            alt: "진공펌프 5L 단축 역방향 외관도",
          },
        ],
        specs: {
          "체적 용량": "5L",
          "흡입 / 토출": "75mm / 75mm",
          "최대 회전수 (RPM)": "500",
          "음압 / 가압": "0.08 Kg/cm2 / 0.1 Kg/cm2",
          "재질": "FC200",
          "중량": "57Kg",
        },
      },
      {
        id: "3l",
        name: "진공펌프 3L (4000)",
        img: `${baseUrl}products/pump/pump-vacuum-3l.jpg`,
        cardImg: `${baseUrl}products/pump/pump-vacuum-3l.jpg`,
        specImg: `${baseUrl}products/pump/pump-vacuum-3l-outer.jpg`,
        specs: {
          "체적 용량": "3L",
          "흡입 / 토출": "64mm / 64mm",
          "최대 회전수 (RPM)": "500",
          "음압 / 가압": "0.08 Kg/cm2 / 0.1 Kg/cm2",
          "재질": "FC200",
          "중량": "57Kg",
        },
      },
    ],
};
