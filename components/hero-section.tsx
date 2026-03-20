"use client"

import { ArrowRight, Sparkles, TrendingUp, Users, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onOpenChat: () => void
}

export function HeroSection({ onOpenChat }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-foreground/80">Powered by Inteligencia Artificial</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-6">
            Sua Estrategista de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
              Vendas Pessoal
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Domine o Social Selling e transforme relacionamentos em resultados reais. 
            Com estrategias validadas e um toque de sofisticacao, a IAngel te guia para vender todos os dias.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              onClick={onOpenChat}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 py-6 rounded-xl shadow-lg shadow-accent/20"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Comecar Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-secondary font-medium text-lg px-8 py-6 rounded-xl"
              asChild
            >
              <a href="#estrategias">
                Conhecer Estrategias
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <span className="text-3xl font-serif font-bold text-accent mb-2">78%</span>
              <span className="text-sm text-muted-foreground text-center">das empresas vendem mais com Social Selling</span>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <span className="text-3xl font-serif font-bold text-accent mb-2">69%</span>
              <span className="text-sm text-muted-foreground text-center">compram de quem interagiram diretamente</span>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <span className="text-3xl font-serif font-bold text-accent mb-2">22%</span>
              <span className="text-sm text-muted-foreground text-center">mais rapido o ciclo de vendas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground">Deslize para explorar</span>
        <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
