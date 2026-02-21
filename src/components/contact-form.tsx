'use client'

import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FormField } from '@/components/ui/form-field'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const INQUIRY_OPTIONS = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'services', label: 'Services' },
  { value: 'quickscan-followup', label: 'QuickScan Follow-up' },
  { value: 'partnership', label: 'Partnership' },
] as const

function ContactForm() {
  const [status, setStatus] = React.useState<FormStatus>('idle')
  const [serverError, setServerError] = React.useState('')

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  async function onSubmit(data: ContactFormData) {
    setStatus('submitting')
    setServerError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error('Submission failed')
      }

      setStatus('success')
    } catch {
      setStatus('error')
      setServerError(
        'Something went wrong. Please try again, or email us directly if the problem persists.'
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-success-border bg-success-bg/30 p-8 text-center">
        <p className="text-lg font-medium text-fg-primary mb-2">
          Message received.
        </p>
        <p className="text-fg-secondary mb-6">
          We&apos;ll respond within one business day.
        </p>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => {
            reset()
            setStatus('idle')
          }}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Name" required error={errors.name?.message} htmlFor="name">
          <Input
            id="name"
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            {...register('name')}
          />
        </FormField>

        <FormField label="Email" required error={errors.email?.message} htmlFor="email">
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            {...register('email')}
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Company Name" required error={errors.company?.message} htmlFor="company">
          <Input
            id="company"
            placeholder="Your company name"
            aria-invalid={!!errors.company}
            {...register('company')}
          />
        </FormField>

        <FormField label="Phone Number" error={errors.phone?.message} htmlFor="phone">
          <Input
            id="phone"
            type="tel"
            placeholder="(555) 123-4567"
            aria-invalid={!!errors.phone}
            {...register('phone')}
          />
        </FormField>
      </div>

      <FormField
        label="Inquiry Type"
        required
        error={errors.inquiryType?.message}
        htmlFor="inquiryType"
      >
        <Controller
          name="inquiryType"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger id="inquiryType" aria-invalid={!!errors.inquiryType}>
                <SelectValue placeholder="— Select —" />
              </SelectTrigger>
              <SelectContent>
                {INQUIRY_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </FormField>

      <FormField label="Message" required error={errors.message?.message} htmlFor="message">
        <Textarea
          id="message"
          placeholder="Tell us about your situation..."
          aria-invalid={!!errors.message}
          {...register('message')}
        />
      </FormField>

      {serverError && (
        <p className="text-sm text-error" role="alert">
          {serverError}
        </p>
      )}

      <Button type="submit" size="lg" loading={status === 'submitting'}>
        Send Message
      </Button>
    </form>
  )
}

export { ContactForm }
