# Brush Club - Sustainable Dental Care E-Commerce Website

A modern, mobile-first e-commerce website built with Next.js 14 for Brush Club, featuring sustainable dental care products. The site showcases a 6-month eco-friendly dental kit and includes Stripe payment integration.

## 🌟 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful, accessible UI
- **Stripe Integration**: Secure payment processing with test mode support
- **Real-time Countdown**: Weekly restock timer that resets every Sunday at 9:00 AM EST
- **SEO Optimized**: Comprehensive meta tags, sitemap, and robots.txt
- **Performance Optimized**: Image optimization, lazy loading, and fast page loads
- **Accessibility**: WCAG compliant with proper semantic HTML and keyboard navigation

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm
- A Stripe account (for payment processing)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd brush-club-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Configure your environment variables in `.env.local`:
```env
# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Product Configuration
NEXT_PUBLIC_PRODUCT_PRICE_ID=price_your_product_price_id_here
NEXT_PUBLIC_PRODUCT_PRICE=899   # Price in cents ($8.99)

# Optional: Custom domain for production
NEXT_PUBLIC_DOMAIN=https://your-domain.com
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔧 Stripe Setup

### 1. Create a Stripe Account
- Sign up at [stripe.com](https://stripe.com)
- Get your test API keys from the Stripe dashboard

### 2. Create a Product and Price
1. Go to Products in your Stripe dashboard
2. Create a new product for "Brush Club Eco Dental Kit"
3. Set the price to $8.99 (or your desired amount)
4. Copy the Price ID and add it to your `.env.local` file

### 3. Set Up Webhook (Optional)
If you want to handle post-payment events:
1. Go to Webhooks in your Stripe dashboard
2. Add endpoint: `https://your-domain.com/api/webhooks/stripe`
3. Select events: `checkout.session.completed`
4. Copy the webhook secret to your `.env.local` file

## 📱 Project Structure

```
brush-club-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   ├── product/           # Product page
│   │   ├── success/           # Checkout success page
│   │   ├── cancel/            # Checkout cancel page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   ├── sitemap.ts         # SEO sitemap
│   │   └── robots.ts          # SEO robots.txt
│   ├── components/            # Reusable React components
│   │   ├── ui/                # Base UI components
│   │   ├── CheckoutButton.tsx # Stripe checkout button
│   │   ├── CountdownTimer.tsx # Restock countdown
│   │   ├── Footer.tsx         # Site footer
│   │   └── Navigation.tsx     # Site navigation
│   └── lib/                   # Utility functions and configs
│       ├── constants.ts       # App constants and data
│       ├── stripe.ts          # Stripe configuration
│       ├── types.ts           # TypeScript types
│       └── utils.ts           # Utility functions
├── public/                    # Static assets
│   └── product_media/         # Product images and GIFs
├── .env.local                 # Environment variables
└── README.md                  # This file
```

## 🎨 Design System

### Colors
- **Primary**: Emerald (sustainable, natural)
- **Secondary**: Slate (modern, clean)
- **Accent**: Teal (complementary to emerald)

### Typography
- **Font**: Inter (clean, modern, highly legible)
- **Hierarchy**: Clear heading structure with proper contrast

### Components
- **Buttons**: Multiple variants with hover states and loading indicators
- **Cards**: Consistent spacing and shadow system
- **Forms**: Accessible with proper focus states

## 🔄 Development Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set up environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/brush-club-website)

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `.next` folder and `public` folder to your hosting provider

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | Yes |
| `STRIPE_SECRET_KEY` | Stripe secret key | Yes |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook secret | No |
| `NEXT_PUBLIC_PRODUCT_PRICE_ID` | Stripe price ID for the dental kit | Yes |
| `NEXT_PUBLIC_PRODUCT_PRICE` | Price in cents (e.g., 899 for $8.99) | Yes |
| `NEXT_PUBLIC_DOMAIN` | Your domain (for production) | No |

## 📊 Analytics Integration

The site is ready for analytics integration. Popular options:

### Vercel Analytics
Add to your `layout.tsx`:
```jsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Plausible Analytics
Add to your `layout.tsx`:
```jsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          defer
          data-domain="your-domain.com"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## 🛠️ Customization

### Product Information
Edit `src/lib/constants.ts` to update:
- Product details and features
- Company information
- Pricing and sustainability claims

### Styling
- Customize colors in `src/app/globals.css`
- Modify component styles in individual component files
- Update Tailwind config for additional customization

### Content
- Update page content in respective page files
- Modify navigation items in `src/lib/constants.ts`
- Replace product images in `public/product_media/`

## 📞 Support

