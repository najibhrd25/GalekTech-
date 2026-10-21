## IPRS (Integrated Public Relations System) BEM ITS

> **Ringkasan Eksekutif (Abstract):**  
> IPRS (Integrated Public Relations System) adalah platform tata kelola relasi dan distribusi informasi terpusat milik Biro Hubungan Luar (Hublu) BEM ITS. Sistem ini menangani alur penerimaan proposal kemitraan, arsip database relasi eksternal/internal kampus, dan koordinasi birokrasi komunikasi antar-lembaga secara terstruktur.

---

### Temuan Awal Sebelum Dipegang (The Baseline & Security Forensics)

Sebelum sistem ini diambil alih untuk perbaikan menyeluruh, ditemukan sejumlah masalah kritis pada stabilitas dan keamanan server:

* **Insiden Keamanan & Injeksi Malware (Webshell Backdoor):** Server hosting lama tersusupi oleh skrip injeksi berbahaya (termasuk file uploader ilegal, webshell backdoor seperti `lqxddyhw.php`, serta injeksi spam SEO/judi online seperti direktori `mahkota188-xxx`). Hal ini terjadi akibat tidak adanya sanitasi ketat pada endpoint upload berkas proposal publik.
* **Akumulasi Utang Teknis (Legacy Code & Deprecations):** Kode dasar dibangun dengan arsitektur PHP lawas tanpa ORM modern, menghasilkan ribuan log `PHP Deprecated` (seperti `utf8_encode()`, `Creation of dynamic property DB::$succes`, dan koneksi database non-resilient) yang menyebabkan lonjakan error log hingga puluhan megabyte dan rawan crash saat runtime server diperbarui.
* **Celah Manajemen Akses & Validasi Data:** Alur penyimpanan proposal belum memvalidasi MIME-type dan integritas file secara mendalam, serta query database rawan *SQL injection* jika diakses oleh pihak luar.

:::gallery
badge: Tantangan
title: Dokumentasi Temuan & Investigasi Awal
aspect: 16:9
/projects/safe.webp | Analisis Celah Keamanan & Penyelidikan Direktori Server
/projects/s.a.f.e.webp | Isolasi Skrip Injeksi & File Backdoor pada Server
/projects/background-project.webp | Tinjauan Arsitektur Legacy & Log Deprecation
:::

---

### Proses & Strategi Pengerjaan (The Engineering Journey)

Menghadapi kondisi sistem yang terkompromi, perbaikan dilakukan melalui metodologi rekayasa perangkat lunak yang sistematis:

1. **Audit Forensik & Sanitasi Total (Purge & Isolation):**
   - Melakukan pelacakan mendalam terhadap seluruh integritas berkas di direktori server, mengisolasi dan menghapus seluruh file backdoor, webshell, dan injeksi asing.
   - Menata ulang hak akses direktori (`chmod`), mematikan eksekusi skrip PHP di folder upload publik via konfigurasi server (`.htaccess`).

2. **Refactoring & Modernisasi Lapisan Database:**
   - Memperbaiki class wrapper koneksi database (`db.class.php`) agar kompatibel penuh dengan standar PHP modern tanpa memicu deprecation warning.
   - Memastikan seluruh operasi kueri CRUD beralih menggunakan *prepared statements* (PDO binding) guna mengeliminasi celah SQL Injection.

3. **Restrukturisasi Modul Proposal & Validasi Ketat:**
   - Menerapkan whitelist ekstensi berkas (hanya PDF/dokumen terverifikasi) dilengkapi validasi ukuran dan MIME-type server-side.
   - Merapikan alur disposisi proposal: status pelacakan (*pending, in-review, approved, rejected*), notifikasi otomatis, dan manajemen hak akses terpisah antara fungsionaris Hublu dan mitra eksternal.

4. **Optimasi Database Relasi Publik:**
   - Menyediakan fitur pencarian cepat (*instant filter*), pengelompokan instansi, dan ekspor data kemitraan untuk kebutuhan internal organisasi.

---

### Hasil Akhir & Dampak Nyata (The Outcome)

* **100% Bersih & Terlindungi:** Seluruh celah keamanan berhasil ditutup; server hosting bersih dari file berbahaya dan lolos pemindaian integritas sistem.
* **Stabilitas Runtime Nol-Error:** Beban log server yang sebelumnya membengkak drastis kini bersih dari fatal error maupun deprecation warning.
* **Efisiensi Alur Birokrasi Kampus:** Alur pengajuan dan disposisi proposal kemitraan pihak eksternal kepada BEM ITS menjadi jauh lebih cepat, transparan, dan terdata rapi.

:::gallery
badge: Result
title: Preview Implementasi & Tampilan Sistem
aspect: 16:9
/projects/Galektech.webp | Dashboard Manajemen Relasi & Disposisi Proposal
/projects/PARCEL.webp | Database Kemitraan Terpusat & Monitoring Status
/projects/ALRENT.webp | Panel Kontrol Administrator Hublu BEM ITS
:::

---

### Kunjungi & Akses Sistem
* **Portal Sistem IPRS BEM ITS:** [https://zeus2.its.ac.id:2083/](https://zeus2.its.ac.id:2083/)

### Tech Stack & Security Tools
PHP Modern, PDO MySQL, Apache Hardening, Security Forensics, Bootstrap & TailwindCSS.
