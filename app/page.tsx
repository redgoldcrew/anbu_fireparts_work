import { TopBar } from '@/components/TopBar'
import { Navbar } from '@/components/Navbar'
import { HazardTape } from '@/components/HazardTape'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Products } from '@/components/sections/Products'
import { Certifications } from '@/components/sections/Certifications'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { ServiceAreaBanner } from '@/components/sections/ServiceAreaBanner'
import { Contact } from '@/components/sections/Contact'

export default function Page() {
  return (
    <main className="w-full bg-cream">
      <TopBar />
      <Navbar />
      <HazardTape />
      <Hero />
      <HazardTape />
      <About />
      <Services />
      <HazardTape />
      <Products />
      <Certifications />
      <WhyChooseUs />
      <ServiceAreaBanner />
      <Contact />
      <HazardTape />
      <Footer />
    </main>
  )
}
