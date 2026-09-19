import Link from "next/link";
import Header from "@/components/Header";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import RegisterButton from "@/components/RegisterButton";

const values = [
  {
    number: "01",
    title: "Berpikir sebelum menulis",
    description:
      "Kami membantu peserta memahami masalah, menemukan sudut pandang, dan menyusun gagasan sebelum masuk ke tahap penulisan.",
  },
  {
    number: "02",
    title: "Bimbingan, bukan penggantian",
    description:
      "Pembimbing memberikan arahan dan feedback. Peserta tetap menjadi pemilik ide sekaligus penulis naskahnya.",
  },
  {
    number: "03",
    title: "Karya yang dapat dipertanggungjawabkan",
    description:
      "Kami mendorong penggunaan sumber yang jelas, argumen yang logis, dan proses akademik yang jujur.",
  },
];

export const metadata = {
  title: "Tentang Kami | CendikiAksara",
  description:
    "Mengenal pendekatan dan nilai CendikiAksara dalam pendampingan esai, KTI, lomba, dan laporan akademik.",
};

export default function AboutPage() {
  return (
    <main>
      <Header />

      <section className="inner-page about-page">
        <div className="inner-hero">
          <div className="section-label">TENTANG CENDIKIAKSARA</div>

          <h1>
            Gagasan yang baik
            <br />
            perlu <span>ruang tumbuh.</span>
          </h1>

          <p>
            CendikiAksara adalah layanan pendampingan menulis yang membantu
            pelajar dan mahasiswa mengembangkan gagasan menjadi karya yang
            terarah, mandiri, dan dapat dipertanggungjawabkan.
          </p>
        </div>

        <section className="about-story">
          <div className="about-story-symbol">Aa</div>

          <div>
            <div className="section-label">CARA KAMI MEMANDANG TULISAN</div>

            <h2>
              Menulis bukan hanya
              <br />
              menyusun <em>kata.</em>
            </h2>

            <p>
              Menulis adalah proses memahami masalah, menguji gagasan, mencari
              sumber yang tepat, menyusun argumen, dan mengambil tanggung jawab
              atas karya yang dihasilkan.
            </p>

            <p>
              Karena itu, CendikiAksara hadir bukan untuk menggantikan proses
              tersebut, melainkan untuk menemani peserta melewatinya dengan
              arahan yang terstruktur.
            </p>
          </div>
        </section>

        <section className="values-section">
          <div className="section-label">NILAI KAMI</div>

          <div className="values-grid">
            {values.map((value) => (
              <article className="value-card" key={value.number}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-principle">
          <div className="section-label">KOMITMEN KAMI</div>

          <h2>
            Kamu tetap penulisnya.
            <br />
            Kami membantu <span>prosesnya.</span>
          </h2>

          <p>
            Kami tidak menjanjikan kemenangan atau hasil instan. Kami
            berkomitmen memberikan proses pendampingan yang jujur, terarah, dan
            sesuai kebutuhan setiap peserta.
          </p>

          <RegisterButton label="Mulai Pendampingan" />
        </section>

        <div className="back-link">
          <Link href="/">← Kembali ke beranda</Link>
        </div>
      </section>

      <WhatsAppFloat />
    </main>
  );
}
