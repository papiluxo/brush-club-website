# Brush Club Design Guide

This document outlines the design system, visual guidelines, and component specifications for the Brush Club website.

## 🎨 Design Philosophy

The Brush Club brand embodies sustainability, simplicity, and health. Our design reflects these values through:

- **Natural Color Palette**: Earthy greens and clean neutrals
- **Clean Typography**: Clear, readable fonts that convey trust
- **Minimal Interface**: Focus on content and user experience
- **Accessible Design**: Inclusive design for all users
- **Sustainable Aesthetics**: Visual elements that reinforce our eco-friendly mission

## 🌈 Color System

### Primary Colors

```css
/* Emerald - Primary Brand Color */
--emerald-50: #ecfdf5;
--emerald-100: #d1fae5;
--emerald-200: #a7f3d0;
--emerald-300: #6ee7b7;
--emerald-400: #34d399;
--emerald-500: #10b981;
--emerald-600: #059669;  /* Primary */
--emerald-700: #047857;
--emerald-800: #065f46;
--emerald-900: #064e3b;
```

### Secondary Colors

```css
/* Slate - Neutral Colors */
--slate-50: #f8fafc;
--slate-100: #f1f5f9;
--slate-200: #e2e8f0;
--slate-300: #cbd5e1;
--slate-400: #94a3b8;
--slate-500: #64748b;
--slate-600: #475569;
--slate-700: #334155;
--slate-800: #1e293b;
--slate-900: #0f172a;
```

### Accent Colors

```css
/* Teal - Complementary Accent */
--teal-50: #f0fdfa;
--teal-100: #ccfbf1;
--teal-200: #99f6e4;
--teal-300: #5eead4;
--teal-400: #2dd4bf;
--teal-500: #14b8a6;
--teal-600: #0d9488;
--teal-700: #0f766e;
--teal-800: #115e59;
--teal-900: #134e4a;
```

### Usage Guidelines

- **Emerald 600**: Primary CTAs, links, and brand elements
- **Slate 900**: Primary text and headings
- **Slate 600**: Secondary text and descriptions
- **Slate 100**: Subtle backgrounds and dividers
- **Teal**: Accent colors for highlights and special elements

## 🔤 Typography

### Font Family

**Primary Font**: Inter
- Web-safe, highly legible
- Supports multiple weights and styles
- Optimized for both display and body text

```css
font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
```

### Type Scale

```css
/* Headings */
.heading-1 { font-size: 3.75rem; line-height: 1.1; }    /* 60px */
.heading-2 { font-size: 3rem; line-height: 1.2; }       /* 48px */
.heading-3 { font-size: 2.25rem; line-height: 1.3; }    /* 36px */
.heading-4 { font-size: 1.875rem; line-height: 1.3; }   /* 30px */
.heading-5 { font-size: 1.5rem; line-height: 1.4; }     /* 24px */
.heading-6 { font-size: 1.25rem; line-height: 1.4; }    /* 20px */

/* Body Text */
.body-large { font-size: 1.125rem; line-height: 1.6; }  /* 18px */
.body-base { font-size: 1rem; line-height: 1.6; }       /* 16px */
.body-small { font-size: 0.875rem; line-height: 1.5; }  /* 14px */
.body-xs { font-size: 0.75rem; line-height: 1.4; }      /* 12px */
```

### Font Weights

- **Light (300)**: Subtle text, large headings
- **Regular (400)**: Body text, descriptions
- **Medium (500)**: Navigation, labels
- **Semibold (600)**: Subheadings, emphasis
- **Bold (700)**: Main headings, CTAs

## 🧱 Component System

### Buttons

#### Primary Button
```jsx
<Button variant="primary" size="md">
  Primary Action
</Button>
```
- **Background**: Emerald 600
- **Text**: White
- **Hover**: Emerald 700
- **Border Radius**: 8px
- **Padding**: 12px 16px (medium)

#### Secondary Button
```jsx
<Button variant="secondary" size="md">
  Secondary Action
</Button>
```
- **Background**: Slate 900
- **Text**: White
- **Hover**: Slate 800

#### Outline Button
```jsx
<Button variant="outline" size="md">
  Outline Action
</Button>
```
- **Background**: Transparent
- **Text**: Emerald 600
- **Border**: 1px solid Emerald 600
- **Hover**: Emerald 50 background

#### Button Sizes
- **Small**: 8px 12px, text-sm
- **Medium**: 12px 16px, text-base
- **Large**: 16px 24px, text-lg

### Cards

#### Standard Card
```jsx
<div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
  Card Content
</div>
```
- **Background**: White
- **Border**: 1px solid Slate 200
- **Border Radius**: 12px
- **Padding**: 24px
- **Shadow**: Subtle drop shadow

#### Highlight Card
```jsx
<div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
  Highlighted Content
</div>
```
- **Background**: Emerald 50
- **Border**: 1px solid Emerald 200

### Forms

