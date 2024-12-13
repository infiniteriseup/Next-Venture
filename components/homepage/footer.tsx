import Image from "next/image"

import logoImage from "@/public/images/logo.svg"

const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
]

export default function Footer() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex justify-center">
            <Image src={logoImage} alt="layrs logo" />
          </div>
          <div>
            <nav className="flex gap-6">
              {footerLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-white/30"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}
