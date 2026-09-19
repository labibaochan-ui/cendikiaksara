"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import WhatsAppButton from "./WhatsAppButton";
import RegisterButton from "./RegisterButton";

const menuItems = [
  {
    label: "Beranda",
    href: "/",
  },
  {
    label: "Layanan",
    href: "/layanan",
  },
  {
    label: "Cara Kerja",
    href: "/#cara-kerja",
  },
  {
    label: "Tentang Kami",
    href: "/tentang",
  },
  {
    label: "Jadwal",
    href: "/#jadwal",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Ketentuan",
    href: "/ketentuan",
  },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    document.body.classList.toggle("mobile-menu-open", isOpen);

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-open");
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={`menu-button ${isOpen ? "menu-button-hidden" : ""}`}
        aria-label="Buka menu navigasi"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <span />
        <span />
        <span />
      </button>

      {isOpen && (
        <div className="mobile-menu-layer">
          <button
            type="button"
            className="mobile-menu-overlay"
            aria-label="Tutup menu"
            onClick={() => setIsOpen(false)}
          />

          <aside
            className="mobile-drawer"
            aria-label="Navigasi mobile"
            aria-modal="true"
            role="dialog"
          >
            <div className="mobile-drawer-header">
              <BrandLogo onClick={() => setIsOpen(false)} />
              <button
                type="button"
                className="drawer-close"
                aria-label="Tutup menu"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </div>

            <nav className="mobile-drawer-nav">
              {menuItems.map((item, index) => (
                <Link
                  href={item.href}
                  key={item.label}
                  onClick={() => setIsOpen(false)}
                  className="mobile-nav-link"
                >
                  <span>0{index + 1}</span>
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mobile-drawer-bottom">
              <RegisterButton
                label="Isi Form Pendaftaran"
                className="mobile-register-button"
              />
              <WhatsAppButton
                label="Konsultasi via WhatsApp"
                className="mobile-whatsapp-button"
              />
              <a
                href="https://www.instagram.com/cendekiaksara.id_/"
                target="_blank"
                rel="noreferrer"
                className="mobile-instagram-link"
              >
                Instagram resmi ↗
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
