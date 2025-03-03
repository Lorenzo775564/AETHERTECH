"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Users, Sparkles } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"

const icons = [Brain, Users, Sparkles]
const images = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20Tech%20Innovation-kW8NlDCtOihWdfdx8bFEx3n9f8XU9u.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Multi-disciplinary%20talents-h6diQ3UncJStDx5juB7M1gk4TZjKWz.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lorenzo.jpg-468Wyp0dfj3itjYSXBUugWc2vMgzp6.jpeg",
]

const ROTATION_INTERVAL = 5000 // 5 seconds per slide

export default function About() {
  const { language } = useLanguage()
  const content = translations[language].about
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % content.skills.length)
      }, ROTATION_INTERVAL)
      return () => clearInterval(interval)
    }
  }, [isPaused, content.skills.length])

  const renderIcon = (Icon: typeof Brain | typeof Users | typeof Sparkles, className: string) => {
    return <Icon className={className} />
  }

  return (
    <section id="about" className="py-20 section-wind">
      <div className="space-y-12">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            {content.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          >
            {content.subtitle}
          </motion.p>
        </div>

        <div
          className="relative h-[400px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Card className="h-full">
                <CardContent className="p-6 h-full">
                  <div className="flex h-full gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-4">
                        {renderIcon(icons[activeIndex], "h-8 w-8 text-primary animate-float")}
                        <h3 className="text-xl font-semibold">{content.skills[activeIndex].title}</h3>
                      </div>

                      <p className="text-muted-foreground">{content.skills[activeIndex].fullDescription}</p>
                    </div>

                    <div className="relative w-[300px] h-full flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={images[activeIndex] || "/placeholder.svg"}
                        alt={content.skills[activeIndex].title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Progress indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {content.skills.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index)
                  setIsPaused(true)
                }}
                className="group p-2"
              >
                <div className="relative w-16 h-1 rounded-full overflow-hidden bg-muted">
                  <div
                    className={`absolute inset-0 bg-primary transition-transform duration-[5000ms] ease-linear
                      ${activeIndex === index && !isPaused ? "w-full origin-left" : "w-0"}
                      ${activeIndex === index ? "opacity-100" : "opacity-50 group-hover:opacity-75"}`}
                    style={{
                      transform: activeIndex === index && !isPaused ? "scaleX(1)" : "scaleX(0)",
                    }}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

