import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";
import "./layanan-styles.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cendikiaksara.vercel.app"),
  title: "CendikiAksara — Pendampingan Menulis yang Terarah",
  description:
    "Pendampingan menulis 1-on-1 untuk esai, KTI, lomba, dan laporan akademik secara terarah dan berintegritas.",
  keywords: [
    "pendampingan menulis",
    "jasa konsultasi KTI",
    "bimbingan esai",
    "pendampingan karya tulis ilmiah",
    "konsultasi tulisan akademik",
  ],
  authors: [{ name: "CendikiAksara" }],
  creator: "CendikiAksara",
  verification: {
    google: "8YXwt5TQlgikwAL80pn9ny3QJOVFN7LZl6z67xiULXI",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://cendikiaksara.vercel.app",
    siteName: "CendikiAksara",
    title: "CendikiAksara — Pendampingan Menulis yang Terarah",
    description:
      "Kembangkan gagasanmu dengan pendampingan menulis 1-on-1 yang terstruktur dan berintegritas.",
  },
  twitter: {
    card: "summary",
    title: "CendikiAksara — Pendampingan Menulis yang Terarah",
    description:
      "Pendampingan 1-on-1 untuk esai, KTI, lomba, dan laporan akademik.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7701319178774070"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
