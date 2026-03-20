"use client"

import { Sparkles, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer id="sobre" className="py-16 bg-card/50 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main content */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-serif font-bold text-accent">IAngel</span>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Sua parceira estrategista em vendas. Combinando inteligencia artificial com metodologias 
              validadas de Social Selling para transformar relacionamentos em resultados reais.
            </p>

            {/* Values */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 rounded-full bg-secondary text-sm text-foreground border border-border">
                Sem manipulacao
              </span>
              <span className="px-4 py-2 rounded-full bg-secondary text-sm text-foreground border border-border">
                Conexao genuina
              </span>
              <span className="px-4 py-2 rounded-full bg-secondary text-sm text-foreground border border-border">
                Resultados reais
              </span>
              <span className="px-4 py-2 rounded-full bg-secondary text-sm text-foreground border border-border">
                Linguagem clara
              </span>
            </div>

            {/* Philosophy */}
            <blockquote className="relative py-8 px-12 bg-secondary/50 rounded-2xl border border-border max-w-2xl mx-auto">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 bg-card">
                <span className="text-accent font-serif text-sm">Filosofia</span>
              </div>
              <p className="text-foreground italic font-serif text-lg">
                &ldquo;Nao suporto gurus de marketing que enganam as pessoas e conteudos rasos que nao geram resultados. 
                Aqui a gente fala de negocios de forma simples, estrategica e que funciona de verdade.&rdquo;
              </p>
            </blockquote>
          </div>

          {/* References */}
          <div className="border-t border-border pt-8 mb-8">
            <p className="text-center text-sm text-muted-foreground mb-4">
              Metodologias baseadas em:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="text-sm text-accent">SPIN Selling - Neil Rackham</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-sm text-accent">Social Selling Index - LinkedIn</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              Feito com <Heart className="w-4 h-4 text-primary" /> para infoprodutoras que querem resultados reais
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              2026 IAngel. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
