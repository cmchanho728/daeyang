# 제품 사진 목록표

`src/data/products/*.ts`가 참조하는 이미지를 카테고리 → 제품 → 사진 종류 순으로 정리한 표입니다.
생성 시점 기준 총 **107건** (제품사진 64건, 외관도 43건).

- **교체대상**: 제품사진만 교체 대상입니다. 외관도(도면 성격의 이미지)는 교체 대상에서 제외합니다.
- **파일 없음**: `public/`에 파일이 없는 경우로, 화면에는 "사진 준비중"/"외관도 준비중"으로 표시됩니다 (자세한 내용은 코드의 `src/data/products/validateImages.ts` 참고).
- **크기/비율/배경색**은 현재 `public/`에 있는 파일 기준입니다. 파일이 없으면 "-"로 표시했습니다. 배경색은 네 귀퉁이 픽셀을 표본 추출해 자동 추정한 값이라 참고용입니다.

## 교체용 파일 이름 규칙

- `scripts/replace-photos.mjs`는 `daeyang-photos` 폴더를 재귀적으로 뒤져서, **파일명(basename)이 아래 표의 "현재 파일 경로"의 마지막 파일명과 정확히 같은 파일**을 찾아 교체합니다.
  - 예: `products/vc/valve/safety.jpg`를 교체하려면 `daeyang-photos` 안 어딘가에 `safety.jpg` 파일이 있어야 합니다. 폴더 구조는 자유입니다.
- 확장자도 동일해야 합니다 (`.jpg`면 `.jpg`). 같은 파일명이 여러 개 있으면 스크립트가 모호하다고 보고 건너뜁니다.
- 외관도(specImg/drawings) 파일명은 스크립트가 아예 대상으로 보지 않으므로, 같은 이름이 있어도 무시됩니다.

## pump-vacuum (분뇨차 펌프)

| 제품 | 사진 종류 | 현재 파일 경로 | 크기(px) | 비율 | 배경색 추정 | 파일 없음 | 교체대상 | 비고 |
|---|---|---|---|---|---|---|---|---|
| 진공펌프 10L (10000) (10l) | 제품사진 | products/pump/pump-vacuum-10l.jpg | 682×387 | 가로형 (1.76:1) | 흰색 |  | 예 |  |
| 진공펌프 10L (10000) (10l) | 외관도 | products/pump/pump-vacuum-10l-outer.jpg | 2000×1415 | 가로형 (1.41:1) | 회색 |  | 제외 |  |
| 진공펌프 3L (4000) (3l) | 제품사진 | products/pump/pump-vacuum-3l.jpg | 1342×745 | 가로형 (1.80:1) | 흰색 |  | 예 |  |
| 진공펌프 3L (4000) (3l) | 외관도 | products/pump/pump-vacuum-3l-outer.jpg | 2000×1415 | 가로형 (1.41:1) | 회색 |  | 제외 |  |
| 진공펌프 5L (6000) (5l) | 제품사진 | products/vc/pump/5l-long.jpg | 1112×676 | 가로형 (1.64:1) | 흰색 |  | 예 |  |
| 진공펌프 5L (6000) (5l) | 제품사진 | products/vc/pump/5l-cw.jpg | 1214×661 | 가로형 (1.84:1) | 흰색 |  | 예 |  |
| 진공펌프 5L (6000) (5l) | 제품사진 | products/vc/pump/5l-ccw.jpg | 1115×689 | 가로형 (1.62:1) | 흰색 |  | 예 |  |
| 진공펌프 5L (6000) (5l) | 외관도 | products/vc/pump/5l-long-outer.jpg | 2000×1414 | 가로형 (1.41:1) | 흰색 |  | 제외 |  |
| 진공펌프 5L (6000) (5l) | 외관도 | products/vc/pump/5l-cw-outer.jpg | 2000×1414 | 가로형 (1.41:1) | 흰색 |  | 제외 |  |
| 진공펌프 5L (6000) (5l) | 외관도 | products/vc/pump/5l-ccw-outer.jpg | 2000×1414 | 가로형 (1.41:1) | 흰색 |  | 제외 |  |
| 진공펌프 8L (8000) (8l) | 제품사진 | products/pump/pump-vacuum-8l.jpg | 768×442 | 가로형 (1.74:1) | 흰색 |  | 예 |  |
| 진공펌프 8L (8000) (8l) | 외관도 | products/pump/pump-vacuum-8l-outer.jpg | 2000×1415 | 가로형 (1.41:1) | 회색 |  | 제외 |  |

