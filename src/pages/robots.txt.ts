import type { APIRoute } from "astro";
import { site } from "../config/site";

export const prerender = true;

export const GET: APIRoute = () => {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${site.siteUrl}/sitemap-index.xml\n`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
