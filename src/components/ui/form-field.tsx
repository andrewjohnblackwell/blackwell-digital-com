import * as React from 'react'
import { cn } from '@/lib/utils'

export interface FormFieldProps {
  label: string
  error?: string
  helperText?: string
  required?: boolean
  children: React.ReactNode
  className?: string
  htmlFor?: string
}

function FormField({
  label,
  error,
  helperText,
  required,
  children,
  className,
  htmlFor,
}: FormFieldProps) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label
        htmlFor={htmlFor}
        className="text-sm font-medium text-fg-secondary"
      >
        {label}
        {required && (
          <span className="text-error ml-0.5" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error ? (
        <p className="text-xs text-error flex items-center gap-1" role="alert">
          {error}
        </p>
      ) : helperText ? (
        <p className="text-xs text-fg-tertiary">{helperText}</p>
      ) : null}
    </div>
  )
}

export { FormField }
