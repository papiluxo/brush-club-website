'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { PRODUCT_DATA } from '@/lib/constants'
import { formatPrice } from '@/lib/utils'

export function CheckoutForm() {
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const totalPrice = PRODUCT_DATA.price * quantity

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
          quantity,
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
    <div className="space-y-6">
      {/* Quantity Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">Quantity</h3>
        <div className="flex items-center space-x-4">
          <label htmlFor="quantity" className="text-slate-700">
            Number of kits:
          </label>
          <select
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-3">
          <div className="text-2xl font-bold text-emerald-600">
            Total: {formatPrice(totalPrice)}
            {quantity > 1 && (
              <div className="text-sm text-slate-600 mt-1">
                {formatPrice(PRODUCT_DATA.price)} each × {quantity} kits
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2 inline-flex w-fit">
            <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span className="text-emerald-700 font-semibold text-sm">FREE SHIPPING INCLUDED</span>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="pt-4 border-t border-slate-200">
        <Button 
          size="lg" 
          className="w-full" 
          onClick={handleCheckout}
          isLoading={isLoading}
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : `Buy Now - ${formatPrice(totalPrice)}`}
        </Button>
        <p className="text-sm text-slate-500 text-center mt-3">
          US shipping only. We reserve the right to cancel and refund orders outside of the USA.
        </p>
      </div>
    </div>
  )
} 