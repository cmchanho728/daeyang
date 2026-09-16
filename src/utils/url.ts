const rawBase = import.meta.env.BASE_URL;
export const baseUrl = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;
