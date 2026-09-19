import Link from "next/link";
import BrandLogo from "./BrandLogo";
import MobileMenu from "./MobileMenu";
import WhatsAppButton from "./WhatsAppButton";
import RegisterButton from "./RegisterButton";

export default function Header() {
  return (
    <header className="navbar" data-site-header="true">
      <BrandLogo />

      <nav className="nav-links" aria-label="Navigasi utama">
        <Link href="/layanan">Layanan</Link>
        <Link href="/#cara-kerja">Cara Kerja</Link>
        <Link href="/tentang">Tentang Kami</Link>
        <Link href="/faq">FAQ</Link>
      </nav>

      <div className="nav-actions">
        <a
          href="https://www.instagram.com/cendekiaksara.id_/"
          target="_blank"
          rel="noreferrer"
          className="instagram-header-link"
        >
          Instagram
        </a>
        <div className="header-action-group">
          <WhatsAppButton
            label="WhatsApp"
            className="header-whatsapp-button"
          />
          <RegisterButton label="Daftar" className="header-register-button" />
        </div>
      </div>

      <MobileMenu />
    </header>
  );
}
