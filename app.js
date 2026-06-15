const STORAGE_KEY = "pamanKamiSmeAssessment.v1";

const answerOptions = [
  { code: "DM", label: "Diterapkan Menyeluruh", labelEn: "Fully Applied", shortId: "Penuh", shortEn: "Full", score: 4 },
  { code: "DS", label: "Diterapkan Sebagian", labelEn: "Partially Applied", shortId: "Sebagian", shortEn: "Partial", score: 2 },
  { code: "TD", label: "Tidak Diterapkan", labelEn: "Not Applied", shortId: "Tidak", shortEn: "No", score: 0 },
  { code: "TT", label: "Tidak Tahu", labelEn: "Unknown", shortId: "Tidak tahu", shortEn: "Unknown", score: 0 }
];

const uiText = {
  id: {
    appTitle: "Penilaian Kapabilitas Keamanan Siber UMKM",
    pageTitle: "PAMAN KAMI | Penilaian Kapabilitas Keamanan Siber UMKM",
    toolsLabel: "Alat penilaian",
    languageLabel: "Bahasa",
    languageSettingLabel: "Pengaturan bahasa",
    displayLanguageLabel: "Bahasa tampilan",
    printReport: "Cetak report",
    downloadJson: "Unduh report JSON",
    downloadCsv: "Unduh jawaban CSV",
    resetAssessment: "Reset penilaian",
    assessmentSummaryLabel: "Ringkasan penilaian",
    currentScore: "Skor Saat Ini",
    scoreIntro: "Lengkapi 25 kontrol untuk menghitung skor PAMAN KAMI.",
    progress: "Progres",
    answered: "Terjawab",
    fullyApplied: "Diterapkan menyeluruh",
    openGaps: "Gap terbuka",
    domainScoreOverview: "Ringkasan skor domain",
    guideBasis: "Dasar Panduan",
    guideBasisText: "PAMAN KAMI adalah penilaian mandiri BSSN untuk usaha kecil dan menengah. Setiap kontrol bernilai DM = 4, DS = 2, TD/TT = 0.",
    businessProfile: "Profil Usaha",
    smeDetails: "Detail UMKM",
    businessName: "Nama usaha",
    brand: "Merek",
    businessScale: "Skala usaha",
    legalForm: "Bentuk usaha",
    assets: "Aset",
    annualRevenue: "Omzet tahunan",
    employees: "Karyawan",
    website: "Situs web",
    mobileApps: "Aplikasi mobile",
    address: "Alamat",
    digitalChannels: "Kanal digital",
    assessorName: "Nama assessor",
    role: "Jabatan",
    phone: "Telepon",
    select: "Pilih",
    controlsCount: "25 Kontrol",
    capabilityChecklist: "Checklist Kapabilitas",
    questionFilters: "Filter pertanyaan",
    filterAll: "Semua",
    filterGaps: "Gap",
    filterUnanswered: "Belum dijawab",
    filterPriority: "Prioritas",
    generatedOutput: "Output Dibuat",
    actionPlan: "Rencana Aksi",
    copySummary: "Salin Ringkasan",
    assessmentStatus: "Status penilaian",
    selectOne: "Pilih satu",
    unanswered: "Belum dijawab",
    riskGuidance: "Risiko dan panduan proteksi",
    risk: "Risiko",
    protectionSteps: "Langkah proteksi",
    assessorNotes: "Catatan assessor",
    notePlaceholder: "Bukti, pemilik, atau tindak lanjut",
    allControlsComplete: "Semua 25 kontrol PAMAN KAMI ditandai DM. UMKM siap merencanakan tingkat kematangan berikutnya.",
    moreGaps: "gap lainnya tercakup dalam report yang diunduh.",
    priority: "prioritas",
    noOpenActions: "Tidak ada aksi terbuka",
    priorityActions: "Aksi prioritas:",
    business: "Usaha",
    resetConfirm: "Reset assessment ini dan hapus jawaban yang tersimpan lokal?",
    copied: "Tersalin",
    saved: "Tersimpan lokal"
  },
  en: {
    appTitle: "SME Cyber Security Capability Assessment",
    pageTitle: "SME Cyber Security Capability Assessment | PAMAN KAMI",
    toolsLabel: "Assessment tools",
    languageLabel: "Language",
    languageSettingLabel: "Language setting",
    displayLanguageLabel: "Display language",
    printReport: "Print report",
    downloadJson: "Download JSON report",
    downloadCsv: "Download CSV answers",
    resetAssessment: "Reset assessment",
    assessmentSummaryLabel: "Assessment summary",
    currentScore: "Current Score",
    scoreIntro: "Complete the 25 controls to calculate the PAMAN KAMI score.",
    progress: "Progress",
    answered: "Answered",
    fullyApplied: "Fully applied",
    openGaps: "Open gaps",
    domainScoreOverview: "Domain score overview",
    guideBasis: "Guide Basis",
    guideBasisText: "PAMAN KAMI is a BSSN self-assessment for small and medium enterprises. Each control scores DM = 4, DS = 2, TD/TT = 0.",
    businessProfile: "Business Profile",
    smeDetails: "SME Details",
    businessName: "Business name",
    brand: "Brand",
    businessScale: "Business scale",
    legalForm: "Legal form",
    assets: "Assets",
    annualRevenue: "Annual revenue",
    employees: "Employees",
    website: "Website",
    mobileApps: "Mobile Apps",
    address: "Address",
    digitalChannels: "Digital channels",
    assessorName: "Assessor name",
    role: "Role",
    phone: "Phone",
    select: "Select",
    controlsCount: "25 Controls",
    capabilityChecklist: "Capability Checklist",
    questionFilters: "Question filters",
    filterAll: "All",
    filterGaps: "Gaps",
    filterUnanswered: "Unanswered",
    filterPriority: "Priority",
    generatedOutput: "Generated Output",
    actionPlan: "Action Plan",
    copySummary: "Copy Summary",
    assessmentStatus: "Assessment status",
    selectOne: "Select one",
    unanswered: "Unanswered",
    riskGuidance: "Risk and protection guidance",
    risk: "Risk",
    protectionSteps: "Protection steps",
    assessorNotes: "Assessor notes",
    notePlaceholder: "Evidence, owner, or next action",
    allControlsComplete: "All 25 PAMAN KAMI controls are marked DM. The SME is ready to plan the next maturity level.",
    moreGaps: "more gap(s) are included in the downloaded report.",
    priority: "priority",
    noOpenActions: "No open actions",
    priorityActions: "Priority actions:",
    business: "Business",
    resetConfirm: "Reset this assessment and clear locally saved answers?",
    copied: "Copied",
    saved: "Saved locally"
  }
};

