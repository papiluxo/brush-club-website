import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { COMPANY_INFO } from '@/lib/constants'

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-6">
          {/* Cancel Icon */}
          <div className="mx-auto w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>

          {/* Cancel Message */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-slate-900">
              Order Cancelled
            </h1>
            <p className="text-lg text-slate-600">
              Your order has been cancelled. No payment was processed.
            </p>
          </div>

          {/* Reassurance */}
          <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">
              Still Interested?
            </h2>
            <p className="text-slate-600">
              We understand that sometimes you need to think it over. Our Eco Dental Kit will be here whenever you're ready to make the switch to sustainable dental care.
            </p>
          </div>

          {/* Benefits Reminder */}
          <div className="bg-emerald-50 rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">
              Why Choose {COMPANY_INFO.name}?
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>90% reduction in plastic waste</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>100% biodegradable materials</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>6-month supply for convenience</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>PFAS-free and safe for your health</span>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="bg-slate-50 rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">
              Questions or Concerns?
            </h3>
            <p className="text-slate-600 text-sm">
              If you have any questions about our products or need help with your order, please don't hesitate to contact us at{' '}
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-emerald-600 hover:text-emerald-700 font-medium">
                {COMPANY_INFO.email}
              </a>
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button size="lg">
                Try Again
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="lg">
                Browse More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 