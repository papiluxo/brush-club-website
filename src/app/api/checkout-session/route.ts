import { NextRequest, NextResponse } from 'next/server'
import { getCheckoutSession } from '@/lib/stripe'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get('session_id')

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      )
    }

    const session = await getCheckoutSession(sessionId)

    // Extract user information for LogRocket identification
    const userInfo = {
      userId: session.customer as string,
      email: session.customer_details?.email || '',
      name: session.customer_details?.name || '',
      subscriptionType: 'customer',
      customerType: 'eco-dental-kit-buyer',
      amount: session.amount_total,
      currency: session.currency,
    }

    return NextResponse.json({ userInfo })
  } catch (error) {
    console.error('Error fetching checkout session:', error)
    return NextResponse.json(
      { error: 'Failed to fetch session data' },
      { status: 500 }
    )
  }
} 