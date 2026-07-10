import { Phone, Mail } from 'lucide-react'
import { CONTACT, REGISTRATION } from '@/lib/constants'

export function TopBar() {
  return (
    <div className="bg-navy text-white text-sm">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 py-2">
          <div className="flex items-center gap-4">
            <div className="text-xs font-mono text-silver">
              GSTIN: {REGISTRATION.gstin}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${CONTACT.phone[0].replace(/\s/g, '')}`}
              className="flex items-center gap-1.5 hover:text-silver transition-colors"
            >
              <Phone size={14} />
              <span>{CONTACT.phone[0]}</span>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-1.5 hover:text-silver transition-colors"
            >
              <Mail size={14} />
              <span className="hidden sm:inline">{CONTACT.email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
