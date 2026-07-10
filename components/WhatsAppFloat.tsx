import { SOCIAL } from '@/lib/constants'
import { WhatsAppIcon } from '@/components/SocialLinks'

export function WhatsAppFloat() {
  return (
    <a
      href={SOCIAL.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-silver sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
