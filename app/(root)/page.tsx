import CallToAction from "@/components/homepage/call-to-action"
import Faqs from "@/components/homepage/faqs"
import Features from "@/components/homepage/features"
import Footer from "@/components/homepage/footer"
import Hero from "@/components/homepage/hero"
import Integrations from "@/components/homepage/integrations"
import Introduction from "@/components/homepage/introduction"
import LogoTicker from "@/components/homepage/logo-ticker"
import RecentPitches from "@/components/homepage/recent-pitches-carousel"

export default async function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <Introduction />
      <RecentPitches />
      <Features />
      <Integrations />
      <Faqs />
      <CallToAction />
      <Footer />
    </>
  )
}
