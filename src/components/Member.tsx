import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth0 } from "@/lib/auth0";
import { isWeChat, loginHref, logoutHref } from "@/lib/auth-links";
import { content, type Lang } from "@/lib/content";

export async function Member({ lang }: { lang: Lang }) {
  const session = await auth0.getSession();
  if (!session) redirect(loginHref(lang, isWeChat((await headers()).get("user-agent"))));

  const t = content[lang].auth;
  const u = session.user;
  const home = lang === "zh" ? "/" : "/en";

  return (
    <main className="min-h-[70vh] bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8">
        <h1 className="text-2xl font-bold text-lions-navy">{t.memberTitle}</h1>
        <div className="mt-3 h-1 w-12 rounded bg-lions-gold" />
        <div className="mt-6 flex items-center gap-4">
          {u.picture && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={u.picture} alt="" width={56} height={56} className="rounded-full" />
          )}
          <div className="min-w-0">
            <p className="truncate text-lg font-semibold text-slate-900">{u.name ?? u.email}</p>
            {u.email && <p className="truncate text-sm text-slate-500">{u.email}</p>}
          </div>
        </div>
        <p className="mt-6 leading-relaxed text-slate-700">{t.memberBody}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={home} className="rounded-full border border-slate-300 px-5 py-2 text-slate-700 hover:border-lions-navy hover:text-lions-navy">{t.back}</a>
          <a href={logoutHref(lang)} className="rounded-full bg-lions-navy px-5 py-2 font-medium text-white hover:brightness-110">{t.logout}</a>
        </div>
      </div>
    </main>
  );
}