## valve-vacuum (분뇨차 밸브)

| 제품 | 사진 종류 | 현재 파일 경로 | 크기(px) | 비율 | 배경색 추정 | 파일 없음 | 교체대상 | 비고 |
|---|---|---|---|---|---|---|---|---|
| 체크밸브 (check) | 제품사진 | products/valve/valve-vc-check.jpg | 1024×765 | 가로형 (1.34:1) | 흰색 |  | 예 |  |
| 체크밸브 (check) | 외관도 | products/valve/valve-vc-check.jpg | 1024×765 | 가로형 (1.34:1) | 흰색 |  | 제외 |  |
| 안전밸브 (safety) | 제품사진 | products/vc/valve/safety.jpg | - | - | - | **예** | 예 |  |
| 안전밸브 (safety) | 외관도 | products/vc/valve/safety-outer.jpg | 2000×1414 | 가로형 (1.41:1) | 흰색 |  | 제외 |  |
| 사방밸브 (shutoff) | 제품사진 | products/vc/valve/4way-65a.jpg | 632×939 | 세로형 (1:1.49) | 회색 |  | 예 |  |
| 사방밸브 (shutoff) | 제품사진 | products/vc/valve/4way-50a.jpg | 618×869 | 세로형 (1:1.41) | 회색 |  | 예 |  |
| 사방밸브 (shutoff) | 외관도 | products/vc/valve/4way-65a-outer.jpg | 2000×1414 | 가로형 (1.41:1) | 흰색 |  | 제외 |  |
| 사방밸브 (shutoff) | 외관도 | products/vc/valve/4way-50a-outer.jpg | 2000×1414 | 가로형 (1.41:1) | 흰색 |  | 제외 |  |
| 이방밸브 (vc2way) | 제품사진 | products/vc/valve/2way-80.jpg | 559×696 | 세로형 (1:1.25) | 흰색 |  | 예 |  |
| 이방밸브 (vc2way) | 제품사진 | products/vc/valve/2way-65.jpg | 613×974 | 세로형 (1:1.59) | 흰색 |  | 예 |  |
| 이방밸브 (vc2way) | 외관도 | products/vc/valve/2way-80-outer.jpg | 2000×1414 | 가로형 (1.41:1) | 흰색 |  | 제외 |  |
| 이방밸브 (vc2way) | 외관도 | products/vc/valve/2way-65-outer.jpg | 2000×1414 | 가로형 (1.41:1) | 흰색 |  | 제외 |  |

## etc-vacuum (분뇨차 기타 부품)

