import type { CategoryData } from "./types";
import { baseUrl } from "./base";

export const etcCoupling: CategoryData = {
    pageTitle: "커플링",
    pageDescription: "배관 연결용 커플링입니다.",

    products: [
      {
        id: "ctype",
        name: "커플링 C형",
        img: `${baseUrl}products/etc/coupling/coupling-c.jpg`,
        cardImg: `${baseUrl}products/etc/coupling/coupling-c.jpg`,
        specImg: undefined,
        specs: {
          "규격": "2인치 || 2.5인치 || 3인치",
          "형식": "C타입 (암)",
          "재질": "AL/SUS",
          "비고": "E타입과 연결 가능한 호스용 커플링입니다.",
        },
      },
      {
        id: "etype",
        name: "커플링 E형",
        img: `${baseUrl}products/etc/coupling/coupling-e.jpg`,
        cardImg: `${baseUrl}products/etc/coupling/coupling-e.jpg`,
        specImg: undefined,
        specs: {
          "규격": "2인치 || 2.5인치 || 3인치",
          "형식": "E타입 (수)",
          "재질": "AL/SUS",
          "비고": "C타입과 연결 가능한 호스용 커플링입니다.",
        },
      },
      {
        id: "atype",
        name: "커플링 A형",
        img: `${baseUrl}products/etc/coupling/coupling-a.jpg`,
        cardImg: `${baseUrl}products/etc/coupling/coupling-a.jpg`,
        specImg: undefined,
        specs: {
          "규격": "2인치 || 2.5인치 || 3인치",
          "형식": "A타입 (수-암나사)",
          "재질": "AL/SUS",
          "비고": "수나사와 연결 가능한 호스용 커플링입니다.",
        },
      },
      {
        id: "btype",
        name: "커플링 B형",
        img: `${baseUrl}products/etc/coupling/coupling-b.jpg`,
        cardImg: `${baseUrl}products/etc/coupling/coupling-b.jpg`,
        specImg: undefined,
        specs: {
          "규격": "2인치 || 2.5인치 || 3인치",
          "형식": "B타입 (암-수나사)",
          "재질": "AL/SUS",
          "비고": "암나사와 연결 가능한 호스용 커플링입니다.",
        },
      },
      {
        id: "dtype",
        name: "커플링 D형",
        img: `${baseUrl}products/etc/coupling/coupling-d.jpg`,
        cardImg: `${baseUrl}products/etc/coupling/coupling-d.jpg`,
        specImg: undefined,
        specs: {
          "규격": "2인치 || 2.5인치 || 3인치",
          "형식": "D타입 (암-암나사)",
          "재질": "AL/SUS",
          "비고": "수나사와 연결 가능한 호스용 커플링입니다.",
        },
      },
      {
        id: "ftype",
        name: "커플링 F형",
        img: `${baseUrl}products/etc/coupling/coupling-f.jpg`,
        cardImg: `${baseUrl}products/etc/coupling/coupling-f.jpg`,
        specImg: undefined,
        specs: {
          "규격": "2인치 || 2.5인치 || 3인치",
          "형식": "F타입 (수-수나사)",
          "재질": "AL/SUS",
          "비고": "암나사와 연결 가능한 호스용 커플링입니다.",
        },
      },
      {
        id: "bbtype",
        name: "커플링 BB형",
        img: `${baseUrl}products/etc/coupling/coupling-bb.jpg`,
        cardImg: `${baseUrl}products/etc/coupling/coupling-bb.jpg`,
        specImg: undefined,
        specs: {
          "규격": "3-3인치 || 3-2.5인치 || 3-2인치",
          "형식": "BB타입 (암암)",
          "재질": "AL/SUS",
          "비고": "C타입을 양쪽으로 연결 가능한 커플링입니다.",
        },
      },
      {
        id: "dctype",
        name: "커플링 DC형",
        img: `${baseUrl}products/etc/coupling/coupling-dc.jpg`,
        cardImg: `${baseUrl}products/etc/coupling/coupling-dc.jpg`,
        specImg: undefined,
        specs: {
          "규격": "3인치 || 2.5인치 || 2인치",
          "형식": "DC타입 (E타입 마개)",
          "재질": "AL/SUS",
          "비고": "E타입을 막을 수 있는 마개형 커플링입니다.",
        },
      },
      {
        id: "bptype",
        name: "커플링 DP형",
        img: `${baseUrl}products/etc/coupling/coupling-dp.jpg`,
        cardImg: `${baseUrl}products/etc/coupling/coupling-dp.jpg`,
        specImg: undefined,
        specs: {
          "규격": "3-3인치 || 3-2.5인치 || 3-2인치",
          "형식": "DP타입 (C타입 마개)",
          "재질": "AL/SUS",
          "비고": "C타입을 막을 수 있는 마개형 커플링입니다.",
        },
      },
    ],
};
