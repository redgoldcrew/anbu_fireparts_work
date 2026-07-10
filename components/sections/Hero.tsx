'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { HERO_STATS } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'

const GaugeSVG = ({ isVisible }: { isVisible: boolean }) => (
  <div className="w-full max-w-md mx-auto">
    <style>{`
      @keyframes gauge-needle {
        0% { transform: rotate(-92deg); }
        100% { transform: rotate(58deg); }
      }
      #safety-needle {
        transform-origin: 170px 190px;
        animation: ${isVisible ? 'gauge-needle 2s cubic-bezier(0.3, 1.4, 0.4, 1) forwards' : 'none'};
      }
    `}</style>
    <svg
      viewBox="0 0 340 240"
      className="w-full h-auto"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Background Arc */}
      <path
        d="M40 190 A130 130 0 0 1 300 190"
        fill="none"
        stroke="#6E737C"
        strokeLinecap="round"
        strokeWidth="20"
      />
      
      {/* Safety Segments - Red (Alert) */}
      <path
        d="M40 190 A130 130 0 0 1 130 68"
        fill="none"
        stroke="#D9251F"
        strokeLinecap="round"
        strokeWidth="20"
      />
      
      {/* Safety Segments - Silver (Caution) */}
      <path
        d="M130 68 A130 130 0 0 1 210 68"
        fill="none"
        stroke="#B7BBC0"
        strokeLinecap="round"
        strokeWidth="20"
      />
      
      {/* Safety Segments - Green (Safe) */}
      <path
        d="M210 68 A130 130 0 0 1 300 190"
        fill="none"
        stroke="#1E8E5A"
        strokeLinecap="round"
        strokeWidth="20"
      />
      
      {/* Center Point */}
      <circle cx="170" cy="190" fill="#fff" r="12" />
      
      {/* Needle */}
      <rect
        id="safety-needle"
        fill="#fff"
        height="120"
        rx="3"
        transform="rotate(-92 170 190)"
        width="6"
        x="167"
        y="70"
      />
      
      {/* Label */}
      <text
        fill="#fff"
        fontFamily="IBM Plex Mono"
        fontSize="12"
        fontWeight="bold"
        textAnchor="middle"
        x="170"
        y="225"
      >
        SITE SAFETY LEVEL
      </text>
    </svg>
  </div>
)

export function Hero() {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      id="hero"
      className="relative pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32 bg-navy text-white overflow-hidden"
    >

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <div className={`${isVisible ? 'animate-reveal' : 'opacity-0'}`}>
              <p className="section-kicker text-silver">
                Complete Fire Safety Solutions
              </p>
              <h1 className="font-['Oswald'] font-700 text-4xl sm:text-5xl lg:text-6xl text-white mt-2 leading-tight text-balance">
                Professional Fire Safety
                <span className="text-silver"> & Engineering</span>
              </h1>
            </div>

            <p
              className={`section-description text-white/90 leading-relaxed ${
                isVisible ? 'animate-reveal' : 'opacity-0'
              }`}
              style={isVisible ? { animationDelay: '75ms' } : {}}
            >
              Comprehensive fire safety solutions serving all over Tamil Nadu. From fire
              extinguishers to alarm systems and hydrant pipeline work—we protect what matters.
            </p>

            {/* Stats Grid */}
            <div
              className={`grid grid-cols-3 gap-4 pt-4 ${
                isVisible ? 'animate-reveal' : 'opacity-0'
              }`}
              style={isVisible ? { animationDelay: '150ms' } : {}}
            >
              {HERO_STATS.map((stat) => (
                <div key={stat.number} className="bg-navy-accent/50 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-['Oswald'] font-700 text-red">
                    {stat.number}
                  </div>
                  <div className="text-xs text-white/70 uppercase font-semibold">
                    {stat.label}
                  </div>
                  <div className="text-xs text-steel-gray">{stat.description}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 pt-2 ${
                isVisible ? 'animate-reveal' : 'opacity-0'
              }`}
              style={isVisible ? { animationDelay: '225ms' } : {}}
            >
              <a href="#contact" className="btn-primary flex items-center gap-2">
                Get a Quote <ArrowRight size={18} />
              </a>
              <a href="#services" className="btn-outline">
                Learn More
              </a>
            </div>
          </div>

          {/* Right Column - Animated Gauge */}
          <div
            className={`flex items-center justify-center ${
              isVisible ? 'animate-reveal' : 'opacity-0'
            }`}
            style={isVisible ? { animationDelay: '150ms' } : {}}
          >
            <GaugeSVG isVisible={isVisible} />
          </div>
        </div>
      </div>
    </section>
  )
}
