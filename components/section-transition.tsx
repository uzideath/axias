"use client"

export default function SectionTransition() {
  return (
    <div className="relative h-24 md:h-32 -mt-12 -mb-12 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-primary/5 opacity-30" />
    </div>
  )
}

