import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ExternalLink, Github } from "lucide-react"
import Link from "next/link";

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Cognizant Technology Solutions India Private Limited",
      location: "Pune, India",
      duration: "Dec 2025 - July 2026",
      type: "Full-time",
      description: [
        "Experienced in designing responsive, component-based user interfaces with React, TypeScript and modern CSS.",
         "Skilled in building RESTful APIs with Spring Boot, Spring Data JPA and Hibernate, backed by relational databases such as PostgreSQL.",
      "Strong understanding of the complete flow from UI to API to database, including validation, error handling and data mapping.",
      "Implemented secure authentication and authorization using Spring Security, including session handling, CSRF protection and two-factor authentication.",
      "Comfortable integrating front-end and back-end systems with Axios or Fetch, handling CORS, cookies and API errors.",
          "Experienced working in Agile teams using Git and GitHub for version control and code reviews."
      ],
      technologies: ["React", "TypeScript", "Java 1.8","Spring Boot", "Spring Data JPA", "Hibernate", "PostgreSQL", "REST APIs", "Git"],
    },
    {
      title: "System Engineer",
      company: "Infosys Limited",
      location: "Pune, India",
      duration: "Sep 2023 - Feb 2025",
      type: "Full-time",
      description: [
        "Led development of responsive web applications using React",
        "Collaborated with cross-functional teams to deliver high-quality products",
        "Mentored junior developers and conducted code reviews",
        "Improved application performance by 40% through optimization techniques",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "API", "Git", "Github"],
    },
    {
      title: "Junior Web Developer",
      company: "StartupHub",
      location: "Pune, India",
      duration: "May 2021 - Aug 2021",
      type: "Full-time",
      description: [
        "Assisted in developing user interfaces for web applications",
        "Learned modern web development practices and frameworks",
        "Contributed to bug fixes and feature implementations",
        "Participated in daily standups and team meetings",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Git"],
    },
  ]
  const education = [
    {
      title: "Bachelor of Technology in Computer Science",
      institution: "MIT College of Engineering",
      type: "Full-time",
      location: "Pune, India",
      duration: "2016- 2020",
      description: [
        "Graduated with First Class Honors",
        "Completed coursework in Data Structures, Algorithms, and Web Development",
        "Participated in hackathons and coding competitions",
        "Developed a  project on a real-time chat application using React"
      ],
      
    },

  ]
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A fully responsive and feature-rich Ecommerce web application that allows users to browse products, manage carts, place orders, and complete payments.",
      technologies: ["React","Next.js","Clerk" ,"Framer Motion","Zustand","Tailwind CSS","TypeScript","Stripe API"],
      features: [
        "User registration and authentication using Clerk",
        "Product search and filtering capabilities",
        "Shopping cart and checkout process with real-time updates",
        "Payment integration with Stripe API",
        "Admin dashboard for inventory management and order tracking",
        "Responsive design for seamless user experience across devices",
        "Optimized performance with Next.js and server-side rendering",
        "State management using Zustand for efficient data handling",
      ],
      github: "https://github.com/chetanjanrao/ecommerce",
      demo: "https://trendorashopping.netlify.app",
    },
    {
      title: "Spotify Music Player",
      description:
        "A fully responsive music streaming web application that integrates Spotify’s Web API to fetch and play music, display playlists, albums, and track details in real-time.",
      technologies: ["React" ,"Tailwind CSS", "Spotify Web API","Spotify Authentication","JavaScript","Context API", "Axios"],
      features: [
            "login with Spotify to access personalized data",
            "Real-time playback of tracks with media controls",
            "Dynamically fetches and displays user and public playlists",
            "Instant track, artist, and album search using Spotify's API",
            "Tailwind CSS ensures a clean UI across all screen sizes",
            "Efficient state handling via Context API"
      ],
      github: "https://github.com/chetanjanrao/spotify-player",
      demo: "https://myspotifystream.netlify.app/",
    },
    {
      title: "Weather Analytics Dashboard",
      description: "An interactive weather dashboard with data visualization and historical weather analysis.",
      technologies: ["React","Next.js", "Weather API", "Chart.js", "Tailwind CSS"],
      features: [
        "Real-time weather data from Weather API",
        "Interactive charts and graphs for data visualization",
        "Historical weather analysis and trends",
        "Location-based forecasts and weather alerts",
        "Responsive design for mobile and desktop viewing",
      ],
      github: "https://github.com/chetanjanrao/whether-analytics",
      demo: "https://myweatheranalytics.netlify.app/",
    },
    {
      title: "Hospital Management Application",
      description: "A full stack hospital management system with secure login and two-factor authentication. It lets staff manage patients, doctors, appointments and medical records from one dashboard.",
      technologies: ["React", "TypeScript", "Spring Boot", "Git","Spring Security", "Spring Data JPA", "Hibernate", "PostgreSQL", "REST APIs" ],
      features: [
        "Email and password sign-in with session cookies and CSRF protection.",
        "TOTP setup with a QR code for Microsoft Authenticator, plus a six-digit code check at login.",
        "Signed-in users only can open the dashboard, and Sign Out ends the session.",
        "Sidebar navigation, a top bar with search, a breadcrumb and a responsive mobile menu.",
        "Add, view, edit and delete patients, with search by name, ID or phone, and form validation (age, 10-digit phone, email, blood group).",
        "Add, view, edit and delete doctors, with search, a specialization filter, availability status and a consultation fee.",
        "Create records linked to an existing patient and an available doctor, with diagnosis, prescription, notes and a status (Active, Follow-up, Closed). You can search, filter by status and view full details."
      ],
      github: "https://github.com/chetanjanrao/SuryaHospital",
      demo: "https://suryahospital.netlify.app/",
    }
   
  ]

  const certifications = [
    
    {
      title: "Developing Front End Apps with React",
      issuer: "IBM",
      date: "2025",
      credentialId: "9652cdb1d5984e378a07c4d596271c94",
    },
    {
      title: "AI for Beginners",
      issuer: "HP",
      date: "2025",
      credentialId: "a92c2cd4-997f-44ad-86bf-78de3cd527ff",
    },
    {
        title : "React - The Complete Guide (incl Hooks, React Router, Redux)",
        issuer: "Infosys",
        date : "2024",
        credentialId: "UC-8c1f2b3d-4e5f-4a6b-9c7d-8e9f0a1b2c3d"
    },
    {
      title: "Modern JavaScript",
      issuer: "Udemy",
      date: "2021",
      credentialId: "UC-85af905b-23df-43b7-91da-8d5161abed23",
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience & Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            React & Java Full Stack Developer | Spring Boot, JPA, PostgreSQL | 4+ years building scalable enterprise applications
          </p>
        </div>

        {/* Work Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">{exp.company}</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
         {/*Eduction*/ }
         <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-1">{edu.title}</CardTitle>
                      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">{edu.institution}</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                       <Badge variant="secondary">{edu.type}</Badge> 
                    </div>
                  </div>
                </CardHeader>
                 <CardContent>
                  <ul className="space-y-2 mb-4">
                    {education[0].description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {/*<div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div> */}
                </CardContent> 
              </Card>
            ))}
          </div>
        </section>
        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">{cert.issuer}</p>
                  <p className="text-sm text-gray-500 mb-2">{cert.date}</p>
                  <p className="text-xs text-gray-400"> ID : {cert.credentialId}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Interested in Working Together?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm always open to discussing new opportunities and exciting projects.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
