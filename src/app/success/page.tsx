'use client';

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { COMPANY_INFO } from '@/lib/constants'
import LogRocketComponent from '@/components/LogRocket'
import { getCheckoutSessionData } from '@/lib/utils'

interface UserInfo {
  userId?: string;
  email?: string;
  name?: string;
  subscriptionType?: string;
  customerType?: string;
}

export default function SuccessPage() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    if (sessionId) {
      // Fetch checkout session data and identify user with LogRocket
      getCheckoutSessionData(sessionId).then((data) => {
        if (data?.userInfo) {
          setUserInfo(data.userInfo)
        }
      })
    }
  }, [sessionId])

  return (
    <>
      {/* LogRocket with user identification */}
      <LogRocketComponent userInfo={userInfo || undefined} />
      
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="space-y-6">
            {/* Success Icon */}
            <div className="mx-auto w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Success Message */}
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-slate-900">
                Thank You for Your Order{userInfo?.name ? `, ${userInfo.name.split(' ')[0]}` : ''}!
              </h1>
              <p className="text-lg text-slate-600">
                Your payment has been successfully processed. You'll receive a confirmation email shortly.
              </p>
            </div>

            {/* Order Details */}
            <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">
                What's Next?
              </h2>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-emerald-600 font-bold text-sm">1</span>
                  </div>
                  <p className="text-slate-600">
                    You'll receive an email confirmation with your order details and tracking information.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-emerald-600 font-bold text-sm">2</span>
                  </div>
                  <p className="text-slate-600">
                    Your Eco Dental Kit will be shipped within 1-2 business days.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-emerald-600 font-bold text-sm">3</span>
                  </div>
                  <p className="text-slate-600">
                    Start your sustainable dental journey with your new bamboo toothbrushes and corn fiber floss!
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-slate-50 rounded-xl p-6 space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">
                Need Help?
              </h3>
              <p className="text-slate-600 text-sm">
                If you have any questions about your order, please contact us at{' '}
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-emerald-600 hover:text-emerald-700 font-medium">
                  {COMPANY_INFO.email}
                </a>
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg">
                  Continue Shopping
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 