import { Search } from "lucide-react"
import Form from "next/form"

import SearchFormReset from "@/components/search-form-reset"

import { Button } from "./ui/button"

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form
      action="/search/"
      className="search-form mx-auto mt-8 flex w-full max-w-2xl items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 backdrop-blur-sm transition-all focus-within:border-white/30 focus-within:bg-white/10"
    >
      <input
        name="query"
        defaultValue={query}
        placeholder="Search Startups"
        className="h-12 w-full rounded-full border-none bg-transparent pl-4 text-xl font-semibold text-white outline-none placeholder:text-white/70 focus-visible:ring-0 focus-visible:ring-offset-0 md:text-2xl"
      />
      <div className="flex items-center gap-2">
        {query && <SearchFormReset />}

        <Button
          type="submit"
          className="m-0 mr-1 h-10 rounded-full bg-pink-400 px-4 text-base text-black hover:bg-pink-500"
        >
          <Search className="size-5 md:mr-2" />
          <span className="hidden md:flex">Search</span>
        </Button>
      </div>
    </Form>
  )
}

export default SearchForm
