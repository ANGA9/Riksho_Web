# AngaZip — Introductory Website Blueprint

A complete, build-ready plan for the AngaZip marketing/introductory site, structured the way inDrive's site is structured (hero → service grid → trust/safety → coverage → CTA → footer), but built entirely around AngaZip's own brand system, services, and visual identity.

---

## 1. Brand System (lock this in before building anything)

| Token | Value | Usage |
|---|---|---|
| Primary Indigo | `#4338CA` | Navbar, buttons, headlines highlights, icons, footer background |
| Indigo Deep (hover/pressed states) | `#3730A3` | Button hover, active nav state |
| Accent Cyan | `#00C2FF` | Small live/active accents only — tracking dots, links on hover, underline flourishes |
| Indigo Tint (section backgrounds) | `#EEF2FF` | Alternating section backgrounds instead of plain white, for rhythm |
| White | `#FFFFFF` | Primary background, primary button text |
| Near-black text | `#111117` | Body copy, headlines on white |
| Muted grey text | `#6B7280` | Subtext, captions |

**Rule of thumb:** White dominates every section. Indigo `#4338CA` is the "signature" color used the way inDrive uses lime — as solid-fill accent blocks behind illustrations, section backgrounds for 1-2 high-impact sections (like the Safety section), and all primary buttons. Cyan is a *seasoning*, not a base color — max 5% of any screen.

### Typography
- **Wordmark / Logo:** "AngaZip" set in **Space Grotesk Bold** (or **Sora ExtraBold** as a second choice) — both are free, modern, geometric sans fonts with the same confident-but-friendly rounded character as inDrive's logotype. Set in all one weight, one color (`#4338CA` on white nav, white on indigo sections), no icon needed — just the wordmark, like inDrive's does with "inDrive."
- **Headlines (H1/H2):** Space Grotesk Bold / ExtraBold
- **Body text:** Inter (Regular/Medium) — highly legible at small sizes, pairs cleanly with Space Grotesk
- Keep headline sizes big and confident: 48–64px desktop H1, 28–32px mobile H1 — inDrive leans on oversized type as a core part of its personality; do the same.

### Logo usage rule
Simple bold wordmark only — no icon mark needed for v1. This keeps you shippable fast, and you can always introduce an icon later once the brand is established (this is exactly how inDrive itself operates — logotype-first, minimal icon).

---

## 2. Site Map

```
/                       → Home (this doc covers this page in full)
/ride                   → Cab rides + bike taxi detail page
/city-to-city           → Intercity rides detail page
/fleet-business         → B2B fleet-on-demand + cargo/delivery detail page
/safety                 → Safety commitments
/about                  → Company, mission, careers
/support                → Help center
```

This blueprint details the **Home page** fully — the same section patterns repeat on the sub-pages.

---

## 3. Home Page — Section by Section

### 3.1 Navbar (sticky)
- Left: AngaZip wordmark (indigo on white background)
- Center/left nav links: `Ride` · `City to City` · `Fleet & Delivery` · `Safety` · `About`
- Right: `Get the App` button (solid indigo pill, white text) + hamburger `Menu` on mobile

**No image needed here.**

---

### 3.2 Hero Section
Full-bleed real photograph background (dark gradient overlay from bottom for text legibility), matching inDrive's hero pattern exactly but with your services.