const domainMeta = {
  identify: {
    label: "Identifikasi",
    labelEn: "Identification",
    controlLabel: "Kontrol Identifikasi",
    controlLabelEn: "Control Identification",
    order: 1
  },
  protect: {
    label: "Proteksi",
    labelEn: "Protection",
    controlLabel: "Kontrol Proteksi",
    controlLabelEn: "Control Protection",
    order: 2
  },
  detect: {
    label: "Deteksi",
    labelEn: "Detection",
    controlLabel: "Kontrol Deteksi",
    controlLabelEn: "Control Detection",
    order: 3
  },
  respond: {
    label: "Penanggulangan",
    labelEn: "Response",
    controlLabel: "Kontrol Penanggulangan",
    controlLabelEn: "Control Response",
    order: 4
  },
  recover: {
    label: "Pemulihan",
    labelEn: "Recovery",
    controlLabel: "Kontrol Pemulihan",
    controlLabelEn: "Control Recovery",
    order: 5
  }
};

const controls = [
  {
    id: 1,
    domain: "identify",
    title: "Identify important business assets",
    titleId: "Identifikasi aset penting usaha",
    question: "Apakah Anda sudah melakukan identifikasi terhadap aset-aset penting usaha yang harus dilindungi?",
    questionEn: "Have you identified the important business assets that must be protected?",
    risk: "Important information, customer data, transaction records, designs, and partner data may be overlooked and left unprotected.",
    protections: [
      "Create an inventory of tangible and intangible assets.",
      "Classify which assets are important and rank the impact if they are lost.",
      "Include employee, customer, payment, accounting, partner, and product development information."
    ],
    riskId: "Informasi penting, data pelanggan, catatan transaksi, desain, dan data mitra dapat terlewat dan tidak terlindungi.",
    protectionsId: [
      "Buat inventaris aset berwujud dan tidak berwujud.",
      "Klasifikasikan aset penting dan beri peringkat dampak jika aset hilang.",
      "Masukkan informasi karyawan, pelanggan, pembayaran, akuntansi, mitra, dan pengembangan produk."
    ]
  },
  {
    id: 2,
    domain: "identify",
    title: "Identify risks to important assets",
    titleId: "Identifikasi risiko terhadap aset penting",
    question: "Apakah Anda sudah melakukan identifikasi terhadap semua kemungkinan risiko hilangnya aset-aset penting usaha?",
    questionEn: "Have you identified all possible risks that could cause the loss of important business assets?",
    risk: "Without risk identification, leadership may not understand where loss, theft, deletion, or damage can occur.",
    protections: [
      "Map critical business processes, people, and assets.",
      "List possible causes and business impacts for each asset loss scenario.",
      "Use a simple risk register aligned with ISO 31000 principles."
    ],
    riskId: "Tanpa identifikasi risiko, pimpinan mungkin tidak memahami titik kehilangan, pencurian, penghapusan, atau kerusakan aset.",
    protectionsId: [
      "Petakan proses bisnis, orang, dan aset yang kritikal.",
      "Daftarkan penyebab dan dampak bisnis untuk setiap skenario kehilangan aset.",
      "Gunakan register risiko sederhana yang selaras dengan prinsip ISO 31000."
    ]
  },
  {
    id: 3,
    domain: "identify",
    title: "Document information security rules",
    titleId: "Dokumentasikan aturan keamanan informasi",
    question: "Apakah Anda memiliki prosedur dan kebijakan keamanan informasi yang diterapkan untuk melindungi aset-aset penting usaha?",
    questionEn: "Do you have information security procedures and policies in place to protect important business assets?",
    risk: "Staff may rely on personal judgment, ignore asset protection, or handle sensitive information inconsistently.",
    protections: [
      "Write security policies based on identified assets and risks.",
      "Communicate the policy to employees, contractors, and relevant partners.",
      "Review, monitor, and revise the policy routinely."
    ],
    riskId: "Karyawan dapat bergantung pada penilaian pribadi, mengabaikan perlindungan aset, atau menangani informasi sensitif secara tidak konsisten.",
    protectionsId: [
      "Susun kebijakan keamanan berdasarkan aset dan risiko yang telah diidentifikasi.",
      "Sosialisasikan kebijakan kepada karyawan, kontraktor, dan mitra terkait.",
      "Tinjau, pantau, dan revisi kebijakan secara rutin."
    ]
  },
  {
    id: 4,
    domain: "protect",
    title: "Use passwords on devices",
    titleId: "Gunakan kata sandi pada perangkat",
    question: "Apakah Anda menerapkan penggunaan kata sandi pada komputer, laptop dan/atau smartphone untuk mencegah pencurian data?",
    questionEn: "Do you require passwords on computers, laptops, and/or smartphones to prevent data theft?",
    risk: "Lost or unattended devices can expose business data if they do not require authentication.",
    protections: [
      "Enable user passwords, PINs, or biometrics on every business device.",
      "Require screen lock after short inactivity.",
      "Review shared devices and remove unused accounts."
    ],
    riskId: "Perangkat yang hilang atau ditinggalkan dapat membuka data usaha jika tidak memerlukan autentikasi.",
    protectionsId: [
      "Aktifkan kata sandi, PIN, atau biometrik pada setiap perangkat usaha.",
      "Wajibkan screen lock setelah periode tidak aktif yang singkat.",
      "Tinjau perangkat bersama dan hapus akun yang tidak digunakan."
    ]
  },
  {
    id: 5,
    domain: "protect",
    title: "Use strong and unique passwords",
    titleId: "Gunakan kata sandi yang kuat dan unik",
    question: "Sudahkah Anda membuat kata sandi yang kuat dan tidak mudah ditebak serta tidak menggunakan kata sandi yang sama untuk beberapa akun?",
    questionEn: "Have you created strong, hard-to-guess passwords and avoided using the same password for multiple accounts?",
    risk: "A reused or weak password can let attackers access multiple web services after one account is compromised.",
    protections: [
      "Use long passwords with mixed letters, numbers, and symbols.",
      "Avoid reusing passwords across services, devices, and Wi-Fi routers.",
      "Store passwords securely and change them periodically when risk changes."
    ],
    riskId: "Kata sandi yang lemah atau dipakai ulang dapat membuat penyerang mengakses banyak layanan setelah satu akun bocor.",
    protectionsId: [
      "Gunakan kata sandi panjang dengan kombinasi huruf, angka, dan simbol.",
      "Hindari penggunaan ulang kata sandi pada layanan, perangkat, dan router Wi-Fi.",
      "Simpan kata sandi dengan aman dan ubah secara berkala saat risiko berubah."
    ]
  },
  {
    id: 6,
    domain: "protect",
    title: "Protect sensitive physical information",
    titleId: "Lindungi informasi fisik yang sensitif",
    question: "Apakah Anda menerapkan langkah untuk mencegah hilang atau bocornya informasi penting, seperti menyimpan informasi penting di kabinet/lemari/laci yang terkunci, dan tidak meninggalkannya di atas meja?",
    questionEn: "Do you take steps to prevent important information from being lost or leaked, such as storing it in locked cabinets, cupboards, or drawers and not leaving it on desks?",
    risk: "Documents left unattended can be viewed, copied, removed, or photographed by unauthorized people.",
    protections: [
      "Store sensitive documents in locked cabinets or drawers.",
      "Keep important information under supervision while in use.",
      "Apply clean desk habits and return documents after work is finished."
    ],
    riskId: "Dokumen yang ditinggalkan tanpa pengawasan dapat dilihat, disalin, diambil, atau difoto oleh pihak yang tidak berwenang.",
    protectionsId: [
      "Simpan dokumen sensitif di lemari atau laci yang terkunci.",
      "Pastikan informasi penting berada dalam pengawasan saat digunakan.",
      "Terapkan kebiasaan meja bersih dan kembalikan dokumen setelah selesai bekerja."
    ]
  },
  {
    id: 7,
    domain: "protect",
    title: "Challenge unknown visitors",
    titleId: "Tegur pengunjung yang tidak dikenal",
    question: "Saat melihat ada orang yang tidak dikenal memasuki area kerja terbatas milik usaha, apakah Anda melakukan pengamanan dengan cara mendekati dan menanyakan maksud dan tujuan kedatangan orang tersebut?",
    questionEn: "When you see an unknown person entering a restricted work area, do you approach them and ask the purpose of their visit?",
    risk: "Unauthorized visitors can access restricted areas, archives, servers, or confidential documents.",
    protections: [
      "Ask unknown visitors about their purpose and escort them if needed.",
      "Mark restricted areas and use a reception or visitor process.",
      "Limit access to server, archive, safe, and document storage areas."
    ],
    riskId: "Pengunjung tidak berwenang dapat mengakses area terbatas, arsip, server, atau dokumen rahasia.",
    protectionsId: [
      "Tanyakan tujuan pengunjung yang tidak dikenal dan dampingi jika diperlukan.",
      "Beri tanda area terbatas dan gunakan proses resepsionis atau pencatatan tamu.",
      "Batasi akses ke area server, arsip, brankas, dan penyimpanan dokumen."
    ]
  },
  {
    id: 8,
    domain: "protect",
    title: "Protect equipment from power disruption",
    titleId: "Lindungi perangkat dari gangguan listrik",
    question: "Apakah Anda sudah memasang Surge Protector dan UPS untuk melindungi perangkat jaringan usaha dari sambaran petir, lonjakan listrik atau hubungan pendek listrik?",
    questionEn: "Have you installed surge protectors and UPS units to protect business network equipment from lightning, power surges, or short circuits?",
    risk: "Power surges or outages can damage devices and cause data loss or interrupted operations.",
    protections: [
      "Use surge protectors for network and critical electronic equipment.",
      "Use UPS units for computers and devices that handle important data.",
      "Test backup power periodically."
    ],
    riskId: "Lonjakan listrik atau pemadaman dapat merusak perangkat dan menyebabkan kehilangan data atau gangguan operasional.",
    protectionsId: [
      "Gunakan surge protector untuk jaringan dan perangkat elektronik kritikal.",
      "Gunakan UPS untuk komputer dan perangkat yang menangani data penting.",
      "Uji daya cadangan secara berkala."
    ]
  },
  {
    id: 9,
    domain: "protect",
    title: "Destroy discarded sensitive information",
    titleId: "Musnahkan informasi sensitif yang dibuang",
    question: "Saat membuang atau menghapus informasi penting, apakah Anda sudah memastikan bahwa informasi penting yang dibuang atau dihapus menjadi tidak terbaca lagi?",
    questionEn: "When disposing of or deleting important information, do you ensure that the discarded or deleted information can no longer be read?",
    risk: "Paper records and deleted electronic files can be recovered if they are not destroyed correctly.",
    protections: [
      "Shred sensitive paper records before disposal.",
      "Use secure deletion tools or specialist support for storage media.",
      "Create a disposal checklist for devices, drives, and printed records."
    ],
    riskId: "Catatan kertas dan file elektronik yang dihapus dapat dipulihkan jika tidak dimusnahkan dengan benar.",
    protectionsId: [
      "Hancurkan dokumen kertas sensitif sebelum dibuang.",
      "Gunakan alat penghapusan aman atau bantuan spesialis untuk media penyimpanan.",
      "Buat checklist pemusnahan untuk perangkat, drive, dan dokumen cetak."
    ]
  },
  {
    id: 10,
    domain: "protect",
    title: "Avoid public Wi-Fi for important accounts",
    titleId: "Hindari Wi-Fi publik untuk akun penting",
    question: "Apakah Anda menerapkan kebijakan tidak menghubungkan komputer, laptop, dan smartphone dengan Wi-Fi publik saat mengakses akun-akun penting?",
    questionEn: "Do you apply a policy of not connecting computers, laptops, and smartphones to public Wi-Fi when accessing important accounts?",
    risk: "Public Wi-Fi can expose logins, transactions, and other sensitive activity to interception.",
    protections: [
      "Use mobile tethering or trusted networks for important accounts.",
      "Avoid banking and marketplace administration on public Wi-Fi.",
      "Use VPN, firewall, and disabled file sharing when public Wi-Fi is unavoidable."
    ],
    riskId: "Wi-Fi publik dapat mengekspos login, transaksi, dan aktivitas sensitif lain untuk disadap.",
    protectionsId: [
      "Gunakan tethering seluler atau jaringan tepercaya untuk akun penting.",
      "Hindari administrasi perbankan dan marketplace melalui Wi-Fi publik.",
      "Gunakan VPN, firewall, dan matikan file sharing jika Wi-Fi publik tidak dapat dihindari."
    ]
  },
  {
    id: 11,
    domain: "protect",
    title: "Prevent social engineering",
    titleId: "Cegah rekayasa sosial",
    question: "Apakah Anda menerapkan cara untuk menghindari serangan rekayasa sosial seperti membatasi informasi pribadi yang dibagikan kepada publik atau bersikap skeptis terhadap orang tidak dikenal?",
    questionEn: "Do you take steps to avoid social engineering attacks, such as limiting personal information shared publicly or being skeptical of unknown people?",
    risk: "Attackers can manipulate staff into sharing credentials, confidential information, or installing malware.",
    protections: [
      "Limit personal and company information shared publicly.",
      "Verify sensitive requests through a separate trusted channel.",
      "Never share passwords and train staff to question unusual requests."
    ],
    riskId: "Penyerang dapat memanipulasi staf untuk membagikan kredensial, informasi rahasia, atau memasang malware.",
    protectionsId: [
      "Batasi informasi pribadi dan perusahaan yang dibagikan ke publik.",
      "Verifikasi permintaan sensitif melalui kanal tepercaya yang terpisah.",
      "Jangan pernah membagikan kata sandi dan latih staf untuk mempertanyakan permintaan yang tidak biasa."
    ]
  },
  {
    id: 12,
    domain: "protect",
    title: "Keep systems and applications updated",
    titleId: "Perbarui sistem dan aplikasi",
    question: "Apakah Anda selalu menjaga Operating System, smartphone, perangkat lunak dan aplikasi usaha mendapatkan pembaruan keamanan dari vendor secara otomatis?",
    questionEn: "Do you ensure operating systems, smartphones, software, and business applications receive automatic security updates from vendors?",
    risk: "Unpatched systems remain vulnerable to known malware, bugs, and exploitation techniques.",
    protections: [
      "Enable automatic security updates on devices and software.",
      "Connect devices to trusted networks for updates.",
      "Replace unsupported software with current versions."
    ],
    riskId: "Sistem yang tidak ditambal tetap rentan terhadap malware, bug, dan teknik eksploitasi yang sudah diketahui.",
    protectionsId: [
      "Aktifkan pembaruan keamanan otomatis pada perangkat dan perangkat lunak.",
      "Hubungkan perangkat ke jaringan tepercaya saat melakukan pembaruan.",
      "Ganti perangkat lunak yang tidak lagi didukung dengan versi terkini."
    ]
  },
  {
    id: 13,
    domain: "protect",
    title: "Install applications from trusted sources",
    titleId: "Instal aplikasi dari sumber tepercaya",
    question: "Apakah Anda selalu memastikan bahwa aplikasi yang diunduh dan diinstal pada komputer, laptop, dan smartphone usaha aman dan berasal dari sumber tepercaya?",
    questionEn: "Do you always ensure that applications downloaded and installed on business computers, laptops, and smartphones are safe and come from trusted sources?",
    risk: "Pirated or untrusted applications can contain malware or unauthorized access tools.",
    protections: [
      "Install mobile apps from official stores and desktop software from trusted vendors.",
      "Keep antivirus real-time protection enabled.",
      "Block unknown source installations on smartphones where possible."
    ],
    riskId: "Aplikasi bajakan atau tidak tepercaya dapat mengandung malware atau alat akses tidak sah.",
    protectionsId: [
      "Instal aplikasi mobile dari toko resmi dan software desktop dari vendor tepercaya.",
      "Pastikan perlindungan real-time antivirus tetap aktif.",
      "Blokir instalasi dari sumber tidak dikenal pada smartphone jika memungkinkan."
    ]
  },
  {
    id: 14,
    domain: "protect",
    title: "Control business internet use",
    titleId: "Kendalikan penggunaan internet usaha",
    question: "Apakah Anda menerapkan kebijakan untuk mengontrol penggunaan Internet, seperti menetapkan aturan tentang menjelajahi situs web dan mengunggah ke media sosial di komputer area kerja?",
    questionEn: "Do you apply a policy to control internet use, such as rules for browsing websites and uploading to social media from workplace computers?",
    risk: "Uncontrolled browsing, downloads, and social media use can expose devices to malware or data leakage.",
    protections: [
      "Define acceptable internet and social media use for work devices.",
      "Use web content filtering where available.",
      "Block risky or non-business sites on workplace networks."
    ],
    riskId: "Browsing, unduhan, dan penggunaan media sosial yang tidak terkendali dapat mengekspos perangkat ke malware atau kebocoran data.",
    protectionsId: [
      "Tetapkan aturan penggunaan internet dan media sosial yang dapat diterima pada perangkat kerja.",
      "Gunakan web content filtering jika tersedia.",
      "Blokir situs berisiko atau tidak terkait bisnis pada jaringan kerja."
    ]
  },
  {
    id: 15,
    domain: "protect",
    title: "Build employee security awareness",
    titleId: "Bangun kesadaran keamanan karyawan",
    question: "Apakah Anda mempunyai program untuk memberikan pemahaman kepada karyawan akan pentingnya keamanan informasi dan bahwa keamanan informasi merupakan tanggung jawab semua orang?",
    questionEn: "Do you have a program to help employees understand the importance of information security and that it is everyone's responsibility?",
    risk: "Employees may not recognize threats or understand that protecting information is part of their role.",
    protections: [
      "Run routine awareness briefings for all staff.",
      "Include security expectations during hiring and onboarding.",
      "Review personnel risk for sensitive roles."
    ],
    riskId: "Karyawan mungkin tidak mengenali ancaman atau memahami bahwa perlindungan informasi adalah bagian dari perannya.",
    protectionsId: [
      "Lakukan briefing kesadaran keamanan secara rutin untuk seluruh staf.",
      "Masukkan ekspektasi keamanan saat rekrutmen dan onboarding.",
      "Tinjau risiko personel untuk peran yang sensitif."
    ]
  },
  {
    id: 16,
    domain: "protect",
    title: "Require partner confidentiality",
    titleId: "Wajibkan kerahasiaan mitra",
    question: "Apakah Anda mewajibkan mitra bisnis untuk menjaga kerahasiaan, seperti menyertakan klausul kerahasiaan dalam kontrak?",
    questionEn: "Do you require business partners to maintain confidentiality, such as by including confidentiality clauses in contracts?",
    risk: "Partners may misuse, share, or sell confidential business information if obligations are unclear.",
    protections: [
      "Add confidentiality clauses to partner agreements.",
      "Label shared confidential information clearly.",
      "Explain expected handling rules before sharing sensitive information."
    ],
    riskId: "Mitra dapat menyalahgunakan, membagikan, atau menjual informasi rahasia usaha jika kewajibannya tidak jelas.",
    protectionsId: [
      "Tambahkan klausul kerahasiaan pada perjanjian mitra.",
      "Beri label yang jelas pada informasi rahasia yang dibagikan.",
      "Jelaskan aturan penanganan sebelum membagikan informasi sensitif."
    ]
  },
  {
    id: 17,
    domain: "protect",
    title: "Limit administrative access",
    titleId: "Batasi akses administratif",
    question: "Apakah Anda menerapkan langkah untuk membatasi akses administratif karyawan terhadap data usaha secara spesifik sesuai dengan deskripsi tugasnya?",
    questionEn: "Do you take steps to limit employees' administrative access to business data according to their job descriptions?",
    risk: "Excessive access can let insiders or compromised accounts reach sensitive locations and data.",
    protections: [
      "Grant access based on job responsibility.",
      "Restrict administrative privileges to authorized staff.",
      "Review access whenever roles change or employees leave."
    ],
    riskId: "Akses berlebihan dapat membuat orang internal atau akun yang dikompromikan menjangkau lokasi dan data sensitif.",
    protectionsId: [
      "Berikan akses berdasarkan tanggung jawab pekerjaan.",
      "Batasi hak administratif hanya untuk staf yang berwenang.",
      "Tinjau akses saat peran berubah atau karyawan keluar."
    ]
  },
  {
    id: 18,
    domain: "protect",
    title: "Keep firewalls active",
    titleId: "Pastikan firewall selalu aktif",
    question: "Apakah Anda selalu memastikan bahwa firewall pada komputer dan/atau laptop selalu aktif untuk melindungi aset penting dari ancaman siber melalui jaringan internet?",
    questionEn: "Do you always ensure that firewalls on computers and/or laptops are active to protect important assets from cyber threats through the internet?",
    risk: "Unauthorized traffic can reach devices and expose data when firewalls are disabled or misconfigured.",
    protections: [
      "Enable host firewalls on computers and laptops.",
      "Use default-deny rules for unnecessary inbound traffic.",
      "Check firewall status during routine device maintenance."
    ],
    riskId: "Trafik tidak sah dapat menjangkau perangkat dan mengekspos data saat firewall mati atau salah konfigurasi.",
    protectionsId: [
      "Aktifkan firewall host pada komputer dan laptop.",
      "Gunakan aturan default-deny untuk trafik masuk yang tidak diperlukan.",
      "Periksa status firewall saat pemeliharaan perangkat rutin."
    ]
  },
  {
    id: 19,
    domain: "protect",
    title: "Secure business Wi-Fi",
    titleId: "Amankan Wi-Fi usaha",
    question: "Apakah Anda menerapkan penggunaan kata sandi dan enkripsi seperti WPA2-PSK pada jaringan Wi-Fi milik usaha?",
    questionEn: "Do you use passwords and encryption, such as WPA2-PSK, on the business Wi-Fi network?",
    risk: "Weak Wi-Fi security can allow unauthorized users to access the network or intercept data.",
    protections: [
      "Use WPA2-PSK or stronger encryption.",
      "Set a long Wi-Fi passphrase that is hard to guess.",
      "Change router default administrator credentials."
    ],
    riskId: "Keamanan Wi-Fi yang lemah dapat membuat pengguna tidak berwenang mengakses jaringan atau menyadap data.",
    protectionsId: [
      "Gunakan enkripsi WPA2-PSK atau yang lebih kuat.",
      "Tetapkan frasa sandi Wi-Fi yang panjang dan sulit ditebak.",
      "Ubah kredensial administrator bawaan router."
    ]
  },
  {
    id: 20,
    domain: "protect",
    title: "Install and update antivirus",
    titleId: "Instal dan perbarui antivirus",
    question: "Apakah Anda menginstal antivirus dan mengatur pembaruan antivirus secara otomatis?",
    questionEn: "Do you install antivirus software and configure antivirus updates to run automatically?",
    risk: "Malware, phishing payloads, and infected attachments may not be blocked or detected quickly.",
    protections: [
      "Install reputable antivirus or endpoint protection.",
      "Enable automatic virus definition updates.",
      "Review alerts and keep protection active on all business devices."
    ],
    riskId: "Malware, muatan phishing, dan lampiran terinfeksi mungkin tidak diblokir atau terdeteksi dengan cepat.",
    protectionsId: [
      "Instal antivirus atau endpoint protection yang tepercaya.",
      "Aktifkan pembaruan definisi virus otomatis.",
      "Tinjau peringatan dan pastikan perlindungan aktif di semua perangkat usaha."
    ]
  },
  {
    id: 21,
    domain: "protect",
    title: "Check email phishing risk",
    titleId: "Periksa risiko phishing email",
    question: "Apakah Anda memastikan bahwa email yang diterima aman dari peretas yang ingin mendapatkan akses ke jaringan Anda melalui email phishing?",
    questionEn: "Do you check that received emails are safe from attackers attempting to access your network through phishing emails?",
    risk: "Phishing can steal credentials, start fraudulent transactions, or install malware and ransomware.",
    protections: [
      "Use spam filtering and updated antivirus.",
      "Be cautious with unknown senders and suspicious attachments.",
      "Keep personal firewall and mail security settings up to date."
    ],
    riskId: "Phishing dapat mencuri kredensial, memulai transaksi penipuan, atau memasang malware dan ransomware.",
    protectionsId: [
      "Gunakan filter spam dan antivirus yang selalu diperbarui.",
      "Waspadai pengirim tidak dikenal dan lampiran mencurigakan.",
      "Pastikan firewall pribadi dan pengaturan keamanan email selalu mutakhir."
    ]
  },
  {
    id: 22,
    domain: "detect",
    title: "Monitor access logs",
    titleId: "Pantau log akses",
    question: "Apakah Anda sudah melakukan pemantauan aktivitas log terhadap akun yang melakukan akses terhadap sistem Anda?",
    questionEn: "Do you monitor activity logs for accounts that access your systems?",
    risk: "Unusual activity may go unnoticed and investigations become harder after an incident.",
    protections: [
      "Enable logging on relevant hardware, software, accounts, and services.",
      "Review logs for unusual activity.",
      "Retain logs for at least one year where practical."
    ],
    riskId: "Aktivitas tidak biasa dapat tidak terdeteksi dan investigasi menjadi lebih sulit setelah insiden.",
    protectionsId: [
      "Aktifkan logging pada perangkat keras, perangkat lunak, akun, dan layanan yang relevan.",
      "Tinjau log untuk menemukan aktivitas tidak biasa.",
      "Simpan log setidaknya satu tahun jika memungkinkan."
    ]
  },
  {
    id: 23,
    domain: "respond",
    title: "Prepare an incident response plan",
    titleId: "Siapkan rencana respons insiden",
    question: "Apakah Anda memiliki rencana tindak untuk menangani kebocoran, kehilangan, atau pencurian aset penting usaha?",
    questionEn: "Do you have an action plan for handling leakage, loss, or theft of important business assets?",
    risk: "Delayed response can increase business impact, recovery time, and financial loss.",
    protections: [
      "Write a simple response plan for leaked, lost, or stolen information.",
      "Assign who does what, when, and who must be contacted.",
      "Use past incident examples to rehearse realistic scenarios."
    ],
    riskId: "Respons yang terlambat dapat meningkatkan dampak bisnis, waktu pemulihan, dan kerugian finansial.",
    protectionsId: [
      "Tulis rencana respons sederhana untuk informasi yang bocor, hilang, atau dicuri.",
      "Tentukan siapa melakukan apa, kapan, dan siapa yang harus dihubungi.",
      "Gunakan contoh insiden sebelumnya untuk melatih skenario realistis."
    ]
  },
  {
    id: 24,
    domain: "recover",
    title: "Back up important information",
    titleId: "Cadangkan informasi penting",
    question: "Apakah Anda melakukan pencadangan rutin guna mencegah agar informasi penting tidak hilang karena kegagalan fungsi atau kesalahan operasi?",
    questionEn: "Do you perform regular backups to prevent important information from being lost due to malfunction or operational error?",
    risk: "Data may not be recoverable after hardware failure, user error, malware, or corruption.",
    protections: [
      "Identify business-critical data that needs backup.",
      "Store backups separately and avoid always-online backup copies.",
      "Run backups routinely and test restoration."
    ],
    riskId: "Data mungkin tidak dapat dipulihkan setelah kerusakan perangkat, kesalahan pengguna, malware, atau korupsi data.",
    protectionsId: [
      "Identifikasi data kritikal bisnis yang perlu dicadangkan.",
      "Simpan cadangan secara terpisah dan hindari salinan backup yang selalu online.",
      "Jalankan pencadangan rutin dan uji pemulihan data."
    ]
  },
  {
    id: 25,
    domain: "respond",
    title: "Share current cyber threat information",
    titleId: "Bagikan informasi ancaman siber terkini",
    question: "Apakah Anda mempelajari dan membagikan informasi tentang ancaman dan metode serangan siber terbaru kepada internal usaha?",
    questionEn: "Do you learn and share information internally about the latest cyber threats and attack methods?",
    risk: "Outdated awareness can leave staff unprepared for new attacks and recovery methods.",
    protections: [
      "Follow trusted cyber security websites, alerts, and banking service warnings.",
      "Share relevant threat updates internally.",
      "Turn new threat information into preventive actions and response lessons."
    ],
    riskId: "Kesadaran yang kedaluwarsa dapat membuat staf tidak siap menghadapi serangan dan metode pemulihan baru.",
    protectionsId: [
      "Ikuti situs keamanan siber tepercaya, peringatan, dan notifikasi layanan perbankan.",
      "Bagikan pembaruan ancaman yang relevan secara internal.",
      "Ubah informasi ancaman baru menjadi tindakan pencegahan dan pelajaran respons."
    ]
  }
];

