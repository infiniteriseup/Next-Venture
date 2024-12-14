import React from "react"

import { client } from "@/sanity/lib/client"
import { RECENT_STARTUPS_QUERY } from "@/sanity/lib/queries"

import { GeneralSwiper } from "../general-swiper"
import StartupCard, { StartupTypeCard } from "../startup-card"
import Tag from "../tag"

export default async function RecentPitchesCarousel() {
  const startups = await client.fetch(RECENT_STARTUPS_QUERY)

  return (
    <div className="mx-auto mt-10 flex w-full max-w-[1600px] flex-col items-center px-4 py-8">
      <Tag>Recent Pitches</Tag>
      <h2 className="my-5 text-center text-6xl font-medium">
        Fresh Ideas on the <span className="text-pink-400">Horizon</span>
      </h2>
      <GeneralSwiper
        slidesPerView={{ 300: 1.1, 640: 2.2, 1024: 3.4 }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        pagination={false}
        navigation={false}
        className="py-12"
      >
        {startups.length > 0 ? (
          startups.map((startup: StartupTypeCard) => (
            <StartupCard key={startup._id} post={startup} />
          ))
        ) : (
          <p className="no-result">No posts yet</p>
        )}
      </GeneralSwiper>
    </div>
  )
}