#### Input Fields
```jsx
<input className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
```
- **Border**: 1px solid Slate 300
- **Border Radius**: 6px
- **Padding**: 8px 12px
- **Focus**: Emerald 500 ring

#### Labels
```jsx
<label className="block text-sm font-medium text-slate-700 mb-2">
  Field Label
</label>
```

## 📏 Spacing System

### Spacing Scale
```css
/* Tailwind spacing scale */
.space-1 { margin/padding: 0.25rem; }   /* 4px */
.space-2 { margin/padding: 0.5rem; }    /* 8px */
.space-3 { margin/padding: 0.75rem; }   /* 12px */
.space-4 { margin/padding: 1rem; }      /* 16px */
.space-6 { margin/padding: 1.5rem; }    /* 24px */
.space-8 { margin/padding: 2rem; }      /* 32px */
.space-12 { margin/padding: 3rem; }     /* 48px */
.space-16 { margin/padding: 4rem; }     /* 64px */
.space-24 { margin/padding: 6rem; }     /* 96px */
```

### Layout Guidelines
- **Container Max Width**: 1280px (max-w-7xl)
- **Section Padding**: 64px vertical, 24px horizontal (py-16 px-6)
- **Card Spacing**: 24px internal padding
- **Element Spacing**: 16px between related elements

## 🎯 Layout Patterns

### Hero Section
```jsx
<section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-50 to-teal-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Content */}
    </div>
  </div>
</section>
```

### Content Section
```jsx
<section className="py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto text-center space-y-8">
      {/* Content */}
    </div>
  </div>
</section>
```

### Feature Grid
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Feature cards */}
</div>
```

## 🔄 Interaction Guidelines

### Hover States
- **Buttons**: Darken background by one shade
- **Links**: Color change to Emerald 700
- **Cards**: Subtle shadow increase
- **Images**: Slight scale transform (scale-105)

### Focus States
- **All Interactive Elements**: 2px Emerald 500 focus ring
- **Offset**: 2px from element
- **Visible**: Always visible for keyboard navigation

### Loading States
- **Buttons**: Disable and show spinner
- **Content**: Skeleton placeholders
- **Images**: Blur-up effect

### Transitions
```css
/* Standard transition */
transition: all 0.2s ease-in-out;

/* Color transitions */
transition: color 0.2s ease-in-out;

/* Transform transitions */
transition: transform 0.2s ease-in-out;
```

## 📱 Responsive Design

### Breakpoints
```css
/* Tailwind breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

### Mobile-First Approach
1. Design for mobile first (320px+)
2. Enhance for tablet (768px+)
3. Optimize for desktop (1024px+)

### Grid Systems
- **Mobile**: Single column
- **Tablet**: 2-column grid
- **Desktop**: 3-column grid

## ♿ Accessibility

### Color Contrast
- **AA Compliance**: 4.5:1 for normal text
- **AAA Compliance**: 7:1 for important content
- **Large Text**: 3:1 minimum ratio

### Focus Management
- **Visible Focus**: Always visible focus indicators
- **Logical Order**: Tab order follows visual flow
- **Skip Links**: Skip to main content

### Semantic HTML
- **Headings**: Proper heading hierarchy (h1-h6)
- **Labels**: All form inputs have labels
- **Alt Text**: All images have descriptive alt text
- **ARIA**: Proper ARIA labels and roles

## 🖼️ Image Guidelines

### Product Images
- **Aspect Ratio**: 1:1 for main product shots
- **Quality**: High resolution (minimum 800x800px)
- **Format**: WebP with JPEG fallback
- **Optimization**: Next.js Image component

### Hero Images
- **Aspect Ratio**: 16:9 or 3:2
- **Resolution**: 1920x1080 minimum
- **Loading**: Priority loading for above-fold

### Icons
- **Style**: Outline style (consistent with Heroicons)
- **Size**: 16px, 20px, 24px standard sizes
- **Color**: Inherit from parent or Emerald 600

## 🎨 Brand Applications

### Logo Usage
- **Minimum Size**: 120px width
- **Clear Space**: 1x logo height on all sides
- **Backgrounds**: Use on light backgrounds primarily

### Voice and Tone
- **Friendly**: Approachable and conversational
- **Confident**: Knowledgeable about sustainability
- **Helpful**: Focused on user benefits
- **Authentic**: Genuine commitment to the environment

## 🛠️ Implementation

### CSS Custom Properties
```css
:root {
  --color-primary: #059669;
  --color-primary-hover: #047857;
  --color-text: #1e293b;
  --color-text-secondary: #64748b;
  --border-radius: 8px;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}
```

### Utility Classes
```css
/* Custom utilities */
.text-balance { text-wrap: balance; }
.bg-gradient-brand { background: linear-gradient(to bottom right, var(--emerald-50), var(--teal-50)); }
.shadow-brand { box-shadow: 0 4px 6px -1px rgb(16 185 129 / 0.1); }
```

---

This design guide ensures consistency and quality across all Brush Club touchpoints while maintaining our commitment to sustainability and user experience. 