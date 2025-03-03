import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Aether Tech",
  description: "Exploring the turbulent intersection of design and technology",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_3994c2ed-0caf-42dc-9d5f-16af6e09bcb5-EM9k7hFBAPi2d7UnuFeHcUHgD0EHOI.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Dancing+Script:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}

