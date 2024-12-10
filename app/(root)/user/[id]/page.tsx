import { Github } from "lucide-react"
import { notFound } from "next/navigation"
import { Suspense } from "react"

import { auth } from "@/auth"
import { StartupCardSkeleton } from "@/components/startup-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import UserStartups from "@/components/user-startups"
import { client } from "@/sanity/lib/client"
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries"

export const experimental_ppr = true

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const session = await auth()

  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id })
  if (!user) return notFound()

  return (
    <div className="container mx-auto mt-24 px-4 py-8">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card className="sticky top-24 overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="relative h-32 bg-gradient-to-r from-pink-600 to-purple-900">
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
                <Avatar className="size-32 border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105">
                  <AvatarImage src={user.image} alt={user.name} />
                  <AvatarFallback className="text-4xl font-bold">
                    {user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
            <CardHeader className="pt-20 text-center">
              <CardTitle className="text-2xl font-bold">{user.name}</CardTitle>
              <p className="text-lg font-medium text-blue-600">
                @{user?.username}
              </p>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4 text-center">
              <p className="text-muted-foreground">{user?.bio}</p>

              <a
                href={`https://github.com/${user?.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-fit"
              >
                <Github className="size-5" />
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <h3 className="mb-6 text-3xl font-bold">
            {session?.id === id ? "Your" : `${user.name}'s`} Startups
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <Suspense fallback={<StartupCardSkeleton />}>
              <UserStartups id={id} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
