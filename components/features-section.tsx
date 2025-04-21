"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { 
  ShieldCheck, 
  Lock, 
  Zap, 
  CreditCard, 
  Fingerprint, 
  Wallet 
} from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: ShieldCheck,
    title: "Zero-Knowledge Proofs",
    description: "Cryptographic protocols that allow one party to prove to another that a statement is true without revealing any other information."
  },
  {
    icon: Lock,
    title: "Stealth Addresses",
    description: "One-time addresses that prevent transaction history tracking, ensuring your payment history remains private."
  },
  {
    icon: Zap,
    title: "Lightning Fast Settlement",
    description: "Complete transactions in milliseconds on Solana's high-performance blockchain."
  },
  {
    icon: CreditCard,
    title: "Fiat On/Off Ramps",
    description: "Easily convert between cryptocurrencies and traditional currencies like USD, EUR, and more."
  },
  {
    icon: Fingerprint,
    title: "Regulatory Compliance",
    description: "Built-in compliance tools allow you to prove legitimacy to authorities when required without compromising privacy."
  },
  {
    icon: Wallet,
    title: "Multi-Currency Support",
    description: "Send and receive SOL, USDC, and other Solana-based tokens with the same level of privacy and speed."
  }
]

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background dark:from-background/95 dark:to-background z-0" />
      
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div ref={ref} className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium mb-2"
          >
            BUILT FOR PRIVACY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            State-of-the-Art Privacy Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            NinjaPay combines cutting-edge cryptography with Solana's speed to create
            a payment system that protects your financial privacy without sacrificing compliance.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={cn(
                "relative p-6 rounded-xl border bg-card transition-all duration-200 hover:shadow-md",
                "group hover:border-primary/50"
              )}
            >
              <div className="absolute -z-10 inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}