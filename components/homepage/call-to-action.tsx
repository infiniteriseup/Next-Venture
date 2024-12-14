"use client"
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function CallToAction() {
  const [isHovered, setIsHovered] = useState(false)
  const animation = useRef<AnimationPlaybackControls>()
  const [scope, animate] = useAnimate()
  const router = useRouter()

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, repeat: Infinity, ease: "linear" },
    )
  }, [])

  useEffect(() => {
    if (animation.current) {
      animation.current.speed = isHovered ? 0.5 : 1
    }
  }, [isHovered])

  function handleClick() {
    router.push("/startup/create")
  }

  return (
    <section className="py-24">
      <div onClick={handleClick} className="flex overflow-x-clip p-4">
        <motion.div
          ref={scope}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group flex flex-none cursor-pointer gap-16 pr-16 text-7xl font-medium md:text-8xl"
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex items-center gap-16">
              <span className="text-7xl text-pink-400">&#10038;</span>
              <span className="transition duration-500 group-hover:text-pink-400">
                Try it Now!
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
