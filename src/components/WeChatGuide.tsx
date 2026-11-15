"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { content, type Lang } from "@/lib/content";
import { loginHref, signupHref } from "@/lib/auth-links";

/** Shown instead of going to Auth0 when the visitor is in WeChat's in-app browser. */
export function WeChatGuide({ lang, mode, onClose }: { lang: Lang; mode: "login" | "signup"; onClose: () => void }) {
  const t = content[lang].auth.wechat;
  const [copied, setCopied] = useState(false);
  // Only rendered after a click, so window is always defined here.
  const url = window.location.origin + (lang === "zh" ? "/" : "/en");

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      // Clipboard can be blocked in WeChat; the link stays visible and selectable.
    }
  }

  const emailHref = mode === "signup" ? signupHref(lang, true) : loginHref(lang, true);

  // Portal to <body>: the sticky header uses backdrop-blur, which would trap a fixed overlay inside it.
  return createPortal(
    <div role="dialog" aria-modal="true" aria-labelledby="wx-title" className="fixed inset-0 z-50 bg-slate-900/70 px-4 pt-3" onClick={onClose}>
      {/* Arrow toward WeChat's ··· menu in the top-right corner */}
      <div className="flex justify-end pr-2 text-lions-gold" aria-hidden>
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 50 C 20 30, 32 18, 48 8" />
          <path d="M34 8 H48 V22" />
        </svg>
      </div>
      <div className="mx-auto mt-2 max-w-sm rounded-2xl bg-white p-6 text-slate-800 shadow-xl" onClick={(e) => e.stopPropagation()}>
        <h2 id="wx-title" className="text-lg font-bold text-lions-navy">{t.title}</h2>
        <p className="mt-2 text-sm text-slate-600">{t.body}</p>

        <p className="mt-5 font-semibold">{t.optBrowser}</p>
        <ol className="mt-2 space-y-1 text-sm text-slate-700">
          <li>1. {t.step1}</li>
          <li>2. {t.step2}</li>
        </ol>
        <p className="mt-3 text-xs text-slate-500">{t.orCopy}</p>
        <div className="mt-1 flex items-center gap-2">
          <code className="min-w-0 flex-1 select-all truncate rounded bg-slate-100 px-2 py-1.5 text-xs">{url}</code>
          <button type="button" onClick={copy} className="shrink-0 rounded-full border border-slate-300 px-3 py-1 text-xs hover:border-lions-navy">
            {copied ? t.copied : t.copy}
          </button>
        </div>

        <div className="my-5 h-px bg-slate-200" />
        <p className="font-semibold">{t.optEmail}</p>
        <a href={emailHref} className="mt-3 block rounded-full bg-lions-navy px-5 py-2.5 text-center font-medium text-white hover:brightness-110">
          {mode === "signup" ? t.emailSignup : t.emailLogin}
        </a>
        <button type="button" onClick={onClose} className="mt-3 w-full text-center text-sm text-slate-500">{t.close}</button>
      </div>
    </div>
    ,
    document.body,
  );
}
