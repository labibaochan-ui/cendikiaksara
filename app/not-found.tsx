import Link from "next/link";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="section-label">404 — HALAMAN TIDAK DITEMUKAN</div>
      <h1>
        Sepertinya halaman ini
        <br />
        belum <span>ditulis.</span>
      </h1>
      <p>
        Halaman yang kamu cari mungkin sudah dipindahkan atau tidak tersedia.
      </p>
      <Link href="/" className="button">
        Kembali ke beranda <span>↗</span>
      </Link>
      <WhatsAppFloat />
    </main>
  );
}
