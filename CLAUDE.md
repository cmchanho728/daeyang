# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Astro (v5, static output, no UI framework) marketing/catalog site for 대양특장 (formerly 대양상사), a Korean manufacturer of parts for vacuum/septic trucks (분뇨차) and fuel tankers (유조차). Site content is Korean. Production domain: `www.dyic.kr`.

## Working conventions

- 사용자와의 대화는 한국어로 진행한다.
- `package-lock.json`, `dist/`, `node_modules/`, `public/` 안의 이미지 파일은 꼭 필요할 때만 읽는다. 이미지는 내용을 직접 열어보지 말고 크기·해상도 등 메타 정보만 확인한다.
- 연락처(전화·이메일·카카오톡)와 주소, 회사명/구 상호, 사이트 URL은 `src/config/site.ts`의 `site` 객체에서 단일 관리한다. `Header.astro`, `Footer.astro`, 각 페이지, `BaseLayout.astro`(OG 메타)는 모두 이 값을 import해서 사용하므로, 새 페이지/컴포넌트에서도 문자열을 직접 하드코딩하지 말고 `site`에서 가져다 쓴다. 대표자·사업자등록번호·팩스·영업시간은 아직 확정 전이라 빈 문자열로 두었고, 값이 채워지기 전까지는 화면에 노출하는 UI가 없다 — 위치가 정해지면 빈 값일 때 숨기는 조건부 렌더링과 함께 추가할 것.
- 차량 대표 명칭은 "분뇨차"(진공차량/버큠탱크로리 대신)와 "유조차"(유조차량 대신)로 통일 완료. 화면 제목·카드·본문은 이 대표 명칭만 쓰고, 옛 표기(진공차량·버큠탱크로리)는 검색어 보존을 위해 head 메타 설명에만 괄호로 병기한다 (`src/pages/products/index.astro`의 `description` 참고). 이미지에 새겨진 글자(배너의 "진공차량탱크부품" 등)는 대상이 아니므로 그대로 둔다.
- 표기 통일 완료: "카탈로그"(← 카다로그), "바이패스"(← 바이페스), "플랜지"(← 플렌지), "보텀"(← 보톰). 화면에 보이는 문구에는 옛 표기를 병기하지 않고, 옛 표기는 head 메타 설명에만 검색어로 한 번씩 남겨둔다 (`catalog/index.astro`, `business/index.astro`, `products/index.astro`의 각 `description` 참고). 파일명·id(`300l-bypass`, `bypass.jpg` 등)는 영문 그대로이므로 변경 대상 아님.
- 제품군(카테고리) 명칭: `src/data/products/categories.ts`의 카드 제목과 각 카테고리 파일의 `pageTitle`을 일치시켰다 (예: "분뇨차 펌프", "유조차 밸브", "분뇨차 기타 부품", "플랜지-패킹"). 명칭 확정본이 추가로 나오면 이 목록을 갱신할 것.
- 작업은 `renewal` 브랜치에서 진행한다. 커밋은 단계별로 나누고, 각 커밋 전에 변경 내역을 요약해서 보여준 뒤 진행한다.
- **견적 문의 폼은 만들지 않는다.** 연락 채널은 전화·카카오톡·이메일 3가지만 쓴다. "견적 문의"/"문의" 버튼이나 링크는 입력 폼이 아니라 `contact/index.astro`(전화·카카오톡·이메일 안내 페이지)나 `mailto:`/`tel:`/카카오톡 상담 링크로 연결한다. 새 문의 접점을 추가할 때도 이 3채널 안에서만 구현할 것.

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
- Asset/link paths are built off `import.meta.env.BASE_URL`, normalized to a trailing slash by the single helper `src/utils/url.ts` (exports `baseUrl`). Import it as `import { baseUrl as base } from "../utils/url"` (adjust relative depth) rather than recomputing it per-file. It's a holdover from the dual-deployment days and now always resolves to `/`, but it's harmless. `src/data/products/base.ts` re-exports the same `baseUrl` for data files, which live outside the Astro component tree and can't rely on relative imports for `public/` assets otherwise.
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
- The 4-button 견적 문의(quote)/카탈로그(catalog)/카카오톡 상담/전화하기 CTA row used on the home page, `ProductCategoryPage.astro`, and `ProductShowcase.astro` is `src/components/ContactActions.astro` — it renders only the four `<a>` buttons (using `site.kakaoUrl` / `site.phone` from `src/config/site.ts`), not a wrapper `<div>`, because each of the three call sites wraps it with different spacing (`gap`/`margin-top`). Wrap it in whatever container class/style fits the page rather than changing the component. The `contact/index.astro` page and `Header.astro`'s mobile CTA have their own distinct, non-4-button layouts and are not part of this component.