**Copy:**
- Eyebrow (small pill, cyan-on-white or white-on-indigo): `Fair fares. Fast fleets.`
- H1 (white, bold, 2 lines): `One ride away.`  / `One delivery ahead.`
- Subtext (light grey/white 80% opacity): `Cabs, bike taxis, intercity rides, and business fleets — one app for everything that needs to move.`
- Primary CTA button: `Get the App` (indigo solid)
- Secondary tab row under the fold (like inDrive's Ride / Delivery / Challenge / Heroes tabs): `Ride` · `City to City` · `Bike Taxi` · `Fleet & Delivery`

**Image needed — Real photo (hero background):**
> Placement: Full-width hero background, 1900x950px minimum, dark gradient overlay applied in CSS (don't bake the gradient into the image itself)

```
Gemini prompt (photorealistic):
A candid, warm documentary-style photograph of an Indian delivery rider in his mid-20s, wearing a plain indigo-colored t-shirt, handing a cardboard parcel to a smiling young woman customer on a busy Indian city street at golden hour. Natural lighting, shallow depth of field with a softly blurred street market background, authentic and unposed feeling, shot on a 35mm lens look, candid street photography style, no visible text or logos on clothing or packaging.
```

---

### 3.3 "One App, Many Services" — Service Grid
This is your version of inDrive's "One app, many services" card grid — the single most important section on the page, since it explains your entire multi-vertical model at a glance.

**Section headline:** `One app, every way to move`
**Subhead:** `Whether it's you, your parcel, or your entire delivery fleet — AngaZip gets it there.`

Four cards, 2x2 grid on desktop, stacked on mobile. Each card = white background, rounded corners, soft shadow, a **flat cartoon illustration sitting on a solid indigo or cyan blob shape** (exactly like inDrive's "City rides" / "Delivery" cards), headline, one-line description, and text links.

| Card | Headline | Description | Links |
|---|---|---|---|
| 1 | **Cab Rides** | Comfortable, fairly-priced rides across the city, anytime. | For Riders › / For Drivers › |
| 2 | **Bike Taxi** | Quick point-to-point hops through traffic, at a fraction of the cost. | For Riders › / For Drivers › |
| 3 | **City to City** | Comfortable outstation and intercity travel, door to door. | For Riders › / For Drivers › |
| 4 | **Fleet & Delivery** | On-demand vehicles and cargo capacity for businesses of any size. | For Business › / For Partners › |

**Images needed — 4 flat cartoon illustrations**, one per card. Match inDrive's illustration language: bold black outlines, minimal flat color fill, characters mid-action, sitting on an irregular solid-color blob shape behind them.

> Placement: each illustration sits inside its respective card, roughly 320x280px, positioned left of the text content on desktop, stacked above text on mobile.

```
Gemini prompt — Card 1 (Cab Rides):
Flat vector cartoon illustration in a bold, minimal editorial style: a smiling Indian man driving a small hatchback cab, seen through the car window, one arm relaxed on the door. Thick black outlines, flat solid color fill, no gradients, no shading, playful proportions, simple background. The character and car are drawn in black outline with white fill, sitting on top of an irregular abstract blob shape in solid color #4338CA behind them. No text.

Gemini prompt — Card 2 (Bike Taxi):
Flat vector cartoon illustration in a bold, minimal editorial style: an Indian rider on a two-wheeler scooter wearing a helmet, leaning forward mid-ride with a sense of motion, a passenger seated behind holding on. Thick black outlines, flat solid color fill, no gradients, no shading, playful proportions. The characters and bike are drawn in black outline with white fill, sitting on top of an irregular abstract blob shape in solid color #00C2FF behind them. No text.

Gemini prompt — Card 3 (City to City):
Flat vector cartoon illustration in a bold, minimal editorial style: two people loading a small suitcase into the trunk of a car, one handing the bag to the other, both mid-motion. Thick black outlines, flat solid color fill, no gradients, no shading, playful proportions. The characters and suitcase are drawn in black outline with white fill, sitting on top of an irregular abstract blob shape in solid color #4338CA behind them. No text.

Gemini prompt — Card 4 (Fleet & Delivery):
Flat vector cartoon illustration in a bold, minimal editorial style: a delivery worker in a cap holding a smartphone in one hand and a cardboard box in the other, standing next to a small delivery van, mid-action pose. Thick black outlines, flat solid color fill, no gradients, no shading, playful proportions. The character, box, and van are drawn in black outline with white fill, sitting on top of an irregular abstract blob shape in solid color #00C2FF behind them. No text.
```

---

### 3.4 Why Choose AngaZip
Simple 3–4 column icon row (no illustration needed, use simple line icons — Lucide icon set, covered in tech stack below). Keep this section text-only + icons, no imagery, to give the page breathing room between illustration-heavy sections.

**Headline:** `Why people and businesses choose AngaZip`

- Fair, transparent pricing — no surprise surge
- Verified drivers and delivery partners
- Live tracking on every ride and shipment
- One platform for personal rides and business fleets

---

### 3.5 Safety Section
Full solid-indigo (`#4338CA`) background block — this is your "hero moment of color," mirroring inDrive's lime safety block exactly, but in your indigo.

**Layout:** Real photo on the left (person on phone, confident/safe body language) + large abstract shield-like shape in a lighter indigo tint behind them (like inDrive's oversized "D" shape) + headline and body copy in white on the right + `Learn more` button (white pill, indigo text).

**Copy:**
- Eyebrow: `Safety`
- H2: `Your safety is non-negotiable`
- Body: `Every ride, every delivery, every fleet dispatch — backed by verified partners, live tracking, and 24/7 support.`
- Button: `Learn more`

**Image needed — Real photo:**
```
Gemini prompt:
A warm, natural-light photograph of a young Indian woman in casual clothing, standing outdoors, smiling gently while looking at her smartphone, tracking a ride or delivery. Candid, documentary photography style, soft natural lighting, shallow depth of field, authentic non-staged feeling, plain softly blurred urban background, no visible text or logos.
```
*(Optional decorative shape behind the photo — a large abstract rounded shield silhouette in a lighter indigo tint `#C7D2FE` — can be built directly in CSS/SVG, no image generation needed.)*

---

### 3.6 Fleet & Business Spotlight (your key differentiator vs. inDrive)
This section doesn't exist on inDrive — it's yours to own, since B2B fleet-on-demand for e-commerce is your core differentiator (the Flipkart/Ekart-style model). Give it real weight, not just a card.

**Layout:** Split section, `#EEF2FF` tinted background, real photo right, content left.

**Copy:**
- Eyebrow: `For Business`
- H2: `Your delivery fleet, without owning a fleet`
- Body: `From single parcels to full truckloads — AngaZip gives e-commerce sellers, SMEs, and enterprises on-demand access to verified vehicles and drivers, with live tracking on every dispatch.`
- Bullet row: `Same-day city delivery` · `Scheduled fleet access` · `Bulk cargo & truckload` · `API integration for sellers`
- Button: `Talk to our business team`

**Image needed — Real photo:**
```
Gemini prompt:
A photorealistic image of a small fleet of branded delivery vans and two-wheelers parked in a row in a warehouse loading area, with a warehouse worker in the foreground checking a tablet or clipboard, natural daylight through an open loading bay, authentic logistics/warehouse environment, no visible text or logos on the vehicles.
```

---

### 3.7 Available Cities
Same pill-badge pattern as inDrive's "Available in major cities across India" — light `#EEF2FF` background, rounded pill badges in white with indigo text and a location pin icon, wrapped in a flex-wrap grid.

**Headline:** `Available across India`
No imagery needed — icon-only (location pin, Lucide icon set).

---

### 3.8 App Download CTA Band
Full-width solid indigo band near the bottom of the page.

**Copy:**
- H2 (white): `Get the AngaZip app`
- Subtext (white/80%): `Book rides, send parcels, or manage your fleet — all from one app.`
- App Store + Google Play badge buttons (white pill buttons)
- Optional: QR code block (generate programmatically, not via Gemini)

**Optional image — phone mockup:**
```
Gemini prompt:
A clean, minimal 3D-style mockup of a smartphone floating at a slight angle against a plain transparent background, screen showing a simple abstract map interface with a route line and a location pin, indigo and white color scheme, soft realistic shadow beneath the phone, no readable text or logos on the screen.
```

---

### 3.9 Footer
Match inDrive's footer structure — multi-column link layout on a light background (`#EEF2FF` or very light grey), wordmark top-left, no imagery required.

Columns: `Why AngaZip` / `Earn with AngaZip` (Ride, Bike Taxi, Courier, Fleet) / `Safety` / `Company` (About, Careers, Newsroom, Contact) / `Support`

---

## 4. Image Asset Checklist (all Gemini prompts, ready to run)

| # | Section | Type | Prompt Location Above |
|---|---|---|---|
| 1 | Hero background | Real photo | §3.2 |
| 2 | Service card — Cab Rides | Cartoon illustration | §3.3 |
| 3 | Service card — Bike Taxi | Cartoon illustration | §3.3 |
| 4 | Service card — City to City | Cartoon illustration | §3.3 |
| 5 | Service card — Fleet & Delivery | Cartoon illustration | §3.3 |
| 6 | Safety section | Real photo | §3.5 |
| 7 | Fleet/Business spotlight | Real photo | §3.6 |
| 8 | App download band | 3D mockup (optional) | §3.8 |

**Tip:** Generate each illustration prompt 3-4 times and pick the cleanest, most consistent-style result across all four — consistency of line weight and character proportions across the service grid matters more than any single image being perfect.

---

## 5. Responsive Behavior

- **Breakpoints:** mobile `<640px`, tablet `640–1024px`, desktop `>1024px`
- **Navbar:** full link row on desktop → collapses to hamburger `Menu` on tablet/mobile (match inDrive exactly here, it's a proven pattern)
- **Hero:** headline drops from 2-line 64px to 2-line 32px on mobile; service tab row becomes horizontally scrollable on mobile instead of wrapping
- **Service grid:** 2x2 on desktop → single column stacked on mobile, illustration always above text on mobile
- **Safety/Fleet split sections:** side-by-side on desktop → image stacks above text on mobile, indigo background is retained (don't drop the color block on mobile, it's a key brand moment)
- **Footer:** 5-column grid on desktop → accordion-style collapsible sections on mobile to avoid a huge scroll wall

---

## 6. Recommended Tech Stack

| Layer | Recommendation | Why |
|---|---|---|
| Framework | **Next.js (React)** | SEO-friendly server rendering, fast page loads, easiest path to add the `/ride`, `/fleet-business` etc. sub-pages later |
| Styling | **Tailwind CSS** | Fast to implement the exact spacing/color system above with design tokens; easy to keep indigo/cyan usage consistent across devs |
| Icons | **Lucide Icons** | Clean line icons for the "Why Choose" and "Cities" sections, free and consistent weight |
| Animation | **Framer Motion** | Subtle fade/slide-in on scroll for section reveals — matches the polished feel of inDrive's site without overdoing it |
| CMS (optional) | **Sanity** or **Contentful** | Lets your marketing team update city lists, copy, and blog/newsroom content without a developer |
| Hosting | **Vercel** | Native Next.js hosting, automatic image optimization (important since this page is image-heavy), fast global CDN |
| Forms (business inquiries) | **Formspree** or a simple serverless function | For the "Talk to our business team" CTA lead capture |
| Image handling | **next/image** | Automatic responsive sizing/compression for all the Gemini-generated assets above — critical since you'll have 6-8 large images on one page |

**If you don't have a dev team ready yet:** Webflow is a reasonable fallback — it can replicate this exact section structure visually without code, though you'll hit limits later if you want the `/fleet-business` page to have live tracking widgets or an API-driven seller dashboard.

---

## 7. Build Order (practical sequence)

1. Lock brand tokens in Tailwind config (colors, fonts) first — everything downstream depends on this
2. Build Navbar + Footer (static, reused across all pages)
3. Build Hero section with placeholder image, swap in Gemini output once generated
4. Build the 4-card Service Grid — this is the most important section, get it right before moving on
5. Build Safety section (solid color block) and Fleet/Business spotlight
6. Build Cities section + App Download band
7. Generate and drop in all Gemini images last, once layout is proven with placeholders — this avoids re-cropping images if section proportions shift during build