"use client"

import { Image as ImageIcon, Award, Users, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const galleryCategories = [
    {
        title: "Workshops & Seminars",
        count: "50+",
        description: "Technical workshops and awareness sessions",
        color: "from-blue-600 to-cyan-600",
    },
    {
        title: "Council Meetings",
        count: "30+",
        description: "Governing council and committee meetings",
        color: "from-purple-600 to-pink-600",
    },
    {
        title: "Award Ceremonies",
        count: "15+",
        description: "OTC awards and recognition events",
        color: "from-orange-600 to-red-600",
    },
    {
        title: "Collaborations",
        count: "25+",
        description: "Partnership events and MoU signings",
        color: "from-green-600 to-teal-600",
    },
]

const recentPhotos = [
    {
        title: "5Gi ITU-R Acceptance Celebration",
        date: "December 2025",
        category: "Milestone",
        color: "from-blue-600 to-cyan-600",
    },
    {
        title: "Annual Standards Workshop 2025",
        date: "November 2025",
        category: "Workshop",
        color: "from-purple-600 to-pink-600",
    },
    {
        title: "India-EU Partnership Summit",
        date: "October 2025",
        category: "Collaboration",
        color: "from-orange-600 to-red-600",
    },
    {
        title: "OTC Award Ceremony 2025",
        date: "September 2025",
        category: "Awards",
        color: "from-green-600 to-teal-600",
    },
    {
        title: "6G Vision Workshop",
        date: "August 2025",
        category: "Technical",
        color: "from-indigo-600 to-blue-600",
    },
    {
        title: "Governing Council Meet Q3",
        date: "July 2025",
        category: "Governance",
        color: "from-pink-600 to-purple-600",
    },
]

export default function GalleryPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 py-20">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/80" />

                <div className="container relative mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0 shadow-lg">
                            <ImageIcon className="mr-2 h-4 w-4 inline" />
                            Photo Gallery
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white">
                            Event{" "}
                            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Gallery
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-200">
                            Capturing moments from our events, workshops, and achievements
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Categories */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Photo Categories</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Browse photos by event type
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {galleryCategories.map((category, index) => (
                            <Card
                                key={category.title}
                                className="group transition-all hover:shadow-2xl hover:scale-105 border-2 bg-gradient-to-br from-background to-muted/30 overflow-hidden cursor-pointer"
                            >
                                <div className={`h-2 w-full bg-gradient-to-r ${category.color}`} />
                                <CardHeader>
                                    <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${category.color} p-4 shadow-lg`}>
                                        <ImageIcon className="h-8 w-8 text-white" />
                                    </div>
                                    <div className="mb-2">
                                        <span className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                            {category.count}
                                        </span>
                                    </div>
                                    <CardTitle className="text-xl">{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">{category.description}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Photos */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Recent Events</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Latest photos from TSDSI activities
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {recentPhotos.map((photo, index) => (
                            <Card
                                key={photo.title}
                                className="group transition-all hover:shadow-2xl hover:scale-105 border-2 overflow-hidden cursor-pointer"
                            >
                                <div className={`h-40 bg-gradient-to-br ${photo.color} flex items-center justify-center`}>
                                    <ImageIcon className="h-16 w-16 text-white/50" />
                                </div>
                                <CardHeader>
                                    <Badge className={`w-fit mb-2 bg-gradient-to-r ${photo.color} text-white border-0`}>
                                        {photo.category}
                                    </Badge>
                                    <CardTitle className="text-lg">{photo.title}</CardTitle>
                                    <CardDescription className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        {photo.date}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
