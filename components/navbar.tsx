"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "glass py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Axias Media" width={40} height={40} className="w-auto h-10" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
            Portfolio
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
            Testimonials
          </Link>
          <Link href="#contact">
            <Button variant="outline" className="gradient-border hover-effect">
              Contact Us
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed inset-0 top-16 z-50 glass md:hidden">
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              <Link
                href="#services"
                className="text-xl font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#about"
                className="text-xl font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#portfolio"
                className="text-xl font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="#testimonials"
                className="text-xl font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="gradient-border hover-effect">
                  Contact Us
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

