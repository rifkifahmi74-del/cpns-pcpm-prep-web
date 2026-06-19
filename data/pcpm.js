/* =====================================================================
   BANK SOAL & MATERI — PCPM Bank Indonesia
   ---------------------------------------------------------------------
   Acuan tahapan & materi: pola seleksi PCPM BI (Tes Potensi Dasar →
   Pengetahuan Umum/Kebanksentralan + Bahasa Inggris → Psikotes/MMPI →
   Wawancara psikiater → Medical → Board Interview).
   Info resmi: pcpmbi.rekrutmenbi.id.
   Soal di bawah = SOAL LATIHAN yang meniru format & materi (soal asli
   bersifat rahasia). Fakta kebanksentralan diverifikasi per Juni 2026.

   Skema soal sama dengan CPNS:
   - { t:'mc', q, o:[opsi], a:indexBenar, e:pembahasan }
   ===================================================================== */
window.EXAM_DB = window.EXAM_DB || {};
window.EXAM_DB.pcpm = {
  id: 'pcpm',
  name: 'PCPM Bank Indonesia',
  short: 'PCPM · BI',
  tagline: 'Tes Potensi Dasar • Kebanksentralan & Ekonomi • Bahasa Inggris',
  accent: '#bf5af2',
  official: { label: 'pcpmbi.rekrutmenbi.id', url: 'https://pcpmbi.rekrutmenbi.id' },
  exam: {
    totalSoal: 90,
    durationMin: 90,
    maxScore: 0, // skor berbasis benar (5/soal) — dihitung dinamis
    passing: null,
    note: 'PCPM BI memakai sistem gugur bertahap (passing dinamis & kompetitif). Latihan ini fokus pada penguasaan materi tiap tahap, bukan ambang batas baku.'
  },
  categories: [
    /* ===================== TES POTENSI DASAR ===================== */
    {
      id: 'tpd',
      name: 'Tes Potensi Dasar (TPD)',
      short: 'TPD',
      jumlahSoal: 30,
      icon: '🧩',
      passing: null,
      desc: 'Kemampuan verbal, numerik, dan figural untuk mengukur potensi akademik & penalaran.',
      material: `
        <h3>Tentang Tes Potensi Dasar</h3>
        <p>TPD (sering disebut juga TPA — Tes Potensi Akademik) mengukur <b>kapasitas intelektual</b>: kemampuan <b>verbal</b> (bahasa), <b>numerik</b> (angka), dan <b>figural</b> (pola visual). Ini gerbang awal — bobotnya besar dan kompetitif.</p>
        <h3>1. Verbal</h3>
        <ul>
          <li><b>Sinonim/antonim</b>, <b>analogi</b>, <b>pengelompokan kata</b>, dan <b>pemahaman bacaan</b>.</li>
          <li>Perbanyak kosakata ekonomi & umum; baca berita/artikel rutin.</li>
        </ul>
        <h3>2. Numerik</h3>
        <ul>
          <li><b>Deret angka</b>, <b>aritmetika sosial</b> (persen, untung-rugi, bunga), <b>perbandingan</b>, dan <b>soal cerita</b>.</li>
          <li>Kuasai persentase & bunga — relevan dengan konteks BI.</li>
        </ul>
        <h3>3. Figural / Penalaran</h3>
        <p>Pola gambar, hubungan ruang, dan penalaran logis (silogisme, analitis).</p>
        <p class="tip">💡 TPD = adu kecepatan + akurasi. Latih manajemen waktu: lewati soal sulit, kembali di akhir.</p>
      `,
      questions: [
        { t:'mc', q:'ANALOGI — INFLASI : HARGA = APRESIASI : …', o:['Pajak','Nilai mata uang','Pengangguran','Suku bunga','Produksi'], a:1, e:'Inflasi adalah kondisi naiknya harga secara umum. Apresiasi adalah kondisi naiknya nilai (mata uang). Keduanya menggambarkan "kenaikan" pada objeknya.' },
        { t:'mc', q:'SINONIM — "MONETER" berkaitan erat dengan…', o:['Perdagangan','Keuangan/uang','Industri','Pertanian','Hukum'], a:1, e:'Moneter berkaitan dengan keuangan/uang dan peredarannya — ranah utama kebijakan bank sentral.' },
        { t:'mc', q:'ANTONIM — lawan kata "SURPLUS" adalah…', o:['Untung','Lebih','Defisit','Seimbang','Stabil'], a:2, e:'Surplus = kelebihan (penerimaan > pengeluaran). Lawannya defisit = kekurangan (pengeluaran > penerimaan).' },
        { t:'mc', q:'DERET — 5, 10, 20, 40, 80, … suku berikutnya…', o:['100','120','160','140','200'], a:2, e:'Pola dikali 2: 80 × 2 = 160.' },
        { t:'mc', q:'DERET — 100, 90, 81, 73, 66, … suku berikutnya…', o:['58','59','60','61','62'], a:2, e:'Selisih berkurang 1: −10, −9, −8, −7, lalu −6. 66 − 6 = 60.' },
        { t:'mc', q:'BUNGA — Tabungan Rp10.000.000 berbunga 6% per tahun. Bunga selama 1 tahun adalah…', o:['Rp300.000','Rp450.000','Rp600.000','Rp750.000','Rp900.000'], a:2, e:'Bunga = 6% × 10.000.000 = 600.000 per tahun.' },
        { t:'mc', q:'PERSEN — Harga barang naik dari Rp200.000 menjadi Rp250.000. Kenaikannya…', o:['20%','25%','30%','40%','50%'], a:1, e:'Kenaikan = 50.000/200.000 × 100% = 25%.' },
        { t:'mc', q:'SILOGISME — Semua kebijakan moneter memengaruhi inflasi. Suku bunga acuan adalah kebijakan moneter. Maka…', o:['Suku bunga acuan tidak terkait inflasi','Suku bunga acuan memengaruhi inflasi','Inflasi menentukan kebijakan','Sebagian kebijakan tak berpengaruh','Tidak dapat disimpulkan'], a:1, e:'Semua A memengaruhi B; X adalah A → X memengaruhi B. Suku bunga acuan memengaruhi inflasi.' },
        { t:'mc', q:'ARITMETIKA — Jika 5 ekonom menulis 5 laporan dalam 5 hari, berapa laporan yang ditulis 10 ekonom dalam 10 hari (laju sama)?', o:['10','20','25','15','50'], a:1, e:'1 ekonom menulis 1 laporan/5 hari. 10 ekonom dalam 10 hari = 10 × 2 = 20 laporan.' },
        { t:'mc', q:'PERBANDINGAN — Rasio ekspor : impor = 7 : 5, total nilai Rp120 triliun. Nilai ekspor…', o:['Rp50 triliun','Rp60 triliun','Rp70 triliun','Rp75 triliun','Rp84 triliun'], a:2, e:'Total bagian = 12; 1 bagian = 120/12 = 10 triliun. Ekspor = 7 × 10 = Rp70 triliun.' },
        { t:'mc', q:'DERET HURUF — B, D, G, K, P, … huruf berikutnya…', o:['U','V','W','X','T'], a:1, e:'Selisih posisi bertambah: B(+2)D(+3)G(+4)K(+5)P(+6)V. Huruf berikutnya V.' },
        { t:'mc', q:'PENALARAN — Jika nilai tukar Rupiah melemah, maka harga barang impor cenderung…', o:['Turun','Naik','Tetap','Hilang','Tidak terpengaruh'], a:1, e:'Rupiah melemah → butuh lebih banyak Rupiah untuk membeli mata uang asing → harga barang impor (dalam Rupiah) cenderung naik.' },
        { t:'mc', q:'PECAHAN/PERSEN — 0,75 setara dengan…', o:['7,5%','75%','0,75%','750%','3/5'], a:1, e:'0,75 = 75/100 = 75%.' },
        { t:'mc', q:'SOAL CERITA — PDB tumbuh 5% lalu tahun berikutnya tumbuh 5% lagi. Pertumbuhan kumulatif 2 tahun mendekati…', o:['10%','10,25%','11%','9,75%','5%'], a:1, e:'(1,05 × 1,05) − 1 = 1,1025 − 1 = 0,1025 = 10,25% (efek bunga majemuk).' },
        { t:'mc', q:'ANALOGI — BANK : KREDIT = SEKOLAH : …', o:['Murid','Guru','Pendidikan','Gedung','Ijazah'], a:2, e:'Bank menyalurkan kredit (output/layanan utamanya). Sekolah menyalurkan pendidikan. Murid=penerima, guru=pelaku.' },
        { t:'mc', q:'SINONIM — "STAGNAN" bermakna…', o:['Meningkat pesat','Macet/tidak bergerak','Menurun tajam','Berfluktuasi','Stabil tumbuh'], a:1, e:'Stagnan = berhenti, tidak bergerak/berkembang (mis. ekonomi stagnan).' },
        { t:'mc', q:'ANTONIM — lawan kata "EKSPANSIF" (dalam ekonomi) adalah…', o:['Agresif','Kontraktif','Progresif','Inflatif','Ekspansi'], a:1, e:'Kebijakan ekspansif (mendorong/memperluas) berlawanan dengan kontraktif (menahan/mengetatkan).' },
        { t:'mc', q:'DERET — 2, 6, 12, 20, 30, … suku berikutnya…', o:['36','40','42','44','48'], a:2, e:'Selisih bertambah 2: +4,+6,+8,+10, lalu +12. 30 + 12 = 42. (Pola n²+n.)' },
        { t:'mc', q:'BUNGA MAJEMUK — Deposito Rp10.000.000 berbunga 10%/tahun (majemuk). Saldo setelah 2 tahun…', o:['Rp11.000.000','Rp12.000.000','Rp12.100.000','Rp12.000.001','Rp11.100.000'], a:2, e:'Tahun 1: 10jt × 1,1 = 11jt. Tahun 2: 11jt × 1,1 = 12,1jt → Rp12.100.000.' },
        { t:'mc', q:'PERSEN — Sebuah bank memberi bunga 6% per tahun. Agar memperoleh bunga Rp900.000 dalam setahun, dana yang harus didepositokan…', o:['Rp12.000.000','Rp13.500.000','Rp15.000.000','Rp16.500.000','Rp18.000.000'], a:2, e:'Pokok = bunga ÷ rate = 900.000 ÷ 0,06 = Rp15.000.000.' },
        { t:'mc', q:'LOGIKA — Semua karyawan teladan mendapat bonus. Sebagian karyawan teladan adalah pegawai baru. Maka pasti…', o:['Semua pegawai baru mendapat bonus','Sebagian pegawai baru mendapat bonus','Tidak ada pegawai baru yang dapat bonus','Semua yang dapat bonus adalah pegawai baru','Pegawai baru tidak teladan'], a:1, e:'Sebagian karyawan teladan = pegawai baru, dan semua karyawan teladan dapat bonus → sebagian pegawai baru (yang teladan) pasti dapat bonus.' },
        { t:'mc', q:'ANALITIS — Lima kota A, B, C, D, E. B lebih jauh dari A. C lebih dekat dari A. D paling jauh. E di antara A dan B. Urutan dari terdekat…', o:['C, A, E, B, D','A, C, E, B, D','C, A, B, E, D','C, E, A, B, D','A, C, B, E, D'], a:0, e:'C terdekat (< A), lalu A, lalu E (antara A dan B), lalu B, dan D terjauh → C, A, E, B, D.' },
        { t:'mc', q:'RATA-RATA — Nilai rata-rata 4 ujian adalah 80. Berapa nilai ujian ke-5 agar rata-rata menjadi 82?', o:['86','88','90','92','84'], a:2, e:'Total 4 ujian = 320. Agar rata-rata 5 ujian = 82, total harus 410. Nilai ke-5 = 410 − 320 = 90.' },
        { t:'mc', q:'ANALOGI — TERMOMETER : SUHU = BAROMETER : …', o:['Cuaca','Tekanan udara','Ketinggian','Angin','Kelembapan'], a:1, e:'Termometer mengukur suhu; barometer mengukur tekanan udara.' },
        { t:'mc', q:'PROPORSI — Jika 3 mesin mencetak 600 lembar dalam 4 menit, berapa lembar dicetak 5 mesin dalam 6 menit (laju sama)?', o:['1.200','1.500','1.800','2.000','750'], a:1, e:'1 mesin: 600/(3×4)=50 lembar/menit. 5 mesin × 6 menit × 50 = 1.500 lembar.' },
        { t:'fig', q:'FIGURAL — Perhatikan pola jumlah sisi bangun (segitiga, segi-4, segi-5). Bangun manakah yang melanjutkan pola?',
          img:'<svg viewBox="0 0 440 92" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="var(--text)" stroke-width="3"><g transform="translate(0,0)"><polygon points="50,15 75.98,60 24.02,60"/></g><g transform="translate(110,0)"><polygon points="50,15 80,45 50,75 20,45"/></g><g transform="translate(220,0)"><polygon points="50,15 78.53,35.73 67.63,69.27 32.37,69.27 21.47,35.73"/></g><text x="385" y="55" font-size="46" fill="var(--muted)" stroke="none" text-anchor="middle">?</text></svg>',
          o:[
            '<svg viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="var(--text)" stroke-width="3"><polygon points="50,15 75.98,30 75.98,60 50,75 24.02,60 24.02,30"/></svg>',
            '<svg viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="var(--text)" stroke-width="3"><polygon points="50,15 78.53,35.73 67.63,69.27 32.37,69.27 21.47,35.73"/></svg>',
            '<svg viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="var(--text)" stroke-width="3"><polygon points="50,15 80,45 50,75 20,45"/></svg>',
            '<svg viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="var(--text)" stroke-width="3"><polygon points="50,15 73.45,26.30 79.25,51.68 63.02,72.03 36.98,72.03 20.75,51.68 26.55,26.30"/></svg>'
          ], a:0, e:'Jumlah sisi bertambah satu tiap langkah: 3 → 4 → 5 → seharusnya 6. Maka jawabannya adalah segi-6 (heksagon).' },
        { t:'fig', q:'FIGURAL — Titik berputar berlawanan arah jarum jam. Gambar manakah yang melanjutkan pola?',
          img:'<svg viewBox="0 0 440 84" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="var(--text)" stroke-width="3"><g transform="translate(0,0)"><rect x="18" y="10" width="60" height="60" rx="6"/><circle cx="18" cy="10" r="7" fill="var(--text)" stroke="none"/></g><g transform="translate(110,0)"><rect x="18" y="10" width="60" height="60" rx="6"/><circle cx="18" cy="70" r="7" fill="var(--text)" stroke="none"/></g><g transform="translate(220,0)"><rect x="18" y="10" width="60" height="60" rx="6"/><circle cx="78" cy="70" r="7" fill="var(--text)" stroke="none"/></g><text x="378" y="52" font-size="46" fill="var(--muted)" stroke="none" text-anchor="middle">?</text></svg>',
          o:[
            '<svg viewBox="0 0 100 84" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="var(--text)" stroke-width="3"><rect x="18" y="10" width="60" height="60" rx="6"/><circle cx="78" cy="10" r="7" fill="var(--text)" stroke="none"/></svg>',
            '<svg viewBox="0 0 100 84" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="var(--text)" stroke-width="3"><rect x="18" y="10" width="60" height="60" rx="6"/><circle cx="18" cy="10" r="7" fill="var(--text)" stroke="none"/></svg>',
            '<svg viewBox="0 0 100 84" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="var(--text)" stroke-width="3"><rect x="18" y="10" width="60" height="60" rx="6"/><circle cx="18" cy="70" r="7" fill="var(--text)" stroke="none"/></svg>',
            '<svg viewBox="0 0 100 84" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="var(--text)" stroke-width="3"><rect x="18" y="10" width="60" height="60" rx="6"/><circle cx="78" cy="70" r="7" fill="var(--text)" stroke="none"/></svg>'
          ], a:0, e:'Berlawanan arah jarum jam: kiri-atas → kiri-bawah → kanan-bawah → seharusnya kanan-atas. Jawaban: titik di sudut kanan-atas.' }
      ]
    },

    /* ============ KEBANKSENTRALAN & EKONOMI ============ */
    {
      id: 'eko',
      name: 'Kebanksentralan & Ekonomi',
      short: 'Kebanksentralan',
      jumlahSoal: 30,
      icon: '🏦',
      passing: null,
      desc: 'Tugas & kebijakan Bank Indonesia, kebijakan moneter, sistem pembayaran (QRIS, BI-FAST, Digital Rupiah), dan isu ekonomi terkini.',
      material: `
        <h3>Bank Indonesia secara singkat</h3>
        <p>Bank Indonesia (BI) adalah <b>bank sentral Republik Indonesia</b> yang bersifat <b>independen</b>, dilandasi UU No. 23 Tahun 1999 (diubah beberapa kali, terakhir terdampak <b>UU P2SK No. 4 Tahun 2023</b>).</p>
        <h3>Tujuan BI (diperluas oleh UU P2SK 2023)</h3>
        <p>Mencapai <b>stabilitas nilai Rupiah</b>, turut menjaga <b>stabilitas sistem keuangan</b>, serta turut menjaga <b>stabilitas sistem pembayaran</b> — dalam rangka mendukung <b>pertumbuhan ekonomi berkelanjutan</b>.</p>
        <h3>Tiga tugas utama (pilar)</h3>
        <ol>
          <li><b>Kebijakan moneter</b> — menetapkan & melaksanakan kebijakan moneter (instrumen utama: suku bunga acuan, kini disebut <b>BI-Rate</b> sejak 2024; sebelumnya BI 7-Day Reverse Repo Rate).</li>
          <li><b>Sistem pembayaran</b> — mengatur & menjaga kelancaran sistem pembayaran (mis. <b>BI-FAST</b>, <b>QRIS</b>, <b>GPN</b>).</li>
          <li><b>Stabilitas sistem keuangan</b> — kebijakan <b>makroprudensial</b>. (Catatan: pengawasan bank secara <b>mikroprudensial</b> sejak 2013/2014 berada di <b>OJK</b>.)</li>
        </ol>
        <h3>Istilah & fakta penting</h3>
        <ul>
          <li><b>Target inflasi</b> nasional: <b>2,5% ± 1%</b>.</li>
          <li><b>QRIS</b> (Quick Response Code Indonesian Standard): standar QR pembayaran nasional, efektif <b>1 Januari 2020</b>.</li>
          <li><b>Digital Rupiah</b> (Proyek Garuda): pengembangan mata uang digital bank sentral / <b>CBDC</b> oleh BI.</li>
          <li><b>BI-FAST</b>: infrastruktur pembayaran ritel real-time, diluncurkan Desember 2021.</li>
          <li>Gubernur BI saat ini: <b>Perry Warjiyo</b>.</li>
          <li>Inflasi = kenaikan harga umum & terus-menerus; deflasi = kebalikannya.</li>
          <li>Kebijakan moneter <b>kontraktif</b> (menaikkan suku bunga) menahan inflasi; <b>ekspansif</b> (menurunkan suku bunga) mendorong pertumbuhan.</li>
        </ul>
        <p class="tip">💡 Ikuti rilis terbaru BI (Rapat Dewan Gubernur/RDG bulanan) untuk angka suku bunga & inflasi terkini.</p>
      `,
      questions: [
        { t:'mc', q:'Tujuan Bank Indonesia sebagaimana diperluas melalui UU P2SK (UU No. 4 Tahun 2023) mencakup hal berikut, KECUALI…', o:['Mencapai stabilitas nilai Rupiah','Turut menjaga stabilitas sistem keuangan','Turut menjaga stabilitas sistem pembayaran','Mengawasi bank secara mikroprudensial','Mendukung pertumbuhan ekonomi berkelanjutan'], a:3, e:'Pengawasan bank secara mikroprudensial dialihkan ke OJK sejak 2013/2014. Tujuan BI berfokus pada stabilitas nilai Rupiah, sistem keuangan, dan sistem pembayaran untuk mendukung pertumbuhan berkelanjutan.' },
        { t:'mc', q:'Sejak 2024, suku bunga acuan kebijakan moneter Bank Indonesia disebut…', o:['BI Rate (lama)','BI 7-Day Reverse Repo Rate','BI-Rate','SBI Rate','Lending Facility Rate'], a:2, e:'Sejak 2024 BI mengubah nama suku bunga acuannya dari BI 7-Day (Reverse) Repo Rate menjadi "BI-Rate" sebagai sinyal stance kebijakan moneter.' },
        { t:'mc', q:'QRIS, standar QR pembayaran nasional yang ditetapkan Bank Indonesia, mulai berlaku efektif secara nasional pada…', o:['1 Januari 2018','1 Januari 2019','1 Januari 2020','17 Agustus 2019','1 Juli 2021'], a:2, e:'QRIS diumumkan pada 2019 dan berlaku efektif secara nasional sejak 1 Januari 2020 untuk menyatukan beragam QR pembayaran menjadi satu standar.' },
        { t:'mc', q:'Pengembangan mata uang digital bank sentral (CBDC) oleh Bank Indonesia dikenal dengan nama…', o:['Proyek Garuda (Digital Rupiah)','e-Money','LinkAja','Proyek Nusantara','Rupiah Kripto'], a:0, e:'BI mengembangkan Rupiah Digital melalui "Proyek Garuda" sebagai bentuk Central Bank Digital Currency (CBDC) resmi negara, berbeda dengan uang elektronik swasta atau kripto.' },
        { t:'mc', q:'Untuk menahan laju inflasi yang tinggi, kebijakan moneter yang umumnya ditempuh bank sentral adalah…', o:['Menurunkan suku bunga acuan','Menaikkan suku bunga acuan','Mencetak uang lebih banyak','Menurunkan giro wajib minimum','Membeli surat berharga besar-besaran'], a:1, e:'Kebijakan moneter kontraktif: menaikkan suku bunga acuan untuk mengurangi jumlah uang beredar dan menekan permintaan, sehingga inflasi tertahan.' },
        { t:'mc', q:'Lembaga yang sejak 2013/2014 mengambil alih fungsi pengawasan bank (mikroprudensial) dari Bank Indonesia adalah…', o:['Kementerian Keuangan','OJK','LPS','BPK','Bappenas'], a:1, e:'Otoritas Jasa Keuangan (OJK) mengambil alih pengawasan perbankan dari BI. BI tetap memegang kebijakan makroprudensial.' },
        { t:'mc', q:'Target inflasi nasional yang menjadi acuan kebijakan Bank Indonesia adalah sekitar…', o:['1% ± 1%','2,5% ± 1%','5% ± 1%','7% ± 1%','10% ± 2%'], a:1, e:'Target inflasi yang ditetapkan adalah 2,5% ± 1%, menjadi jangkar kebijakan moneter BI.' },
        { t:'mc', q:'Infrastruktur sistem pembayaran ritel yang memungkinkan transfer antarbank real-time 24/7 dengan biaya rendah, diluncurkan BI akhir 2021, adalah…', o:['SKNBI','RTGS','BI-FAST','GPN','SWIFT'], a:2, e:'BI-FAST (BI Fast Payment) diluncurkan Desember 2021 untuk transfer ritel real-time, murah, dan tersedia setiap saat — melengkapi SKNBI dan BI-RTGS.' },
        { t:'mc', q:'Sifat kelembagaan Bank Indonesia menurut undang-undang adalah…', o:['Bagian dari kementerian','Lembaga negara yang independen','BUMN','Lembaga di bawah DPR','Bank komersial pemerintah'], a:1, e:'BI adalah lembaga negara yang independen dalam menjalankan tugasnya, bebas dari campur tangan pihak lain kecuali untuk hal yang diatur undang-undang.' },
        { t:'mc', q:'Kebijakan makroprudensial yang menjadi kewenangan BI bertujuan utama untuk…', o:['Mengawasi kesehatan satu bank tertentu','Menjaga stabilitas sistem keuangan secara menyeluruh','Menentukan suku bunga deposito tiap bank','Menetapkan pajak perbankan','Memberi izin pendirian bank'], a:1, e:'Makroprudensial berfokus pada stabilitas sistem keuangan secara agregat (mencegah risiko sistemik), berbeda dengan mikroprudensial (kesehatan bank individual) yang ada di OJK.' },
        { t:'mc', q:'Apabila Rupiah mengalami depresiasi terhadap dolar AS, dampak yang paling mungkin adalah…', o:['Harga barang impor turun','Daya saing ekspor menurun','Beban utang luar negeri dalam Rupiah meningkat','Inflasi pasti turun','Cadangan devisa bertambah otomatis'], a:2, e:'Depresiasi Rupiah membuat utang/luar negeri dalam denominasi asing menjadi lebih mahal saat dikonversi ke Rupiah. Ekspor justru cenderung lebih kompetitif, dan impor lebih mahal (berisiko menambah inflasi).' },
        { t:'mc', q:'Salah satu fungsi Bank Indonesia sebagai "lender of last resort" berarti BI dapat…', o:['Memberi pinjaman kepada masyarakat umum','Memberi pinjaman darurat jangka pendek kepada bank yang mengalami kesulitan likuiditas','Mencetak uang tanpa batas','Mengambil alih kepemilikan bank','Menjamin seluruh dana nasabah'], a:1, e:'Sebagai lender of last resort, BI dapat memberikan bantuan likuiditas jangka pendek kepada bank yang sehat namun mengalami kesulitan likuiditas sementara, demi menjaga stabilitas sistem keuangan. Penjaminan dana nasabah adalah tugas LPS.' },
        { t:'mc', q:'Instrumen yang dipakai BI untuk memengaruhi jumlah uang beredar dengan jual-beli surat berharga di pasar disebut…', o:['Politik diskonto','Operasi Pasar Terbuka (OPT)','Giro Wajib Minimum','Imbauan moral','Kebijakan fiskal'], a:1, e:'Operasi Pasar Terbuka (OPT/Open Market Operation): BI menjual/membeli surat berharga (mis. SBI/SRBI) untuk menyerap atau menambah likuiditas. Kebijakan fiskal adalah ranah pemerintah, bukan BI.' },
        { t:'mc', q:'"Inflasi" dalam ilmu ekonomi paling tepat didefinisikan sebagai…', o:['Kenaikan harga satu barang tertentu','Kenaikan harga barang & jasa secara umum dan terus-menerus','Penurunan nilai ekspor','Kelangkaan barang','Kenaikan jumlah penduduk'], a:1, e:'Inflasi = kecenderungan kenaikan harga barang dan jasa secara umum dan terus-menerus dalam periode tertentu, yang menurunkan daya beli uang.' },
        { t:'mc', q:'Lembaga yang menjamin simpanan nasabah di perbankan Indonesia adalah…', o:['Bank Indonesia','OJK','LPS (Lembaga Penjamin Simpanan)','BPK','Kemenkeu'], a:2, e:'LPS menjamin simpanan nasabah hingga batas tertentu. Ini berbeda dari peran BI (moneter & makroprudensial) dan OJK (pengawasan).' },
        { t:'mc', q:'Kebijakan fiskal merupakan kewenangan…', o:['Bank Indonesia','Pemerintah (melalui APBN, pajak, dan belanja negara)','OJK','LPS','DPR semata'], a:1, e:'Kebijakan fiskal (pajak, belanja, APBN) adalah ranah pemerintah/Kementerian Keuangan. Kebijakan moneter adalah ranah Bank Indonesia.' },
        { t:'mc', q:'Inflasi yang disebabkan kenaikan biaya produksi (mis. kenaikan harga bahan baku/energi) disebut…', o:['Demand-pull inflation','Cost-push inflation','Imported inflation','Core inflation','Hyperinflation'], a:1, e:'Cost-push inflation: harga naik karena biaya produksi meningkat. Demand-pull: karena permintaan agregat melebihi penawaran.' },
        { t:'mc', q:'Salah satu instrumen kebijakan moneter berupa kewajiban bank menyimpan sebagian dana di BI disebut…', o:['Operasi Pasar Terbuka','Giro Wajib Minimum (GWM)','Fasilitas diskonto','Imbauan moral','Kredit likuiditas'], a:1, e:'GWM (Giro Wajib Minimum) adalah persentase dana pihak ketiga yang wajib disimpan bank di BI. Menaikkan GWM mengurangi likuiditas, menurunkannya menambah likuiditas.' },
        { t:'mc', q:'Sistem nilai tukar yang dianut Indonesia saat ini adalah…', o:['Tetap (fixed)','Mengambang bebas tanpa intervensi','Mengambang (free floating) dengan ruang intervensi BI bila perlu','Dipatok ke emas','Dipatok ke dolar AS'], a:2, e:'Indonesia menganut sistem nilai tukar mengambang; BI dapat melakukan intervensi/stabilisasi (managed floating) untuk meredam volatilitas berlebihan.' },
        { t:'mc', q:'Sekuritas yang diterbitkan Bank Indonesia sejak 2023 sebagai instrumen operasi moneter pengganti adalah…', o:['SBN','SRBI (Sekuritas Rupiah Bank Indonesia)','SUN','Obligasi Ritel','Sukuk Negara'], a:1, e:'SRBI (Sekuritas Rupiah Bank Indonesia) diterbitkan BI sejak 2023 sebagai instrumen operasi moneter untuk pengelolaan likuiditas dan pendalaman pasar uang.' },
        { t:'mc', q:'Komite Stabilitas Sistem Keuangan (KSSK) beranggotakan…', o:['BI, OJK, LPS, dan Kementerian Keuangan','BI dan OJK saja','BI, BPK, dan DPR','OJK dan LPS saja','Presiden dan BI'], a:0, e:'KSSK terdiri atas Menteri Keuangan (koordinator), Gubernur BI, Ketua Dewan Komisioner OJK, dan Ketua Dewan Komisioner LPS — untuk menjaga stabilitas sistem keuangan & mencegah krisis.' },
        { t:'mc', q:'Uang kartal terdiri atas…', o:['Cek dan giro','Uang kertas dan uang logam','Tabungan dan deposito','Saldo e-wallet','Surat berharga'], a:1, e:'Uang kartal = uang kertas dan logam yang beredar di masyarakat. Uang giral = simpanan yang dapat ditarik dengan cek/giro/transfer.' },
        { t:'mc', q:'Apabila Bank Indonesia menurunkan suku bunga acuan, dampak yang umumnya diharapkan adalah…', o:['Kredit melambat dan investasi turun','Kredit & investasi meningkat sehingga mendorong pertumbuhan ekonomi','Inflasi pasti turun drastis','Nilai tukar pasti menguat','Tabungan masyarakat meningkat tajam'], a:1, e:'Kebijakan moneter ekspansif (suku bunga turun) membuat biaya pinjaman lebih murah → kredit & investasi naik → mendorong pertumbuhan ekonomi (dengan risiko inflasi bila berlebihan).' },
        { t:'mc', q:'Lembaga yang mencetak uang Rupiah atas penugasan Bank Indonesia adalah…', o:['Bank Indonesia sendiri','Perum Peruri','OJK','Bank Mandiri','Kementerian Keuangan'], a:1, e:'BI adalah satu-satunya yang berwenang mengedarkan & mengeluarkan Rupiah, namun pencetakan fisiknya dilakukan oleh Perum Peruri.' },
        { t:'mc', q:'Indikator yang mengukur nilai seluruh barang & jasa akhir yang diproduksi dalam suatu negara selama periode tertentu disebut…', o:['Produk Nasional Bruto (PNB)','Produk Domestik Bruto (PDB)','Pendapatan per kapita','Neraca pembayaran','Cadangan devisa'], a:1, e:'PDB (GDP) mengukur output dalam batas wilayah negara. PNB (GNP) menambahkan faktor produksi milik warga negara di luar negeri dan mengurangi milik asing di dalam negeri.' },
        { t:'mc', q:'QRIS memungkinkan pembayaran dari berbagai aplikasi/dompet digital cukup dengan satu kode QR. Prinsip ini disebut…', o:['Eksklusif','Interoperabilitas','Monopoli','Tunai','Barter'], a:1, e:'QRIS menerapkan interoperabilitas: satu standar QR dapat dibaca lintas penyelenggara (bank/e-wallet), menyederhanakan transaksi nontunai.' },
        { t:'mc', q:'Tujuan utama digitalisasi sistem pembayaran (QRIS, BI-FAST, Digital Rupiah) yang didorong Bank Indonesia adalah…', o:['Menghapus uang tunai sepenuhnya','Mendorong efisiensi, inklusi keuangan, dan keamanan transaksi','Menaikkan suku bunga','Mengurangi cadangan devisa','Menggantikan peran perbankan'], a:1, e:'Digitalisasi sistem pembayaran bertujuan meningkatkan efisiensi, inklusi keuangan, kecepatan, dan keamanan transaksi — bagian dari Blueprint Sistem Pembayaran Indonesia.' },
        { t:'mc', q:'"Cadangan devisa" suatu negara berfungsi antara lain untuk…', o:['Membayar gaji PNS','Menjaga stabilitas nilai tukar & memenuhi kewajiban luar negeri','Mencetak uang baru','Membayar pajak','Menentukan suku bunga deposito'], a:1, e:'Cadangan devisa (dikelola BI) dipakai untuk menjaga stabilitas nilai tukar Rupiah, membiayai impor, dan memenuhi kewajiban pembayaran luar negeri.' },
        { t:'mc', q:'Berdasarkan tingkat keparahannya, inflasi dengan laju di atas 100% per tahun digolongkan sebagai…', o:['Inflasi ringan','Inflasi sedang','Inflasi berat','Hiperinflasi','Deflasi'], a:3, e:'Hiperinflasi adalah inflasi sangat tinggi (umumnya >100% per tahun) yang menggerus daya beli secara ekstrem. Inflasi ringan <10%, sedang 10–30%, berat 30–100%.' }
      ]
    },

    /* ===================== BAHASA INGGRIS ===================== */
    {
      id: 'eng',
      name: 'Bahasa Inggris',
      short: 'English',
      jumlahSoal: 30,
      icon: '🌐',
      passing: null,
      desc: 'Structure & grammar, vocabulary, dan reading comprehension setara TOEFL/TOEIC.',
      material: `
        <h3>About the English Test</h3>
        <p>The English section tests <b>grammar/structure</b>, <b>vocabulary</b>, and <b>reading comprehension</b> at an academic level (TOEFL/TOEIC-like). BI uses English heavily in research and international cooperation.</p>
        <h3>1. Structure & Grammar</h3>
        <ul>
          <li><b>Tenses</b>, <b>subject–verb agreement</b>, <b>conditionals</b>, <b>passive voice</b>, <b>articles & prepositions</b>.</li>
          <li>Watch for the trap between "since / for", "much / many", "fewer / less".</li>
        </ul>
        <h3>2. Vocabulary</h3>
        <p>Focus on <b>economic & business terms</b>: <i>inflation, deflation, recession, fiscal, monetary, surplus, deficit, liquidity, currency</i>.</p>
        <h3>3. Reading Comprehension</h3>
        <ul>
          <li>Identify <b>main idea</b>, <b>detail</b>, <b>inference</b>, and <b>vocabulary in context</b>.</li>
          <li>Skim first, then scan for the specific answer.</li>
        </ul>
        <p class="tip">💡 Read English economic news (e.g., central bank statements) daily to build speed and vocabulary.</p>
      `,
      questions: [
        { t:'mc', q:'Choose the correct option: The central bank ____ interest rates twice this year.', o:['has raised','have raised','raising','is raise','raise'], a:0, e:'"The central bank" is singular and the time frame (this year) is unfinished → present perfect "has raised".' },
        { t:'mc', q:'Choose the correct word: Inflation refers to a general increase in ____ over time.', o:['prices','price','priced','pricing','to price'], a:0, e:'After "in" we need a noun; "a general increase in prices" — plural noun "prices" is the natural collocation.' },
        { t:'mc', q:'Synonym — "RECESSION" is closest in meaning to…', o:['Economic boom','Economic downturn','Surplus','Expansion','Growth'], a:1, e:'A recession is a significant, sustained decline in economic activity — an economic downturn. The opposite of expansion/growth.' },
        { t:'mc', q:'Complete: If the government ____ spending, the deficit would decrease.', o:['reduce','reduces','reduced','will reduce','reducing'], a:2, e:'Second conditional (hypothetical): "If + past simple, ... would + verb". → "If the government reduced spending, the deficit would decrease."' },
        { t:'mc', q:'Choose the correct preposition: The report is divided ____ three sections.', o:['on','in','into','at','of'], a:2, e:'The collocation is "divided into" when describing parts/sections.' },
        { t:'mc', q:'Passive voice — Active: "The committee approved the policy." Passive:', o:['The policy approved by the committee','The policy was approved by the committee','The policy is approving by the committee','The policy has approve by the committee','The policy approve by the committee'], a:1, e:'Past simple passive = was/were + past participle: "The policy was approved by the committee."' },
        { t:'mc', q:'Antonym — the opposite of "SURPLUS" is…', o:['Excess','Deficit','Profit','Balance','Reserve'], a:1, e:'Surplus = excess (more than needed). Its opposite is deficit = shortfall.' },
        { t:'mc', q:'Choose the correct form: There are ____ resources available than we expected.', o:['less','fewer','little','much','lesser'], a:1, e:'"Resources" is countable plural → use "fewer". "Less" is for uncountable nouns.' },
        { t:'mc', q:'Vocabulary in context — "The policy aims to curb inflation." The word "curb" most nearly means…', o:['Encourage','Restrain','Measure','Predict','Ignore'], a:1, e:'To "curb" means to restrain or keep under control — here, to limit inflation.' },
        { t:'mc', q:'Choose the correct option: She has worked at the bank ____ 2015.', o:['for','since','from','during','in'], a:1, e:'"Since" is used with a specific point in time (2015) in the present perfect. "For" is used with a duration (e.g., for 9 years).' },
        { t:'mc', q:'READING — "Central banks use monetary policy to keep prices stable. By adjusting interest rates, they influence borrowing, spending, and ultimately inflation." What is the main idea?', o:['Banks lend money to citizens','Central banks influence inflation through monetary policy','Interest rates are always high','Spending must be reduced','Prices never change'], a:1, e:'The passage explains that central banks use monetary policy (esp. interest rates) to affect inflation — that is the main idea.' },
        { t:'mc', q:'READING (same passage) — According to the text, central banks influence inflation by adjusting…', o:['Tax rates','Interest rates','Exchange controls','Wages','Import quotas'], a:1, e:'The text explicitly states they adjust "interest rates" to influence borrowing, spending, and inflation.' },
        { t:'mc', q:'Choose the grammatically correct sentence:', o:['Neither the manager nor the staff was informed','Neither the manager nor the staff were informed','Neither the manager or the staff was informed','Neither the manager nor the staff is informed','Neither manager nor staff was inform'], a:1, e:'With "neither...nor", the verb agrees with the nearer subject. "staff" (treated as plural here) → "were informed".' },
        { t:'mc', q:'Vocabulary — A "liquid" asset is one that can be…', o:['Easily converted into cash','Stored as gold only','Never sold','Owned by the government','Used as collateral only'], a:0, e:'Liquidity refers to how quickly/easily an asset can be converted into cash without significant loss of value.' },
        { t:'mc', q:'Complete: The economy is expected ____ next year.', o:['grow','to grow','growing','grown','grew'], a:1, e:'"be expected" is followed by the to-infinitive: "expected to grow".' },
        { t:'mc', q:'Choose the correct option: By the end of 2025, the bank ____ its digital services significantly.', o:['expands','has expanded','will have expanded','expanding','expand'], a:2, e:'"By the end of [future time]" signals future perfect: "will have expanded".' },
        { t:'mc', q:'Synonym — "VOLATILE" (e.g., a volatile market) is closest to…', o:['Stable','Unpredictable','Profitable','Liquid','Transparent'], a:1, e:'Volatile = liable to rapid, unpredictable change. A volatile market changes sharply and unpredictably.' },
        { t:'mc', q:'Choose the correct preposition: The decision was made in accordance ____ the regulation.', o:['to','of','with','for','on'], a:2, e:'The fixed phrase is "in accordance with".' },
        { t:'mc', q:'Antonym — the opposite of "APPRECIATE" (currency) is…', o:['Strengthen','Depreciate','Stabilize','Rise','Float'], a:1, e:'When a currency appreciates it gains value; when it depreciates it loses value.' },
        { t:'mc', q:'Choose the correct sentence:', o:['The data shows a clear trend','The datas show a clear trend','The data shows a clearly trend','The data showing a clear trend','The data show clear trend'], a:0, e:'"Data" is commonly treated as singular in everyday usage ("the data shows"), and "clear" (adjective) modifies the noun "trend".' },
        { t:'mc', q:'Complete: Neither the report nor the figures ____ been verified yet.', o:['has','have','is','was','had'], a:1, e:'With "neither...nor", the verb agrees with the nearer subject "figures" (plural) → "have been verified".' },
        { t:'mc', q:'Vocabulary in context — "Authorities pledged to bolster economic growth." "Bolster" most nearly means…', o:['Weaken','Strengthen','Measure','Delay','Question'], a:1, e:'To bolster = to support or strengthen. They pledged to strengthen growth.' },
        { t:'mc', q:'READING — "Financial inclusion means giving individuals and businesses access to useful, affordable financial products such as payments, savings, and credit. It can reduce poverty and support economic development." The passage is mainly about…', o:['How banks set interest rates','The meaning and benefits of financial inclusion','Why credit is dangerous','The history of money','How to open a bank account'], a:1, e:'The passage defines financial inclusion and states its benefits (reducing poverty, supporting development) — that is its main focus.' },
        { t:'mc', q:'READING (same passage) — According to the text, financial inclusion can…', o:['Increase poverty','Reduce poverty and support economic development','Replace governments','Eliminate all risk','Raise interest rates'], a:1, e:'The text explicitly says it "can reduce poverty and support economic development".' },
        { t:'mc', q:'Choose the correct form: If interest rates ____ lower, more people would borrow.', o:['are','were','will be','have been','being'], a:1, e:'Second conditional (hypothetical present): "If + were, ... would". → "If interest rates were lower, more people would borrow."' }
      ]
    }
  ]
};
