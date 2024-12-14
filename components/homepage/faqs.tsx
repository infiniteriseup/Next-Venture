"use client"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

import Tag from "@/components/tag"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What makes Next ventures unique?",
    answer:
      "Next ventures combines simplicity with powerful features to help entrepreneurs share their ideas and gain exposure. It’s designed to be user-friendly and offers tools specifically tailored for virtual pitch competitions and networking.",
  },
  {
    question: "Is Next ventures suitable for beginners?",
    answer:
      "Absolutely! Next ventures is intuitive and easy to use from the start. Whether you’re an experienced entrepreneur or just starting out, the platform guides you every step of the way.",
  },
  {
    question: "How does the pitch submission process work?",
    answer:
      "Submitting your pitch is straightforward. Just create an account, upload your idea, and fill out a few details. Your pitch will be live and ready for others to discover and vote on.",
  },
  {
    question: "Can I collaborate with others on my pitch?",
    answer:
      "Yes! Next ventures allows you to invite collaborators to work on pitches, share insights, and refine your ideas for the best presentation.",
  },
  {
    question: "What kind of exposure can I expect?",
    answer:
      "Next ventures is designed to connect you with a global audience of entrepreneurs, investors, and innovators. Your ideas can gain visibility through voting, networking, and virtual competitions.",
  },
]

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <section id="faqs" className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Faqs</Tag>
        </div>
        <h2 className="mx-auto mt-6 max-w-xl text-center text-6xl font-medium">
          Questions? We&apos;ve got{" "}
          <span className="text-pink-400">answers</span>
        </h2>
        <div className="mx-auto mt-12 flex max-w-xl flex-col gap-6">
          {faqs.map((faq, faqIndex) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-white/10 bg-neutral-900 p-6"
            >
              <div
                className="flex items-center justify-between"
                onClick={() => setSelectedIndex(faqIndex)}
              >
                <h3 className="font-medium">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={cn(
                    "feather feather-plus flex-shrink-0 text-pink-400 transition duration-300",
                    selectedIndex === faqIndex && "rotate-45",
                  )}
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>

              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{ height: 0, marginTop: 0 }}
                    animate={{
                      height: "auto",
                      marginTop: 24,
                    }}
                    exit={{ height: 0, marginTop: 0 }}
                    className={cn("overflow-hidden")}
                  >
                    <p className="text-white/50">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
