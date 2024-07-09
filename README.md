
# TikTok Magic Gorep

## Deskripsi

**TikTok Gorep** adalah aplikasi berbasis web yang dirancang untuk membantu pengguna melakukan laporan terhadap akun TikTok dengan berbagai metode. Aplikasi ini memiliki dua komponen utama: **backend** untuk menangani logika laporan dan **frontend** untuk antarmuka pengguna. Dengan alat ini, Anda dapat mencari akun TikTok dan memilih metode laporan yang diinginkan, seperti laporan massal atau spam.

## Fitur Utama

- **Pencarian Akun TikTok**: Masukkan URL atau username untuk mencari akun TikTok.
- **Metode Report**:
  - **Mass Report**: Menghasilkan 20 akun fake dan melakukan laporan otomatis terhadap akun TikTok target.
  - **Spam Report**: Menghasilkan 20 akun fake dan melakukan laporan spam terhadap akun TikTok target.
- **Proses Report**: Menampilkan status setiap akun fake selama proses report dengan teks mono berwarna hijau.

## Tutorial Instalasi

### Instalasi di Windows

## Clone Repository
## Buka Command Prompt atau PowerShell dan jalankan perintah berikut untuk meng-clone repositori ke komputer Anda:

``` 
   git clone https://github.com/kdsmedia/gorep.git
   cd gorep
```
   
## Instal Dependensi Backend
## Pindah ke folder backend dan instal dependensi dengan perintah:
```
   cd backend
   npm install
```
## Jalankan Server Backend
## Jalankan server backend dengan perintah:

```
   npm start
```

## Buka Frontend
## Buka frontend/index.html di browser Anda untuk mengakses antarmuka pengguna.

## Instalasi di Ubuntu

## Clone Repository
## Buka terminal dan jalankan perintah berikut untuk meng-clone repositori ke komputer Anda:
```
   git clone https://github.com/kdsmedia/gorep.git
   cd gorep
```
## Instal Dependensi Backend
## Pindah ke folder backend dan instal Node.js dan npm jika belum terpasang:
```
   sudo apt update
   sudo apt install nodejs npm
   cd backend
   npm install
```
## Jalankan Server Backend
## Jalankan server backend dengan perintah:
```
   npm start
```
**Buka Frontend**
## Buka frontend/index.html di browser Anda untuk mengakses antarmuka pengguna.

### Instalasi di Termux
## Clone Repository
## Buka Termux dan jalankan perintah berikut untuk meng-clone repositori ke perangkat Anda:
```
   git clone https://github.com/kdsmedia/gorep.git
   cd tiktok-report-tool
```
## Instal Dependensi Backend
## Instal Node.js dan npm jika belum terpasang, lalu instal dependensi:
```
   pkg update
   pkg install nodejs
   cd backend
   npm install
```   
## Jalankan Server Backend
## Jalankan server backend dengan perintah:
```
   npm start
```
## Buka Frontend
## Buka frontend/index.html di browser Anda untuk mengakses antarmuka pengguna.

## Penjelasan Proses Penggunaan
- Cari Akun TikTok
- Masukkan URL atau username akun TikTok yang ingin Anda laporkan di formulir yang tersedia.
 -Pilih Metode Report
 -Pilih salah satu metode laporan: Mass Report atau Spam Report.
- Proses Laporan

**Jika memilih Mass Report, sistem akan menghasilkan 20 akun fake dan melakukan laporan otomatis terhadap akun target.
Jika memilih Spam Report, sistem akan menghasilkan 20 akun fake dan melakukan laporan spam terhadap akun target.
Selama proses, status setiap akun fake akan ditampilkan dengan teks mono berwarna hijau, dan pesan "SUKSES" akan muncul setiap kali laporan selesai.
Widget Sosial Media**

## Jangan lupa untuk mengikuti kami di media sosial:
- YouTube: YouTube Channel
- Telegram: Telegram Group
- TikTok: TikTok Profile

## Jika Anda ingin mendukung pengembangan proyek ini, Anda dapat memberikan donasi melalui link berikut:

**Donasi** via Dana

Terima Kasih
Terima kasih kepada semua yang telah mendukung dan membantu pengembangan proyek ini. Dukungan Anda sangat berarti bagi kami dalam mengembangkan alat ini lebih lanjut.

Media Sosial Kami:
- YouTube
- Telegram
- TikTok

## Dukungan Pembangunan:

- GitHub
- Website

## Terima kasih atas perhatian dan dukungan Anda!

## Catatan: Proyek ini hanya untuk tujuan dokumentasi dan edukasi. Kami tidak bertanggung jawab atas penggunaan alat ini di luar batasan hukum dan etika.

### File dan Folder

1. **`frontend/index.html`**: Halaman utama untuk antarmuka pengguna.
2. **`frontend/main.js`**: JavaScript untuk logika frontend.
3. **`frontend/styles.css`**: Gaya CSS untuk frontend.
4. **`backend/api.js`**: API untuk menangani permintaan laporan.
5. **`backend/package.json`**: Daftar dependensi dan skrip npm.
6. **`backend/package-lock.json`**: Versi terkunci dari dependensi.
7. **`backend/.gitignore`**: Daftar file dan folder yang diabaikan oleh Git.
8. **`LICENSE`**: MIT License lengkap.
9. **`README.md`**: Dokumentasi lengkap proyek.
