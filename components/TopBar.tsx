import { Phone, Mail } from 'lucide-react'
import { CONTACT, REGISTRATION } from '@/lib/constants'

export function TopBar() {
  return (
    <div className="bg-navy text-white text-sm">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-between gap-2 py-2 sm:flex-row">
          <div className="text-center text-[11px] font-mono text-silver sm:text-left sm:text-xs">
            GSTIN: {REGISTRATION.gstin}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:gap-6">
            <a
              href={`tel:${CONTACT.phone[0].replace(/\s/g, '')}`}
              className="flex items-center gap-1.5 text-xs hover:text-silver transition-colors sm:text-sm"
            >
              <Phone size={14} className="shrink-0" />
              <span>{CONTACT.phone[0]}</span>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-1.5 text-xs hover:text-silver transition-colors sm:text-sm"
            >
              <Mail size={14} className="shrink-0" />
              <span className="hidden sm:inline">{CONTACT.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
