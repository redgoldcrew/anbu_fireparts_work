'use client'

import { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { PRODUCTS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { Flame } from 'lucide-react'

const EDGE_PADDING = 'max(1rem,calc((100vw-80rem)/2+2rem))'

export function Products() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [maxScroll, setMaxScroll] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [scrollLinked, setScrollLinked] = useState(true)

  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateScrollMode = () => setScrollLinked(!motionQuery.matches)
    updateScrollMode()
    motionQuery.addEventListener('change', updateScrollMode)
    return () => motionQuery.removeEventListener('change', updateScrollMode)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const updateMaxScroll = () => {
      setMaxScroll(Math.max(0, track.scrollWidth - window.innerWidth))
    }

    updateMaxScroll()
    const resizeObserver = new ResizeObserver(updateMaxScroll)
    resizeObserver.observe(track)
    window.addEventListener('resize', updateMaxScroll)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateMaxScroll)
    }
  }, [])

  useEffect(() => {
    if (!scrollLinked) return

    const section = ref.current
    if (!section) return

    const handleScroll = () => {
      const scrollable = section.offsetHeight - window.innerHeight
      if (scrollable <= 0) {
        setScrollProgress(0)
        return
      }

      const scrolled = -section.getBoundingClientRect().top
      setScrollProgress(Math.min(1, Math.max(0, scrolled / scrollable)))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [scrollLinked, maxScroll, ref])

  const translateX = scrollProgress * maxScroll

  return (
    <section
      ref={ref}
      id="products"
      className="relative bg-navy"
      style={
        scrollLinked && maxScroll > 0
          ? { height: `calc(100vh + ${maxScroll}px)` }
          : undefined
      }
    >
      <div
        className={cn(
          'flex flex-col overflow-hidden',
          scrollLinked && maxScroll > 0
            ? 'sticky top-0 h-screen'
            : 'py-16 sm:py-20 lg:py-24',
        )}
      >
        <div
          className={cn(
            'container-custom shrink-0',
            scrollLinked && maxScroll > 0 && 'pt-12 sm:pt-14',
          )}
        >
          <div className="mb-8 lg:mb-10 text-center max-w-2xl mx-auto">
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

        <div className="relative left-1/2 flex min-h-0 w-screen flex-1 -translate-x-1/2 items-center">
          <div
            className={cn(
              'w-full',
              scrollLinked ? 'overflow-hidden' : 'product-scroll overflow-x-auto pb-2',
              isVisible ? 'animate-reveal' : 'opacity-0',
            )}
            style={isVisible ? { animationDelay: '225ms' } : {}}
          >
            <div
              ref={trackRef}
              className="flex w-max gap-6"
              style={{
                paddingInline: EDGE_PADDING,
                transform: scrollLinked ? `translate3d(-${translateX}px, 0, 0)` : undefined,
                willChange: scrollLinked ? 'transform' : undefined,
              }}
            >
              {PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className="w-[min(18rem,calc(100vw-4rem))] flex-none sm:w-72"
                >
                  <div className="bg-navy-accent rounded-lg overflow-hidden border border-amber/20 hover:border-amber/40 transition-colors group h-full">
                    <div className="bg-gradient-to-br from-amber/10 to-red/10 h-48 flex items-center justify-center group-hover:from-amber/20 group-hover:to-red/20 transition-colors">
                      <div className="text-center">
                        <Flame size={48} className="text-red/50 mx-auto mb-2" />
                        <p className="text-sm text-steel-gray font-medium">
                          {product.type}
                        </p>
                      </div>
                    </div>

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
        </div>

        {scrollLinked && maxScroll > 0 && (
          <div className="container-custom shrink-0 pb-8 pt-4">
            <div
              className="mx-auto h-1 max-w-xs overflow-hidden rounded-full bg-navy-accent"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(scrollProgress * 100)}
              aria-label="Product scroll progress"
            >
              <div
                className="h-full rounded-full bg-amber/70"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
