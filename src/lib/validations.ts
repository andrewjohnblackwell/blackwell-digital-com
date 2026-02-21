import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  email: z.string().min(1, 'Email is required.').email('Please enter a valid email address.'),
  company: z.string().min(1, 'Company Name is required.'),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[+\d\s().-]{7,20}$/.test(val),
      'Please enter a valid phone number.'
    ),
  inquiryType: z.enum(['general', 'services', 'quickscan-followup', 'partnership'], {
    required_error: 'Please select an option for Inquiry Type.',
  }),
  message: z.string().min(1, 'Message is required.'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const leadCaptureSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  email: z.string().min(1, 'Email is required.').email('Please enter a valid email address.'),
  company: z.string().min(1, 'Company Name is required.'),
  role: z.enum(['owner-ceo', 'coo-vp-ops', 'cmo-vp-marketing', 'other'], {
    required_error: 'Please select your role.',
  }),
  companySize: z.enum(['1-10', '11-50', '51-150', '150+'], {
    required_error: 'Please select your company size.',
  }),
})

export type LeadCaptureData = z.infer<typeof leadCaptureSchema>

const answerSchema = z.object({
  questionId: z.string(),
  value: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
})

export const quickscanSubmitSchema = z.object({
  answers: z.array(answerSchema).min(1, 'At least one answer is required.'),
  lead: leadCaptureSchema,
})

export type QuickScanSubmitData = z.infer<typeof quickscanSubmitSchema>

export const newsletterSchema = z.object({
  email: z.string().min(1, 'Email is required.').email('Please enter a valid email address.'),
})

export type NewsletterData = z.infer<typeof newsletterSchema>
