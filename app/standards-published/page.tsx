"use client"

import { FileText, Download, Calendar, Award, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const publishedStandards = [
    {
        code: "TSDSI STD T1.3GPP 23.501",
        title: "System Architecture for 5G System",
        version: "Release 16",
        date: "December 2023",
        category: "5G Core Network",
        color: "from-blue-600 to-cyan-600",
    },
    {
        code: "TSDSI STD T1.3GPP 38.300",
        title: "NR Overall Description",
        version: "Release 16",
        date: "November 2023",
        category: "5G Radio",
        color: "from-purple-600 to-pink-600",
    },
    {
        code: "TSDSI STD T1.3GPP 33.501",
        title: "Security Architecture for 5G System",
        version: "Release 16",
        date: "October 2023",
        category: "Security",
        color: "from-orange-600 to-red-600",
    },
    {
        code: "TSDSI STD T1.LMLC.001",
        title: "Low Mobility Large Cell Specification",
        version: "Version 1.0",
        date: "September 2023",
        category: "5Gi Technology",
        color: "from-green-600 to-teal-600",
    },
    {
        code: "TSDSI STD T1.oneM2M TS-0001",
        title: "Functional Architecture",
        version: "Release 4",
        date: "August 2023",
        category: "IoT/M2M",
        color: "from-indigo-600 to-blue-600",
    },
    {
        code: "TSDSI STD T1.3GPP 29.500",
        title: "Technical Realization of Service Based Architecture",
        version: "Release 16",
        date: "July 2023",
        category: "Service Architecture",
        color: "from-pink-600 to-purple-600",
    },
]

const categories = [
    {
        name: "5G Standards",
        count: "25+",
        description: "Core network and radio standards",
        icon: Award,
        color: "from-blue-500 to-blue-600",
    },
    {
        name: "Security",
        count: "10+",
        description: "Network and application security",
        icon: CheckCircle,
        color: "from-purple-500 to-purple-600",
    },
    {
        name: "IoT/M2M",
        count: "15+",
        description: "Internet of Things standards",
        icon: FileText,
        color: "from-orange-500 to-orange-600",
    },
    {
        name: "5Gi Technology",
        count: "5+",
        description: "India-specific innovations",
        icon: Award,
        color: "from-cyan-500 to-cyan-600",
    },
]

export default function StandardsPublishedPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 py-20">
                <div className="container relative mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0 shadow-lg">
                            <FileText className="mr-2 h-4 w-4 inline" />
                            Technical Standards
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-slate-900">
                            Published{" "}
                            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                                Standards
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-700">
                            Comprehensive catalog of TSDSI technical standards and specifications
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Standards Categories</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Browse standards by technical domain
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {categories.map((category, index) => {
                            const Icon = category.icon
                            return (
                                <Card
                                    key={category.name}
                                    className="group transition-all hover:shadow-2xl hover:scale-105 border-2"
                                >
                                    <CardHeader>
                                        <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${category.color} p-4 shadow-lg`}>
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                        <div className="mb-2">
                                            <span className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                                {category.count}
                                            </span>
                                        </div>
                                        <CardTitle className="text-xl">{category.name}</CardTitle>
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

            {/* Published Standards */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Latest Standards</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Recently published technical standards
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {publishedStandards.map((standard, index) => (
                            <Card
                                key={standard.code}
                                className="group transition-all hover:shadow-2xl hover:scale-105 border-2 bg-gradient-to-br from-background to-muted/30 overflow-hidden"
                            >
                                <div className={`h-2 w-full bg-gradient-to-r ${standard.color}`} />
                                <CardHeader>
                                    <Badge className={`w-fit mb-3 bg-gradient-to-r ${standard.color} text-white border-0`}>
                                        {standard.category}
                                    </Badge>
                                    <CardTitle className="text-lg mb-2">{standard.code}</CardTitle>
                                    <CardDescription className="text-base font-semibold">
                                        {standard.title}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Award className="h-4 w-4 text-muted-foreground" />
                                        <span>{standard.version}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Calendar className="h-4 w-4 text-muted-foreground" />
                                        <span>{standard.date}</span>
                                    </div>
                                    <Button className={`w-full bg-gradient-to-r ${standard.color} text-white hover:opacity-90`}>
                                        <Download className="mr-2 h-4 w-4" />
                                        Download PDF
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
