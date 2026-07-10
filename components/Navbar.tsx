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

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <nav
        className={`${
          isSticky ? 'fixed top-0 left-0 right-0 z-40 bg-navy text-white shadow-lg' : 'relative bg-navy text-white'
        } transition-all duration-300`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-3 sm:py-4">
            {/* Logo */}
            <a
              href="#"
              className="flex min-w-0 items-center gap-2 font-['Oswald'] font-700 text-base text-red sm:text-xl"
            >
              <Image
                src="/icon.jpg"
                alt={`${COMPANY.shortName} logo`}
                width={40}
                height={40}
                className="h-8 w-8 shrink-0 rounded-full sm:h-10 sm:w-10"
                priority
              />
              <span className="truncate">{COMPANY.shortName}</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-silver transition-colors font-medium"
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
            <div className="md:hidden border-t border-navy-accent pb-4 pt-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-2 py-3 text-base text-white transition-colors hover:bg-navy-accent hover:text-silver"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary mt-3 block py-3 px-4 text-center text-sm"
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