| 제품 | 사진 종류 | 현재 파일 경로 | 크기(px) | 비율 | 배경색 추정 | 파일 없음 | 교체대상 | 비고 |
|---|---|---|---|---|---|---|---|---|
| 에어클리너 (airclean) | 제품사진 | products/vc/etc/airclean.jpg | - | - | - | **예** | 예 |  |
| 에어클리너 (airclean) | 제품사진 | products/vc/etc/airclean-65a.jpg | 429×405 | 가로형 (1.06:1) | 흰색 |  | 예 |  |
| 에어클리너 (airclean) | 제품사진 | products/vc/etc/airclean-50a.jpg | 414×332 | 가로형 (1.25:1) | 흰색 |  | 예 |  |
| 에어클리너 (airclean) | 제품사진 | products/vc/etc/airclean-65a-sus.jpg | - | - | - | **예** | 예 |  |
| 에어클리너 (airclean) | 외관도 | products/vc/etc/airclean.jpg | - | - | - | **예** | 제외 |  |
| 에어클리너 (airclean) | 외관도 | products/vc/etc/airclean-65a-outer.jpg | 1414×2000 | 세로형 (1:1.41) | 흰색 |  | 제외 |  |
| 에어클리너 (airclean) | 외관도 | products/vc/etc/airclean-50a-outer.jpg | 2000×1414 | 가로형 (1.41:1) | 흰색 |  | 제외 |  |
| 뒷맨홀 (backmanhole) | 제품사진 | products/vc/etc/backmanhole.jpg | 632×405 | 가로형 (1.56:1) | 흰색 |  | 예 |  |
| 뒷맨홀 (backmanhole) | 외관도 | products/vc/etc/backmanhole-outer.jpg | 2000×1414 | 가로형 (1.41:1) | 흰색 |  | 제외 |  |
| 탈취기 (deodor) | 제품사진 | products/vc/etc/deodorizer.jpg | 475×324 | 가로형 (1.47:1) | 흰색 |  | 예 |  |
| 탈취기 (deodor) | 외관도 | products/vc/etc/deodorizer-outer.jpg | - | - | - | **예** | 제외 |  |
| 메인맨홀 (manhole) | 제품사진 | products/vc/etc/manhole.jpg | 1594×792 | 가로형 (2.01:1) | 흰색 |  | 예 |  |
| 메인맨홀 (manhole) | 제품사진 | products/vc/etc/manhole-sus.jpg | 751×850 | 세로형 (1:1.13) | 흰색 |  | 예 |  |
| 메인맨홀 (manhole) | 외관도 | products/vc/etc/manhole-outer.jpg | 2000×1414 | 가로형 (1.41:1) | 흰색 |  | 제외 |  |
| 오일여과기 (oilsep) | 제품사진 | products/vc/etc/oilfilter-65a.jpg | 518×405 | 가로형 (1.28:1) | 흰색 |  | 예 |  |
| 오일여과기 (oilsep) | 제품사진 | products/vc/etc/oilfilter-50a.jpg | 518×405 | 가로형 (1.28:1) | 흰색 |  | 예 |  |
| 오일여과기 (oilsep) | 제품사진 | products/vc/etc/oilfilter-65a-sus.jpg | - | - | - | **예** | 예 |  |
| 오일여과기 (oilsep) | 외관도 | products/vc/etc/oilfilter-65a-outer.jpg | 2000×1414 | 가로형 (1.41:1) | 흰색 |  | 제외 |  |
| 오일여과기 (oilsep) | 외관도 | products/vc/etc/oilfilter-50a-outer.jpg | 2000×1414 | 가로형 (1.41:1) | 흰색 |  | 제외 |  |
| 오일통 (oiltank) | 제품사진 | products/vc/etc/oiltank-65a.jpg | 1793×1263 | 가로형 (1.42:1) | 흰색 |  | 예 |  |
| 오일통 (oiltank) | 제품사진 | products/vc/etc/oiltank-50a.jpg | 764×1028 | 세로형 (1:1.35) | 흰색 |  | 예 |  |
| 오일통 (oiltank) | 제품사진 | products/vc/etc/oiltank-65a-sus.jpg | 822×651 | 가로형 (1.26:1) | 흰색 |  | 예 |  |
| 오일통 (oiltank) | 외관도 | products/vc/etc/oiltank-65a-outer.jpg | 2000×1414 | 가로형 (1.41:1) | 흰색 |  | 제외 |  |
| 오일통 (oiltank) | 외관도 | products/vc/etc/oiltank-50a-outer.jpg | 2000×1414 | 가로형 (1.41:1) | 흰색 |  | 제외 |  |

## pump-fuel (유조차 펌프)

