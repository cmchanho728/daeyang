# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Astro (v5, static output, no UI framework) marketing/catalog site for 대양특장 (formerly 대양상사), a Korean manufacturer of parts for vacuum/septic trucks (분뇨차) and fuel tankers (유조차). Site content is Korean. Production domain: `www.dyic.kr`.

## Working conventions

- 사용자와의 대화는 한국어로 진행한다.
- `package-lock.json`, `dist/`, `node_modules/`, `public/` 안의 이미지 파일은 꼭 필요할 때만 읽는다. 이미지는 내용을 직접 열어보지 말고 크기·해상도 등 메타 정보만 확인한다.
- 연락처(전화·이메일·카카오톡)와 주소, 회사명/구 상호, 사이트 URL은 `src/config/site.ts`의 `site` 객체에서 단일 관리한다. `Header.astro`, `Footer.astro`, 각 페이지, `BaseLayout.astro`(OG 메타)는 모두 이 값을 import해서 사용하므로, 새 페이지/컴포넌트에서도 문자열을 직접 하드코딩하지 말고 `site`에서 가져다 쓴다. 대표자·사업자등록번호·팩스·영업시간은 아직 확정 전이라 빈 문자열로 두었고, 값이 채워지기 전까지는 화면에 노출하는 UI가 없다 — 위치가 정해지면 빈 값일 때 숨기는 조건부 렌더링과 함께 추가할 것.
- 용어 통일 예정: "카탈로그", "바이패스", "플랜지"로 맞출 계획이다. 현재 코드에는 아래처럼 표기가 섞여 있으니, 일괄 변경 지시가 있기 전까지는 임의로 바꾸지 말고 기존 표기를 유지한다.
  - "카탈로그" ← 현재 전 파일에서 "카다로그"로 표기 (`src/pages/catalog/index.astro`, `Header`/`Footer` 및 각 페이지의 CTA 버튼 등).
  - "바이패스" ← `src/pages/business/index.astro`에 "바이페스"로 표기된 항목 있음. 파일명·id(`300l-bypass`, `bypass.jpg` 등)는 영문 그대로이므로 변경 대상 아님.
  - "플랜지" ← `src/data/products/etc-flange.ts`는 이미 "플랜지"로 일치, `src/components/ProductLinkPanel.astro`와 `src/data/products/etc-joint.ts`는 "플렌지"로 표기되어 있어 불일치.
  - 제품군(카테고리) 명칭 자체의 확정본은 아직 없음 — 확정되면 이 목록을 갱신할 것.
- 작업은 `renewal` 브랜치에서 진행한다. 커밋은 단계별로 나누고, 각 커밋 전에 변경 내역을 요약해서 보여준 뒤 진행한다.

## Commands

```sh
npm install       # install dependencies
npm run dev       # dev server at localhost:4321
npm run build     # production build to ./dist/
npm run preview   # preview the production build locally
npm run astro ...  # run Astro CLI commands, e.g. `npm run astro check`
```

There is no test suite and no linter configured. `npm run astro check` is the closest thing to a type-check (validates `.astro` files and TS against `tsconfig.json`, which extends `astro/tsconfigs/strict`).

## Deployment and base path

- Single deployment target: [Vercel](https://vercel.com), root-hosted at the production domain `www.dyic.kr`. There is no GitHub Pages deployment — the old `.github/workflows/deploy.yml` (GitHub Actions → GitHub Pages) has been removed.
- `astro.config.mjs` no longer sets `base`; it defaults to `/`. Previously it branched between `/` (Vercel) and `/daeyang/` (GitHub Pages project-site path) to support dual deployment — that branching was removed once GitHub Pages was dropped.
- Existing code still builds asset/link paths off `import.meta.env.BASE_URL`, normalized to a trailing slash, e.g.:
  ```js
  const rawBase = import.meta.env.BASE_URL;
  const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;
  ```
  This pattern is repeated per-file (see `Header.astro`, `ProductCategoryPage.astro`, `src/data/products/base.ts`'s exported `baseUrl`) rather than centralized. It's a holdover from the dual-deployment days and now always resolves to `/`, but it's harmless — follow the existing per-file pattern when adding new pages/components rather than introducing a new helper or hardcoding paths differently.
- `src/layouts/Layout.astro` (the unused Astro-starter template layout) and `src/components/Welcome.astro` have been deleted. The real layout used everywhere is `src/layouts/BaseLayout.astro` (sets the Korean `<html lang="ko">`, SEO/OG meta tags, and wraps content in `Header` + `<main><slot /></main>` + `Footer`).

## Product catalog data model

The product catalog is the core piece of domain logic, split across `src/data/products/`:

- `types.ts` — `Product` (id, name, images, `specs: Record<string,string>`) and `CategoryData` (pageTitle, pageDescription, products[]) interfaces.
- `base.ts` — exports `baseUrl`, the normalized `BASE_URL` used to prefix every image path in product data files (since data files live outside the Astro component tree and can't rely on relative imports for `public/` assets).
- One file per product category (e.g. `pump-fuel.ts`, `valve-vacuum.ts`, `etc-hose.ts`, ...), each exporting a `CategoryData` object. Category naming convention is `<group>-<subtype>` (`pump-fuel`, `pump-vacuum`, `valve-fuel`, `valve-vacuum`, `etc-coupling`, `etc-flange`, `etc-fuel`, `etc-gasket`, `etc-hose`, `etc-joint`, `etc-vacuum`).
- `index.ts` — aggregates all category files into `productsData: Record<string, CategoryData>` and derives `categories = Object.keys(productsData)`. **This is the single registration point** — adding a new product category means creating a new category file and adding one line here.
- Top-level `src/data/products.ts` just re-exports from `./products/index` (kept for import-path convenience).

Routing: `src/pages/products/[category]/index.astro` uses `getStaticPaths()` over `categories` to statically generate one page per category, rendered by the shared `src/components/ProductCategoryPage.astro` component (breadcrumb, product grid, per-product spec table + photo/drawing lightbox gallery). To add a new product category page, you only need to add data — not a new page or route.

Each product's images (`img`/`cardImg`/`specImg`/`images[]`/`drawings[]`) reference files under `public/products/...`; adding a product means adding both the data entry and the corresponding image file(s) under `public/`.

## Page/component structure

- `src/pages/` — one folder per top-level route (`about/`, `business/`, `catalog/`, `contact/`, `location/`, `products/`), each with an `index.astro`. Static marketing pages import `BaseLayout` directly; the products index and homepage additionally use `src/components/ProductShowcase.astro` (category-card overview grid) and `src/components/ProductLinkPanel.astro`.
- `src/components/Header.astro` / `Footer.astro` — shared site chrome, included only via `BaseLayout`.
- Styling is plain CSS: global rules in `src/styles/global.css` (imported once, in `BaseLayout.astro`), plus component-scoped `<style>` blocks in individual `.astro` files. No CSS framework or preprocessor.
- Contact/CTA patterns are repeated across pages rather than componentized: 견적 문의 (quote request) link to `/contact/`, 카다로그 (catalog) link to `/catalog/`, a KakaoTalk chat link, and a phone link. The KakaoTalk URL and phone `href`/display text come from `site.kakaoUrl` / `site.phone` in `src/config/site.ts` (see above) rather than literals. Keep these consistent when adding new pages.
