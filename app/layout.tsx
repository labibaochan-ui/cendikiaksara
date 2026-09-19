import type { Metadata } from "next";
import "./globals.css";
import "./layanan-styles.css";

export const metadata: Metadata = {
  title: "CendikiAksara — Pendampingan Menulis yang Terarah",
  description:
    "Pendampingan 1-on-1 untuk esai, KTI, lomba, dan laporan akademik.",
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
      <body>{children}</body>
    </html>
  );
}
