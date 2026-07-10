'use client'

import { useState } from 'react'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'

interface FormState {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

interface SubmitState {
  loading: boolean
  success: boolean
  error: string | null
}

const INITIAL_FORM: FormState = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
}

const SERVICE_OPTIONS = [
  'Fire Extinguisher Solutions',
  'Fire Alarm System',
  'Fire Hydrant Pipe Line',
  'Fire Bucket Supply',
  'Commercial & Industrial Safety',
  'Maintenance & Testing',
  'Other',
]

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [submit, setSubmit] = useState<SubmitState>({
    loading: false,
    success: false,
    error: null,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = (): string | null => {
    if (!form.name.trim()) return 'Please enter your name'
    if (!form.phone.trim()) return 'Please enter your phone number'
    if (!form.email.trim()) return 'Please enter your email'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return 'Please enter a valid email address'
    }
    if (!form.service) return 'Please select a service'
    if (!form.message.trim()) return 'Please enter your message'
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationError = validateForm()
    if (validationError) {
      setSubmit({
        loading: false,
        success: false,
        error: validationError,
      })
      return
    }

    setSubmit({ loading: true, success: false, error: null })

    try {
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = (await response.json()) as { success?: boolean; error?: string }

      if (!response.ok || !data.success) {
        throw new Error(data.error ?? 'Failed to send message. Please try again.')
      }

      setSubmit({
        loading: false,
        success: true,
        error: null,
      })
      setForm(INITIAL_FORM)

      setTimeout(() => {
        setSubmit({ loading: false, success: false, error: null })
      }, 5000)
    } catch (error) {
      setSubmit({
        loading: false,
        success: false,
        error:
          error instanceof Error
            ? error.message
            : 'Failed to send message. Please try again.',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
          Full Name *
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your full name"
          className="w-full px-4 py-3 border border-steel-gray/30 rounded-lg focus-ring focus:ring-2 focus:ring-amber focus:border-transparent"
          required
          disabled={submit.loading}
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
          Phone Number *
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+91 XXXXXXXXXX"
          className="w-full px-4 py-3 border border-steel-gray/30 rounded-lg focus-ring focus:ring-2 focus:ring-amber focus:border-transparent"
          required
          disabled={submit.loading}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full px-4 py-3 border border-steel-gray/30 rounded-lg focus-ring focus:ring-2 focus:ring-amber focus:border-transparent"
          required
          disabled={submit.loading}
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-navy mb-2">
          Service Interested In *
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-steel-gray/30 rounded-lg focus-ring focus:ring-2 focus:ring-amber focus:border-transparent appearance-none bg-white"
          required
          disabled={submit.loading}
        >
          <option value="">Select a service...</option>
          {SERVICE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your fire safety needs..."
          rows={5}
          className="w-full px-4 py-3 border border-steel-gray/30 rounded-lg focus-ring focus:ring-2 focus:ring-amber focus:border-transparent resize-none"
          required
          disabled={submit.loading}
        />
      </div>

      {/* Error Message */}
      {submit.error && (
        <div className="flex gap-3 p-4 bg-red/10 border border-red rounded-lg text-red">
          <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
          <p className="text-sm">{submit.error}</p>
        </div>
      )}

      {/* Success Message */}
      {submit.success && (
        <div className="flex gap-3 p-4 bg-green/10 border border-green rounded-lg text-green">
          <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
          <p className="text-sm">Thank you! We will contact you shortly.</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={submit.loading}
        className="w-full btn-primary py-3 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
      >
        {submit.loading && <Loader2 size={20} className="animate-spin" />}
        {submit.loading ? 'Sending...' : 'Send Message'}
      </button>

      <p className="text-xs text-steel-gray text-center">
        We respect your privacy. Your information will only be used to respond to your inquiry.
      </p>
    </form>
  )
}
