"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface FuturisticTextProps {
  words?: string[]
  baseText?: string
  className?: string
  interval?: number
}

export default function FuturisticText({
  words = ["Digital Presence", "Brand Identity", "Online Strategy", "Market Reach"],
  baseText = "",
  className = "",
  interval = 3000,
}: FuturisticTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length)
        setIsVisible(true)
      }, 600) // Half the transition time for a smooth word swap
    }, interval)

    return () => clearInterval(timer)
  }, [interval, words.length])

  // Subtle background animation
  useEffect(() => {
    if (!containerRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = containerRef.current!.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      containerRef.current!.style.setProperty("--x-offset", `${x * 10}px`)
      containerRef.current!.style.setProperty("--y-offset", `${y * 5}px`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <span
      ref={containerRef}
      className={cn("inline-block relative", className)}
      style={{
        perspective: "1000px",
      }}
    >
      {baseText}{" "}
      <span className="relative inline-block min-w-[200px]">
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.span
              key={currentIndex}
              className="absolute left-0 whitespace-nowrap gradient-text"
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.6,
              }}
            >
              {words[currentIndex]}
            </motion.span>
          )}
        </AnimatePresence>

        {/* Invisible text to maintain layout space */}
        <span className="invisible">{words[0]}</span>
      </span>
      {/* Animated border effect - subtle gradient without blur */}
      <div
        className="absolute -z-10 inset-0 rounded-lg opacity-30"
        style={{
          background:
            "linear-gradient(90deg, var(--secondary) -10%, transparent 30%, transparent 70%, var(--primary) 110%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 3s infinite linear",
        }}
      />
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .gradient-text {
          background: linear-gradient(
            90deg,
            #a855f7 0%,
            #7dd3fc 25%,
            #ec4899 50%,
            #ffffff 75%,
            #a855f7 100%
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: gradientMove 6s linear infinite;
          text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
          font-weight: bold;
        }

        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </span>
  )
}

