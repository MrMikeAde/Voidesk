import { Zap, Search, Layout, Rocket } from 'lucide-react'

const features = [
  {
    title: 'Centralized Hub',
    description: 'Access the web\'s most powerful productivity tools from a single, organized interface.',
    icon: Layout,
  },
  {
    title: 'Instant Discovery',
    description: 'Find the right tool for any task with our curated categories and lightning-fast search.',
    icon: Search,
  },
  {
    title: 'One-Click Launch',
    description: 'Skip the bookmarks and browser history. Open any utility instantly in a new tab.',
    icon: Zap,
  },
  {
    title: 'Zero Friction',
    description: 'No sign-ups, no tracking, and no unnecessary bloat. Just direct access to productivity.',
    icon: Rocket,
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="max-w-2xl mb-16 text-center sm:text-left">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Features</h2>
          <h3 className="text-3xl sm:text-5xl font-bold text-foreground">
            Everything you need to work faster and smarter.
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all group shadow-sm">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">{feature.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
