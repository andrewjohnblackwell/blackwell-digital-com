'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { newsletterSchema, type NewsletterData } from '@/lib/validations'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

function NewsletterForm() {
  const [status, setStatus] = React.useState<FormStatus>('idle')
  const [serverError, setServerError] = React.useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
  })

  async function onSubmit(data: NewsletterData) {
    setStatus('submitting')
    setServerError('')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error('Subscription failed')
      }

      setStatus('success')
    } catch {
      setStatus('error')
      setServerError('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-success-border bg-success-bg/30 p-6 text-center">
        <p className="text-base font-medium text-fg-primary mb-1">
          You&apos;re in.
        </p>
        <p className="text-sm text-fg-secondary">
          Look for your first email this month.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <Input
            type="email"
            placeholder="Your work email"
            aria-label="Email address"
            aria-invalid={!!errors.email}
            {...register('email')}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-error" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
        <Button type="submit" size="md" loading={status === 'submitting'}>
          Subscribe
        </Button>
      </div>
      {serverError && (
        <p className="text-xs text-error" role="alert">
          {serverError}
        </p>
      )}
      <p className="text-xs text-fg-tertiary">
        One email per month. No spam. Unsubscribe anytime.
      </p>
    </form>
  )
}

export { NewsletterForm }
