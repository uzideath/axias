"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import RevealOnScroll from "@/components/reveal-on-scroll"

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechVision Inc.",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Working with Axias Media transformed our digital marketing strategy. Their data-driven approach and creative solutions helped us increase our online presence and drive significant revenue growth. The team is responsive, innovative, and truly cares about our success.",
  },
  {
    name: "Michael Chen",
    position: "CEO",
    company: "GrowthLabs",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Axias Media has been instrumental in scaling our business. Their SEO and PPC strategies have consistently delivered high-quality leads, and their analytics reporting gives us clear insights into our marketing performance. I highly recommend their services to any business looking to grow.",
  },
  {
    name: "Emily Rodriguez",
    position: "E-commerce Manager",
    company: "StyleHub",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "The results we've seen since partnering with Axias Media have exceeded our expectations. Our online sales have increased by 200%, and our social media engagement is at an all-time high. Their team is professional, knowledgeable, and a pleasure to work with.",
  },
  {
    name: "David Wilson",
    position: "CMO",
    company: "InnovateX",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Axias Media's strategic approach to digital marketing has helped us establish a strong online presence in a competitive industry. Their team's expertise in SEO, content marketing, and social media has been invaluable to our growth. They're not just a service provider; they're a true partner.",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, isAnimating])

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 -z-10 w-full h-full bg-gradient-to-b from-background to-primary/5" />

      <RevealOnScroll className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-responsive-lg font-bold mb-4 subtle-glow">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about working with Axias Media.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-full animate-[spin_20s_linear_infinite]" />
          </div>

          <div
            className="glass rounded-2xl p-8 md:p-12 gradient-border holographic"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden gradient-border shrink-0">
                <Image
                  src={testimonials[activeIndex].image || "/placeholder.svg"}
                  alt={testimonials[activeIndex].name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <Quote className="h-10 w-10 text-primary/30 mb-4" />
                <p className="text-lg italic mb-6">"{testimonials[activeIndex].quote}"</p>
                <div>
                  <h3 className="font-bold text-lg gradient-text">{testimonials[activeIndex].name}</h3>
                  <p className="text-muted-foreground">
                    {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveIndex(index)
                      setIsAnimating(true)
                      setTimeout(() => setIsAnimating(false), 500)
                    }}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      index === activeIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30",
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="h-10 w-10 rounded-full"
                  disabled={isAnimating}
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span className="sr-only">Previous testimonial</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="h-10 w-10 rounded-full"
                  disabled={isAnimating}
                >
                  <ChevronRight className="h-5 w-5" />
                  <span className="sr-only">Next testimonial</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

