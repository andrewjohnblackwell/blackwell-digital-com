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