let state = loadState();

function normalizeLanguage(language) {
  return language === "en" ? "en" : "id";
}

function isEnglish() {
  return state.language === "en";
}

function t(key) {
  return uiText[state.language]?.[key] || uiText.id[key] || key;
}

function localizedTitle(control) {
  return isEnglish() ? control.title : control.titleId;
}

function localizedQuestion(control) {
  return isEnglish() ? control.questionEn : control.question;
}

function localizedDomainLabel(domainKey) {
  const meta = domainMeta[domainKey];
  return isEnglish() ? meta.labelEn : meta.label;
}

function localizedControlLabel(domainKey) {
  const meta = domainMeta[domainKey];
  return isEnglish() ? meta.controlLabelEn : meta.controlLabel;
}

function localizedRisk(control) {
  return isEnglish() ? control.risk : (control.riskId || control.risk);
}

function localizedProtections(control) {
  return isEnglish() ? control.protections : (control.protectionsId || control.protections);
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      profile: saved?.profile || {},
      answers: saved?.answers || {},
      notes: saved?.notes || {},
      filter: saved?.filter || "all",
      language: normalizeLanguage(saved?.language)
    };
  } catch {
    return { profile: {}, answers: {}, notes: {}, filter: "all", language: "id" };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  const saveStateEl = document.querySelector("#saveState");
  saveStateEl.textContent = t("saved");
  saveStateEl.classList.remove("pending");
}

