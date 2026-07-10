import { Phone, Mail, MapPin } from 'lucide-react'
import { COMPANY, CONTACT, FOOTER } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-['Oswald'] font-700 text-lg mb-4 text-amber">
              {COMPANY.shortName}
            </h3>
            <p className="text-sm text-steel-gray leading-relaxed mb-4">
              {COMPANY.tagline}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <Phone size={16} className="text-amber flex-shrink-0" />
                <a href={`tel:${CONTACT.phone[0].replace(/\s/g, '')}`} className="hover:text-amber transition-colors">
                  {CONTACT.phone[0]}
                </a>
              </div>
              <div className="flex gap-2">
                <Phone size={16} className="text-amber flex-shrink-0" />
                <a href={`tel:${CONTACT.phone[1].replace(/\s/g, '')}`} className="hover:text-amber transition-colors">
                  {CONTACT.phone[1]}
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-['Oswald'] font-700 text-lg mb-4 text-amber">
              {FOOTER.services.title}
            </h3>
            <ul className="space-y-2">
              {FOOTER.services.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-steel-gray hover:text-amber transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-['Oswald'] font-700 text-lg mb-4 text-amber">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {FOOTER.company.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-steel-gray hover:text-amber transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-['Oswald'] font-700 text-lg mb-4 text-amber">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex gap-2 text-sm">
                <MapPin size={16} className="text-amber flex-shrink-0 mt-0.5" />
                <p className="text-steel-gray">{CONTACT.address}</p>
              </div>
              <div className="flex gap-2 text-sm">
                <Mail size={16} className="text-amber flex-shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="text-steel-gray hover:text-amber transition-colors">
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-navy-accent pt-8">
          <p className="text-center text-sm text-steel-gray">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved. | 
            <span className="ml-2">Protecting Lives, Securing Properties</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
