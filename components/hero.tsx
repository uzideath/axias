"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, MousePointer, Sparkles, TrendingUp, BarChart3 } from "lucide-react"
import RevealOnScroll from "@/components/reveal-on-scroll"
import Card3D from "@/components/3d-card"
import FuturisticText from "@/components/futuristic-text"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 hero-gradient" />

      <div className="container grid md:grid-cols-2 gap-8 items-center py-12">
        <RevealOnScroll className="space-y-6 text-center md:text-left" stagger>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Next-Gen Digital Marketing</span>
          </div>

          <h1 className="text-responsive-xl font-bold leading-tight">
            Transform Your{" "}
            <FuturisticText
              words={["Digital Presence", "Brand Identity", "Online Strategy", "Market Reach"]}
              interval={3500}
            />{" "}
            With Cutting-Edge Solutions
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg mx-auto md:mx-0">
            We combine creativity, data, and technology to help your brand thrive in the digital landscape with
            strategies that drive real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="group primary-button-glow hover-effect">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="gradient-border">
              Our Services
            </Button>
          </div>

          <div className="pt-4 flex items-center justify-center md:justify-start gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-secondary" />
              <span>Data-Driven</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-primary" />
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-secondary" />
              <span>Results-Focused</span>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="relative flex flex-col items-center">
          {/* Main image container */}
          <Card3D className="w-full max-w-md aspect-square animate-float">
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl" />
              {/* <div className="relative h-full w-full glass rounded-3xl overflow-hidden gradient-border p-6"> */}
                <div className="h-full w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hero.png"
                    alt="Digital Marketing Dashboard"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              {/* </div> */}
            </div>
          </Card3D>

          {/* Stats containers below the image - without boxes */}
          <div className="grid grid-cols-3 gap-8 mt-10 w-full max-w-md">
            <div className="flex flex-col items-center text-center animate-pulse-slow">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                <MousePointer className="h-6 w-6 text-primary" />
              </div>
              <div className="text-sm font-medium mb-1">Conversion Rate</div>
              <div className="text-2xl font-bold gradient-text">+147%</div>
            </div>

            <div className="flex flex-col items-center text-center animate-pulse-slow">
              <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center mb-3">
                <BarChart3 className="h-6 w-6 text-secondary" />
              </div>
              <div className="text-sm font-medium mb-1">Engagement</div>
              <div className="text-2xl font-bold gradient-text">+89%</div>
            </div>

            <div className="flex flex-col items-center text-center animate-pulse-slow">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div className="text-sm font-medium mb-1">ROI</div>
              <div className="text-2xl font-bold gradient-text">+312%</div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <span className="text-sm">Scroll to explore</span>
        <div className="h-10 w-6 rounded-full border border-muted-foreground/30 flex items-center justify-center">
          <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
        </div>
      </div>
    </section>
  )
}

