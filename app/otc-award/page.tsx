"use client"

import { Trophy, Award, Star, Users, Calendar, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const awardCategories = [
    {
        title: "Technical Innovation",
        description: "For groundbreaking technical contributions",
        icon: Trophy,
        color: "from-yellow-600 to-orange-600",
    },
    {
        title: "Standards Development",
        description: "Outstanding work in standards creation",
        icon: Award,
        color: "from-blue-600 to-cyan-600",
    },
    {
        title: "Industry Leadership",
        description: "Exceptional leadership in telecom sector",
        icon: Star,
        color: "from-purple-600 to-pink-600",
    },
    {
        title: "Collaborative Excellence",
        description: "Exemplary collaboration and teamwork",
        icon: Users,
        color: "from-green-600 to-teal-600",
    },
]

const pastWinners = [
    {
        year: "2023",
        name: "Dr. Rajesh Kumar",
        organization: "IIT Delhi",
        contribution: "5Gi Technology Development",
        color: "from-yellow-600 to-orange-600",
    },
    {
        year: "2023",
        name: "Ms. Priya Sharma",
        organization: "Reliance Jio",
        contribution: "Network Architecture Standards",
        color: "from-blue-600 to-cyan-600",
    },
    {
        year: "2022",
        name: "Mr. Amit Patel",
        organization: "C-DOT",
        contribution: "Security Framework Development",
        color: "from-purple-600 to-pink-600",
    },
    {
        year: "2022",
        name: "Dr. Sunita Verma",
        organization: "Nokia India",
        contribution: "IoT Standards Contribution",
        color: "from-green-600 to-teal-600",
    },
]

export default function OTCAwardPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-20">
                <div className="container relative mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white border-0 shadow-lg">
                            <Trophy className="mr-2 h-4 w-4 inline" />
                            Excellence Recognition
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-slate-900">
                            Outstanding Technical{" "}
                            <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                                Contributions Award
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-700">
                            Recognizing exceptional contributions to telecommunications standards development
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
                            Recognition across multiple areas of excellence
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {awardCategories.map((category, index) => {
                            const Icon = category.icon
                            return (
                                <Card
                                    key={category.title}
                                    className="group transition-all hover:shadow-2xl hover:scale-105 border-2"
                                >
                                    <CardHeader>
                                        <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${category.color} p-4 shadow-lg`}>
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                        <CardTitle className="text-lg">{category.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-sm">{category.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Past Winners */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Recent Award Recipients</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Celebrating outstanding technical contributions
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {pastWinners.map((winner, index) => (
                            <Card
                                key={`${winner.year}-${winner.name}`}
                                className="group transition-all hover:shadow-2xl hover:scale-105 border-2 bg-gradient-to-br from-background to-muted/30 overflow-hidden"
                            >
                                <div className={`h-2 w-full bg-gradient-to-r ${winner.color}`} />
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-3">
                                        <Badge className={`bg-gradient-to-r ${winner.color} text-white border-0`}>
                                            <Calendar className="mr-1 h-3 w-3" />
                                            {winner.year}
                                        </Badge>
                                        <Badge variant="secondary">{winner.organization}</Badge>
                                    </div>
                                    <CardTitle className="text-xl mb-2">{winner.name}</CardTitle>
                                    <CardDescription className="text-base font-semibold">
                                        {winner.contribution}
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
