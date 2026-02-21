'use client'

import * as React from 'react'
import { cva } from 'class-variance-authority'
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Toast as ToastType, ToastVariant } from './use-toast'

const toastVariants = cva(
  'relative flex items-start gap-3 rounded-xl border bg-bg-surface p-4 pr-10 shadow-xl transition-all duration-moderate ease-decelerate animate-in slide-in-from-right-full fade-in',
  {
    variants: {
      variant: {
        success: 'border-success-border',
        error: 'border-error-border',
        warning: 'border-warning-border',
        info: 'border-info-border',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
)

const icons: Record<ToastVariant, React.ReactNode> = {
  success: <CheckCircle className="h-5 w-5 shrink-0 text-success" />,
  error: <AlertCircle className="h-5 w-5 shrink-0 text-error" />,
  warning: <AlertTriangle className="h-5 w-5 shrink-0 text-warning" />,
  info: <Info className="h-5 w-5 shrink-0 text-info" />,
}

const AUTO_DISMISS: Record<ToastVariant, number | null> = {
  success: 5000,
  info: 5000,
  warning: 8000,
  error: null,
}

interface ToastItemProps {
  toast: ToastType
  onDismiss: (_id: string) => void
}

function ToastItem({ toast, onDismiss }: ToastItemProps) {
  React.useEffect(() => {
    const duration = AUTO_DISMISS[toast.variant]
    if (duration === null) return
    const timer = setTimeout(() => onDismiss(toast.id), duration)
    return () => clearTimeout(timer)
  }, [toast.id, toast.variant, onDismiss])

  return (
    <div
      className={cn(toastVariants({ variant: toast.variant }))}
      role={toast.variant === 'error' || toast.variant === 'warning' ? 'alert' : 'status'}
      aria-live={toast.variant === 'error' ? 'assertive' : 'polite'}
    >
      {icons[toast.variant]}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-fg-primary">{toast.title}</p>
        {toast.message && (
          <p className="mt-0.5 text-xs text-fg-secondary">{toast.message}</p>
        )}
      </div>
      <button
        onClick={() => onDismiss(toast.id)}
        className="absolute right-3 top-3 inline-flex h-5 w-5 items-center justify-center rounded text-fg-tertiary transition-colors duration-normal hover:text-fg-secondary"
        aria-label="Dismiss notification"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}

export { ToastItem, toastVariants }
