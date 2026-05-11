'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Search, Bookmark, ExternalLink } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'
import { motion, AnimatePresence } from 'framer-motion'

const tools = [
  {
    id: 1,
    name: 'iLovePDF',
    description: 'Powerful PDF editor and converter.',
    url: 'https://www.ilovepdf.com',
    logo: 'https://www.google.com/s2/favicons?domain=ilovepdf.com&sz=128',
    category: 'Utility',
  },
  {
    id: 2,
    name: 'Canva',
    description: 'Professional graphic design made easy.',
    url: 'https://www.canva.com',
    logo: 'https://www.google.com/s2/favicons?domain=canva.com&sz=128',
    category: 'Creative',
  },
  {
    id: 3,
    name: 'Remove.bg',
    description: 'Instant AI background removal.',
    url: 'https://www.remove.bg',
    logo: 'https://www.google.com/s2/favicons?domain=remove.bg&sz=128',
    category: 'Creative',
  },
  {
    id: 4,
    name: 'TinyPNG',
    description: 'Smart image compression for speed.',
    url: 'https://tinypng.com',
    logo: 'https://www.google.com/s2/favicons?domain=tinypng.com&sz=128',
    category: 'Creative',
  },
  {
    id: 5,
    name: 'CloudConvert',
    description: 'The ultimate file conversion tool.',
    url: 'https://cloudconvert.com',
    logo: 'https://www.google.com/s2/favicons?domain=cloudconvert.com&sz=128',
    category: 'Utility',
  },
  {
    id: 6,
    name: 'Grammarly',
    description: 'AI-powered writing and grammar assistant.',
    url: 'https://www.grammarly.com',
    logo: 'https://www.google.com/s2/favicons?domain=grammarly.com&sz=128',
    category: 'Performance',
  },
  {
    id: 7,
    name: 'Photopea',
    description: 'Advanced browser-based photo editor.',
    url: 'https://www.photopea.com',
    logo: 'https://www.google.com/s2/favicons?domain=photopea.com&sz=128',
    category: 'Creative',
  },
  {
    id: 8,
    name: 'GTmetrix',
    description: 'Deep website speed and performance analysis.',
    url: 'https://gtmetrix.com',
    logo: 'https://www.google.com/s2/favicons?domain=gtmetrix.com&sz=128',
    category: 'Performance',
  },
  {
    id: 9,
    name: 'Temp Mail',
    description: 'Disposable email for privacy and security.',
    url: 'https://temp-mail.org',
    logo: 'https://www.google.com/s2/favicons?domain=temp-mail.org&sz=128',
    category: 'Utility',
  },
  {
    id: 10,
    name: 'Speedtest',
    description: 'Global internet speed and quality testing.',
    url: 'https://www.speedtest.net',
    logo: 'https://www.google.com/s2/favicons?domain=speedtest.net&sz=128',
    category: 'Performance',
  },
]

export default function Home() {
  const pathname = usePathname()
  const [search, setSearch] = useState('')
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    const id = pathname.replace('/', '')
    if (id) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname])

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

        <section id="tools" className="py-24 sm:py-32 bg-secondary/10 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-8">
            <motion.div
              className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-2xl">
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Toolkit</h2>
                <h3 className="text-3xl sm:text-5xl font-bold text-foreground mb-6">
                  Professionally curated web utilities.
                </h3>
              </div>
              <div className="relative w-full max-w-md">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search tools or categories..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="h-14 w-full bg-card border border-border rounded-2xl pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-all shadow-sm"
                />
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              {search ? (
                <motion.div
                  key="search-results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6"
                >
                  {filteredTools.map((tool) => (
                    <ToolCard
                      key={tool.id}
                      tool={tool}
                      isFavorite={favorites.includes(tool.id)}
                      onFavorite={handleFavorite}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="categories"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-24"
                >
                  <ToolGroup title="Creative Design" tools={creativeTools} favorites={favorites} onFavorite={handleFavorite} />
                  <ToolGroup title="Utility & File Management" tools={utilityTools} favorites={favorites} onFavorite={handleFavorite} />
                  <ToolGroup title="Performance & Optimization" tools={performanceTools} favorites={favorites} onFavorite={handleFavorite} />
                </motion.div>
              )}
            </AnimatePresence>
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h4 className="text-xl font-bold text-foreground mb-8 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {title}
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {tools.map((tool, index) => (
          <ToolCard
            key={tool.id}
            tool={tool}
            index={index}
            isFavorite={favorites.includes(tool.id)}
            onFavorite={onFavorite}
          />
        ))}
      </div>
    </motion.div>
  )
}

function ToolCard({ tool, isFavorite, onFavorite, index = 0 }: { tool: any, isFavorite: boolean, onFavorite: (id: number) => void, index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative p-8 rounded-[2rem] bg-card border border-border hover:border-primary/30 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5"
    >
      <div className="flex items-start justify-between mb-8">
        <div className="h-20 w-20 rounded-3xl bg-linear-to-br from-secondary/80 to-secondary flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm border border-border/50 overflow-hidden p-4">
          <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>
        <button
          onClick={() => onFavorite(tool.id)}
          className={`p-2.5 rounded-2xl transition-all duration-300 ${
            isFavorite ? 'bg-primary text-primary-foreground scale-110 shadow-lg' : 'bg-secondary/50 text-muted-foreground hover:bg-primary/10 hover:text-primary hover:scale-110'
          }`}
        >
          <Bookmark className="h-5 w-5" fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div>
        <div className="mb-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60 bg-primary/5 px-2.5 py-1 rounded-full border border-primary/10">
            {tool.category}
          </span>
        </div>
        <h5 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{tool.name}</h5>
        <p className="text-sm text-muted-foreground mb-8 line-clamp-2 leading-relaxed">
          {tool.description}
        </p>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-bold text-primary transition-all group/link relative"
        >
          <span className="relative z-10">Launch Tool</span>
          <ExternalLink className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
        </a>
      </div>
    </motion.div>
  )
}
