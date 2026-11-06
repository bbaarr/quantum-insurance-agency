import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./quantum-site.css";

export const metadata: Metadata = {
  title: "קוואנטום | ביטוח, פנסיה ותכנון פיננסי",
  description:
    "תכנון פיננסי למשפחה, תכנון פנסיוני ופרישה, ביטוחי פרט וביטוח רכוש ועסק — קוואנטום סוכנות לביטוח.",
  openGraph: {
    title: "קוואנטום | ביטוח, פנסיה ותכנון פיננסי",
    description: "קוואנטום — ביטוח. פנסיה. פיננסים.",
    type: "website",
    siteName: "קוואנטום",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link as="font" crossOrigin="" href="/fonts/heebo-hebrew-wght-normal.woff2" rel="preload" type="font/woff2" />
      </head>
      <body className="min-h-dvh antialiased">
        {children}
        <Script
          src="https://cdn-chatly.vyro.ai/chatly-make/sites-script/make-preview-runtime.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn-chatly.vyro.ai/chatly-make/sites-script/heading-override.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
