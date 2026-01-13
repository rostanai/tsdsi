"use client"

import { PartyPopper, Calendar, Award, Star, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const milestones = [
    {
        year: "2014",
        title: "Foundation Year",
        description: "TSDSI established as India's premier telecom SDO",
        achievement: "Organizational setup and initial member onboarding",
        color: "from-blue-600 to-cyan-600",
    },
    {
        year: "2016",
        title: "Global Recognition",
        description: "Became 3GPP Organizational Partner",
        achievement: "International collaboration framework established",
        color: "from-purple-600 to-pink-600",
    },
    {
        year: "2018",
        title: "Innovation Leadership",
        description: "LMLC concept introduced to ITU-R",
        achievement: "First major technical contribution to global standards",
        color: "from-orange-600 to-red-600",
    },
    {
        year: "2021",
        title: "5Gi Success",
        description: "5Gi technology accepted by ITU-R",
        achievement: "India's indigenous technology recognized globally",
        color: "from-green-600 to-teal-600",
    },
    {
        year: "2023",
        title: "6G Vision",
        description: "Active participation in Bharat 6G Mission",
        achievement: "Leading India's 6G standardization efforts",
        color: "from-indigo-600 to-blue-600",
    },
    {
        year: "2024",
        title: "10 Years Strong",
        description: "Celebrating a decade of excellence",
        achievement: "100+ members, 50+ standards, global impact",
        color: "from-pink-600 to-purple-600",
    },
]

const achievements = [
    {
        title: "100+ Members",
        description: "Leading organizations from industry and academia",
        icon: Users,
        color: "from-blue-500 to-blue-600",
    },
    {
        title: "50+ Standards",
        description: "Published technical standards and reports",
        icon: Award,
        color: "from-purple-500 to-purple-600",
    },
    {
        title: "15+ Partnerships",
        description: "Global collaborations with SDOs",
        icon: Star,
        color: "from-orange-500 to-orange-600",
    },
    {
        title: "Growing Impact",
        description: "Continuous contribution to global standards",
        icon: TrendingUp,
        color: "from-cyan-500 to-cyan-600",
    },
]

export default function AnniversaryPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 py-20">
                <div className="container relative mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white border-0 shadow-lg">
                            <PartyPopper className="mr-2 h-4 w-4 inline" />
                            Celebrating Excellence
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-slate-900">
                            10 Years of{" "}
                            <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                                Innovation
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-700">
                            A decade of shaping India's telecommunications standards landscape
                        </p>
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Decade of Achievements</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Celebrating our impact and growth over 10 years
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {achievements.map((achievement, index) => {
                            const Icon = achievement.icon
                            return (
                                <Card
                                    key={achievement.title}
                                    className="group transition-all hover:shadow-2xl hover:scale-105 border-2"
                                >
                                    <CardHeader>
                                        <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${achievement.color} p-4 shadow-lg`}>
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                        <CardTitle className="text-xl">{achievement.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base">{achievement.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Journey Through the Years</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Key milestones in TSDSI's 10-year journey
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {milestones.map((milestone, index) => (
                            <Card
                                key={milestone.year}
                                className="group transition-all hover:shadow-2xl hover:scale-105 border-2 bg-gradient-to-br from-background to-muted/30 overflow-hidden"
                            >
                                <div className={`h-2 w-full bg-gradient-to-r ${milestone.color}`} />
                                <CardHeader>
                                    <Badge className={`w-fit mb-3 bg-gradient-to-r ${milestone.color} text-white border-0`}>
                                        <Calendar className="mr-1 h-3 w-3" />
                                        {milestone.year}
                                    </Badge>
                                    <CardTitle className="text-xl mb-2">{milestone.title}</CardTitle>
                                    <CardDescription className="text-base font-semibold">
                                        {milestone.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{milestone.achievement}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
