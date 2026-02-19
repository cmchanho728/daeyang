import { defineConfig } from "astro/config";

const isVercel = process.env.VERCEL === "1";

export default defineConfig({
  // Vercel에서는 루트 배포이므로 base 제거
  base: isVercel ? "/" : "/daeyang/",
  site: "https://www.dyic.kr",
});