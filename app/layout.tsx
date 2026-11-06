import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chetan Janrao - React Developer",
  description:
    "React & Java Full Stack Developer | Spring Boot, JPA, PostgreSQL | 4+ years building scalable enterprise applications.",
  keywords: [ "React", "Tailwind CSS", "Web Development"],
  authors: [{ name: "Chetan Janrao" }],
  creator: "Chetan Janrao",
  icons:{
    icon: "/developer.png",
  },
  openGraph: {
    type: "website",
    url: "https://chetanjanrao.dev",
    title: "Chetan Janrao - React Developer",
    description: "  React & Java Full Stack Developer | Spring Boot, JPA, PostgreSQL | 4+ years building scalable enterprise applications",
    siteName: "Chetan Janrao Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chetan Janrao - React Developer",
    description: "React & Java Full Stack Developer | Spring Boot, JPA, PostgreSQL | 4+ years building scalable enterprise applications",
    creator: "@chetanjanrao",
  },
    generator: 'chetanjanrao.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
    
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
