import { HelpCircle, ChevronDown } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqCategories = [
    {
        category: "General",
        color: "from-blue-500 to-blue-600",
        questions: [
            {
                q: "What is TSDSI?",
                a: "TSDSI (Telecommunications Standards Development Society, India) is India's premier standards development organization for telecommunications and ICT. Established in 2014, TSDSI develops India-specific standards while contributing to global standardization efforts.",
            },
            {
                q: "Who can become a member of TSDSI?",
                a: "TSDSI membership is open to telecom operators, equipment manufacturers, technology companies, academic institutions, research organizations, and government bodies. We offer three membership categories: Promoter, Ordinary, and Associate members.",
            },
            {
                q: "How does TSDSI contribute to global standards?",
                a: "TSDSI actively participates in international SDOs like 3GPP, ITU, ETSI, and oneM2M. We contribute India-specific requirements, participate in working groups, and transpose international standards for Indian context.",
            },
        ],
    },
    {
        category: "Membership",
        color: "from-purple-500 to-purple-600",
        questions: [
            {
                q: "What are the benefits of TSDSI membership?",
                a: "Members can participate in standards development, access published standards, join working groups, influence technical direction, network with industry leaders, and contribute to India's telecommunications ecosystem.",
            },
            {
                q: "How do I apply for membership?",
                a: "Visit our Membership page, select your membership category, fill out the application form, and submit required documents. Our secretariat will review your application and guide you through the process.",
            },
            {
                q: "What is the difference between membership categories?",
                a: "Promoter members have voting rights and can hold leadership positions. Ordinary members participate in technical work. Associate members (SMEs, startups, academia) have reduced fees with full technical participation rights.",
            },
        ],
    },
    {
        category: "Technical Activities",
        color: "from-orange-500 to-orange-600",
        questions: [
            {
                q: "What are Study Groups and Working Groups?",
                a: "Study Groups focus on broad technical areas (Networks, Services & Solutions). Working Groups within Study Groups address specific topics like Security, Application Layer, and Services Architecture.",
            },
            {
                q: "How can I participate in technical work?",
                a: "Members can join Study Groups and Working Groups based on their expertise. Participation includes attending meetings, contributing to specifications, reviewing documents, and proposing new work items.",
            },
            {
                q: "What is the standards development process?",
                a: "The process includes: 1) Work item proposal, 2) Technical development in working groups, 3) Review and consensus building, 4) Public consultation, 5) Approval by Governing Council, 6) Publication as TSDSI standard.",
            },
        ],
    },
    {
        category: "Standards & Publications",
        color: "from-cyan-500 to-cyan-600",
        questions: [
            {
                q: "How do I access TSDSI standards?",
                a: "Published standards are available to members through the member portal. Some standards are publicly accessible. Visit our Standards & Reports section for the complete catalog.",
            },
            {
                q: "What are transposed standards?",
                a: "Transposed standards are international standards (from 3GPP, oneM2M, etc.) adopted by TSDSI with India-specific modifications or annotations for local implementation.",
            },
            {
                q: "How can I download white papers?",
                a: "White papers are freely available on our website. Visit the White Papers section to browse and download technical papers on topics like 6G, Quantum Communication, Smart Cities, and more.",
            },
        ],
    },
    {
        category: "Events & Collaboration",
        color: "from-green-500 to-green-600",
        questions: [
            {
                q: "Does TSDSI organize events and workshops?",
                a: "Yes, TSDSI regularly organizes standards awareness workshops, expert talk webinars, technical seminars, and collaborative events with DoT, ITU, C-DOT, and international partners.",
            },
            {
                q: "How can I participate in TSDSI events?",
                a: "Check our Events Calendar for upcoming events. Members receive priority registration. Some events are open to the public. Follow our news section for announcements.",
            },
            {
                q: "Does TSDSI collaborate with international organizations?",
                a: "Yes, TSDSI has partnerships with 3GPP, ITU, ETSI, oneM2M, and other global SDOs. We also collaborate on India-EU partnership projects and regional initiatives.",
            },
        ],
    },
]

export default function FAQPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white border-0">
                            Help Center
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Frequently Asked{" "}
                            <span className="bg-gradient-to-r from-[hsl(217,91%,60%)] via-[hsl(270,95%,75%)] to-[hsl(24,95%,53%)] bg-clip-text text-transparent">
                                Questions
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground sm:text-xl">
                            Find answers to common questions about TSDSI, membership, standards, and technical activities
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Categories */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="space-y-12">
                        {faqCategories.map((category, catIndex) => (
                            <div key={category.category}>
                                <div className="mb-6 flex items-center gap-3">
                                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                                        <HelpCircle className="h-6 w-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold">{category.category}</h2>
                                </div>
                                <Card className="border-2">
                                    <CardContent className="p-6">
                                        <Accordion type="single" collapsible className="w-full">
                                            {category.questions.map((faq, index) => (
                                                <AccordionItem key={index} value={`item-${catIndex}-${index}`}>
                                                    <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                                                        {faq.q}
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                                                        {faq.a}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Still Have Questions */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <Card className="mx-auto max-w-3xl border-2 bg-gradient-to-br from-primary/10 to-secondary/10">
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl">Still Have Questions?</CardTitle>
                            <CardDescription className="text-lg">
                                Can't find what you're looking for? Get in touch with our team
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-secondary px-8 py-3 text-white font-semibold hover:opacity-90 transition-opacity"
                            >
                                Contact Us
                            </a>
                            <a
                                href="mailto:info@tsdsi.in"
                                className="inline-flex items-center justify-center rounded-md border-2 border-primary px-8 py-3 font-semibold hover:bg-primary/10 transition-colors"
                            >
                                Email Us
                            </a>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}
