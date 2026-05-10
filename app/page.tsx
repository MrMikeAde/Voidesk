'use client'

import { useState } from 'react'
import { Search, Grid, Settings, Bell, Bookmark } from 'lucide-react'
import Link from 'next/link'

const tools = [
  {
    id: 1,
    name: 'iLovePDF',
    description: 'PDF tools & editor',
    url: 'https://www.ilovepdf.com',
    icon: '📄',
  },
  {
    id: 2,
    name: 'Canva',
    description: 'Design & graphics',
    url: 'https://www.canva.com',
    icon: '🎨',
  },
  {
    id: 3,
    name: 'Remove.bg',
    description: 'Remove backgrounds',
    url: 'https://www.remove.bg',
    icon: '✂️',
  },
  {
    id: 4,
    name: 'TinyPNG',
    description: 'Image compression',
    url: 'https://tinypng.com',
    icon: '🖼️',
  },
  {
    id: 5,
    name: 'CloudConvert',
    description: 'File converter',
    url: 'https://cloudconvert.com',
    icon: '🔄',
  },
  {
    id: 6,
    name: 'Grammarly',
    description: 'Writing assistant',
    url: 'https://www.grammarly.com',
    icon: '✍️',
  },
  {
    id: 7,
    name: 'Photopea',
    description: 'Photo editor',
    url: 'https://www.photopea.com',
    icon: '🎭',
  },
  {
    id: 8,
    name: 'GTmetrix',
    description: 'Website performance',
    url: 'https://gtmetrix.com',
    icon: '⚡',
  },
  {
    id: 9,
    name: 'Temp Mail',
    description: 'Temporary email',
    url: 'https://temp-mail.org',
    icon: '📧',
  },
  {
    id: 10,
    name: 'Speedtest',
    description: 'Internet speed test',
    url: 'https://www.speedtest.net',
    icon: '🚀',
  },
]

export default function Home() {
  const [search, setSearch] = useState('')
  const [favorites, setFavorites] = useState<number[]>([])
  const [recentlyUsed, setRecentlyUsed] = useState<number[]>([])

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase()) ||
    tool.description.toLowerCase().includes(search.toLowerCase())
  )

  const handleToolClick = (id: number) => {
    // Add to recently used
    setRecentlyUsed((prev) => {
      const updated = [id, ...prev.filter((item) => item !== id)]
      return updated.slice(0, 5)
    })
  }

  const handleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const favoriteTools = tools.filter((tool) => favorites.includes(tool.id))
  const recentTools = tools.filter((tool) => recentlyUsed.includes(tool.id))

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded bg-foreground" />
              <h1 className="text-xl font-semibold text-foreground">OmniTools</h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-lg p-2 hover:bg-secondary transition-colors">
                <Bell className="h-5 w-5 text-foreground" />
              </button>
              <button className="rounded-lg p-2 hover:bg-secondary transition-colors">
                <Settings className="h-5 w-5 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="border-b border-border bg-background/50 px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tools... or press ⌘K"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-secondary/50 border border-border rounded-lg py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Favorites Section */}
        {favoriteTools.length > 0 && (
          <section className="mb-16">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-6">
              Favorites
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {favoriteTools.map((tool) => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  isFavorite={favorites.includes(tool.id)}
                  onFavorite={handleFavorite}
                  onClick={handleToolClick}
                />
              ))}
            </div>
          </section>
        )}

        {/* Recently Used Section */}
        {recentTools.length > 0 && (
          <section className="mb-16">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-6">
              Recently Used
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {recentTools.map((tool) => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  isFavorite={favorites.includes(tool.id)}
                  onFavorite={handleFavorite}
                  onClick={handleToolClick}
                />
              ))}
            </div>
          </section>
        )}

        {/* All Tools Section */}
        <section>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-6">
            {search ? 'Search Results' : 'All Tools'}
          </h2>
          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {filteredTools.map((tool) => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  isFavorite={favorites.includes(tool.id)}
                  onFavorite={handleFavorite}
                  onClick={handleToolClick}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-border bg-secondary/20 p-12 text-center">
              <p className="text-muted-foreground">No tools found matching your search.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}

interface Tool {
  id: number
  name: string
  description: string
  url: string
  icon: string
}

interface ToolCardProps {
  tool: Tool
  isFavorite: boolean
  onFavorite: (id: number) => void
  onClick: (id: number) => void
}

function ToolCard({ tool, isFavorite, onFavorite, onClick }: ToolCardProps) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => onClick(tool.id)}
      className="group relative rounded-lg border border-border bg-secondary/30 p-6 hover:bg-secondary/60 hover:border-foreground/50 transition-all duration-200 cursor-pointer"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <span className="text-3xl">{tool.icon}</span>
          <button
            onClick={(e) => {
              e.preventDefault()
              onFavorite(tool.id)
            }}
            className={`p-2 rounded-lg transition-colors ${
              isFavorite
                ? 'bg-foreground text-background'
                : 'bg-secondary hover:bg-foreground/20'
            }`}
          >
            <Bookmark
              className="h-4 w-4"
              fill={isFavorite ? 'currentColor' : 'none'}
            />
          </button>
        </div>
        <h3 className="font-semibold text-foreground text-sm">{tool.name}</h3>
        <p className="text-xs text-muted-foreground mt-2 flex-1">{tool.description}</p>
        <div className="mt-4 inline-flex text-xs text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
          Launch →
        </div>
      </div>
    </a>
  )
}
