'use client'

import { useState, useEffect } from 'react'
import { getNextSundayRestockDate, calculateTimeUntil } from '@/lib/utils'
import { CountdownTimer as CountdownTimerType } from '@/lib/types'

interface CountdownTimerProps {
  className?: string
}

export function CountdownTimer({ className }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<CountdownTimerType>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const updateTimer = () => {
      const nextRestock = getNextSundayRestockDate()
      const remaining = calculateTimeUntil(nextRestock)
      setTimeLeft(remaining)
    }

    // Update immediately
    updateTimer()

    // Update every second
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return (
      <div className={`grid grid-cols-4 gap-4 ${className}`}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="text-center animate-pulse">
            <div className="bg-slate-200 rounded-lg p-4 mb-2">
              <div className="h-8 bg-slate-300 rounded"></div>
            </div>
            <div className="h-4 bg-slate-200 rounded w-16 mx-auto"></div>
          </div>
        ))}
      </div>
    )
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' }
  ]

  return (
    <div className={`grid grid-cols-4 gap-4 ${className}`}>
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="text-center">
          <div className="bg-white rounded-lg border-2 border-emerald-100 p-4 shadow-sm">
            <div className="text-3xl font-bold text-emerald-600 tabular-nums">
              {unit.value.toString().padStart(2, '0')}
            </div>
          </div>
          <div className="text-sm font-medium text-slate-600 mt-2">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  )
}

export function CountdownSection() {
  return (
    <div className="bg-emerald-50 rounded-xl p-6 md:p-8">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-2">
          Next Restock
        </h3>
        <p className="text-slate-600">
          Fresh supplies every Sunday at 9:00 AM EST
        </p>
      </div>
      <CountdownTimer />
    </div>
  )
} 