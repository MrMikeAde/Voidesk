'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative pt-24 pb-12 overflow-hidden sm:pt-32 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            New: Unified Workspace v2.0
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            All your tools. <br />
            <span className="text-white/50">One seamless workspace.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
            Stop switching tabs and start shipping. Voidesk combines your favorite productivity apps into a single, high-performance dashboard designed for modern workflows.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-400">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl">
              Get Started for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="ghost" className="w-full sm:w-auto h-14 px-8 text-base text-white hover:bg-white/5 rounded-2xl">
              <Play className="mr-2 h-5 w-5 fill-current" />
              Watch Demo
            </Button>
          </div>

          <div className="mt-16 flex items-center gap-4 animate-in fade-in duration-1000 delay-500">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                   <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="Avatar" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold text-white">2,000+</span>
              <span className="text-muted-foreground ml-1">professionals optimized their workflow</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10 opacity-30" />
    </section>
  )
}
