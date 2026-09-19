import Link from "next/link";
import Header from "@/components/Header";
import AIChat from "@/components/AIChat";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import RegisterButton from "@/components/RegisterButton";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

const steps = [
  {
    number: "01",
    title: "Pilih layanan",
    description:
      "Tentukan layanan yang paling sesuai dengan kebutuhan tulisanmu.",
  },
  {
    number: "02",
    title: "Ceritakan kebutuhanmu",
    description:
      "Sampaikan jenis naskah, target, deadline, dan kendala yang kamu hadapi.",
  },
  {
    number: "03",
    title: "Ikuti pendampingan",
    description:
      "Kembangkan naskahmu melalui arahan, bedah, tugas, dan feedback.",
  },
];

const schedule = [
  ["S1", "Selasa", "16.00–17.30 WITA"],
  ["S2", "Selasa", "19.30–21.00 WITA"],
  ["S3", "Kamis", "16.00–17.30 WITA"],
  ["S4", "Kamis", "19.30–21.00 WITA"],
  ["S5", "Sabtu", "09.00–10.30 WITA"],
  ["S6", "Minggu", "16.00–17.30 WITA"],
];

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Pendampingan menulis 1-on-1
          </div>

          <h1>
            Kamu menulisnya.
            <br />
            Kami membimbing
            <br />
            <span>prosesnya.</span>
          </h1>

          <p className="hero-description">
            Pendampingan untuk esai, KTI, lomba, dan laporan akademik.
            Kembangkan gagasanmu dengan arahan yang terstruktur tanpa
            kehilangan kejujuran akademik.
          </p>

          <div className="hero-actions">
            <RegisterButton label="Daftar Pendampingan" />
            <a
              href={whatsappLink(whatsappMessages.general)}
              target="_blank"
              rel="noreferrer"
              className="text-button"
            >
              Konsultasi dulu <span>↗</span>
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>1:1</strong>
              <span>Pendampingan personal</span>
            </div>
            <div>
              <strong>4</strong>
              <span>Sesi terstruktur</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Karya peserta</span>
            </div>
          </div>
        </div>

        <div className="hero-card-wrapper">
          <div className="hero-card">
            <div className="card-top">
              <span className="card-label">CENDIKIAKSARA</span>
              <span className="card-number">01 / 03</span>
            </div>
            <div className="card-symbol">Aa</div>
            <h2>
              Tulisan yang baik
              <br />
              dimulai dari <em>pikiran</em>
            </h2>
            <div className="card-line" />
            <div className="card-bottom">
              <span>ASAH NALAR</span>
              <span>✦</span>
              <span>CIPTAKAN AKSARA</span>
            </div>
          </div>
          <div className="floating-note note-one">
            <span>✦</span>
            Gagasan terarah
          </div>
          <div className="floating-note note-two">
            <span>✓</span>
            Tetap orisinal
          </div>
        </div>
      </section>

      <section className="intro-section" id="tentang">
        <div className="section-label">KENAPA CENDIKIAKSARA?</div>
        <div className="intro-content">
          <h2>
            Karena setiap ide
            <br />
            <span>layak untuk dikembangkan.</span>
          </h2>
          <p>
            CendikiAksara membantu peserta mengubah ide menjadi karya yang
            terstruktur, dapat dipertanggungjawabkan, dan tetap ditulis oleh
            pemilik gagasannya sendiri.
          </p>
        </div>
      </section>

      <section className="services-preview">
        <div className="section-heading">
          <div>
            <div className="section-label">LAYANAN KAMI</div>
            <h2>Pendampingan sesuai kebutuhanmu.</h2>
          </div>
          <Link href="/layanan" className="outline-button">
            Lihat semua layanan ↗
          </Link>
        </div>

        <div className="preview-grid">
          <article className="preview-card">
            <span className="section-label">TANPA MEET</span>
            <h3>Cek Naskah</h3>
            <p>
              Untuk kamu yang sudah memiliki draft dan membutuhkan catatan
              perbaikan yang terarah.
            </p>
            <strong>Mulai Rp99.000</strong>
            <Link href="/layanan/cek-naskah">Lihat detail ↗</Link>
          </article>

          <article className="preview-card featured-card">
            <span className="section-label">4 MINGGU</span>
            <h3>Pendampingan Terstruktur</h3>
            <p>
              Kurikulum tetap untuk membantumu memahami proses penulisan dari
              juknis hingga naskah akhir.
            </p>
            <strong>Rp549.000</strong>
            <Link href="/layanan/pendampingan-terstruktur">
              Lihat detail ↗
            </Link>
          </article>

          <article className="preview-card">
            <span className="section-label">PROGRES NASKAH</span>
            <h3>Pendampingan Satu Lomba</h3>
            <p>
              Pendampingan fleksibel untuk satu lomba dan satu naskah
              spesifik.
            </p>
            <strong>Rp749.000</strong>
            <Link href="/layanan/pendampingan-satu-lomba">
              Lihat detail ↗
            </Link>
          </article>
        </div>
      </section>

      <section className="process-section" id="cara-kerja">
        <div className="process-heading">
          <div className="section-label">CARA KERJA</div>
          <h2>
            Satu langkah kecil
            <br />
            untuk <span>karya besar.</span>
          </h2>
        </div>

        <div className="process-list">
          {steps.map((step) => (
            <div className="process-item" key={step.number}>
              <span className="process-number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <span className="process-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="principle-section">
        <div className="section-label">PRINSIP CENDIKIAKSARA</div>
        <div className="principle-grid">
          <div>
            <span className="principle-icon">01</span>
            <h3>Bukan jasa joki</h3>
            <p>
              Kami tidak menulis naskahmu. Kami membantumu memahami dan
              mengembangkan proses berpikirmu.
            </p>
          </div>
          <div>
            <span className="principle-icon">02</span>
            <h3>Sumber harus jelas</h3>
            <p>
              Setiap data dan klaim perlu ditelusuri ke sumber yang dapat
              dipertanggungjawabkan.
            </p>
          </div>
          <div>
            <span className="principle-icon">03</span>
            <h3>Proses yang jujur</h3>
            <p>
              Karya yang baik bukan hanya selesai, tetapi juga dapat
              dipertanggungjawabkan oleh penulisnya.
            </p>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="section-label">MENGAPA CENDIKIAKSARA?</div>
        <div className="trust-heading">
          <h2>
            Pendampingan yang jelas,
            <br />
            sejak langkah <span>pertama.</span>
          </h2>
          <p>
            Kami membantu peserta memahami proses menulis, bukan sekadar
            menyelesaikan naskah.
          </p>
        </div>
        <div className="trust-grid">
          <article className="trust-card">
            <span className="trust-card-number">01</span>
            <div className="trust-card-icon">↗</div>
            <h3>1-on-1 dan personal</h3>
            <p>
              Pendampingan disesuaikan dengan kebutuhan, kemampuan, dan tujuan
              tulisan setiap peserta.
            </p>
          </article>
          <article className="trust-card">
            <span className="trust-card-number">02</span>
            <div className="trust-card-icon">Aa</div>
            <h3>Berbasis proses</h3>
            <p>
              Peserta diarahkan dari tahap memahami masalah, mengembangkan
              gagasan, hingga memperbaiki naskah.
            </p>
          </article>
          <article className="trust-card">
            <span className="trust-card-number">03</span>
            <div className="trust-card-icon">✓</div>
            <h3>Berintegritas</h3>
            <p>
              Naskah tetap ditulis oleh peserta dengan penggunaan sumber dan
              data yang dapat dipertanggungjawabkan.
            </p>
          </article>
        </div>
      </section>

      <section className="schedule-section" id="jadwal">
        <div className="section-label">SLOT PENDAMPINGAN</div>
        <div className="schedule-heading">
          <h2>Pilih waktu yang paling sesuai.</h2>
          <p>
            Peserta pendampingan terstruktur dan pendampingan satu lomba
            memilih satu slot tetap selama empat minggu.
          </p>
        </div>
        <div className="schedule-grid">
          {schedule.map(([code, day, time]) => (
            <div className="schedule-card" key={code}>
              <strong>{code}</strong>
              <span>{day}</span>
              <small>{time}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <div className="section-label">SIAP UNTUK BERKARYA?</div>
          <h2>
            Jangan biarkan idemu
            <br />
            hanya tinggal <em>ide.</em>
          </h2>
          <p>Mulai perjalanan menulismu bersama CendikiAksara.</p>
          <Link href="/layanan" className="dark-button">
            Pilih layanan sekarang <span>↗</span>
          </Link>
        </div>
        <div className="cta-decoration">Aa</div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <Link href="/" className="brand">
            <img
              src="/logo.svg"
              alt="CendikiAksara"
              className="brand-logo-full footer-logo"
            />
          </Link>
          <p>Kamu menulisnya. Kami membimbing prosesnya.</p>
        </div>

        <div className="footer-links">
          <Link href="/layanan">Layanan</Link>
          <Link href="/tentang">Tentang Kami</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/ketentuan">Ketentuan</Link>
          <a
            href="https://www.instagram.com/cendekiaksara.id_/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>

        <div className="footer-bottom">
          <span>© 2025 CendikiAksara</span>
          <span>Asah nalar, ciptakan aksara.</span>
        </div>
      </footer>
      <AIChat />
      <WhatsAppFloat />
    </main>
  );
}
