const base = import.meta.env.BASE_URL || "/";
export const baseUrl = base.endsWith("/") ? base : `${base}/`;
