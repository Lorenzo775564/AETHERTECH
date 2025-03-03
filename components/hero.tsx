import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import AetherAnimation from "@/components/aether-animation"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 wind-background" aria-hidden="true" />

      <div className="relative z-10 text-center space-y-8">
        <AetherAnimation />

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-4 animate-float">
          Aether, The "God of the Dome" in ancient Greek mythology
        </p>

        <Button
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          size="lg"
          className="rounded-full animate-pulse-subtle hover:animate-none"
        >
          Explore Aether
          <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}

