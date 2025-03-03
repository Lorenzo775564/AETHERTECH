"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative w-8 h-8"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_3994c2ed-0caf-42dc-9d5f-16af6e09bcb5-EM9k7hFBAPi2d7UnuFeHcUHgD0EHOI.png"
                alt="Aether Logo"
                fill
                className="object-contain"
              />
            </motion.div>
            <span className="text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Aether Tech
            </span>
          </div>

          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  const element = document.querySelector(item.href)
                  element?.scrollIntoView({ behavior: "smooth" })
                }}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-all",
                  activeSection === item.href.slice(1)
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent hover:text-accent-foreground",
                )}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

