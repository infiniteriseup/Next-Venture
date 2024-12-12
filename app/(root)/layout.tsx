import Navbar from "@/components/navbar"

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="relative mx-auto">
      <Navbar />
      {children}
    </main>
  )
}
