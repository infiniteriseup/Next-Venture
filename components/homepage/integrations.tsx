import IntegrationsColumn from "@/components/integrations-column"
import Tag from "@/components/tag"
import figmaIcon from "@/public/images/figma-logo.svg"
import framerIcon from "@/public/images/framer-logo.svg"
import githubIcon from "@/public/images/github-logo.svg"
import notionIcon from "@/public/images/notion-logo.svg"
import relumeIcon from "@/public/images/relume-logo.svg"
import slackIcon from "@/public/images/slack-logo.svg"

const integrations = [
  {
    name: "Figma",
    icon: figmaIcon,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: notionIcon,
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: slackIcon,
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: relumeIcon,
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: framerIcon,
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: githubIcon,
    description: "GitHub is the leading platform for code collaboration.",
  },
]

export type IntegrationsType = typeof integrations

export default function Integrations() {
  return (
    <section id="integrations" className="overflow-hidden py-24">
      <div className="container">
        <div className="grid items-center lg:grid-cols-2 lg:gap-16">
          <div className="">
            <Tag>Integrations</Tag>
            <h2 className="mt-6 text-6xl font-medium">
              Works Seamlessly with Your{" "}
              <span className="text-pink-400">Tools</span>
            </h2>
            <p className="mt-4 text-lg text-white/50">
              Next ventures integrates effortlessly with your favorite
              platforms, enabling smooth workflows and enhanced collaboration
              for entrepreneurs and teams.
            </p>
          </div>
          <div className="">
            <div className="mt-8 grid h-[400px] gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:grid-cols-2 lg:mt-0 lg:h-[800px]">
              <IntegrationsColumn integrations={integrations} />
              <IntegrationsColumn
                integrations={[...integrations].reverse()}
                reverse
                className="hidden md:flex"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
