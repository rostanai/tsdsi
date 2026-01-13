# TSDSI - Telecommunications Standards Development Society, India

A modern, professional business website for TSDSI built with Next.js 15, shadcn/UI, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design with dark/light theme support
- ⚡ Built with Next.js 15 App Router and TypeScript
- 🎭 Beautiful UI components from shadcn/UI
- 🎯 SEO optimized with comprehensive metadata
- 📱 Fully responsive across all devices
- ♿ Accessible with ARIA labels and keyboard navigation
- 🚀 Optimized for Vercel deployment

## Pages

- **Home**: Hero section, statistics, features, initiatives, and partners
- **About**: Mission, vision, objectives, history, and governance
- **Standards**: 5G/6G initiatives, working groups, published standards
- **Membership**: Benefits, membership tiers, and application process
- **Collaborations**: International and national partnerships
- **News & Events**: Latest updates and upcoming events
- **Contact**: Contact form with validation and FAQ

## Tech Stack

- **Framework**: Next.js 15.1.1
- **UI Library**: shadcn/UI
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React
- **Theme**: next-themes
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/tsdsi)

### Manual Deployment

```bash
pnpm build
pnpm start
```

## Project Structure

```
tsdsi/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── collaborations/    # Collaborations page
│   ├── contact/           # Contact page
│   ├── membership/        # Membership page
│   ├── news/              # News & Events page
│   ├── standards/         # Standards page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── ui/               # shadcn/UI components
│   └── theme-provider.tsx
├── lib/                   # Utility functions
│   └── utils.ts
└── public/               # Static assets
```

## Customization

### Colors

Edit the CSS variables in `app/globals.css` to customize the color scheme:

```css
:root {
  --primary: 197 71% 52%;    /* Blue */
  --secondary: 210 40% 96.1%;
  /* ... */
}
```

### Content

Update page content in the respective files under `app/` directory.

### Components

Add or modify shadcn/UI components:

```bash
pnpm dlx shadcn@latest add [component-name]
```

## License

© 2026 TSDSI. All rights reserved.

## Support

For questions or support, please contact:
- Email: info@tsdsi.in
- Website: https://tsdsi.in
