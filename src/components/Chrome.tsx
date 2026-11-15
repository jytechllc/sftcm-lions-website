import Image from "next/image";
import { content, type Lang } from "@/lib/content";
import { memberPath } from "@/lib/auth-links";
import { AccountMenu } from "./AccountMenu";

/** Site header and footer, shared by the home page and the member page. */
export function Header({ lang, onHome = true }: { lang: Lang; onHome?: boolean }) {
  const t = content[lang];
  const home = lang === "zh" ? "/" : "/en";
  const other = lang === "zh" ? "en" : "zh";
  const langHref = onHome ? t.nav.langHref : memberPath(other);
  const links = [
    ["#about", t.nav.about], ["#service", t.nav.service],
    ["#meetings", t.nav.meetings], ["#join", t.nav.join],
  ] as const;

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <a href={home} className="flex min-w-0 items-center gap-2">
          <Image src="/lions-emblem.png" alt="Lions International" width={40} height={40} className="shrink-0" />
          <span className="truncate text-sm font-semibold text-lions-navy sm:text-base">
            {lang === "zh" ? "旧金山世界中医药总会狮子会" : "SF Global Chinese Medicine Lions"}
          </span>
        </a>
        <nav className="flex items-center gap-4 text-sm">
          <div className="hidden gap-5 md:flex">
            {links.map(([href, label]) => (
              <a key={href} href={`${onHome ? "" : home}${href}`} className="text-slate-600 hover:text-lions-navy">{label}</a>
            ))}
          </div>
          <AccountMenu lang={lang} />
          <a href={langHref} className="rounded-full border border-slate-300 px-3 py-1 text-slate-700 hover:border-lions-navy hover:text-lions-navy">
            {t.nav.lang}
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-4 py-10 text-sm text-slate-500">
      <div className="mx-auto max-w-5xl space-y-3">
        <p>{t.footer.lci}</p>
        <p>© 2026 {t.footer.copy}</p>
      </div>
    </footer>
  );
}
