"use client"

import { Users, Mail, Phone, MapPin, Briefcase, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const secretariatTeam = [
    {
        name: "Dr. Pamela Kumar",
        role: "Director General",
        department: "Leadership",
        email: "director@tsdsi.in",
        color: "from-blue-600 to-cyan-600",
    },
    {
        name: "Mr. Rajesh Agarwal",
        role: "Technical Director",
        department: "Technical Activities",
        email: "technical@tsdsi.in",
        color: "from-purple-600 to-pink-600",
    },
    {
        name: "Ms. Anita Desai",
        role: "Standards Manager",
        department: "Standards Development",
        email: "standards@tsdsi.in",
        color: "from-orange-600 to-red-600",
    },
    {
        name: "Mr. Suresh Patel",
        role: "Membership Coordinator",
        department: "Member Relations",
        email: "membership@tsdsi.in",
        color: "from-green-600 to-teal-600",
    },
]

const functions = [
    {
        title: "Administrative Support",
        description: "Managing day-to-day operations and organizational activities",
        icon: Briefcase,
        color: "from-blue-500 to-blue-600",
    },
    {
        title: "Technical Coordination",
        description: "Facilitating study groups and working group activities",
        icon: Award,
        color: "from-purple-500 to-purple-600",
    },
    {
        title: "Member Services",
        description: "Supporting member organizations and onboarding",
        icon: Users,
        color: "from-orange-500 to-orange-600",
    },
    {
        title: "Communications",
        description: "Managing external communications and outreach",
        icon: Mail,
        color: "from-cyan-500 to-cyan-600",
    },
]

export default function SecretariatPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 py-20">
                <div className="container relative mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0 shadow-lg">
                            <Users className="mr-2 h-4 w-4 inline" />
                            Administrative Team
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-slate-900">
                            TSDSI{" "}
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                                Secretariat
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-700">
                            Supporting TSDSI's mission through dedicated administrative and technical services
                        </p>
                    </div>
                </div>
            </section>

            {/* Secretariat Functions */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Key Functions</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Core responsibilities of the TSDSI Secretariat
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {functions.map((func, index) => {
                            const Icon = func.icon
                            return (
                                <Card
                                    key={func.title}
                                    className="group transition-all hover:shadow-2xl hover:scale-105 border-2"
                                >
                                    <CardHeader>
                                        <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${func.color} p-4 shadow-lg`}>
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                        <CardTitle className="text-lg">{func.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-sm">{func.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Team Members */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Our Team</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Meet the dedicated professionals managing TSDSI operations
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {secretariatTeam.map((member, index) => (
                            <Card
                                key={member.name}
                                className="group transition-all hover:shadow-2xl hover:scale-105 border-2 bg-gradient-to-br from-background to-muted/30 overflow-hidden"
                            >
                                <div className={`h-2 w-full bg-gradient-to-r ${member.color}`} />
                                <CardHeader>
                                    <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${member.color} p-4 shadow-lg`}>
                                        <Users className="h-8 w-8 text-white" />
                                    </div>
                                    <CardTitle className="text-lg mb-2">{member.name}</CardTitle>
                                    <Badge variant="secondary" className="w-fit mb-2">{member.role}</Badge>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                                        <span>{member.department}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Mail className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-primary">{member.email}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <Card className="mx-auto max-w-3xl border-2 bg-gradient-to-br from-primary/10 to-secondary/10">
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl">Contact Secretariat</CardTitle>
                            <CardDescription className="text-lg">
                                Reach out to us for administrative support and inquiries
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-3 p-4 rounded-lg bg-background">
                                <MapPin className="h-6 w-6 text-primary" />
                                <div>
                                    <p className="font-semibold">Address</p>
                                    <p className="text-sm text-muted-foreground">TSDSI Secretariat, New Delhi, India</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 rounded-lg bg-background">
                                <Mail className="h-6 w-6 text-primary" />
                                <div>
                                    <p className="font-semibold">Email</p>
                                    <p className="text-sm text-primary">secretariat@tsdsi.in</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 rounded-lg bg-background">
                                <Phone className="h-6 w-6 text-primary" />
                                <div>
                                    <p className="font-semibold">Phone</p>
                                    <p className="text-sm text-muted-foreground">+91-11-XXXX-XXXX</p>
                                </div>
                            </div>
                            <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                                Send Message
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}
