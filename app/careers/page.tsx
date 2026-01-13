"use client"

import { Briefcase, TrendingUp, Heart, Users, Sparkles, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

const jobOpenings = [
    {
        title: "Senior Standards Engineer",
        department: "Technical Activities",
        type: "Full-time",
        location: "New Delhi",
        color: "from-blue-600 to-cyan-600",
    },
    {
        title: "Technical Writer",
        department: "Documentation",
        type: "Full-time",
        location: "Hybrid",
        color: "from-purple-600 to-pink-600",
    },
    {
        title: "Research Associate - 6G",
        department: "Research & Innovation",
        type: "Contract",
        location: "Bangalore",
        color: "from-orange-600 to-red-600",
    },
]

const benefits = [
    {
        title: "Competitive Salary",
        description: "Industry-leading compensation packages",
        icon: TrendingUp,
        color: "from-blue-500 to-blue-600",
    },
    {
        title: "Health & Wellness",
        description: "Comprehensive health insurance and wellness programs",
        icon: Heart,
        color: "from-purple-500 to-purple-600",
    },
    {
        title: "Professional Growth",
        description: "Training, conferences, and skill development opportunities",
        icon: Award,
        color: "from-orange-500 to-orange-600",
    },
    {
        title: "Collaborative Culture",
        description: "Work with global experts in telecommunications",
        icon: Users,
        color: "from-cyan-500 to-cyan-600",
    },
]

export default function CareersPage() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-cyan-900 py-20 min-h-[70vh] flex items-center">
                <div
                    className="absolute inset-0 opacity-40"
                    style={{ transform: `translateY(${scrollY * 0.5}px)` }}
                >
                    <img
                        src="/careers_opportunities_1768298577867.png"
                        alt="Careers"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-purple-900/70 to-slate-900/80" />

                <div className="container relative mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-0 shadow-lg">
                            <Sparkles className="mr-2 h-4 w-4 inline" />
                            Join Our Team
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white">
                            Build Your{" "}
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                                Career
                            </span>
                        </h1>
                        <p className="mb-8 text-lg sm:text-xl text-gray-200">
                            Shape the future of telecommunications standards with India's premier SDO
                        </p>
                        <Button size="lg" className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-500 hover:via-pink-500 hover:to-cyan-500 text-white border-0 hover:scale-110 transition-all shadow-2xl">
                            <Briefcase className="mr-2 h-5 w-5" />
                            View All Openings
                        </Button>
                    </div>
                </div>
            </section>

            {/* Current Openings */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Current Openings</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Explore exciting opportunities to join our team
                        </p>
                    </div>
                    <div className="mx-auto max-w-4xl space-y-4">
                        {jobOpenings.map((job, index) => (
                            <Card
                                key={job.title}
                                className="group transition-all hover:shadow-2xl hover:scale-102 border-2 overflow-hidden"
                            >
                                <div className={`h-2 w-full bg-gradient-to-r ${job.color}`} />
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                                            <div className="flex flex-wrap gap-2">
                                                <Badge variant="secondary">{job.department}</Badge>
                                                <Badge variant="outline">{job.type}</Badge>
                                                <Badge variant="outline">{job.location}</Badge>
                                            </div>
                                        </div>
                                        <Button className={`bg-gradient-to-r ${job.color} text-white hover:opacity-90`}>
                                            Apply Now
                                        </Button>
                                    </div>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Why Join TSDSI?</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Comprehensive benefits and growth opportunities
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon
                            return (
                                <Card
                                    key={benefit.title}
                                    className="group transition-all hover:shadow-2xl hover:scale-105 border-2"
                                >
                                    <CardHeader>
                                        <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${benefit.color} p-4 shadow-lg`}>
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                        <CardTitle className="text-lg">{benefit.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-sm">{benefit.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <Card className="mx-auto max-w-3xl border-2 bg-gradient-to-br from-primary/10 to-secondary/10">
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl">Ready to Make an Impact?</CardTitle>
                            <CardDescription className="text-lg">
                                Send your resume to careers@tsdsi.in
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-center gap-4">
                            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                                Email Us
                            </Button>
                            <Button size="lg" variant="outline">
                                Learn More
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}