| 제품 | 사진 종류 | 현재 파일 경로 | 크기(px) | 비율 | 배경색 추정 | 파일 없음 | 교체대상 | 비고 |
|---|---|---|---|---|---|---|---|---|
| 1000L 펌프 (1000l) | 제품사진 | products/tl/pump/1000.jpg | 1174×750 | 가로형 (1.57:1) | 흰색 |  | 예 |  |
| 1000L 펌프 (1000l) | 외관도 | products/tl/pump/1000-outer.jpg | 1098×982 | 가로형 (1.12:1) | 흰색 |  | 제외 |  |
| 200L 펌프 (200l) | 제품사진 | products/tl/pump/200.jpg | 944×646 | 가로형 (1.46:1) | 흰색 |  | 예 |  |
| 200L 펌프 (200l) | 외관도 | products/tl/pump/200-outer.jpg | 1098×771 | 가로형 (1.42:1) | 흰색 |  | 제외 |  |
| 300L 펌프 (300l) | 제품사진 | products/tl/pump/300.jpg | 1117×709 | 가로형 (1.58:1) | 흰색 |  | 예 |  |
| 300L 펌프 (300l) | 외관도 | products/tl/pump/300-outer.jpg | 1170×1122 | 정사각형 (1170×1122) | 흰색 |  | 제외 |  |
| 300L 내장형 펌프 (300l-bypass) | 제품사진 | products/tl/pump/300-bypass.jpg | - | - | - | **예** | 예 |  |
| 300L 내장형 펌프 (300l-bypass) | 외관도 | products/tl/pump/300-bypass-outer.jpg | 2000×1414 | 가로형 (1.41:1) | 흰색 |  | 제외 |  |
| 600L 펌프 (600l) | 제품사진 | products/tl/pump/600.jpg | 1155×722 | 가로형 (1.60:1) | 흰색 |  | 예 |  |
| 600L 펌프 (600l) | 외관도 | products/tl/pump/600-outer.jpg | 1098×982 | 가로형 (1.12:1) | 흰색 |  | 제외 |  |

## valve-fuel (유조차 밸브)

| 제품 | 사진 종류 | 현재 파일 경로 | 크기(px) | 비율 | 배경색 추정 | 파일 없음 | 교체대상 | 비고 |
|---|---|---|---|---|---|---|---|---|
| 에어벤트(에어누끼) (airvent) | 제품사진 | products/tl/valve/airvent.jpg | 518×405 | 가로형 (1.28:1) | 흰색 |  | 예 |  |
| 에어벤트(에어누끼) (airvent) | 외관도 | products/tl/valve/airvent-outer.jpg | - | - | - | **예** | 제외 |  |
| 사방밸브 (ball) | 제품사진 | products/tl/valve/4way-80.jpg | 518×405 | 가로형 (1.28:1) | 흰색 |  | 예 |  |
| 사방밸브 (ball) | 제품사진 | products/tl/valve/4way-50.jpg | 1024×765 | 가로형 (1.34:1) | 흰색 |  | 예 |  |
| 사방밸브 (ball) | 제품사진 | products/tl/valve/4way-65.jpg | 518×405 | 가로형 (1.28:1) | 흰색 |  | 예 |  |
| 사방밸브 (ball) | 외관도 | products/tl/valve/4way-outer.jpg | - | - | - | **예** | 제외 |  |
| 사방밸브 (ball) | 외관도 | products/tl/valve/4way-50-outer.jpg | 2000×1414 | 가로형 (1.41:1) | 흰색 |  | 제외 |  |
| 사방밸브 (ball) | 외관도 | products/tl/valve/4way-65-outer.jpg | 2000×1414 | 가로형 (1.41:1) | 흰색 |  | 제외 |  |
| 사방밸브 (ball) | 외관도 | products/tl/valve/4way-80-outer.jpg | 2000×1414 | 가로형 (1.41:1) | 흰색 |  | 제외 |  |
| 보텀밸브 (bottom) | 제품사진 | products/tl/valve/bottom.jpg | - | - | - | **예** | 예 |  |
| 보텀밸브 (bottom) | 외관도 | products/tl/valve/bottom-outer.jpg | - | - | - | **예** | 제외 |  |
| 이방밸브 (check) | 제품사진 | products/tl/valve/2way-80.jpg | 518×405 | 가로형 (1.28:1) | 흰색 |  | 예 |  |
| 이방밸브 (check) | 외관도 | products/tl/valve/2way-80-outer.jpg | 2000×1414 | 가로형 (1.41:1) | 흰색 |  | 제외 |  |
| 레버식 보텀밸브 (lever) | 제품사진 | products/tl/valve/lever.jpg | - | - | - | **예** | 예 |  |
| 레버식 보텀밸브 (lever) | 외관도 | products/tl/valve/lever-outer.jpg | - | - | - | **예** | 제외 |  |
| 메인밸브 (main) | 제품사진 | products/tl/valve/main.jpg | - | - | - | **예** | 예 |  |
| 메인밸브 (main) | 외관도 | products/tl/valve/main-outer.jpg | - | - | - | **예** | 제외 |  |
| 바이패스밸브 (shutoff) | 제품사진 | products/tl/valve/bypass.jpg | 1024×765 | 가로형 (1.34:1) | 흰색 |  | 예 |  |
| 바이패스밸브 (shutoff) | 외관도 | products/tl/valve/bypass-outer.jpg | 2000×1414 | 가로형 (1.41:1) | 흰색 |  | 제외 |  |

