"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    organization: z.string().min(2, "Organization name is required"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

const contactInfo = [
    {
        icon: MapPin,
        title: "Address",
        details: ["TSDSI Secretariat", "New Delhi, India"],
    },
    {
        icon: Mail,
        title: "Email",
        details: ["info@tsdsi.in", "support@tsdsi.in"],
    },
    {
        icon: Phone,
        title: "Phone",
        details: ["+91-11-XXXX-XXXX"],
    },
]

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    })

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        console.log("Form data:", data)
        setIsSubmitting(false)
        setSubmitSuccess(true)
        reset()
        setTimeout(() => setSubmitSuccess(false), 5000)
    }

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/10 via-background to-teal-500/10 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4" variant="secondary">
                            Contact Us
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Get in{" "}
                            <span className="bg-gradient-to-r from-[hsl(217,91%,60%)] via-[hsl(270,95%,75%)] to-[hsl(24,95%,53%)] bg-clip-text text-transparent">
                                Touch
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground sm:text-xl">
                            Have questions about TSDSI or interested in membership? We'd love to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info & Form */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-3">
                        {/* Contact Information */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="mb-4 text-2xl font-bold">Contact Information</h2>
                                <p className="text-muted-foreground">
                                    Reach out to us through any of the following channels
                                </p>
                            </div>
                            {contactInfo.map((info) => {
                                const Icon = info.icon
                                return (
                                    <Card key={info.title}>
                                        <CardHeader>
                                            <div className="mb-2 inline-flex rounded-lg bg-primary/10 p-2">
                                                <Icon className="h-5 w-5 text-primary" />
                                            </div>
                                            <CardTitle className="text-lg">{info.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            {info.details.map((detail, index) => (
                                                <p key={index} className="text-sm text-muted-foreground">
                                                    {detail}
                                                </p>
                                            ))}
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card className="border-2">
                                <CardHeader>
                                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                                    <CardDescription>
                                        Fill out the form below and we'll get back to you as soon as possible
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {submitSuccess && (
                                        <div className="mb-6 rounded-lg bg-green-50 p-4 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                                            <p className="font-semibold">Message sent successfully!</p>
                                            <p className="text-sm">We'll get back to you soon.</p>
                                        </div>
                                    )}
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="grid gap-6 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Full Name *</Label>
                                                <Input
                                                    id="name"
                                                    placeholder="John Doe"
                                                    {...register("name")}
                                                    className={errors.name ? "border-red-500" : ""}
                                                />
                                                {errors.name && (
                                                    <p className="text-sm text-red-500">{errors.name.message}</p>
                                                )}
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email Address *</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    {...register("email")}
                                                    className={errors.email ? "border-red-500" : ""}
                                                />
                                                {errors.email && (
                                                    <p className="text-sm text-red-500">{errors.email.message}</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="organization">Organization *</Label>
                                            <Input
                                                id="organization"
                                                placeholder="Your Organization"
                                                {...register("organization")}
                                                className={errors.organization ? "border-red-500" : ""}
                                            />
                                            {errors.organization && (
                                                <p className="text-sm text-red-500">{errors.organization.message}</p>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="subject">Subject *</Label>
                                            <Input
                                                id="subject"
                                                placeholder="How can we help you?"
                                                {...register("subject")}
                                                className={errors.subject ? "border-red-500" : ""}
                                            />
                                            {errors.subject && (
                                                <p className="text-sm text-red-500">{errors.subject.message}</p>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message *</Label>
                                            <Textarea
                                                id="message"
                                                placeholder="Tell us more about your inquiry..."
                                                rows={6}
                                                {...register("message")}
                                                className={errors.message ? "border-red-500" : ""}
                                            />
                                            {errors.message && (
                                                <p className="text-sm text-red-500">{errors.message.message}</p>
                                            )}
                                        </div>
                                        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                                            {isSubmitting ? (
                                                "Sending..."
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send className="ml-2 h-4 w-4" />
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Quick answers to common questions about TSDSI
                        </p>
                    </div>
                    <div className="mx-auto max-w-3xl grid gap-6 md:grid-cols-2">
                        {[
                            {
                                question: "How can I become a member?",
                                answer: "Visit our Membership page to learn about different membership tiers and application process.",
                            },
                            {
                                question: "How do I access standards?",
                                answer: "Published standards are available to members through the member portal. Some standards are publicly accessible.",
                            },
                            {
                                question: "Can I participate in working groups?",
                                answer: "Yes, members can participate in working groups based on their membership tier and technical expertise.",
                            },
                            {
                                question: "How do I submit a proposal?",
                                answer: "Members can submit proposals through the member portal or by contacting the relevant working group.",
                            },
                        ].map((faq, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{faq.answer}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
