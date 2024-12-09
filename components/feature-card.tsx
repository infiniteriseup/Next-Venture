import React from "react"
import { twMerge } from "tailwind-merge"

export default function FeatureCard(props: {
  title: string
  description: string
  children?: React.ReactNode
  className?: string
}) {
  const { title, description, children, className } = props
  return (
    <div
      className={twMerge(
        "rounded-3xl border border-white/10 bg-neutral-900 p-6",
        className,
      )}
    >
      <div className="aspect-video">{children}</div>
      <div className="">
        <h3 className="mt-6 text-3xl font-medium">{title}</h3>
        <p className="mt-2 text-white/50">{description}</p>
      </div>
    </div>
  )
}
