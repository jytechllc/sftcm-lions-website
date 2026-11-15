import Image from "next/image";
import { Footer, Header } from "./Chrome";
import { CONTACT_EMAIL, content, type Lang } from "@/lib/content";

function Section({ id, title, subtitle, children, tint = false }: {
  id: string; title: string; subtitle?: string; children: React.ReactNode; tint?: boolean;
}) {
  return (
    <section id={id} className={`scroll-mt-20 px-4 py-16 sm:py-20 ${tint ? "bg-slate-50" : "bg-white"}`}>
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold text-lions-navy sm:text-3xl">{title}</h2>
        <div className="mt-3 h-1 w-12 rounded bg-lions-gold" />
        {subtitle && <p className="mt-4 max-w-2xl text-slate-600">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export function Site({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <>
      <Header lang={lang} />

      <main id="top">
        <section className="relative overflow-hidden bg-lions-navy px-4 py-20 text-white sm:py-28">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-lions-gold/10 blur-2xl" />
          <div className="relative mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm tracking-wide text-blue-100">{t.hero.eyebrow}</p>
              <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">{t.hero.name}</h1>
              <p className="mt-2 text-sm text-blue-100 sm:text-base">{t.hero.nameAlt}</p>
              <p className="mt-6 text-lg font-semibold text-lions-gold">{t.hero.motto}</p>
              <p className="mt-3 max-w-xl text-blue-50">{t.hero.tagline}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#join" className="rounded-full bg-lions-gold px-6 py-3 font-semibold text-lions-navy hover:brightness-95">{t.hero.cta}</a>
                <a href="#about" className="rounded-full border border-white/40 px-6 py-3 font-semibold hover:bg-white/10">{t.hero.cta2}</a>
              </div>
            </div>
            <div className="mx-auto hidden rounded-2xl bg-white p-4 shadow-xl md:block">
              <Image src="/lions-emblem.png" alt="Lions International" width={200} height={200} priority />
            </div>
          </div>
        </section>

        <Section id="about" title={t.about.title}>
          <div className="grid gap-10 md:grid-cols-[3fr_2fr]">
            <div className="space-y-4 leading-relaxed text-slate-700">
              {t.about.body.map((p) => <p key={p}>{p}</p>)}
            </div>
            <dl className="divide-y divide-slate-200 rounded-xl border border-slate-200">
              {t.about.facts.map((f) => (
                <div key={f.k} className="flex justify-between gap-4 px-4 py-3 text-sm">
                  <dt className="text-slate-500">{f.k}</dt>
                  <dd className="text-right font-medium text-slate-800">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        <Section id="service" title={t.service.title} subtitle={t.service.subtitle} tint>
          <div className="grid gap-5 sm:grid-cols-2">
            {t.service.items.map((s) => (
              <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-lions-navy">{s.title}</h3>
                  <span className="shrink-0 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs text-amber-800">{s.status}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-600">
            {t.service.lciNote}{" "}
            <a href="https://www.lionsclubs.org/en/explore-our-clubs/our-global-causes" target="_blank" rel="noopener noreferrer" className="text-lions-navy underline underline-offset-2">
              {t.service.lciLink} ↗
            </a>
          </p>
        </Section>


        <Section id="meetings" title={t.meetings.title} tint>
          <dl className="grid gap-4 sm:grid-cols-3">
            {t.meetings.items.map((m) => (
              <div key={m.k} className="rounded-xl border border-slate-200 bg-white p-5">
                <dt className="text-sm text-slate-500">{m.k}</dt>
                <dd className="mt-1 font-medium text-slate-800">{m.v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-slate-600">{t.meetings.note}</p>
        </Section>

        <Section id="join" title={t.join.title}>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="leading-relaxed text-slate-700">{t.join.body}</p>
              <ol className="mt-6 space-y-3">
                {t.join.steps.map((s, i) => (
                  <li key={s} className="flex gap-3 text-slate-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lions-navy text-xs font-semibold text-white">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="self-start rounded-2xl bg-lions-navy p-6 text-white">
              <p className="text-sm text-blue-100">{t.join.contactLabel}</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="mt-2 block break-all text-lg font-bold text-lions-gold hover:underline">{CONTACT_EMAIL}</a>
            </div>
          </div>
        </Section>
      </main>

      <Footer lang={lang} />
    </>
  );
}
