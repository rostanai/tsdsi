"use client"

import { Server, Cloud, Shield, Smartphone, Radio, Network } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const focusAreas = [
    {
        title: "Service Architecture",
        description: "Design and architecture of telecom services and applications",
        icon: Server,
        color: "from-blue-600 to-cyan-600",
    },
    {
        title: "Cloud Services",
        description: "Cloud-native telecom services and infrastructure",
        icon: Cloud,
        color: "from-purple-600 to-pink-600",
    },
    {
        title: "Security Standards",
        description: "Security frameworks for telecom services and networks",
        icon: Shield,
        color: "from-orange-600 to-red-600",
    },
    {
        title: "Application Layer",
        description: "Application protocols and service interfaces",
        icon: Smartphone,
        color: "from-green-600 to-teal-600",
    },
]

const workingGroups = [
    {
        name: "WG1: Security",
        description: "Security standards for telecom services",
        focus: "Authentication, encryption, threat protection",
        color: "from-red-600 to-pink-600",
    },
    {
        name: "WG2: Application Layer",
        description: "Application protocols and APIs",
        focus: "Service interfaces, protocols, data formats",
        color: "from-blue-600 to-cyan-600",
    },
    {
        name: "WG3: Services Architecture",
        description: "Service design and architecture patterns",
        focus: "Microservices, cloud-native, scalability",
        color: "from-purple-600 to-indigo-600",
    },
]

const achievements = [
    {
        title: "Security Framework",
        description: "Comprehensive security standards for 5G services",
        year: "2023",
        color: "from-orange-600 to-red-600",
    },
    {
        title: "Cloud Architecture",
        description: "Cloud-native service architecture guidelines",
        year: "2022",
        color: "from-cyan-600 to-blue-600",
    },
    {
        title: "API Standards",
        description: "Standardized APIs for telecom applications",
        year: "2023",
        color: "from-green-600 to-teal-600",
    },
    {
        title: "IoT Services",
        description: "Service standards for IoT and M2M",
        year: "2022",
        color: "from-purple-600 to-pink-600",
    },
]

export default function SGServicesPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-20">
                <div className="container relative mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-lg">
                            <Network className="mr-2 h-4 w-4 inline" />
                            Study Group
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-slate-900">
                            Services &{" "}
                            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                                Solutions
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-700">
                            Developing standards for telecom services, applications, and cloud-native solutions
                        </p>
                    </div>
                </div>
            </section>

            {/* Focus Areas */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Focus Areas</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Key technical areas for services and solutions standardization
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {focusAreas.map((area, index) => {
                            const Icon = area.icon
                            return (
                                <Card
                                    key={area.title}
                                    className="group transition-all hover:shadow-2xl hover:scale-105 border-2 overflow-hidden"
                                >
                                    <div className={`h-2 w-full bg-gradient-to-r ${area.color}`} />
                                    <CardHeader>
                                        <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${area.color} p-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                        <CardTitle className="text-xl">{area.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base">{area.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Working Groups */}
            <section className="bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Working Groups</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Specialized groups addressing specific technical domains
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {workingGroups.map((wg, index) => (
                            <Card
                                key={wg.name}
                                className="group transition-all hover:shadow-2xl hover:scale-105 border-2 overflow-hidden"
                            >
                                <div className={`h-2 w-full bg-gradient-to-r ${wg.color}`} />
                                <CardHeader>
                                    <CardTitle className="text-xl mb-2">{wg.name}</CardTitle>
                                    <CardDescription className="text-base font-semibold mb-3">
                                        {wg.description}
                                    </CardDescription>
                                    <CardDescription className="text-sm">
                                        <strong>Focus:</strong> {wg.focus}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Key Achievements</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Notable standards and contributions
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {achievements.map((achievement, index) => (
                            <Card
                                key={achievement.title}
                                className="group transition-all hover:shadow-2xl hover:scale-105 border-2 overflow-hidden"
                            >
                                <div className={`h-2 w-full bg-gradient-to-r ${achievement.color}`} />
                                <CardHeader>
                                    <Badge className={`w-fit mb-3 bg-gradient-to-r ${achievement.color} text-white border-0`}>
                                        {achievement.year}
                                    </Badge>
                                    <CardTitle className="text-lg mb-2">{achievement.title}</CardTitle>
                                    <CardDescription className="text-base">
                                        {achievement.description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
