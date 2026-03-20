import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertCircle, ArrowLeft, Sparkles } from "lucide-react"

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 rounded-full bg-destructive/20 flex items-center justify-center mx-auto mb-6 border border-destructive/30">
          <AlertCircle className="w-10 h-10 text-destructive" />
        </div>

        <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
          Ops! Algo deu errado
        </h1>

        <p className="text-muted-foreground mb-8 text-pretty">
          Ocorreu um erro durante o processo de autenticacao. 
          Por favor, tente novamente ou entre em contato conosco se o problema persistir.
        </p>

        <div className="space-y-4">
          <Button asChild className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            <Link href="/auth/login">
              Tentar novamente
            </Link>
          </Button>

          <Button asChild variant="outline" className="w-full h-12 border-border hover:bg-card">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
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