function answerScore(code) {
  return answerOptions.find((option) => option.code === code)?.score || 0;
}

function scoreLabel(score) {
  if (score === 100) {
    return {
      nameId: "Sempurna",
      nameEn: "Perfect",
      className: "sempurna",
      textId: "Langkah keamanan telah diterapkan menyeluruh. Rencanakan tingkat kematangan berikutnya.",
      textEn: "Security steps are fully applied. Plan the next maturity level."
    };
  }
  if (score >= 90) {
    return {
      nameId: "Baik",
      nameEn: "Good",
      className: "baik",
      textId: "Hampir lengkap, dengan beberapa kontrol yang perlu diterapkan lebih mendalam.",
      textEn: "Almost complete, with a few controls needing deeper implementation."
    };
  }
  if (score >= 70) {
    return {
      nameId: "Cukup",
      nameEn: "Fair",
      className: "cukup",
      textId: "Fondasi sudah cukup baik. Terapkan langkah proteksi yang masih terbuka.",
      textEn: "A reasonable foundation exists. Apply the open protection steps."
    };
  }
  if (score >= 50) {
    return {
      nameId: "Kurang",
      nameEn: "Poor",
      className: "kurang",
      textId: "Beberapa langkah keamanan penting masih belum ada atau baru diterapkan sebagian.",
      textEn: "Several important security steps are missing or partial."
    };
  }
  return {
    nameId: "Buruk",
    nameEn: "Bad",
    className: "buruk",
    textId: "Gap penting masih ada. Prioritaskan kontrol dasar sebelum insiden terjadi.",
    textEn: "Important gaps remain. Prioritize basic controls before an incident occurs."
  };
}

