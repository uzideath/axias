"use client"

import { useEffect, useState } from "react"

export default function DataLines() {
  const [lines, setLines] = useState<{ top: number; width: number; delay: number; duration: number }[]>([])

  useEffect(() => {
    const generateLines = () => {
      const newLines = []
      const lineCount = Math.floor(window.innerHeight / 50) // One line every ~50px

      for (let i = 0; i < lineCount; i++) {
        newLines.push({
          top: Math.floor(Math.random() * window.innerHeight),
          width: Math.floor(Math.random() * 50) + 50, // Width between 50-100%
          delay: Math.random() * 5, // Random delay between 0-5s
          duration: Math.random() * 3 + 5, // Duration between 5-8s
        })
      }

      setLines(newLines)
    }

    generateLines()
    window.addEventListener("resize", generateLines)

    return () => {
      window.removeEventListener("resize", generateLines)
    }
  }, [])

  return (
    <div className="data-lines">
      {lines.map((line, index) => (
        <div
          key={index}
          className="data-line"
          style={{
            top: `${line.top}px`,
            width: `${line.width}%`,
            animationDelay: `${line.delay}s`,
            animationDuration: `${line.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

