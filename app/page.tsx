"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Navbar from "@/components/navbar"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Projects from "@/components/sections/projects"
import Brand from "@/components/sections/brand"
import Contact from "@/components/sections/contact"
import ScrollProgress from "@/components/scroll-progress"
import { LanguageSwitcher } from "@/components/language-switcher"
import LoadingScreen from "@/components/loading-screen"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative overflow-x-hidden">
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

      <ScrollProgress />
      <LanguageSwitcher />
      <Navbar />
      <div className="container mx-auto px-4">
        <Hero />
        <About />
        <Projects />
        <Brand />
        <Contact />
      </div>
    </main>
  )
}

