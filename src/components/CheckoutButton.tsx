'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { PRODUCT_DATA } from '@/lib/constants'
import { formatPrice } from '@/lib/utils'

export function CheckoutButton() {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async () => {
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: PRODUCT_DATA.priceId,
          quantity: 1,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create checkout session')
      }

      const { url } = await response.json()
      
      if (url) {
        window.location.href = url
      } else {
        throw new Error('No checkout URL returned')
      }
    } catch (error) {
      console.error('Error creating checkout session:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button 
      size="lg" 
      className="w-full" 
      onClick={handleCheckout}
      isLoading={isLoading}
      disabled={isLoading}
    >
      {isLoading ? 'Processing...' : `Buy Now - ${formatPrice(PRODUCT_DATA.price)}`}
    </Button>
  )
} 