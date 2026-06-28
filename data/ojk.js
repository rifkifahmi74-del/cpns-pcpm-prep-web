/* =====================================================================
   BANK SOAL & MATERI - OJK (PCAM - Program Pendidikan Calon Asisten Manager)
   ---------------------------------------------------------------------
   Acuan tahapan & materi (diverifikasi dari kanal resmi OJK, siklus PCAM 9 / 2025):
   Pendaftaran -> Tes Potensi Dasar (TPD) -> Tes Kemampuan Umum/Wawasan ->
   Tes Psikologi/kepribadian -> Tes Kesehatan -> Wawancara -> Penetapan.
   Info resmi: ojk.go.id/id/Karir
   Soal di bawah = SOAL LATIHAN yang meniru format & materi (soal asli rahasia).
   Fakta kelembagaan OJK diverifikasi (UU 21/2011; UU P2SK 4/2023).

   Skema soal sama: { t:'mc', q, o:[opsi], a:indexBenar, e:pembahasan }
   ===================================================================== */
window.EXAM_DB = window.EXAM_DB || {};
window.EXAM_DB.ojk = {
  id: 'ojk',
  name: 'OJK - PCAM (Calon Asisten Manager)',
  short: 'OJK · PCAM',
  tagline: 'Tes Potensi Dasar • Pengetahuan OJK & Sektor Jasa Keuangan • Bahasa Inggris',
  accent: '#30b0c7',
  official: { label: 'ojk.go.id/id/Karir', url: 'https://ojk.go.id/id/Karir' },
  exam: {
    totalSoal: 90,
    durationMin: 90,
    maxScore: 0,
    passing: null,
    note: 'PCAM OJK memakai sistem gugur bertahap (kompetitif). Latihan ini fokus penguasaan materi tiap tahap, bukan ambang batas baku. Tahap lanjut: psikologi, kesehatan, wawancara.'
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
      desc: 'Kemampuan verbal, numerik, dan penalaran logis untuk mengukur potensi akademik.',
      material: `
        <h3>Tentang Tes Potensi Dasar PCAM OJK</h3>
        <p>TPD adalah gerbang awal seleksi PCAM. Mengukur <b>kemampuan verbal</b> (bahasa), <b>numerik</b> (angka), dan <b>penalaran logis/figural</b>. Kompetitif: hanya peringkat terbaik yang lanjut.</p>
        <h3>Tahapan PCAM OJK (resmi)</h3>
        <ol>
          <li>Pendaftaran online (ojk.go.id/id/Karir)</li>
          <li><b>Tes Potensi Dasar (TPD)</b></li>
          <li><b>Tes Kemampuan Umum / Wawasan</b> (pengetahuan OJK & sektor jasa keuangan, ekonomi)</li>
          <li>Tes Psikologi / kepribadian</li>
          <li>Tes Kesehatan</li>
          <li>Wawancara</li>
          <li>Penetapan & pemberkasan</li>
        </ol>
        <p class="tip">💡 TPD adu kecepatan + akurasi. Latih manajemen waktu: lewati soal sulit, kembali di akhir.</p>
      `,
      questions: [
        { t:'mc', q:'ANALOGI - REGULATOR : PENGAWASAN = GURU : …', o:['Sekolah','Pengajaran','Murid','Kurikulum','Ujian'], a:1, e:'Regulator menjalankan fungsi pengawasan; guru menjalankan fungsi pengajaran. Keduanya = peran/fungsi utama pelakunya.' },
        { t:'mc', q:'SINONIM - "INTEGRITAS" paling dekat maknanya dengan…', o:['Kepintaran','Kejujuran & keutuhan moral','Kecepatan','Kekayaan','Kewenangan'], a:1, e:'Integritas = mutu kejujuran, konsistensi, dan keutuhan prinsip moral - nilai inti yang dinilai OJK.' },
        { t:'mc', q:'ANTONIM - lawan kata "TRANSPARAN" adalah…', o:['Jelas','Terbuka','Tertutup','Akuntabel','Jujur'], a:2, e:'Transparan (terbuka) berlawanan dengan tertutup/tidak jelas.' },
        { t:'mc', q:'DERET - 3, 7, 15, 31, 63, … suku berikutnya…', o:['95','120','127','125','100'], a:2, e:'Pola ×2 lalu +1: 63×2+1 = 127.' },
        { t:'mc', q:'PERSEN - Sebuah investasi tumbuh dari Rp50 juta menjadi Rp65 juta. Imbal hasilnya…', o:['15%','20%','25%','30%','35%'], a:4, e:'Kenaikan = 15 juta. Persentase = 15/50 × 100% = 30%. (Periksa: 15/50=0,30=30%.)' },
        { t:'mc', q:'ARITMETIKA - 12,5% dari 800 adalah…', o:['80','90','100','110','125'], a:2, e:'12,5% × 800 = 0,125 × 800 = 100.' },
        { t:'mc', q:'SILOGISME - Semua lembaga jasa keuangan diawasi OJK. Bank adalah lembaga jasa keuangan. Maka…', o:['Bank tidak diawasi OJK','Bank diawasi OJK','Hanya sebagian bank diawasi','OJK adalah bank','Tidak dapat disimpulkan'], a:1, e:'Semua A diawasi OJK; bank adalah A -> bank diawasi OJK.' },
        { t:'mc', q:'PERBANDINGAN - Rasio aset : liabilitas = 9 : 4. Jika ekuitas (selisih) Rp100 miliar, total aset…', o:['Rp160 M','Rp180 M','Rp200 M','Rp225 M','Rp240 M'], a:1, e:'Selisih perbandingan = 9-4 = 5 bagian = 100 M, jadi 1 bagian = 20 M. Aset = 9 × 20 = Rp180 miliar.' },
        { t:'mc', q:'PENALARAN - Jika suku bunga acuan naik, maka biaya kredit cenderung…', o:['Turun','Naik','Tetap','Hilang','Negatif'], a:1, e:'Suku bunga acuan naik -> biaya dana naik -> bunga kredit cenderung naik.' },
        { t:'mc', q:'DERET HURUF - C, E, H, L, Q, … huruf berikutnya…', o:['V','W','X','U','T'], a:1, e:'Selisih posisi bertambah: C(+2)E(+3)H(+4)L(+5)Q(+6)W. Jawaban W.' },
        { t:'mc', q:'RATA-RATA - Lima cabang membukukan laba (miliar): 8, 12, 10, 15, 5. Rata-ratanya…', o:['9','10','11','12','8'], a:1, e:'Jumlah = 50; rata-rata = 50/5 = 10 miliar.' },
        { t:'mc', q:'ANALITIS - P lebih senior dari Q. R lebih junior dari Q. S lebih senior dari P. Siapa paling senior?', o:['P','Q','R','S','Tidak tahu'], a:3, e:'Urutan senioritas: S > P > Q > R. Paling senior = S.' }
      ]
    },

    /* ============ PENGETAHUAN OJK & SEKTOR JASA KEUANGAN ============ */
    {
      id: 'sjk',
      name: 'Pengetahuan OJK & Sektor Jasa Keuangan',
      short: 'OJK & SJK',
      jumlahSoal: 30,
      icon: '🏛️',
      passing: null,
      desc: 'Dasar hukum, tujuan & fungsi OJK, tiga sektor pengawasan (perbankan, pasar modal, IKNB), pelindungan konsumen, dan isu terkini (P2SK, fintech, aset kripto).',
      material: `
        <h3>Otoritas Jasa Keuangan (OJK) secara singkat</h3>
        <p>OJK adalah lembaga <b>independen</b> yang menyelenggarakan sistem <b>pengaturan dan pengawasan terintegrasi</b> terhadap seluruh kegiatan di sektor jasa keuangan. Dibentuk berdasarkan <b>UU No. 21 Tahun 2011 tentang OJK</b>.</p>
        <h3>Tujuan OJK</h3>
        <p>Agar kegiatan jasa keuangan terselenggara secara <b>teratur, adil, transparan, dan akuntabel</b>; mewujudkan sistem keuangan yang <b>tumbuh berkelanjutan dan stabil</b>; serta <b>melindungi kepentingan konsumen dan masyarakat</b>.</p>
        <h3>Tiga sektor yang diawasi OJK</h3>
        <ol>
          <li><b>Perbankan</b> - pengawasan beralih dari Bank Indonesia ke OJK pada <b>31 Desember 2013</b>.</li>
          <li><b>Pasar Modal</b> - saham, obligasi, reksa dana, dll. (sebelumnya Bapepam-LK).</li>
          <li><b>IKNB (Industri Keuangan Non-Bank)</b> - asuransi, dana pensiun, lembaga pembiayaan, penjaminan, dll.</li>
        </ol>
        <h3>Perluasan kewenangan (UU P2SK No. 4 Tahun 2023)</h3>
        <ul>
          <li>OJK kini juga mengawasi <b>Inovasi Teknologi Sektor Keuangan (ITSK/fintech)</b>, <b>aset keuangan digital termasuk aset kripto</b> (peralihan dari Bappebti), dan <b>Lembaga Keuangan Mikro</b>.</li>
          <li>Penguatan fungsi <b>pelindungan konsumen</b> dan <b>perilaku pasar (market conduct)</b>.</li>
        </ul>
        <h3>Istilah & fakta penting</h3>
        <ul>
          <li><b>Dewan Komisioner OJK</b>: 9 anggota. Bersifat kolektif kolegial.</li>
          <li><b>SLIK</b> (Sistem Layanan Informasi Keuangan) - dulu "BI Checking", kini dikelola OJK.</li>
          <li><b>Satgas PASTI</b> (Pemberantasan Aktivitas Keuangan Ilegal) - memberantas pinjol ilegal & investasi bodong.</li>
          <li>OJK, BI, LPS, dan Kemenkeu tergabung dalam <b>KSSK</b> (Komite Stabilitas Sistem Keuangan).</li>
          <li>Pembedaan peran: <b>BI</b> = moneter & makroprudensial; <b>OJK</b> = mikroprudensial (pengawasan lembaga); <b>LPS</b> = penjaminan simpanan.</li>
        </ul>
        <p class="tip">💡 Ikuti rilis & POJK terbaru di ojk.go.id untuk isu kontemporer (fintech, aset kripto, pelindungan konsumen).</p>
      `,
      questions: [
        { t:'mc', q:'OJK dibentuk berdasarkan…', o:['UU No. 23 Tahun 1999','UU No. 21 Tahun 2011','UU No. 4 Tahun 2023','UU No. 7 Tahun 1992','UU No. 8 Tahun 1995'], a:1, e:'OJK dibentuk berdasarkan UU No. 21 Tahun 2011 tentang Otoritas Jasa Keuangan.' },
        { t:'mc', q:'Tiga sektor jasa keuangan yang diawasi OJK adalah…', o:['Perbankan, moneter, fiskal','Perbankan, pasar modal, dan IKNB','Pasar modal, pajak, dan asuransi','Perbankan, BUMN, dan koperasi','Moneter, sistem pembayaran, dan perbankan'], a:1, e:'OJK mengawasi tiga sektor: Perbankan, Pasar Modal, dan Industri Keuangan Non-Bank (IKNB).' },
        { t:'mc', q:'Fungsi pengawasan perbankan beralih dari Bank Indonesia ke OJK pada…', o:['31 Desember 2012','31 Desember 2013','1 Januari 2011','31 Desember 2014','1 Juli 2013'], a:1, e:'Pengawasan mikroprudensial perbankan beralih dari BI ke OJK pada 31 Desember 2013 (efektif 1 Januari 2014). Pasar modal & IKNB beralih sejak 31 Desember 2012.' },
        { t:'mc', q:'Yang termasuk Industri Keuangan Non-Bank (IKNB) adalah…', o:['Bank umum','Bursa Efek','Perusahaan asuransi & dana pensiun','Bank Indonesia','Bank Perkreditan Rakyat'], a:2, e:'IKNB meliputi asuransi, dana pensiun, lembaga pembiayaan, penjaminan, dll. Bank termasuk sektor perbankan; bursa efek termasuk pasar modal.' },
        { t:'mc', q:'Setelah UU P2SK (UU No. 4 Tahun 2023), pengawasan aset kripto dialihkan ke OJK dari…', o:['Bank Indonesia','Bappebti','Kementerian Keuangan','LPS','Bursa Efek Indonesia'], a:1, e:'UU P2SK mengalihkan pengawasan perdagangan aset kripto dari Bappebti (Kemendag) ke OJK, sebagai bagian aset keuangan digital.' },
        { t:'mc', q:'Tujuan OJK menurut UU No. 21 Tahun 2011 mencakup hal berikut, KECUALI…', o:['Kegiatan jasa keuangan teratur, adil, transparan, akuntabel','Sistem keuangan tumbuh berkelanjutan dan stabil','Melindungi kepentingan konsumen & masyarakat','Menetapkan kebijakan suku bunga acuan (moneter)','Mendukung sektor jasa keuangan yang sehat'], a:3, e:'Kebijakan moneter (suku bunga acuan) adalah kewenangan Bank Indonesia, bukan OJK. Tujuan OJK berfokus pada keteraturan, stabilitas, dan pelindungan konsumen.' },
        { t:'mc', q:'Dewan Komisioner OJK beranggotakan…', o:['5 orang','7 orang','9 orang','11 orang','3 orang'], a:2, e:'Dewan Komisioner OJK terdiri atas 9 (sembilan) anggota yang bersifat kolektif dan kolegial.' },
        { t:'mc', q:'Sistem yang menyediakan informasi riwayat kredit/pembiayaan nasabah (dahulu "BI Checking"), kini dikelola OJK, disebut…', o:['SLIK','BI-FAST','RTGS','SKNBI','QRIS'], a:0, e:'SLIK (Sistem Layanan Informasi Keuangan) dikelola OJK, menggantikan SID/BI Checking yang dulu di BI.' },
        { t:'mc', q:'Lembaga yang berwenang menjamin simpanan nasabah perbankan (berbeda dari OJK yang mengawasi) adalah…', o:['Bank Indonesia','LPS','BPK','Kemenkeu','Bappebti'], a:1, e:'LPS (Lembaga Penjamin Simpanan) menjamin simpanan; OJK mengawasi bank; BI memegang kebijakan moneter & makroprudensial.' },
        { t:'mc', q:'Pinjaman online (P2P lending) yang legal di Indonesia harus terdaftar dan diawasi oleh…', o:['Bank Indonesia','OJK','Kominfo','Bappebti','LPS'], a:1, e:'Fintech P2P lending (Layanan Pendanaan Bersama Berbasis Teknologi Informasi) wajib berizin dan diawasi OJK. Pinjol tanpa izin OJK adalah ilegal.' },
        { t:'mc', q:'Satuan tugas yang memberantas investasi ilegal dan pinjol ilegal adalah…', o:['Satgas PASTI','KSSK','Satgas BLBI','KPK','Bawaslu'], a:0, e:'Satgas PASTI (Pemberantasan Aktivitas Keuangan Ilegal), penerus Satgas Waspada Investasi, dikoordinasikan OJK bersama kementerian/lembaga terkait.' },
        { t:'mc', q:'Instrumen berikut yang diperdagangkan di pasar modal adalah…', o:['Deposito','Giro','Saham dan obligasi','Tabungan','Polis asuransi'], a:2, e:'Pasar modal memperdagangkan efek seperti saham, obligasi, dan reksa dana. Deposito/giro/tabungan adalah produk perbankan.' },
        { t:'mc', q:'Sifat kelembagaan OJK adalah…', o:['Bagian dari Bank Indonesia','Lembaga independen yang bebas dari campur tangan pihak lain','Unit di Kementerian Keuangan','BUMN jasa keuangan','Lembaga di bawah DPR'], a:1, e:'OJK adalah lembaga negara yang independen dalam menjalankan tugas & wewenangnya, bebas dari campur tangan pihak lain sesuai UU.' },
        { t:'mc', q:'Prinsip pelindungan konsumen sektor jasa keuangan menurut OJK menekankan, antara lain…', o:['Kerahasiaan mutlak tanpa edukasi','Transparansi, perlakuan adil, keamanan data, dan penanganan pengaduan','Bunga setinggi mungkin','Bebas pungutan','Hanya melayani nasabah besar'], a:1, e:'Prinsip pelindungan konsumen OJK: transparansi, perlakuan yang adil, keandalan, kerahasiaan & keamanan data, serta penanganan pengaduan dan penyelesaian sengketa yang efektif.' },
        { t:'mc', q:'Reksa dana adalah produk yang berada dalam pengawasan sektor…', o:['Perbankan','Pasar Modal','IKNB','Moneter','Fiskal'], a:1, e:'Reksa dana adalah produk pasar modal (wadah menghimpun dana investor yang dikelola Manajer Investasi), diawasi OJK melalui pengawasan pasar modal.' }
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
      desc: 'Structure, vocabulary, dan reading comprehension dengan konteks keuangan & pengawasan.',
      material: `
        <h3>About the English Test</h3>
        <p>OJK works extensively with international standards and reports. The English section tests <b>grammar/structure</b>, <b>vocabulary</b> (esp. financial/regulatory terms), and <b>reading comprehension</b>.</p>
        <h3>Focus areas</h3>
        <ul>
          <li><b>Tenses, agreement, conditionals, passive voice, prepositions.</b></li>
          <li><b>Vocabulary:</b> <i>supervision, regulation, compliance, consumer protection, disclosure, prudential, solvency, liquidity.</i></li>
          <li><b>Reading:</b> main idea, detail, inference, vocabulary in context.</li>
        </ul>
        <p class="tip">💡 Read English financial-regulation news (OJK, IMF, BIS) to build speed & vocabulary.</p>
      `,
      questions: [
        { t:'mc', q:'Choose the correct option: The authority ____ several new regulations this year.', o:['has issued','have issued','issuing','is issue','issue'], a:0, e:'"The authority" is singular; the unfinished period (this year) needs present perfect -> "has issued".' },
        { t:'mc', q:'Synonym - "SUPERVISION" is closest in meaning to…', o:['Investment','Oversight','Punishment','Funding','Trading'], a:1, e:'Supervision = oversight, the act of monitoring and regulating.' },
        { t:'mc', q:'Complete: If the bank ____ the rules, it would face sanctions.', o:['break','breaks','broke','will break','breaking'], a:2, e:'Second conditional (hypothetical): "If + past simple, ... would". -> "If the bank broke the rules, it would face sanctions."' },
        { t:'mc', q:'Choose the correct preposition: All institutions must comply ____ the regulation.', o:['to','with','for','on','at'], a:1, e:'The collocation is "comply with".' },
        { t:'mc', q:'Antonym - the opposite of "TRANSPARENT" is…', o:['Clear','Open','Opaque','Honest','Fair'], a:2, e:'Transparent (able to be seen through / open) is opposite to opaque (not transparent, unclear).' },
        { t:'mc', q:'Passive voice - Active: "OJK supervises the financial sector." Passive:', o:['The financial sector is supervised by OJK','The financial sector supervises OJK','The financial sector was supervise by OJK','OJK is supervised the sector','The financial sector supervised by OJK'], a:0, e:'Present simple passive = is/are + past participle: "is supervised by OJK".' },
        { t:'mc', q:'Vocabulary in context - "The firm must disclose its financial statements." "Disclose" most nearly means…', o:['Hide','Reveal','Audit','Destroy','Translate'], a:1, e:'To disclose = to reveal/make known. Disclosure is a core principle of market transparency.' },
        { t:'mc', q:'Choose the correct form: There were ____ complaints this quarter than last quarter.', o:['less','fewer','little','much','lesser'], a:1, e:'"Complaints" is countable plural -> "fewer". "Less" is for uncountable nouns.' },
        { t:'mc', q:'She has worked at the authority ____ 2018.', o:['for','since','from','during','by'], a:1, e:'"Since" is used with a point in time (2018) in present perfect.' },
        { t:'mc', q:'READING - "Consumer protection ensures that financial products are fair, transparent, and safe. Regulators handle complaints and educate the public to reduce fraud." The main idea is…', o:['Banks set their own rules','Consumer protection safeguards customers through fairness, transparency, and education','Fraud is legal','Education is unnecessary','Products are always risky'], a:1, e:'The passage explains that consumer protection safeguards customers via fairness, transparency, complaint-handling, and education - that is the main idea.' },
        { t:'mc', q:'READING (same passage) - According to the text, regulators reduce fraud by…', o:['Raising prices','Handling complaints and educating the public','Closing all banks','Ignoring customers','Hiding information'], a:1, e:'The text states regulators "handle complaints and educate the public to reduce fraud".' },
        { t:'mc', q:'Choose the grammatically correct sentence:', o:['Neither the regulator nor the firms was ready','Neither the regulator nor the firms were ready','Neither the regulator or the firms were ready','Neither regulator nor firms was ready','Neither the regulator nor the firms is ready'], a:1, e:'With "neither...nor", the verb agrees with the nearer subject "firms" (plural) -> "were ready".' }
      ]
    }
  ]
};
