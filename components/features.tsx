import { Zap, Search, Layout, Rocket } from 'lucide-react'

const features = [
  {
    title: 'Instant Access',
    description: 'Launch any tool with a single click. No more bookmarks or browser history hunting.',
    icon: Zap,
  },
  {
    title: 'Unified Search',
    description: 'Find any tool across your entire workspace with our lightning-fast command bar.',
    icon: Search,
  },
  {
    title: 'Workspace Personalization',
    description: 'Customize your dashboard layout and organize tools by project or category.',
    icon: Layout,
  },
  {
    title: 'High Performance',
    description: 'Lightweight and optimized for speed, ensuring your workflow remains uninterrupted.',
    icon: Rocket,
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Features</h2>
          <h3 className="text-3xl sm:text-5xl font-bold text-white">
            Everything you need to work faster and smarter.
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{feature.title}</h4>
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
