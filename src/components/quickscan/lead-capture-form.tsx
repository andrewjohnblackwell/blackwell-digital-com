'use client'

import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { leadCaptureSchema, type LeadCaptureData } from '@/lib/validations'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FormField } from '@/components/ui/form-field'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const ROLE_OPTIONS = [
  { value: 'owner-ceo', label: 'Owner / CEO' },
  { value: 'coo-vp-ops', label: 'COO / VP Ops' },
  { value: 'cmo-vp-marketing', label: 'CMO / VP Marketing' },
  { value: 'other', label: 'Other' },
] as const

const SIZE_OPTIONS = [
  { value: '1-10', label: '1–10 employees' },
  { value: '11-50', label: '11–50 employees' },
  { value: '51-150', label: '51–150 employees' },
  { value: '150+', label: '150+ employees' },
] as const

interface LeadCaptureFormProps {
  onSubmit: (_data: LeadCaptureData) => void
  onBack: () => void
  loading?: boolean
  error?: string
}

function LeadCaptureForm({ onSubmit, onBack, loading, error }: LeadCaptureFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LeadCaptureData>({
    resolver: zodResolver(leadCaptureSchema),
  })

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl md:text-2xl font-heading font-semibold text-fg-primary mb-2">
          Almost Done — Where Should We Send Your Results?
        </h2>
        <p className="text-fg-secondary">
          Your QuickScan results are ready. Enter your details below and we&apos;ll
          deliver your personalized maturity score, dimension breakdown, and
          recommended next steps.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField label="Name" required error={errors.name?.message} htmlFor="qs-name">
            <Input
              id="qs-name"
              placeholder="Your full name"
              aria-invalid={!!errors.name}
              {...register('name')}
            />
          </FormField>

          <FormField label="Work Email" required error={errors.email?.message} htmlFor="qs-email">
            <Input
              id="qs-email"
              type="email"
              placeholder="you@company.com"
              aria-invalid={!!errors.email}
              {...register('email')}
            />
          </FormField>
        </div>

        <FormField label="Company Name" required error={errors.company?.message} htmlFor="qs-company">
          <Input
            id="qs-company"
            placeholder="Your company name"
            aria-invalid={!!errors.company}
            {...register('company')}
          />
        </FormField>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField label="Your Role" required error={errors.role?.message} htmlFor="qs-role">
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger id="qs-role" aria-invalid={!!errors.role}>
                    <SelectValue placeholder="— Select —" />
                  </SelectTrigger>
                  <SelectContent>
                    {ROLE_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </FormField>

          <FormField
            label="Company Size"
            required
            error={errors.companySize?.message}
            htmlFor="qs-size"
          >
            <Controller
              name="companySize"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger id="qs-size" aria-invalid={!!errors.companySize}>
                    <SelectValue placeholder="— Select —" />
                  </SelectTrigger>
                  <SelectContent>
                    {SIZE_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </FormField>
        </div>

        <p className="text-xs text-fg-tertiary">
          Your information stays private. We don&apos;t sell data or spam your inbox.
          You&apos;ll receive your results and occasional insights — unsubscribe anytime.
        </p>

        {error && (
          <p className="text-sm text-error" role="alert">
            {error}
          </p>
        )}

        <div className="flex items-center justify-between pt-2">
          <Button variant="ghost" size="sm" type="button" onClick={onBack}>
            &larr; Previous
          </Button>
          <Button type="submit" size="lg" loading={loading}>
            Get My Results &rarr;
          </Button>
        </div>
      </form>
    </div>
  )
}

export { LeadCaptureForm }
