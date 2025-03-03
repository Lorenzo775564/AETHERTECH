"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"

const projectLinks = [
  {
    link: "https://www.rewriteai.top",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rewrite-1xyM2NRh524pHllrWKOpiw0YwxpbCF.png",
  },
  {
    link: "#",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/city%20chat-A2r1mqVooA3CFK4WcBtoIkmwWlH3Kc.png",
  },
  {
    link: "https://www.toalorenzo.top",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lorenzo-uUag6L92rivMLtw9MZhcjoeWzit7cT.png",
  },
]

export default function Projects() {
  const { language } = useLanguage()
  const content = translations[language].projects

  return (
    <section id="projects" className="py-20">
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{content.title}</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{content.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.items.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="h-32 relative mb-4">
                    <Image
                      src={projectLinks[index].logo || "/placeholder.svg"}
                      alt={`${project.title} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <a
                      href={projectLinks[index].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

