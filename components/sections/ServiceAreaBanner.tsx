'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { SERVICE_AREA_MESSAGE, CONTACT } from '@/lib/constants'

export function ServiceAreaBanner() {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      id="service-area"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-red via-red-dark to-red-dark relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div style={{
          backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,.05) 50%, transparent 70%)',
          backgroundSize: '60px 60px',
        }} className="w-full h-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2
            className={`font-['Oswald'] font-700 text-4xl sm:text-5xl lg:text-6xl text-white ${
              isVisible ? 'animate-reveal' : 'opacity-0'
            }`}
          >
            {SERVICE_AREA_MESSAGE.headline}
          </h2>

          <p
            className={`text-lg sm:text-xl text-white/90 leading-relaxed ${
              isVisible ? 'animate-reveal' : 'opacity-0'
            }`}
            style={isVisible ? { animationDelay: '75ms' } : {}}
          >
            {SERVICE_AREA_MESSAGE.description}
          </p>

          {/* Contact Button */}
          <div
            className={`pt-4 ${isVisible ? 'animate-reveal' : 'opacity-0'}`}
            style={isVisible ? { animationDelay: '150ms' } : {}}
          >
            <a
              href={`tel:${CONTACT.phone[0].replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 bg-cream text-red font-['Oswald'] font-700 px-8 py-4 rounded-lg hover:bg-cream/90 transition-colors text-lg"
            >
              📞 Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
