"use client"

import { useEffect, useRef } from "react"

export default function BackgroundEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen and handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
      particles.length = 0
      createParticles()
    }

    // Initialize canvas size
    canvas.width = window.innerWidth
    canvas.height = document.documentElement.scrollHeight

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
      pulse: boolean
      pulseSpeed: number
    }[] = []

    const createParticles = () => {
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 150)

      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 2 + 0.5
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          speedX: Math.random() * 0.2 - 0.1,
          speedY: Math.random() * 0.2 - 0.1,
          color: Math.random() > 0.5 ? "rgba(165, 255, 214, 0.5)" : "rgba(139, 92, 246, 0.5)",
          opacity: Math.random() * 0.2 + 0.05,
          pulse: true,
          pulseSpeed: Math.random() * 0.005 + 0.002,
        })
      }
    }

    const connectParticles = () => {
      const maxDistance = 150

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx.beginPath()
            ctx.strokeStyle = `rgba(165, 255, 214, ${opacity * 0.05})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Add subtle gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 1.5,
      )
      gradient.addColorStop(0, "rgba(139, 92, 246, 0.03)")
      gradient.addColorStop(0.5, "rgba(165, 255, 214, 0.02)")
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Pulse effect
        if (p.pulse) {
          p.opacity += p.pulseSpeed
          if (p.opacity > 0.25 || p.opacity < 0.05) {
            p.pulseSpeed = -p.pulseSpeed
          }
        }

        ctx.fillStyle = p.color.replace(/[^,]+(?=\))/, p.opacity.toString())
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        p.x += p.speedX
        p.y += p.speedY

        // Bounce off edges
        if (p.x > canvas.width) p.x = 0
        if (p.x < 0) p.x = canvas.width
        if (p.y > canvas.height) p.y = 0
        if (p.y < 0) p.y = canvas.height
      }

      connectParticles()
      requestAnimationFrame(animateParticles)
    }

    createParticles()
    animateParticles()

    window.addEventListener("resize", handleResize)

    // Update canvas height when document height changes
    const resizeObserver = new ResizeObserver(() => {
      canvas.height = document.documentElement.scrollHeight
    })
    resizeObserver.observe(document.documentElement)

    return () => {
      window.removeEventListener("resize", handleResize)
      resizeObserver.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-20" style={{ pointerEvents: "none" }} />
}

