import { redirect } from "next/navigation"

import { auth } from "@/auth"
import StartupForm from "@/components/startup-form"

const Page = async () => {
  const session = await auth()

  if (!session) redirect("/")

  return (
    <>
      <section className="container mb-20 mt-36">
        <h1 className="mt-6 text-center text-4xl font-medium md:text-5xl lg:text-8xl">
          Submit Your Startup
        </h1>
      </section>

      <StartupForm />
    </>
  )
}

export default Page
