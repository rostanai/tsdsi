import { Network, Server, Radio, Cpu } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const studyGroupInfo = {
    title: "Study Group - Networks",
    description: "Developing standards for next-generation network technologies including 5G, 6G, and beyond",
    scope: [
        "Radio Access Network (RAN) technologies",
        "Core Network architecture and protocols",
        "Network slicing and virtualization",
        "Edge computing and MEC",
        "Network security and resilience",
        "Spectrum management and efficiency",
    ],
}

const workingAreas = [
    {
        title: "5G Advanced",
        description: "Enhancements to 5G NR, including carrier aggregation, MIMO improvements, and spectrum efficiency",
        icon: Radio,
        color: "from-blue-500 to-blue-600",
        topics: ["5G NR Release 17/18", "mmWave optimization", "Carrier aggregation"],
    },
    {
        title: "6G Research",
        description: "Exploring next-generation technologies for 6G including AI-native networks and THz communications",
        icon: Cpu,
        color: "from-purple-500 to-purple-600",
        topics: ["AI/ML integration", "THz spectrum", "Holographic communications"],
    },
    {
        title: "Network Architecture",
        description: "Cloud-native architectures, service-based interfaces, and network function virtualization",
        icon: Server,
        color: "from-orange-500 to-orange-600",
        topics: ["SBA architecture", "NFV/SDN", "Cloud-native 5GC"],
    },
    {
        title: "RAN Evolution",
        description: "Open RAN, intelligent RAN, and radio resource management for next-gen networks",
        icon: Network,
        color: "from-cyan-500 to-cyan-600",
        topics: ["Open RAN", "RIC platforms", "RRM algorithms"],
    },
]

const recentActivities = [
    {
        title: "5G NR Specification Review",
        date: "January 2026",
        description: "Completed review of 3GPP Release 18 specifications for India-specific requirements",
    },
    {
        title: "6G Vision Workshop",
        date: "December 2025",
        description: "Conducted workshop on 6G use cases and requirements with industry stakeholders",
    },
    {
        title: "Network Slicing Standards",
        date: "November 2025",
        description: "Published technical report on network slicing implementation guidelines",
    },
]

export default function StudyGroupNetworksPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="/study_groups_collaboration_1768296487197.png"
                        alt="Study Group Collaboration"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
                <div className="container relative mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white border-0">
                            Technical Activities
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Study Group{" "}
                            <span className="bg-gradient-to-r from-[hsl(217,91%,60%)] via-[hsl(270,95%,75%)] to-[hsl(24,95%,53%)] bg-clip-text text-transparent">
                                Networks
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground sm:text-xl">
                            {studyGroupInfo.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Scope of Work */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <Card className="border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
                            <CardHeader>
                                <CardTitle className="text-3xl">Scope of Work</CardTitle>
                                <CardDescription className="text-lg">
                                    Key focus areas for network standards development
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-3 md:grid-cols-2">
                                    {studyGroupInfo.scope.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 rounded-lg bg-background p-4 border hover:shadow-md transition-all"
                                        >
                                            <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-primary to-secondary" />
                                            <p className="text-base font-medium">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Working Areas */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Working Areas</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Technical domains under active development
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {workingAreas.map((area, index) => {
                            const Icon = area.icon
                            return (
                                <Card
                                    key={area.title}
                                    className="group transition-all hover:shadow-2xl hover:scale-105 border-2 bg-gradient-to-br from-background to-muted/30"
                                >
                                    <CardHeader>
                                        <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${area.color} p-4 shadow-lg`}>
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                            {area.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="mb-4 text-base">
                                            {area.description}
                                        </CardDescription>
                                        <div className="flex flex-wrap gap-2">
                                            {area.topics.map((topic, idx) => (
                                                <Badge key={idx} variant="outline" className="text-xs">
                                                    {topic}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Recent Activities */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Recent Activities</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Latest work and achievements from the study group
                        </p>
                    </div>
                    <div className="mx-auto max-w-4xl space-y-4">
                        {recentActivities.map((activity, index) => (
                            <Card key={index} className="border-2 hover:shadow-lg transition-all">
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <CardTitle className="text-xl mb-2">{activity.title}</CardTitle>
                                            <Badge variant="secondary" className="mb-3">
                                                {activity.date}
                                            </Badge>
                                            <CardDescription className="text-base">
                                                {activity.description}
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-[hsl(217,91%,60%)] via-[hsl(270,95%,75%)] to-[hsl(24,95%,53%)] py-20 text-white">
                <div className="container mx-auto px-4 text-center lg:px-8">
                    <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Join Our Study Group</h2>
                    <p className="mb-8 text-lg opacity-90">
                        Contribute to network standards development and shape the future of telecommunications
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="/membership">Become a Member</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white" asChild>
                            <Link href="/contact">Contact Study Group</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
