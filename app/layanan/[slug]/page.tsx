import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import RegisterButton from "@/components/RegisterButton";
import { whatsappLink } from "@/lib/whatsapp";
import { services } from "@/data/services";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <Header />

      <section className="service-detail-page">
        <Link href="/layanan" className="service-back-link">
          ← Semua layanan
        </Link>
        <div className="service-detail-hero">
          <div>
            <div className="section-label">{service.label}</div>
            <h1>
              {service.title}
              <br />
              untuk tulisan yang <span>lebih terarah.</span>
            </h1>
            <p>{service.shortDescription}</p>
            <div className="detail-actions">
              <RegisterButton label={`Daftar ${service.title}`} />
              <a
                href={whatsappLink(
                  `Halo CendikiAksara, saya tertarik dengan layanan ${service.title}. Saya ingin berkonsultasi mengenai prosedur dan ketentuannya.`
                )}
                target="_blank"
                rel="noreferrer"
                className="outline-button"
              >
                Konsultasi via WhatsApp
              </a>
            </div>
          </div>

          <aside className="service-summary">
            <div className="service-label">INVESTASI</div>
            <strong>{service.price}</strong>
            {service.earlyBird && <p>{service.earlyBird}</p>}
            <hr />
            <div className="service-label">DURASI</div>
            <p>{service.duration}</p>
          </aside>
        </div>

        <section className="service-detail-content">
          <div>
            <div className="section-label">YANG AKAN KAMU DAPATKAN</div>
            <h2>Fokus pada proses yang benar.</h2>
            <ul className="detail-feature-list">
              {service.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="section-label">LAYANAN INI COCOK UNTUK</div>
            <ul className="detail-feature-list">
              {service.suitableFor.map((item) => (
                <li key={item}>→ {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="policy-box">
          <h2>Perlu diperhatikan</h2>
          <p>
            Layanan ini bukan jasa penulisan naskah. Peserta tetap bertanggung
            jawab atas ide, isi, data, sumber, dan naskah yang dikumpulkan.
            CendikiAksara juga tidak menjamin kemenangan dalam lomba.
          </p>
        </section>
      </section>
      <WhatsAppFloat />
    </main>
  );
}
