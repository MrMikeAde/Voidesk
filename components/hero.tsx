'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Github } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section className="relative pt-24 pb-12 overflow-hidden sm:pt-40 sm:pb-32">
      <div className="container mx-auto px-4 sm:px-8">
        <motion.div
          className="max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-sm font-medium text-primary mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Professional Toolkit v2.0
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-8xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
            Curated tools for <br />
            <span className="text-muted-foreground/60">peak productivity.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
            The professional discovery hub for high-performance productivity tools. VoiDesk curates the web's best utilities so you can stop hunting and start shipping.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 text-base rounded-2xl">
              <Link href="https://github.com/MrMikeAde" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                Follow on Github
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base rounded-2xl">
              <Link href="/tools">
                Explore Tools
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center overflow-hidden relative">
                   <Image
                     src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 25}`}
                     alt="Avatar"
                     fill
                     className="object-cover"
                   />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold text-foreground">5,000+</span>
              <span className="text-muted-foreground ml-1">users optimized their workflow</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative background element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[140px] rounded-full -z-10"
      />
    </section>
  )
}
