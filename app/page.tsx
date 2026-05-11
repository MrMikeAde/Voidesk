'use client'

import { useState } from 'react'
import { Search, Bookmark, ExternalLink } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'

const tools = [
  {
    id: 1,
    name: 'iLovePDF',
    description: 'PDF tools & editor',
    url: 'https://www.ilovepdf.com',
    icon: '📄',
    category: 'Utility',
  },
  {
    id: 2,
    name: 'Canva',
    description: 'Design & graphics',
    url: 'https://www.canva.com',
    icon: '🎨',
    category: 'Creative',
  },
  {
    id: 3,
    name: 'Remove.bg',
    description: 'Remove backgrounds',
    url: 'https://www.remove.bg',
    icon: '✂️',
    category: 'Creative',
  },
  {
    id: 4,
    name: 'TinyPNG',
    description: 'Image compression',
    url: 'https://tinypng.com',
    icon: '🖼️',
    category: 'Creative',
  },
  {
    id: 5,
    name: 'CloudConvert',
    description: 'File converter',
    url: 'https://cloudconvert.com',
    icon: '🔄',
    category: 'Utility',
  },
  {
    id: 6,
    name: 'Grammarly',
    description: 'Writing assistant',
    url: 'https://www.grammarly.com',
    icon: '✍️',
    category: 'Performance',
  },
  {
    id: 7,
    name: 'Photopea',
    description: 'Photo editor',
    url: 'https://www.photopea.com',
    icon: '🎨',
    category: 'Creative',
  },
  {
    id: 8,
    name: 'GTmetrix',
    description: 'Website performance',
    url: 'https://gtmetrix.com',
    icon: '⚡',
    category: 'Performance',
  },
  {
    id: 9,
    name: 'Temp Mail',
    description: 'Temporary email',
    url: 'https://temp-mail.org',
    icon: '📧',
    category: 'Utility',
  },
  {
    id: 10,
    name: 'Speedtest',
    description: 'Internet speed test',
    url: 'https://www.speedtest.net',
    icon: '🚀',
    category: 'Performance',
  },
]

export default function Home() {
  const [search, setSearch] = useState('')
  const [favorites, setFavorites] = useState<number[]>([])

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase()) ||
    tool.description.toLowerCase().includes(search.toLowerCase()) ||
    tool.category.toLowerCase().includes(search.toLowerCase())
  )

  const handleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const creativeTools = filteredTools.filter(t => t.category === 'Creative')
  const utilityTools = filteredTools.filter(t => t.category === 'Utility')
  const performanceTools = filteredTools.filter(t => t.category === 'Performance')

  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />

        {/* Search and Tools Section */}
        <section id="tools" className="py-24 sm:py-32 bg-white/[0.02]">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Discovery</h2>
                <h3 className="text-3xl sm:text-5xl font-bold text-white mb-6">
                  Explore our premium toolkit.
                </h3>
              </div>
              <div className="relative w-full max-w-md">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search tools or categories..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="h-14 w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-white placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-all"
                />
              </div>
            </div>

            {search ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {filteredTools.map((tool) => (
                  <ToolCard
                    key={tool.id}
                    tool={tool}
                    isFavorite={favorites.includes(tool.id)}
                    onFavorite={handleFavorite}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-24">
                <ToolGroup title="Creative" tools={creativeTools} favorites={favorites} onFavorite={handleFavorite} />
                <ToolGroup title="Utility" tools={utilityTools} favorites={favorites} onFavorite={handleFavorite} />
                <ToolGroup title="Performance" tools={performanceTools} favorites={favorites} onFavorite={handleFavorite} />
              </div>
            )}
          </div>
        </section>

        <Features />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

function ToolGroup({ title, tools, favorites, onFavorite }: { title: string, tools: any[], favorites: number[], onFavorite: (id: number) => void }) {
  if (tools.length === 0) return null
  return (
    <div>
      <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {title}
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {tools.map((tool) => (
          <ToolCard
            key={tool.id}
            tool={tool}
            isFavorite={favorites.includes(tool.id)}
            onFavorite={onFavorite}
          />
        ))}
      </div>
    </div>
  )
}

function ToolCard({ tool, isFavorite, onFavorite }: { tool: any, isFavorite: boolean, onFavorite: (id: number) => void }) {
  return (
    <div className="group relative p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1">
      <div className="flex items-start justify-between mb-6">
        <div className="h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
          {tool.icon}
        </div>
        <button
          onClick={() => onFavorite(tool.id)}
          className={`p-2 rounded-xl transition-colors ${
            isFavorite ? 'bg-primary text-primary-foreground' : 'bg-white/5 text-muted-foreground hover:bg-white/10'
          }`}
        >
          <Bookmark className="h-4 w-4" fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div>
        <h5 className="font-bold text-white mb-2">{tool.name}</h5>
        <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
          {tool.description}
        </p>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-white hover:text-primary transition-colors group/link"
        >
          Launch Tool
          <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
        </a>
      </div>
    </div>
  )
}
