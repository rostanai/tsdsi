"use client"

import { Calendar, Clock, MapPin, Users, Video, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const upcomingEvents = [
    {
        title: "Standards Awareness Workshop",
        date: "February 15, 2026",
        time: "10:00 AM - 4:00 PM IST",
        location: "Virtual",
        type: "Workshop",
        color: "from-blue-600 to-cyan-600",
        attendees: "150+",
    },
    {
        title: "Expert Talk: 6G Technologies",
        date: "February 22, 2026",
        time: "3:00 PM - 5:00 PM IST",
        location: "Hybrid",
        type: "Webinar",
        color: "from-purple-600 to-pink-600",
        attendees: "200+",
    },
    {
        title: "TSDSI-ITU Collaboration Meet",
        date: "March 5, 2026",
        time: "11:00 AM - 1:00 PM IST",
        location: "New Delhi",
        type: "Meeting",
        color: "from-orange-600 to-red-600",
        attendees: "50+",
    },
    {
        title: "Governing Council Meeting",
        date: "March 12, 2026",
        time: "2:00 PM - 5:00 PM IST",
        location: "Virtual",
        type: "Council",
        color: "from-green-600 to-teal-600",
        attendees: "30+",
    },
]

const pastEvents = [
    {
        title: "5Gi Standardization Success",
        date: "December 2025",
        description: "Celebrated ITU-R acceptance of 5Gi technology",
    },
    {
        title: "Annual General Meeting 2025",
        date: "November 2025",
        description: "Strategic planning and member engagement",
    },
    {
        title: "DoT-TSDSI Micro Workshop Series",
        date: "October 2025",
        description: "Technical workshops on emerging standards",
    },
]

export default function EventsCalendarPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 py-20">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/80" />

                <div className="container relative mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 shadow-lg">
                            <Calendar className="mr-2 h-4 w-4 inline" />
                            Events & Activities
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white">
                            Events{" "}
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                                Calendar
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-200">
                            Join us for workshops, webinars, and collaborative events
                        </p>
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Upcoming Events</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Mark your calendar for these exciting events
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {upcomingEvents.map((event, index) => (
                            <Card
                                key={event.title}
                                className="group transition-all hover:shadow-2xl hover:scale-105 border-2 overflow-hidden"
                            >
                                <div className={`h-2 w-full bg-gradient-to-r ${event.color}`} />
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <Badge className={`bg-gradient-to-r ${event.color} text-white border-0`}>
                                            {event.type}
                                        </Badge>
                                        <Badge variant="outline">
                                            <Users className="mr-1 h-3 w-3" />
                                            {event.attendees}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-2xl mb-3">{event.title}</CardTitle>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-4 w-4 text-primary" />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4 text-primary" />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="h-4 w-4 text-primary" />
                                            <span>{event.location}</span>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <Button className={`w-full bg-gradient-to-r ${event.color} text-white hover:opacity-90`}>
                                        Register Now
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Past Events */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Past Events</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Recent activities and achievements
                        </p>
                    </div>
                    <div className="mx-auto max-w-4xl space-y-4">
                        {pastEvents.map((event, index) => (
                            <Card key={event.title} className="border-2 hover:shadow-lg transition-all">
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                                            <Badge variant="secondary" className="mb-3">
                                                <Calendar className="mr-1 h-3 w-3" />
                                                {event.date}
                                            </Badge>
                                            <CardDescription className="text-base">
                                                {event.description}
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
