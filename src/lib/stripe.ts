import Stripe from 'stripe'

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

export async function createCheckoutSession(priceId: string, quantity: number = 1) {
  try {
    const stripe = getStripeServer()

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
      // Enable shipping address collection
      shipping_address_collection: {
        allowed_countries: ['US'],
      },
      // Configure shipping options
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
      // Create customer for future reference
      customer_creation: 'always',
      metadata: {
        productId: 'eco-dental-kit',
        quantity: quantity.toString(),
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