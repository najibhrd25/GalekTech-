# GalekTech

GalekTech adalah inisiatif pendigitalisasian UMKM (Usaha Mikro, Kecil, dan Menengah) di Kabupaten Trenggalek melalui pembuatan website yang modern, cepat, dan profesional. 

Repositori ini menggunakan monorepo workspace yang dioptimalkan untuk berjalan secara **frontend-only** (Next.js) tanpa ketergantungan Sanity Studio lokal agar performa development sangat ringan dan cepat.

---

## Panduan Alur Kerja Kolaborasi (Workflow)

Sebagai tim pengembang GalekTech, harap ikuti alur kerja berikut agar kode di repositori tetap rapi dan terorganisir.

### 1. Kloning Repositori (Clone)
Untuk memulai development lokal, lakukan kloning repositori dengan perintah:
```bash
git clone https://github.com/najibhrd25/GalekTech33.git
cd GalekTech33
```

### 2. Mengambil Pembaruan Terkini (Pull)
Sebelum mulai menulis kode baru, selalu ambil pembaruan terbaru dari branch utama (`frontend-only`) untuk menghindari konflik:
```bash
git checkout frontend-only
git pull origin frontend-only
```

### 3. Membuat Branch Baru untuk Tugas (Branching)
**Jangan langsung melakukan commit/push ke branch utama (`frontend-only`).** Buatlah branch baru untuk setiap fitur atau perbaikan bug:
```bash
git checkout -b fitur/nama-fitur-kamu
# Contoh: git checkout -b fitur/tambah-kontak-wa
```

### 4. Menjalankan Server Lokal (Development)
Instal dependensi dan jalankan server lokal Next.js:
```bash
# Instalasi dependensi
pnpm install

# Menjalankan Next.js Web App lokal
pnpm dev
```
Buka [http://localhost:3000](http://localhost:3000) pada browser Anda.

### 5. Mengirimkan Perubahan (Push & Pull Request)
Setelah Anda selesai melakukan perubahan dan memastikan tidak ada error (baik visual maupun build TypeScript):

1. **Commit Perubahan:**
   ```bash
   git add .
   git commit -m "feat: deskripsi perubahan kamu secara singkat"
   ```
2. **Push ke Branch Anda di GitHub:**
   ```bash
   git push origin fitur/nama-fitur-kamu
   ```
3. **Membuat Pull Request (PR):**
   * Buka repositori [GalekTech33](https://github.com/najibhrd25/GalekTech33) di GitHub browser.
   * Klik tombol **Compare & pull request** di sebelah branch yang baru saja di-push.
   * Berikan penjelasan singkat mengenai perubahan yang Anda lakukan.
   * Ajukan Pull Request. **Team Leader** akan meninjau (*review*) kode Anda sebelum melakukan merge ke branch utama (`frontend-only`).

---

## Aturan Penting Pengembang
- **Wajib menggunakan Dark Mode:** Tampilan website GalekTech saat ini di-lock permanen pada dark mode untuk menjaga estetika visual premium. Jangan gunakan/buat komponen yang memaksa render light mode.
- **Dilarang keras melakukan Push Direct:** Semua kontribusi wajib melalui mekanisme Pull Request (PR) untuk direview oleh Team Leader.
- **Gunakan pnpm:** Jangan gunakan `npm` atau `yarn` untuk instalasi package guna menjaga konsistensi lockfile `pnpm-lock.yaml`.
