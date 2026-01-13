"use client"

import Link from "next/link"
import { ArrowRight, Users, FileText, Globe, Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

const stats = [
  { label: "Member Organizations", value: "100+", icon: Users },
  { label: "Published Standards", value: "50+", icon: FileText },
  { label: "Global Partnerships", value: "15+", icon: Globe },
  { label: "Years of Excellence", value: "10+", icon: Shield },
]

const features = [
  {
    title: "5G Innovation",
    description: "Leading India's 5G standardization with 5Gi technology accepted by ITU-R and integrated into 3GPP specifications",
    icon: Globe,
    color: "text-blue-600",
  },
  {
    title: "6G Development",
    description: "Pioneering 6G research and standardization through Bharat 6G Alliance and international collaboration",
    icon: Shield,
    color: "text-purple-600",
  },
  {
    title: "Global Standards",
    description: "Active participation in 3GPP, ITU, ETSI, and oneM2M for global telecommunications standardization",
    icon: FileText,
    color: "text-orange-600",
  },
  {
    title: "Network Security",
    description: "Developing comprehensive security standards for next-generation telecommunications networks",
    icon: Shield,
    color: "text-cyan-600",
  },
]

const initiatives = [
  {
    title: "Low Mobility Large Cell (LMLC)",
    description: "5Gi technology for enhanced coverage in rural and remote areas, accepted by ITU-R",
    badge: "5G Innovation",
  },
  {
    title: "Bharat 6G Mission",
    description: "Contributing to India's 6G vision with research on AI-native networks and THz communications",
    badge: "6G Research",
  },
  {
    title: "Indigenous IPR",
    description: "Promoting Indian intellectual property in global telecommunications standards",
    badge: "Innovation",
  },
]

const partners = [
  "3GPP", "ITU", "ETSI", "oneM2M", "TEC", "DoT", "MeitY", "GSC"
]

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col">
      {/* Hero Section with Parallax */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-32 min-h-[90vh] flex items-center z-0">
        {/* Light Background Image */}
        <div
          className="absolute inset-0 opacity-20 z-0 grayscale"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <img
            src="/tsdsi_hero_network_1768295750786.png"
            alt="5G/6G Network"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Floating Gradient Orbs - Lighter */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-blue-50/60 to-white/70 z-0" />

        <div className="container relative mx-auto px-4 lg:px-8 z-10">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 animate-fade-in bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-2xl text-sm px-4 py-2">
              <Sparkles className="mr-2 h-4 w-4 inline" />
              India's Premier Telecom Standards Organization
            </Badge>
            <h1
              className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-slate-900"
              style={{
                animation: "slide-in-right 0.8s ease-out",
                opacity: scrollY > 100 ? 0.5 : 1,
                transform: `translateY(${scrollY * 0.1}px)`
              }}
            >
              Shaping the Future of{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Telecommunications
              </span>
            </h1>
            <p
              className="mb-8 text-lg sm:text-xl text-slate-700"
              style={{
                animation: "slide-in-left 0.8s ease-out 0.2s both",
                transform: `translateY(${scrollY * 0.05}px)`
              }}
            >
              TSDSI develops India-specific telecommunications and ICT standards while contributing
              to global standardization efforts including 5G, 6G, and beyond.
            </p>
            <div
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
              style={{ animation: "fade-in 0.8s ease-out 0.4s both" }}
            >
              <Button size="lg" asChild className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white border-0 hover:scale-110 transition-all shadow-2xl hover:shadow-blue-500/50">
                <Link href="/about">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 hover:scale-110 transition-all shadow-xl hover:shadow-cyan-400/50 backdrop-blur-sm bg-white/10">
                <Link href="/membership">
                  <Users className="mr-2 h-5 w-5" />
                  Become a Member
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-muted/50 py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-3 rounded-full bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Our Core Focus Areas</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Leading India's contribution to global telecommunications standardization
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon
              const gradients = [
                "from-blue-500/10 to-blue-600/5",
                "from-purple-500/10 to-purple-600/5",
                "from-orange-500/10 to-orange-600/5",
                "from-cyan-500/10 to-cyan-600/5",
              ]
              const iconBgs = [
                "bg-gradient-to-br from-blue-500 to-blue-600",
                "bg-gradient-to-br from-purple-500 to-purple-600",
                "bg-gradient-to-br from-orange-500 to-orange-600",
                "bg-gradient-to-br from-cyan-500 to-cyan-600",
              ]
              return (
                <Card
                  key={feature.title}
                  className={`group transition-all hover:shadow-xl hover:scale-105 border-2 bg-gradient-to-br ${gradients[index]} animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className={`mb-4 inline-flex rounded-xl ${iconBgs[index]} p-4 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Key Initiatives</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Groundbreaking contributions to global telecommunications standards
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {initiatives.map((initiative, index) => {
              const images = [
                "/5g_technology_1768295801623.png",
                "/6g_future_1768295821851.png",
                "/standards_development_1768295769829.png",
              ]
              const gradients = [
                "from-blue-500/20 to-purple-500/10",
                "from-purple-500/20 to-orange-500/10",
                "from-orange-500/20 to-pink-500/10",
              ]
              return (
                <Card
                  key={initiative.title}
                  className={`overflow-hidden transition-all hover:shadow-2xl hover:scale-105 border-2 bg-gradient-to-br ${gradients[index]} animate-slide-in-right`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={images[index]}
                      alt={initiative.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <Badge className="mb-2 w-fit bg-gradient-to-r from-primary to-secondary text-white border-0" variant="secondary">
                      {initiative.badge}
                    </Badge>
                    <CardTitle className="text-xl">{initiative.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{initiative.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-30">
          <img
            src="/global_partnerships_colorful_1768298327248.png"
            alt="Global Partnerships"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-blue-900/70 to-slate-900/80" />

        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-0 shadow-lg">
              <Globe className="mr-2 h-4 w-4 inline" />
              International Collaboration
            </Badge>
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-white">Global Partnerships</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-200">
              Collaborating with leading international standards organizations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => {
              const colors = [
                "from-blue-600 to-cyan-600",
                "from-purple-600 to-pink-600",
                "from-orange-600 to-red-600",
                "from-green-600 to-teal-600",
                "from-indigo-600 to-blue-600",
                "from-pink-600 to-purple-600",
                "from-yellow-600 to-orange-600",
                "from-cyan-600 to-blue-600",
              ]
              return (
                <div
                  key={partner}
                  className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm p-6 transition-all hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors[index]} opacity-0 group-hover:opacity-20 transition-opacity`} />
                  <div className="relative flex h-full items-center justify-center">
                    <span className="text-2xl font-bold text-white group-hover:scale-110 transition-transform">{partner}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[hsl(217,91%,60%)] via-[hsl(270,95%,75%)] to-[hsl(24,95%,53%)] py-20 text-white">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Join the Standards Revolution</h2>
          <p className="mb-8 text-lg opacity-90">
            Become a member and contribute to shaping India's telecommunications future
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" asChild className="group">
              <Link href="/membership">
                Explore Membership
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
