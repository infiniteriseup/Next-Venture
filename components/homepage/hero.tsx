"use client"
import { motion, useAnimate } from "framer-motion"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useEffect, useRef } from "react"

import Pointer from "@/components/pointer"
import cursorYouImage from "@/public/images/cursor-you.svg"
import designExample1Image from "@/public/images/design-example-1.png"
import designExample2Image from "@/public/images/design-example-2.png"

import SearchForm from "../search-form"

export default function Hero() {
  const searchParams = useSearchParams()
  const query = searchParams.get("query") || ""

  const [leftDesignScope, leftDesignAnimate] = useAnimate()
  const [leftPointerScope, leftPointerAnimate] = useAnimate()
  const [rightDesignScope, rightDesignAnimate] = useAnimate()
  const [rightPointerScope, rightPointerAnimate] = useAnimate()
  const constraintRef = useRef(null)

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ])

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ])

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ])

    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { x: 0, y: [0, 20, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ])
  }, [])

  return (
    <section
      className="mx-auto mt-20 max-w-[1600px] overflow-x-clip py-24"
      style={{
        cursor: `url(${cursorYouImage.src}), auto`,
      }}
      ref={constraintRef}
    >
      <div className="container relative">
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          // dragConstraints={constraintRef}
          dragConstraints={{ left: -100, top: -300, right: 850, bottom: 200 }}
          className="absolute -left-32 top-16 z-50 hidden lg:block"
        >
          <Image
            src={designExample1Image}
            alt="design example 1 image"
            draggable={false}
          />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute left-56 top-96 z-[60] hidden lg:block"
        >
          <Pointer name="Andrea" />
        </motion.div>

        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, x: 100, y: 100 }}
          drag
          dragConstraints={{ left: -850, top: -300, right: 150, bottom: 200 }}
          className="absolute -right-64 -top-16 z-50 hidden lg:block"
        >
          <Image
            src={designExample2Image}
            alt="design example 2 image"
            draggable={false}
          />
        </motion.div>
        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 275, y: 100 }}
          className="absolute -top-4 right-80 z-[60] hidden lg:block"
        >
          <Pointer name="Bryan" color="red" />
        </motion.div>

        <div className="flex justify-center">
          <div className="inline-flex rounded-full bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-1 font-semibold text-neutral-950">
            ✨ Secured £7.5M in Seed Funding
          </div>
        </div>
        <h1 className="mx-auto mt-6 max-w-4xl text-center text-4xl font-medium md:text-5xl lg:text-8xl">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xl text-white/50">
          Submit your startup ideas, explore innovative pitches, and shine in
          virtual competitions with a sleek, user-friendly platform designed to
          empower entrepreneurs.
        </p>
        <SearchForm query={query} />
      </div>
    </section>
  )
}
