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
      className="py-16 sm:py-20 lg:py-24 bg-cream"
    >
      <div className="container-custom">
        <div className="mb-12 lg:mb-16 text-center max-w-2xl mx-auto">
          <p className={`section-kicker ${isVisible ? 'animate-reveal' : 'opacity-0'}`}>
            Your Safety Partner
          </p>
          <h2
            className={`section-title mt-2 ${
              isVisible ? 'animate-reveal' : 'opacity-0'
            }`}
            style={isVisible ? { animationDelay: '75ms' } : {}}
          >
            Why Choose Anbu Fire Part Works
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

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || Icons.CheckCircle2
            const isCompliance = item.id === 'compliance'
            return (
              <div
                key={item.id}
                className={`${isVisible ? 'animate-stagger' : 'opacity-0'}`}
                style={isVisible ? { animationDelay: `${index * 75}ms` } : {}}
              >
                <div className="relative mx-auto flex aspect-square w-full max-w-[10.5rem] items-center justify-center sm:max-w-[7rem] lg:max-w-none lg:h-28 lg:w-28">
                  <div
                    className="absolute inset-0 rounded-full border-4 border-silver"
                    style={{
                      boxShadow: '0 0 0 2px #F5F5F7, 0 0 0 6px #9CA3AF',
                    }}
                  />
                  <div className="absolute inset-2 flex flex-col items-center justify-center gap-1 rounded-full border-2 border-silver bg-white px-1">
                    <Icon
                      size={24}
                      className={isCompliance ? 'text-green sm:h-7 sm:w-7' : 'text-red sm:h-7 sm:w-7'}
                    />
                    <div className="text-center px-0.5">
                      <p className="text-[11px] font-bold leading-tight text-navy sm:text-xs">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-[10px] leading-tight text-steel-gray sm:text-[10px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center sm:mt-12 lg:mt-16">
          <p className="mb-6 text-base font-semibold text-navy sm:mb-8 sm:text-lg">
            <span className="text-red">100% Safety Compliance</span>
            <span className="mt-1 block text-steel-gray sm:mt-0 sm:inline">
              {' '}
              | Protecting Lives, Securing Properties
            </span>
          </p>
          <a href="#contact" className="btn-primary inline-block w-full sm:w-auto">
            Start Your Fire Safety Journey
          </a>
        </div>
      </div>
    </section>
  )
}
