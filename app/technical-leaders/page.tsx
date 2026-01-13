"use client"

import { Code, Network, Shield, Zap, Award, Users, Briefcase } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

const technicalLeaders = [
    {
        name: "Dr. Amit Desai",
        role: "Chair - Study Group Networks",
        expertise: "5G/6G Network Architecture",
        contributions: "Led 5Gi standardization efforts",
        color: "from-blue-600 to-cyan-600",
        icon: Network,
    },
    {
        name: "Ms. Kavita Nair",
        role: "Chair - Working Group Security",
        expertise: "Network Security & Cryptography",
        contributions: "Developed security framework standards",
        color: "from-purple-600 to-pink-600",
        icon: Shield,
    },
    {
        name: "Mr. Rahul Mehta",
        role: "Chair - Working Group Application Layer",
        expertise: "IoT & Application Protocols",
        contributions: "oneM2M standards contribution",
        color: "from-orange-600 to-red-600",
        icon: Code,
    },
    {
        name: "Dr. Sneha Gupta",
        role: "Vice Chair - SG Services",
        expertise: "Service Architecture & APIs",
        contributions: "Service-based architecture specs",
        color: "from-green-600 to-teal-600",
        icon: Zap,
    },
    {
        name: "Mr. Karthik Iyer",
        role: "Technical Rapporteur",
        expertise: "3GPP Standards & RAN",
        contributions: "3GPP liaison and contributions",
        color: "from-indigo-600 to-blue-600",
        icon: Network,
    },
    {
        name: "Dr. Pooja Malhotra",
        role: "Technical Editor",
        expertise: "Standards Documentation",
        contributions: "Published 20+ technical reports",
        color: "from-pink-600 to-purple-600",
        icon: Award,
    },
]

const expertiseAreas = [
    {
        title: "Network Technologies",
        count: "15+",
        description: "Experts in 5G, 6G, and network architecture",
        color: "from-blue-500 to-blue-600",
    },
    {
        title: "Security Standards",
        count: "10+",
        description: "Specialists in network and application security",
        color: "from-purple-500 to-purple-600",
    },
    {
        title: "IoT & M2M",
        count: "12+",
        description: "Leaders in IoT protocols and standards",
        color: "from-orange-500 to-orange-600",
    },
    {
        title: "Service Architecture",
        count: "8+",
        description: "Experts in service-based architectures",
        color: "from-cyan-500 to-cyan-600",
    },
]

export default function TechnicalLeadersPage() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-orange-900 to-blue-900 py-20 min-h-[70vh] flex items-center">
                <div
                    className="absolute inset-0 opacity-40"
                    style={{ transform: `translateY(${scrollY * 0.5}px)` }}
                >
                    <img
                        src="/technical_leaders_team_1768298562538.png"
                        alt="Technical Leaders"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-orange-900/70 to-slate-900/80" />

                <div className="container relative mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4 bg-gradient-to-r from-orange-600 to-blue-600 text-white border-0 shadow-lg">
                            <Code className="mr-2 h-4 w-4 inline" />
                            Technical Excellence
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white">
                            Technical{" "}
                            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent">
                                Leaders
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-200">
                            Expert leadership driving technical standardization and innovation
                        </p>
                    </div>
                </div>
            </section>

            {/* Expertise Areas */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Areas of Expertise</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Specialized technical knowledge across telecommunications domains
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {expertiseAreas.map((area, index) => (
                            <Card
                                key={area.title}
                                className="group transition-all hover:shadow-2xl hover:scale-105 border-2 bg-gradient-to-br from-background to-muted/30 overflow-hidden"
                            >
                                <div className={`h-2 w-full bg-gradient-to-r ${area.color}`} />
                                <CardHeader>
                                    <div className="mb-2">
                                        <span className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                            {area.count}
                                        </span>
                                    </div>
                                    <CardTitle className="text-xl">{area.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">{area.description}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Leaders */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Our Technical Leaders</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Distinguished experts leading TSDSI's technical work
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {technicalLeaders.map((leader, index) => {
                            const Icon = leader.icon
                            return (
                                <Card
                                    key={leader.name}
                                    className="group transition-all hover:shadow-2xl hover:scale-105 border-2 bg-gradient-to-br from-background to-muted/30 overflow-hidden"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className={`h-2 w-full bg-gradient-to-r ${leader.color}`} />
                                    <CardHeader>
                                        <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${leader.color} p-4 shadow-lg`}>
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                        <CardTitle className="text-xl">{leader.name}</CardTitle>
                                        <Badge variant="secondary" className="w-fit mb-2">{leader.role}</Badge>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <div>
                                            <p className="text-sm font-semibold text-muted-foreground">Expertise:</p>
                                            <p className="text-sm">{leader.expertise}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-muted-foreground">Key Contributions:</p>
                                            <p className="text-sm">{leader.contributions}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
