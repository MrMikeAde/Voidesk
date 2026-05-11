'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/60 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/50" />
          <span className="text-xl font-bold tracking-tight text-white">Voidesk</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#tools" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Tools
          </Link>
          <Link href="#faq" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}
