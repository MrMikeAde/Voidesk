'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative pt-24 pb-12 overflow-hidden sm:pt-32 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-8 text-center sm:text-left">
        <div className="max-w-4xl mx-auto sm:mx-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-sm font-medium text-primary mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Verified Toolkit v2.0
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            All your tools. <br />
            <span className="text-muted-foreground">One seamless dashboard.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 mx-auto sm:mx-0">
            The professional discovery hub for high-performance productivity tools. Voidesk curates and centralizes the best web utilities so you can stop hunting and start shipping.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-400 justify-center sm:justify-start">
            <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 text-base rounded-2xl">
              <Link href="#tools">
                Explore the Toolkit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center gap-4 animate-in fade-in duration-1000 delay-500 justify-center sm:justify-start">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-xs font-bold text-foreground overflow-hidden relative">
                   <Image
                     src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`}
                     alt="Avatar"
                     fill
                     className="object-cover"
                   />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold text-foreground">5,000+</span>
              <span className="text-muted-foreground ml-1">users optimized their daily workflow</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10 opacity-30" />
    </section>
  )
}
