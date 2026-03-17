# 🪷 Seven-Line Prayer — Guru Rinpoche

A beautiful, offline-capable Progressive Web App (PWA) for the Seven-Line Prayer to Guru Rinpoche / Padmasambhava.

**[➡️ View Live Demo](https://YOUR-USERNAME.github.io/seven-line-prayer)**

---

## ✨ Features

- 🎵 **Native Tibetan Audio** — Your teacher's recording (3 complete recitations + Vajra Guru Mantra)
- 📖 **Word-by-Word** — Every word with English translation + pronunciation badge
- 🔊 **Phonetic Guide** — Line-by-line pronunciation with browser TTS speak buttons
- 🎬 **Watch & Listen** — 6 curated YouTube videos with modal player
- 🌗 **Offline Support** — Service Worker caches everything for offline use
- 📱 **iPhone Home Screen** — Full PWA: add to home screen for an app-like experience
- ✨ **Buddhist Design** — Dark purple, gold & crimson palette with animated particles

---

## 🚀 Deploy to GitHub Pages (Free, ~2 minutes)

### Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Name it: `seven-line-prayer`
4. Set to **Public**
5. Do NOT initialize with README
6. Click **Create repository**

### Step 2 — Upload the Files

**Option A — GitHub Web Interface (no git needed):**
1. Unzip `seven-line-prayer.zip`
2. On your new repo page, click **uploading an existing file**
3. Drag the entire unzipped folder contents into the upload area
4. Scroll down → click **Commit changes**

**Option B — Git command line:**
```bash
cd /path/to/seven-line-prayer
git init
git add .
git commit -m "Initial commit: Seven-Line Prayer app"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/seven-line-prayer.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. In your repo, go to **Settings** → **Pages** (left sidebar)
2. Under **Source**, choose **GitHub Actions**
3. The `.github/workflows/deploy.yml` file will automatically run
4. Wait ~60 seconds, then visit:
   `https://YOUR-USERNAME.github.io/seven-line-prayer`

> ⚠️ Replace `YOUR-USERNAME` with your actual GitHub username everywhere.

---

## 📱 Add to iPhone Home Screen

1. Open Safari on your iPhone
2. Go to: `https://YOUR-USERNAME.github.io/seven-line-prayer`
3. Tap the **Share** button (box with arrow pointing up)
4. Scroll down and tap **Add to Home Screen**
5. The name will pre-fill as **"7-Line Prayer"**
6. Tap **Add**

The dharma wheel icon will appear on your home screen. Tap it to open the app in full-screen mode (no browser chrome) — just like a native app!

---

## 🌐 Alternative: Netlify (30 seconds)

1. Go to [app.netlify.com](https://app.netlify.com)
2. Drag the unzipped folder onto the deploy zone
3. Your site goes live at a random `*.netlify.app` URL instantly
4. Optionally rename it under Site Settings

---

## 📁 File Structure

```
seven-line-prayer/
├── index.html              ← Main app (all tabs, audio player, prayer)
├── manifest.json           ← PWA manifest (icons, name, colors)
├── sw.js                   ← Service Worker (offline caching)
├── netlify.toml            ← Netlify deploy config
├── .nojekyll               ← Prevents Jekyll processing on GitHub Pages
├── .github/
│   └── workflows/
│       └── deploy.yml      ← Auto-deploy to GitHub Pages on push
├── audio/
│   ├── teacher-chanting.mp3  ← Primary audio (web-optimized)
│   └── teacher-chanting.wav  ← Original WAV
└── images/
    ├── apple-touch-icon.png  ← iPhone home screen icon (180×180)
    ├── icon-192.png          ← PWA icon (192×192)
    ├── icon-512.png          ← PWA icon (512×512)
    ├── icon-1024.png         ← High-res source icon
    ├── favicon-32.png        ← Browser tab icon
    ├── favicon-16.png        ← Small browser icon
    ├── favicon.ico           ← Classic favicon
    └── og-image-1200x630.png ← Social media preview image
```

---

## 🙏 About the Prayer

The Seven-Line Prayer (*Tün-min Güntang Dunma*) is one of the most important prayers in Tibetan Buddhism, composed as a supplication to Guru Rinpoche (Padmasambhava), the great master who brought Buddhism to Tibet in the 8th century.

The audio recording features a native Tibetan teacher chanting the prayer three complete times, followed by the Vajra Guru Mantra: **OM AH HUNG BENZAR GURU PEMA SIDDHI HUNG**.

---

*May all beings be happy. May all beings be free from suffering.* 🪷