## etc-fuel (유조차 기타 부품)

| 제품 | 사진 종류 | 현재 파일 경로 | 크기(px) | 비율 | 배경색 추정 | 파일 없음 | 교체대상 | 비고 |
|---|---|---|---|---|---|---|---|---|
| 조인트/커플러 (coupler) | 제품사진 | products-tltruck.jpg | 1100×299 | 가로형 (3.68:1) | 기타(단색 아님/배경 있음) |  | 예 | 실제 제품사진 아님(공용 배너 임시 사용, 스펙도 미확정 — docs/todo-specs.md 참고) |
| 호스/피팅 (hose) | 제품사진 | products-tltruck.jpg | 1100×299 | 가로형 (3.68:1) | 기타(단색 아님/배경 있음) |  | 예 | 실제 제품사진 아님(공용 배너 임시 사용, 스펙도 미확정 — docs/todo-specs.md 참고) |
| 노즐/미터 (nozzle) | 제품사진 | products-tltruck.jpg | 1100×299 | 가로형 (3.68:1) | 기타(단색 아님/배경 있음) |  | 예 | 실제 제품사진 아님(공용 배너 임시 사용, 스펙도 미확정 — docs/todo-specs.md 참고) |

## etc-joint (조인트)

| 제품 | 사진 종류 | 현재 파일 경로 | 크기(px) | 비율 | 배경색 추정 | 파일 없음 | 교체대상 | 비고 |
|---|---|---|---|---|---|---|---|---|
| 일반조인트 (joint) | 제품사진 | products/etc/joint/joint.jpg | 518×405 | 가로형 (1.28:1) | 흰색 |  | 예 |  |
| 등속조인트 (롱) (joint-long) | 제품사진 | products/etc/joint/joint-long.jpg | 518×405 | 가로형 (1.28:1) | 흰색 |  | 예 |  |
| 등속조인트 (숏) (joint-short) | 제품사진 | products/etc/joint/joint-short.jpg | 518×405 | 가로형 (1.28:1) | 흰색 |  | 예 |  |

## etc-flange (플랜지-패킹)

| 제품 | 사진 종류 | 현재 파일 경로 | 크기(px) | 비율 | 배경색 추정 | 파일 없음 | 교체대상 | 비고 |
|---|---|---|---|---|---|---|---|---|
| 원형 플랜지 (flange-circle) | 제품사진 | products/etc/flange/flange-circle.jpg | 518×405 | 가로형 (1.28:1) | 흰색 |  | 예 |  |
| 원형 플랜지 (flange-circle) | 외관도 | products/etc/flange/flange-circle-spec.jpg | - | - | - | **예** | 제외 |  |
| 사각 플랜지 (flange-rect) | 제품사진 | products/etc/flange/flange-rect.jpg | 518×405 | 가로형 (1.28:1) | 흰색 |  | 예 |  |
| 사각 플랜지 (flange-rect) | 외관도 | products/etc/flange/flange-rect-spec.jpg | - | - | - | **예** | 제외 |  |
| 원형 가스켓 (gasket-circle) | 제품사진 | products/etc/flange/gasket-circle.jpg | 518×405 | 가로형 (1.28:1) | 흰색 |  | 예 |  |
| 원형 가스켓 (gasket-circle) | 외관도 | products/etc/flange/gasket-circle-spec.jpg | - | - | - | **예** | 제외 |  |
| 사각 가스켓 (gasket-rect) | 제품사진 | products/etc/flange/gasket-rect.jpg | 518×405 | 가로형 (1.28:1) | 흰색 |  | 예 |  |
| 사각 가스켓 (gasket-rect) | 외관도 | products/etc/flange/gasket-rect-spec.jpg | - | - | - | **예** | 제외 |  |

## etc-hose (호스)

