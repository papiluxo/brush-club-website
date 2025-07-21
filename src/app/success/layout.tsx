import { Suspense } from 'react'

function SuccessLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto"></div>
        <p className="mt-2 text-slate-600">Processing your order...</p>
      </div>
    </div>
  )
}

export default function SuccessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={<SuccessLoading />}>
      {children}
    </Suspense>
  )
} 