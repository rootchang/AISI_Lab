# AISI Lab — Laboratory of Artificial Intelligence & Systems Immunology

GitHub Pages website for the AISI Lab, PI: Dr. Tiangen Chang  
Shanghai Institute of Immunology (SII), SJTU School of Medicine

---

## 📁 Folder Structure

```
aisi-lab/
├── index.html              ← Home page
├── about.html              ← About the PI & Lab
├── research.html           ← Research directions
├── publications.html       ← Full publications list
├── team.html               ← Team members
├── hiring.html             ← Open positions
├── news.html               ← News & highlights
│
├── css/
│   └── style.css           ← Master stylesheet (dark + light mode)
│
├── js/
│   ├── components.js       ← Shared nav & footer (auto-injected into every page)
│   └── main.js             ← Additional page interactions
│
├── images/
│   ├── logos/
│   │   └── logo-mark.svg   ← Lab logo (redesigned network icon)
│   ├── photos/
│   │   └── Tiangen.jpeg    ← PI headshot
│   ├── illustrations/
│   │   ├── Direction1.jpg  ← Research direction 1 figure
│   │   ├── Direction2.jpg  ← Research direction 2 figure
│   │   └── Direction3.jpg  ← Research direction 3 figure
│   └── papers/             ← Paper figures / cover art (add as needed)
│
└── README.md               ← This file
```

---

## 🚀 Deploying on GitHub Pages

1. Push this folder as the **root** of your repository (or inside `docs/`).
2. Go to **Settings → Pages** in your GitHub repo.
3. Set source to the branch and folder containing `index.html`.
4. Your site will be live at `https://yourusername.github.io/reponame/`.

---

## 🔑 Key Architecture Decision: Shared Components

The nav bar and footer are **not duplicated** across HTML files. Instead, `js/components.js` dynamically injects them into every page at load time. This means:

- **One place to update** nav links, footer text, contact info, etc.
- No risk of inconsistency across pages.
- Active nav link is auto-detected from the current page URL.

If you want to update the nav or footer, edit **only** `js/components.js`.

---

## ✏️ What to Customize

| What | Where |
|------|-------|
| PI headshot | `images/photos/Tiangen.jpeg` (already set) |
| Research direction figures | Add `Direction1.jpg`, `Direction2.jpg`, `Direction3.jpg` to `images/illustrations/` |
| Lab email | Search `tiangen.chang@sjtu.edu.cn` in `js/components.js` and HTML files |
| Google Analytics | Add GA snippet before `</head>` in each HTML file |
| New team members | Edit `team.html`, add photo to `images/photos/` |
| New publications | Edit `publications.html`, add `.pub-card` to correct year group |
| New news items | Edit `news.html`, add `.news-card` |

---

## 🎨 Design Notes

- **Color palette:** Deep navy (`#080c12`), gold accent (`#c9a84c`), teal (`#5fb8b0`)
- **Fonts:** Cormorant Garamond (display headings), DM Sans (body), JetBrains Mono (labels/code)
- **Dark & light mode:** Full support via CSS custom properties + `data-theme` attribute. Preference saved to `localStorage`.
- **Responsive:** Mobile-first, hamburger nav at < 640px.
- **Animations:** Scroll-reveal (`.reveal` class), floating orbs on hero, smooth nav transitions.

---

## 📬 Contact

Dr. Tiangen Chang — tiangen.chang@sjtu.edu.cn  
Shanghai Institute of Immunology, Building 5, 280 Chongqing South Road, Huangpu District, Shanghai 200025
