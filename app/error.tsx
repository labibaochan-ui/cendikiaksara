"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="not-found-page">
      <div className="section-label">TERJADI KESALAHAN</div>
      <h1>
        Coba lagi
        <br />
        beberapa <span>saat.</span>
      </h1>
      <p>
        Halaman mengalami kendala sementara. Silakan coba kembali atau kembali
        ke beranda.
      </p>
      <div className="hero-actions">
        <button type="button" className="button" onClick={reset}>
          Coba lagi ↻
        </button>
        <Link href="/" className="text-button">
          Ke beranda ↗
        </Link>
      </div>
    </main>
  );
}
