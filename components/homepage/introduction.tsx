"use client"
import { useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

import Tag from "../tag"

const text = `Traditional platforms can be limiting, so we built a sleek, user-friendly space to showcase ideas, connect with innovators, and gain the recognition you deserve.`
const words = text.split(" ")

export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  })

  const [currentWord, setCurrentWord] = useState(0)

  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length])

  useEffect(() => {
    wordIndex.on("change", latest => {
      setCurrentWord(latest)
    })
  }, [wordIndex])

  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="sticky top-20 md:top-28 lg:top-40">
          <div className="flex justify-center">
            <Tag>Introducing Next ventures</Tag>
          </div>

          <div className="mt-10 text-center text-4xl font-medium md:text-6xl lg:text-7xl">
            <span>Your startup ideas deserve the spotlight.</span>{" "}
            <span className="">
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={cn(
                    "text-white/15 transition duration-500",
                    wordIndex < currentWord && "text-white",
                  )}
                >{`${word} `}</span>
              ))}
            </span>
            <span className="block text-pink-400">
              That&apos;s why we built Next ventures.
            </span>
          </div>
        </div>
        <div className="h-[30vh]" ref={scrollTarget}></div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  )
}
