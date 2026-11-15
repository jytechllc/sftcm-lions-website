import { Suspense } from "react";
import type { Metadata } from "next";
import { Member } from "@/components/Member";
import { MemberShell } from "@/components/MemberShell";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: content.en.auth.memberTitle + " | " + content.en.footer.copy,
  robots: { index: false },
};

export default function Page() {
  return (
    <MemberShell lang="en">
      <Suspense fallback={<main className="min-h-[70vh] bg-slate-50" />}>
        <Member lang="en" />
      </Suspense>
    </MemberShell>
  );
}
