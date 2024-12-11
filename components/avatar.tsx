import React, { HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

export default function Avatar(props: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...otherProps } = props
  return (
    <div
      className={cn(
        "size-20 overflow-hidden rounded-full border-4 border-blue-500 bg-neutral-900 p-1",
        className,
      )}
      {...otherProps}
    >
      {children}
    </div>
  )
}
