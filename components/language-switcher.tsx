"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"

const languages = [
  { code: "en", label: "EN" },
  { code: "tc", label: "繁" },
  { code: "sc", label: "简" },
] as const

export function LanguageSwitcher() {
  const { language, setLanguage, isChanging, isInitialized } = useLanguage()
  
  // 如果尚未初始化，显示加载状态
  if (!isInitialized) {
    return (
      <div className="fixed top-4 right-4 z-50 flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-full p-1 border">
        <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto my-1" />
      </div>
    )
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-full p-1 border">
      <AnimatePresence mode="wait">
        {isChanging && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-full"
          >
            <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      {languages.map((lang, index) => (
        <React.Fragment key={lang.code}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLanguage(lang.code)}
            className={`relative px-3 py-1 text-sm rounded-full transition-colors
              ${language === lang.code ? "text-primary-foreground" : "hover:text-primary"}`}
            disabled={isChanging}
          >
            {language === lang.code && (
              <motion.div
                layoutId="activeLanguage"
                className="absolute inset-0 bg-primary rounded-full"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{lang.label}</span>
          </motion.button>
          {index < languages.length - 1 && <div className="w-px h-4 bg-border" />}
        </React.Fragment>
      ))}
    </div>
  )
}

