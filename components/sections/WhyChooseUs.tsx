'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { WHY_CHOOSE_US } from '@/lib/constants'
import * as Icons from 'lucide-react'

const iconMap: Record<string, any> = Icons

export function WhyChooseUs() {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      id="why-us"
      className="py-16 sm:py-20 lg:py-24 bg-navy"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 text-center max-w-2xl mx-auto">
          <p className={`section-kicker text-amber ${isVisible ? 'animate-reveal' : 'opacity-0'}`}>
            Your Safety Partner
          </p>
          <h2
            className={`font-['Oswald'] font-700 text-3xl sm:text-4xl lg:text-5xl text-cream mt-2 ${
              isVisible ? 'animate-reveal' : 'opacity-0'
            }`}
            style={isVisible ? { animationDelay: '75ms' } : {}}
          >
            Why Choose Anbu Fire
          </h2>
          <p
            className={`text-steel-gray text-base sm:text-lg leading-relaxed mt-4 ${
              isVisible ? 'animate-reveal' : 'opacity-0'
            }`}
            style={isVisible ? { animationDelay: '150ms' } : {}}
          >
            Experience excellence in fire safety with our dedicated team and proven track record.
          </p>
        </div>

        {/* Badges Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${
            isVisible ? 'animate-reveal' : 'opacity-0'
          }`}
          style={isVisible ? { animationDelay: '225ms' } : {}}
        >
          {WHY_CHOOSE_US.map((item) => {
            const Icon = iconMap[item.icon] || Icons.CheckCircle2
            return (
              <div
                key={item.id}
                className="badge-stamp rounded-full p-6 bg-navy-accent flex flex-col items-center text-center group"
              >
                <div className="h-14 w-14 rounded-full bg-amber/20 group-hover:bg-amber/30 flex items-center justify-center mb-4 transition-colors">
                  <Icon size={24} className="text-amber" />
                </div>
                <h3 className="font-['Oswald'] font-600 text-lg text-cream mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-steel-gray">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <a href="#contact" className="btn-primary inline-block">
            Start Your Fire Safety Journey
          </a>
        </div>
      </div>
    </section>
  )
}
