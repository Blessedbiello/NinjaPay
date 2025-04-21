"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Shield, Zap } from "lucide-react"
import { NinjaLogo } from "@/components/ninja-logo"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-48 md:pb-32">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/95 z-0" />
      
      {/* Animated blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-0 opacity-20 dark:opacity-10">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-3xl animate-rotate-slow" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block"
          >
            <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <NinjaLogo className="h-5 w-5" />
              <span className="text-sm font-medium">Stealth Mode - Launching Soon</span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Private Payments for the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Digital Age
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto"
          >
            NinjaPay combines the speed of Solana with cutting-edge privacy technology. 
            Make payments that are invisible to prying eyes, yet fully compliant with regulations.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="#waitlist">
                Join Waitlist
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary/20">
              <Link href="#how-it-works" className="flex items-center gap-2">
                How It Works
                <ArrowDown className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm"
          >
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">100% Private</h3>
            <p className="text-muted-foreground">Your transactions stay between you and the recipient, hidden from prying eyes.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col items-center text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm"
          >
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">Powered by Solana, transactions confirm in milliseconds, not minutes.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm"
          >
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                <path d="M7.5 12H16.5" />
                <path d="M12.5 7L17.5 12L12.5 17" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Low Fees</h3>
            <p className="text-muted-foreground">Say goodbye to expensive transaction fees. Pay a fraction of traditional costs.</p>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}