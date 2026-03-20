"use client"

import { Brain, Target, MessageSquare, LineChart, Heart, Shield } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Inteligencia Estrategica",
    description: "Analise profunda do seu negocio e persona para criar estrategias personalizadas que realmente funcionam."
  },
  {
    icon: Target,
    title: "Qualificacao de Leads",
    description: "Identifique os leads certos no momento certo. Sem desperdicar energia com quem nao esta pronto."
  },
  {
    icon: MessageSquare,
    title: "Scripts de Conversao",
    description: "Mensagens estrategicas para cada etapa do funil, do primeiro contato ao fechamento."
  },
  {
    icon: LineChart,
    title: "Metodologias Validadas",
    description: "Baseado em SPIN Selling e Social Selling moderno. Tecnicas que geram resultados comprovados."
  },
  {
    icon: Heart,
    title: "Conexao Genuina",
    description: "Vendas atraves de relacionamento real. Sem pressao, sem manipulacao, com autenticidade."
  },
  {
    icon: Shield,
    title: "Acompanhamento Completo",
    description: "Da atracao ao pos-venda. Um processo estruturado para vender todos os dias."
  }
]

export function FeaturesSection() {
  return (
    <section id="como-funciona" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-accent tracking-wider uppercase mb-4 block">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Uma Nova Forma de{" "}
            <span className="text-accent">Vender</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A IAngel combina inteligencia artificial com metodologias de vendas consagradas 
            para te ajudar a criar conexoes genuinas e converter com elegancia.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
