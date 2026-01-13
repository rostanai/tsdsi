import { FileText, Download, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const whitePapers = [
    {
        title: "Quantum Communication Technologies",
        year: "2025",
        description: "Exploring quantum communication for secure telecommunications infrastructure",
        category: "Emerging Tech",
        pages: "45",
        color: "from-purple-500/20 to-pink-500/10",
        badge: "NEW",
    },
    {
        title: "6G White Paper",
        year: "2022",
        description: "Vision and roadmap for 6G technologies and standardization in India",
        category: "6G",
        pages: "52",
        color: "from-blue-500/20 to-purple-500/10",
        badge: "FEATURED",
    },
    {
        title: "Smart City Solutions",
        year: "2020",
        description: "Insights into telecommunications infrastructure for smart city deployments",
        category: "IoT",
        pages: "38",
        color: "from-green-500/20 to-cyan-500/10",
    },
    {
        title: "Automated Electric Road Transportation",
        year: "2020",
        description: "Standards and technologies for connected and autonomous vehicles",
        category: "V2X",
        pages: "42",
        color: "from-orange-500/20 to-yellow-500/10",
    },
    {
        title: "Startup White Paper",
        year: "2021",
        description: "Opportunities and frameworks for startups in telecommunications standardization",
        category: "Innovation",
        pages: "28",
        color: "from-cyan-500/20 to-blue-500/10",
    },
    {
        title: "Open Source White Paper",
        year: "2020",
        description: "Role of open source in telecommunications standards and implementations",
        category: "Open Source",
        pages: "35",
        color: "from-pink-500/20 to-purple-500/10",
    },
    {
        title: "MDPP TIP Forum",
        year: "2021",
        description: "Multi-Domain Packet Platform and Telecom Infra Project collaboration",
        category: "Infrastructure",
        pages: "40",
        color: "from-blue-500/20 to-cyan-500/10",
    },
]

const categories = [
    { name: "All", count: whitePapers.length },
    { name: "6G", count: 1 },
    { name: "IoT", count: 1 },
    { name: "Emerging Tech", count: 1 },
    { name: "Innovation", count: 1 },
]

export default function WhitePapersPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
                <div className="absolute inset-0 opacity-30">
                    <img
                        src="/white_papers_showcase_1768296466317.png"
                        alt="White Papers"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
                <div className="container relative mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white border-0">
                            Technical Publications
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            White{" "}
                            <span className="bg-gradient-to-r from-[hsl(217,91%,60%)] via-[hsl(270,95%,75%)] to-[hsl(24,95%,53%)] bg-clip-text text-transparent">
                                Papers
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground sm:text-xl">
                            In-depth technical papers exploring emerging technologies and standardization opportunities
                        </p>
                    </div>
                </div>
            </section>

            {/* White Papers Showcase Image */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <Card className="mx-auto max-w-5xl overflow-hidden border-2">
                        <div className="aspect-video w-full">
                            <img
                                src="/white_papers_showcase_1768296466317.png"
                                alt="TSDSI White Papers Collection"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* White Papers Grid */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Published White Papers</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Comprehensive technical papers on cutting-edge telecommunications topics
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="mb-8 flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <Badge
                                key={category.name}
                                variant="outline"
                                className="cursor-pointer hover:bg-primary hover:text-white transition-colors px-4 py-2"
                            >
                                {category.name} ({category.count})
                            </Badge>
                        ))}
                    </div>

                    {/* White Papers Grid */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {whitePapers.map((paper, index) => (
                            <Card
                                key={index}
                                className={`group overflow-hidden transition-all hover:shadow-2xl hover:scale-105 border-2 bg-gradient-to-br ${paper.color}`}
                            >
                                <CardHeader>
                                    <div className="mb-3 flex items-center justify-between">
                                        <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0">
                                            {paper.category}
                                        </Badge>
                                        {paper.badge && (
                                            <Badge variant="outline" className="border-primary text-primary">
                                                {paper.badge}
                                            </Badge>
                                        )}
                                    </div>
                                    <div className="mb-3 inline-flex rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 p-4 shadow-lg">
                                        <FileText className="h-8 w-8 text-white" />
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                        {paper.title}
                                    </CardTitle>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <span>{paper.year}</span>
                                        <span>•</span>
                                        <span>{paper.pages} pages</span>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="mb-4 text-base">
                                        {paper.description}
                                    </CardDescription>
                                    <div className="flex gap-2">
                                        <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                                            <Download className="mr-2 h-4 w-4" />
                                            Download
                                        </Button>
                                        <Button size="sm" variant="outline">
                                            <ExternalLink className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <Card className="mx-auto max-w-3xl border-2 bg-gradient-to-br from-primary/10 to-secondary/10">
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl">Contribute to Our Research</CardTitle>
                            <CardDescription className="text-lg">
                                TSDSI members can propose and contribute to white papers on emerging technologies
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-center gap-4">
                            <Button size="lg" asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                                <Link href="/membership">Become a Member</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}
