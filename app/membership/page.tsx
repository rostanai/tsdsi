import { Check, Users, Building2, Briefcase, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const membershipTiers = [
    {
        name: "Promoter Member",
        description: "Leading organizations shaping TSDSI's strategic direction",
        icon: Building2,
        benefits: [
            "Voting rights in all decisions",
            "Board representation",
            "Lead working groups",
            "Priority in standardization activities",
            "Maximum influence on standards",
        ],
        color: "border-primary",
    },
    {
        name: "Ordinary Member",
        description: "Active participants in standards development",
        icon: Briefcase,
        benefits: [
            "Participate in working groups",
            "Contribute to standards development",
            "Access to all publications",
            "Networking opportunities",
            "Technical committee participation",
        ],
        color: "border-teal-500",
    },
    {
        name: "Associate Member",
        description: "Supporting organizations and academic institutions",
        icon: Users,
        benefits: [
            "Observer status in meetings",
            "Access to published standards",
            "Networking events",
            "Educational resources",
            "Industry insights",
        ],
        color: "border-blue-500",
    },
]

const benefits = [
    {
        title: "Influence Standards",
        description: "Shape telecommunications standards that impact millions of users",
    },
    {
        title: "Global Recognition",
        description: "Contribute to international standards through 3GPP, ITU, and other bodies",
    },
    {
        title: "Networking",
        description: "Connect with industry leaders, innovators, and policymakers",
    },
    {
        title: "Early Access",
        description: "Get early insights into emerging technologies and standards",
    },
    {
        title: "IPR Protection",
        description: "Protect and promote your intellectual property in standards",
    },
    {
        title: "Market Advantage",
        description: "Stay ahead with knowledge of upcoming standardization activities",
    },
]

const currentMembers = [
    "Reliance Jio", "Bharti Airtel", "Vodafone Idea", "BSNL", "MTNL",
    "Samsung", "Nokia", "Ericsson", "Huawei", "ZTE",
    "Qualcomm", "Intel", "IIT Delhi", "IIT Bombay", "C-DOT",
]

export default function MembershipPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/10 via-background to-teal-500/10 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4" variant="secondary">
                            Membership
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Join India's{" "}
                            <span className="bg-gradient-to-r from-[hsl(217,91%,60%)] via-[hsl(270,95%,75%)] to-[hsl(24,95%,53%)] bg-clip-text text-transparent">
                                Standards Community
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground sm:text-xl">
                            Become a member and contribute to shaping the future of telecommunications in India
                            and globally.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20" id="benefits">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Membership Benefits</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Why leading organizations choose TSDSI membership
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {benefits.map((benefit, index) => (
                            <Card key={benefit.title} className="hover:shadow-lg transition-all">
                                <CardHeader>
                                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                        <Check className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle>{benefit.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{benefit.description}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Membership Tiers */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Membership Categories</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Choose the membership tier that best fits your organization
                        </p>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-3">
                        {membershipTiers.map((tier) => {
                            const Icon = tier.icon
                            return (
                                <Card key={tier.name} className={`border-2 ${tier.color} hover:shadow-xl transition-all`}>
                                    <CardHeader>
                                        <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                                            <Icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <CardTitle className="text-2xl">{tier.name}</CardTitle>
                                        <CardDescription className="text-base">{tier.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-3">
                                            {tier.benefits.map((benefit) => (
                                                <li key={benefit} className="flex items-start gap-2">
                                                    <Check className="h-5 w-5 shrink-0 text-primary" />
                                                    <span className="text-sm">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Button className="mt-6 w-full" variant="outline" asChild>
                                            <Link href="/contact">
                                                Apply Now
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* How to Join */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">How to Join</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Simple steps to become a TSDSI member
                        </p>
                    </div>
                    <div className="mx-auto max-w-4xl">
                        <div className="grid gap-6 md:grid-cols-4">
                            {[
                                { step: "1", title: "Submit Application", description: "Complete the membership application form" },
                                { step: "2", title: "Review Process", description: "Application reviewed by membership committee" },
                                { step: "3", title: "Approval", description: "Receive membership approval notification" },
                                { step: "4", title: "Start Contributing", description: "Begin participating in working groups" },
                            ].map((item, index) => (
                                <div key={item.step} className="relative">
                                    <Card className="h-full hover:shadow-lg transition-all">
                                        <CardHeader>
                                            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                                                {item.step}
                                            </div>
                                            <CardTitle className="text-lg">{item.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription>{item.description}</CardDescription>
                                        </CardContent>
                                    </Card>
                                    {index < 3 && (
                                        <div className="absolute -right-3 top-1/2 hidden h-0.5 w-6 bg-border md:block" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Members */}
            <section className="bg-muted/50 py-20" id="directory">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Our Members</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Leading organizations driving telecommunications innovation
                        </p>
                    </div>
                    <div className="mx-auto max-w-5xl">
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                            {currentMembers.map((member) => (
                                <Card key={member} className="flex items-center justify-center p-6 text-center hover:shadow-md transition-all">
                                    <CardContent className="p-0">
                                        <p className="font-medium text-sm">{member}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-teal-500/5">
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl">Ready to Join TSDSI?</CardTitle>
                            <CardDescription className="text-lg">
                                Take the first step towards shaping India's telecommunications future
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-center gap-4">
                            <Button size="lg" asChild>
                                <Link href="/contact">
                                    Apply for Membership
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/about">Learn More</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}
