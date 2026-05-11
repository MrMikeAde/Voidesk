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
    answer: 'Voidesk is a unified productivity workspace that brings all your favorite web-based tools into a single, high-performance dashboard. It helps you eliminate tab clutter and optimize your workflow.',
  },
  {
    question: 'Is Voidesk free to use?',
    answer: 'Yes, Voidesk offers a generous free tier that includes all essential features. We also have premium plans for advanced users who need additional customization and integrations.',
  },
  {
    question: 'Can I add my own tools to the workspace?',
    answer: 'Currently, you can use our curated list of high-performance tools. We are working on a feature that will allow users to add custom URLs and integrate their own favorite apps.',
  },
  {
    question: 'How does the search functionality work?',
    answer: 'Our unified search bar allows you to quickly find any tool in our library. Just start typing, and the results will filter in real-time. You can also use keyboard shortcuts to trigger the search.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Security is our top priority. Voidesk does not store any sensitive data from the third-party tools you use. We only manage the links and your workspace preferences.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-white/[0.02]">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">FAQ</h2>
            <h3 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h3>
            <p className="text-muted-foreground">
              Everything you need to know about the product and how it works.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-white/10 bg-white/5 rounded-2xl px-6">
                <AccordionTrigger className="hover:no-underline py-6 text-left text-white">
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
