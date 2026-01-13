import { Building2, Users, FileText, Shield, Award, Scale } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const governanceAreas = [
    {
        title: "Governing Council",
        description: "Strategic oversight and policy direction for TSDSI operations and standardization activities",
        icon: Users,
        color: "from-blue-500 to-blue-600",
    },
    {
        title: "Standing Committees",
        description: "Specialized committees managing technical, administrative, and strategic functions",
        icon: Building2,
        color: "from-purple-500 to-purple-600",
    },
    {
        title: "Study Groups",
        description: "Technical study groups developing standards for networks, services, and solutions",
        icon: FileText,
        color: "from-orange-500 to-orange-600",
    },
    {
        title: "Working Groups",
        description: "Focused working groups addressing security, applications, and architecture",
        icon: Shield,
        color: "from-cyan-500 to-cyan-600",
    },
    {
        title: "Technical Leaders",
        description: "Expert leadership guiding technical direction and standardization efforts",
        icon: Award,
        color: "from-green-500 to-green-600",
    },
    {
        title: "Secretariat",
        description: "Administrative support and coordination for all TSDSI activities",
        icon: Scale,
        color: "from-pink-500 to-pink-600",
    },
]

const keyPrinciples = [
    "Transparent decision-making processes",
    "Consensus-based standards development",
    "Industry-led technical direction",
    "Government support and recognition",
    "International collaboration and alignment",
    "Inclusive membership participation",
]

export default function GovernancePage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="/governance_structure_1768296446982.png"
                        alt="Governance Structure"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
                <div className="container relative mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white border-0">
                            Organization Structure
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Governance{" "}
                            <span className="bg-gradient-to-r from-[hsl(217,91%,60%)] via-[hsl(270,95%,75%)] to-[hsl(24,95%,53%)] bg-clip-text text-transparent">
                                Structure
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground sm:text-xl">
                            A robust governance framework ensuring transparent, inclusive, and effective standards development
                        </p>
                    </div>
                </div>
            </section>

            {/* Governance Structure Image */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-5xl">
                        <Card className="overflow-hidden border-2">
                            <div className="aspect-video w-full">
                                <img
                                    src="/governance_structure_1768296446982.png"
                                    alt="TSDSI Governance Structure"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-2xl">Organizational Hierarchy</CardTitle>
                                <CardDescription className="text-base">
                                    TSDSI's governance structure ensures effective decision-making, technical excellence, and stakeholder participation
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Governance Areas */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Governance Bodies</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Key organizational bodies driving TSDSI's mission and operations
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {governanceAreas.map((area, index) => {
                            const Icon = area.icon
                            return (
                                <Card
                                    key={area.title}
                                    className="group transition-all hover:shadow-2xl hover:scale-105 border-2 bg-gradient-to-br from-background to-muted/30"
                                    style={{ animationDelay: `${index * 100}ms` }}
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
                                        <CardDescription className="text-base leading-relaxed">
                                            {area.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Key Principles */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <Card className="border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
                            <CardHeader>
                                <CardTitle className="text-3xl text-center">Governance Principles</CardTitle>
                                <CardDescription className="text-center text-lg">
                                    Core values guiding TSDSI's organizational operations
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-4 md:grid-cols-2">
                                    {keyPrinciples.map((principle, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 rounded-lg bg-background p-4 border hover:shadow-md transition-all"
                                        >
                                            <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-primary to-secondary" />
                                            <p className="text-base font-medium">{principle}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}
