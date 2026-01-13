import { Target, Eye, Award, Users, Calendar, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const objectives = [
    "Develop and promote India-specific requirements for telecommunications and ICT",
    "Take Indian requirements and solutions to global standards organizations",
    "Foster standards-based manufacturing expertise within the country",
    "Provide guidance and leadership to developing countries in telecommunications standardization",
    "Promote indigenous technologies and Intellectual Property Rights (IPRs) in global standards",
    "Support rural connectivity and affordable broadband access",
    "Encourage domestic research and development and innovation in telecommunications and ICT",
    "Ensure the security and safety of networks and equipment",
]

const milestones = [
    {
        year: "2014",
        title: "TSDSI Established",
        description: "Founded as India's designated Telecom/ICT Standards Development Organization",
    },
    {
        year: "2016",
        title: "3GPP Partnership",
        description: "Became an Organizational Partner of 3GPP",
    },
    {
        year: "2018",
        title: "LMLC Innovation",
        description: "Introduced Low Mobility Large Cell concept to ITU-R",
    },
    {
        year: "2021",
        title: "5Gi Acceptance",
        description: "5Gi candidate radio interface technology accepted by ITU-R",
    },
    {
        year: "2023",
        title: "6G Leadership",
        description: "Active participation in Bharat 6G Mission and global 6G standardization",
    },
]

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/10 via-background to-teal-500/10 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4" variant="secondary">
                            About TSDSI
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            India's Premier{" "}
                            <span className="bg-gradient-to-r from-[hsl(217,91%,60%)] via-[hsl(270,95%,75%)] to-[hsl(24,95%,53%)] bg-clip-text text-transparent">
                                Standards Organization
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground sm:text-xl">
                            Established in 2014, TSDSI is an autonomous, membership-based organization dedicated
                            to developing standards for Telecom/ICT products and services within India.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-2">
                        <Card className="border-2 border-primary/20">
                            <CardHeader>
                                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                                    <Target className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="text-2xl">Our Mission</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">
                                    To develop, promote, and standardize India-specific telecommunications and ICT
                                    requirements and solutions, ensuring that Indian perspectives and needs are
                                    reflected in global standards while fostering innovation and indigenous technology
                                    development.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-teal-500/20">
                            <CardHeader>
                                <div className="mb-4 inline-flex rounded-lg bg-teal-500/10 p-3">
                                    <Eye className="h-8 w-8 text-teal-600" />
                                </div>
                                <CardTitle className="text-2xl">Our Vision</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">
                                    To position India as a global leader in telecommunications standardization,
                                    contributing significantly to international standards while addressing unique
                                    domestic requirements and promoting sustainable, secure, and innovative ICT
                                    solutions.
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Key Objectives */}
            <section className="bg-muted/50 py-20" id="objectives">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Key Objectives</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Our comprehensive approach to telecommunications standardization
                        </p>
                    </div>
                    <div className="mx-auto max-w-4xl">
                        <div className="grid gap-4 md:grid-cols-2">
                            {objectives.map((objective, index) => (
                                <div
                                    key={index}
                                    className="flex gap-3 rounded-lg border bg-card p-4 transition-all hover:shadow-md"
                                >
                                    <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                                    <p className="text-sm">{objective}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* History & Milestones */}
            <section className="py-20" id="history">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Our Journey</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            A decade of excellence in telecommunications standardization
                        </p>
                    </div>
                    <div className="mx-auto max-w-4xl">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-8 top-0 h-full w-0.5 bg-border md:left-1/2" />

                            {/* Milestones */}
                            <div className="space-y-12">
                                {milestones.map((milestone, index) => (
                                    <div
                                        key={milestone.year}
                                        className={`relative flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                            }`}
                                    >
                                        {/* Year badge */}
                                        <div className="absolute left-8 flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground md:left-1/2 md:-translate-x-1/2">
                                            <Calendar className="h-6 w-6" />
                                        </div>

                                        {/* Content */}
                                        <div className="ml-24 md:ml-0 md:w-1/2">
                                            <Card
                                                className={`transition-all hover:shadow-lg ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                                                    }`}
                                            >
                                                <CardHeader>
                                                    <Badge className="mb-2 w-fit">{milestone.year}</Badge>
                                                    <CardTitle>{milestone.title}</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <CardDescription>{milestone.description}</CardDescription>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Governance */}
            <section className="bg-muted/50 py-20" id="governance">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Governance & Support</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Backed by government support and industry collaboration
                        </p>
                    </div>
                    <div className="mx-auto max-w-4xl">
                        <Card>
                            <CardHeader>
                                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                                    <Award className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="text-2xl">Government Recognition</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    TSDSI was established as a direct result of the Indian government's commitment
                                    outlined in the National Telecom Policy 2012 to create an Indian
                                    telecommunications standards development organization (SDO).
                                </p>
                                <Separator />
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="flex items-start gap-3">
                                        <Users className="h-5 w-5 shrink-0 text-primary" />
                                        <div>
                                            <h4 className="font-semibold">Department of Telecommunications</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Joint support as India's designated Telecom/ICT SDO
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Users className="h-5 w-5 shrink-0 text-primary" />
                                        <div>
                                            <h4 className="font-semibold">Ministry of Electronics and IT</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Collaborative support for standards development
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}
