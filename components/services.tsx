"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BarChart3, Search, Share2, MessageSquare, Mail, TrendingUp, Smartphone, Zap, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import RevealOnScroll from "@/components/reveal-on-scroll"
import Card3D from "@/components/3d-card"

const services = [
  {
    icon: <Search className="h-10 w-10" />,
    title: "SEO Optimization",
    description:
      "Boost your visibility with our data-driven SEO strategies that drive organic traffic and improve rankings.",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
  },
  {
    icon: <BarChart3 className="h-10 w-10" />,
    title: "Performance Marketing",
    description: "Maximize ROI with targeted campaigns that deliver measurable results and drive conversions.",
    features: ["PPC Management", "Conversion Optimization", "A/B Testing", "Analytics & Reporting"],
  },
  {
    icon: <Share2 className="h-10 w-10" />,
    title: "Social Media Marketing",
    description: "Build brand awareness and engagement with strategic social media campaigns across all platforms.",
    features: ["Content Strategy", "Community Management", "Paid Social", "Influencer Marketing"],
  },
  {
    icon: <MessageSquare className="h-10 w-10" />,
    title: "Content Marketing",
    description: "Create compelling content that resonates with your audience and drives meaningful engagement.",
    features: ["Content Strategy", "Copywriting", "Blog Management", "Video Production"],
  },
  {
    icon: <Mail className="h-10 w-10" />,
    title: "Email Marketing",
    description: "Nurture leads and drive conversions with personalized email campaigns that deliver results.",
    features: ["Campaign Strategy", "Automation", "A/B Testing", "List Management"],
  },
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "Analytics & Insights",
    description: "Make data-driven decisions with comprehensive analytics and actionable insights.",
    features: ["Custom Dashboards", "Performance Tracking", "Competitive Analysis", "ROI Reporting"],
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Mobile Marketing",
    description: "Reach customers on the go with mobile-first strategies that drive engagement and conversions.",
    features: ["App Marketing", "SMS Campaigns", "Mobile SEO", "Location-Based Marketing"],
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "AI-Powered Solutions",
    description: "Leverage cutting-edge AI technology to automate and optimize your marketing efforts.",
    features: ["Predictive Analytics", "Chatbots", "Personalization", "Automated Bidding"],
  },
]

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="container">
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-responsive-lg font-bold mb-4 subtle-glow">
              Our <span className="gradient-text">Digital Marketing</span> Services
            </h2>
            <p className="text-muted-foreground">
              We offer a comprehensive suite of digital marketing services to help your business grow and succeed in the
              digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card3D
                key={index}
                className={cn(
                  "transition-all duration-300 cursor-pointer overflow-hidden group",
                  activeIndex === index ? "gradient-border glass" : "hover:border-primary/50",
                )}
                intensity={5}
                contentClassName="p-0"
              >
                <Card
                  className="bg-transparent border-0"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <CardHeader>
                    <div
                      className={cn(
                        "p-3 rounded-lg w-fit transition-colors duration-300",
                        activeIndex === index
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground group-hover:text-primary",
                      )}
                    >
                      {service.icon}
                    </div>
                    <CardTitle className={cn("mt-4", hoveredIndex === index && "gradient-text")}>
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: activeIndex === index ? "auto" : 0,
                        opacity: activeIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 mt-4">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-secondary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </CardContent>
                </Card>
              </Card3D>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

