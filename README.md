# SME Cyber Security Capability Assessment

This is a static web app for assessing SME cyber security capability using BSSN's **PAMAN KAMI untuk UKM Versi 2.0** guide.

## Open the App

Open `index.html` directly in a browser. No install step is required.

## Tech Stack

- **HTML5**: struktur halaman, form profil UMKM, daftar kontrol, dan elemen report.
- **CSS3**: layout responsive, dashboard sidebar, kartu pertanyaan, state visual skor, dan print styling.
- **Vanilla JavaScript**: data 25 kontrol PAMAN KAMI, perhitungan skor, filter pertanyaan, toggle bahasa, local save, action plan, ekspor JSON/CSV, dan print trigger.
- **Browser Local Storage**: menyimpan profil, jawaban, catatan assessor, pilihan bahasa, dan filter terakhir secara lokal di browser pengguna.
- **Static Assets**: logo dan icon PAMAN KAMI di `assets/paman-kami-logo.png`; cover English Edition tetap tersedia di `assets/paman-kami-english-edition.png`.
- **No build tool / no backend**: aplikasi berjalan sebagai static web app, sehingga tidak memerlukan Node server, database, API, atau proses build.

## What It Includes

- Business profile form based on the PAMAN KAMI identity fields.
- 25 scored controls from the guide.
- Language setting toggle for Indonesian and English display, including static UI labels, question text, domain labels, risk guidance, and protection steps.
- Indonesian and English questions for each control.
- Indonesian and English aspect/domain labels, including Identifikasi/Identification and Kontrol Proteksi/Control Protection.
- PAMAN KAMI logo and browser icon stored at `assets/paman-kami-logo.png`.
- PAMAN KAMI scoring: `DM = 4`, `DS = 2`, `TD = 0`, `TT = 0`.
- Score categories: Sempurna, Baik, Cukup, Kurang, Buruk.
- Domain dashboard for Identifikasi, Proteksi, Deteksi, Penanggulangan, and Pemulihan.
- Local browser save, notes per control, print view, JSON export, and CSV export.
- Prioritized action plan generated from partial, missing, unknown, or unanswered controls.

## Source Material

The referenced PDF was extracted to:

`source/paman-kami-guide.txt`

The app paraphrases the guide's vulnerability explanations and protection steps into concise assessment guidance for use by SME owners, managers, or assessors.

## Development Deployment

Gunakan mode development saat ingin mengubah konten, styling, atau logic scoring.

1. Masuk ke folder project:

   ```bash
   cd "/ProjectFolder/Building Cyber Security of SMEs Indonesia"
   ```

2. Jalankan static web server lokal:

   ```bash
   python3 -m http.server 4173
   ```

3. Buka aplikasi di browser:

   ```text
   http://localhost:4173/index.html
   ```

4. Setelah mengubah JavaScript, cek sintaks:

   ```bash
   node --check app.js
   ```

5. Reload browser untuk melihat perubahan. Data assessment tersimpan di local storage browser; gunakan tombol reset di aplikasi jika ingin mulai dari kosong.

## Production Deployment

Aplikasi ini dapat dipasang di server atau static hosting apa pun karena hanya membutuhkan file statis.

1. Siapkan file yang akan dipublish:

   ```text
   index.html
   styles.css
   app.js
   assets/
   ```

2. Upload file tersebut ke static hosting, misalnya Nginx, Apache, GitHub Pages, Netlify, Vercel static output, Cloudflare Pages, atau object storage dengan static website hosting.

3. Pastikan web server mengirim file dengan content type standar:

   ```text
   .html -> text/html
   .css  -> text/css
   .js   -> application/javascript
   .png  -> image/png
   ```

4. Untuk Nginx, root minimal dapat diarahkan ke folder project:

   ```nginx
   server {
     listen 80;
     server_name assessment.example.com;
     root /var/www/paman-kami-assessment;
     index index.html;

     location / {
       try_files $uri $uri/ /index.html;
     }
   }
   ```

5. Untuk production, gunakan HTTPS agar local storage dan download report berjalan dalam konteks browser yang aman.

6. Folder `source/` berisi ekstraksi referensi guide. Folder ini boleh disertakan untuk audit internal, tetapi tidak wajib dipublish jika hanya ingin menyajikan aplikasi assessment.

## Production Checklist

- Logo dan favicon termuat dari `assets/paman-kami-logo.png`.
- Seluruh 25 pertanyaan dan translasi Inggris tampil.
- Export JSON dan CSV berjalan di browser target.
- Print report menghasilkan layout yang rapi.
- Tidak ada error di browser console.
- Server mengaktifkan HTTPS dan tidak memerlukan backend tambahan.
