"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="flex items-center gap-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="relative w-16 h-16"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_3994c2ed-0caf-42dc-9d5f-16af6e09bcb5-EM9k7hFBAPi2d7UnuFeHcUHgD0EHOI.png"
            alt="Aether Logo"
            fill
            className="object-contain"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="text-xl font-medium"
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  )
}

