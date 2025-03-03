"use client"

import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, Mail, Phone } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"

type ContentType = {
  title: string;
  subtitle: string;
  wechat: string;
  email: string;
  phone: string;
  [key: string]: string;
}

const translations: Record<string, ContentType> = {
  en: {
    title: "Get in Touch",
    subtitle: "Connect with us through any of these channels",
    wechat: "WeChat",
    email: "Email: wangzirun2024@yeah.net",
    phone: "Phone: +852 62248284",
  },
  tc: {
    title: "聯繫我們",
    subtitle: "通過以下任何渠道與我們聯繫",
    wechat: "微信",
    email: "電子郵件: wangzirun2024@yeah.net",
    phone: "電話: +852 62248284",
  },
  sc: {
    title: "联系我们",
    subtitle: "通过以下任何渠道与我们联系",
    wechat: "微信",
    email: "电子邮件: wangzirun2024@yeah.net",
    phone: "电话: +852 62248284",
  },
}

const contactInfo = [
  {
    icon: MessageSquare,
    label: "wechat",
    qrCode: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WX.jpg-ptSvE2BPZSdYWLon9DMiZcfDbAJdxg.jpeg",
  },
  {
    icon: Mail,
    label: "email",
  },
  {
    icon: Phone,
    label: "phone",
  },
]

export default function Contact() {
  const { language } = useLanguage()
  const content = translations[language]
  const [activeContact, setActiveContact] = useState<string | null>(null)

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{content.title}</h2>
          <p className="mt-4 text-muted-foreground">{content.subtitle}</p>
        </div>

        <div className="flex justify-center gap-8">
          {contactInfo.map((item) => (
            <div key={item.label} className="relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                onMouseEnter={() => setActiveContact(item.label)}
                onMouseLeave={() => setActiveContact(null)}
              >
                <item.icon className="w-8 h-8" />
              </motion.button>

              <AnimatePresence>
                {activeContact === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="fixed left-1/2 z-50"
                    style={{
                      top: item.qrCode ? "calc(50% - 160px)" : "calc(50% - 30px)",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <div className="bg-popover text-popover-foreground rounded-lg shadow-lg p-4">
                      {item.qrCode ? (
                        <div className="space-y-2">
                          <p className="text-center font-medium mb-2">{content[item.label]}</p>
                          <div className="relative w-[300px] h-[300px] rounded-lg overflow-hidden">
                            <Image
                              src={item.qrCode || "/placeholder.svg"}
                              alt="WeChat QR Code"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      ) : (
                        <p className="whitespace-nowrap px-2 py-1">{content[item.label]}</p>
                      )}
                      <div className="absolute left-1/2 bottom-[-8px] transform -translate-x-1/2 rotate-45 w-4 h-4 bg-popover" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

