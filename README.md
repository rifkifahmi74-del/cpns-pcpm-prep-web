# Latihan Soal CPNS & PCPM BI 2026 — taruh online (gratis) & install di HP

Website ini siap di-host di **GitHub Pages** (gratis), memberi link permanen, bisa
"Add to Home Screen" di iPhone/iPad seperti aplikasi, dan **bekerja offline**.
Polanya sama persis dengan Trading Journal kamu — tinggal upload.

## Isi folder ini
- `index.html` — halaman utama aplikasi
- `styles.css`, `app.js` — tampilan (gaya Apple) & logika ujian
- `data/cpns.js`, `data/pcpm.js` — **bank soal & materi** (CPNS & PCPM BI)
- `data/config.js` — **pengaturan countdown jadwal** (lihat di bawah)
- `manifest.webmanifest`, `sw.js`, `icon-*.png`, `apple-touch-icon.png` — agar bisa diinstall & offline

## Cara online (sekitar 5 menit)
1. Buka **https://github.com** dan login (atau pakai **GitHub Desktop** yang sudah terinstall).
2. Klik **New repository**. Beri nama mis. `latihan-cpns-bi`. Set **Public**. **Create**.
3. Di halaman repo: **Add file → Upload files**. Seret **SEMUA isi folder ini**
   (termasuk folder `data/` — jaga struktur foldernya). Klik **Commit changes**.
4. Buka **Settings → Pages**. Source = **Deploy from a branch**, Branch = **main**,
   Folder = **/(root)**, **Save**. Tunggu ±1 menit.
5. Link muncul di atas, seperti: `https://NAMAKAMU.github.io/latihan-cpns-bi/`

> Pakai GitHub Desktop? Cukup salin semua file ini ke folder repo lokalmu, lalu
> **Commit to main → Push origin**. Hasilnya sama.

## Install di iPhone / iPad
1. Buka link tersebut di **Safari**.
2. Tap tombol **Share** → **Add to Home Screen** → **Add**.
3. Aplikasi muncul di home screen & terbuka layar penuh seperti app asli.

## ⏰ Mengaktifkan COUNTDOWN (saat tanggal resmi keluar)
Per 19 Juni 2026 **belum ada tanggal resmi** CPNS/PCPM 2026, jadi countdown
sengaja dimatikan (jujur, tanpa tanggal palsu). Saat jadwal resmi diumumkan
(`sscasn.bkn.go.id` / `pcpmbi.rekrutmenbi.id`), buka **`data/config.js`** lalu:
1. Ubah `active: false` → `active: true`.
2. Isi `date: 'YYYY-MM-DDTHH:mm:ss'` dengan tanggal-jam resmi.
3. Simpan & upload ulang `data/config.js`. Countdown langsung berjalan.

## ➕ Menambah / mengubah soal
Buka `data/cpns.js` atau `data/pcpm.js`. Tambahkan objek baru ke array `questions`:
- Pilihan ganda (TWK, TIU, TPD, Ekonomi, English):
  `{ t:'mc', q:'pertanyaan', o:['A','B','C','D','E'], a:2, e:'pembahasan' }`
  (`a` = indeks jawaban benar, mulai 0)
- Soal TKP (skor 1–5 per opsi):
  `{ t:'tkp', q:'pertanyaan', o:[{x:'opsi',s:5},{x:'opsi',s:3},...], e:'pembahasan' }`

## 🔄 Setelah update soal/aplikasi
Buka `sw.js` dan naikkan versi cache: `cpns-bi-cache-v1` → `v2`, dst.
Tujuannya agar HP/laptop mengambil versi terbaru, bukan versi lama yang ter-cache.

## Catatan penting
- Soal di sini adalah **soal latihan** yang meniru format & materi resmi.
  Soal asli SKD/PCPM bersifat **rahasia dan tidak dipublikasikan**.
- Struktur ujian & passing grade mengacu sumber resmi (Kepmenpan RB No. 321/2024
  untuk SKD; pola seleksi PCPM BI). **Selalu cek ulang** di kanal resmi.
- Skor & progres latihan tersimpan **di browser perangkat masing-masing**, privat.
