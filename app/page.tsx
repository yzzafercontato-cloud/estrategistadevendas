"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ChatSection } from "@/components/chat-section"
import { StrategiesSection } from "@/components/strategies-section"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [showChat, setShowChat] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Header onOpenChat={() => setShowChat(true)} />
      <HeroSection onOpenChat={() => setShowChat(true)} />
      <FeaturesSection />
      <StrategiesSection />
      <Footer />
      
      {showChat && (
        <ChatSection onClose={() => setShowChat(false)} />
      )}
    </main>
  )
}
