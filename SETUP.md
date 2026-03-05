# Equinox Window Cleaning — Setup

## Prerequisites
- Node.js 18+
- pnpm (preferred), bun, or npm

## Install & Run

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Deploy to Vercel

```bash
vercel --prod
```

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Animations:** GSAP with ScrollTrigger
- **Icons:** lucide-react
- **Fonts:** Playfair Display + DM Sans (Google Fonts via next/font)

## Project Structure
```
├── app/
│   ├── globals.css        # Tailwind imports + custom utilities
│   ├── layout.tsx         # Root layout with fonts + metadata
│   └── page.tsx           # Homepage (assembles all sections)
├── components/
│   ├── Navbar.tsx          # Fixed nav with scroll effect + mobile overlay
│   ├── Hero.tsx            # Full-viewport hero with parallax + GSAP animations
│   ├── StatBar.tsx         # Animated counter stats bar
│   ├── Services.tsx        # 5-service card grid with hover effects
│   ├── WhyEquinox.tsx      # 3-column trust pillars
│   ├── Process.tsx         # 4-step horizontal/vertical stepper
│   ├── Testimonials.tsx    # Testimonial carousel + before/after slider
│   ├── ServiceArea.tsx     # Triangle area map with city chips
│   ├── CTABanner.tsx       # Full-width CTA with noise texture
│   ├── FAQ.tsx             # Animated accordion
│   └── Footer.tsx          # 4-column footer
├── tailwind.config.ts      # Extended theme (colors, fonts, animations)
├── next.config.js          # Next.js config (Unsplash images)
└── package.json
```

## Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Navy | #0A0E1A | Primary backgrounds, text |
| Sky | #7EC8E3 | Accent, eyebrow labels |
| Cream | #F5F5F0 | Light section backgrounds |
| Gold | #C9A84C | CTAs, badges, highlights |
