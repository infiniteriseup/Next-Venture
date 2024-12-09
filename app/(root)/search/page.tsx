import React from "react"

import { auth } from "@/auth"
import SearchForm from "@/components/search-form"
import StartupCard, { StartupTypeCard } from "@/components/startup-card"
import { sanityFetch, SanityLive } from "@/sanity/lib/live"
import { STARTUPS_QUERY } from "@/sanity/lib/queries"

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { query?: string }
}) {
  const query = searchParams.query
  const params = { search: query || undefined }

  const session = await auth()
  console.log(session?.id)

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params })

  return (
    <>
      <section className="container mt-10 py-20 text-center text-white">
        <div className="flex justify-center">
          <div className="inline-flex rounded-full bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-1 font-semibold text-neutral-950">
            ✨ £7.5M seed round raised
          </div>
        </div>
        <h1 className="mx-auto mt-6 max-w-4xl text-center text-4xl font-medium md:text-5xl lg:text-8xl">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xl text-white/50">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-semibold sm:text-4xl">
            {query ? `Search results for "${query}"` : "All Startups"}
          </h2>

          {posts && posts.length > 0 ? (
            <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {posts.map((post: StartupTypeCard) => (
                <StartupCard key={post?._id} post={post} />
              ))}
            </ul>
          ) : (
            <p className="text-center text-xl text-gray-600">
              No startups found
            </p>
          )}
        </div>
      </section>
      <SanityLive />
    </>
  )
}
