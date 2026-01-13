import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const newsItems = [
    {
        title: "TSDSI Contributes to 6G Vision Framework",
        date: "January 10, 2026",
        category: "6G Development",
        excerpt: "TSDSI submits comprehensive contributions to the IMT-2030 framework, outlining India's vision for 6G technologies.",
        image: "/placeholder-news.jpg",
    },
    {
        title: "New Working Group on AI/ML in Telecommunications",
        date: "December 15, 2025",
        category: "Standards",
        excerpt: "TSDSI establishes new working group focused on artificial intelligence and machine learning integration in telecom networks.",
        image: "/placeholder-news.jpg",
    },
    {
        title: "5Gi Technology Deployment Milestone",
        date: "November 20, 2025",
        category: "5G",
        excerpt: "Major Indian operators begin commercial deployment of 5Gi technology in rural areas, enhancing connectivity.",
        image: "/placeholder-news.jpg",
    },
    {
        title: "TSDSI Hosts 3GPP Working Group Meeting",
        date: "October 5, 2025",
        category: "Events",
        excerpt: "Successfully hosted 3GPP RAN working group meeting in New Delhi with participation from global experts.",
        image: "/placeholder-news.jpg",
    },
]

const upcomingEvents = [
    {
        title: "TSDSI Annual General Meeting 2026",
        date: "March 15, 2026",
        location: "New Delhi, India",
        type: "Conference",
    },
    {
        title: "5G/6G Standards Workshop",
        date: "April 20, 2026",
        location: "Virtual Event",
        type: "Workshop",
    },
    {
        title: "IoT Standardization Summit",
        date: "May 10, 2026",
        location: "Bangalore, India",
        type: "Summit",
    },
]

export default function NewsPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/10 via-background to-teal-500/10 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4" variant="secondary">
                            News & Events
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Latest{" "}
                            <span className="bg-gradient-to-r from-primary to-teal-600 bg-clip-text text-transparent">
                                Updates
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground sm:text-xl">
                            Stay informed about TSDSI's latest developments, standards, and industry events.
                        </p>
                    </div>
                </div>
            </section>

            {/* Latest News */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Latest News</h2>
                        <p className="max-w-2xl text-lg text-muted-foreground">
                            Recent announcements and updates from TSDSI
                        </p>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-2">
                        {newsItems.map((item, index) => (
                            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all">
                                <div className="aspect-video w-full bg-muted" />
                                <CardHeader>
                                    <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar className="h-4 w-4" />
                                        <span>{item.date}</span>
                                        <Badge variant="secondary" className="ml-auto">
                                            {item.category}
                                        </Badge>
                                    </div>
                                    <CardTitle className="group-hover:text-primary transition-colors">
                                        {item.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="mb-4">{item.excerpt}</CardDescription>
                                    <Button variant="link" className="p-0">
                                        Read more
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Upcoming Events</h2>
                        <p className="max-w-2xl text-lg text-muted-foreground">
                            Join us at our upcoming conferences, workshops, and meetings
                        </p>
                    </div>
                    <div className="mx-auto max-w-4xl space-y-4">
                        {upcomingEvents.map((event, index) => (
                            <Card key={index} className="hover:shadow-lg transition-all">
                                <CardHeader>
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                        <div className="flex-1">
                                            <div className="mb-2 flex items-center gap-2">
                                                <Badge>{event.type}</Badge>
                                            </div>
                                            <CardTitle className="text-xl">{event.title}</CardTitle>
                                            <div className="mt-2 flex flex-col gap-2 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="h-4 w-4" />
                                                    <span>{event.date}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-4 w-4" />
                                                    <span>{event.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Button variant="outline">
                                            Learn More
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <Card className="mx-auto max-w-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-teal-500/5">
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl">Stay Updated</CardTitle>
                            <CardDescription className="text-lg">
                                Subscribe to our newsletter for the latest news and updates
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-center">
                            <Button size="lg" asChild>
                                <Link href="/contact">
                                    Subscribe to Newsletter
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}
