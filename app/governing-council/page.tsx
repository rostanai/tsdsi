"use client"

import { Users, Award, Briefcase, Target, Shield, Globe2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

const councilMembers = [
    {
        name: "Dr. Rajesh Kumar",
        role: "Chairperson",
        organization: "Department of Telecommunications",
        color: "from-blue-600 to-cyan-600",
    },
    {
        name: "Ms. Priya Sharma",
        role: "Vice Chairperson",
        organization: "Reliance Jio",
        color: "from-purple-600 to-pink-600",
    },
    {
        name: "Mr. Anil Verma",
        role: "Council Member",
        organization: "Bharti Airtel",
        color: "from-orange-600 to-red-600",
    },
    {
        name: "Dr. Sunita Patel",
        role: "Council Member",
        organization: "Nokia India",
        color: "from-green-600 to-teal-600",
    },
    {
        name: "Mr. Vikram Singh",
        role: "Council Member",
        organization: "Ericsson India",
        color: "from-indigo-600 to-blue-600",
    },
    {
        name: "Dr. Meera Reddy",
        role: "Council Member",
        organization: "IIT Delhi",
        color: "from-pink-600 to-purple-600",
    },
]

const responsibilities = [
    {
        title: "Strategic Direction",
        description: "Setting long-term vision and strategic goals for TSDSI",
        icon: Target,
        color: "from-blue-500 to-blue-600",
    },
    {
        title: "Policy Governance",
        description: "Approving policies, procedures, and operational guidelines",
        icon: Shield,
        color: "from-purple-500 to-purple-600",
    },
    {
        title: "Standards Approval",
        description: "Final approval of technical standards and specifications",
        icon: Award,
        color: "from-orange-500 to-orange-600",
    },
    {
        title: "International Liaison",
        description: "Managing relationships with global SDOs and partners",
        icon: Globe2,
        color: "from-cyan-500 to-cyan-600",
    },
]

export default function GoverningCouncilPage() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-20 min-h-[70vh] flex items-center">
                <div
                    className="absolute inset-0 opacity-40"
                    style={{ transform: `translateY(${scrollY * 0.5}px)` }}
                >
                    <img
                        src="/governing_council_meeting_1768298546631.png"
                        alt="Governing Council"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-blue-900/70 to-slate-900/80" />

                <div className="container relative mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-lg">
                            <Users className="mr-2 h-4 w-4 inline" />
                            Leadership
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white">
                            Governing{" "}
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Council
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-200">
                            Strategic leadership guiding TSDSI's vision and operations
                        </p>
                    </div>
                </div>
            </section>

            {/* Council Members */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Council Members</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Distinguished leaders from industry, academia, and government
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {councilMembers.map((member, index) => (
                            <Card
                                key={member.name}
                                className="group transition-all hover:shadow-2xl hover:scale-105 border-2 bg-gradient-to-br from-background to-muted/30 overflow-hidden"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className={`h-2 w-full bg-gradient-to-r ${member.color}`} />
                                <CardHeader>
                                    <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${member.color} p-4 shadow-lg`}>
                                        <Users className="h-8 w-8 text-white" />
                                    </div>
                                    <CardTitle className="text-xl">{member.name}</CardTitle>
                                    <Badge variant="secondary" className="w-fit">{member.role}</Badge>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        <Briefcase className="inline h-4 w-4 mr-2" />
                                        {member.organization}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Responsibilities */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Key Responsibilities</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            The Governing Council's primary functions and duties
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {responsibilities.map((resp, index) => {
                            const Icon = resp.icon
                            return (
                                <Card
                                    key={resp.title}
                                    className="group transition-all hover:shadow-2xl hover:scale-105 border-2"
                                >
                                    <CardHeader>
                                        <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${resp.color} p-4 shadow-lg`}>
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                        <CardTitle className="text-lg">{resp.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-sm">{resp.description}</CardDescription>
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
