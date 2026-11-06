import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/chetanjanrao", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/chetan-janrao", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/jrchetan1997?t=O4afErpquqM6CZf4e6i10A&s=09", label: "Twitter" },
    { icon: Mail, href: "mailto:jrchetan1997@gmail.com", label: "Email" },
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Chetan Janrao</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              React & Java Full Stack Developer | Spring Boot, JPA, PostgreSQL | 4+ years building scalable enterprise applications.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <Button key={social.label} variant="ghost" size="icon" asChild>
                  <Link href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <p>Pune, Maharashtra, India</p>
              <p>jrchetan1997@gmail.com</p>
              <p>+91 97637 24161</p>
            </div>
            <Button asChild size="sm">
              <Link href="/contact">Start a Project</Link>
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            © {currentYear} Chetan Janrao. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  )
}
