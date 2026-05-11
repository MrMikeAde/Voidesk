'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What is Voidesk?',
    answer: 'Voidesk is a curated discovery hub that centralizes high-performance web tools. It is designed for professionals who want to optimize their workflow by having all essential productivity utilities in one accessible dashboard.',
  },
  {
    question: 'Is Voidesk a tool provider?',
    answer: 'Voidesk is a directory and launcher. We curate the best third-party tools (like Canva, iLovePDF, and Grammarly) and provide a unified interface to find and launch them instantly.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Voidesk is completely free to use. We aim to provide the best possible gateway to productivity tools without any subscription or sign-up hurdles.',
  },
  {
    question: 'Why use a hub instead of bookmarks?',
    answer: 'Bookmarks can become cluttered and disorganized. Voidesk provides a categorized, searchable, and visually intuitive workspace that allows for faster tool discovery and launch than traditional browser menus.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes. Voidesk is a static directory. We do not store your data, track your tool usage, or require any personal information. You interact directly with the third-party providers you choose.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">FAQ</h2>
            <h3 className="text-3xl sm:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h3>
            <p className="text-muted-foreground">
              Everything you need to know about the professional productivity hub.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border bg-card rounded-2xl px-6">
                <AccordionTrigger className="hover:no-underline py-6 text-left text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
