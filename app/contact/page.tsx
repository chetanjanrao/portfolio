"use client"
import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react"
import Link from "next/link"
import emailjs from '@emailjs/browser';
export default function ContactPage() {
    // const [formData, setFormData] = useState({
    //   name: "",
    //   email: "",
    //   subject: "",
    //   message: "",
    // })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formStatus, setFormStatus] = useState<{
        success?: boolean
        message?: string
    } | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setFormStatus(null)

        try {
            // Send email via API route
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // body: JSON.stringify(formData),
            })

            const result = await response.json()

            if (response.ok) {
                // Reset form and show success message
                // setFormData({ name: "", email: "", subject: "", message: "" })
                setFormStatus({
                    success: true,
                    message: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
                })
            } else {
                throw new Error(result.error || "Failed to send message")
            }
        } catch (error) {
            setFormStatus({
                success: false,
                message: "Sorry, there was an error sending your message. Please try again or contact me directly.",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    // Function to send email using EmailJS

    // Handle form input changes
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //   setFormData({
    //     ...formData,
    //     [e.target.name]: e.target.value,
    //   })
    // }

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "jrchetan1997@gmail.com",
            href: "#",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+91 9763724161",
            href: "#",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Pune, Maharashtra, India",
            href: "#",
        },
    ]

    const socialLinks = [
        {
            icon: Github,
            label: "GitHub",
            href: "https://github.com/chetanjanrao",
            username: "@chetanjanrao",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            href: "https://linkedin.com/in/chetan-janrao",
            username: "@chetanjanrao",
        },
        {
            icon: Twitter,
            label: "Twitter",
            href: "https://x.com/jrchetan1997?t=O4afErpquqM6CZf4e6i10A&s=09",
            username: "@jrchetan1997",
        },
    ]
    // Added new function to send email using EmailJS
    const sendEmail = (e: any) => {
        e.preventDefault();
        console.log(e);
        emailjs
            .sendForm(
                "service_gyi6b4i",
                "template_hbrlahp",
                e.target,
                "Xl_2h5wSJZ1PgjxCg"
            )
            .then(
                (result) => {
                    console.log(result);
                    console.log("Email sent successfully!");
                },
                (error) => {
                    console.log("Failed to send email.");
                }
            );
        e.target.reset(); // Clear the form
    };
    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        I'm always interested in new opportunities, collaborations, and interesting projects. Let's discuss how we
                        can work together to bring your ideas to life.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div>
                        <Card className="p-6">
                            <CardHeader className="pb-6">
                                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Fill out the form below and I'll get back to you as soon as possible.
                                </p>
                            </CardHeader>
                            <CardContent>
                                {/* <form onSubmit={handleSubmit} className="space-y-6"> */}
                                <form onSubmit={sendEmail} className="space-y-6">

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name</Label>
                                            {/* <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        // value={formData.name}
                        // onChange={handleChange}
                        required
                      /> */}
                                            <Input id="name" type="text" name="user_name" placeholder="Name" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email Address</Label>
                                            {/* <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        // value={formData.email}
                        // onChange={handleChange}
                        required
                      /> */}
                                            <Input id="email" type="email" name="user_email" placeholder="Email" required />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            placeholder="What's this about?"
                                        // value={formData.subject}
                                        // onChange={handleChange}
                                        //   required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        {/* <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or inquiry..."
                      rows={6}
                      // value={formData.message}
                      // onChange={handleChange}
                      required
                      minLength={10}
                      maxLength={1000}
                      className="resize-none"
                    /> */}
                                        <Textarea
                                            id="message"
                                            className="resize-none"
                                            name="message"
                                            placeholder="Message"
                                            minLength={10}
                                            maxLength={1000}
                                            required

                                        />
                                        <div className="flex justify-between text-xs text-gray-500">
                                            <span>Minimum 10 characters</span>
                                            {/* <span>{formData.message.length}/1000</span> */}
                                        </div>
                                    </div>

                                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                                        <Send className="w-4 h-4 mr-2" />
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </Button>
                                </form>

                                {formStatus && (
                                    <div
                                        className={`mt-4 p-4 rounded-lg ${formStatus.success
                                            ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800"
                                            : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800"
                                            }`}
                                        role="alert"
                                        aria-live="polite"
                                    >
                                        <p className="text-sm" aria-describedby="form-status">
                                            {String(formStatus.message)}
                                        </p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Contact Details */}
                        <Card className="p-6">
                            <CardHeader className="pb-6">
                                <CardTitle className="text-2xl">Contact Information</CardTitle>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Feel free to reach out through any of these channels.
                                </p>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                                            <info.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="font-medium">{info.label}</p>
                                            {info.href !== "#" ? (
                                                <Link
                                                    href={info.href}
                                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                                >
                                                    {info.value}
                                                </Link>
                                            ) : (
                                                <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Social Links */}
                        <Card className="p-6">
                            <CardHeader className="pb-6">
                                <CardTitle className="text-2xl">Connect With Me</CardTitle>
                                <p className="text-gray-600 dark:text-gray-300">Follow me on social media for updates and insights.</p>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {socialLinks.map((social, index) => (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                                    >
                                        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/20 transition-colors">
                                            <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                                        </div>
                                        <div>
                                            <p className="font-medium">{social.label}</p>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm">{social.username}</p>
                                        </div>
                                    </Link>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Availability */}
                        <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20">
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <h3 className="text-lg font-semibold">Currently Available</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    I'm currently available for new projects and opportunities. Looking for both freelance work and
                                    full-time positions.
                                </p>
                                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                    <p>• Response time: Within 24 hours</p>
                                    <p>• Preferred project duration: 2-6 months</p>
                                    <p>• Open to remote and hybrid work</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* FAQ Section */}
                <section className="mt-16">
                    <Card className="p-8">
                        <CardHeader className="text-center pb-8">
                            <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-semibold mb-2">What's your typical response time?</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                        I usually respond to emails and messages within 24 hours during weekdays.
                                    </p>

                                    <h3 className="font-semibold mb-2">Do you work on weekends?</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                        For urgent projects, I'm available on weekends. However, I prefer to discuss this beforehand.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-2">What's your hourly rate?</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                        My rates vary depending on the project complexity and duration. Let's discuss your specific needs.
                                    </p>

                                    <h3 className="font-semibold mb-2">Do you provide ongoing support?</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        Yes, I offer maintenance and support packages for projects I've developed.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </div>
    )
}
