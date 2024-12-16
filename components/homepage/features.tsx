import Image from "next/image"

import Avatar from "@/components/avatar"
import FeatureCard from "@/components/feature-card"
import Key from "@/components/key"
import Tag from "@/components/tag"
import avatar1 from "@/public/images/avatar-ashwin-santiago.jpg"
import avatar3 from "@/public/images/avatar-florence-shaw.jpg"
import avatar2 from "@/public/images/avatar-lula-meyers.jpg"
import avatar4 from "@/public/images/avatar-owen-garcia.jpg"

const features = [
  "Idea Submission",
  "Pitch Voting",
  "Startup Showcase",
  "Feedback Hub",
  "Networking Platform",
  "Virtual Competitions",
  "Global Exposure",
]

export default function Features() {
  return (
    <section id="features" className="container py-24">
      <div className="flex justify-center">
        <Tag>Features</Tag>
      </div>

      <h2 className="mx-auto mt-6 max-w-2xl text-center text-6xl font-medium">
        Where vision meets <span className="text-pink-400">execution</span>
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-3">
        <FeatureCard
          title="Seamless Networking"
          description="Connect with like-minded innovators and expand your entrepreneurial circle."
          className="group transition duration-500 hover:scale-105 md:col-span-2 lg:col-span-1"
        >
          <div className="flex aspect-video items-center justify-center">
            {/* <Avatar className="size-20 overflow-hidden rounded-full border-4 border-blue-500 bg-neutral-900 p-1">
              <AvatarImage
                src="/images/avatar-ashwin-santiago.jpg"
                alt="Avatar 1"
              />
            </Avatar> */}
            <Avatar className="z-40">
              <Image src={avatar1} alt="Avatar 1" className="rounded-full" />
            </Avatar>
            <Avatar className="z-30 -ml-6 border-indigo-500">
              <Image src={avatar2} alt="Avatar 2" className="rounded-full" />
            </Avatar>
            <Avatar className="z-20 -ml-6 border-amber-500">
              <Image src={avatar3} alt="Avatar 3" className="rounded-full" />
            </Avatar>
            <Avatar className="-ml-6 border-transparent transition group-hover:border-green-500">
              <div className="relative inline-flex size-full items-center justify-center gap-1 rounded-full bg-neutral-700">
                <Image
                  src={avatar4}
                  alt="Avatar 4"
                  className="absolute size-full rounded-full opacity-0 transition-all duration-500 group-hover:opacity-100"
                />
                {Array.from({ length: 3 }).map((_, index) => (
                  <span
                    className="inline-flex size-1.5 rounded-full bg-white"
                    key={index}
                  ></span>
                ))}
              </div>
            </Avatar>
          </div>
        </FeatureCard>

        <FeatureCard
          title="Empowering Startups"
          description="Celebrate your journey and achievements while preparing for even greater opportunities ahead."
          className="group transition duration-500 hover:scale-105 md:col-span-2 lg:col-span-1"
        >
          <div className="flex aspect-video items-center justify-center">
            <p className="text-center text-4xl font-extrabold text-white/20 transition duration-500 group-hover:text-white/10">
              We&apos;ve achieved{" "}
              <span className="relative bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                <span>incredible</span>
                <video
                  src="/gif-incredible.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl opacity-0 shadow-xl transition duration-500 group-hover:opacity-100"
                ></video>
              </span>{" "}
              <br />
              milestones this year.
            </p>
          </div>
        </FeatureCard>

        <FeatureCard
          title="Keyboard Quick Actions"
          description="Boost your productivity with intuitive shortcuts designed for effortless navigation and creation."
          className="group transition duration-500 hover:scale-105 md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
        >
          <div className="flex aspect-video items-center justify-center gap-4">
            <Key className="w-28 outline outline-2 outline-offset-4 outline-transparent transition-all duration-500 group-hover:translate-y-1 group-hover:outline-pink-400">
              Shift
            </Key>
            <Key className="outline outline-2 outline-offset-4 outline-transparent transition-all delay-150 duration-500 group-hover:translate-y-1 group-hover:outline-pink-400">
              alt
            </Key>
            <Key className="outline outline-2 outline-offset-4 outline-transparent transition-all delay-300 duration-500 group-hover:translate-y-1 group-hover:outline-pink-400">
              C
            </Key>
          </div>
        </FeatureCard>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {features.map(feature => (
          <div
            key={feature}
            className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-neutral-900 px-3 py-1.5 transition duration-500 hover:scale-105 md:px-5 md:py-2"
          >
            <span className="inline-flex size-5 items-center justify-center rounded-full bg-pink-400 text-xl text-neutral-950 transition duration-500 group-hover:rotate-45">
              &#10038;
            </span>
            <span className="font-medium md:text-lg">{feature}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
