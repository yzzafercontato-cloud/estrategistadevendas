import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Mail, Sparkles, ArrowRight } from "lucide-react"

export default function CadastroSucessoPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6 border border-accent/30">
          <CheckCircle2 className="w-10 h-10 text-accent" />
        </div>

        <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
          Cadastro realizado!
        </h1>

        <p className="text-muted-foreground mb-8 text-pretty">
          Sua conta foi criada com sucesso. Enviamos um email de confirmacao para voce. 
          Por favor, verifique sua caixa de entrada e clique no link para ativar sua conta.
        </p>

        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-accent" />
            <span className="font-semibold text-foreground">Verifique seu email</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Se nao encontrar o email, verifique tambem sua pasta de spam ou lixo eletronico.
          </p>
        </div>

        <div className="space-y-4">
          <Button asChild className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            <Link href="/auth/login">
              Ir para o login
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>

          <Button asChild variant="outline" className="w-full h-12 border-border hover:bg-card">
            <Link href="/">
              Voltar ao inicio
            </Link>
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-accent">
          <Sparkles className="w-5 h-5" />
          <span className="text-sm font-medium">IAngel - Sua Estrategista de Vendas</span>
        </div>
      </div>
    </div>
  )
}
