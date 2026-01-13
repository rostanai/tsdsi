"use client"

import { Trophy, Award, Star, Users, Calendar, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const hallOfFameMembers = [
    {
        name: "Dr. Rajesh Kumar",
        year: "2024",
        achievement: "Outstanding Technical Contribution to 5Gi Standardization",
        organization: "IIT Delhi",
        color: "from-blue-600 to-cyan-600",
    },
    {
        name: "Ms. Priya Sharma",
        year: "2023",
        achievement: "Excellence in Network Security Standards Development",
        organization: "Nokia India",
        color: "from-purple-600 to-pink-600",
    },
    {
        name: "Mr. Anil Verma",
        year: "2023",
        achievement: "Leadership in 3GPP Liaison Activities",
        organization: "Reliance Jio",
        color: "from-orange-600 to-red-600",
    },
    {
        name: "Dr. Sunita Patel",
        year: "2022",
        achievement: "Innovation in IoT Standards and oneM2M Contributions",
        organization: "C-DOT",
        color: "from-green-600 to-teal-600",
    },
    {
        name: "Mr. Vikram Singh",
        year: "2022",
        achievement: "Excellence in Service Architecture Standardization",
        organization: "Ericsson India",
        color: "from-indigo-600 to-blue-600",
    },
    {
        name: "Dr. Meera Reddy",
        year: "2021",
        achievement: "Outstanding Contribution to 6G Vision and Research",
        organization: "TSDSI Secretariat",
        color: "from-pink-600 to-purple-600",
    },
]

const awardCategories = [
    {
        title: "OTC Awards",
        count: "25+",
        description: "Outstanding Technical Contributions recognized",
        icon: Trophy,
        color: "from-blue-500 to-blue-600",
    },
    {
        title: "Excellence Awards",
        count: "15+",
        description: "Excellence in standards development",
        icon: Award,
        color: "from-purple-500 to-purple-600",
    },
    {
        title: "Innovation Awards",
        count: "10+",
        description: "Innovative contributions to telecom standards",
        icon: Star,
        color: "from-orange-500 to-orange-600",
    },
    {
        title: "Leadership Awards",
        count: "12+",
        description: "Leadership in technical activities",
        icon: Users,
        color: "from-cyan-500 to-cyan-600",
    },
]

export default function HallOfFamePage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-yellow-900 to-orange-900 py-20">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/80" />

                <div className="container relative mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white border-0 shadow-lg">
                            <Trophy className="mr-2 h-4 w-4 inline" />
                            Recognition & Awards
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white">
                            Hall of{" "}
                            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                                Fame
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-200">
                            Celebrating excellence and outstanding contributions to telecommunications standards
                        </p>
                    </div>
                </div>
            </section>

            {/* Award Categories */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Award Categories</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Recognizing excellence across multiple domains
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {awardCategories.map((category, index) => {
                            const Icon = category.icon
                            return (
                                <Card
                                    key={category.title}
                                    className="group transition-all hover:shadow-2xl hover:scale-105 border-2 bg-gradient-to-br from-background to-muted/30 overflow-hidden"
                                >
                                    <div className={`h-2 w-full bg-gradient-to-r ${category.color}`} />
                                    <CardHeader>
                                        <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${category.color} p-4 shadow-lg`}>
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                        <div className="mb-2">
                                            <span className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                                {category.count}
                                            </span>
                                        </div>
                                        <CardTitle className="text-xl">{category.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base">{category.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Hall of Fame Members */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Award Recipients</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Distinguished individuals recognized for their contributions
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {hallOfFameMembers.map((member, index) => (
                            <Card
                                key={member.name}
                                className="group transition-all hover:shadow-2xl hover:scale-105 border-2 bg-gradient-to-br from-background to-muted/30 overflow-hidden"
                            >
                                <div className={`h-2 w-full bg-gradient-to-r ${member.color}`} />
                                <CardHeader>
                                    <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${member.color} p-4 shadow-lg`}>
                                        <Trophy className="h-8 w-8 text-white" />
                                    </div>
                                    <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                                    <Badge className={`w-fit mb-3 bg-gradient-to-r ${member.color} text-white border-0`}>
                                        <Calendar className="mr-1 h-3 w-3" />
                                        {member.year}
                                    </Badge>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div>
                                        <p className="text-sm font-semibold text-muted-foreground">Achievement:</p>
                                        <p className="text-sm">{member.achievement}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-muted-foreground">Organization:</p>
                                        <p className="text-sm">{member.organization}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
