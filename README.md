# ✿ Nandita Beauty Studio — Luxury Beauty & Salon

> **"Beauty Beyond Imagination — Where beauty feels personal."**

A responsive, high-end, glassmorphism-styled web application built for a boutique luxury beauty and hair salon. Features modern UI aesthetics, smooth inertia scrolling, interactive animations, an interactive before & after transformation slider, a personalized occasion consultation helper, and an integrated Express.js backend.

---

## 📑 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Architecture](#project-architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Setup](#installation--setup)
  - [Running the Frontend](#running-the-frontend)
  - [Running the Backend Server](#running-the-backend-server)
- [Backend REST API](#backend-rest-api)
- [Customizing Studio Data](#customizing-studio-data)
- [Design & Accessibility](#design--accessibility)
- [Production Build & Deployment](#production-build--deployment)
- [License](#license)

---

## 🌟 Overview

**Nandita Beauty Studio** is crafted to provide a warm, premium digital experience for salon clients. Designed with soft layered glassmorphism, floating aurora gradient orbs, and luxury editorial typography, the site allows visitors to explore salon treatments, browse portfolio looks, compare transformation results, consult on styles for special occasions, and book appointments online.

---

## ✨ Key Features

### User Experience & Aesthetics
- **Layered Glassmorphism Design**: Frosted glass containers, ambient glow effects, floating aurora backdrop orbs, and polished borders.
- **Dark & Light Mode Support**: Seamless theme toggle located in the navigation bar with instant switching and persistence in `localStorage`.
- **Smooth Inertia Scrolling**: Powered by **Lenis** for silky-smooth wheel and touch scrolling.
- **Scroll & Entrance Animations**: Powered by **GSAP** and **ScrollTrigger**, featuring staggered reveals, counter increments, and 3D parallax hero image movement.
- **Accessibility & Motion Preferences**: Fully honours `prefers-reduced-motion` system settings by suppressing heavy transforms and instant-rendering elements.

### Salon & Booking Capabilities
- **Curated Service Catalog**: Categorized services (Bridal, Hair, Skin, Nails, Spa, Brows) with transparent pricing (₹ INR), service durations, tags, and one-click **"Book this service"** prefill navigation.
- **Interactive Occasion Consultation**: Quick self-guided helper ("What are you getting ready for? — Wedding, Party, Date Night, Casual, Refresh") delivering tailored service recommendations.
- **Interactive Before & After Slider**: Draggable, touch-friendly, and keyboard-accessible split-screen transformation comparison slider.
- **Filterable Gallery with Lightbox**: Categorized photography showcase with lazy loading and full-screen image lightbox inspection.
- **Interactive Booking Form**: Validated appointment form capturing customer contact info, preferred service, date, time, and special notes.
- **Client Testimonials Carousel**: Verified customer reviews with 5-star ratings and navigation controls.
- **Team & Specialist Showcase**: Profiles of senior stylists, skin therapists, and nail artists highlighting their specialty and experience.
- **Direct WhatsApp Chat (FAB)**: Floating quick-action button with tooltip connecting directly to WhatsApp messaging (`wa.me`).
- **Studio Details & Hours**: Operating hours, studio location (Rose Avenue, Kolkata), phone, email, and interactive inquiry options.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 5](https://vitejs.dev/)
- **Styling**: Vanilla CSS3 with CSS Custom Properties (Theme tokens, glassmorphism, responsive grid & flexbox)
- **Animation & Motion**: [GSAP 3](https://greensock.com/gsap/) & [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Carousels**: [Swiper 11](https://swiperjs.com/)
- **Typography**: Fraunces (Headings) & Inter (Body UI) via Google Fonts

### Backend
- **Runtime**: [Node.js](https://nodejs.org/) (ES Modules)
- **Framework**: [Express.js](https://expressjs.com/)
- **Middleware**: `cors`, `express.json`
- **Data Store**: Lightweight JSON-based flat files (`server/data/bookings.json`, `server/data/newsletter.json`)

---

## 📂 Project Architecture

```plaintext
Beauty & Salon Shop/
├── README.md                            # Single project & repository documentation
└── nandita-beauty-studio/               # Main application directory
    ├── index.html                       # HTML entry point with meta tags & fonts
    ├── package.json                     # Frontend dependencies & npm scripts
    ├── vite.config.js                   # Vite configuration with React plugin
    ├── public/                          # Static assets & favicon
    │   └── favicon.svg
    ├── server/                          # Express backend API
    │   ├── index.js                     # Server entry point & API routes (Port 4000)
    │   ├── package.json                 # Backend dependencies
    │   └── data/                        # JSON data stores
    │       ├── bookings.json            # Stored appointment bookings
    │       └── newsletter.json          # Stored newsletter subscriptions
    └── src/
        ├── main.jsx                     # React root mounting ThemeProvider & App
        ├── App.jsx                      # Main page layout & component assembly
        ├── index.css                    # Global design system, theme variables & styles
        ├── context/
        │   └── ThemeContext.jsx         # Light/Dark mode context & localStorage sync
        ├── hooks/
        │   ├── useMousePosition.js      # Interactive cursor parallax hook (GSAP ticker)
        │   └── useScrollAnimation.js    # ScrollTrigger reveal animations hook
        ├── utils/
        │   └── animations.js            # Magnetic button utility & currency formatter
        ├── data/
        │   ├── services.js              # Services list, prices, durations & consultation map
        │   ├── gallery.js               # Gallery portfolio & before/after dataset
        │   ├── team.js                  # Team member bios, roles & experience
        │   └── testimonials.js          # Client reviews & star ratings
        └── components/
            ├── Preloader.jsx            # Page loading progress animation
            ├── Navbar.jsx               # Glassmorphic header, nav links & theme toggle
            ├── Hero.jsx                 # Hero banner with floating badge cards & CTA
            ├── About.jsx                # About section & animated counter statistics
            ├── SalonStory.jsx           # Studio story, philosophy & values
            ├── Services.jsx             # Service cards grid with direct booking trigger
            ├── Consultation.jsx         # Occasion-based recommendation widget
            ├── Gallery.jsx              # Filterable image grid with modal lightbox
            ├── BeforeAfter.jsx          # Interactive split comparison slider
            ├── Team.jsx                 # Stylist profile cards
            ├── Testimonials.jsx         # Client reviews carousel
            ├── LittleThings.jsx         # Studio hospitality & amenities highlights
            ├── Pricing.jsx              # Package pricing tiers (Essential, Signature, Bridal)
            ├── Booking.jsx              # Appointment booking form with validation
            ├── Contact.jsx              # Studio address, contact details & opening hours
            ├── Footer.jsx               # Newsletter signup, quick links & socials
            ├── ScrollProgress.jsx       # Top-edge reading/scroll progress indicator
            ├── BackToTop.jsx            # Smooth scroll-to-top floating button
            └── WhatsAppButton.jsx       # Floating WhatsApp button with hover tooltip
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/Beauty-Salon-Shop.git
   cd "Beauty & Salon Shop"
   ```

2. **Install frontend dependencies:**
   ```bash
   cd nandita-beauty-studio
   npm install
   ```

3. **Install backend dependencies:**
   ```bash
   cd server
   npm install
   cd ..
   ```

---

### Running the Frontend

Start the Vite development server:

```bash
# Inside nandita-beauty-studio/
npm run dev
```

The application will typically be available at `http://localhost:5173`. Open this URL in your browser to view the application with hot module replacement (HMR).

---

### Running the Backend Server

To start the appointment and newsletter backend API:

```bash
# Inside nandita-beauty-studio/server/
npm run dev
```

The server will start at `http://localhost:4000` with automatic reloading enabled via `node --watch`.

---

## 📡 Backend REST API

The Express backend runs on `http://localhost:4000` and exposes the following endpoints:

| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/bookings` | Submit a new appointment request | `{ "name": string, "email": string, "phone": string, "service": string, "date": string, "time": string, "message"?: string }` |
| `GET` | `/api/bookings` | Retrieve all submitted appointments (Admin view) | _None_ |
| `POST` | `/api/newsletter`| Subscribe an email to the studio newsletter | `{ "email": string }` |
| `GET` | `/api/newsletter`| Retrieve all registered newsletter emails | _None_ |

Data is persistently stored in `nandita-beauty-studio/server/data/bookings.json` and `nandita-beauty-studio/server/data/newsletter.json`.

---

## 🎨 Customizing Studio Data

The codebase is structured to make customization straightforward. All studio content can be edited in dedicated data files inside `nandita-beauty-studio/`:

| Content Area | File Location | Description |
| :--- | :--- | :--- |
| **Services & Pricing** | `src/data/services.js` | Service names, categories, descriptions, durations, badges, and ₹ pricing |
| **Occasion Consultation**| `src/data/services.js` (`consultationMap`) | Mapping between occasions (e.g. Wedding, Party) and recommended service IDs |
| **Team Profiles** | `src/data/team.js` | Team member names, roles, experience, bios, and portrait images |
| **Client Testimonials** | `src/data/testimonials.js` | Client reviews, star ratings, service names, and verified status |
| **Gallery & Transformations** | `src/data/gallery.js` | Gallery images, categories, and Before/After comparison image pairs |
| **Pricing Packages** | `src/components/Pricing.jsx` (`PLANS`) | Tiered packages (Essential, Signature, Bridal) and feature lists |
| **Studio Contact & Hours** | `src/components/Contact.jsx` (`CONTACT`) | Address, phone numbers, contact email, and operating hours |
| **WhatsApp Number** | `src/components/WhatsAppButton.jsx` (`WHATSAPP_NUMBER`) | Target phone number for WhatsApp direct chat |
| **Social Media Links** | `src/components/Footer.jsx` | Instagram, Facebook, and social profile links |

---

## ♿ Design & Accessibility

- **Theme System**: Custom CSS variables defined in `src/index.css` handle theme transitions smoothly between `:root` (light) and `[data-theme="dark"]`.
- **Keyboard Navigation**: Form inputs, buttons, before/after slider handles, and lightbox controls support standard keyboard navigation (`Tab`, `Space`, `Enter`, `ArrowLeft`, `ArrowRight`, `Escape`).
- **Reduced Motion Support**: Animations automatically adapt when the user's operating system has enabled "Reduce motion".
- **Responsive Design**: Fluid fluid scaling using CSS `clamp()`, flexible grids, and mobile-optimized drawer navigation.

---

## 📦 Production Build & Deployment

### Build Frontend
Compile the production-ready assets into the `dist/` directory:

```bash
cd nandita-beauty-studio
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Deployment Options
- **Frontend**: Deploy the `dist/` folder easily to platforms like [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), [Cloudflare Pages](https://pages.cloudflare.com/), or [GitHub Pages](https://pages.github.com/).
- **Backend**: Deploy the `server/` directory to [Render](https://render.com/), [Railway](https://railway.app/), [Fly.io](https://fly.io/), or any Node.js hosting platform.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
