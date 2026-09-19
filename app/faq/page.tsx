import Link from "next/link";
import Header from "@/components/Header";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FAQList from "@/components/FAQList";
import RegisterButton from "@/components/RegisterButton";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

export const metadata = {
  title: "FAQ | CendikiAksara",
  description:
    "Pertanyaan umum tentang layanan pendampingan esai, KTI, lomba, dan laporan akademik CendikiAksara.",
};

export default function FAQPage() {
  return (
    <main>
      <Header />

      <section className="inner-page faq-page">
        <div className="inner-hero">
          <div className="section-label">PERTANYAAN UMUM</div>

          <h1>
            Sebelum mulai,
            <br />
            kenali <span>prosesnya.</span>
          </h1>

          <p>
            Temukan jawaban atas pertanyaan umum tentang layanan,
            pendampingan, jadwal, revisi, dan integritas akademik.
          </p>
        </div>

        <FAQList />

        <section className="small-cta">
          <div>
            <div className="section-label">MASIH BINGUNG?</div>
            <h2>Konsultasikan kebutuhanmu.</h2>
            <p>Ceritakan kebutuhan tulisanmu kepada tim CendikiAksara.</p>
          </div>

          <div className="small-cta-actions">
            <RegisterButton label="Daftar Pendampingan" />

            <a
              href={whatsappLink(whatsappMessages.general)}
              target="_blank"
              rel="noreferrer"
              className="outline-button"
            >
              Konsultasi via WhatsApp
            </a>
          </div>
        </section>

        <div className="back-link">
          <Link href="/">← Kembali ke beranda</Link>
        </div>
      </section>

      <WhatsAppFloat />
    </main>
  );
}
