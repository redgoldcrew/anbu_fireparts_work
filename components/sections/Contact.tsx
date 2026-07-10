'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { ContactForm } from '@/components/ui/ContactForm'
import { CONTACT } from '@/lib/constants'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function Contact() {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-cream"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 text-center max-w-2xl mx-auto">
          <p className={`section-kicker ${isVisible ? 'animate-reveal' : 'opacity-0'}`}>
            Get In Touch
          </p>
          <h2
            className={`section-title mt-2 ${isVisible ? 'animate-reveal' : 'opacity-0'}`}
            style={isVisible ? { animationDelay: '75ms' } : {}}
          >
            Contact Us Today
          </h2>
          <p
            className={`section-description mt-4 ${
              isVisible ? 'animate-reveal' : 'opacity-0'
            }`}
            style={isVisible ? { animationDelay: '150ms' } : {}}
          >
            Have questions about our fire safety solutions? We're here to help!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left - Contact Info */}
          <div
            className={`space-y-6 ${isVisible ? 'animate-reveal' : 'opacity-0'}`}
            style={isVisible ? { animationDelay: '225ms' } : {}}
          >
            {/* Phone */}
            <div className="bg-white rounded-lg p-6 border border-silver/20">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red/10">
                    <Phone size={24} className="text-red" />
                  </div>
                </div>
                <div>
                  <h3 className="font-['Oswald'] font-600 text-lg text-navy mb-2">
                    Phone
                  </h3>
                  <div className="space-y-1">
                    <a
                      href={`tel:${CONTACT.phone[0].replace(/\s/g, '')}`}
                      className="block text-sm text-steel-gray hover:text-red transition-colors"
                    >
                      {CONTACT.phone[0]}
                    </a>
                    <a
                      href={`tel:${CONTACT.phone[1].replace(/\s/g, '')}`}
                      className="block text-sm text-steel-gray hover:text-red transition-colors"
                    >
                      {CONTACT.phone[1]}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg p-6 border border-silver/20">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red/10">
                    <Mail size={24} className="text-red" />
                  </div>
                </div>
                <div>
                  <h3 className="font-['Oswald'] font-600 text-lg text-navy mb-2">
                    Email
                  </h3>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-sm text-steel-gray hover:text-red transition-colors break-all"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-lg p-6 border border-silver/20">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green/10">
                    <MapPin size={24} className="text-green" />
                  </div>
                </div>
                <div>
                  <h3 className="font-['Oswald'] font-600 text-lg text-navy mb-2">
                    Address
                  </h3>
                  <p className="text-sm text-steel-gray leading-relaxed">
                    {CONTACT.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-lg p-6 border border-silver/20">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-navy/10">
                    <Clock size={24} className="text-navy" />
                  </div>
                </div>
                <div>
                  <h3 className="font-['Oswald'] font-600 text-lg text-navy mb-2">
                    Availability
                  </h3>
                  <p className="text-sm text-steel-gray">
                    24/7 Emergency Service
                  </p>
                  <p className="text-xs text-steel-gray mt-1">
                    Always ready to help
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div
            className={`lg:col-span-2 bg-white rounded-lg p-8 border border-silver/20 ${
              isVisible ? 'animate-reveal' : 'opacity-0'
            }`}
            style={isVisible ? { animationDelay: '300ms' } : {}}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
