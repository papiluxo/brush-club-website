'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { PRODUCT_DATA } from '@/lib/constants'
import { formatPrice } from '@/lib/utils'
import { ShippingData } from '@/lib/types'

export function CheckoutForm() {
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [shippingData, setShippingData] = useState<ShippingData>({
    name: '',
    email: '',
    phone: '',
    street: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    country: 'US'
  })

  const totalPrice = PRODUCT_DATA.price * quantity

  const handleInputChange = (field: keyof ShippingData, value: string) => {
    setShippingData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const validateForm = () => {
    const required = ['name', 'email', 'street', 'city', 'state', 'zip']
    for (const field of required) {
      if (!shippingData[field as keyof ShippingData].trim()) {
        alert(`Please fill in your ${field}`)
        return false
      }
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(shippingData.email)) {
      alert('Please enter a valid email address')
      return false
    }

    // ZIP code validation (basic US format)
    const zipRegex = /^\d{5}(-\d{4})?$/
    if (!zipRegex.test(shippingData.zip)) {
      alert('Please enter a valid ZIP code')
      return false
    }

    return true
  }

  const handleCheckout = async () => {
    if (!validateForm()) return

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
          shippingData,
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
    <div className="space-y-8">
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
            className="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="text-xl font-bold text-emerald-600">
          Total: {formatPrice(totalPrice)}
          {quantity > 1 && (
            <span className="text-sm text-slate-600 ml-2">
              ({formatPrice(PRODUCT_DATA.price)} each)
            </span>
          )}
        </div>
      </div>

      {/* Shipping Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">Shipping Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="md:col-span-2">
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              value={shippingData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={shippingData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="john@example.com"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              value={shippingData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="(555) 123-4567"
            />
          </div>

          {/* Street Address */}
          <div className="md:col-span-2">
            <label htmlFor="street" className="block text-sm font-medium text-slate-700 mb-1">
              Street Address *
            </label>
            <input
              type="text"
              id="street"
              value={shippingData.street}
              onChange={(e) => handleInputChange('street', e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="123 Main Street"
              required
            />
          </div>

          {/* Apartment/Unit */}
          <div className="md:col-span-2">
            <label htmlFor="apartment" className="block text-sm font-medium text-slate-700 mb-1">
              Apartment/Unit (Optional)
            </label>
            <input
              type="text"
              id="apartment"
              value={shippingData.apartment}
              onChange={(e) => handleInputChange('apartment', e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Apt 4B"
            />
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-1">
              City *
            </label>
            <input
              type="text"
              id="city"
              value={shippingData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="New York"
              required
            />
          </div>

          {/* State */}
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-slate-700 mb-1">
              State *
            </label>
            <select
              id="state"
              value={shippingData.state}
              onChange={(e) => handleInputChange('state', e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              required
            >
              <option value="">Select State</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>

          {/* ZIP Code */}
          <div>
            <label htmlFor="zip" className="block text-sm font-medium text-slate-700 mb-1">
              ZIP Code *
            </label>
            <input
              type="text"
              id="zip"
              value={shippingData.zip}
              onChange={(e) => handleInputChange('zip', e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="12345"
              required
            />
          </div>

          {/* Country (Fixed to US) */}
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1">
              Country
            </label>
            <input
              type="text"
              id="country"
              value="United States"
              disabled
              className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-slate-50 text-slate-500"
            />
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="pt-6 border-t border-slate-200">
        <Button 
          size="lg" 
          className="w-full" 
          onClick={handleCheckout}
          isLoading={isLoading}
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : `Complete Order - ${formatPrice(totalPrice)}`}
        </Button>
        <p className="text-sm text-slate-500 text-center mt-3">
          * Required fields. We only ship to US addresses.
        </p>
      </div>
    </div>
  )
} 