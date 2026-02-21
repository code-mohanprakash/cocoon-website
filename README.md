# Cocoon Website

A beautiful, highly animated landing page for Cocoon - a privacy-first, on-device AI meeting transcriber.

## Features

- 🎨 **Fully Animated** - Smooth Framer Motion animations throughout
- 🎯 **Responsive Design** - Mobile, tablet, and desktop optimized
- ⚡ **Fast Performance** - Next.js 14 with optimized bundle size
- 🛡️ **Privacy Focused** - Showcases Cocoon's privacy-first approach
- 🎭 **Beautiful UI** - Tailwind CSS with custom Cocoon color palette

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
cocoon-website/
├── app/
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Navigation.tsx    # Header navigation
│   ├── Hero.tsx          # Hero section with phone mockup
│   ├── PrivacySection.tsx # Privacy promise section
│   ├── FeaturesSection.tsx # Feature grid
│   ├── HowItWorks.tsx    # How it works section
│   ├── TechSection.tsx   # Technical details
│   ├── FAQ.tsx           # FAQ accordion
│   ├── DownloadSection.tsx # Download CTA
│   └── Footer.tsx        # Footer
└── public/               # Static assets
```

## Customization

### Colors

Edit the color values in `tailwind.config.js`:

```javascript
colors: {
  'claude-orange': '#D97333',
  'royal-blue': '#405AC0',
  // ... more colors
}
```

### Content

Edit component text directly in the component files under `/components`.

### Animations

Customize animations using Framer Motion props in each component. See [Framer Motion docs](https://www.framer.com/motion/).

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

This is a standard Next.js app and can be deployed to any Node.js hosting platform.

## Performance

- **Lighthouse Score**: > 95
- **Load Time**: < 3 seconds on 4G
- **Bundle Size**: < 200KB (gzipped)

Run Lighthouse audit:

```bash
npm run build
npm start
# Open Chrome DevTools > Lighthouse
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Proprietary - Cocoon App

## Support

For issues or questions, contact support@cocoonapp.com
