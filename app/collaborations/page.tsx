import { Globe2, Handshake, Network, Building } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const internationalPartners = [
    {
        name: "3GPP",
        fullName: "3rd Generation Partnership Project",
        description: "Organizational Partner contributing to 3GPP specifications for mobile telecommunications",
        type: "Organizational Partner",
        focus: ["5G/6G standards", "Mobile networks", "Technical specifications"],
    },
    {
        name: "ITU",
        fullName: "International Telecommunication Union",
        description: "Contributing to IMT-2030 framework and global telecommunications standardization",
        type: "Contributing Member",
        focus: ["IMT-2030", "Spectrum management", "Global standards"],
    },
    {
        name: "ETSI",
        fullName: "European Telecommunications Standards Institute",
        description: "Collaboration on telecommunications standards and specifications",
        type: "Partner Organization",
        focus: ["Network standards", "Security", "IoT"],
    },
    {
        name: "oneM2M",
        fullName: "oneM2M Partnership Project",
        description: "Partner Type I contributing to M2M and IoT standardization",
        type: "Partner Type I",
        focus: ["M2M standards", "IoT platforms", "Service layer"],
    },
]

const nationalPartners = [
    {
        name: "TEC",
        fullName: "Telecommunication Engineering Centre",
        description: "Collaboration on adopting TSDSI standards as national standards",
        icon: Building,
    },
    {
        name: "DoT",
        fullName: "Department of Telecommunications",
        description: "Government support and policy alignment for standards development",
        icon: Building,
    },
    {
        name: "MeitY",
        fullName: "Ministry of Electronics and Information Technology",
        description: "Joint support for ICT standards and digital initiatives",
        icon: Building,
    },
]

const initiatives = [
    {
        title: "Global Standards Collaboration (GSC)",
        description: "Member of GSC, a forum for leading global ICT standards bodies to exchange information and collaborate",
        achievements: [
            "Regular participation in GSC meetings",
            "Information exchange with peer SDOs",
            "Collaborative standardization efforts",
        ],
    },
    {
        title: "Bharat 6G Alliance",
        description: "Active collaboration on India's 6G vision and standardization roadmap",
        achievements: [
            "6G use case development",
            "Network architecture contributions",
            "AI/ML integration research",
        ],
    },
    {
        title: "Regional Partnerships",
        description: "Agreements with telecommunications bodies in Africa and other developing regions",
        achievements: [
            "Knowledge sharing programs",
            "Capacity building initiatives",
            "Standards harmonization",
        ],
    },
]

export default function CollaborationsPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/10 via-background to-teal-500/10 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4" variant="secondary">
                            Global Collaborations
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Building{" "}
                            <span className="bg-gradient-to-r from-[hsl(217,91%,60%)] via-[hsl(270,95%,75%)] to-[hsl(24,95%,53%)] bg-clip-text text-transparent">
                                Global Partnerships
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground sm:text-xl">
                            Collaborating with leading international and national organizations to advance
                            telecommunications standardization worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* International Partners */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">International Partnerships</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Strategic collaborations with global standards organizations
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {internationalPartners.map((partner) => (
                            <Card key={partner.name} className="border-2 hover:shadow-lg transition-all">
                                <CardHeader>
                                    <div className="mb-2 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                                <Globe2 className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-xl">{partner.name}</CardTitle>
                                                <p className="text-sm text-muted-foreground">{partner.fullName}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Badge variant="secondary" className="w-fit">
                                        {partner.type}
                                    </Badge>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <CardDescription className="text-base">{partner.description}</CardDescription>
                                    <div>
                                        <h4 className="mb-2 text-sm font-semibold">Focus Areas:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {partner.focus.map((area) => (
                                                <Badge key={area} variant="outline">
                                                    {area}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* National Partners */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">National Collaborations</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Working with Indian government bodies and institutions
                        </p>
                    </div>
                    <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-3">
                        {nationalPartners.map((partner) => {
                            const Icon = partner.icon
                            return (
                                <Card key={partner.name} className="hover:shadow-lg transition-all">
                                    <CardHeader>
                                        <div className="mb-3 inline-flex rounded-lg bg-teal-500/10 p-3">
                                            <Icon className="h-6 w-6 text-teal-600" />
                                        </div>
                                        <CardTitle className="text-lg">{partner.name}</CardTitle>
                                        <p className="text-xs text-muted-foreground">{partner.fullName}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{partner.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Joint Initiatives */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Joint Initiatives</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Collaborative projects advancing telecommunications innovation
                        </p>
                    </div>
                    <div className="mx-auto max-w-5xl space-y-6">
                        {initiatives.map((initiative) => (
                            <Card key={initiative.title} className="hover:shadow-lg transition-all">
                                <CardHeader>
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                            <Handshake className="h-6 w-6 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <CardTitle className="text-xl">{initiative.title}</CardTitle>
                                            <CardDescription className="mt-2 text-base">
                                                {initiative.description}
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <h4 className="mb-3 font-semibold">Key Activities:</h4>
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
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