function calculateMetrics() {
  const score = controls.reduce((total, control) => total + answerScore(state.answers[control.id]), 0);
  const answered = controls.filter((control) => Boolean(state.answers[control.id])).length;
  const full = controls.filter((control) => state.answers[control.id] === "DM").length;
  const gaps = controls.length - full;
  const byDomain = Object.entries(domainMeta)
    .map(([key, meta]) => {
      const domainControls = controls.filter((control) => control.domain === key);
      const domainScore = domainControls.reduce((total, control) => total + answerScore(state.answers[control.id]), 0);
      const max = domainControls.length * 4;
      return {
        key,
        label: meta.label,
        labelEn: meta.labelEn,
        order: meta.order,
        score: domainScore,
        max,
        percent: max ? Math.round((domainScore / max) * 100) : 0
      };
    })
    .sort((a, b) => a.order - b.order);

  return { score, answered, full, gaps, byDomain };
}

function makeEl(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function renderQuestions() {
  const list = document.querySelector("#questions");
  list.innerHTML = "";

  controls.forEach((control) => {
    const card = makeEl("article", "question-card");
    card.id = `control-${control.id}`;
    card.dataset.controlId = String(control.id);
    card.dataset.domain = control.domain;

    const main = makeEl("div", "question-main");
    const titleWrap = makeEl("div", "question-title");
    titleWrap.append(makeEl("span", "question-number", String(control.id).padStart(2, "0")));

    const copy = makeEl("div");
    copy.append(makeEl("p", "domain-label", localizedControlLabel(control.domain)));
    copy.append(makeEl("h3", "", localizedTitle(control)));
    copy.append(makeEl("p", "muted question-text", localizedQuestion(control)));
    titleWrap.append(copy);

    const answerBox = makeEl("div", "answer-box");
    const statusLine = makeEl("div", "status-line");
    statusLine.append(makeEl("span", "muted", t("assessmentStatus")));
    statusLine.append(makeEl("span", "status-pill", t("unanswered")));

    const fieldset = makeEl("fieldset", "choice-grid");
    fieldset.append(makeEl("legend", "", t("selectOne")));
    answerOptions.forEach((option) => {
      const label = makeEl("label", "choice");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `answer-${control.id}`;
      input.value = option.code;
      input.dataset.answer = String(control.id);
      input.checked = state.answers[control.id] === option.code;
      label.append(input);
      label.append(makeEl("strong", "", option.code));
      label.append(makeEl("span", "", `${isEnglish() ? option.shortEn : option.shortId} (${option.score})`));
      fieldset.append(label);
    });

    answerBox.append(statusLine, fieldset);
    main.append(titleWrap, answerBox);

    const detailsWrap = makeEl("div", "question-details");
    const details = document.createElement("details");
    const summary = makeEl("summary", "", t("riskGuidance"));
    const guidance = makeEl("div", "guidance");

    const risk = makeEl("div");
    risk.append(makeEl("h4", "", t("risk")));
    risk.append(makeEl("p", "", localizedRisk(control)));

    const protections = makeEl("div");
    protections.append(makeEl("h4", "", t("protectionSteps")));
    const ul = makeEl("ul");
    localizedProtections(control).forEach((item) => ul.append(makeEl("li", "", item)));
    protections.append(ul);
    guidance.append(risk, protections);
    details.append(summary, guidance);

    const noteLabel = makeEl("label", "notes-label");
    noteLabel.textContent = t("assessorNotes");
    const note = document.createElement("textarea");
    note.dataset.note = String(control.id);
    note.value = state.notes[control.id] || "";
    note.placeholder = t("notePlaceholder");
    noteLabel.append(note);
    detailsWrap.append(details, noteLabel);

    card.append(main, detailsWrap);
    list.append(card);
  });

  updateQuestionCards();
  applyFilter();
}

function updateQuestionCards() {
  controls.forEach((control) => {
    const card = document.querySelector(`[data-control-id="${control.id}"]`);
    if (!card) return;

    const code = state.answers[control.id] || "";
    const option = answerOptions.find((item) => item.code === code);
    const pill = card.querySelector(".status-pill");
    pill.className = `status-pill ${code.toLowerCase()}`;
    pill.textContent = option ? `${option.code} · ${isEnglish() ? option.labelEn : option.label}` : t("unanswered");
    card.dataset.status = code || "unanswered";
  });
}

function renderScore() {
  const metrics = calculateMetrics();
  const label = scoreLabel(metrics.score);
  const scoreValue = document.querySelector("#scoreValue");
  const scoreBar = document.querySelector("#scoreBar");
  const ratingBadge = document.querySelector("#ratingBadge");

  scoreValue.textContent = String(metrics.score);
  scoreBar.style.width = `${metrics.score}%`;
  ratingBadge.textContent = isEnglish() ? label.nameEn : label.nameId;
  ratingBadge.className = `rating-badge ${label.className}`;
  document.querySelector("#ratingSummary").textContent = metrics.answered ? (isEnglish() ? label.textEn : label.textId) : t("scoreIntro");
  document.querySelector("#answeredCount").textContent = `${metrics.answered}/${controls.length}`;
  document.querySelector("#fullCount").textContent = String(metrics.full);
  document.querySelector("#gapCount").textContent = String(metrics.gaps);
}

function renderDomains() {
  const nav = document.querySelector("#domainNav");
  const metrics = calculateMetrics();
  nav.innerHTML = "";

  metrics.byDomain.forEach((domain) => {
    const firstControl = controls.find((control) => control.domain === domain.key);
    const link = makeEl("a", "domain-item");
    link.href = `#control-${firstControl.id}`;

    const strong = makeEl("strong");
    strong.append(makeEl("span", "", localizedDomainLabel(domain.key)));
    strong.append(makeEl("span", "", `${domain.score}/${domain.max}`));

    const meter = makeEl("div", "domain-meter");
    const fill = makeEl("span");
    fill.style.width = `${domain.percent}%`;
    meter.append(fill);

    link.append(strong, meter);
    nav.append(link);
  });
}

function getPriority(control, code) {
  const critical = new Set([1, 2, 3, 4, 5, 12, 18, 20, 21, 23, 24]);
  if (code === "TD" || code === "TT") return critical.has(control.id) ? "high" : "medium";
  if (code === "DS") return critical.has(control.id) ? "medium" : "low";
  return "low";
}

function buildActionPlan() {
  return controls
    .filter((control) => state.answers[control.id] !== "DM")
    .map((control) => {
      const code = state.answers[control.id] || "UN";
      const priority = getPriority(control, code);
      return {
        control,
        code,
      priority,
      step: localizedProtections(control)[0]
      };
    })
    .sort((a, b) => {
      const rank = { high: 0, medium: 1, low: 2 };
      const codeRank = { TT: 0, TD: 1, UN: 2, DS: 3 };
      return rank[a.priority] - rank[b.priority] || codeRank[a.code] - codeRank[b.code] || a.control.id - b.control.id;
    });
}

function renderActionPlan() {
  const plan = buildActionPlan();
  const container = document.querySelector("#actionPlan");
  container.innerHTML = "";

  if (plan.length === 0) {
    container.append(makeEl("p", "action-empty", t("allControlsComplete")));
    return;
  }

  plan.slice(0, 10).forEach((item) => {
    const article = makeEl("article", "action-item");
    const copy = makeEl("div");
    copy.append(makeEl("h3", "", `${String(item.control.id).padStart(2, "0")} · ${localizedTitle(item.control)}`));
    copy.append(makeEl("p", "", item.step));

    const meta = makeEl("div", "action-meta");
    meta.append(makeEl("span", "mini-tag", localizedDomainLabel(item.control.domain)));
    meta.append(makeEl("span", "mini-tag", item.code === "UN" ? t("unanswered") : item.code));
    copy.append(meta);

    const priority = makeEl("span", `priority-pill ${item.priority}`, `${item.priority} ${t("priority")}`);
    article.append(copy, priority);
    container.append(article);
  });

  if (plan.length > 10) {
    container.append(makeEl("p", "muted", `${plan.length - 10} ${t("moreGaps")}`));
  }
}

function applyFilter() {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === state.filter);
  });

  document.querySelectorAll(".question-card").forEach((card) => {
    const status = card.dataset.status;
    const show =
      state.filter === "all" ||
      (state.filter === "gaps" && status !== "DM") ||
      (state.filter === "unanswered" && status === "unanswered") ||
      (state.filter === "priority" && (status === "TD" || status === "TT" || status === "unanswered"));
    card.classList.toggle("hidden", !show);
  });
}

