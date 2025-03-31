"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import RevealOnScroll from "@/components/reveal-on-scroll"
import Card3D from "@/components/3d-card"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 relative cyberpunk-grid">
      <div className="absolute bottom-0 right-0 -z-10 w-1/2 h-1/2 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full blur-3xl" />

      <div className="container">
        <RevealOnScroll className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-responsive-lg font-bold mb-4 subtle-glow">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground">
            Ready to transform your digital presence? Get in touch with our team to discuss how we can help you achieve
            your marketing goals.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <RevealOnScroll className="space-y-8" stagger>
            <Card3D className="glass p-6 rounded-xl gradient-border">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Email Us</h3>
                  <p className="text-muted-foreground mb-2">Our team will get back to you within 24 hours</p>
                  <a href="mailto:info@axiasmedia.com" className="text-primary hover:underline gradient-text">
                    info@axiasmedia.com
                  </a>
                </div>
              </div>
            </Card3D>

            <Card3D className="glass p-6 rounded-xl gradient-border">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Call Us</h3>
                  <p className="text-muted-foreground mb-2">Available Monday-Friday, 9am-6pm EST</p>
                  <a href="tel:+1234567890" className="text-primary hover:underline gradient-text">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </Card3D>

            <Card3D className="glass p-6 rounded-xl gradient-border">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Visit Us</h3>
                  <p className="text-muted-foreground mb-2">Our headquarters location</p>
                  <address className="not-italic">
                    123 Innovation Way
                    <br />
                    Tech District
                    <br />
                    San Francisco, CA 94103
                  </address>
                </div>
              </div>
            </Card3D>
          </RevealOnScroll>

          <RevealOnScroll>
            <Card3D className="glass p-8 rounded-xl gradient-border">
              <h3 className="text-xl font-bold mb-6 gradient-text">Send Us a Message</h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-secondary" />
                  </div>
                  <h4 className="text-xl font-medium mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="bg-background/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="(123) 456-7890"
                        value={formState.phone}
                        onChange={handleChange}
                        className="bg-background/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company"
                        value={formState.company}
                        onChange={handleChange}
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or inquiry..."
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="min-h-[120px] bg-background/50"
                    />
                  </div>

                  <Button type="submit" className="w-full primary-button-glow hover-effect" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card3D>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

