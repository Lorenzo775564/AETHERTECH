"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

const posts = [
  {
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies in web development",
    date: "2024-02-28",
  },
  {
    title: "Designing for Accessibility",
    excerpt: "Best practices for creating inclusive digital experiences",
    date: "2024-02-25",
  },
  {
    title: "Optimizing Performance",
    excerpt: "Techniques for building faster and more efficient applications",
    date: "2024-02-22",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Posts</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Thoughts and insights about web development and design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

