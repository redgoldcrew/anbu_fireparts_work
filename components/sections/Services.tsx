'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { SERVICES } from '@/lib/constants'
import * as Icons from 'lucide-react'

const iconMap: Record<string, any> = Icons

export function Services() {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      id="services"
      className="py-16 sm:py-20 lg:py-24 bg-cream"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 text-center max-w-2xl mx-auto">
          <p className={`section-kicker ${isVisible ? 'animate-reveal' : 'opacity-0'}`}>
            What We Offer
          </p>
          <h2
            className={`section-title mt-2 ${isVisible ? 'animate-reveal' : 'opacity-0'}`}
            style={isVisible ? { animationDelay: '75ms' } : {}}
          >
            Our Specialized Services
          </h2>
          <p
            className={`section-description mt-4 ${
              isVisible ? 'animate-reveal' : 'opacity-0'
            }`}
            style={isVisible ? { animationDelay: '150ms' } : {}}
          >
            Comprehensive fire safety solutions tailored to your commercial and industrial needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Icons.AlertCircle
            return (
              <div
                key={service.id}
                className={`bg-white rounded-lg border-l-4 border-red p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'animate-stagger' : 'opacity-0'
                }`}
                style={
                  isVisible
                    ? { animationDelay: `${index * 75}ms` }
                    : {}
                }
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-navy/10">
                      <Icon size={24} className="text-red" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Oswald'] font-600 text-lg text-navy mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-steel-gray leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <a href="#contact" className="btn-primary inline-block">
            Request a Service
          </a>
        </div>
      </div>
    </section>
  )
}
