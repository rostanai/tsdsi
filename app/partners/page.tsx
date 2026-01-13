import { Globe2, Handshake, Award, Building2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const partnerCategories = [
    {
        title: "Promoter Members",
        count: "15+",
        description: "Leading telecom operators and equipment manufacturers driving TSDSI's vision",
        color: "from-blue-500 to-blue-600",
        icon: Award,
    },
    {
        title: "Ordinary Members",
        count: "50+",
        description: "Technology companies and service providers contributing to standards development",
        color: "from-purple-500 to-purple-600",
        icon: Building2,
    },
    {
        title: "Associate Members",
        count: "30+",
        description: "Academic institutions, research organizations, and SMEs participating in TSDSI",
        color: "from-orange-500 to-orange-600",
        icon: Handshake,
    },
    {
        title: "Global Partners",
        count: "10+",
        description: "International SDOs and standardization bodies collaborating with TSDSI",
        color: "from-cyan-500 to-cyan-600",
        icon: Globe2,
    },
]

const majorPartners = [
    "Reliance Jio", "Bharti Airtel", "Vodafone Idea", "BSNL", "MTNL",
    "Nokia", "Ericsson", "Samsung", "Huawei", "ZTE",
    "Qualcomm", "Intel", "MediaTek", "Cisco", "Juniper",
    "IIT Delhi", "IIT Bombay", "IIT Madras", "IIIT Hyderabad", "C-DOT",
    "TEC", "DoT", "MeitY", "3GPP", "ITU",
    "ETSI", "oneM2M", "ATIS", "TIA", "CCSA"
]

const partnershipBenefits = [
    {
        title: "Standards Development",
        description: "Direct participation in creating India-specific telecommunications standards",
        icon: "📋",
    },
    {
        title: "Global Recognition",
        description: "Contribution to international standardization through TSDSI's global partnerships",
        icon: "🌍",
    },
    {
        title: "Technical Leadership",
        description: "Opportunity to lead working groups and influence technical direction",
        icon: "🎯",
    },
    {
        title: "Networking",
        description: "Connect with industry leaders, researchers, and policymakers",
        icon: "🤝",
    },
    {
        title: "Early Access",
        description: "Get early insights into emerging standards and technologies",
        icon: "⚡",
    },
    {
        title: "IPR Protection",
        description: "Framework for intellectual property rights in standards development",
        icon: "🔒",
    },
]

export default function PartnersPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="/partner_organizations_1768296504178.png"
                        alt="Partner Network"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
                <div className="container relative mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white border-0">
                            Our Network
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            TSDSI{" "}
                            <span className="bg-gradient-to-r from-[hsl(217,91%,60%)] via-[hsl(270,95%,75%)] to-[hsl(24,95%,53%)] bg-clip-text text-transparent">
                                Partners
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground sm:text-xl">
                            Collaborating with 100+ organizations to advance telecommunications standardization in India and globally
                        </p>
                    </div>
                </div>
            </section>

            {/* Partner Categories */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Membership Categories</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Diverse membership base representing the entire telecommunications ecosystem
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {partnerCategories.map((category, index) => {
                            const Icon = category.icon
                            return (
                                <Card
                                    key={category.title}
                                    className="group transition-all hover:shadow-2xl hover:scale-105 border-2 bg-gradient-to-br from-background to-muted/30"
                                >
                                    <CardHeader>
                                        <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${category.color} p-4 shadow-lg`}>
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                        <div className="mb-2">
                                            <span className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                                {category.count}
                                            </span>
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

            {/* Major Partners Grid */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Our Partners</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Leading organizations collaborating with TSDSI
                        </p>
                    </div>
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        {majorPartners.map((partner, index) => (
                            <Card
                                key={index}
                                className="group hover:shadow-lg transition-all hover:scale-105 border-2"
                            >
                                <CardContent className="flex items-center justify-center p-6">
                                    <p className="text-center font-semibold text-sm group-hover:text-primary transition-colors">
                                        {partner}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership Benefits */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Partnership Benefits</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Why organizations choose to partner with TSDSI
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {partnershipBenefits.map((benefit, index) => (
                            <Card
                                key={index}
                                className="group transition-all hover:shadow-xl hover:scale-105 border-2 bg-gradient-to-br from-background to-primary/5"
                            >
                                <CardHeader>
                                    <div className="mb-3 text-4xl">{benefit.icon}</div>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                        {benefit.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">{benefit.description}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
