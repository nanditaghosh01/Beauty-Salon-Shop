# Nandita Beauty Studio

A responsive, glassmorphism-styled React + Vite website for a boutique beauty salon.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

To build for production:

```bash
npm run build
npm run preview
```

## Editable demo data

Everything a real salon would need to customize lives in `src/data/`:

- `services.js` — service names, prices, durations, descriptions
- `team.js` — team member photos, roles, bios
- `testimonials.js` — client reviews
- `gallery.js` — gallery and before/after images

Contact details (`src/components/Contact.jsx`), the WhatsApp number
(`src/components/WhatsAppButton.jsx`), and footer social links
(`src/components/Footer.jsx`) are placeholders clearly marked in the code —
replace them with your studio's real information before publishing.

All images currently point to `picsum.photos` placeholders. Swap these for
real studio photography for production use.

## Notes

- Booking and newsletter forms are demo-only: they show a success state but
  don't send data anywhere. Wire them up to your booking system or an
  API endpoint before going live.
- Theme (light/dark) preference is saved to `localStorage`.
- Animations respect `prefers-reduced-motion`.
