import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

// public/ 폴더 기준 절대 경로. src가 "/products/..." 형태(baseUrl 접두사 포함)로 들어오면
// 앞의 "/"를 떼고 이 경로와 합쳐 실제 파일 존재 여부를 판단한다.
const publicDir = fileURLToPath(new URL("../../public/", import.meta.url));

export function imageExists(src: string): boolean {
  const relative = src.replace(/^\/+/, "");
  return existsSync(path.join(publicDir, relative));
}
