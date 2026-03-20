"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sparkles, User, LogOut, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import type { User as SupabaseUser } from "@supabase/supabase-js"

interface HeaderProps {
  onOpenChat: () => void
}

export function Header({ onOpenChat }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }
    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [supabase.auth])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  const isAdmin = user?.user_metadata?.is_admin === true

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-accent">IAngel</span>
              <span className="text-xs text-muted-foreground tracking-wider">Estrategista de Vendas</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#estrategias" className="text-sm text-foreground/80 hover:text-accent transition-colors">
              Estrategias
            </a>
            <a href="#como-funciona" className="text-sm text-foreground/80 hover:text-accent transition-colors">
              Como Funciona
            </a>
            <a href="#sobre" className="text-sm text-foreground/80 hover:text-accent transition-colors">
              Sobre
            </a>
          </div>

          {/* Auth Buttons / User Menu */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              onClick={onOpenChat}
              variant="outline"
              className="border-accent/30 text-accent hover:bg-accent/10 font-medium"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Conversar
            </Button>

            {loading ? (
              <div className="w-10 h-10 rounded-full bg-muted animate-pulse" />
            ) : user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20">
                    <User className="w-5 h-5 text-primary" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-card border-border">
                  <div className="px-3 py-2">
                    <p className="text-sm font-medium text-foreground truncate">
                      {user.user_metadata?.name || "Usuario"}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                  </div>
                  <DropdownMenuSeparator className="bg-border" />
                  {isAdmin && (
                    <>
                      <DropdownMenuItem asChild>
                        <Link href="/admin" className="cursor-pointer text-accent">
                          <Crown className="w-4 h-4 mr-2" />
                          Painel Admin
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-border" />
                    </>
                  )}
                  <DropdownMenuItem 
                    onClick={handleLogout}
                    className="cursor-pointer text-destructive focus:text-destructive"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button asChild variant="ghost" className="text-foreground hover:text-accent">
                  <Link href="/auth/login">Entrar</Link>
                </Button>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/auth/cadastro">Cadastrar</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              <a 
                href="#estrategias" 
                className="text-sm text-foreground/80 hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Estrategias
              </a>
              <a 
                href="#como-funciona" 
                className="text-sm text-foreground/80 hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Como Funciona
              </a>
              <a 
                href="#sobre" 
                className="text-sm text-foreground/80 hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </a>
              
              <div className="border-t border-border pt-4 mt-2">
                {user ? (
                  <>
                    <div className="mb-3 px-1">
                      <p className="text-sm font-medium text-foreground">
                        {user.user_metadata?.name || "Usuario"}
                      </p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                    {isAdmin && (
                      <Link 
                        href="/admin"
                        className="flex items-center gap-2 text-sm text-accent mb-3"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Crown className="w-4 h-4" />
                        Painel Admin
                      </Link>
                    )}
                    <Button 
                      onClick={() => {
                        handleLogout()
                        setMobileMenuOpen(false)
                      }}
                      variant="outline"
                      className="w-full border-destructive/30 text-destructive hover:bg-destructive/10"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sair
                    </Button>
                  </>
                ) : (
                  <div className="flex flex-col gap-2">
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/auth/login" onClick={() => setMobileMenuOpen(false)}>
                        Entrar
                      </Link>
                    </Button>
                    <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link href="/auth/cadastro" onClick={() => setMobileMenuOpen(false)}>
                        Cadastrar
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
              
              <Button 
                onClick={() => {
                  onOpenChat()
                  setMobileMenuOpen(false)
                }}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium w-full mt-2"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Conversar com IAngel
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
