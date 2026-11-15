import { Footer, Header } from "./Chrome";
import type { Lang } from "@/lib/content";

export function MemberShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <>
      <Header lang={lang} onHome={false} />
      {children}
      <Footer lang={lang} />
    </>
  );
}
