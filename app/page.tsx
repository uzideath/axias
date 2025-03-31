import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Portfolio from "@/components/portfolio"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import NoiseOverlay from "@/components/noise-overlay"
import DataLines from "@/components/data-lines"
import BackgroundEffect from "@/components/background-effect"
import SectionTransition from "@/components/section-transition"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <BackgroundEffect />
      <NoiseOverlay />
      <DataLines />
      <Navbar />
      <Hero />
      <SectionTransition />
      <Services />
      <SectionTransition />
      <About />
      <SectionTransition />
      <Portfolio />
      <SectionTransition />
      <Testimonials />
      <SectionTransition />
      <Contact />
      <Footer />
    </main>
  )
}

