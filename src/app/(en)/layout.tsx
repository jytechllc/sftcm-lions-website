import "../globals.css";
import { siteMetadata } from "@/lib/meta";

export const metadata = siteMetadata("en");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
