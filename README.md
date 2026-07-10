# Anbu Fire Part Works - Marketing Website

A modern, responsive marketing website for Anbu Fire Part Works, providing comprehensive fire safety solutions across Tamil Nadu.

## Features

- **Fully Responsive Design**: Mobile-first approach with beautiful layouts on all devices
- **Smooth Animations**: Scroll-triggered reveal and stagger animations for engaging user experience
- **Contact Form**: Integrated EmailJS for direct inquiries with validation
- **SEO Optimized**: Proper metadata, structured data, and accessibility standards
- **Accessibility**: WCAG 2.1 AA compliance with proper ARIA labels and focus management
- **Modern Tech Stack**: Built with Next.js 16, React 19, Tailwind CSS 4, and TypeScript

## Sections

1. **Top Bar**: Contact information and company registration details
2. **Navigation**: Sticky navbar with mobile hamburger menu
3. **Hero**: Eye-catching hero section with animated pressure gauge
4. **About**: Company information and registration details
5. **Services**: 6-card grid showcasing specialized services
6. **Products**: Horizontal scroll showcase of fire safety products
7. **Certifications**: Quality standards and compliance badges
8. **Why Choose Us**: 8-badge grid highlighting competitive advantages
9. **Service Area Banner**: Call-to-action highlighting Tamil Nadu coverage
10. **Contact**: Contact form with info sidebar
11. **Footer**: Multi-column footer with links and company info

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS 4 with custom design tokens
- **UI Components**: Lucide React icons
- **Email**: EmailJS for contact form submissions
- **Animation**: CSS animations with Intersection Observer API
- **Type Safety**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm (or npm/yarn)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd anbu-fire-website
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your EmailJS credentials to `.env.local`

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building

Build for production:

```bash
pnpm build
pnpm start
```

## EmailJS Setup

To enable the contact form:

1. Visit [EmailJS](https://www.emailjs.com/)
2. Create a free account
3. Set up an email service (Gmail recommended)
4. Create an email template with the following variables:
   - `to_email`
   - `from_name`
   - `from_email`
   - `phone`
   - `service`
   - `message`
5. Get your:
   - Service ID
   - Template ID
   - Public Key
6. Add these to your `.env.local` file:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

Build the production bundle:

```bash
pnpm build
```

The static files will be in `.next/` directory.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Design tokens and animations
├── components/
│   ├── TopBar.tsx          # Top utility bar
│   ├── Navbar.tsx          # Sticky navigation
│   ├── HazardTape.tsx      # Hazard stripe divider
│   ├── Footer.tsx          # Footer component
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Products.tsx
│   │   ├── Certifications.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ServiceAreaBanner.tsx
│   │   └── Contact.tsx
│   └── ui/
│       └── ContactForm.tsx # Contact form component
├── hooks/
│   └── useIntersectionObserver.ts # Scroll animation hook
├── lib/
│   └── constants.ts        # Business data and content
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.mjs         # Next.js configuration
```

## Customization

### Colors

Edit the color tokens in `app/globals.css` under the `@theme` block:

```css
@theme inline {
  --color-navy: #0A1930;
  --color-red: #D32F2F;
  --color-amber: #F4A100;
  /* ... */
}
```

### Content

All business information is stored in `lib/constants.ts`:

```typescript
export const COMPANY = {
  name: 'Anbu Fire Part Works',
  // ...
}
```

### Animations

Custom animations are defined in `app/globals.css`. Adjust timing, easing, and keyframes as needed.

## Performance Optimization

- Images are lazy-loaded
- CSS is tree-shaken and minified
- JavaScript is code-split by route
- Intersection Observer prevents unnecessary DOM operations
- Production builds are optimized with Next.js built-in optimizations

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS Safari 12+, Chrome Mobile

## Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Color contrast: 4.5:1 minimum
- Mobile tap targets: 44×44px minimum

## License

This project is proprietary to Anbu Fire Part Works.

## Support

For questions or issues, contact: [anbufireparts10@gmail.com](mailto:anbufireparts10@gmail.com)

---

**Protecting Lives • Securing Properties**
