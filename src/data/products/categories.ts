export interface CategoryMeta {
  key: string;
  group: "vacuum" | "fuel" | "common";
  title: string;
  summary: string;
  order: number;
  published: boolean;
}

export const categoryMetas: CategoryMeta[] = [
  {
    key: "pump-vacuum",
    group: "vacuum",
    title: "분뇨차 펌프",
    summary: "분뇨차(진공차량·버큠탱크로리)·준설차용 진공펌프",
    order: 1,
    published: true,
  },
  {
    key: "valve-vacuum",
    group: "vacuum",
    title: "분뇨차 밸브",
    summary: "분뇨차(진공차량·버큠탱크로리) 사방/이방/체크 밸브 등",
    order: 2,
    published: true,
  },
  {
    key: "etc-vacuum",
    group: "vacuum",
    title: "분뇨차 기타 부품",
    summary: "분뇨차(진공차량·버큠탱크로리) 맨홀/탈취기/에어클리너/오일여과기/오일통 등",
    order: 3,
    published: true,
  },
  {
    key: "pump-fuel",
    group: "fuel",
    title: "유조차 펌프",
    summary: "유류 이송차량 용 기어펌프",
    order: 1,
    published: true,
  },
  {
    key: "valve-fuel",
    group: "fuel",
    title: "유조차 밸브",
    summary: "사방/이방/바이패스/보텀 밸브 등",
    order: 2,
    published: true,
  },
  {
    key: "etc-fuel",
    group: "fuel",
    title: "유조차 기타 부품",
    summary: "맨홀/스트레이너/보텀핸들 등",
    order: 3,
    published: true,
  },
  {
    key: "etc-joint",
    group: "common",
    title: "조인트",
    summary: "분뇨차 조인트/피팅 부품",
    order: 1,
    published: true,
  },
  {
    key: "etc-flange",
    group: "common",
    title: "플랜지-패킹",
    summary: "유조차 플랜지/패킹 부품",
    order: 2,
    published: true,
  },
  {
    key: "etc-hose",
    group: "common",
    title: "호스",
    summary: "유조차 호스/피팅 부품",
    order: 3,
    published: true,
  },
  {
    key: "etc-coupling",
    group: "common",
    title: "커플링",
    summary: "분뇨차 라인 커플링 부품",
    order: 4,
    published: true,
  },
  {
    key: "etc-gasket",
    group: "common",
    title: "패킹",
    summary: "분뇨차/유조차 배관 연결에 필요한 각종 NBR/비석면/테프론 패킹(가스켓)",
    order: 5,
    published: false,
  },
];
