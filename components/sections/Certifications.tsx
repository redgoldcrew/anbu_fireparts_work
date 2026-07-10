'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { CERTIFICATIONS } from '@/lib/constants'
import * as Icons from 'lucide-react'

const iconMap: Record<string, any> = Icons

export function Certifications() {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      id="certifications"
      className="py-16 sm:py-20 lg:py-24 bg-cream"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 text-center">
          <p className={`section-kicker ${isVisible ? 'animate-reveal' : 'opacity-0'}`}>
            Quality Standards
          </p>
          <h2
            className={`section-title mt-2 ${isVisible ? 'animate-reveal' : 'opacity-0'}`}
            style={isVisible ? { animationDelay: '75ms' } : {}}
          >
            Why Trust Us
          </h2>
        </div>

        {/* Certification Stamps */}
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
          {CERTIFICATIONS.map((cert, index) => {
            const Icon = iconMap[cert.icon] || Icons.CheckCircle2
            return (
              <div
                key={cert.id}
                className={`${
                  isVisible ? 'animate-stagger' : 'opacity-0'
                }`}
                style={
                  isVisible
                    ? { animationDelay: `${index * 75}ms` }
                    : {}
                }
              >
                <div className="relative w-28 h-28 flex items-center justify-center">
                  {/* Outer Circle Border */}
                  <div
                    className="absolute inset-0 rounded-full border-4 border-silver"
                    style={{
                      boxShadow: '0 0 0 2px #F1F2F4, 0 0 0 6px #B7BBC0',
                    }}
                  />

                  {/* Inner Circle */}
                  <div className="absolute inset-2 rounded-full bg-white border-2 border-silver flex items-center justify-center flex-col gap-1">
                    <Icon size={32} className="text-red" />
                    <div className="text-center">
                      <p className="text-xs font-bold text-navy">
                        {cert.title}
                      </p>
                      <p className="text-xs text-steel-gray">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust Statement */}
        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-lg text-navy font-semibold">
            <span className="text-red">100% Safety Compliance</span> | Protecting Lives, Securing Properties
          </p>
        </div>
      </div>
    </section>
  )
}
