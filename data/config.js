/* =====================================================================
   KONFIGURASI JADWAL & COUNTDOWN
   ---------------------------------------------------------------------
   CARA MENGAKTIFKAN COUNTDOWN (saat tanggal resmi sudah keluar):
   1. Ubah "active" menjadi true.
   2. Isi "date" dengan tanggal-jam resmi format: 'YYYY-MM-DDTHH:mm:ss'
      Contoh dibuka 1 September 2026 jam 08:00 -> '2026-09-01T08:00:00'
   3. (Opsional) ubah "label" sesuai acara.
   Selama "active" masih false, kartu countdown menampilkan status
   "Menunggu jadwal resmi" — JUJUR, tidak memasang tanggal palsu.

   STATUS PER 19 JUNI 2026: belum ada tanggal resmi dari BKN maupun BI.
   ===================================================================== */
window.EXAM_DB = window.EXAM_DB || {};
window.EXAM_DB.config = {
  countdowns: [
    {
      examId: 'cpns',
      label: 'Pendaftaran CPNS 2026',
      active: false,                 // <- ubah ke true saat tanggal resmi rilis
      date: '2026-09-01T08:00:00',   // <- ganti dengan tanggal resmi
      source: { label: 'Cek resmi: sscasn.bkn.go.id', url: 'https://sscasn.bkn.go.id' },
      note: 'Belum ada tanggal resmi. BKN mengimbau hanya mengacu pada kanal resmi.'
    },
    {
      examId: 'pcpm',
      label: 'Rekrutmen PCPM Bank Indonesia 2026',
      active: false,                 // <- ubah ke true saat tanggal resmi rilis
      date: '2026-09-01T08:00:00',   // <- ganti dengan tanggal resmi
      source: { label: 'Cek resmi: pcpmbi.rekrutmenbi.id', url: 'https://pcpmbi.rekrutmenbi.id' },
      note: 'Belum ada tanggal resmi. Pengumuman hanya melalui kanal resmi Bank Indonesia.'
    }
  ]
};
