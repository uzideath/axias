"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface RevealOnScrollProps {
  children: ReactNode
  className?: string
  threshold?: number
  stagger?: boolean
}

export default function RevealOnScroll({
  children,
  className = "",
  threshold = 0.1,
  stagger = false,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return (
    <div ref={ref} className={`${stagger ? "stagger-reveal" : "reveal"} ${className}`}>
      {children}
    </div>
  )
}

