import { Product, NavItem, SocialLink } from './types'

export const PRODUCT_DATA: Product = {
  id: 'eco-dental-kit',
  name: 'Brush Club Eco Dental Kit',
  description: 'A complete 6-month sustainable dental care solution designed for climate-conscious individuals who value minimal design and eco-responsibility.',
  price: parseInt(process.env.NEXT_PUBLIC_PRODUCT_PRICE || '899'),
  priceId: process.env.NEXT_PUBLIC_PRODUCT_PRICE_ID || '',
  features: [
    '2 bamboo toothbrushes with soft, carbon-infused bristles',
    '2 corn fiber floss rolls',
    'Each item lasts 3 months (6 months total)',
    'PFAS-free and biodegradable materials',
    'Minimal, recyclable packaging'
  ],
  images: [
    '/product_media/dk_1.jpg',
    '/product_media/dk_2.jpg',
    '/product_media/dk_3.jpg',
    '/product_media/dk_4.jpg'
  ],
  duration: '6 months',
  sustainability: [
    'Reduces plastic waste by 90%',
    'Biodegradable bamboo handles',
    'Corn-based floss fibers',
    'Recyclable packaging',
    'Carbon-neutral shipping'
  ]
}

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' }
]

export const FOOTER_LINKS: NavItem[] = [
  { label: 'About Brush Club', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Contact', href: '/contact' }
]

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Instagram', url: 'https://www.instagram.com/brushclub.us?igsh=MTgwbmxhcjBwOXh6ZA%3D%3D&utm_source=qr', icon: 'instagram' },
  { platform: 'TikTok', url: 'https://www.tiktok.com/@brushclub.us?_t=ZT-8y3NE3ULCrl&_r=1', icon: 'tiktok' }
]

export const COMPANY_INFO = {
  name: 'Brush Club',
  tagline: 'Sustainable dental care for a healthier planet',
  mission: 'Reducing plastic waste one smile at a time',
  email: 'contact@brushclub.us'
}

export const SITE_CONFIG = {
  title: 'Brush Club - Sustainable Dental Care',
  description: 'Climate-conscious dental care with our 6-month eco-friendly dental kit. Bamboo toothbrushes, corn fiber floss, and minimal packaging.',
  url: 'https://brushclub.com',
  ogImage: '/product_media/dk_1.jpg'
} 