For support and questions:
- Email: hello@brushclub.com
- Create an issue in the GitHub repository

## 📄 License

This project is proprietary software for Brush Club. All rights reserved.

---

Built with ❤️ for a sustainable future 🌱

## 📝 Changelog

### 07.16 Prompt (Fifth Main Edit) - Footer, Product Page Cleanup, Icon Updates, and Sustainable Messaging

#### ✅ Layout & Visual Improvements
- **Footer Enhancement**: Added logo positioned to the left of "Brush Club" text with color-matched styling for visual cohesion
- **Product Page Cleanup**: Removed "for 6 months" text from price display for cleaner presentation
- **Icon Updates**: 
  - Replaced "Sustainability First" icon with plant icon matching product page design
  - Updated "Transparency" icon from lightning bolt to eye symbol for better semantic clarity

#### 📝 Content Additions
- **Restock Timer Explanation**: Added "Our Regenerative Production Cycle" section to About page
  - Explains restock timer as responsible production practice, not artificial scarcity
  - Details bamboo regeneration properties and sustainable harvesting alignment
  - Reinforces brand commitment to eco-driven pacing over profit-driven urgency

#### 🎨 Design Consistency
- Icons now semantically reinforce their labels with appropriate symbolism
- Footer returns to original design intention with logo prominence
- Content messaging aligns with Brush Club's sustainability mission and authentic voice

### Version 1.2.0 (January 15, 2025) - 07.15 Prompt (Fourth Main Edit)

#### ✅ Major Changes
- **Product Page Renamed**: Renamed "Product" page to "Shop" throughout the site
  - Updated navigation menu to show "Shop" instead of "Product"
  - Changed URL from `/product` to `/shop` (old URLs now return 404)
  - Updated all internal links and references site-wide
- **Navigation Cleanup**: Removed standalone "Order Now" navigation link for streamlined navigation
- **Button Consistency**: Unified all CTA buttons to match the main "Order Now" button style
  - Applied primary variant with emerald background to all buttons
  - Consistent `rounded-xl` border-radius and sizing across all pages
  - Enhanced hover effects and shadows for better visibility

#### 🔧 Content Updates
- **Homepage Hero**: Removed redundant "Learn More" button from hero section
- **Button Styling**: Updated buttons on homepage, shop page, About page, and FAQ page to match primary design
- **Price Confirmation**: Verified $8.99 pricing is correctly configured in constants and code

#### 🧪 Testing Completed
- ✅ All pages load correctly with new navigation structure
- ✅ Old `/product` URLs properly return 404 errors
- ✅ New `/shop` page functions identically to old product page
- ✅ All buttons have consistent styling and behavior
- ✅ Navigation menu shows correct "Shop" label
- ✅ No "Order Now" standalone navigation link

### Version 1.1.0 (January 15, 2025)

#### ✅ New Features
- **About Page**: Added comprehensive About page with company mission, values, story, and environmental impact metrics
- **FAQ Page**: Created detailed FAQ page with 12 common questions about products and services
- **Enhanced Navigation**: Both About and FAQ pages are now fully accessible without 404 errors

#### 🔧 Updates & Improvements
- **Contact Information**: Updated site-wide contact email from `hello@brushclub.com` to `contact@brushclub.us`
- **Social Media Links**: 
  - Removed Twitter social link
  - Updated Instagram URL to: `https://www.instagram.com/brushclub.us?igsh=MTgwbmxhcjBwOXh6ZA%3D%3D&utm_source=qr`
  - Updated TikTok URL to: `https://www.tiktok.com/@brushclub.us?_t=ZT-8y3NE3ULCrl&_r=1`
- **Button Enhancements**: 
  - Improved button visibility with enhanced shadows, scaling animations, and better sizing
  - Made homepage buttons full-width on mobile for better touch accessibility
  - Added consistent button styling across all pages
  - Improved mobile responsive layout for better user experience

#### 🛠️ Technical Changes
- **Configuration**: Converted `next.config.ts` to `next.config.mjs` for compatibility with Next.js 14.2.5
- **Component Updates**: Enhanced Button component with better mobile-friendly dimensions and hover effects
- **Footer Cleanup**: Removed Twitter icon and updated social media component structure

#### 🎨 Design Improvements
- **Mobile-First Approach**: Buttons now have better spacing and positioning for both mobile and desktop
- **Visual Feedback**: Added transform animations and enhanced shadows for better user interaction
- **Consistency**: Applied unified styling across all page buttons while preserving the main "Buy Now" button design

All changes maintain the existing design system and ensure no 404 errors exist in the user navigation flow.
