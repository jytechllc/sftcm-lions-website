import type { Lang } from "./content";

export const memberPath = (lang: Lang) => (lang === "zh" ? "/member" : "/en/member");
const home = (lang: Lang) => (lang === "zh" ? "/" : "/en");

function login(lang: Lang, signup: boolean) {
  const q = new URLSearchParams({ returnTo: memberPath(lang) });
  if (signup) q.set("screen_hint", "signup");
  if (lang === "zh") q.set("ui_locales", "zh-CN");
  return `/auth/login?${q}`;
}

export const loginHref = (lang: Lang) => login(lang, false);
export const signupHref = (lang: Lang) => login(lang, true);
export const logoutHref = (lang: Lang) => `/auth/logout?returnTo=${encodeURIComponent(home(lang))}`;
