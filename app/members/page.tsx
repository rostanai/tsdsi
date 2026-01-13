"use client"

import { Building2, Users, MapPin, Globe, Award, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const memberOrganizations = [
    {
        name: "Reliance Jio Infocomm Limited",
        type: "Promoter Member",
        category: "Telecom Operator",
        since: "2014",
        color: "from-blue-600 to-cyan-600",
    },
    {
        name: "Bharti Airtel Limited",
        type: "Promoter Member",
        category: "Telecom Operator",
        since: "2014",
        color: "from-purple-600 to-pink-600",
    },
    {
        name: "Nokia India Private Limited",
        type: "Associate Member",
        category: "Equipment Vendor",
        since: "2015",
        color: "from-orange-600 to-red-600",
    },
    {
        name: "Ericsson India Private Limited",
        type: "Associate Member",
        category: "Equipment Vendor",
        since: "2015",
        color: "from-green-600 to-teal-600",
    },
    {
        name: "IIT Delhi",
        type: "Academic Member",
        category: "Research & Academia",
        since: "2016",
        color: "from-indigo-600 to-blue-600",
    },
    {
        name: "C-DOT",
        type: "Government Member",
        category: "R&D Organization",
        since: "2014",
        color: "from-pink-600 to-purple-600",
    },
    {
        name: "Samsung R&D Institute India",
        type: "Associate Member",
        category: "Equipment Vendor",
        since: "2016",
        color: "from-yellow-600 to-orange-600",
    },
    {
        name: "Qualcomm India Private Limited",
        type: "Associate Member",
        category: "Technology Provider",
        since: "2017",
        color: "from-cyan-600 to-blue-600",
    },
    {
        name: "Vodafone Idea Limited",
        type: "Promoter Member",
        category: "Telecom Operator",
        since: "2014",
        color: "from-red-600 to-pink-600",
    },
]

const membershipStats = [
    {
        title: "Total Members",
        count: "100+",
        description: "Organizations across India",
        icon: Users,
        color: "from-blue-500 to-blue-600",
    },
    {
        title: "Promoter Members",
        count: "15+",
        description: "Leading telecom operators",
        icon: Award,
        color: "from-purple-500 to-purple-600",
    },
    {
        title: "Associate Members",
        count: "60+",
        description: "Equipment vendors and tech companies",
        icon: Building2,
        color: "from-orange-500 to-orange-600",
    },
    {
        title: "Academic Members",
        count: "25+",
        description: "Research institutions and universities",
        icon: TrendingUp,
        color: "from-cyan-500 to-cyan-600",
    },
]

export default function MemberDirectoryPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-20">
                <div className="container relative mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-lg">
                            <Users className="mr-2 h-4 w-4 inline" />
                            Our Community
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-slate-900">
                            Member{" "}
                            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                                Directory
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-700">
                            Leading organizations shaping India's telecommunications standards
                        </p>
                    </div>
                </div>
            </section>

            {/* Membership Stats */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Membership Overview</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Diverse representation across industry, academia, and government
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {membershipStats.map((stat, index) => {
                            const Icon = stat.icon
                            return (
                                <Card
                                    key={stat.title}
                                    className="group transition-all hover:shadow-2xl hover:scale-105 border-2"
                                >
                                    <CardHeader>
                                        <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${stat.color} p-4 shadow-lg`}>
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                        <div className="mb-2">
                                            <span className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                                {stat.count}
                                            </span>
                                        </div>
                                        <CardTitle className="text-xl">{stat.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base">{stat.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Member Organizations */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Member Organizations</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Featured members contributing to TSDSI's mission
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {memberOrganizations.map((member, index) => (
                            <Card
                                key={member.name}
                                className="group transition-all hover:shadow-2xl hover:scale-105 border-2 bg-gradient-to-br from-background to-muted/30 overflow-hidden"
                            >
                                <div className={`h-2 w-full bg-gradient-to-r ${member.color}`} />
                                <CardHeader>
                                    <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${member.color} p-4 shadow-lg`}>
                                        <Building2 className="h-8 w-8 text-white" />
                                    </div>
                                    <CardTitle className="text-lg mb-2">{member.name}</CardTitle>
                                    <Badge className={`w-fit mb-2 bg-gradient-to-r ${member.color} text-white border-0`}>
                                        {member.type}
                                    </Badge>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Globe className="h-4 w-4 text-muted-foreground" />
                                        <span>{member.category}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Award className="h-4 w-4 text-muted-foreground" />
                                        <span>Member since {member.since}</span>
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
