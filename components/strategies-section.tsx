"use client"

import { useState } from "react"
import { Zap, Eye, Users, MessageCircle, HandHeart, ChevronRight, Rocket, Calendar, Target, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const strategies = [
  {
    id: "turbo",
    name: "Operacao Turbo",
    tagline: "Vender todos os dias",
    description: "Estrategia de Social Selling para criar relacionamentos que convertem de forma consistente e natural.",
    icon: Zap,
    color: "from-primary to-accent",
    steps: [
      { icon: Eye, title: "Atracao", description: "Conteudo estrategico que gera interacoes e abre portas" },
      { icon: Users, title: "Qualificacao", description: "Separar quem esta pronto de quem esta em construcao" },
      { icon: MessageCircle, title: "Conexao", description: "Conduzir relacionamento com intencao estrategica" },
      { icon: Target, title: "Diagnostico", description: "Venda consultiva e fechamento sem pressao" },
      { icon: HandHeart, title: "Pos-venda", description: "Manter relacionamento e gerar resultados" },
    ],
    stats: [
      { value: "78%", label: "vendem mais com Social Selling" },
      { value: "22%", label: "mais rapido o ciclo de vendas" },
      { value: "45%", label: "mais chance de bater metas" },
    ]
  },
  {
    id: "secreta",
    name: "Operacao Secreta",
    tagline: "Lancamento estruturado",
    description: "Estrategia de lancamento em 22 dias para criar desejo, autoridade e converter com estrutura.",
    icon: Rocket,
    color: "from-accent to-primary",
    steps: [
      { icon: Target, title: "Produto & Oferta", description: "Definir entregaveis, promessa e precificacao" },
      { icon: Zap, title: "Aquecimento", description: "15 dias de preparacao e captacao de leads" },
      { icon: MessageCircle, title: "WhatsApp VIP", description: "Grupo exclusivo com sequencia de mensagens" },
      { icon: Calendar, title: "Aula & Pitch", description: "Entrega de valor e transicao para venda" },
      { icon: CheckCircle2, title: "Venda Ativa", description: "7 dias de conversao e follow-up estrategico" },
    ],
    stats: [
      { value: "15-50%", label: "taxa de comparecimento" },
      { value: "22", label: "dias de operacao completa" },
      { value: "R$2.7k+", label: "ticket medio ideal" },
    ]
  }
]

export function StrategiesSection() {
  const [activeStrategy, setActiveStrategy] = useState("turbo")
  const currentStrategy = strategies.find(s => s.id === activeStrategy) || strategies[0]

  return (
    <section id="estrategias" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-accent tracking-wider uppercase mb-4 block">
            Estrategias de Vendas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Metodologias{" "}
            <span className="text-accent">Validadas</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Duas estrategias poderosas para diferentes momentos do seu negocio. 
            Escolha a que melhor se encaixa no seu objetivo atual.
          </p>
        </div>

        {/* Strategy Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {strategies.map((strategy) => (
            <button
              key={strategy.id}
              onClick={() => setActiveStrategy(strategy.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl border transition-all duration-300 ${
                activeStrategy === strategy.id
                  ? "bg-card border-accent shadow-lg shadow-accent/10"
                  : "bg-card/50 border-border hover:border-accent/50"
              }`}
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${strategy.color} flex items-center justify-center`}>
                <strategy.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="text-left">
                <span className="block font-serif font-semibold text-foreground">{strategy.name}</span>
                <span className="text-xs text-muted-foreground">{strategy.tagline}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Strategy Content */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            {/* Strategy Header */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10 pb-10 border-b border-border">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${currentStrategy.color} flex items-center justify-center flex-shrink-0`}>
                <currentStrategy.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                  {currentStrategy.name}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {currentStrategy.description}
                </p>
              </div>
            </div>

            {/* Steps */}
            <div className="mb-10">
              <h4 className="text-sm font-medium text-accent tracking-wider uppercase mb-6">
                As Etapas
              </h4>
              <div className="grid gap-4">
                {currentStrategy.steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 border border-border hover:border-accent/30 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 rounded-full bg-accent/10 text-accent font-serif font-bold text-sm flex items-center justify-center">
                        {index + 1}
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <step.icon className="w-5 h-5 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-serif font-semibold text-foreground mb-1">{step.title}</h5>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10 border-t border-border">
              {currentStrategy.stats.map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-secondary/30">
                  <span className="text-3xl font-serif font-bold text-accent block mb-2">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Pronta para dominar essas estrategias?
          </p>
          <Button 
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 py-6 rounded-xl shadow-lg shadow-accent/20"
            asChild
          >
            <a href="#" onClick={(e) => { e.preventDefault(); document.querySelector<HTMLButtonElement>('[data-chat-trigger]')?.click() }}>
              Conversar com IAngel
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
