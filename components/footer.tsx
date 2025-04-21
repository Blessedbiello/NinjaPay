"use client"

import Link from "next/link"
import { NinjaLogo } from "@/components/ninja-logo"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { 
  Twitter, 
  Github, 
  Linkedin, 
  Send, 
  ChevronRight,
  Shield,
  Zap,
  CreditCard
} from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <NinjaLogo className="h-6 w-6" />
              <span className="font-bold text-lg">NinjaPay</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              The future of private payments. Secure, fast, and compliant with regulations while protecting your privacy.
            </p>
            <div className="flex items-center gap-3">
              <Link 
                href="#" 
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "rounded-full h-8 w-8"
                )}
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link 
                href="#" 
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "rounded-full h-8 w-8"
                )}
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link 
                href="#" 
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "rounded-full h-8 w-8"
                )}
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#features" className="hover:text-foreground transition-colors flex items-center gap-1">
                  <ChevronRight className="h-3 w-3" />
                  Features
                </Link>
              </li>
              <li>
                <Link href="#security" className="hover:text-foreground transition-colors flex items-center gap-1">
                  <ChevronRight className="h-3 w-3" />
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors flex items-center gap-1">
                  <ChevronRight className="h-3 w-3" />
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors flex items-center gap-1">
                  <ChevronRight className="h-3 w-3" />
                  API
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors flex items-center gap-1">
                  <ChevronRight className="h-3 w-3" />
                  Integration
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition-colors flex items-center gap-1">
                  <ChevronRight className="h-3 w-3" />
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors flex items-center gap-1">
                  <ChevronRight className="h-3 w-3" />
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors flex items-center gap-1">
                  <ChevronRight className="h-3 w-3" />
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors flex items-center gap-1">
                  <ChevronRight className="h-3 w-3" />
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors flex items-center gap-1">
                  <ChevronRight className="h-3 w-3" />
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="h-9" 
              />
              <button 
                className={cn(
                  buttonVariants({ size: "icon" }),
                  "h-9 w-9"
                )}
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mb-8">
            <div className="flex gap-3 items-start">
              <div className="bg-primary/10 p-2 rounded-full">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-sm">Privacy Guaranteed</h4>
                <p className="text-xs text-muted-foreground">Your financial data stays private with zero-knowledge proofs</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-primary/10 p-2 rounded-full">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-sm">Lightning Fast</h4>
                <p className="text-xs text-muted-foreground">Transactions confirm in milliseconds, not minutes</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-primary/10 p-2 rounded-full">
                <CreditCard className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-sm">Low Fees</h4>
                <p className="text-xs text-muted-foreground">Pay a fraction of traditional payment processing fees</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 NinjaPay. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}