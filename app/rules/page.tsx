"use client"

import { FileText, Shield, Users, CheckCircle, Scale, Lock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const policyCategories = [
    {
        title: "Operating Procedures",
        description: "Standard Operating Procedures for TSDSI operations",
        icon: FileText,
        color: "from-blue-600 to-cyan-600",
    },
    {
        title: "IPR Policy",
        description: "Intellectual Property Rights declarations and policies",
        icon: Shield,
        color: "from-purple-600 to-pink-600",
    },
    {
        title: "Membership Rules",
        description: "Rules and regulations for TSDSI membership",
        icon: Users,
        color: "from-orange-600 to-red-600",
    },
    {
        title: "Code of Conduct",
        description: "Professional conduct guidelines for members",
        icon: CheckCircle,
        color: "from-green-600 to-teal-600",
    },
]

const documents = [
    {
        title: "Memorandum of Association",
        description: "TSDSI's founding document and constitutional framework",
        category: "Governance",
        color: "from-indigo-600 to-blue-600",
    },
    {
        title: "IPR Declarations",
        description: "Intellectual property rights declarations by members",
        category: "Legal",
        color: "from-pink-600 to-purple-600",
    },
    {
        title: "POSH Policy",
        description: "Prevention of Sexual Harassment policy and guidelines",
        category: "Workplace",
        color: "from-cyan-600 to-teal-600",
    },
    {
        title: "Standards Development Process",
        description: "Detailed procedures for developing TSDSI standards",
        category: "Technical",
        color: "from-yellow-600 to-orange-600",
    },
    {
        title: "Working Group Guidelines",
        description: "Rules for participating in technical working groups",
        category: "Technical",
        color: "from-red-600 to-pink-600",
    },
    {
        title: "Election Procedures",
        description: "Guidelines for Governing Council and leadership elections",
        category: "Governance",
        color: "from-blue-600 to-indigo-600",
    },
]

export default function RulesPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
                <div className="container relative mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-lg">
                            <Scale className="mr-2 h-4 w-4 inline" />
                            Governance Documents
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-slate-900">
                            Rules, Procedures &{" "}
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Policies
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-700">
                            Comprehensive governance framework guiding TSDSI's operations and standards development
                        </p>
                    </div>
                </div>
            </section>

            {/* Policy Categories */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Policy Categories</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Key policy areas governing TSDSI operations
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {policyCategories.map((category, index) => {
                            const Icon = category.icon
                            return (
                                <Card
                                    key={category.title}
                                    className="group transition-all hover:shadow-2xl hover:scale-105 border-2 overflow-hidden"
                                >
                                    <div className={`h-2 w-full bg-gradient-to-r ${category.color}`} />
                                    <CardHeader>
                                        <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${category.color} p-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                            <Icon className="h-8 w-8 text-white" />
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

            {/* Documents */}
            <section className="bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Policy Documents</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Access important governance and policy documents
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {documents.map((doc, index) => (
                            <Card
                                key={doc.title}
                                className="group transition-all hover:shadow-2xl hover:scale-105 border-2 overflow-hidden"
                            >
                                <div className={`h-2 w-full bg-gradient-to-r ${doc.color}`} />
                                <CardHeader>
                                    <Badge className={`w-fit mb-3 bg-gradient-to-r ${doc.color} text-white border-0`}>
                                        {doc.category}
                                    </Badge>
                                    <CardTitle className="text-lg mb-2">{doc.title}</CardTitle>
                                    <CardDescription className="text-base">
                                        {doc.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button variant="outline" className="w-full">
                                        <FileText className="mr-2 h-4 w-4" />
                                        View Document
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <Card className="border-2 border-primary/20 bg-gradient-to-br from-blue-50 to-purple-50">
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl">Questions About Our Policies?</CardTitle>
                            <CardDescription className="text-lg">
                                Contact our secretariat for clarifications on rules and procedures
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-center gap-4">
                            <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600">
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/faq">View FAQ</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}
