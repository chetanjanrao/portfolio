"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, Code, Palette, Smartphone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const skills = [
    "React",
    "Redux",
    "Redux/Toolkit",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Git",
    "Github",
    "API",
    "Web Development",
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with data visualization",
      tech: ["React", "D3.js", "Weather API", "Tailwind CSS"],
      link: "#",
    },
  ]
    const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/ChetanJanraoResume.pdf";
    link.download = "ChetanJanraoResume.pdf"; // Change the file name as needed
    link.click();
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                  Hi, I'm <span className="text-blue-600 dark:text-blue-400">Chetan Janrao</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  React Developer with 3+ years of experience building modern web applications
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  I create beautiful, responsive, and user-friendly applications using modern frontend technologies.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
                <Button variant="outline" size="lg" onClick={handleDownload}>
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>

              <div className="flex gap-4">
                <Button variant="ghost" size="icon">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                    <Image
                      src="https://avatars.githubusercontent.com/u/107796313?v=4"
                      alt="Chetan Janrao"
                      width={300}
                      height={300}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a passionate React developer with 3+ years of experience in creating web applications. I love
              turning complex problems into simple, beautiful designs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Code className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Creating responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Palette className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Building robust APIs and server-side applications using API  and various databases.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Smartphone className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold mb-2">Mobile Responsive</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Ensuring all applications work seamlessly across all devices and screen sizes.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Technical Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm py-2 px-4">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Here are some of my recent projects that showcase my skills and experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg mb-4 flex items-center justify-center">
                    <Code className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.link}>View Project</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/experience">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
