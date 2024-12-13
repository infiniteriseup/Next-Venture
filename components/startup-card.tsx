import { EyeIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { formatDate } from "@/lib/utils"
import { Author, Startup } from "@/sanity/types"

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author }

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    category,
    _id,
    image,
    description,
  } = post

  return (
    <Card className="group overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 transition-all">
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {formatDate(_createdAt)}
          </p>
          <div className="flex items-center gap-1.5">
            <EyeIcon className="size-4 text-primary" />
            <span className="text-sm font-medium">{views}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-0">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex-1">
            <Link href={`/user/${author?._id}`} className="hover:underline">
              <p className="line-clamp-1 text-sm font-medium">{author?.name}</p>
            </Link>
            <Link href={`/startup/${_id}`} className="hover:underline">
              <h3 className="mt-1 line-clamp-1 text-xl font-semibold">
                {title}
              </h3>
            </Link>
          </div>
          <Link href={`/user/${author?._id}`}>
            <Avatar className="size-12">
              <AvatarImage src={author?.image} alt={author?.name} />
              <AvatarFallback>{author?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
          </Link>
        </div>
        <Link href={`/startup/${_id}`} className="block">
          <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
            {description}
          </p>
          <div className="relative h-48 w-full overflow-hidden rounded-lg">
            <Image
              src={image as string}
              alt={title as string}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
        </Link>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <Badge variant="secondary">{category}</Badge>
        </Link>
        <Button
          asChild
          variant="default"
          className="h-9 rounded-full bg-pink-400 text-black"
        >
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export const StartupCardSkeleton = () => (
  <Card className="overflow-hidden">
    <CardHeader className="p-4">
      <Skeleton className="h-4 w-32" />
    </CardHeader>
    <CardContent className="p-4 pt-0">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex-1">
          <Skeleton className="mb-2 h-4 w-24" />
          <Skeleton className="h-6 w-48" />
        </div>
        <Skeleton className="size-12 rounded-full" />
      </div>
      <Skeleton className="mb-2 h-4 w-full" />
      <Skeleton className="mb-4 h-4 w-3/4" />
      <Skeleton className="h-48 w-full rounded-lg" />
    </CardContent>
    <CardFooter className="flex items-center justify-between p-4">
      <Skeleton className="h-6 w-20" />
      <Skeleton className="h-9 w-24" />
    </CardFooter>
  </Card>
)

export default StartupCard
