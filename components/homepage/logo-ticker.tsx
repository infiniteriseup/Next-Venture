"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"

import acmeLogo from "@/public/images/acme-corp.svg"
import apexLogo from "@/public/images/apex.svg"
import celestialLogo from "@/public/images/celestial.svg"
import echoValleyLogo from "@/public/images/echo-valley.svg"
import outsideLogo from "@/public/images/outside.svg"
import pulseLogo from "@/public/images/pulse.svg"
import quantumLogo from "@/public/images/quantum.svg"
import twiceLogo from "@/public/images/twice.svg"

const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
]

export default function LogoTicker() {
  return (
    <section className="overflow-x-clip py-24">
      <div className="container">
        <h3 className="text-center text-xl text-white/50">
          Trusted by Innovative Companies
        </h3>

        <div className="mt-12 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-16 pr-24"
          >
            {Array.from({ length: 2 }).map((_, index) => (
              <React.Fragment key={index}>
                {logos.map(logo => (
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    key={logo.name}
                    className="opacity-80"
                  />
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