| 제품 | 사진 종류 | 현재 파일 경로 | 크기(px) | 비율 | 배경색 추정 | 파일 없음 | 교체대상 | 비고 |
|---|---|---|---|---|---|---|---|---|
| 청고압호스 C형 (hose-c) | 제품사진 | products/etc/hose/hose.jpg | 518×405 | 가로형 (1.28:1) | 회색 |  | 예 |  |
| 청고압호스 C형 (hose-c) | 외관도 | products/etc/hose/hose-spec.jpg | 404×125 | 가로형 (3.23:1) | 회색 |  | 제외 |  |
| 청고압호스 CF형 (hose-cf) | 제품사진 | products/etc/hose/hose-cf.jpg | 518×405 | 가로형 (1.28:1) | 기타(단색 아님/배경 있음) |  | 예 |  |
| 청고압호스 CF형 (hose-cf) | 외관도 | products/etc/hose/hose-spec.jpg | 404×125 | 가로형 (3.23:1) | 회색 |  | 제외 |  |

## etc-coupling (커플링)

| 제품 | 사진 종류 | 현재 파일 경로 | 크기(px) | 비율 | 배경색 추정 | 파일 없음 | 교체대상 | 비고 |
|---|---|---|---|---|---|---|---|---|
| 커플링 A형 (atype) | 제품사진 | products/etc/coupling/coupling-a.jpg | 518×405 | 가로형 (1.28:1) | 흰색 |  | 예 |  |
| 커플링 BB형 (bbtype) | 제품사진 | products/etc/coupling/coupling-bb.jpg | 2000×1343 | 가로형 (1.49:1) | 회색 |  | 예 |  |
| 커플링 DP형 (bptype) | 제품사진 | products/etc/coupling/coupling-dp.jpg | 518×405 | 가로형 (1.28:1) | 흰색 |  | 예 |  |
| 커플링 B형 (btype) | 제품사진 | products/etc/coupling/coupling-b.jpg | 518×405 | 가로형 (1.28:1) | 흰색 |  | 예 |  |
| 커플링 C형 (ctype) | 제품사진 | products/etc/coupling/coupling-c.jpg | 518×405 | 가로형 (1.28:1) | 흰색 |  | 예 |  |
| 커플링 DC형 (dctype) | 제품사진 | products/etc/coupling/coupling-dc.jpg | 518×405 | 가로형 (1.28:1) | 흰색 |  | 예 |  |
| 커플링 D형 (dtype) | 제품사진 | products/etc/coupling/coupling-d.jpg | 518×405 | 가로형 (1.28:1) | 흰색 |  | 예 |  |
| 커플링 E형 (etype) | 제품사진 | products/etc/coupling/coupling-e.jpg | 518×405 | 가로형 (1.28:1) | 흰색 |  | 예 |  |
| 커플링 F형 (ftype) | 제품사진 | products/etc/coupling/coupling-f.jpg | 518×405 | 가로형 (1.28:1) | 흰색 |  | 예 |  |

## etc-gasket (패킹 (비공개))

| 제품 | 사진 종류 | 현재 파일 경로 | 크기(px) | 비율 | 배경색 추정 | 파일 없음 | 교체대상 | 비고 |
|---|---|---|---|---|---|---|---|---|
| 조인트/커플러 (coupler) | 제품사진 | products-tltruck.jpg | 1100×299 | 가로형 (3.68:1) | 기타(단색 아님/배경 있음) |  | 예 | 실제 제품사진 아님(공용 배너 임시 사용, 스펙도 미확정 — docs/todo-specs.md 참고); 비공개 카테고리(categoryMetas published:false) |
| 호스/피팅 (hose) | 제품사진 | products-tltruck.jpg | 1100×299 | 가로형 (3.68:1) | 기타(단색 아님/배경 있음) |  | 예 | 실제 제품사진 아님(공용 배너 임시 사용, 스펙도 미확정 — docs/todo-specs.md 참고); 비공개 카테고리(categoryMetas published:false) |
| 노즐/미터 (nozzle) | 제품사진 | products-tltruck.jpg | 1100×299 | 가로형 (3.68:1) | 기타(단색 아님/배경 있음) |  | 예 | 실제 제품사진 아님(공용 배너 임시 사용, 스펙도 미확정 — docs/todo-specs.md 참고); 비공개 카테고리(categoryMetas published:false) |

