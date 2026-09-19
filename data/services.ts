export type Service = {
  slug: string;
  label: string;
  title: string;
  shortDescription: string;
  price: string;
  earlyBird?: string;
  duration: string;
  badge?: string;
  features: string[];
  suitableFor: string[];
};

export const services: Service[] = [
  {
    slug: "cek-naskah",
    label: "TANPA MEET",
    title: "Cek Naskah",
    shortDescription:
      "Pemeriksaan naskah dengan catatan tertulis berbasis kriteria penilaian.",
    price: "Mulai Rp99.000",
    earlyBird: "Early bird mulai Rp89.100",
    duration: "Selesai maksimal 3 hari kerja",
    badge: "Praktis",
    features: [
      "1 kali pembacaan naskah",
      "Lembar kriteria penilaian",
      "Catatan tertulis yang terarah",
      "Untuk naskah maksimal 15 halaman",
      "Tanpa penulisan ulang oleh pembimbing",
    ],
    suitableFor: [
      "Peserta yang sudah memiliki draft",
      "Peserta yang membutuhkan pemeriksaan cepat",
      "Naskah maksimal 15 halaman",
    ],
  },
  {
    slug: "pendampingan-terstruktur",
    label: "4 MINGGU",
    title: "Pendampingan Terstruktur",
    shortDescription:
      "Pendampingan dengan kurikulum tetap untuk membangun naskah secara bertahap.",
    price: "Rp549.000",
    earlyBird: "Early bird Rp477.630",
    duration: "4 sesi Meet selama 4 minggu",
    badge: "Paling Terstruktur",
    features: [
      "4 sesi Meet selama 60–90 menit",
      "Kurikulum pendampingan tetap",
      "Bedah juknis dan gagasan",
      "Verifikasi sumber dan data",
      "Bedah akhir dan simulasi penilaian",
      "Chat untuk klarifikasi tugas",
    ],
    suitableFor: [
      "Peserta pemula",
      "Peserta yang belum memiliki alur kerja",
      "Peserta yang ingin belajar proses menulis",
    ],
  },
  {
    slug: "pendampingan-satu-lomba",
    label: "PROGRES NASKAH",
    title: "Pendampingan Satu Lomba",
    shortDescription:
      "Pendampingan fleksibel berdasarkan satu lomba dan satu naskah spesifik.",
    price: "Rp749.000",
    earlyBird: "Early bird Rp651.630",
    duration: "4 sesi Meet",
    badge: "Intensif",
    features: [
      "4 sesi Meet",
      "Kurikulum mengikuti progres naskah",
      "Chat interaktif pukul 16.00–21.00",
      "Maksimal 3 putaran revisi luar sesi",
      "Bedah hingga naskah siap dikirim",
    ],
    suitableFor: [
      "Peserta yang sudah memiliki target lomba",
      "Peserta dengan deadline tertentu",
      "Peserta yang membutuhkan pendampingan intensif",
    ],
  },
  {
    slug: "layanan-laporan-akademik",
    label: "AKADEMIK",
    title: "Layanan Laporan Akademik",
    shortDescription:
      "Konsultasi, feedback, struktur, dan proofreading untuk kebutuhan akademik.",
    price: "Mulai Rp89.000",
    duration: "Menyesuaikan jenis layanan",
    features: [
      "Konsultasi kerangka atau arah tugas",
      "Feedback naskah maksimal 10 halaman",
      "Editing dan proofreading",
      "Penyusunan struktur atau kerangka",
    ],
    suitableFor: ["Laporan tugas", "Makalah", "Proposal", "Naskah akademik"],
  },
];
