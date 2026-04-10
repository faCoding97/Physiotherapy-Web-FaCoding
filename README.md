# Moss & Bay Physiotherapy - Premium Next.js Website

A premium, frontend-only physiotherapy website for Mossel Bay and Dana Bay, built with **Next.js 14 App Router**, **React**, **TypeScript**, and **Tailwind CSS**.

## Stack and pinned versions

The project intentionally pins versions to avoid common `ERESOLVE` issues:

- `next`: `14.2.10`
- `eslint`: `8.57.0`
- `eslint-config-next`: `14.2.10`
- React 18
- TypeScript 5
- Tailwind 3.4

> If you see a **"Next.js outdated"** warning, it is only a warning and can be ignored.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Exact route structure

```txt
/
├── /about
├── /services
├── /conditions-treated
├── /referrals
├── /locations
└── /contact
```

## File structure

```txt
app/
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
  manifest.json/route.ts
  globals.css
  about/page.tsx
  services/page.tsx
  conditions-treated/page.tsx
  referrals/page.tsx
  locations/page.tsx
  contact/page.tsx

components/
  layout/
    Header.client.tsx
    Footer.tsx
  sections/
    Hero.tsx
    Trust.tsx
    ServicesGrid.tsx
    ConditionsGrid.tsx
    WhyChooseUs.tsx
    ReferralSection.tsx
    LocationsSection.tsx
    Testimonials.tsx
    FAQ.tsx
    CTA.tsx
    PageHero.tsx
    ReferralActions.client.tsx
    ContactForm.client.tsx
  ui/
    Button.tsx
    Card.tsx
    Container.tsx
    Badge.tsx
    Input.tsx
    SectionTitle.tsx
  widgets/
    Accordion.tsx
    Carousel.client.tsx
    Reveal.client.tsx
    Toast.client.tsx
    Modal.client.tsx
    MapEmbed.client.tsx
    FloatingWhatsApp.client.tsx

data/
  site.json

lib/
  utils.ts

public/
  favicon.ico
  logo/logo.png
  og-image.png
  images/*
  icons/*
  referrals/referral-form.pdf
```

## Important `.client.tsx` rule

Any component that uses:

- `useState`
- `useEffect`
- DOM/browser APIs
- DOM event handlers

must live in its own file ending with **`.client.tsx`** and must start with:

```tsx
"use client";
```

This project follows that rule for the mobile menu, carousel, reveal animation, toast, modal, maps, WhatsApp button, referral action modal, and contact form.

## Edit all content in one place

All content is driven from:

```txt
data/site.json
```

Edit that file to update:

- theme tokens
- navigation
- homepage content
- services
- conditions treated
- referrals
- locations
- testimonials
- FAQs
- contact details
- page metadata

## Replace logo, images, and favicon

### Clinic brand mark
Replace:

```txt
public/images/brand-mark.svg
```

### Footer signature logo
Replace:

```txt
public/logo/logo.png
```

### Open Graph image
Replace:

```txt
public/og-image.png
```

### Favicon
Replace:

```txt
public/favicon.ico
```

### Other visuals
Replace or add assets inside:

```txt
public/images/
public/icons/
```

## Referral PDF

The referral button points to:

```txt
/public/referrals/referral-form.pdf
```

Update the file or change the path inside `data/site.json`:

```json
"pdfHref": "/referrals/referral-form.pdf"
```

## Location maps

Each location entry in `data/site.json` includes:

- `mapQuery`
- `mapEmbedSrc`
- `directionsUrl`

### How it works

- `mapEmbedSrc` powers the embedded map iframe
- `query` is used by the map widget for **Open in Maps**
- `query` is also used for **Directions from here**

Update the relevant fields inside the `locations` array in `data/site.json`.

## Contact form behavior

This is a **frontend-only** website. The contact form:

- validates on the client
- prepares a pre-filled `mailto:` enquiry
- opens the user’s default mail app

If you later want real submissions, connect the form to a service such as Formspree, Resend, or a custom API route.

## Lighthouse targets

The site is structured for strong Lighthouse outcomes with:

- semantic headings
- accessible buttons and forms
- responsive layout
- lightweight local assets
- metadata, robots, sitemap, and manifest support
- minimal script overhead
- good contrast and keyboard support

Target:

- Performance: high
- Accessibility: high
- Best Practices: high
- SEO: high

## Notes

- The design uses CSS variables on `body` for theme consistency.
- The site is mobile-first and fully responsive.
- Maps use a Google Maps embed URL and a browser-side directions helper.
- All interactive code is isolated to `.client.tsx` files.
