"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does a 60-second video take?",
    answer: "Our standard turnaround for a 60-second 2D explainer is 4-6 weeks from discovery to final delivery. We also offer expedited 2-week delivery for an additional fee depending on our current studio capacity."
  },
  {
    question: "Do you handle scriptwriting and voiceovers?",
    answer: "Yes! We are a full-service studio. We write the script, record the professional voiceover, and compose the music/sound design. You can be as hands-on or hands-off as you prefer."
  },
  {
    question: "What if I want changes during the process?",
    answer: "Our process is highly collaborative. You get revision rounds at every major milestone (Script, Storyboard, Styleframes, and Final Animation) before we move to the next step, ensuring you love the final result."
  },
  {
    question: "Who owns the final video?",
    answer: "You do. Upon final payment, you own full commercial rights to the final video in perpetuity. We only ask for permission to feature it in our studio portfolio."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-surface relative border-t-4 border-foreground">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-black mb-6 uppercase text-foreground"
          >
            Got <span className="text-secondary underline decoration-8 decoration-primary underline-offset-4">Questions?</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-4 border-foreground bg-white hard-shadow overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none hover:bg-background transition-colors"
              >
                <span className="text-lg font-bold text-foreground pr-8 uppercase tracking-wide">{faq.question}</span>
                <div className={`w-8 h-8 border-2 border-foreground flex items-center justify-center transition-colors ${openIndex === i ? 'bg-primary' : 'bg-white'}`}>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === i ? "rotate-180 text-white" : "text-foreground"}`} 
                  />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-2 text-muted text-base font-medium leading-relaxed border-t-2 border-foreground/10">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
