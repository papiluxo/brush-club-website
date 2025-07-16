export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  priceId: string;
  features: string[];
  images: string[];
  duration: string;
  sustainability: string[];
}

export interface CountdownTimer {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface CheckoutSession {
  id: string;
  url: string;
} 