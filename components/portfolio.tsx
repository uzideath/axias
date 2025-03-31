"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import RevealOnScroll from "@/components/reveal-on-scroll"
import Card3D from "@/components/3d-card"

const categories = ["All", "SEO", "Social Media", "Content", "PPC", "Email"]

const projects = [
  {
    title: "E-commerce Revenue Growth",
    category: "SEO",
    image: "/placeholder.svg?height=600&width=800",
    description: "Increased organic traffic by 200% and revenue by 150% through comprehensive SEO strategy.",
    tags: ["SEO", "E-commerce", "Content Strategy"],
  },
  {
    title: "B2B Lead Generation",
    category: "PPC",
    image: "/placeholder.svg?height=600&width=800",
    description: "Generated 500+ qualified leads through targeted PPC campaigns with 320% ROI.",
    tags: ["PPC", "Lead Generation", "B2B"],
  },
  {
    title: "Social Media Brand Awareness",
    category: "Social Media",
    image: "/placeholder.svg?height=600&width=800",
    description: "Increased social media engagement by 400% and followers by 250% in 6 months.",
    tags: ["Social Media", "Brand Awareness", "Content Creation"],
  },
  {
    title: "Content Marketing Strategy",
    category: "Content",
    image: "/placeholder.svg?height=600&width=800",
    description: "Developed a comprehensive content strategy that increased organic traffic by 180%.",
    tags: ["Content Marketing", "SEO", "Blogging"],
  },
  {
    title: "Email Marketing Automation",
    category: "Email",
    image: "/placeholder.svg?height=600&width=800",
    description: "Implemented automated email sequences that increased conversions by 75%.",
    tags: ["Email Marketing", "Automation", "CRM"],
  },
  {
    title: "Local SEO Campaign",
    category: "SEO",
    image: "/placeholder.svg?height=600&width=800",
    description: "Improved local search visibility by 300% for a multi-location business.",
    tags: ["Local SEO", "Google My Business", "Citations"],
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-3/4 h-3/4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" />

      <RevealOnScroll className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-responsive-lg font-bold mb-4 subtle-glow">
            Our <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-muted-foreground">
            Explore our portfolio of successful digital marketing campaigns and projects that have delivered exceptional
            results for our clients.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <div className="flex justify-center mb-12 overflow-x-auto pb-2 scrollbar-thin">
            <TabsList className="glass">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "data-[state=active]:text-primary data-[state=active]:shadow-none",
                    activeCategory === category && "gradient-text",
                  )}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <Card3D key={index} className="overflow-hidden rounded-xl" intensity={5}>
                  <div
                    className="group relative overflow-hidden rounded-xl gradient-border"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={600}
                        className={cn(
                          "w-full h-full object-cover transition-transform duration-500",
                          hoveredIndex === index ? "scale-110" : "scale-100",
                        )}
                      />
                      <div
                        className={cn(
                          "absolute inset-0 bg-gradient-to-t from-background/90 to-transparent transition-opacity duration-300",
                          hoveredIndex === index ? "opacity-100" : "opacity-0",
                        )}
                      />
                      <div
                        className={cn(
                          "absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300",
                          hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                        )}
                      >
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Button variant="outline" size="sm" className="w-fit gradient-border hover-effect">
                          View Case Study
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{project.title}</h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card3D>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-12">
          <Button variant="outline" className="gradient-border group hover-effect">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </RevealOnScroll>
    </section>
  )
}

