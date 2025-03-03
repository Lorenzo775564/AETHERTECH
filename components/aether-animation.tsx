"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function AetherAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { left, top, width, height } = containerRef.current!.getBoundingClientRect()
      const x = (clientX - left) / width
      const y = (clientY - top) / height

      containerRef.current!.style.setProperty("--mouse-x", x.toString())
      containerRef.current!.style.setProperty("--mouse-y", y.toString())
    }

    containerRef.current.addEventListener("mousemove", handleMouseMove)
    return () => containerRef.current?.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <svg className="w-0 h-0">
        <defs>
          <filter id="turbulence">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" seed="1">
              <animate attributeName="baseFrequency" dur="20s" values="0.02;0.05;0.02" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="25" />
          </filter>
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" mode="multiply" />
          </filter>
        </defs>
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <h1 className="text-8xl md:text-9xl font-bold tracking-tighter text-center wind-text">AETHER</h1>
        <div className="wind-particles" aria-hidden="true" />
      </motion.div>
    </div>
  )
}

