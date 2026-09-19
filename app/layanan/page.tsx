import Link from "next/link";
import Header from "@/components/Header";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import RegisterButton from "@/components/RegisterButton";
import { links } from "@/lib/links";
import { services } from "@/data/services";

export const metadata = {
  title: "Layanan | CendikiAksara",
  description:
    "Pilih layanan pendampingan esai, KTI, lomba, dan laporan akademik.",
};

export default function ServicesPage() {
  return (
    <main>
      <Header />

      <section className="services-page">
        <div className="services-hero">
          <div className="section-label">LAYANAN CENDIKIAKSARA</div>
          <h1>
            Pilih pendampingan
            <br />
            sesuai <span>kebutuhanmu.</span>
          </h1>
          <p>
            Setiap layanan dirancang untuk membantumu mengembangkan tulisan
            secara mandiri, terarah, dan berintegritas.
          </p>
          <div className="services-hero-actions">
            <RegisterButton label="Isi Form Pendaftaran" />
            <a
              href={links.instagram}
              target="_blank"
              rel="noreferrer"
              className="outline-button"
            >
              Lihat Instagram
            </a>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.slug}>
              <span className="service-card-number">0{index + 1}</span>
              <div className="service-card-top">
                <span className="service-label">{service.label}</span>
                {service.badge && (
                  <span className="service-badge">{service.badge}</span>
                )}
              </div>
              <h2>{service.title}</h2>
              <p className="service-description">{service.shortDescription}</p>
              <div className="service-price">{service.price}</div>
              {service.earlyBird && (
                <div className="service-early-bird">{service.earlyBird}</div>
              )}
              <div className="service-duration">{service.duration}</div>
              <ul>
                {service.features.slice(0, 5).map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>
              <Link
                href={`/layanan/${service.slug}`}
                className="button service-button"
              >
                Lihat detail <span>↗</span>
              </Link>
            </article>
          ))}
        </div>

        <section className="integrity-banner">
          <div>
            <div className="section-label">KOMITMEN CENDIKIAKSARA</div>
            <h2>
              Kami membimbing prosesnya.
              <br />
              <span>Kamu tetap penulisnya.</span>
            </h2>
          </div>
          <p>
            CendikiAksara tidak menyediakan jasa joki, penulisan naskah,
            jaminan juara, atau manipulasi sumber. Setiap karya harus lahir
            dari proses berpikir dan usaha peserta sendiri.
          </p>
        </section>
      </section>
      <WhatsAppFloat />
    </main>
  );
}
