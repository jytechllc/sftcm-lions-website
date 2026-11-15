import type { Metadata } from "next";
import { content, type Lang } from "./content";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function siteMetadata(lang: Lang): Metadata {
  const t = content[lang].meta;
  return {
    metadataBase: new URL(SITE_URL),
    title: t.title,
    description: t.description,
    icons: { icon: "/lions-emblem.png" },
    alternates: { canonical: lang === "zh" ? "/" : "/en", languages: { "zh-CN": "/", en: "/en" } },
    openGraph: { title: t.title, description: t.description, images: ["/lions-emblem.png"], type: "website" },
  };
}
