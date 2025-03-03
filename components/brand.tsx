"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function Brand() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden">
      <motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20" style={{ opacity }} />

      <div className="container mx-auto relative">
        <motion.div className="text-center space-y-8" style={{ y, opacity }}>
          <div className="relative w-24 h-24 mx-auto mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_3994c2ed-0caf-42dc-9d5f-16af6e09bcb5-EM9k7hFBAPi2d7UnuFeHcUHgD0EHOI.png"
              alt="Aether Logo"
              fill
              className="object-contain"
            />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
            AETHER
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            The time of AI, The Ether of Intelligence
          </p>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl" />
            <motion.div
              className="relative grid grid-cols-3 gap-4 p-8 rounded-2xl backdrop-blur-sm border border-white/10"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="aspect-square rounded-lg bg-white/5 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

