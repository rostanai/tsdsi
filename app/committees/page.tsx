"use client"

import { Users, Award, FileText, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const committees = [
    {
        name: "Technical Planning Committee",
        acronym: "TPC",
        description: "Oversees technical strategy and roadmap planning",
        members: "12 members",
        color: "from-blue-600 to-cyan-600",
    },
    {
        name: "Finance Committee",
        acronym: "FC",
        description: "Manages financial planning and budget allocation",
        members: "8 members",
        color: "from-purple-600 to-pink-600",
    },
    {
        name: "Membership Committee",
        acronym: "MC",
        description: "Handles member onboarding and engagement",
        members: "10 members",
        color: "from-orange-600 to-red-600",
    },
    {
        name: "IPR Committee",
        acronym: "IPRC",
        description: "Manages intellectual property rights policies",
        members: "9 members",
        color: "from-green-600 to-teal-600",
    },
]

const responsibilities = [
    {
        title: "Strategic Planning",
        description: "Define long-term technical and organizational goals",
        icon: Award,
        color: "from-blue-500 to-blue-600",
    },
    {
        title: "Policy Development",
        description: "Create and maintain organizational policies",
        icon: FileText,
        color: "from-purple-500 to-purple-600",
    },
    {
        title: "Quality Assurance",
        description: "Ensure standards meet quality requirements",
        icon: CheckCircle,
        color: "from-orange-500 to-orange-600",
    },
    {
        title: "Member Support",
        description: "Provide guidance and support to members",
        icon: Users,
        color: "from-cyan-500 to-cyan-600",
    },
]

export default function CommitteesPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20">
                <div className="container relative mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0 shadow-lg">
                            <Users className="mr-2 h-4 w-4 inline" />
                            Governance Structure
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-slate-900">
                            Standing{" "}
                            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Committees
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-700">
                            Specialized committees driving TSDSI's strategic initiatives and operations
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Responsibilities */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Committee Responsibilities</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Core functions of TSDSI standing committees
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
                                        <CardTitle className="text-xl">{resp.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base">{resp.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Committees */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Active Committees</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Specialized committees managing different aspects of TSDSI operations
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {committees.map((committee, index) => (
                            <Card
                                key={committee.name}
                                className="group transition-all hover:shadow-2xl hover:scale-105 border-2 bg-gradient-to-br from-background to-muted/30 overflow-hidden"
                            >
                                <div className={`h-2 w-full bg-gradient-to-r ${committee.color}`} />
                                <CardHeader>
                                    <div className="flex items-start justify-between mb-3">
                                        <Badge className={`bg-gradient-to-r ${committee.color} text-white border-0`}>
                                            {committee.acronym}
                                        </Badge>
                                        <Badge variant="secondary">{committee.members}</Badge>
                                    </div>
                                    <CardTitle className="text-xl mb-2">{committee.name}</CardTitle>
                                    <CardDescription className="text-base">
                                        {committee.description}
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
