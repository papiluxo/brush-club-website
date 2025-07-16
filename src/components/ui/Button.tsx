import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  asChild?: boolean
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, asChild, children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none'
    
    const variants = {
      primary: 'bg-emerald-600 text-white border-2 border-emerald-600 hover:bg-emerald-700 hover:border-emerald-700 focus-visible:ring-emerald-500 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 font-semibold',
      secondary: 'bg-slate-900 text-white border-2 border-slate-900 hover:bg-slate-800 hover:border-slate-800 focus-visible:ring-slate-500 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 font-semibold',
      outline: 'bg-transparent text-emerald-600 border-2 border-emerald-600 hover:bg-emerald-600 hover:text-white focus-visible:ring-emerald-500 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 font-semibold',
      ghost: 'bg-slate-100 text-slate-700 border-2 border-slate-200 hover:bg-slate-200 hover:border-slate-300 focus-visible:ring-slate-500 shadow-sm hover:shadow-md transform hover:scale-105 active:scale-95'
    }
    
    const sizes = {
      sm: 'h-10 px-6 text-sm rounded-xl min-w-[100px]',
      md: 'h-12 px-8 text-base rounded-xl min-w-[120px]',
      lg: 'h-14 px-10 text-lg rounded-xl min-w-[140px] font-bold'
    }

    if (asChild) {
      return children
    }

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
      >
        {isLoading && (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, type ButtonProps } 