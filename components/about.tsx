"use client"

import Image from "next/image"
import { CheckCircle, Users, Award, Zap } from "lucide-react"
import RevealOnScroll from "@/components/reveal-on-scroll"
import { useRef, useEffect } from "react"

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return

      const { left, top, width, height } = imageRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`
    }

    const handleMouseLeave = () => {
      if (!imageRef.current) return
      imageRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)"
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section id="about" className="py-20 relative">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <div className="relative" ref={imageRef} style={{ transition: "transform 0.3s ease-out" }}>
              <div className="relative z-10 rounded-2xl overflow-hidden gradient-border">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Axias Media Team"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -z-10 top-8 -left-8 w-full h-full bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl blur-xl" />

              {/* Award container with fixed width and proper alignment */}
              <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-0 glass p-4 rounded-xl gradient-border w-auto">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Award Winning</div>
                    <div className="text-xl font-bold gradient-text">Digital Agency</div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="space-y-6" stagger>
            <h2 className="text-responsive-lg font-bold text-center sm:text-left px-4 sm:px-0"> {/* Added text-center for mobile */}
              We're a Team of{" "}
              <span
                className="whitespace-nowrap text-[1.5em] sm:text-[1.2em] block sm:inline"  // Increase size for mobile and make it block for better centering
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, hsl(165, 100%, 70%), hsl(270, 100%, 60%), hsl(165, 100%, 70%))",
                  backgroundSize: "200% 100%",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  animation: "gradientMove 4s linear infinite",
                }}
              >
                Digital Experts
              </span>
            </h2>


            <p className="text-muted-foreground">
              Axias Media is a forward-thinking digital marketing agency that combines creativity, data, and technology
              to deliver exceptional results for our clients. With years of experience and a passion for innovation,
              we've helped businesses of all sizes transform their digital presence and achieve their goals.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 hover:scale-105 transition-transform duration-300 p-2 rounded-lg hover:glass">
                <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Expert Team</h3>
                  <p className="text-sm text-muted-foreground">Specialists in every digital discipline</p>
                </div>
              </div>

              <div className="flex items-start gap-3 hover:scale-105 transition-transform duration-300 p-2 rounded-lg hover:glass">
                <div className="h-10 w-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                  <Zap className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-medium">Innovative Approach</h3>
                  <p className="text-sm text-muted-foreground">Cutting-edge strategies and technologies</p>
                </div>
              </div>

              <div className="flex items-start gap-3 hover:scale-105 transition-transform duration-300 p-2 rounded-lg hover:glass">
                <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Proven Results</h3>
                  <p className="text-sm text-muted-foreground">Track record of successful campaigns</p>
                </div>
              </div>

              <div className="flex items-start gap-3 hover:scale-105 transition-transform duration-300 p-2 rounded-lg hover:glass">
                <div className="h-10 w-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                  <Award className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-medium">Award Winning</h3>
                  <p className="text-sm text-muted-foreground">Recognized for excellence in the industry</p>
                </div>
              </div>
            </div>

            <div className="pt-6 grid grid-cols-3 gap-4 text-center">
              <div className="glass p-4 rounded-xl">
                <div className="text-3xl font-bold gradient-text">250+</div>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="glass p-4 rounded-xl">
                <div className="text-3xl font-bold gradient-text">500+</div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="glass p-4 rounded-xl">
                <div className="text-3xl font-bold gradient-text">15+</div>
                <p className="text-sm text-muted-foreground">Industry Awards</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

