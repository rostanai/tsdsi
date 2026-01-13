import { FileText, Users2, Zap, Network, BookOpen, Download } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const workingGroups = [
    {
        name: "Access & Devices",
        description: "Standards for access networks, user equipment, and device specifications",
        focus: ["5G/6G access", "IoT devices", "User equipment"],
    },
    {
        name: "Core Network",
        description: "Core network architecture, protocols, and service delivery",
        focus: ["Network architecture", "Service enablement", "Cloud-native core"],
    },
    {
        name: "Radio & Spectrum",
        description: "Radio interface technologies and spectrum management",
        focus: ["5Gi/6G radio", "Spectrum efficiency", "LMLC technology"],
    },
    {
        name: "Security & Privacy",
        description: "Network security, data protection, and privacy standards",
        focus: ["Network security", "Data privacy", "Authentication"],
    },
]

const standards = [
    {
        id: "TSDSI STD T1.3GPP 23.501",
        title: "5G System Architecture",
        category: "5G Core",
        status: "Published",
        year: "2023",
    },
    {
        id: "TSDSI STD T1.3GPP 38.300",
        title: "NR and NG-RAN Overall Description",
        category: "5G Radio",
        status: "Published",
        year: "2023",
    },
    {
        id: "TSDSI STD T1.5Gi",
        title: "5Gi Radio Interface Technology",
        category: "5G Innovation",
        status: "Published",
        year: "2021",
    },
    {
        id: "TSDSI WD 6G.001",
        title: "6G Vision and Requirements",
        category: "6G Development",
        status: "Working Draft",
        year: "2024",
    },
]

const initiatives = [
    {
        title: "5Gi Technology",
        description: "India's contribution to global 5G standards, accepted by ITU-R and integrated into 3GPP specifications",
        icon: Zap,
        achievements: [
            "ITU-R acceptance in 2021",
            "Integration into 3GPP Release 17",
            "Enhanced coverage for rural areas",
            "Improved spectral efficiency",
        ],
    },
    {
        title: "6G Standardization",
        description: "Leading India's participation in next-generation 6G technology development",
        icon: Network,
        achievements: [
            "Bharat 6G Mission collaboration",
            "IMT-2030 framework contributions",
            "AI/ML integration research",
            "Use case development",
        ],
    },
]

export default function StandardsPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/10 via-background to-teal-500/10 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4" variant="secondary">
                            Standards Development
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Developing{" "}
                            <span className="bg-gradient-to-r from-primary to-teal-600 bg-clip-text text-transparent">
                                World-Class Standards
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground sm:text-xl">
                            Creating telecommunications and ICT standards that serve India's needs while
                            contributing to global standardization efforts.
                        </p>
                    </div>
                </div>
            </section>

            {/* 5G/6G Initiatives */}
            <section className="py-20" id="5g-6g">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">5G/6G Initiatives</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Pioneering next-generation telecommunications technologies
                        </p>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-2">
                        {initiatives.map((initiative) => {
                            const Icon = initiative.icon
                            return (
                                <Card key={initiative.title} className="border-2 hover:shadow-lg transition-all">
                                    <CardHeader>
                                        <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                                            <Icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <CardTitle className="text-2xl">{initiative.title}</CardTitle>
                                        <CardDescription className="text-base">{initiative.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <h4 className="mb-3 font-semibold">Key Achievements:</h4>
                                        <ul className="space-y-2">
                                            {initiative.achievements.map((achievement, index) => (
                                                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Working Groups */}
            <section className="bg-muted/50 py-20" id="working-groups">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Working Groups</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Collaborative groups driving standards development across key technology areas
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {workingGroups.map((group) => (
                            <Card key={group.name} className="hover:shadow-lg transition-all">
                                <CardHeader>
                                    <div className="mb-2 inline-flex rounded-lg bg-primary/10 p-2">
                                        <Users2 className="h-5 w-5 text-primary" />
                                    </div>
                                    <CardTitle>{group.name}</CardTitle>
                                    <CardDescription>{group.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {group.focus.map((item) => (
                                            <Badge key={item} variant="secondary">
                                                {item}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Published Standards */}
            <section className="py-20" id="publications">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Published Standards</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Browse our catalog of telecommunications standards and specifications
                        </p>
                    </div>
                    <div className="mx-auto max-w-4xl">
                        <Tabs defaultValue="all" className="w-full">
                            <TabsList className="grid w-full grid-cols-4">
                                <TabsTrigger value="all">All</TabsTrigger>
                                <TabsTrigger value="5g">5G</TabsTrigger>
                                <TabsTrigger value="6g">6G</TabsTrigger>
                                <TabsTrigger value="draft">Drafts</TabsTrigger>
                            </TabsList>
                            <TabsContent value="all" className="mt-6">
                                <div className="space-y-4">
                                    {standards.map((standard) => (
                                        <Card key={standard.id} className="hover:shadow-md transition-all">
                                            <CardHeader>
                                                <div className="flex items-start justify-between gap-4">
                                                    <div className="flex-1">
                                                        <div className="mb-2 flex flex-wrap items-center gap-2">
                                                            <Badge variant={standard.status === "Published" ? "default" : "secondary"}>
                                                                {standard.status}
                                                            </Badge>
                                                            <Badge variant="outline">{standard.category}</Badge>
                                                            <span className="text-sm text-muted-foreground">{standard.year}</span>
                                                        </div>
                                                        <CardTitle className="text-lg">{standard.title}</CardTitle>
                                                        <CardDescription className="font-mono text-xs">{standard.id}</CardDescription>
                                                    </div>
                                                    <Button size="sm" variant="outline">
                                                        <Download className="mr-2 h-4 w-4" />
                                                        Download
                                                    </Button>
                                                </div>
                                            </CardHeader>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>
                            <TabsContent value="5g" className="mt-6">
                                <p className="text-center text-muted-foreground">Filter by 5G standards...</p>
                            </TabsContent>
                            <TabsContent value="6g" className="mt-6">
                                <p className="text-center text-muted-foreground">Filter by 6G standards...</p>
                            </TabsContent>
                            <TabsContent value="draft" className="mt-6">
                                <p className="text-center text-muted-foreground">Working drafts and proposals...</p>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>

            {/* Standards Process */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Standards Development Process</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Our consensus-based approach to creating telecommunications standards
                        </p>
                    </div>
                    <div className="mx-auto max-w-3xl">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-left">
                                    <span className="font-semibold">1. Proposal & Review</span>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-muted-foreground">
                                        Members submit proposals for new standards or modifications. Technical committees
                                        review submissions for relevance and feasibility.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-left">
                                    <span className="font-semibold">2. Working Group Development</span>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-muted-foreground">
                                        Assigned working groups develop detailed specifications through collaborative
                                        technical work and regular meetings.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-left">
                                    <span className="font-semibold">3. Consensus Building</span>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-muted-foreground">
                                        Draft standards undergo member review and consensus building through iterative
                                        feedback and refinement cycles.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-left">
                                    <span className="font-semibold">4. Publication & Adoption</span>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-muted-foreground">
                                        Approved standards are published and submitted to national and international
                                        standards bodies for broader adoption.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>
        </div>
    )
}
