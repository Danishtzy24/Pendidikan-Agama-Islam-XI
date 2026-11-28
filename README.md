# Pendidikan Agama Islam Kelas XI

Proyek sumber situs materi PAI kelas XI. Penjelasan materi dan peta konsep langsung terlihat, disertai latihan.

## Menjalankan proyek

Persyaratan: Node.js versi 20.19 atau lebih baru.

```bash
npm ci
npm run dev
```

Buka alamat lokal yang ditampilkan oleh Vite. Untuk memeriksa tipe dan membuat hasil siap unggah:

```bash
npm run build
```

Hasilnya berada di folder `dist/`. Unggah isi folder `dist/` ke hosting statis. Untuk layanan seperti Vercel, unggah proyek sumber ini dan gunakan perintah build `npm run build` dengan direktori output `dist`.

ZIP ini sengaja tidak menyertakan `node_modules`, `dist`, riwayat Git, dan hasil build duplikat karena dapat dibuat kembali. Lisensi font tetap tersedia di `public/licenses/`.
