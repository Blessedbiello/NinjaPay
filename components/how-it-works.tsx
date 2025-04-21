"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Secure Wallet Creation",
    description: "Create your NinjaPay wallet in seconds. Advanced encryption protects your keys and ensures only you have access to your funds.",
    image: "https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    number: "02",
    title: "Add Funds & Currencies",
    description: "Easily deposit crypto or connect your bank account to add traditional currencies. All conversions happen instantly with minimal fees.",
    image: "https://images.pexels.com/photos/7821486/pexels-photo-7821486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    number: "03",
    title: "Private Transactions",
    description: "Send money privately using stealth addresses and zero-knowledge proofs. Recipients get funds instantly with no way to trace the transaction history.",
    image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/95 z-0" />
      
      {/* Connected dots background */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, 
          backgroundSize: '32px 32px' 
        }} />
      </div>

      <div ref={ref} className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium mb-2"
          >
            SIMPLE & SECURE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            How NinjaPay Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Experience the perfect balance of simplicity and security.
            NinjaPay makes private payments as easy as sending a text message.
          </motion.p>
        </div>
        
        <div className="space-y-24 md:space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="inline-block text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-lg mb-6">{step.description}</p>
                
                {/* Step connector (only for non-last items) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex justify-center mt-12">
                    <div className="h-20 flex flex-col items-center">
                      <div className="h-full w-px bg-border" />
                      <ArrowDown className="text-muted-foreground h-5 w-5 mt-2 animate-bounce" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className={`rounded-xl overflow-hidden relative aspect-video md:aspect-square shadow-lg ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-60" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}