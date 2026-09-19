"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Apakah CendikiAksara menyediakan jasa joki?",
    answer:
      "Tidak. CendikiAksara tidak menulis naskah peserta. Kami membantu membedah gagasan, menyusun arah tulisan, menguji argumen, memeriksa sumber, dan memberikan feedback agar peserta dapat mengembangkan naskahnya sendiri.",
  },
  {
    question: "Apakah saya harus sudah memiliki ide?",
    answer:
      "Tidak selalu. Untuk Pendampingan Terstruktur, peserta dapat mulai dari isu atau topik umum. Pembimbing akan membantu mengarahkan isu tersebut menjadi masalah yang lebih spesifik dan gagasan yang konkret.",
  },
  {
    question: "Apakah saya harus sudah memiliki draft?",
    answer:
      "Tergantung layanan yang dipilih. Cek Naskah membutuhkan draft karena layanan ini berfokus pada pemeriksaan naskah. Sementara itu, Pendampingan Terstruktur dapat dimulai dari tahap ide.",
  },
  {
    question: "Apakah CendikiAksara menjamin saya menang lomba?",
    answer:
      "Tidak. CendikiAksara tidak menjamin kemenangan dalam lomba. Kami membantu meningkatkan kesiapan naskah melalui bedah juknis, penguatan gagasan, verifikasi sumber, revisi, dan simulasi penilaian.",
  },
  {
    question: "Bagaimana sistem pendampingannya?",
    answer:
      "Pendampingan dilakukan secara 1-on-1. Peserta mengikuti sesi Meet, mengerjakan tugas atau revisi, lalu mendapatkan arahan dan feedback dari pembimbing sesuai paket yang dipilih.",
  },
  {
    question: "Apakah saya bisa memilih jadwal sendiri?",
    answer:
      "Peserta pendampingan 4 minggu dapat memilih slot yang tersedia. Setelah memilih slot, peserta perlu menggunakan slot yang sama selama masa pendampingan.",
  },
  {
    question: "Apakah tersedia revisi tanpa batas?",
    answer:
      "Tidak. Setiap layanan memiliki ketentuan revisi yang berbeda. Pendampingan Satu Lomba memiliki maksimal tiga putaran revisi luar sesi, sedangkan paket lainnya mengikuti fasilitas yang tercantum pada deskripsi layanan.",
  },
  {
    question: "Bagaimana kebijakan pembatalan dan refund?",
    answer:
      "Pembatalan minimal H-7 mendapatkan pengembalian dana sebesar 80%. Pembatalan H-6 sampai H-3 mendapatkan pengembalian sebesar 50%. Pembatalan pada H-2 atau lebih dekat tidak mendapatkan pengembalian dana.",
  },
  {
    question: "Apa yang perlu saya siapkan?",
    answer:
      "Siapkan informasi mengenai kebutuhanmu, target tulisan, deadline, juknis lomba atau tugas jika ada, serta draft atau sumber awal jika sudah tersedia.",
  },
];

export default function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleFAQ(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
            key={faq.question}
          >
            <button
              type="button"
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span>{faq.question}</span>
              <span className="faq-toggle" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div
              id={`faq-answer-${index}`}
              className="faq-answer"
              hidden={!isOpen}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
