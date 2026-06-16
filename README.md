# SMEs Cyber Security Capability Assessment

This is a static web app for assessing SME cyber security capability using BSSN's **PAMAN KAMI untuk UKM Versi 2.0** guide.

## Open the App

Open `index.html` directly in a browser. No install step is required.

## Tech Stack

- **HTML5**: page structure, SME profile form, control checklist, and report elements.
- **CSS3**: responsive layout, sidebar dashboard, question cards, score visual states, and print styling.
- **Vanilla JavaScript**: 25 PAMAN KAMI controls, score calculation, question filters, language toggle, local save, action plan, JSON/CSV export, and print trigger.
- **Browser Local Storage**: stores the business profile, answers, assessor notes, language preference, and latest filter locally in the user's browser.
- **Static Assets**: PAMAN KAMI logo and browser icon at `assets/paman-kami-logo.png`; English Edition cover image remains available at `assets/paman-kami-english-edition.png`.
- **No build tool / no backend**: the app runs as a static web app and does not require a Node server, database, API, or build process.

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

Use the development setup when changing content, styling, scoring logic, or language strings.

1. Go to the project folder:

   ```bash
   cd "/ProjectFolder"
   ```

2. Start a local static web server:

   ```bash
   python3 -m http.server 4173
   ```

3. Open the app in a browser:

   ```text
   http://localhost:4173/index.html
   ```

4. After editing JavaScript, check syntax:

   ```bash
   node --check app.js
   ```

5. Reload the browser to view changes. Assessment data is stored in browser local storage; use the reset button in the app if you want to start from an empty assessment.

## Production Deployment

This app can be deployed to any web server or static hosting service because it only needs static files.

1. Prepare the files to publish:

   ```text
   index.html
   styles.css
   app.js
   assets/
   ```

2. Upload those files to a static hosting target, such as Nginx, Apache, GitHub Pages, Netlify, Vercel static output, Cloudflare Pages, or object storage with static website hosting.

3. Make sure the web server sends standard content types:

   ```text
   .html -> text/html
   .css  -> text/css
   .js   -> application/javascript
   .png  -> image/png
   ```

4. For Nginx, a minimal site configuration can point the root to the project folder:

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

5. Use HTTPS in production so local storage and report downloads run in a secure browser context.

6. The `source/` folder contains the extracted guide reference. Include it for internal auditability, or omit it if you only want to publish the assessment app.

## Production Checklist

- Logo and favicon load from `assets/paman-kami-logo.png`.
- All 25 questions and English translations display correctly.
- The Indonesian/English language toggle updates static labels, questions, risk guidance, and protection steps.
- JSON and CSV export work in the target browser.
- Print report layout is clean.
- There are no browser console errors.
- The server uses HTTPS and does not require any backend service.
