'use client'

import { useState } from 'react'
import { Bird, Send, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function ChatBox() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:michaeladedapo01@gmail.com?subject=VoiDesk Feedback&body=${encodeURIComponent(message)}`
    setMessage('')
    setIsOpen(false)
  }

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mr-2 w-72 sm:w-80 overflow-hidden rounded-[2rem] bg-card border border-border shadow-2xl"
          >
            <div className="bg-primary p-6 text-primary-foreground flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">wanna talk?</h3>
                <p className="text-xs opacity-80">We'd love to hear from you!</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Suggest a tool or just say hi..."
                required
                className="w-full min-h-[120px] bg-secondary/50 border border-border rounded-2xl p-4 text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <Button type="submit" className="w-full h-12 rounded-xl font-bold">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ x: -5 }}
        className={`h-16 w-12 rounded-l-2xl flex items-center justify-center shadow-xl transition-all duration-300 ${
          isOpen ? 'bg-background border border-r-0 border-border text-primary' : 'bg-primary text-primary-foreground'
        }`}
      >
        <Bird className={`h-6 w-6 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>
    </div>
  )
}
