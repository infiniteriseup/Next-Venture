import "./globals.css"
import "easymde/dist/easymde.min.css"

import type { Metadata, Viewport } from "next"
// import localFont from 'next/font/local'
import { Outfit } from "next/font/google"

import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"

const outfit = Outfit({ subsets: ["latin"] })

// const workSans = localFont({
//   src: [
//     {
//       path: './fonts/WorkSans-Black.ttf',
//       weight: '900',
//       style: 'normal',
//     },
//     {
//       path: './fonts/WorkSans-Medium.ttf',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: './fonts/WorkSans-Regular.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-work-sans',
// })

export const metadata: Metadata = {
  title: "ventures Directory",
  description: "Pitch, Vote and Grow",
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "black" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "relative h-full scroll-smooth text-white antialiased selection:bg-pink-700/20 selection:text-pink-400",
          outfit.className,
        )}
      >
        <Toaster />
        {children}
      </body>
    </html>
  )
}
