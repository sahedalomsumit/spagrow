# 🌿 SpaGrow — More Spa Bookings Without Paying for Ads

[![CI/CD - Deploy to GitHub Pages](https://github.com/sahedalomsumit/spa-grow/actions/workflows/deploy.yml/badge.svg)](https://spagrow.site/)

SpaGrow is a conversion-focused landing page for **spa and wellness businesses worldwide**. Built with a "Sage & Stone" design system and scroll-triggered storytelling, it guides visitors from awareness to action — turning passive browsers into paying clients.

---

## ✨ Key Features

- 🎨 **Sage & Stone Design System**: A curated, earthy colour palette with glassmorphism, soft shadows, and modern serif-sans typography pairing (Lora + Raleway).
- 🎭 **Scroll-Triggered Storytelling**: Framer Motion powers smooth scroll reveals, micro-interactions, and attention-guiding animations.
- 📱 **Mobile-First UX**: Seamless browsing and booking across all devices — because most spa clients discover you on their phone.
- 📊 **Lead Generation Engine**: Integrated contact form connected to Google Sheets via SheetDB API for instant lead capture.
- 🖼️ **Portfolio Showcase**: Live project previews (Aura Bern, Jenni Wellbeing) with hover effects and direct links.
- 🚀 **Automated CI/CD**: GitHub Actions build and deploy to GitHub Pages on every push to `main`.

---

## 🛠️ Technology Stack

| Category         | Technology                                                 |
| :--------------- | :--------------------------------------------------------- |
| **Framework**    | [React 19](https://react.dev/)                             |
| **Bundler**      | [Vite 8](https://vitejs.dev/)                              |
| **Styling**      | Vanilla CSS (Sage & Stone Design System)                   |
| **Animations**   | [Framer Motion](https://www.framer.com/motion/)            |
| **Icons**        | [Lucide React](https://lucide.dev/)                        |
| **Deployment**   | [GitHub Pages](https://pages.github.com/)                  |
| **Lead Storage** | [SheetDB](https://sheetdb.io/) (Google Sheets Integration) |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sahedalomsumit/spa-grow.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory:

   ```env
   VITE_SHEETDB_URL=your_sheetdb_api_endpoint
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

### Building for Production

To generate a production-ready bundle in the `dist` folder:

```bash
npm run build
```

---

## 📂 Project Structure

```text
spa-grow/
├── .github/workflows/     # CI/CD deployment pipeline
├── src/
│   ├── assets/            # Images (hero, profile, project screenshots, blob SVG)
│   ├── App.css            # Component-specific style overrides
│   ├── App.jsx            # All sections: Hero, Problem, Solution, Process, Projects, About, CTA
│   ├── index.css          # Sage & Stone design system and global styles
│   └── main.jsx           # React mounting point
├── index.html             # SEO-optimised entry with meta tags
├── vite.config.js         # Vite configuration
└── package.json           # Scripts and dependencies
```

---

## 📈 Conversion Funnel

The page follows a deliberate conversion flow:

1. **Hero** — Clear value proposition: more bookings without ads.
2. **Portfolio** — Real project proof (Aura Bern, Jenni Wellbeing) builds credibility.
3. **Problem** — Identifies the four hidden reasons spa websites lose clients.
4. **Solution** — Shows what the redesign actually delivers (bookings, trust, mobile UX).
5. **Process** — Transparent 7-step workflow removes fear of commitment.
6. **Limited Offer** — 25% first-project discount creates urgency.
7. **Free 2-Minute Video Audit** — Zero-risk lead capture offering a quick video showing what makes it harder for visitors to book a treatment.
8. **About** — Personal story and direct contact info (email + WhatsApp).
9. **Final CTA** — Before/after comparison reinforces the transformation.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Built with ❤️ by <a href="https://sahedalomsumit.com">Sahed Alom Sumit</a>
</p>
