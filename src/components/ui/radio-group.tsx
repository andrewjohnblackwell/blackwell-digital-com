'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface RadioGroupContextValue {
  name: string
  value: string
  onChange: (_value: string) => void
}

const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(null)

export interface RadioGroupProps {
  name: string
  value: string
  onChange: (_value: string) => void
  children: React.ReactNode
  className?: string
}

function RadioGroup({ name, value, onChange, children, className }: RadioGroupProps) {
  return (
    <RadioGroupContext.Provider value={{ name, value, onChange }}>
      <div role="radiogroup" className={cn('flex flex-col gap-3', className)}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  )
}

export interface RadioGroupItemProps {
  value: string
  label?: string
  disabled?: boolean
  className?: string
  id?: string
}

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ value, label, disabled, className, id }, ref) => {
    const ctx = React.useContext(RadioGroupContext)
    if (!ctx) throw new Error('RadioGroupItem must be used within RadioGroup')

    const generatedId = React.useId()
    const inputId = id || generatedId

    return (
      <label
        htmlFor={inputId}
        className={cn(
          'inline-flex items-center gap-3 cursor-pointer select-none',
          disabled && 'opacity-40 cursor-not-allowed',
          className
        )}
      >
        <span className="relative flex h-5 w-5 shrink-0">
          <input
            type="radio"
            id={inputId}
            ref={ref}
            name={ctx.name}
            value={value}
            checked={ctx.value === value}
            onChange={() => ctx.onChange(value)}
            disabled={disabled}
            className="peer sr-only"
          />
          <span className="h-5 w-5 rounded-full border-2 border-white/[0.20] bg-transparent transition-colors duration-normal peer-hover:border-white/[0.40] peer-checked:border-primary peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary-hover" />
          <span className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-primary scale-0 peer-checked:scale-100 transition-transform duration-normal pointer-events-none" />
        </span>
        {label && (
          <span className="text-base text-fg-primary">{label}</span>
        )}
      </label>
    )
  }
)
RadioGroupItem.displayName = 'RadioGroupItem'

export { RadioGroup, RadioGroupItem }
