"use client"

import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { useEffect, useState } from "react"

type Language = "en" | "tc" | "sc"

interface LanguageState {
  language: Language
  isChanging: boolean
  setLanguage: (language: Language) => void
}

// 创建一个简单的 Zustand store，不使用持久化
const useLanguageStore = create<LanguageState>((set) => ({
  language: "en",
  isChanging: false,
  setLanguage: (language) => {
    set({ isChanging: true })
    // 使用 setTimeout 模拟网络延迟
    setTimeout(() => {
      set({ language, isChanging: false })
    }, 300)
  },
}))

// 创建一个客户端钩子，处理本地存储
export function useLanguage() {
  // 使用 useState 在客户端跟踪初始化状态
  const [isInitialized, setIsInitialized] = useState(false)
  
  // 从 Zustand 获取状态和方法
  const language = useLanguageStore((state) => state.language)
  const isChanging = useLanguageStore((state) => state.isChanging)
  const setLanguageStore = useLanguageStore((state) => state.setLanguage)
  
  // 在客户端初始化时，从 localStorage 加载语言设置
  useEffect(() => {
    // 只在客户端执行
    if (typeof window !== "undefined") {
      try {
        // 尝试从 localStorage 获取语言设置
        const savedLanguage = localStorage.getItem("selectedLanguage")
        if (savedLanguage) {
          const parsedLanguage = JSON.parse(savedLanguage) as Language
          if (["en", "tc", "sc"].includes(parsedLanguage)) {
            setLanguageStore(parsedLanguage)
          }
        }
      } catch (error) {
        console.error("Failed to load language from localStorage:", error)
      }
      
      setIsInitialized(true)
    }
  }, [setLanguageStore])
  
  // 包装 setLanguage 方法，同时更新 localStorage
  const setLanguage = (newLanguage: Language) => {
    setLanguageStore(newLanguage)
    
    // 保存到 localStorage
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("selectedLanguage", JSON.stringify(newLanguage))
      } catch (error) {
        console.error("Failed to save language to localStorage:", error)
      }
    }
  }
  
  return {
    language,
    isChanging,
    setLanguage,
    isInitialized
  }
}

