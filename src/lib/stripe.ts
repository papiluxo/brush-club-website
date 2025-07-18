import { loadStripe } from '@stripe/stripe-js'
import Stripe from 'stripe'
import { ShippingData } from './types'

// Client-side Stripe
// Trigger deployment
export const getStripe = () => {
  return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
}

// Server-side Stripe - lazy initialization
let stripeInstance: Stripe | null = null

export const getStripeServer = () => {
  if (!stripeInstance) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY is not configured')
    }
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-06-30.basil',
    })
  }
  return stripeInstance
}

export async function createCheckoutSession(priceId: string, quantity: number = 1, shippingData?: ShippingData) {
  try {
    const stripe = getStripeServer()
    
    // Prepare shipping address for Stripe
    const shippingAddress = shippingData ? {
      line1: shippingData.street,
      line2: shippingData.apartment || undefined,
      city: shippingData.city,
      state: shippingData.state,
      postal_code: shippingData.zip,
      country: 'US', // Fixed to US as per requirements
    } : undefined

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN || 'http://localhost:3000'}/cancel`,
      // Pre-fill customer information
      ...(shippingData && {
        customer_email: shippingData.email,
        shipping_address_collection: {
          allowed_countries: ['US'],
        },
        customer_creation: 'always',
      }),
      // Pre-fill shipping address if provided
      ...(shippingAddress && {
        shipping_options: [
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: {
                amount: 0, // Free shipping
                currency: 'usd',
              },
              display_name: 'Free Shipping',
              delivery_estimate: {
                minimum: {
                  unit: 'business_day',
                  value: 3,
                },
                maximum: {
                  unit: 'business_day',
                  value: 7,
                },
              },
            },
          },
        ],
      }),
      metadata: {
        productId: 'eco-dental-kit',
        quantity: quantity.toString(),
        ...(shippingData && {
          customer_name: shippingData.name,
          customer_email: shippingData.email,
          customer_phone: shippingData.phone || '',
          shipping_street: shippingData.street,
          shipping_apartment: shippingData.apartment || '',
          shipping_city: shippingData.city,
          shipping_state: shippingData.state,
          shipping_zip: shippingData.zip,
        }),
      },
    })

    return { sessionId: session.id, url: session.url }
  } catch (error) {
    console.error('Error creating checkout session:', error)
    throw error
  }
}

export async function getCheckoutSession(sessionId: string) {
  try {
    const stripe = getStripeServer()
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    return session
  } catch (error) {
    console.error('Error retrieving checkout session:', error)
    throw error
  }
} 