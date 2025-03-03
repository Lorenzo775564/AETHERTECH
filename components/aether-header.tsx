"use client"

import { useEffect, useState } from "react"

export default function AetherHeader() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="max-w-5xl w-full relative">
        {/* Pink line from left */}
        <div className="absolute left-0 top-1/2 w-16 h-0.5 bg-[#FF69B4] opacity-80"></div>

        <div className="relative group">
          {/* Main heading */}
          <h1
            className={`text-[#FF69B4] text-8xl md:text-9xl font-extrabold tracking-tight leading-none 
            ${loaded ? "opacity-100" : "opacity-0"} transition-all duration-700
            group-hover:text-[#FF8DC2] group-hover:scale-[1.02]`}
            style={{
              textShadow: "0 0 10px rgba(255, 105, 180, 0.7), 0 0 20px rgba(255, 105, 180, 0.5)",
              fontFamily: "'Anton', sans-serif",
            }}
          >
            AETHER
          </h1>

          {/* Decorative animated lines under the text */}
          <div className="absolute -bottom-3 left-0 w-full">
            <div
              className="h-0.5 bg-[#FF69B4] opacity-80 mb-1 transition-all duration-500 ease-in-out
              group-hover:translate-x-4 group-hover:opacity-100"
            ></div>
            <div
              className="h-0.5 bg-[#FF69B4] opacity-60 mb-1 ml-4 transition-all duration-500 ease-in-out delay-100
              group-hover:-translate-x-4 group-hover:opacity-80"
            ></div>
            <div
              className="h-0.5 bg-[#FF69B4] opacity-40 ml-8 transition-all duration-500 ease-in-out delay-200
              group-hover:translate-x-4 group-hover:opacity-60"
            ></div>
          </div>

          {/* "AI TECH" text */}
          <div
            className={`absolute right-0 bottom-0 text-white text-5xl md:text-6xl 
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} 
            transition-all duration-1000 delay-300
            group-hover:translate-x-2`}
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            AI TECH
          </div>
        </div>
      </div>
    </div>
  )
}

