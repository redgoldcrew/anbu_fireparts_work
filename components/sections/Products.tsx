'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { PRODUCTS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight, Flame } from 'lucide-react'

const EDGE_PADDING = 'max(1rem,calc((100vw-80rem)/2+2rem))'

export function Products() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  })

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return

    const maxScroll = el.scrollWidth - el.clientWidth
    setCanScrollLeft(el.scrollLeft > 8)
    setCanScrollRight(maxScroll > 8 && el.scrollLeft < maxScroll - 8)
    setScrollProgress(maxScroll > 0 ? (el.scrollLeft / maxScroll) * 100 : 0)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    updateScrollState()

    const resizeObserver = new ResizeObserver(updateScrollState)
    resizeObserver.observe(el)

    return () => resizeObserver.disconnect()
  }, [updateScrollState, isVisible])

  const scrollByCard = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return

    const card = el.querySelector<HTMLElement>('[data-product-card]')
    const gap = 24
    const step = card ? card.offsetWidth + gap : 312

    el.scrollBy({
      left: direction === 'left' ? -step : step,
      behavior: 'smooth',
    })
  }

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
      </div>

      {/* Full-bleed horizontal scroll */}
      <div
        className={cn(
          'relative left-1/2 w-screen -translate-x-1/2',
          isVisible ? 'animate-reveal' : 'opacity-0',
        )}
        style={isVisible ? { animationDelay: '225ms' } : {}}
      >
        <div
          className={cn(
            'pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-navy to-transparent transition-opacity duration-300',
            canScrollLeft ? 'opacity-100' : 'opacity-0',
          )}
          aria-hidden
        />
        <div
          className={cn(
            'pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24 bg-gradient-to-l from-navy to-transparent transition-opacity duration-300',
            canScrollRight ? 'opacity-100' : 'opacity-0',
          )}
          aria-hidden
        />

        <button
          type="button"
          onClick={() => scrollByCard('left')}
          disabled={!canScrollLeft}
          aria-label="Scroll products left"
          className={cn(
            'absolute left-2 sm:left-4 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-amber/30 bg-navy-accent/95 text-amber shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-amber/60 hover:bg-navy-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber',
            canScrollLeft
              ? 'opacity-100 translate-x-0'
              : 'pointer-events-none opacity-0 -translate-x-2',
          )}
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          onClick={() => scrollByCard('right')}
          disabled={!canScrollRight}
          aria-label="Scroll products right"
          className={cn(
            'absolute right-2 sm:right-4 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-amber/30 bg-navy-accent/95 text-amber shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-amber/60 hover:bg-navy-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber',
            canScrollRight
              ? 'opacity-100 translate-x-0'
              : 'pointer-events-none opacity-0 translate-x-2',
          )}
        >
          <ChevronRight size={20} />
        </button>

        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="product-scroll flex gap-6 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-proximity pb-2 pt-1"
          style={{
            paddingInline: EDGE_PADDING,
            scrollPaddingInline: EDGE_PADDING,
          }}
        >
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              data-product-card
              className="w-[min(18rem,calc(100vw-4rem))] flex-none snap-start sm:w-72"
            >
              <div className="bg-navy-accent rounded-lg overflow-hidden border border-amber/20 hover:border-amber/40 transition-colors group h-full">
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

      {/* Scroll progress */}
      <div className="container-custom mt-6">
        <div
          className="mx-auto h-1 max-w-xs overflow-hidden rounded-full bg-navy-accent"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(scrollProgress)}
          aria-label="Product scroll progress"
        >
          <div
            className="h-full rounded-full bg-amber/70 transition-[width] duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        <p className="mt-3 text-center text-sm text-steel-gray">
          Swipe or use arrows to explore
        </p>
      </div>
    </section>
  )
}
