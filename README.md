# Gracelin Jeba — Personal Portfolio

A modern, animated MERN Stack Developer portfolio built with **React.js (Vite)**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- **Black & Purple aesthetic** — dark glassmorphism design with gradient accents
- **Framer Motion animations** — fade-in, slide-up, stagger, and hover effects
- **Animated code editor** — typewriter-style code in the Hero section
- **SVG illustrations** — custom developer-themed inline illustrations (no external image deps)
- **Skill bars** — animated proficiency indicators with tech icons
- **Project cards** — hover-reveal demo/GitHub buttons with custom SVG previews
- **Contact form** — animated submit with loading/success states
- **Fully responsive** — mobile, tablet, desktop
- **Smooth scroll navigation** — active section tracking in navbar

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       ← Sticky nav with scroll tracking
│   │   ├── Hero.jsx         ← Animated hero + code block + SVG illustration
│   │   ├── About.jsx        ← Bio, stats, highlights
│   │   ├── Skills.jsx       ← Tech icons + animated skill bars
│   │   ├── Projects.jsx     ← 3 project cards with SVG previews
│   │   ├── Contact.jsx      ← Contact form + info panel
│   │   └── Footer.jsx       ← Links, social icons, stack tags
│   ├── App.jsx              ← Root layout with background orbs
│   ├── index.css            ← Global styles, utilities, animations
│   └── main.jsx             ← Entry point
├── index.html               ← Google Fonts: Syne, DM Sans, JetBrains Mono
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** or **yarn**

### Step 1 — Install dependencies

```bash
cd portfolio
npm install
```

This installs:
- `react` + `react-dom`
- `framer-motion` (animations)
- `react-icons` (icon library)
- `tailwindcss`, `autoprefixer`, `postcss` (styling)
- `vite` + `@vitejs/plugin-react` (build tool)

### Step 2 — Start development server

```bash
npm run dev
```

Open your browser at **http://localhost:5173**

### Step 3 — Build for production

```bash
npm run build
```

Output goes to the `dist/` folder. Deploy to Vercel, Netlify, or any static host.

### Step 4 — Preview production build

```bash
npm run preview
```

---

## 🎨 Customization

### Update Personal Info

Edit the relevant component files:

| File | What to update |
|------|---------------|
| `Hero.jsx` | Name, role, tech tags, CTA buttons |
| `About.jsx` | Bio text, stats, internship details |
| `Skills.jsx` | Skills list, proficiency percentages |
| `Projects.jsx` | Project titles, descriptions, tags, links |
| `Contact.jsx` | Email, GitHub, LinkedIn, location |
| `Footer.jsx` | Social links, copyright |

### Change Theme Colors

Edit `src/index.css` CSS variables:

```css
:root {
  --bg-primary: #05050d;       /* Main background */
  --accent-purple: #a855f7;    /* Primary accent */
  --accent-violet: #8b5cf6;    /* Secondary accent */
}
```

Or update `tailwind.config.js` color palette.

---

## 📦 Dependencies

```json
{
  "framer-motion": "^11.0.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-icons": "^5.0.1"
}
```

### Dev Dependencies

```json
{
  "@vitejs/plugin-react": "^4.2.0",
  "tailwindcss": "^3.4.1",
  "autoprefixer": "^10.4.17",
  "postcss": "^8.4.35",
  "vite": "^5.1.0"
}
```

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the dist/ folder to Netlify
```

### GitHub Pages

```bash
npm install -D gh-pages
# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"
npm run deploy
```

---

## ✉️ EmailJS Setup (Contact Form)

The contact form uses [EmailJS](https://emailjs.com) to send emails directly from the browser — no backend needed.

### Step 1 — Create a free EmailJS account

Go to [https://dashboard.emailjs.com](https://dashboard.emailjs.com) and sign up (free tier allows 200 emails/month).

### Step 2 — Add an Email Service

1. In the dashboard, go to **Email Services → Add New Service**
2. Choose your provider (Gmail recommended)
3. Click **Connect Account** and authorize
4. Note down your **Service ID** (e.g. `service_abc123`)

### Step 3 — Create an Email Template

1. Go to **Email Templates → Create New Template**
2. Use these exact variable names in your template body:

```
From: {{from_name}} <{{from_email}}>
Subject: {{subject}}

{{message}}

Reply to: {{reply_to}}
```

3. Set **To Email** to `gracelin@example.com` (your real email)
4. Note down your **Template ID** (e.g. `template_xyz789`)

### Step 4 — Get your Public Key

1. Go to **Account → General**
2. Copy your **Public Key** (e.g. `AbCdEfGhIjKlMnOp`)

### Step 5 — Add credentials to `.env`

Edit the `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOp
```

### Step 6 — Restart the dev server

```bash
npm run dev
```

The contact form will now send real emails to your inbox! ✅

> **Security note:** The Public Key is safe to expose in the browser. Never put a private key or password in your `.env` for a frontend app. EmailJS is designed to work client-side.

---



- All SVG illustrations are **inline** (no external image dependencies)
- The contact form is **UI-only** — wire it to EmailJS or a backend to send real emails
- Fonts are loaded from **Google Fonts** (requires internet on first load; can be self-hosted)
- No environment variables needed

---

Built with 💜 by Gracelin Jeba
