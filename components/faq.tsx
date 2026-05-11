'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "What exactly is @mrmikeade's toolkit?",
    answer: "It's a professional discovery hub that curates and centralizes the web's best productivity tools. Instead of maintaining hundreds of bookmarks, you can use this platform as your primary dashboard to find and launch utilities instantly."
  },
  {
    question: "Is there a cost to use this platform?",
    answer: "The platform itself is a free discovery resource. We do not charge users for access to our curated list of tools. Some of the third-party tools we link to may have their own pricing models."
  },
  {
    question: "How do you choose which tools to include?",
    answer: "We focus on high-performance, privacy-conscious, and utility-driven tools. Every tool in our toolkit is manually verified to ensure it provides genuine value to professional workflows."
  },
  {
    question: "Do I need to create an account?",
    answer: "No. This project is built on a 'zero-friction' philosophy. You can access every feature and discovery tool immediately without sign-ups or tracking."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">FAQ</h2>
            <p className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Common Questions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50 py-2">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
