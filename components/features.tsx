'use client'

import { Layout, Search, Zap, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    name: 'Centralized Hub',
    description: 'Access the web\'s most powerful productivity tools from a single, organized interface.',
    icon: Layout,
  },
  {
    name: 'Instant Discovery',
    description: 'Find the right tool for any task with our curated categories and lightning-fast search.',
    icon: Search,
  },
  {
    name: 'One-Click Launch',
    description: 'Skip the bookmarks and browser history. Open any utility instantly in a new tab.',
    icon: Zap,
  },
  {
    name: 'Zero Friction',
    description: 'No sign-ups, no tracking, and no unnecessary bloat. Just direct access to productivity.',
    icon: Shield,
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-8">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Features</h2>
          <p className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Everything you need to work faster and smarter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-3xl bg-secondary/30 border border-border/50 hover:bg-secondary/50 transition-colors group"
            >
              <div className="h-12 w-12 rounded-2xl bg-background border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{feature.name}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
