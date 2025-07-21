import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility to fetch checkout session data for user identification
export async function getCheckoutSessionData(sessionId: string) {
  try {
    const response = await fetch(`/api/checkout-session?session_id=${sessionId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch checkout session');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching checkout session:', error);
    return null;
  }
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price / 100)
}

export function getNextSundayRestockDate(): Date {
  const now = new Date()
  const nextSunday = new Date(now)
  
  // Find next Sunday at 9:00 AM EST
  const daysUntilSunday = (7 - now.getDay()) % 7
  nextSunday.setDate(now.getDate() + (daysUntilSunday === 0 ? 7 : daysUntilSunday))
  nextSunday.setHours(9, 0, 0, 0)
  
  // Convert to EST (UTC-5)
  const utcDate = new Date(nextSunday.getTime() - (5 * 60 * 60 * 1000))
  
  return utcDate
}

export function calculateTimeUntil(targetDate: Date): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
  const now = new Date().getTime()
  const target = targetDate.getTime()
  const difference = target - now

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((difference % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
} 