"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { cn } from "@/lib/utils"
import { NinjaLogo } from "@/components/ninja-logo"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <NinjaLogo className="h-8 w-8" />
          <span className="font-bold text-xl">NinjaPay</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href="#features" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Features
          </Link>
          <Link 
            href="#how-it-works" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            How It Works
          </Link>
          <Link 
            href="#security" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Security
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild>
              <Link href="#waitlist">Join Waitlist</Link>
            </Button>
          </div>
        </nav>

        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon"
            className="text-foreground"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden">
          <div className="container flex h-16 items-center justify-end">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container flex flex-col gap-6 p-6">
            <Link 
              href="#features" 
              className="text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              href="#security" 
              className="text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Security
            </Link>
            <Button asChild>
              <Link href="#waitlist" onClick={() => setIsOpen(false)}>
                Join Waitlist
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}