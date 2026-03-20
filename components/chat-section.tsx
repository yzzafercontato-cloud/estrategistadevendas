"use client"

import { useState, useRef, useEffect } from "react"
import { X, Send, Sparkles, User, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ChatSectionProps {
  onClose: () => void
}

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

const INITIAL_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content: `Ola! Sou a IAngel, sua estrategista de vendas pessoal.

Estou aqui para te ajudar a dominar o Social Selling e transformar relacionamentos em resultados reais.

Posso te ajudar com:
- **Operacao Turbo**: Estrategia para vender todos os dias via relacionamento nas redes
- **Operacao Secreta**: Lancamento estruturado em 15 dias + 7 dias de venda ativa
- **Qualificacao de Leads**: Identificar quem esta pronto para comprar
- **Scripts de Conversao**: Mensagens estrategicas para cada etapa

Como posso te ajudar hoje?`
}

const QUICK_ACTIONS = [
  "Como funciona a Operacao Turbo?",
  "Me ajude a qualificar um lead",
  "Preciso de um script para o direct",
  "Como criar uma oferta irresistivel?"
]

export function ChatSection({ onClose }: ChatSectionProps) {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    if (lowerMessage.includes("turbo") || lowerMessage.includes("social selling")) {
      return `**Operacao Turbo** e uma estrategia poderosa para vender todos os dias!

A base e o conceito de **Social Selling** - vendas via relacionamento nas redes sociais.

**As 5 Etapas:**
1. **Atracao**: Conteudo estrategico que gera interacao
2. **Qualificacao**: Separar quem esta pronto de quem ainda esta em construcao
3. **Conexao**: Conduzir o relacionamento com intencao
4. **Diagnostico e Venda Consultiva**: Fechamento sem pressao
5. **Pos-venda**: Manter relacionamento e resultados

**Dados importantes:**
- 78% das empresas que usam Social Selling vendem mais
- O ciclo de vendas e 22% mais curto
- 69% se sentem mais propensos a comprar de quem interagiram

Quer que eu detalhe alguma etapa especifica?`
    }
    
    if (lowerMessage.includes("qualificar") || lowerMessage.includes("lead") || lowerMessage.includes("persona")) {
      return `**Qualificacao de Leads** e fundamental para direcionar sua energia!

Avalie cada lead em 5 criterios (0 a 2 pontos cada):

1. **Foto de Perfil**
   - 0: Sem rosto, perfil fechado
   - 1: Foto ok, mas neutra
   - 2: Passa seguranca e alinhamento

2. **Bio e Conteudo**
   - 0: Bio vaga, sem informacao
   - 1: Alguma informacao, pouco clara
   - 2: Bio e posts alinhados com seu nicho

3. **Dor ou Desafio**
   - 0: Nenhum sinal
   - 1: Indicios leves
   - 2: Problema claro que voce resolve

4. **Consumo de Conteudo**
   - 0: Nao demonstra interesse
   - 1: Curte conteudos parecidos
   - 2: Acompanha seu conteudo

5. **Comportamento**
   - 0: Reclama ou resiste
   - 1: Insegura, mas quer melhorar
   - 2: Aberta e responsiva

**Resultado:**
- 8-10 pontos: Persona apta - pode aprofundar
- 5-7 pontos: Em observacao - nutrir com leveza
- 0-4 pontos: Nao e o momento - manter no radar

Quer que eu te ajude a avaliar alguem especifico?`
    }
    
    if (lowerMessage.includes("script") || lowerMessage.includes("direct") || lowerMessage.includes("mensagem")) {
      return `**Scripts para o Direct** - Leia os sinais e conduza!

**Abrindo Espaco Seguro:**
- "Oi, [nome]! Que bom te ver aqui. Me conta, qual teu momento no digital hoje?"
- "Vi tua interacao e quis puxar papo. Tu ja empreende ou ta comecando?"
- "Adorei tua resposta... me conta, o que mais ta te travando hoje?"

**Lendo os Sinais:**

🟢 **Sinal Verde** (se abriu, compartilhou dores):
- Aprofundar: "Tu comentou que ta travada... o que tu mais quer destravar agora?"

🟡 **Sinal Amarelo** (responde superficialmente):
- Pergunta leve: "E hoje, tu ta conseguindo vender ou ainda ta estruturando?"

🔴 **Sinal Vermelho** (resposta seca, so emoji):
- Encerrar com leveza: "Tudo bem! Qualquer hora que quiser trocar ideia, to por aqui."

**Regra de Ouro:**
- Nao avanca no vermelho
- Nao perde o timing no verde
- Respeita o tempo no amarelo

Quer um script especifico para alguma situacao?`
    }
    
    if (lowerMessage.includes("oferta") || lowerMessage.includes("produto") || lowerMessage.includes("vender")) {
      return `**Criando uma Oferta Irresistivel**

Uma oferta forte precisa de estrutura:

**1. Transformacao Clara**
- Ponto A: Onde a pessoa esta (dor)
- Ponto B: Onde ela quer chegar (resultado)
- Caminho: Como voce leva ela la

**2. Promessa Estruturada**
"Eu ajudo [QUEM] a conseguir [RESULTADO] em [TEMPO] sem ter que [OBJECAO] atraves do [METODO]"

**3. Entregaveis Tangiveis**
- O que exatamente ela recebe
- Como sera o acompanhamento
- Onde sera entregue

**4. Bonus Estrategicos**
- Bonus de valor: Grupo, sessao individual
- Bonus de escassez: Para primeiros inscritos

**5. Ancoragem de Preco**
- Mostre o valor real primeiro
- Depois apresente o investimento
- Parcelas primeiro, depois a vista

Exemplo:
- 12x de R$250
- ou R$2.700 a vista

Quer ajuda para estruturar sua oferta especifica?`
    }
    
    if (lowerMessage.includes("secreta") || lowerMessage.includes("lancamento")) {
      return `**Operacao Secreta** - Lancamento em 22 dias!

**FASE 1 (15 dias):**

1. **Escolher/Criar o Produto**
   - Definir entregaveis, onboarding, duracao

2. **Criar a Oferta**
   - Transformacao A→B
   - Ticket e formas de pagamento
   - Bonus estrategicos

3. **Criar a Promessa**
   - Headline clara e direta

4. **Aquecimento e Captacao**
   - Antecipacao no conteudo
   - Sequencia de "inimigo em comum"

5. **WhatsApp**
   - Boas-vindas + audios estrategicos

**FASE 2 (7 dias):**

1. **Estrutura da Aula**
   - Promessa, causa, dor, conteudo, semeio

2. **Pitch de Venda**
   - Abertura forte → Conteudo → Transicao → Oferta

3. **Venda Ativa**
   - Abordagem no direct
   - Follow-up estrategico

**Meta:** Taxa de comparecimento de 15-50%

Quer que eu detalhe alguma fase?`
    }
    
    return `Entendi sua pergunta! Como sua estrategista de vendas, posso te ajudar com:

1. **Operacao Turbo** - Vender todos os dias via Social Selling
2. **Operacao Secreta** - Lancamento estruturado de 22 dias
3. **Qualificacao de Leads** - Identificar quem esta pronto
4. **Scripts de Conversao** - Mensagens para cada etapa
5. **Criacao de Ofertas** - Estruturar produtos irresistiveis
6. **Venda Consultiva** - Fechar sem pressao

Sobre qual desses temas voce gostaria de se aprofundar?`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim()
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000))

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: generateResponse(userMessage.content)
    }

    setMessages(prev => [...prev, assistantMessage])
    setIsLoading(false)
  }

  const handleQuickAction = (action: string) => {
    setInput(action)
    inputRef.current?.focus()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="w-full max-w-2xl h-[85vh] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-secondary/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-serif font-semibold text-foreground">IAngel</h3>
              <span className="text-xs text-accent">Estrategista de Vendas</span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.role === "user" 
                  ? "bg-accent" 
                  : "bg-gradient-to-br from-primary to-accent"
              }`}>
                {message.role === "user" 
                  ? <User className="w-4 h-4 text-accent-foreground" />
                  : <Sparkles className="w-4 h-4 text-primary-foreground" />
                }
              </div>
              <div className={`max-w-[80%] p-4 rounded-2xl ${
                message.role === "user"
                  ? "bg-accent text-accent-foreground rounded-br-md"
                  : "bg-secondary text-foreground rounded-bl-md"
              }`}>
                <div className="text-sm whitespace-pre-wrap leading-relaxed prose prose-sm prose-invert max-w-none">
                  {message.content.split('\n').map((line, i) => {
                    // Handle bold text
                    const parts = line.split(/\*\*(.*?)\*\*/g)
                    return (
                      <p key={i} className={i > 0 ? "mt-2" : ""}>
                        {parts.map((part, j) => 
                          j % 2 === 1 
                            ? <strong key={j} className="font-semibold text-accent">{part}</strong>
                            : part
                        )}
                      </p>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="bg-secondary p-4 rounded-2xl rounded-bl-md">
                <Loader2 className="w-5 h-5 text-accent animate-spin" />
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        {messages.length === 1 && (
          <div className="px-4 pb-2">
            <div className="flex flex-wrap gap-2">
              {QUICK_ACTIONS.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action)}
                  className="text-xs px-3 py-2 rounded-full bg-secondary hover:bg-secondary/80 text-foreground border border-border hover:border-accent/50 transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-secondary/30">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-input border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl px-4"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
