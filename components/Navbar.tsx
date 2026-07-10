'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`${
          isSticky ? 'fixed top-0 left-0 right-0 z-40 bg-navy text-cream shadow-lg' : 'relative bg-navy text-cream'
        } transition-all duration-300`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 font-['Oswald'] font-700 text-xl text-amber"
            >
              <Image
                src="/icon.jpg"
                alt={`${COMPANY.shortName} logo`}
                width={40}
                height={40}
                className="rounded-full"
                priority
              />
              <span>{COMPANY.shortName}</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-cream hover:text-amber transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary py-2 px-4 text-sm glow-red"
              >
                Get Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-navy-accent rounded focus-ring"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 border-t border-navy-accent">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-cream hover:text-amber transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block mt-3 btn-primary py-2 px-4 text-center text-sm"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer for sticky nav */}
      {isSticky && <div className="h-[70px]" />}
    </>
  )
}
