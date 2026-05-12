import type { CategoryData } from "./types";
import { baseUrl } from "./base";

export const pumpFuel: CategoryData = {
    pageTitle: "유조차 펌프",
    pageDescription: "유류 이송 라인용 유조차 펌프 제품 라인업입니다.",

    products: [
      {
        id: "200l",
        name: "200L 펌프",
        img: `${baseUrl}products/tl/pump/200.jpg`,
        cardImg: `${baseUrl}products/tl/pump/200.jpg`,
        specImg: `${baseUrl}products/tl/pump/200-outer.jpg`,
        specs: {
          "용량": "200L/min",
          "흡입 / 토출": "50mm / 50mm",
          "최대 회전수 (RPM)": "500 RPM",
          "압력": "3Kg/cm2",
          "재질": "FC200",
          "중량": "20Kg",
        },
      },
      {
        id: "300l",
        name: "300L 펌프",
        img: `${baseUrl}products/tl/pump/300.jpg`,
        cardImg: `${baseUrl}products/tl/pump/300.jpg`,
        specImg: `${baseUrl}products/tl/pump/300-outer.jpg`,
        specs: {
          "용량": "300L/min",
          "흡입 / 토출": "64mm / 64mm",
          "최대 회전수 (RPM)": "500 RPM",
          "압력": "5Kg/cm2",
          "재질": "FC200",
          "중량": "30Kg",
        },
      },
      {
        id: "300l-bypass",
        name: "300L 내장형 펌프",
        img: `${baseUrl}products/tl/pump/300-bypass.jpg`,
        cardImg: `${baseUrl}products/tl/pump/300-bypass.jpg`,
        specImg: `${baseUrl}products/tl/pump/300-bypass-outer.jpg`,
        specs: {
          "용량": "300L/min",
          "흡입 / 토출": "64mm / 64mm",
          "최대 회전수 (RPM)": "500 RPM",
          "압력": "5Kg/cm2",
          "재질": "FC200",
          "중량": "30Kg",
        },
      },
      {
        id: "600l",
        name: "600L 펌프",
        img: `${baseUrl}products/tl/pump/600.jpg`,
        cardImg: `${baseUrl}products/tl/pump/600.jpg`,
        specImg: `${baseUrl}products/tl/pump/600-outer.jpg`,
        specs: {
          "용량": "600L/min",
          "흡입 / 토출": "85mm / 85mm",
          "최대 회전수 (RPM)": "500 RPM",
          "압력": "6Kg/cm2",
          "재질": "FC200 / SUS304",
          "중량": "50Kg",
        },
      },
      {
        id: "1000l",
        name: "1000L 펌프",
        img: `${baseUrl}products/tl/pump/1000.jpg`,
        cardImg: `${baseUrl}products/tl/pump/1000.jpg`,
        specImg: `${baseUrl}products/tl/pump/1000-outer.jpg`,
        specs: {
          "용량": "1000L/min",
          "흡입 / 토출": "85mm / 85mm",
          "최대 회전수 (RPM)": "500 RPM",
          "압력": "7Kg/cm2",
          "재질": "FC200 / SUS304",
          "중량": "100Kg",
        },
      },
    ],
};
