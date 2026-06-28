/* =====================================================================
   CPNS - MODUL TAMBAHAN (dimuat SETELAH data/cpns.js)
   ---------------------------------------------------------------------
   Menambahkan ke window.EXAM_DB.cpns:
   - formasi  : ringkasan resmi + daftar instansi pusat + struktur/pembobotan SKB
   - articles : analisis pola soal 10 tahun + strategi HOTS TKP & TWK
   - skbCategories : bank soal latihan SKB per rumpun jabatan
   Sumber resmi: PermenpanRB No. 6 Tahun 2024 (integrasi SKD 40% : SKB 60%);
   Kepmenpan RB No. 321 Tahun 2024 (passing grade SKD); sscasn.bkn.go.id.
   CATATAN JUJUR: angka formasi & komponen SKB final hanya resmi saat siklus
   CPNS dibuka. Per 2026 BELUM dirilis - data di bawah adalah REFERENSI RESMI
   CPNS 2024 + tautan sumber resmi, bukan angka 2026 karangan.
   ===================================================================== */
(function(){
  var DB = window.EXAM_DB || {};
  if(!DB.cpns) return;

  /* ---------------- FORMASI & PEMBOBOTAN SKB ---------------- */
  DB.cpns.formasi = {
    updated: 'Referensi resmi CPNS 2024 (siklus 2026 belum dirilis)',
    summary: {
      tahun2024: {
        total: 250407, pusat: 114706, daerah: 135701, instansiPusat: 69,
        sumber: { label: 'BKN / sscasn.bkn.go.id', url: 'https://sscasn.bkn.go.id' }
      },
      status2026: 'Belum ada pengumuman resmi. Formasi & rincian SKB tiap instansi diumumkan saat siklus dibuka melalui sscasn.bkn.go.id dan situs resmi masing-masing instansi.'
    },
    bobot: {
      ringkas: 'Nilai Akhir = Integrasi SKD (40%) + SKB (60%)',
      dasar: 'PermenpanRB No. 6 Tahun 2024',
      rumusSKD: 'Nilai SKD = (nilai kumulatif SKD / 550) × 40%',
      rumusSKB: 'Nilai SKB = (nilai SKB / skor maks SKB instansi) × 60%',
      skbCAT: 'Bila SKB hanya CAT: bobot CAT = 100% dari SKB. Bila ada tes tambahan, SKB-CAT umumnya berbobot minimal 50% dari nilai SKB; sisanya psikotes/wawancara/praktik/kesamaptaan (porsi & sifat menggugurkan ditetapkan tiap instansi).'
    },
    // Daftar instansi pusat (kurasi). Tautan = domain RESMI; rincian formasi/SKB
    // diumumkan resmi saat siklus dibuka. Komponen SKB = pola umum, verifikasi tiap instansi.
    instansi: [
      { nama:'Kementerian Keuangan', url:'https://www.kemenkeu.go.id', skb:['SKB CAT (substansi jabatan)','Psikotes &/atau wawancara (jabatan tertentu)'] },
      { nama:'Kejaksaan RI', url:'https://www.kejaksaan.go.id', skb:['SKB CAT (substansi)','Tes kesehatan','Tes kesamaptaan/jasmani','Psikologi','Wawancara'] },
      { nama:'Kementerian Hukum (d/h Kemenkumham)', url:'https://www.kemenkumham.go.id', skb:['SKB CAT (substansi)','Tes kesehatan','Tes kesamaptaan (jabatan penjaga tahanan)','Psikotes','Wawancara'] },
      { nama:'Mahkamah Agung', url:'https://www.mahkamahagung.go.id', skb:['SKB CAT (substansi)','Wawancara (jabatan tertentu)'] },
      { nama:'Badan Pusat Statistik (BPS)', url:'https://www.bps.go.id', skb:['SKB CAT (substansi statistik)'] },
      { nama:'Badan Kepegawaian Negara (BKN)', url:'https://www.bkn.go.id', skb:['SKB CAT (substansi kepegawaian/SDM)'] },
      { nama:'Kementerian Luar Negeri', url:'https://www.kemlu.go.id', skb:['SKB CAT (substansi)','Tes bahasa asing','Psikotes','Wawancara','Tes kesehatan (jabatan diplomat)'] },
      { nama:'Badan Pemeriksa Keuangan (BPK)', url:'https://www.bpk.go.id', skb:['SKB CAT (substansi pemeriksaan/audit keuangan negara)'] },
      { nama:'BPKP', url:'https://www.bpkp.go.id', skb:['SKB CAT (substansi pengawasan/audit intern)'] },
      { nama:'Kementerian Kesehatan', url:'https://www.kemkes.go.id', skb:['SKB CAT (substansi kesehatan)','Uji kompetensi (nakes)'] },
      { nama:'Kementerian Sekretariat Negara', url:'https://www.setneg.go.id', skb:['SKB CAT (substansi)','Psikotes &/atau wawancara'] },
      { nama:'Kementerian Dalam Negeri', url:'https://www.kemendagri.go.id', skb:['SKB CAT (substansi pemerintahan)'] },
      { nama:'Kementerian Agama', url:'https://www.kemenag.go.id', skb:['SKB CAT (substansi)','Moderasi beragama (jabatan tertentu)'] },
      { nama:'Kementerian PUPR', url:'https://www.pu.go.id', skb:['SKB CAT (substansi teknik/keinsinyuran)'] },
      { nama:'Kementerian Perhubungan', url:'https://www.dephub.go.id', skb:['SKB CAT (substansi)','Tes kesehatan/kesamaptaan (jabatan teknis lapangan)'] },
      { nama:'Badan Siber dan Sandi Negara (BSSN)', url:'https://www.bssn.go.id', skb:['SKB CAT (substansi siber/sandi)','Psikotes/wawancara (jabatan tertentu)'] }
    ],
    catatan: 'Komponen SKB di atas adalah POLA UMUM untuk gambaran. Jenis & bobot SKB final, formasi, kualifikasi, dan lokasi penempatan WAJIB dicek pada pengumuman resmi tiap instansi di sscasn.bkn.go.id saat siklus dibuka.'
  };

  /* ---------------- ARTIKEL: ANALISIS & STRATEGI ---------------- */
  DB.cpns.articles = [
    {
      id: 'analisis-10thn',
      title: 'Analisis Pola Soal SKD (Tren ~10 Tahun)',
      short: 'Analisis Pola',
      icon: '📈',
      desc: 'Bagaimana karakter soal SKD berubah dari hafalan ke penalaran (HOTS), dan implikasinya bagi strategi belajar.',
      html: `
        <h3>Kerangka resmi yang menjadi acuan</h3>
        <p>Format SKD telah stabil: <b>110 soal</b> (TWK 30, TIU 35, TKP 45), <b>100 menit</b>, skor maks <b>550</b>. Nilai ambang batas terkini (Kepmenpan RB No. 321/2024): <b>TWK ≥ 65, TIU ≥ 80, TKP ≥ 166</b> dengan sistem gugur per-komponen.</p>
        <h3>Tren utama: dari "hafalan" ke "penalaran" (HOTS)</h3>
        <p>Karakter soal bergeser konsisten ke arah <b>Higher Order Thinking Skills</b> - menuntut analisis, evaluasi, dan pengambilan keputusan, bukan sekadar mengingat fakta.</p>
        <ul>
          <li><b>TWK - penalaran implementatif.</b> Soal tak lagi sebatas "Kapan Indonesia merdeka?" melainkan "Bagaimana penerapan nilai Pancasila menghadapi konflik sosial di era digital?" Fokus: penerapan nilai (Pancasila, UUD 1945, NKRI, Bhinneka) pada kasus nyata.</li>
          <li><b>TIU - lebih analitis.</b> Penalaran verbal (analogi, silogisme, analitis), numerik (deret, soal cerita), dan figural. Jebakan klasik: terlalu lama pada satu soal hitungan rumit sampai kehabisan waktu untuk soal logika/figural yang sebenarnya lebih mudah.</li>
          <li><b>TKP - ambang tertinggi.</b> Passing grade TKP (166 dari 225) paling tinggi dan paling "mepet". Opsi jawaban makin mirip; yang dinilai adalah konsistensi memilih sikap paling profesional ASN.</li>
        </ul>
        <h3>Implikasi untuk caramu belajar</h3>
        <ol>
          <li><b>Pahami, jangan hafal.</b> Kuasai makna tiap sila & pasal agar bisa diterapkan ke skenario apa pun.</li>
          <li><b>Latih manajemen waktu.</b> ~54 detik/soal. Kerjakan yang cepat dulu; tandai soal sulit, kembali di akhir.</li>
          <li><b>Prioritaskan TKP & TIU.</b> TKP tak ada nilai 0 (isi semua); TIU menentukan karena ambang 80 butuh ±16 benar.</li>
          <li><b>Biasakan soal HOTS.</b> Latih membaca kata kunci ("paling tepat", "kecuali") dan teknik eliminasi.</li>
        </ol>
        <p class="tip">💡 Mode "Simulasi Penuh" di app ini sudah mengikuti komposisi & gaya soal terbaru. Gunakan "Statistik" untuk memantau subtes terlemahmu, lalu fokuskan latihan di sana.</p>
        <p style="font-size:13px;color:var(--muted);margin-top:14px">Acuan: Kepmenpan RB No. 321/2024 (passing grade), PermenpanRB No. 6/2024 (pengadaan ASN). Tren karakter soal dirangkum dari pola seleksi SKD terkini.</p>
      `
    },
    {
      id: 'strategi-hots',
      title: 'Strategi Menjawab Soal HOTS: TKP & TWK',
      short: 'Strategi HOTS',
      icon: '🎯',
      desc: 'Teknik praktis menaklukkan soal penalaran tingkat tinggi pada TKP dan TWK.',
      html: `
        <h3>Apa itu soal HOTS?</h3>
        <p>HOTS menuntut tiga kemampuan: <b>menganalisis</b> (mengurai situasi), <b>mengevaluasi</b> (menimbang pilihan), dan <b>memutuskan/mencipta</b> (memilih tindakan terbaik). Kuncinya bukan apa yang kamu ingat, tapi bagaimana kamu menalar.</p>

        <h3>TKP HOTS - memilih sikap ideal ASN</h3>
        <p>Tiap opsi bernilai 1-5; tidak ada nilai 0, jadi <b>WAJIB isi semua</b>. Cara memilih skor tertinggi:</p>
        <ul>
          <li><b>Solutif & tuntas.</b> Pilih sikap yang menyelesaikan masalah <b>sekarang</b> sekaligus <b>mencegah terulang</b>.</li>
          <li><b>Proaktif, bukan pasif.</b> Hindari opsi "menunggu", "menyerahkan ke orang lain", atau "membiarkan".</li>
          <li><b>Utamakan kepentingan organisasi/publik</b> di atas kepentingan pribadi, tanpa melanggar aturan.</li>
          <li><b>Komunikasi dewasa.</b> Saat ada konflik beban kerja/jadwal, jawaban ideal biasanya "komunikasikan + cari solusi", bukan menolak atau diam.</li>
          <li><b>Bedakan skor 5 vs 4.</b> Opsi 4 biasanya benar tapi parsial (mis. hanya meminta bimbingan); opsi 5 menambah inisiatif/penuntasan.</li>
        </ul>

        <h3>TWK HOTS - penalaran implementatif</h3>
        <ul>
          <li><b>Terjemahkan nilai ke tindakan.</b> Pahami inti tiap sila/pasal, lalu pilih opsi yang paling <b>mengamalkan</b> nilai itu pada konteks soal (digital, konflik sosial, keberagaman).</li>
          <li><b>Seimbang & kontekstual.</b> Jawaban terbaik menjaga persatuan (NKRI) dan toleransi (Bhinneka), bukan yang ekstrem (menolak total / menerima tanpa filter).</li>
          <li><b>Anti-radikalisme & integritas</b> hampir selalu menjadi sikap yang benar bila relevan.</li>
        </ul>

        <h3>Teknik umum HOTS (TWK/TIU/TKP)</h3>
        <ol>
          <li><b>Baca pertanyaannya dulu</b>, lalu skenarionya. Tandai kata kunci: "paling tepat", "kecuali", "utama".</li>
          <li><b>Eliminasi</b> opsi yang jelas keliru/ekstrem untuk mempersempit pilihan.</li>
          <li><b>Jangan terpaku.</b> Maksimal ~1 menit/soal. Ragu? Tandai dan lanjut.</li>
          <li><b>Cek konsistensi.</b> Untuk TKP, sikap idealmu harus konsisten antar-soal.</li>
        </ol>
        <p class="tip">💡 Latih langsung: kerjakan subtes TWK & TKP di app ini, lalu buka "Pembahasan per Soal" - tiap pembahasan menjelaskan mengapa satu sikap lebih ideal dari yang lain.</p>
      `
    }
  ];

  /* ---------------- BANK SOAL LATIHAN SKB (per rumpun) ---------------- */
  /* SKB asli bersifat spesifik per jabatan & instansi. Berikut latihan SKB-CAT
     per rumpun jabatan yang umum, sebagai gambaran format substansi. */
  DB.cpns.skbCategories = [
    {
      id:'skb-hukum', name:'SKB Rumpun Hukum', short:'SKB Hukum', icon:'⚖️', group:'skb', passing:null,
      desc:'Substansi hukum untuk jabatan di Kejaksaan, Kementerian Hukum, Mahkamah Agung, dll.',
      material:`<h3>SKB Rumpun Hukum</h3><p>Menguji penguasaan <b>hukum tata negara, pidana, perdata, administrasi negara,</b> dan peraturan perundang-undangan. Format umumnya <b>CAT substansi jabatan</b>. Untuk Kejaksaan/Kementerian Hukum sering ada tambahan: kesehatan, kesamaptaan, psikotes, wawancara.</p><p class="tip">💡 Kuasai UUD 1945, KUHP/KUHPerdata dasar, dan UU No. 12/2011 tentang pembentukan peraturan.</p>`,
      questions:[
        { t:'mc', q:'Dalam hierarki peraturan perundang-undangan (UU No. 12 Tahun 2011), kedudukan tertinggi ditempati oleh…', o:['Undang-Undang','Peraturan Pemerintah','UUD 1945','Peraturan Presiden','Perda'], a:2, e:'UUD 1945 menempati kedudukan tertinggi, diikuti Tap MPR, UU/Perppu, PP, Perpres, Perda Provinsi, Perda Kab/Kota.' },
        { t:'mc', q:'Asas hukum pidana yang menyatakan tidak ada perbuatan dapat dipidana tanpa aturan yang mengaturnya terlebih dahulu disebut…', o:['Asas legalitas','Asas retroaktif','Asas praduga bersalah','Asas oportunitas','Asas teritorial'], a:0, e:'Asas legalitas (nullum delictum nulla poena sine praevia lege poenali) - Pasal 1 ayat (1) KUHP.' },
        { t:'mc', q:'Lembaga yang berwenang menuntut perkara pidana di pengadilan adalah…', o:['Kepolisian','Kejaksaan','Mahkamah Agung','Advokat','Komnas HAM'], a:1, e:'Kejaksaan adalah lembaga pemerintah yang melaksanakan kekuasaan negara di bidang penuntutan.' },
        { t:'mc', q:'Asas yang menempatkan seseorang tidak bersalah sampai ada putusan pengadilan berkekuatan hukum tetap adalah…', o:['Asas legalitas','Asas praduga tak bersalah','Asas oportunitas','Asas ne bis in idem','Asas legalitas formil'], a:1, e:'Asas praduga tak bersalah (presumption of innocence) melindungi hak tersangka/terdakwa.' },
        { t:'mc', q:'Kekuasaan kehakiman di Indonesia dilaksanakan oleh Mahkamah Agung dan…', o:['Komisi Yudisial','Mahkamah Konstitusi','Kejaksaan Agung','DPR','Kepolisian'], a:1, e:'Pasal 24 UUD 1945: kekuasaan kehakiman dilakukan oleh MA dan badan peradilan di bawahnya serta oleh Mahkamah Konstitusi.' },
        { t:'mc', q:'"Ne bis in idem" berarti…', o:['Seseorang tidak boleh diadili dua kali untuk perkara yang sama','Hukum tidak berlaku surut','Semua orang sama di depan hukum','Tersangka berhak didampingi advokat','Hakim wajib memutus'], a:0, e:'Ne bis in idem: seseorang tidak dapat dituntut/diadili dua kali atas perbuatan yang untuknya telah ada putusan berkekuatan hukum tetap.' },
        { t:'mc', q:'Perjanjian yang sah menurut Pasal 1320 KUHPerdata harus memenuhi syarat berikut, KECUALI…', o:['Sepakat para pihak','Kecakapan','Suatu hal tertentu','Sebab yang halal','Disahkan notaris'], a:4, e:'Empat syarat sah perjanjian: sepakat, cakap, hal tertentu, dan sebab yang halal. Pengesahan notaris bukan syarat umum keabsahan.' },
        { t:'mc', q:'Hukum yang mengatur hubungan antara negara dan warga negara serta penyelenggaraan pemerintahan disebut hukum…', o:['Perdata','Pidana','Administrasi negara/tata negara','Adat','Internasional'], a:2, e:'Hukum tata negara & administrasi negara mengatur organisasi negara serta hubungan negara dengan warganya.' }
      ]
    },
    {
      id:'skb-keuangan', name:'SKB Rumpun Keuangan & Akuntansi', short:'SKB Keuangan', icon:'💰', group:'skb', passing:null,
      desc:'Substansi keuangan negara, akuntansi, dan audit untuk Kemenkeu, BPK, BPKP, dll.',
      material:`<h3>SKB Rumpun Keuangan & Akuntansi</h3><p>Menguji <b>akuntansi dasar, keuangan negara (APBN), perpajakan,</b> dan <b>audit</b>. Acuan: UU No. 17/2003 (Keuangan Negara), UU No. 1/2004 (Perbendaharaan), Standar Akuntansi Pemerintahan.</p><p class="tip">💡 Pahami persamaan akuntansi, siklus APBN, dan peran BPK vs BPKP.</p>`,
      questions:[
        { t:'mc', q:'Persamaan dasar akuntansi yang benar adalah…', o:['Aset = Liabilitas - Ekuitas','Aset = Liabilitas + Ekuitas','Ekuitas = Aset + Liabilitas','Liabilitas = Aset + Ekuitas','Aset = Pendapatan - Beban'], a:1, e:'Persamaan dasar akuntansi: Aset = Liabilitas + Ekuitas (Harta = Utang + Modal).' },
        { t:'mc', q:'Keuangan negara diatur dalam…', o:['UU No. 17 Tahun 2003','UU No. 21 Tahun 2011','UU No. 23 Tahun 1999','UU No. 12 Tahun 2011','UU No. 25 Tahun 2004'], a:0, e:'UU No. 17 Tahun 2003 tentang Keuangan Negara menjadi acuan utama pengelolaan keuangan negara.' },
        { t:'mc', q:'Lembaga negara yang memeriksa pengelolaan & tanggung jawab keuangan negara secara eksternal adalah…', o:['BPKP','BPK','OJK','Inspektorat','Kemenkeu'], a:1, e:'BPK (Badan Pemeriksa Keuangan) adalah pemeriksa eksternal keuangan negara (lembaga negara independen). BPKP adalah pengawas intern pemerintah.' },
        { t:'mc', q:'APBN ditetapkan setiap tahun dengan…', o:['Peraturan Presiden','Undang-Undang','Peraturan Menteri Keuangan','Keputusan DPR','Peraturan Pemerintah'], a:1, e:'APBN ditetapkan dengan Undang-Undang setiap tahun (Pasal 23 UUD 1945), dibahas Pemerintah bersama DPR.' },
        { t:'mc', q:'Opini tertinggi yang dapat diberikan BPK atas laporan keuangan adalah…', o:['Wajar Dengan Pengecualian (WDP)','Wajar Tanpa Pengecualian (WTP)','Tidak Wajar','Tidak Menyatakan Pendapat (TMP)','Disclaimer'], a:1, e:'WTP (Wajar Tanpa Pengecualian / unqualified opinion) adalah opini terbaik, menunjukkan laporan keuangan wajar dalam semua hal material.' },
        { t:'mc', q:'Pajak Penghasilan (PPh) dan Pajak Pertambahan Nilai (PPN) merupakan sumber penerimaan negara dari…', o:['Hibah','Penerimaan perpajakan','PNBP','Pinjaman','Penerimaan daerah'], a:1, e:'PPh dan PPN adalah bagian penerimaan perpajakan, komponen terbesar pendapatan negara dalam APBN.' },
        { t:'mc', q:'Akun yang bertambah di sisi DEBIT adalah…', o:['Liabilitas','Ekuitas','Pendapatan','Aset/beban','Modal'], a:3, e:'Dalam akuntansi, aset dan beban bertambah di debit; liabilitas, ekuitas, dan pendapatan bertambah di kredit.' },
        { t:'mc', q:'Dokumen yang menjadi dasar pelaksanaan anggaran kementerian/lembaga adalah…', o:['DIPA','SPM','SP2D','LRA','RKA'], a:0, e:'DIPA (Daftar Isian Pelaksanaan Anggaran) adalah dokumen pelaksanaan anggaran yang menjadi dasar pengeluaran negara oleh K/L.' }
      ]
    },
    {
      id:'skb-statistik', name:'SKB Rumpun Statistik', short:'SKB Statistik', icon:'📊', group:'skb', passing:null,
      desc:'Konsep statistik & metodologi untuk jabatan di BPS dan pengelola data.',
      material:`<h3>SKB Rumpun Statistik</h3><p>Menguji <b>konsep dasar statistik</b> (ukuran pemusatan & penyebaran), <b>metode pengumpulan data</b> (sensus vs survei, sampling), dan <b>penyajian data</b>. Relevan untuk BPS & jabatan statistisi/pengolah data.</p><p class="tip">💡 Kuasai beda sensus vs survei, jenis data, dan ukuran tendensi sentral.</p>`,
      questions:[
        { t:'mc', q:'Pengumpulan data dari SELURUH anggota populasi disebut…', o:['Survei','Sampel','Sensus','Observasi','Wawancara'], a:2, e:'Sensus = pencacahan seluruh unit populasi. Survei mengambil sebagian (sampel) populasi.' },
        { t:'mc', q:'Nilai yang paling sering muncul dalam sekumpulan data disebut…', o:['Mean','Median','Modus','Range','Varians'], a:2, e:'Modus = nilai yang frekuensinya paling tinggi. Mean = rata-rata; median = nilai tengah.' },
        { t:'mc', q:'Dari data 4, 6, 6, 8, 11, nilai median-nya adalah…', o:['6','7','8','6,5','11'], a:0, e:'Data terurut: 4,6,6,8,11. Median = nilai tengah (data ke-3) = 6.' },
        { t:'mc', q:'Data yang dinyatakan dalam kategori (mis. jenis kelamin, agama) termasuk jenis data…', o:['Kuantitatif kontinu','Kuantitatif diskret','Kualitatif/kategorik','Rasio','Interval'], a:2, e:'Data kategori (nominal/ordinal) adalah data kualitatif/kategorik. Data angka hasil pengukuran adalah kuantitatif.' },
        { t:'mc', q:'Teknik pengambilan sampel di mana setiap anggota populasi punya peluang sama terpilih disebut…', o:['Purposive sampling','Quota sampling','Simple random sampling','Snowball sampling','Convenience sampling'], a:2, e:'Simple random sampling memberi peluang sama bagi tiap anggota populasi; termasuk probability sampling.' },
        { t:'mc', q:'Ukuran yang menggambarkan SEBARAN data terhadap rata-ratanya adalah…', o:['Mean','Modus','Median','Standar deviasi','Frekuensi'], a:3, e:'Standar deviasi (simpangan baku) mengukur seberapa jauh data tersebar dari rata-ratanya. Mean/median/modus adalah ukuran pemusatan.' },
        { t:'mc', q:'Indikator yang mengukur perubahan harga sekelompok barang/jasa dari waktu ke waktu dan dipakai menghitung inflasi adalah…', o:['IPM','IHK','PDB','Gini Ratio','TPT'], a:1, e:'IHK (Indeks Harga Konsumen) - dirilis BPS - mengukur perubahan harga; menjadi dasar penghitungan inflasi.' }
      ]
    },
    {
      id:'skb-pemerintahan', name:'SKB Wawasan Pemerintahan & ASN', short:'SKB Pemerintahan', icon:'🏢', group:'skb', passing:null,
      desc:'Manajemen ASN, reformasi birokrasi, pelayanan publik, dan tata kelola pemerintahan.',
      material:`<h3>SKB Wawasan Pemerintahan & ASN</h3><p>Menguji pemahaman <b>UU ASN, reformasi birokrasi, pelayanan publik,</b> dan tata kelola. Acuan: UU No. 20 Tahun 2023 tentang ASN, UU No. 25 Tahun 2009 (Pelayanan Publik), nilai dasar <b>BerAKHLAK</b>.</p><p class="tip">💡 Hafalkan & pahami penerapan nilai BerAKHLAK dan jenis-jenis ASN.</p>`,
      questions:[
        { t:'mc', q:'Manajemen Aparatur Sipil Negara saat ini diatur dalam…', o:['UU No. 5 Tahun 2014','UU No. 20 Tahun 2023','UU No. 43 Tahun 1999','UU No. 25 Tahun 2009','UU No. 23 Tahun 2014'], a:1, e:'UU No. 20 Tahun 2023 tentang ASN menggantikan UU No. 5 Tahun 2014.' },
        { t:'mc', q:'ASN terdiri atas dua jenis, yaitu…', o:['PNS dan TNI','PNS dan PPPK','PPPK dan honorer','PNS dan BUMN','Pejabat dan staf'], a:1, e:'ASN terdiri atas Pegawai Negeri Sipil (PNS) dan Pegawai Pemerintah dengan Perjanjian Kerja (PPPK).' },
        { t:'mc', q:'Nilai dasar ASN "BerAKHLAK" merupakan akronim dari Berorientasi Pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, dan…', o:['Komunikatif','Kolaboratif','Konsisten','Kreatif','Kompetitif'], a:1, e:'BerAKHLAK = Berorientasi Pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif.' },
        { t:'mc', q:'Penyelenggaraan pelayanan publik diatur dalam…', o:['UU No. 25 Tahun 2009','UU No. 14 Tahun 2008','UU No. 20 Tahun 2023','UU No. 30 Tahun 2014','UU No. 12 Tahun 2011'], a:0, e:'UU No. 25 Tahun 2009 tentang Pelayanan Publik menjadi acuan standar pelayanan instansi pemerintah.' },
        { t:'mc', q:'Tujuan utama reformasi birokrasi adalah mewujudkan birokrasi yang…', o:['Berbelit dan hierarkis','Bersih, akuntabel, dan melayani','Tertutup','Banyak pegawai','Mahal'], a:1, e:'Reformasi birokrasi menuju pemerintahan yang bersih, akuntabel, efektif, efisien, dan berorientasi pelayanan publik.' },
        { t:'mc', q:'Asas keterbukaan informasi publik dijamin melalui…', o:['UU No. 14 Tahun 2008','UU No. 25 Tahun 2009','UU No. 11 Tahun 2008','UU No. 20 Tahun 2023','UU No. 5 Tahun 2014'], a:0, e:'UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik menjamin hak masyarakat memperoleh informasi badan publik.' },
        { t:'mc', q:'Manajemen kinerja ASN yang baik menekankan orientasi pada…', o:['Senioritas semata','Hasil & dampak (outcome)','Kehadiran fisik saja','Loyalitas pada atasan pribadi','Jumlah rapat'], a:1, e:'Sistem merit & manajemen kinerja ASN menekankan capaian hasil/kinerja dan dampak, bukan sekadar kehadiran atau senioritas.' }
      ]
    }
  ];
})();
