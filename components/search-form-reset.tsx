"use client"

import { X } from "lucide-react"
import Link from "next/link"

import { Button } from "./ui/button"

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement
    if (form) form.reset()
  }

  return (
    <Button
      type="reset"
      onClick={reset}
      className="h-10 rounded-full bg-pink-400 text-base text-black hover:bg-pink-500"
    >
      <Link href="/search">
        <X className="size-6" />
      </Link>
    </Button>
  )
}
export default SearchFormReset
