import "../globals.css";
import { siteMetadata } from "@/lib/meta";

export const metadata = siteMetadata("zh");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
