import type { CategoryData } from "./types";
import { baseUrl } from "./base";

export const etcFuel: CategoryData = {
    pageTitle: "유조차 기타 부품",
    pageDescription: "스트레이너/원터치 맨홀/보텀핸들 등 유조차 기타 부품 라인업입니다.",

    products: [
      {
        id: "strainer",
        name: "스트레이너",
        img: `${baseUrl}products/tl/etc/strainer-80a.jpg`,
        images: [
          {
            src: `${baseUrl}products/tl/etc/strainer-80a.jpg`,
            alt: "유조차 스트레이너 80A",
          },
          {
            src: `${baseUrl}products/tl/etc/strainer-65a.jpg`,
            alt: "유조차 스트레이너 65A",
          },
          {
            src: `${baseUrl}products/tl/etc/strainer-50a.jpg`,
            alt: "유조차 스트레이너 50A",
          },
        ],
        specs: {
          "규격": "80A  ||  65A  ||  50A",
          "형식": "문의",
          "재질": "문의",
          "적용라인": "문의",
          "연결방식": "문의",
          "구성품": "문의",
          "비고": "문의",
        },
      },
      {
        id: "onetouch-manhole",
        name: "원터치 맨홀",
        img: `${baseUrl}products/tl/etc/onetouch-manhole.jpg`,
        specs: {
          "규격": "문의",
          "형식": "문의",
          "재질": "문의",
          "적용라인": "문의",
          "연결방식": "문의",
          "구성품": "문의",
          "비고": "문의",
        },
      },
      {
        id: "bottom-handle",
        name: "보텀핸들",
        img: `${baseUrl}products/tl/etc/bottom-handle.jpg`,
        specs: {
          "규격": "문의",
          "형식": "문의",
          "재질": "문의",
          "적용라인": "문의",
          "연결방식": "문의",
          "구성품": "문의",
          "비고": "문의",
        },
      },
      {
        id: "cable-lever",
        name: "케이블레버",
        img: `${baseUrl}products/tl/etc/cable-lever.jpg`,
        specs: {
          "규격": "문의",
          "형식": "문의",
          "재질": "문의",
          "적용라인": "문의",
          "연결방식": "문의",
          "구성품": "문의",
          "비고": "문의",
        },
      },
      {
        id: "las-coupling",
        name: "LAS 커플링",
        img: `${baseUrl}products/tl/etc/las-coupling.jpg`,
        specs: {
          "규격": "문의",
          "형식": "문의",
          "재질": "문의",
          "적용라인": "문의",
          "연결방식": "문의",
          "구성품": "문의",
          "비고": "문의",
        },
      },
    ],
};
