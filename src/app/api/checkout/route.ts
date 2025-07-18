import { NextRequest, NextResponse } from 'next/server'
import { createCheckoutSession } from '@/lib/stripe'
import { ShippingData } from '@/lib/types'

export async function POST(request: NextRequest) {
  try {
    const { priceId, quantity = 1, shippingData } = await request.json()

    if (!priceId) {
      return NextResponse.json(
        { error: 'Price ID is required' },
        { status: 400 }
      )
    }

    if (!shippingData) {
      return NextResponse.json(
        { error: 'Shipping data is required' },
        { status: 400 }
      )
    }

    // Validate required shipping fields
    const requiredFields = ['name', 'email', 'street', 'city', 'state', 'zip']
    for (const field of requiredFields) {
      if (!shippingData[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        )
      }
    }

    const session = await createCheckoutSession(priceId, quantity, shippingData)

    return NextResponse.json({ 
      sessionId: session.sessionId, 
      url: session.url 
    })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 