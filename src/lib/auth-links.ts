import type { Lang } from "./content";

export const memberPath = (lang: Lang) => (lang === "zh" ? "/member" : "/en/member");
const home = (lang: Lang) => (lang === "zh" ? "/" : "/en");

/** Auth0 database connection: email + password only, no Google button. */
export const EMAIL_CONNECTION = "Username-Password-Authentication";

function login(lang: Lang, signup: boolean, emailOnly: boolean) {
  const q = new URLSearchParams({ returnTo: memberPath(lang) });
  if (signup) q.set("screen_hint", "signup");
  if (emailOnly) q.set("connection", EMAIL_CONNECTION);
  if (lang === "zh") q.set("ui_locales", "zh-CN");
  return `/auth/login?${q}`;
}

export const loginHref = (lang: Lang, emailOnly = false) => login(lang, false, emailOnly);
export const signupHref = (lang: Lang, emailOnly = false) => login(lang, true, emailOnly);

/** WeChat's in-app browser; Google blocks OAuth there (403 disallowed_useragent). */
export const isWeChat = (ua: string | null | undefined) => /MicroMessenger/i.test(ua ?? "");
export const logoutHref = (lang: Lang) => `/auth/logout?returnTo=${encodeURIComponent(home(lang))}`;
