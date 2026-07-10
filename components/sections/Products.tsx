'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { PRODUCTS } from '@/lib/constants'
import { Flame } from 'lucide-react'

export function Products() {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      id="products"
      className="py-16 sm:py-20 lg:py-24 bg-navy"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 text-center max-w-2xl mx-auto">
          <p className={`section-kicker text-amber ${isVisible ? 'animate-reveal' : 'opacity-0'}`}>
            Our Offerings
          </p>
          <h2
            className={`font-['Oswald'] font-700 text-3xl sm:text-4xl lg:text-5xl text-cream mt-2 ${
              isVisible ? 'animate-reveal' : 'opacity-0'
            }`}
            style={isVisible ? { animationDelay: '75ms' } : {}}
          >
            Product Range
          </h2>
          <p
            className={`text-steel-gray text-base sm:text-lg leading-relaxed mt-4 ${
              isVisible ? 'animate-reveal' : 'opacity-0'
            }`}
            style={isVisible ? { animationDelay: '150ms' } : {}}
          >
            Premium fire safety equipment and systems for every need.
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          className={`overflow-x-auto pb-4 snap-x snap-mandatory ${
            isVisible ? 'animate-reveal' : 'opacity-0'
          }`}
          style={isVisible ? { animationDelay: '225ms' } : {}}
        >
          <div className="flex gap-6 min-w-min px-4 sm:px-0">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="flex-none w-72 snap-center"
              >
                <div className="bg-navy-accent rounded-lg overflow-hidden border border-amber/20 hover:border-amber/40 transition-colors group">
                  {/* Image Placeholder */}
                  <div className="bg-gradient-to-br from-amber/10 to-red/10 h-48 flex items-center justify-center group-hover:from-amber/20 group-hover:to-red/20 transition-colors">
                    <div className="text-center">
                      <Flame size={48} className="text-red/50 mx-auto mb-2" />
                      <p className="text-sm text-steel-gray font-medium">
                        {product.type}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-['Oswald'] font-700 text-2xl text-amber">
                        {product.capacity}
                      </h3>
                      <span className="text-xs font-mono px-2 py-1 bg-red text-cream rounded">
                        {product.badge}
                      </span>
                    </div>

                    <p className="text-sm text-steel-gray">
                      {product.type}
                    </p>

                    <button className="w-full btn-primary py-2 text-sm">
                      Get Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-6 text-center text-sm text-steel-gray">
          <p className="flex items-center justify-center gap-2">
            <span>Scroll to explore →</span>
          </p>
        </div>
      </div>
    </section>
  )
}
