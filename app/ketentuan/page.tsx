import Link from "next/link";
import Header from "@/components/Header";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import RegisterButton from "@/components/RegisterButton";

export const metadata = {
  title: "Ketentuan Layanan | CendikiAksara",
  description:
    "Ketentuan layanan, integritas akademik, revisi, pembatalan, dan refund CendikiAksara.",
};

export default function TermsPage() {
  return (
    <main>
      <Header />

      <section className="inner-page terms-page">
        <div className="inner-hero">
          <div className="section-label">KETENTUAN LAYANAN</div>

          <h1>
            Agar proses pendampingan
            <br />
            berjalan <span>jelas.</span>
          </h1>

          <p>
            Mohon baca ketentuan berikut sebelum melakukan pendaftaran layanan
            CendikiAksara.
          </p>
        </div>

        <div className="terms-layout">
          <aside className="terms-navigation">
            <a href="#ruang-lingkup">Ruang lingkup</a>
            <a href="#integritas">Integritas akademik</a>
            <a href="#revisi">Revisi</a>
            <a href="#refund">Pembatalan dan refund</a>
            <a href="#tanggung-jawab">Tanggung jawab peserta</a>
          </aside>

          <article className="terms-content">
            <section id="ruang-lingkup">
              <span className="terms-number">01</span>
              <h2>Ruang Lingkup Layanan</h2>

              <p>
                CendikiAksara menyediakan layanan pendampingan untuk esai, karya
                tulis ilmiah, naskah lomba, dan laporan akademik sesuai paket
                yang dipilih peserta.
              </p>

              <p>
                Cakupan layanan mengikuti fasilitas, durasi, jumlah sesi, jumlah
                halaman, dan jumlah revisi yang tercantum pada halaman layanan.
              </p>
            </section>

            <section id="integritas">
              <span className="terms-number">02</span>
              <h2>Integritas Akademik</h2>

              <p>
                CendikiAksara tidak menyediakan jasa joki, penulisan naskah atas
                nama peserta, manipulasi data, atau pembuatan sitasi palsu.
              </p>

              <ul>
                <li>
                  Peserta tetap menulis dan bertanggung jawab atas naskahnya.
                </li>
                <li>
                  Data dan sumber harus dapat ditelusuri serta
                  dipertanggungjawabkan.
                </li>
                <li>
                  Plagiarisme dan penggunaan karya pihak lain tanpa keterangan
                  tidak diperbolehkan.
                </li>
                <li>
                  Penggunaan bantuan AI perlu mengikuti aturan dari sekolah,
                  kampus, atau penyelenggara lomba.
                </li>
              </ul>

              <p>
                Pelanggaran serius terhadap integritas akademik dapat menyebabkan
                layanan dihentikan tanpa pengembalian dana.
              </p>
            </section>

            <section id="revisi">
              <span className="terms-number">03</span>
              <h2>Ketentuan Revisi</h2>

              <p>
                Setiap paket memiliki ketentuan revisi yang berbeda.
                Pendampingan Satu Lomba mencakup maksimal tiga putaran revisi
                luar sesi.
              </p>

              <p>
                Revisi di luar fasilitas paket dapat dibicarakan terlebih dahulu
                dengan tim CendikiAksara dan mungkin dikenakan biaya tambahan.
              </p>
            </section>

            <section id="refund">
              <span className="terms-number">04</span>
              <h2>Pembatalan dan Refund</h2>

              <div className="refund-table">
                <div>
                  <strong>H-7 atau lebih</strong>
                  <span>Refund 80%</span>
                </div>

                <div>
                  <strong>H-6 sampai H-3</strong>
                  <span>Refund 50%</span>
                </div>

                <div>
                  <strong>H-2 atau lebih dekat</strong>
                  <span>Tidak dapat refund</span>
                </div>
              </div>

              <p>
                Pengajuan pembatalan perlu disampaikan melalui kanal komunikasi
                resmi CendikiAksara. Proses refund dilakukan setelah permohonan
                diverifikasi.
              </p>
            </section>

            <section id="tanggung-jawab">
              <span className="terms-number">05</span>
              <h2>Tanggung Jawab Peserta</h2>

              <p>
                Peserta bertanggung jawab untuk hadir sesuai jadwal, mengerjakan
                tugas, menyediakan informasi yang benar, dan mengirimkan
                dokumen sesuai batas waktu yang disepakati.
              </p>

              <p>
                CendikiAksara tidak menjamin kemenangan lomba, kelulusan, nilai
                tertentu, atau penerimaan naskah oleh pihak lain.
              </p>
            </section>

            <section className="terms-final-note">
              <h2>Siap memulai?</h2>
              <p>
                Jika sudah memahami ketentuan di atas, kamu dapat melanjutkan ke
                formulir pendaftaran.
              </p>
              <RegisterButton label="Isi Form Pendaftaran" />
            </section>
          </article>
        </div>

        <div className="back-link">
          <Link href="/">← Kembali ke beranda</Link>
        </div>
      </section>

      <WhatsAppFloat />
    </main>
  );
}
