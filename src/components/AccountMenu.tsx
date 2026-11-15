"use client";

import { useUser } from "@auth0/nextjs-auth0";
import { content, type Lang } from "@/lib/content";
import { loginHref, memberPath, signupHref } from "@/lib/auth-links";

export function AccountMenu({ lang }: { lang: Lang }) {
  const { user, isLoading } = useUser();
  const t = content[lang].auth;

  if (isLoading) return <span className="h-7 w-16" aria-hidden />;

  if (user) {
    return (
      <a href={memberPath(lang)} className="max-w-24 truncate whitespace-nowrap text-slate-700 sm:max-w-32 hover:text-lions-navy">
        {user.name ?? user.email ?? t.member}
      </a>
    );
  }

  return (
    <span className="flex items-center gap-2 whitespace-nowrap sm:gap-3">
      <a href={loginHref(lang)} className="whitespace-nowrap text-slate-700 hover:text-lions-navy">{t.login}</a>
      <a href={signupHref(lang)} className="whitespace-nowrap rounded-full bg-lions-navy px-3 py-1 font-medium text-white hover:brightness-110">{t.signup}</a>
    </span>
  );
}