function hydrateProfile() {
  document.querySelectorAll("[data-profile]").forEach((input) => {
    input.value = state.profile[input.name] || "";
  });

  document.querySelectorAll("[data-profile-list]").forEach((input) => {
    const values = state.profile[input.dataset.profileList] || [];
    input.checked = values.includes(input.value);
  });
}

function updateProfileFromInput(input) {
  if (input.dataset.profileList) {
    const key = input.dataset.profileList;
    state.profile[key] = Array.from(document.querySelectorAll(`[data-profile-list="${key}"]:checked`)).map((item) => item.value);
    return;
  }

  state.profile[input.name] = input.value;
}

function updateLanguageToggle() {
  document.documentElement.lang = state.language;
  document.title = t("pageTitle");
  document.querySelectorAll("[data-language]").forEach((button) => {
    const isActive = button.dataset.language === state.language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function updateStaticText() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.setAttribute("title", t(element.dataset.i18nTitle));
  });
}

function updateAll() {
  updateLanguageToggle();
  updateStaticText();
  renderScore();
  renderDomains();
  renderActionPlan();
  updateQuestionCards();
  applyFilter();
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function createReportObject() {
  const metrics = calculateMetrics();
  const rating = scoreLabel(metrics.score);
  return {
    generatedAt: new Date().toISOString(),
    guide: "BSSN PAMAN KAMI untuk UKM, Versi 2.0",
    displayLanguage: state.language,
    profile: state.profile,
    score: metrics.score,
    rating: isEnglish() ? rating.nameEn : rating.nameId,
    ratingIndonesian: rating.nameId,
    ratingEnglish: rating.nameEn,
    domains: metrics.byDomain,
    answers: controls.map((control) => ({
      id: control.id,
      domain: domainMeta[control.domain].label,
      domainEnglish: domainMeta[control.domain].labelEn,
      controlAspect: domainMeta[control.domain].controlLabel,
      controlAspectEnglish: domainMeta[control.domain].controlLabelEn,
      title: control.title,
      titleIndonesian: control.titleId,
      question: control.question,
      questionEnglish: control.questionEn,
      risk: control.risk,
      riskIndonesian: control.riskId,
      answer: state.answers[control.id] || "",
      score: answerScore(state.answers[control.id]),
      note: state.notes[control.id] || "",
      recommendedSteps: control.protections,
      recommendedStepsIndonesian: control.protectionsId
    })),
    actionPlan: buildActionPlan().map((item) => ({
      id: item.control.id,
      title: localizedTitle(item.control),
      priority: item.priority,
      answer: item.code,
      nextStep: item.step
    }))
  };
}

function csvCell(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

function downloadCsv() {
  const rows = [
    ["No", "Domain (ID)", "Domain (EN)", "Control Aspect (ID)", "Control Aspect (EN)", "Control Title (ID)", "Control Title (EN)", "Question (ID)", "Question (EN)", "Answer", "Score", "Note"],
    ...controls.map((control) => [
      control.id,
      domainMeta[control.domain].label,
      domainMeta[control.domain].labelEn,
      domainMeta[control.domain].controlLabel,
      domainMeta[control.domain].controlLabelEn,
      control.titleId,
      control.title,
      control.question,
      control.questionEn,
      state.answers[control.id] || "",
      answerScore(state.answers[control.id]),
      state.notes[control.id] || ""
    ])
  ];
  downloadFile("paman-kami-assessment.csv", rows.map((row) => row.map(csvCell).join(",")).join("\n"), "text/csv;charset=utf-8");
}

function copyPlanSummary() {
  const report = createReportObject();
  const topItems = report.actionPlan
    .slice(0, 8)
    .map((item) => `- ${String(item.id).padStart(2, "0")} ${item.title}: ${item.nextStep}`)
    .join("\n");
  const summary = [
    `PAMAN KAMI SME Cyber Security Assessment`,
    `Score: ${report.score}/100 (${report.rating})`,
    `${t("business")}: ${report.profile.businessName || "-"}`,
    "",
    t("priorityActions"),
    topItems || `- ${t("noOpenActions")}`
  ].join("\n");

  navigator.clipboard?.writeText(summary).then(() => {
    const button = document.querySelector("#copyPlan");
    const original = button.textContent;
    button.textContent = t("copied");
    setTimeout(() => {
      button.textContent = original;
    }, 1400);
  });
}

function bindEvents() {
  document.addEventListener("change", (event) => {
    const target = event.target;
    if (target.matches("[data-answer]")) {
      state.answers[target.dataset.answer] = target.value;
      saveState();
      updateAll();
    }
    if (target.matches("[data-profile], [data-profile-list]")) {
      updateProfileFromInput(target);
      saveState();
    }
  });

  document.addEventListener("input", (event) => {
    const target = event.target;
    if (target.matches("[data-profile]")) {
      updateProfileFromInput(target);
      saveState();
    }
    if (target.matches("[data-note]")) {
      state.notes[target.dataset.note] = target.value;
      saveState();
      renderActionPlan();
    }
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      saveState();
      applyFilter();
    });
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = normalizeLanguage(button.dataset.language);
      if (nextLanguage === state.language) return;
      state.language = nextLanguage;
      saveState();
      renderQuestions();
      updateAll();
    });
  });

  document.querySelector("#printReport").addEventListener("click", () => window.print());
  document.querySelector("#downloadJson").addEventListener("click", () => {
    downloadFile("paman-kami-assessment.json", JSON.stringify(createReportObject(), null, 2), "application/json;charset=utf-8");
  });
  document.querySelector("#downloadCsv").addEventListener("click", downloadCsv);
  document.querySelector("#copyPlan").addEventListener("click", copyPlanSummary);
  document.querySelector("#resetAssessment").addEventListener("click", () => {
    const shouldReset = window.confirm(t("resetConfirm"));
    if (!shouldReset) return;
    const language = state.language;
    localStorage.removeItem(STORAGE_KEY);
    state = { profile: {}, answers: {}, notes: {}, filter: "all", language };
    hydrateProfile();
    renderQuestions();
    updateAll();
  });
}

hydrateProfile();
updateLanguageToggle();
renderQuestions();
updateAll();
bindEvents();
