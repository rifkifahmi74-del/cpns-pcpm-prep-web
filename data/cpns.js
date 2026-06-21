/* =====================================================================
   BANK SOAL & MATERI - CPNS (Seleksi Kompetensi Dasar / SKD)
   ---------------------------------------------------------------------
   Sumber acuan struktur & passing grade: Kepmenpan RB No. 321 Tahun 2024
   (110 soal: TWK 30, TIU 35, TKP 45 • durasi 100 menit • skor maks 550).
   Soal di bawah adalah SOAL LATIHAN yang meniru format & tingkat
   kesulitan asli (soal asli SKD bersifat rahasia / tidak dipublikasikan).

   Skema soal:
   - { t:'mc',  q, o:[5 opsi], a:indexJawabanBenar, e:pembahasan }   -> benar=5, salah/kosong=0
   - { t:'tkp', q, o:[{x:teks, s:skor 1..5}], e:pembahasan }          -> skor 1..5 per opsi
   Untuk menambah soal: cukup tambahkan objek baru ke array questions.
   ===================================================================== */
window.EXAM_DB = window.EXAM_DB || {};
window.EXAM_DB.cpns = {
  id: 'cpns',
  name: 'CPNS - Seleksi Kompetensi Dasar (SKD)',
  short: 'CPNS · SKD',
  tagline: 'Tes Wawasan Kebangsaan • Intelegensi Umum • Karakteristik Pribadi',
  accent: '#0a84ff',
  official: { label: 'sscasn.bkn.go.id', url: 'https://sscasn.bkn.go.id' },
  exam: {
    totalSoal: 110,
    durationMin: 100,
    maxScore: 550,
    passing: { twk: 65, tiu: 80, tkp: 166 },
    note: 'Sistem gugur per-komponen: ketiga subtes harus mencapai nilai ambang batas masing-masing secara bersamaan.'
  },
  categories: [
    /* ============================ TWK ============================ */
    {
      id: 'twk',
      name: 'Tes Wawasan Kebangsaan (TWK)',
      short: 'TWK',
      jumlahSoal: 30,
      maxScore: 150,
      passing: 65,
      icon: '🇮🇩',
      desc: 'Nasionalisme, integritas, bela negara, Pilar Negara (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika), dan bahasa negara.',
      material: `
        <h3>Apa yang diukur TWK?</h3>
        <p>TWK menguji penguasaan pengetahuan & kemampuan mengimplementasikan <b>nasionalisme, integritas, bela negara, pilar negara,</b> dan <b>bahasa negara</b>. Total <b>30 soal</b>, jawaban benar bernilai <b>5</b>, salah/kosong <b>0</b>. Nilai ambang batas <b>65</b>.</p>
        <h3>1. Pancasila</h3>
        <ul>
          <li>Istilah "Pancasila" pertama dikemukakan <b>Ir. Soekarno</b> pada pidato <b>1 Juni 1945</b> (kini Hari Lahir Pancasila).</li>
          <li>Rumusan Pancasila yang sah & resmi terdapat dalam <b>Pembukaan UUD 1945 alinea ke-4</b>.</li>
          <li>Sila I sempat berbunyi "…dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya" (Piagam Jakarta, 22 Juni 1945), lalu diubah menjadi <b>"Ketuhanan Yang Maha Esa"</b> pada <b>18 Agustus 1945</b>.</li>
        </ul>
        <h3>2. UUD 1945</h3>
        <ul>
          <li>Disahkan <b>PPKI 18 Agustus 1945</b>. Telah <b>diamandemen 4 kali</b> (1999, 2000, 2001, 2002).</li>
          <li>Pembukaan UUD 1945 <b>tidak dapat diubah</b> karena memuat dasar negara & tujuan nasional (alinea ke-4).</li>
        </ul>
        <h3>3. Bhinneka Tunggal Ika & NKRI</h3>
        <ul>
          <li>Semboyan "Bhinneka Tunggal Ika" berasal dari Kitab <b>Sutasoma</b> karya <b>Mpu Tantular</b> (era Majapahit).</li>
          <li>Bentuk negara: <b>kesatuan</b>; bentuk pemerintahan: <b>republik</b> (Pasal 1 ayat 1 UUD 1945).</li>
        </ul>
        <h3>4. Lambang Garuda Pancasila</h3>
        <p>Jumlah bulu melambangkan 17-8-1945: <b>sayap 17</b>, <b>ekor 8</b>, <b>pangkal ekor 19</b>, <b>leher 45</b>. Diatur dalam PP No. 66 Tahun 1951.</p>
        <h3>5. Sejarah kebangsaan penting</h3>
        <ul>
          <li><b>Sumpah Pemuda</b>: 28 Oktober 1928 (Kongres Pemuda II).</li>
          <li><b>BPUPKI</b> sidang I: 29 Mei - 1 Juni 1945 (membahas dasar negara).</li>
          <li><b>Proklamasi</b>: 17 Agustus 1945 oleh Soekarno-Hatta.</li>
        </ul>
        <p class="tip">💡 Tips: TWK banyak soal hafalan + penerapan sikap. Kuasai tanggal/nama tokoh dan pahami makna tiap sila secara aplikatif.</p>
      `,
      questions: [
        { t:'mc', q:'Istilah "Pancasila" sebagai dasar negara pertama kali dikemukakan dalam sidang BPUPKI oleh…', o:['Mr. Muhammad Yamin','Mr. Soepomo','Ir. Soekarno','Drs. Mohammad Hatta','Mr. A.A. Maramis'], a:2, e:'Istilah "Pancasila" pertama kali dikemukakan Ir. Soekarno dalam pidatonya pada 1 Juni 1945 di sidang pertama BPUPKI. Tanggal tersebut kini diperingati sebagai Hari Lahir Pancasila.' },
        { t:'mc', q:'Rumusan Pancasila yang sah dan resmi sebagai dasar negara tercantum dalam…', o:['Piagam Jakarta','Pidato Soekarno 1 Juni 1945','Pembukaan UUD 1945 alinea keempat','Ketetapan MPR','Batang Tubuh UUD 1945'], a:2, e:'Rumusan Pancasila yang sah terdapat dalam Pembukaan UUD 1945 alinea ke-4 yang disahkan PPKI pada 18 Agustus 1945. Piagam Jakarta hanyalah rancangan awal.' },
        { t:'mc', q:'Sila pertama dalam Piagam Jakarta (22 Juni 1945) diubah menjadi "Ketuhanan Yang Maha Esa" pada tanggal…', o:['1 Juni 1945','22 Juni 1945','17 Agustus 1945','18 Agustus 1945','29 Mei 1945'], a:3, e:'Tujuh kata pada sila pertama Piagam Jakarta dihapus dan diubah menjadi "Ketuhanan Yang Maha Esa" dalam sidang PPKI 18 Agustus 1945, demi persatuan bangsa.' },
        { t:'mc', q:'Semboyan "Bhinneka Tunggal Ika" berasal dari sebuah kitab karya Mpu Tantular, yaitu kitab…', o:['Negarakertagama','Sutasoma','Arjunawiwaha','Pararaton','Smaradahana'], a:1, e:'Bhinneka Tunggal Ika diambil dari Kitab Sutasoma karya Mpu Tantular pada masa Kerajaan Majapahit. Maknanya "berbeda-beda tetapi tetap satu".' },
        { t:'mc', q:'UUD 1945 telah mengalami amandemen sebanyak…', o:['2 kali','3 kali','4 kali','5 kali','Belum pernah'], a:2, e:'UUD 1945 diamandemen 4 kali oleh MPR: tahun 1999, 2000, 2001, dan 2002.' },
        { t:'mc', q:'Bagian UUD 1945 yang tidak dapat diubah/diamandemen karena memuat dasar negara dan tujuan nasional adalah…', o:['Batang Tubuh','Pasal 1','Aturan Peralihan','Pembukaan','Penjelasan'], a:3, e:'Pembukaan UUD 1945 tidak dapat diubah karena memuat Pancasila sebagai dasar negara dan tujuan nasional. Mengubahnya sama dengan membubarkan negara.' },
        { t:'mc', q:'Pada lambang Garuda Pancasila, jumlah bulu pada leher berjumlah 45 yang melambangkan…', o:['Bulan kemerdekaan','Tanggal kemerdekaan','Tahun kemerdekaan (1945)','Jumlah provinsi','Jumlah sila'], a:2, e:'Jumlah bulu Garuda melambangkan 17-8-1945: sayap 17 (tanggal), ekor 8 (bulan), leher 45 (tahun), pangkal ekor 19.' },
        { t:'mc', q:'Peristiwa Sumpah Pemuda yang menyatakan satu nusa, satu bangsa, dan satu bahasa terjadi pada…', o:['20 Mei 1908','28 Oktober 1928','17 Agustus 1945','1 Juni 1945','10 November 1945'], a:1, e:'Sumpah Pemuda diikrarkan pada 28 Oktober 1928 dalam Kongres Pemuda II. 20 Mei 1908 adalah Hari Kebangkitan Nasional (Budi Utomo).' },
        { t:'mc', q:'Bentuk negara dan bentuk pemerintahan Indonesia menurut Pasal 1 ayat (1) UUD 1945 adalah…', o:['Federasi dan republik','Kesatuan dan republik','Kesatuan dan monarki','Serikat dan presidensial','Kesatuan dan parlementer'], a:1, e:'Pasal 1 ayat (1) UUD 1945: "Negara Indonesia ialah Negara Kesatuan, yang berbentuk Republik." Bentuk negara kesatuan, bentuk pemerintahan republik.' },
        { t:'mc', q:'Sidang pertama BPUPKI (29 Mei - 1 Juni 1945) membahas tentang…', o:['Pengesahan UUD','Pemilihan presiden','Rumusan dasar negara','Pembentukan provinsi','Pembubaran PPKI'], a:2, e:'Sidang pertama BPUPKI membahas dasar negara Indonesia merdeka, dengan usulan dari Muh. Yamin, Soepomo, dan Soekarno.' },
        { t:'mc', q:'Lembaga yang mengesahkan UUD 1945, memilih presiden & wakil presiden pertama pada 18 Agustus 1945 adalah…', o:['BPUPKI','PPKI','KNIP','MPR','DPR'], a:1, e:'PPKI (Panitia Persiapan Kemerdekaan Indonesia) pada 18 Agustus 1945 mengesahkan UUD 1945 dan memilih Soekarno-Hatta sebagai presiden dan wakil presiden.' },
        { t:'mc', q:'Sila keempat Pancasila dilambangkan dengan gambar…', o:['Bintang','Rantai','Pohon beringin','Kepala banteng','Padi dan kapas'], a:3, e:'Sila ke-4 (Kerakyatan) dilambangkan kepala banteng. Bintang=sila 1, rantai=sila 2, beringin=sila 3, padi-kapas=sila 5.' },
        { t:'mc', q:'Nilai yang terkandung dalam sila kedua Pancasila, "Kemanusiaan yang adil dan beradab", tercermin dalam sikap…', o:['Beribadah sesuai agama','Mengutamakan musyawarah','Menghormati hak asasi setiap orang tanpa membedakan suku','Bangga menggunakan produk dalam negeri','Membayar pajak tepat waktu'], a:2, e:'Sila ke-2 menekankan pengakuan persamaan derajat dan hak asasi manusia tanpa membedakan suku, agama, ras. Menghormati HAM adalah cerminannya.' },
        { t:'mc', q:'Pembukaan UUD 1945 alinea keempat memuat empat tujuan negara. Salah satunya adalah…', o:['Menjaga ketertiban dunia berdasarkan kemerdekaan','Memajukan kesejahteraan umum','Menegakkan supremasi militer','Mengutamakan kepentingan golongan','Mempertahankan sistem feodal'], a:1, e:'Empat tujuan negara: melindungi segenap bangsa, memajukan kesejahteraan umum, mencerdaskan kehidupan bangsa, dan ikut melaksanakan ketertiban dunia. "Memajukan kesejahteraan umum" termasuk di dalamnya.' },
        { t:'mc', q:'Hak warga negara untuk mendapat pendidikan dijamin dalam UUD 1945, dan negara memprioritaskan anggaran pendidikan sekurang-kurangnya…', o:['10% dari APBN','15% dari APBN','20% dari APBN dan APBD','25% dari APBN','30% dari APBN'], a:2, e:'Pasal 31 ayat (4) UUD 1945 mewajibkan negara memprioritaskan anggaran pendidikan sekurang-kurangnya 20% dari APBN dan APBD.' },
        { t:'mc', q:'Bela negara merupakan hak sekaligus kewajiban setiap warga negara. Hal ini diatur dalam UUD 1945 Pasal…', o:['Pasal 27 ayat (3)','Pasal 28','Pasal 29','Pasal 30 ayat (1)','Pasal 31'], a:0, e:'Pasal 27 ayat (3): "Setiap warga negara berhak dan wajib ikut serta dalam upaya pembelaan negara." Pasal 30 ayat (1) menyangkut pertahanan & keamanan.' },
        { t:'mc', q:'Wawasan Nusantara sebagai cara pandang bangsa Indonesia tentang diri dan lingkungannya berlandaskan…', o:['Liberalisme','Pancasila dan UUD 1945','Sosialisme','Kapitalisme','Sekularisme'], a:1, e:'Wawasan Nusantara berlandaskan Pancasila sebagai landasan idiil dan UUD 1945 sebagai landasan konstitusional, demi persatuan dan kesatuan bangsa.' },
        { t:'mc', q:'Sikap nasionalisme yang tepat dalam menghadapi masuknya budaya asing adalah…', o:['Menolak seluruh budaya asing','Menerima semua tanpa seleksi','Menyaring sesuai nilai-nilai Pancasila','Mengikuti tren tanpa berpikir','Melarang interaksi dengan asing'], a:2, e:'Nasionalisme modern bersifat terbuka namun selektif: menyaring budaya asing agar sesuai nilai-nilai Pancasila, bukan menolak total maupun menerima tanpa filter.' },
        { t:'mc', q:'Berdasarkan susunannya, Pancasila bersifat hierarkis-piramidal, artinya…', o:['Semua sila berdiri sendiri','Sila pertama menjiwai sila berikutnya dan menjadi dasar','Sila kelima paling utama','Urutan sila boleh ditukar','Hanya sila ketiga yang penting'], a:1, e:'Hierarkis-piramidal: sila yang di atas menjiwai & mendasari sila di bawahnya. Sila ke-1 (Ketuhanan) menjiwai keseluruhan, dan tiap sila merupakan satu kesatuan utuh.' },
        { t:'mc', q:'Penggunaan bahasa Indonesia yang baik dan benar dalam dokumen resmi negara merupakan wujud…', o:['Sikap individualisme','Kebanggaan terhadap bahasa negara','Diskriminasi bahasa daerah','Pengaruh budaya asing','Formalitas semata'], a:1, e:'Bahasa Indonesia adalah bahasa negara (Pasal 36 UUD 1945). Menggunakannya dengan baik dan benar pada dokumen resmi adalah wujud kebanggaan dan kesetiaan terhadap bahasa negara.' },
        { t:'mc', q:'Hari Kebangkitan Nasional yang diperingati setiap 20 Mei dikaitkan dengan berdirinya organisasi…', o:['Sarekat Islam','Budi Utomo','Indische Partij','Perhimpunan Indonesia','Taman Siswa'], a:1, e:'Budi Utomo berdiri 20 Mei 1908 dan dianggap sebagai tonggak kebangkitan nasional; tanggalnya diperingati sebagai Hari Kebangkitan Nasional.' },
        { t:'mc', q:'Lagu kebangsaan "Indonesia Raya" diciptakan oleh…', o:['Ismail Marzuki','C. Simanjuntak','W.R. Supratman','Kusbini','H. Mutahar'], a:2, e:'"Indonesia Raya" diciptakan W.R. Supratman dan pertama diperdengarkan pada Kongres Pemuda II, 28 Oktober 1928.' },
        { t:'mc', q:'Bendera pusaka Sang Saka Merah Putih yang dikibarkan saat Proklamasi dijahit oleh…', o:['Fatmawati','Megawati','Cut Nyak Dien','Rahmi Hatta','S.K. Trimurti'], a:0, e:'Bendera pusaka dijahit oleh Fatmawati, istri Soekarno, dan dikibarkan pada 17 Agustus 1945.' },
        { t:'mc', q:'Bendera, Bahasa, Lambang Negara, serta Lagu Kebangsaan diatur secara khusus dalam…', o:['UU No. 24 Tahun 2009','UU No. 12 Tahun 2011','UU No. 39 Tahun 1999','UU No. 23 Tahun 2014','PP No. 66 Tahun 1951'], a:0, e:'UU No. 24 Tahun 2009 mengatur Bendera, Bahasa, dan Lambang Negara, serta Lagu Kebangsaan.' },
        { t:'mc', q:'Pasal 1 ayat (3) UUD 1945 menegaskan bahwa Indonesia adalah…', o:['Negara kekuasaan','Negara hukum','Negara agama','Negara liberal','Negara federal'], a:1, e:'Pasal 1 ayat (3): "Negara Indonesia adalah negara hukum." Segala tindakan harus berdasarkan hukum.' },
        { t:'mc', q:'Lembaga negara yang berwenang menguji undang-undang terhadap UUD 1945 adalah…', o:['Mahkamah Agung','Mahkamah Konstitusi','Komisi Yudisial','DPR','BPK'], a:1, e:'Pengujian UU terhadap UUD (judicial review) merupakan kewenangan Mahkamah Konstitusi (MK). MA menguji peraturan di bawah UU.' },
        { t:'mc', q:'Sejak amandemen, presiden dan wakil presiden Indonesia dipilih melalui…', o:['MPR','DPR','Pemilihan langsung oleh rakyat','Dewan Pertimbangan','Partai politik'], a:2, e:'Sejak Pemilu 2004, presiden & wakil presiden dipilih langsung oleh rakyat dalam satu paket (Pasal 6A UUD 1945).' },
        { t:'mc', q:'Berdasarkan UU No. 3 Tahun 2022, ibu kota negara Indonesia dipindahkan ke Nusantara yang berlokasi di…', o:['Jawa Barat','Kalimantan Timur','Sulawesi Selatan','Sumatra Utara','Kalimantan Selatan'], a:1, e:'UU No. 3 Tahun 2022 tentang Ibu Kota Negara menetapkan IKN Nusantara di Provinsi Kalimantan Timur.' },
        { t:'mc', q:'Pancasila disebut sebagai ideologi terbuka, artinya…', o:['Boleh diganti ideologi lain','Nilai dasarnya tetap, namun penerapannya dapat menyesuaikan perkembangan zaman','Terbuka untuk semua paham termasuk yang bertentangan','Hanya berlaku di era tertentu','Tidak memiliki nilai baku'], a:1, e:'Ideologi terbuka: nilai dasar (Pancasila) bersifat tetap, tetapi nilai instrumental & praksisnya dapat berkembang sesuai zaman tanpa mengubah nilai dasarnya.' },
        { t:'mc', q:'Sila kelima Pancasila, "Keadilan sosial bagi seluruh rakyat Indonesia", dilambangkan dengan…', o:['Bintang','Rantai','Padi dan kapas','Kepala banteng','Pohon beringin'], a:2, e:'Sila ke-5 dilambangkan padi dan kapas, simbol kebutuhan pangan & sandang - kemakmuran dan keadilan sosial.' },
        { t:'mc', q:'Hak Asasi Manusia di Indonesia secara khusus diatur dalam…', o:['UU No. 39 Tahun 1999','UU No. 26 Tahun 2000','UU No. 40 Tahun 2008','UU No. 12 Tahun 2005','UU No. 24 Tahun 2009'], a:0, e:'UU No. 39 Tahun 1999 tentang Hak Asasi Manusia menjadi landasan utama perlindungan HAM di Indonesia.' },
        { t:'mc', q:'Setiap tanggal 1 Oktober diperingati sebagai…', o:['Hari Lahir Pancasila','Hari Kesaktian Pancasila','Hari Sumpah Pemuda','Hari Konstitusi','Hari Bela Negara'], a:1, e:'1 Oktober = Hari Kesaktian Pancasila (memperingati keberhasilan mempertahankan Pancasila). 1 Juni = Hari Lahir Pancasila.' },
        { t:'mc', q:'Butir ketiga Sumpah Pemuda berbunyi menjunjung…', o:['Satu tanah air','Satu bangsa','Bahasa persatuan, bahasa Indonesia','Satu cita-cita','Satu kebudayaan'], a:2, e:'Butir ketiga: "menjunjung bahasa persatuan, bahasa Indonesia." (Butir 1: satu tanah air; butir 2: satu bangsa.)' },
        { t:'mc', q:'Nilai-nilai dasar bela negara antara lain cinta tanah air, sadar berbangsa dan bernegara, setia pada Pancasila, rela berkorban, serta…', o:['Mengutamakan suku sendiri','Kemampuan awal bela negara','Menolak teknologi asing','Mengabdi pada golongan','Menutup diri dari dunia luar'], a:1, e:'Lima nilai dasar bela negara: cinta tanah air; kesadaran berbangsa-bernegara; yakin pada Pancasila; rela berkorban; serta memiliki kemampuan awal bela negara.' },
        { t:'mc', q:'Pemerintahan daerah dan otonomi daerah di Indonesia saat ini diatur terutama oleh…', o:['UU No. 32 Tahun 2004','UU No. 23 Tahun 2014','UU No. 22 Tahun 1999','UU No. 5 Tahun 1974','UU No. 2 Tahun 2015'], a:1, e:'UU No. 23 Tahun 2014 tentang Pemerintahan Daerah menjadi acuan utama otonomi daerah (menggantikan UU 32/2004).' },
        { t:'mc', q:'Salah satu cerminan sikap menjaga persatuan dalam masyarakat majemuk adalah…', o:['Memaksakan budaya mayoritas','Mengutamakan toleransi dan menghargai perbedaan','Membentuk kelompok eksklusif','Menolak adat daerah lain','Menghindari interaksi antarsuku'], a:1, e:'Dalam masyarakat majemuk, toleransi dan saling menghargai perbedaan SARA adalah kunci menjaga persatuan sesuai semboyan Bhinneka Tunggal Ika.' }
      ]
    },

    /* ============================ TIU ============================ */
    {
      id: 'tiu',
      name: 'Tes Intelegensi Umum (TIU)',
      short: 'TIU',
      jumlahSoal: 35,
      maxScore: 175,
      passing: 80,
      icon: '🧠',
      desc: 'Kemampuan verbal (analogi, silogisme, analitis), numerik (deret, hitung, soal cerita), dan figural.',
      material: `
        <h3>Apa yang diukur TIU?</h3>
        <p>TIU mengukur kemampuan <b>verbal</b> (analogi, silogisme, analitis), <b>numerik</b> (berhitung, deret angka, perbandingan, soal cerita), dan <b>figural</b> (analogi & ketidaksamaan gambar). Total <b>35 soal</b>, benar=<b>5</b>, salah/kosong=<b>0</b>. Ambang batas <b>80</b> (butuh ±16 benar).</p>
        <h3>1. Verbal</h3>
        <ul>
          <li><b>Analogi</b>: cari hubungan kata. Contoh: <i>Dokter : Pasien = Guru : Murid</i> (penyedia jasa : penerima).</li>
          <li><b>Silogisme</b>: tarik kesimpulan logis dari premis. "Semua A adalah B; C adalah A → C adalah B."</li>
          <li><b>Analitis</b>: penalaran dari beberapa syarat (urutan, posisi duduk, jadwal).</li>
        </ul>
        <h3>2. Numerik</h3>
        <ul>
          <li><b>Deret</b>: temukan pola (+, ×, selang-seling, kuadrat). Contoh 2,4,8,16 → ×2.</li>
          <li><b>Perbandingan & persen</b>, kecepatan-jarak-waktu, untung-rugi.</li>
          <li>Trik: kerjakan yang cepat dulu, jangan terpaku satu soal sulit.</li>
        </ul>
        <h3>3. Figural</h3>
        <p>Pola gambar: rotasi, pencerminan, penambahan elemen. Latih kepekaan terhadap arah & jumlah elemen.</p>
        <p class="tip">💡 TIU memakai sistem benar=5/salah=0, jadi <b>jangan biarkan soal kosong</b> kalau bisa menebak terarah.</p>
      `,
      questions: [
        { t:'mc', q:'ANALOGI - DOKTER : STETOSKOP = PELUKIS : …', o:['Kanvas','Kuas','Cat','Galeri','Pameran'], a:1, e:'Stetoskop adalah alat kerja utama dokter. Alat kerja utama pelukis untuk menggoreskan cat adalah kuas. Kanvas/cat adalah medium/bahan, bukan alat utama.' },
        { t:'mc', q:'SINONIM - kata "FLUKTUASI" paling tepat bermakna…', o:['Penurunan tetap','Ketidaktetapan/naik-turun','Kenaikan tajam','Keseimbangan','Pemberhentian'], a:1, e:'Fluktuasi = gejala naik-turun / perubahan yang tidak tetap (misalnya harga atau nilai).' },
        { t:'mc', q:'ANTONIM - lawan kata "GANJIL" adalah…', o:['Aneh','Ganjal','Genap','Tunggal','Lazim'], a:2, e:'Dalam konteks bilangan, lawan "ganjil" adalah "genap". Pilihan lain menjebak makna "aneh".' },
        { t:'mc', q:'DERET - Lanjutan dari 3, 6, 12, 24, 48, … adalah…', o:['60','72','96','108','144'], a:2, e:'Pola dikali 2 setiap suku: 48 × 2 = 96.' },
        { t:'mc', q:'DERET - Tentukan suku berikutnya: 1, 4, 9, 16, 25, …', o:['30','36','40','45','49'], a:1, e:'Deret bilangan kuadrat: 1²,2²,3²,4²,5²,… Suku berikutnya 6² = 36.' },
        { t:'mc', q:'DERET LARIK - 2, 5, 11, 23, 47, …', o:['90','93','95','94','96'], a:2, e:'Polanya ×2 lalu +1: 2→5 (2×2+1), 5→11, 11→23, 23→47, 47×2+1 = 95.' },
        { t:'mc', q:'SILOGISME - Semua pegawai negeri wajib disiplin. Budi adalah pegawai negeri. Maka…', o:['Budi belum tentu disiplin','Budi wajib disiplin','Budi tidak disiplin','Sebagian pegawai disiplin','Budi bukan pegawai'], a:1, e:'Premis: semua PNS wajib disiplin; Budi PNS. Kesimpulan valid: Budi wajib disiplin (modus: semua A adalah B; Budi A → Budi B).' },
        { t:'mc', q:'SILOGISME - Jika hujan maka jalan basah. Jalan tidak basah. Maka…', o:['Hujan','Tidak hujan','Mungkin hujan','Jalan kering karena panas','Tidak dapat disimpulkan'], a:1, e:'Modus tollens: p→q, ~q, maka ~p. Karena jalan tidak basah, maka tidak hujan.' },
        { t:'mc', q:'ARITMETIKA - 35% dari 240 adalah…', o:['74','82','84','86','96'], a:2, e:'35% × 240 = 0,35 × 240 = 84.' },
        { t:'mc', q:'SOAL CERITA - Sebuah barang dibeli Rp80.000 dan dijual Rp100.000. Persentase keuntungannya adalah…', o:['20%','25%','30%','40%','50%'], a:1, e:'Untung = 100.000 − 80.000 = 20.000. Persentase untung = 20.000/80.000 × 100% = 25% (dihitung dari harga beli).' },
        { t:'mc', q:'KECEPATAN - Mobil menempuh 180 km dalam 2,5 jam. Kecepatan rata-ratanya adalah…', o:['60 km/jam','68 km/jam','72 km/jam','75 km/jam','90 km/jam'], a:2, e:'Kecepatan = jarak ÷ waktu = 180 ÷ 2,5 = 72 km/jam.' },
        { t:'mc', q:'PERBANDINGAN - Uang A : B = 3 : 5. Jika selisih uang mereka Rp40.000, maka uang B adalah…', o:['Rp60.000','Rp80.000','Rp100.000','Rp120.000','Rp140.000'], a:2, e:'Selisih perbandingan = 5 − 3 = 2 bagian = Rp40.000, jadi 1 bagian = Rp20.000. Uang B = 5 × 20.000 = Rp100.000.' },
        { t:'mc', q:'PECAHAN - Hasil dari 2/3 + 1/4 adalah…', o:['3/7','5/12','11/12','7/12','3/4'], a:2, e:'Samakan penyebut (12): 8/12 + 3/12 = 11/12.' },
        { t:'mc', q:'RATA-RATA - Nilai 5 siswa: 70, 80, 90, 60, 100. Rata-ratanya…', o:['78','80','82','84','86'], a:1, e:'Jumlah = 70+80+90+60+100 = 400. Rata-rata = 400 ÷ 5 = 80.' },
        { t:'mc', q:'ANALITIS - Andi lebih tinggi dari Budi. Citra lebih pendek dari Budi. Dedi lebih tinggi dari Andi. Siapa yang paling pendek?', o:['Andi','Budi','Citra','Dedi','Tidak dapat ditentukan'], a:2, e:'Urutan tinggi: Dedi > Andi > Budi > Citra. Yang paling pendek adalah Citra.' },
        { t:'mc', q:'ANALITIS - Lima orang antre: P di depan Q, R di belakang S, Q di depan R, S di belakang P. Siapa paling depan?', o:['P','Q','R','S','Tidak dapat ditentukan'], a:0, e:'Dari "P di depan Q", "Q di depan R", "S di belakang P" dan "R di belakang S": urutan P, Q, S, R memenuhi semua syarat (S setelah P & sebelum R, R paling belakang). P paling depan.' },
        { t:'mc', q:'DERET HURUF - A, C, F, J, O, … huruf berikutnya adalah…', o:['S','T','U','V','W'], a:2, e:'Selisih posisi huruf bertambah: A(+2)C(+3)F(+4)J(+5)O(+6)U. Jadi huruf berikutnya U.' },
        { t:'mc', q:'NUMERIK - Jika 3x − 7 = 14, maka nilai x adalah…', o:['5','6','7','8','9'], a:2, e:'3x − 7 = 14 → 3x = 21 → x = 7.' },
        { t:'mc', q:'SOAL CERITA - Pekerjaan selesai oleh 6 orang dalam 12 hari. Jika dikerjakan 8 orang (kecepatan sama), berapa hari?', o:['8 hari','9 hari','10 hari','11 hari','16 hari'], a:1, e:'Perbandingan berbalik nilai: total kerja = 6×12 = 72 orang-hari. Dengan 8 orang: 72 ÷ 8 = 9 hari.' },
        { t:'mc', q:'ANALOGI - PANAS : DINGIN = TERANG : …', o:['Cahaya','Lampu','Gelap','Silau','Redup'], a:2, e:'Hubungan antonim (berlawanan). Lawan "panas" = "dingin"; lawan "terang" = "gelap".' },
        { t:'mc', q:'SINONIM - "KONKLUSI" bermakna…', o:['Pendahuluan','Kesimpulan','Perdebatan','Ringkasan awal','Hipotesis'], a:1, e:'Konklusi = kesimpulan, bagian akhir penalaran.' },
        { t:'mc', q:'ANTONIM - lawan kata "ABSTRAK" adalah…', o:['Maya','Konkret','Rumit','Teoretis','Semu'], a:1, e:'Abstrak (tidak berwujud) berlawanan dengan konkret (nyata/berwujud).' },
        { t:'mc', q:'DERET FIBONACCI - 1, 1, 2, 3, 5, 8, … suku berikutnya…', o:['11','12','13','14','15'], a:2, e:'Tiap suku = jumlah dua suku sebelumnya: 5 + 8 = 13.' },
        { t:'mc', q:'DERET - 81, 27, 9, 3, … suku berikutnya…', o:['0','1','2','1/3','6'], a:1, e:'Pola dibagi 3: 3 ÷ 3 = 1.' },
        { t:'mc', q:'DISKON BERTINGKAT - Harga Rp200.000 didiskon 25% lalu didiskon lagi 10%. Harga akhir…', o:['Rp130.000','Rp135.000','Rp140.000','Rp150.000','Rp145.000'], a:1, e:'Setelah diskon 25%: 200.000 × 0,75 = 150.000. Lalu diskon 10%: 150.000 × 0,90 = 135.000.' },
        { t:'mc', q:'SILOGISME - Semua dokter pandai. Sebagian dokter adalah peneliti. Maka…', o:['Semua peneliti pandai','Sebagian peneliti pandai','Tidak ada peneliti pandai','Semua yang pandai adalah dokter','Peneliti tidak pandai'], a:1, e:'Sebagian dokter adalah peneliti, dan semua dokter pandai → sebagian peneliti (yang merupakan dokter) pasti pandai. Tidak bisa disimpulkan tentang seluruh peneliti.' },
        { t:'mc', q:'ANALITIS - Dalam lomba, A finis sebelum B, B sebelum C, dan D sesudah C. Urutan juara 1 sampai 4 adalah…', o:['A, B, C, D','A, C, B, D','B, A, C, D','A, B, D, C','D, C, B, A'], a:0, e:'A sebelum B, B sebelum C, D sesudah C → urutan A, B, C, D.' },
        { t:'mc', q:'JAM/WAKTU - Sebuah kereta berangkat pukul 08.45 dan tiba pukul 12.20. Lama perjalanan…', o:['3 jam 25 menit','3 jam 35 menit','3 jam 45 menit','4 jam 35 menit','3 jam 15 menit'], a:1, e:'Dari 08.45 ke 12.45 = 4 jam, dikurangi 25 menit (karena tiba 12.20) = 3 jam 35 menit.' },
        { t:'mc', q:'PERBANDINGAN - Skala peta 1 : 500.000. Jarak dua kota di peta 4 cm. Jarak sebenarnya…', o:['2 km','20 km','200 km','2.000 km','0,2 km'], a:1, e:'4 cm × 500.000 = 2.000.000 cm = 20 km.' },
        { t:'mc', q:'PELUANG - Sebuah dadu dilempar. Peluang muncul mata dadu genap adalah…', o:['1/6','1/3','1/2','2/3','5/6'], a:2, e:'Mata genap = {2,4,6} → 3 dari 6 kemungkinan = 1/2.' },
        { t:'fig', q:'FIGURAL - Perhatikan pola perputaran titik pada bujur sangkar. Gambar manakah yang melanjutkan pola tersebut?',
          img:'<svg viewBox="0 0 440 84" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="var(--text)" stroke-width="3"><g transform="translate(0,0)"><rect x="18" y="10" width="60" height="60" rx="6"/><circle cx="18" cy="10" r="7" fill="var(--text)" stroke="none"/></g><g transform="translate(110,0)"><rect x="18" y="10" width="60" height="60" rx="6"/><circle cx="78" cy="10" r="7" fill="var(--text)" stroke="none"/></g><g transform="translate(220,0)"><rect x="18" y="10" width="60" height="60" rx="6"/><circle cx="78" cy="70" r="7" fill="var(--text)" stroke="none"/></g><text x="378" y="52" font-size="46" fill="var(--muted)" stroke="none" text-anchor="middle">?</text></svg>',
          o:[
            '<svg viewBox="0 0 100 84" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="var(--text)" stroke-width="3"><rect x="18" y="10" width="60" height="60" rx="6"/><circle cx="18" cy="70" r="7" fill="var(--text)" stroke="none"/></svg>',
            '<svg viewBox="0 0 100 84" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="var(--text)" stroke-width="3"><rect x="18" y="10" width="60" height="60" rx="6"/><circle cx="18" cy="10" r="7" fill="var(--text)" stroke="none"/></svg>',
            '<svg viewBox="0 0 100 84" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="var(--text)" stroke-width="3"><rect x="18" y="10" width="60" height="60" rx="6"/><circle cx="78" cy="10" r="7" fill="var(--text)" stroke="none"/></svg>',
            '<svg viewBox="0 0 100 84" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="var(--text)" stroke-width="3"><rect x="18" y="10" width="60" height="60" rx="6"/><circle cx="78" cy="70" r="7" fill="var(--text)" stroke="none"/></svg>'
          ], a:0, e:'Titik berputar searah jarum jam: kiri-atas → kanan-atas → kanan-bawah → seharusnya kiri-bawah. Maka jawaban adalah bujur sangkar dengan titik di sudut kiri-bawah.' },
        { t:'fig', q:'FIGURAL - Manakah bangun datar yang memiliki jumlah sisi PALING BANYAK?',
          img:null,
          o:[
            '<svg viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="var(--text)" stroke-width="3"><polygon points="50,15 71.21,23.79 80,45 71.21,66.21 50,75 28.79,66.21 20,45 28.79,23.79"/></svg>',
            '<svg viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="var(--text)" stroke-width="3"><polygon points="50,15 75.98,60 24.02,60"/></svg>',
            '<svg viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="var(--text)" stroke-width="3"><polygon points="50,15 80,45 50,75 20,45"/></svg>',
            '<svg viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="var(--text)" stroke-width="3"><polygon points="50,15 75.98,30 75.98,60 50,75 24.02,60 24.02,30"/></svg>'
          ], a:0, e:'Pilihan berisi segi-8 (oktagon, 8 sisi), segitiga (3), segi-4 (4), dan segi-6 (6). Jumlah sisi terbanyak adalah oktagon.' }
      ]
    },

    /* ============================ TKP ============================ */
    {
      id: 'tkp',
      name: 'Tes Karakteristik Pribadi (TKP)',
      short: 'TKP',
      jumlahSoal: 45,
      maxScore: 225,
      passing: 166,
      icon: '🤝',
      desc: 'Pelayanan publik, jejaring kerja, sosial budaya, teknologi informasi, profesionalisme, dan anti-radikalisme.',
      material: `
        <h3>Apa yang diukur TKP?</h3>
        <p>TKP menilai <b>karakter & perilaku kerja ideal ASN</b>. Berbeda dari TWK/TIU: <b>tidak ada jawaban benar/salah mutlak</b>. Setiap opsi bernilai <b>1 sampai 5</b>. Pilih sikap paling ideal untuk dapat skor 5. Total <b>45 soal</b>, skor maks <b>225</b>, ambang batas <b>166</b> (rata-rata harus ±3,7/soal).</p>
        <h3>Aspek yang dinilai</h3>
        <ul>
          <li><b>Pelayanan publik</b> - mengutamakan kepuasan & kepentingan masyarakat.</li>
          <li><b>Jejaring kerja</b> - kerja sama, membangun relasi positif.</li>
          <li><b>Sosial budaya</b> - toleransi dalam masyarakat majemuk.</li>
          <li><b>Teknologi informasi</b> - adaptif & memanfaatkan teknologi.</li>
          <li><b>Profesionalisme</b> - tuntas, berintegritas, mengembangkan diri.</li>
          <li><b>Anti-radikalisme</b> - menolak paham yang mengancam NKRI.</li>
        </ul>
        <h3>Strategi menjawab</h3>
        <ol>
          <li>Pilih sikap <b>proaktif & solutif</b>, bukan menghindar/menyerahkan ke orang lain.</li>
          <li>Utamakan <b>kepentingan organisasi/publik</b> di atas kepentingan pribadi.</li>
          <li>Hindari opsi ekstrem (terlalu pasif atau melanggar aturan).</li>
          <li>Jawaban "ideal" biasanya menyelesaikan masalah <b>sekarang</b> sekaligus mencegah terulang.</li>
        </ol>
        <p class="tip">💡 Karena tak ada nilai 0, isi SEMUA soal TKP. Kunci lulus: konsisten memilih sikap paling profesional.</p>
      `,
      questions: [
        { t:'tkp', q:'Anda diberi tugas baru yang belum pernah Anda kerjakan dan tidak dijelaskan caranya. Sikap Anda…', o:[
          {x:'Mempelajari tugas tersebut secara mandiri dan bertanya pada yang lebih paham bila perlu', s:5},
          {x:'Mengerjakan sebisanya tanpa bertanya', s:3},
          {x:'Menunggu atasan menjelaskan lebih dulu', s:2},
          {x:'Meminta rekan lain mengerjakannya', s:1},
          {x:'Mencoba sambil melihat hasil rekan lain', s:4}
        ], e:'Sikap ideal (5): inisiatif belajar mandiri + bertanya saat perlu - kombinasi profesionalisme & jejaring kerja. Menunggu/melempar tugas bernilai rendah karena pasif.' },
        { t:'tkp', q:'Seorang warga datang mengeluh dengan nada marah karena layanan lambat, padahal keterlambatan bukan kesalahan Anda. Anda…', o:[
          {x:'Menjelaskan bahwa itu bukan kesalahan saya', s:2},
          {x:'Meminta maaf, menenangkan, lalu membantu menyelesaikan keluhannya', s:5},
          {x:'Membiarkan ia tenang sendiri', s:1},
          {x:'Mendengarkan keluhan lalu mengarahkan ke loket lain', s:3},
          {x:'Menyampaikan keluhan ke atasan untuk ditindaklanjuti', s:4}
        ], e:'Pelayanan publik ideal (5): tetap empati, minta maaf atas ketidaknyamanan, dan langsung membantu - fokus solusi, bukan membela diri.' },
        { t:'tkp', q:'Rekan satu tim sering tidak menyelesaikan bagiannya sehingga pekerjaan tim terhambat. Anda…', o:[
          {x:'Membicarakan baik-baik untuk mencari solusi bersama', s:5},
          {x:'Melaporkan langsung ke atasan', s:3},
          {x:'Mengambil alih semua pekerjaannya', s:2},
          {x:'Membiarkan dan fokus tugas sendiri', s:1},
          {x:'Menegurnya di depan tim agar jera', s:2}
        ], e:'Jejaring kerja ideal (5): komunikasi langsung yang konstruktif untuk solusi bersama. Lapor atasan (3) langkah lanjutan bila tak ada perubahan; menegur di depan umum merusak relasi.' },
        { t:'tkp', q:'Kantor menerapkan aplikasi/sistem digital baru yang belum Anda kuasai. Anda…', o:[
          {x:'Segera mempelajarinya dan mengikuti pelatihan yang tersedia', s:5},
          {x:'Menunggu rekan mengajari saat sempat', s:3},
          {x:'Tetap memakai cara lama yang lebih nyaman', s:1},
          {x:'Mempelajari seperlunya saat dibutuhkan saja', s:2},
          {x:'Meminta diberi waktu khusus belajar dulu sebelum memakai', s:4}
        ], e:'Adaptasi teknologi ideal (5): proaktif belajar & ikut pelatihan. Bertahan dengan cara lama (1) menolak perkembangan dan menghambat organisasi.' },
        { t:'tkp', q:'Anda menemukan kesalahan dalam laporan yang sudah Anda serahkan ke atasan. Anda…', o:[
          {x:'Diam saja karena sudah terlanjur diserahkan', s:1},
          {x:'Segera melapor ke atasan dan memperbaikinya', s:5},
          {x:'Memperbaiki diam-diam tanpa memberi tahu', s:3},
          {x:'Menunggu sampai kesalahan itu ditemukan orang lain', s:2},
          {x:'Memperbaiki dan memberi tahu atasan bila ditanya', s:3}
        ], e:'Integritas ideal (5): jujur, segera lapor, dan perbaiki. Menyembunyikan kesalahan melanggar prinsip akuntabilitas ASN.' },
        { t:'tkp', q:'Saat jam kerja Anda telah menyelesaikan seluruh tugas lebih cepat. Yang Anda lakukan…', o:[
          {x:'Beristirahat karena tugas sudah selesai', s:2},
          {x:'Menawarkan bantuan kepada rekan yang masih sibuk', s:5},
          {x:'Membuka media sosial', s:1},
          {x:'Pulang lebih awal', s:1},
          {x:'Mengerjakan urusan pribadi yang tertunda', s:2}
        ], e:'Profesionalisme & jejaring kerja ideal (5): memanfaatkan waktu produktif dengan membantu tim. Istirahat/urusan pribadi pada jam kerja bernilai rendah.' },
        { t:'tkp', q:'Di lingkungan kerja Anda terdapat rekan dari suku, agama, dan budaya yang berbeda-beda. Sikap Anda…', o:[
          {x:'Bergaul hanya dengan yang sesuku/seagama', s:1},
          {x:'Menghormati perbedaan dan bekerja sama dengan semua', s:5},
          {x:'Bersikap netral tanpa banyak berinteraksi', s:2},
          {x:'Menyesuaikan diri hanya bila menguntungkan', s:2},
          {x:'Menghormati perbedaan tetapi menjaga jarak', s:3}
        ], e:'Sosial budaya ideal (5): menghargai keberagaman + aktif bekerja sama dengan semua. Membatasi pergaulan berdasarkan SARA bertentangan dengan nilai kebangsaan.' },
        { t:'tkp', q:'Atasan memberi tugas dengan tenggat sangat singkat, sementara Anda masih punya pekerjaan lain. Anda…', o:[
          {x:'Menolak karena beban kerja sudah penuh', s:1},
          {x:'Menyusun skala prioritas dan mengomunikasikannya ke atasan', s:5},
          {x:'Mengerjakan semua sekaligus meski hasilnya asal jadi', s:2},
          {x:'Mengerjakan tugas baru, menunda yang lama tanpa konfirmasi', s:3},
          {x:'Mengeluh dulu kepada rekan kerja', s:1}
        ], e:'Profesionalisme ideal (5): kelola prioritas dan komunikasikan secara terbuka agar ekspektasi realistis dan hasil tetap berkualitas.' },
        { t:'tkp', q:'Seseorang menawari Anda imbalan agar mempercepat/mempermudah proses layanan yang sedang ia urus. Anda…', o:[
          {x:'Menerima karena tidak ada yang tahu', s:1},
          {x:'Menolak dengan sopan dan menjelaskan prosedur yang berlaku', s:5},
          {x:'Menerima tapi tetap mengikuti prosedur', s:2},
          {x:'Menolak tanpa menjelaskan apa pun', s:3},
          {x:'Pura-pura tidak mendengar tawaran tersebut', s:2}
        ], e:'Integritas & anti-korupsi ideal (5): tolak gratifikasi dengan sopan sambil menjelaskan prosedur. Menerima dalam bentuk apa pun adalah pelanggaran.' },
        { t:'tkp', q:'Anda mendengar seorang rekan menyebarkan paham yang menentang Pancasila dan mengajak orang lain. Sikap Anda…', o:[
          {x:'Membiarkan karena itu urusan pribadinya', s:1},
          {x:'Menasihatinya dan melaporkan ke pihak berwenang bila berlanjut', s:5},
          {x:'Ikut mendengarkan tanpa menanggapi', s:2},
          {x:'Menjauhi rekan tersebut', s:3},
          {x:'Menegurnya namun merahasiakan dari atasan', s:3}
        ], e:'Anti-radikalisme ideal (5): tegur/nasihati dan tempuh jalur resmi bila berlanjut. Membiarkan penyebaran paham anti-Pancasila membahayakan NKRI.' },
        { t:'tkp', q:'Anda diminta lembur mendadak padahal sudah ada janji penting dengan keluarga. Anda…', o:[
          {x:'Menolak lembur demi keluarga', s:2},
          {x:'Menjelaskan situasi dan mencari solusi bersama atasan', s:5},
          {x:'Lembur tapi mengerjakan dengan setengah hati', s:2},
          {x:'Lembur dan membatalkan janji tanpa berkomunikasi', s:3},
          {x:'Pergi diam-diam saat jam kerja usai', s:1}
        ], e:'Ideal (5): komunikasikan kondisi secara dewasa dan cari titik temu (mis. bantu sebagian, atau atur ulang). Menolak mentah atau pergi diam-diam tidak profesional.' },
        { t:'tkp', q:'Tim Anda gagal mencapai target. Sebagai bagian dari tim, Anda…', o:[
          {x:'Menyalahkan anggota yang kurang berkontribusi', s:1},
          {x:'Mengevaluasi bersama penyebabnya dan menyusun perbaikan', s:5},
          {x:'Menerima saja karena sudah berusaha', s:2},
          {x:'Merasa itu tanggung jawab ketua tim', s:1},
          {x:'Fokus memperbaiki bagian saya sendiri', s:3}
        ], e:'Ideal (5): evaluasi kolektif & solusi ke depan tanpa saling menyalahkan - cerminan profesionalisme dan jejaring kerja yang sehat.' },
        { t:'tkp', q:'Anda melihat prosedur kerja lama di kantor sebenarnya bisa dibuat lebih efisien. Anda…', o:[
          {x:'Mengikuti prosedur lama agar aman', s:2},
          {x:'Menyusun usulan perbaikan dan menyampaikannya melalui jalur yang tepat', s:5},
          {x:'Mengubah cara kerja sendiri tanpa izin', s:2},
          {x:'Mengeluhkan ketidakefisienan kepada rekan', s:1},
          {x:'Menunggu orang lain yang mengusulkan', s:2}
        ], e:'Ideal (5): inisiatif perbaikan yang disampaikan lewat saluran resmi - inovatif sekaligus tertib aturan.' },
        { t:'tkp', q:'Anda ditugaskan di daerah terpencil dengan fasilitas terbatas. Sikap Anda…', o:[
          {x:'Meminta pindah secepatnya', s:1},
          {x:'Menjalankan tugas sebaik mungkin dan beradaptasi dengan kondisi', s:5},
          {x:'Bekerja seadanya sesuai fasilitas yang ada', s:2},
          {x:'Mengeluh tetapi tetap bertahan', s:2},
          {x:'Bertahan sambil mencari peluang pindah', s:3}
        ], e:'Ideal (5): dedikasi & kemampuan beradaptasi adalah ciri ASN. Pengabdian tidak bergantung pada kenyamanan fasilitas.' },
        { t:'tkp', q:'Pendapat Anda dalam rapat ditolak dan pendapat rekan yang dipilih. Anda…', o:[
          {x:'Kecewa dan enggan mendukung keputusan', s:1},
          {x:'Menerima keputusan bersama dan mendukung pelaksanaannya', s:5},
          {x:'Diam tetapi tetap merasa pendapat saya lebih baik', s:2},
          {x:'Mendukung sambil menunggu keputusan itu gagal', s:1},
          {x:'Menerima namun mengingatkan kelemahan pilihan tersebut secara konstruktif', s:4}
        ], e:'Ideal (5): menghormati hasil musyawarah dan mendukung penuh pelaksanaannya. Sikap konstruktif (4) baik, tetapi loyalitas pada keputusan kolektif paling utama.' },
        { t:'tkp', q:'Anda menemukan data pribadi masyarakat yang Anda layani. Sikap Anda terhadap data tersebut…', o:[
          {x:'Menyimpannya untuk keperluan pribadi', s:1},
          {x:'Menjaga kerahasiaannya dan menggunakannya hanya sesuai keperluan dinas', s:5},
          {x:'Membagikannya ke rekan kerja bila diminta', s:2},
          {x:'Menggunakannya bila menguntungkan instansi', s:2},
          {x:'Membiarkannya karena bukan tanggung jawab saya', s:2}
        ], e:'Ideal (5): menjaga kerahasiaan data dan memakainya hanya untuk kepentingan dinas - prinsip akuntabilitas & etika ASN.' },
        { t:'tkp', q:'Anda mendapat kritik tajam dari masyarakat atas kebijakan instansi di media sosial. Anda…', o:[
          {x:'Membalas kritik tersebut dengan argumen pribadi', s:1},
          {x:'Menampung masukan, menyampaikan ke instansi, dan merespons melalui jalur resmi', s:5},
          {x:'Mengabaikan karena bukan wewenang saya', s:2},
          {x:'Menghapus/melaporkan komentar tersebut', s:1},
          {x:'Menjelaskan sebisanya secara pribadi di kolom komentar', s:3}
        ], e:'Ideal (5): kritik dijadikan masukan dan ditindaklanjuti melalui kanal resmi instansi, bukan adu argumen pribadi yang berisiko memperkeruh.' },
        { t:'tkp', q:'Anda diberi tanggung jawab memimpin proyek tetapi merasa kurang pengalaman. Anda…', o:[
          {x:'Menolak karena takut gagal', s:1},
          {x:'Menerima, mempelajari hal yang diperlukan, dan melibatkan tim', s:5},
          {x:'Menerima tetapi menyerahkan keputusan penting ke orang lain', s:2},
          {x:'Menerima dan mengerjakannya sendirian', s:2},
          {x:'Menerima sambil meminta bimbingan atasan', s:4}
        ], e:'Ideal (5): menerima tantangan, belajar, dan memberdayakan tim - pertumbuhan profesional. Meminta bimbingan (4) baik namun kepemimpinan kolaboratif lebih utuh.' },
        { t:'tkp', q:'Anda dipromosikan menjadi atasan dari rekan-rekan yang dulu setingkat. Sikap Anda…', o:[
          {x:'Tetap profesional, merangkul tim, dan menjalankan peran baru dengan adil', s:5},
          {x:'Menjaga jarak agar terlihat berwibawa', s:2},
          {x:'Membiarkan semua berjalan seperti dulu', s:2},
          {x:'Menonjolkan jabatan baru di depan rekan', s:1},
          {x:'Bersikap sungkan sehingga ragu memberi arahan', s:3}
        ], e:'Ideal (5): kepemimpinan yang adil & merangkul, tetap profesional tanpa arogansi maupun sungkan berlebihan.' },
        { t:'tkp', q:'Anda menemukan rekan kerja memanipulasi data laporan keuangan. Tindakan Anda…', o:[
          {x:'Pura-pura tidak tahu', s:1},
          {x:'Menegur rekan dan melaporkannya melalui jalur resmi', s:5},
          {x:'Hanya menegur tanpa melaporkan', s:3},
          {x:'Ikut menutupi demi nama baik tim', s:1},
          {x:'Menyebarkannya ke rekan lain dulu', s:2}
        ], e:'Integritas ideal (5): manipulasi data adalah pelanggaran serius; tegur dan tempuh jalur resmi. Menutupi atau menggosipkan tidak tepat.' },
        { t:'tkp', q:'Beban kerja Anda meningkat drastis dan mulai memengaruhi kualitas hasil. Anda…', o:[
          {x:'Memaksakan diri sampai kelelahan', s:2},
          {x:'Mengomunikasikan beban kerja ke atasan dan mengatur prioritas', s:5},
          {x:'Menurunkan standar kerja diam-diam', s:1},
          {x:'Menunda sebagian tugas tanpa pemberitahuan', s:2},
          {x:'Meminta rekan mengerjakan sebagian tanpa koordinasi', s:3}
        ], e:'Ideal (5): komunikasi terbuka dan manajemen prioritas menjaga kualitas sekaligus kesehatan kerja.' },
        { t:'tkp', q:'Saat rapat, Anda menyadari data yang Anda sampaikan sebelumnya keliru. Anda…', o:[
          {x:'Membiarkannya agar tidak mempermalukan diri', s:1},
          {x:'Segera mengoreksi dan menyampaikan data yang benar', s:5},
          {x:'Menunggu rapat selesai baru memberi tahu satu orang', s:3},
          {x:'Mengalihkan pembahasan ke topik lain', s:1},
          {x:'Mengakui keliru namun tidak mengoreksi datanya', s:2}
        ], e:'Ideal (5): kejujuran & akurasi - segera koreksi agar keputusan rapat tidak didasarkan data salah.' },
        { t:'tkp', q:'Anda diberi kesempatan mengikuti pelatihan pengembangan diri di luar jam kerja. Sikap Anda…', o:[
          {x:'Menolak karena menyita waktu', s:1},
          {x:'Antusias mengikuti untuk meningkatkan kompetensi', s:5},
          {x:'Ikut hanya jika diwajibkan', s:2},
          {x:'Ikut tetapi tidak serius', s:2},
          {x:'Mempertimbangkan dulu manfaatnya secara matang lalu ikut', s:4}
        ], e:'Ideal (5): semangat mengembangkan diri adalah ciri profesional. Mempertimbangkan manfaat (4) baik, tetapi inisiatif belajar paling bernilai.' },
        { t:'tkp', q:'Seorang warga lansia kesulitan mengisi formulir layanan digital. Anda…', o:[
          {x:'Memintanya belajar sendiri dulu', s:1},
          {x:'Membantunya mengisi sambil menjelaskan langkahnya', s:5},
          {x:'Menyuruhnya datang lagi dengan pendamping', s:2},
          {x:'Mengisikan seluruhnya tanpa menjelaskan', s:3},
          {x:'Mengarahkannya ke petugas lain', s:2}
        ], e:'Pelayanan publik ideal (5): membantu sekaligus mengedukasi agar warga lebih mandiri ke depannya.' },
        { t:'tkp', q:'Atasan memberi instruksi yang menurut Anda kurang tepat secara teknis. Anda…', o:[
          {x:'Menjalankan saja tanpa berpendapat', s:2},
          {x:'Menyampaikan masukan secara sopan disertai alasan, lalu mengikuti keputusan akhir', s:5},
          {x:'Menolak menjalankan instruksi', s:1},
          {x:'Menjalankan sambil mengeluh ke rekan', s:1},
          {x:'Mengubah instruksi sesuai pendapat sendiri', s:2}
        ], e:'Ideal (5): sampaikan pertimbangan profesional secara santun, namun tetap menghormati keputusan akhir atasan.' },
        { t:'tkp', q:'Anda melihat sampah berserakan di area kerja meski bukan tugas Anda membersihkannya. Anda…', o:[
          {x:'Membiarkan karena bukan tanggung jawab saya', s:1},
          {x:'Merapikan seadanya dan mengingatkan kebersihan bersama', s:5},
          {x:'Menunggu petugas kebersihan datang', s:2},
          {x:'Melaporkan ke atasan saja', s:3},
          {x:'Memfoto dan mengeluhkannya', s:1}
        ], e:'Ideal (5): inisiatif menjaga lingkungan kerja bersama mencerminkan rasa memiliki & profesionalisme.' },
        { t:'tkp', q:'Anda ditawari proyek sampingan yang berpotensi menimbulkan konflik kepentingan dengan tugas kedinasan. Anda…', o:[
          {x:'Menerima karena menambah penghasilan', s:1},
          {x:'Menolak demi menghindari konflik kepentingan', s:5},
          {x:'Menerima diam-diam', s:1},
          {x:'Menerima setelah konsultasi & jika benar-benar tidak ada konflik kepentingan', s:4},
          {x:'Menunda keputusan tanpa kejelasan', s:2}
        ], e:'Ideal (5): menghindari konflik kepentingan menjaga integritas ASN. Konsultasi lebih dulu (4) baik bila benar-benar bebas konflik.' },
        { t:'tkp', q:'Target kerja tahunan Anda dinaikkan cukup tinggi oleh organisasi. Sikap Anda…', o:[
          {x:'Pesimis karena merasa mustahil', s:1},
          {x:'Menyusun strategi & langkah konkret untuk mencapainya', s:5},
          {x:'Bekerja seperti biasa dan berharap tercapai', s:2},
          {x:'Meminta target diturunkan lebih dulu', s:2},
          {x:'Menerima target sambil mencari dukungan sumber daya yang diperlukan', s:4}
        ], e:'Ideal (5): orientasi pada pencapaian dengan strategi konkret. Mencari dukungan sumber daya (4) baik sebagai pelengkap.' }
      ]
    }
  ]
};
