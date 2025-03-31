"use client"

import { useState, useEffect } from "react"

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("hoverable")
      ) {
        setIsHovering(true)
      }
    }

    const handleHoverEnd = () => {
      setIsHovering(false)
    }

    document.addEventListener("mousemove", updateCursorPosition)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseover", handleHoverStart)
    document.addEventListener("mouseout", handleHoverEnd)

    // Hide default cursor
    document.documentElement.style.cursor = "none"

    // Add special cursor style for clickable elements
    const style = document.createElement("style")
    style.innerHTML = `
      a, button, .hoverable { cursor: none !important; }
    `
    document.head.appendChild(style)

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseover", handleHoverStart)
      document.removeEventListener("mouseout", handleHoverEnd)

      // Restore default cursor
      document.documentElement.style.cursor = "auto"
      document.head.removeChild(style)
    }
  }, [])

  // Don't render on mobile/touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null
  }

  return (
    <div
      style={{
        position: "fixed",
        width: isHovering ? "50px" : "32px",
        height: isHovering ? "50px" : "32px",
        borderRadius: "9999px",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "difference",
        background: "radial-gradient(circle, rgba(139, 92, 246, 0.7) 0%, rgba(165, 255, 214, 0.7) 100%)",
        transform: "translate(-50%, -50%)",
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
        transition: "width 0.2s, height 0.2s, opacity 0.2s",
      }}
    />
  )
}

