'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { COMPANY, CONTACT, REGISTRATION } from '@/lib/constants'

export function About() {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-cream"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - ID Card */}
          <div
            className={`${isVisible ? 'animate-reveal' : 'opacity-0'}`}
          >
            <div className="bg-gradient-to-br from-navy to-navy-accent rounded-lg p-5 text-white shadow-lg border border-silver/20 sm:p-8">
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-silver font-mono">
                    Legal Name
                  </p>
                  <p className="text-lg font-['Oswald'] font-700">
                    {REGISTRATION.gstin}
                  </p>
                  <p className="font-['Oswald'] font-600 text-xl mt-1">
                    {REGISTRATION.udyamReg}
                  </p>
                </div>

                <div className="border-t border-navy-accent pt-4">
                  <p className="text-xs uppercase tracking-widest text-silver font-mono">
                    Business Details
                  </p>
                  <p className="font-['Oswald'] font-600 text-base mt-2 break-words sm:text-base">
                    Legal Name: {COMPANY.legalName}
                  </p>
                  <p className="font-['Oswald'] font-600 text-base mt-2 break-words sm:text-base">
                    Trade Name: {COMPANY.name}
                  </p>
                </div>

                <div className="border-t border-navy-accent pt-4">
                  <p className="text-xs uppercase tracking-widest text-silver font-mono">
                    Registered Office
                  </p>
                  <p className="text-sm mt-2 leading-relaxed">
                    {CONTACT.address}
                  </p>
                </div>

                <div className="border-t border-navy-accent pt-4">
                  <p className="text-xs uppercase tracking-widest text-silver font-mono">
                    Services
                  </p>
                  <div className="grid grid-cols-1 gap-2 mt-2 text-xs min-[400px]:grid-cols-2">
                    {REGISTRATION.licenses.map((license) => (
                      <span key={license} className="bg-silver/10 px-2 py-1 rounded text-silver">
                        {license}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - About Content */}
          <div
            className={`space-y-6 ${isVisible ? 'animate-reveal' : 'opacity-0'}`}
            style={isVisible ? { animationDelay: '150ms' } : {}}
          >
            <div>
              <p className="section-kicker">About Our Company</p>
              <h2 className="section-title mt-2">
                Trusted Fire Safety
                <span className="text-red"> Experts</span>
              </h2>
            </div>

            <p className="section-description">
              {COMPANY.tagline}. With years of experience and a commitment to excellence, we serve
              businesses and communities across Tamil Nadu with reliable, certified fire safety
              solutions.
            </p>

            <p className="section-description">
              Our team of trained professionals understands the critical importance of fire safety
              in protecting lives and property. We combine industry expertise with cutting-edge
              technology to deliver comprehensive solutions tailored to your needs.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-navy/10 rounded-lg p-4">
                <div className="text-2xl font-['Oswald'] font-700 text-red">
                  100%
                </div>
                <p className="text-sm text-navy font-semibold mt-1">
                  Safety Compliant
                </p>
              </div>
              <div className="bg-navy/10 rounded-lg p-4">
                <div className="text-2xl font-['Oswald'] font-700 text-red">
                  24/7
                </div>
                <p className="text-sm text-navy font-semibold mt-1">
                  Support Available
                </p>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-red hover:text-red-dark font-semibold transition-colors"
              >
                Get in Touch →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
