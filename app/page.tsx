import Link from "next/link"
import { ArrowRight, Globe, Users, Award, TrendingUp, Network, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const stats = [
  { label: "Member Organizations", value: "100+", icon: Users },
  { label: "Standards Published", value: "50+", icon: Award },
  { label: "Global Partnerships", value: "15+", icon: Globe },
  { label: "Years of Excellence", value: "10+", icon: TrendingUp },
]

const features = [
  {
    title: "5G Innovation",
    description: "Pioneered 5Gi technology, accepted by ITU-R and integrated into global 5G standards through 3GPP.",
    icon: Zap,
    color: "text-blue-500",
  },
  {
    title: "6G Development",
    description: "Actively contributing to 6G vision, use cases, and network architecture for next-generation connectivity.",
    icon: Network,
    color: "text-teal-500",
  },
  {
    title: "Global Standards",
    description: "Organizational partner of 3GPP, ITU, ETSI, and oneM2M, shaping international telecommunications standards.",
    icon: Globe,
    color: "text-indigo-500",
  },
  {
    title: "Network Security",
    description: "Ensuring security and safety of networks and equipment through comprehensive standardization efforts.",
    icon: Shield,
    color: "text-cyan-500",
  },
]

const initiatives = [
  {
    title: "Low Mobility Large Cell (LMLC)",
    description: "Introduced LMLC concept into ITU-R, later incorporated into global 5G standards.",
    badge: "5G Standard",
  },
  {
    title: "Bharat 6G Mission",
    description: "Collaborating with Bharat 6G Alliance on beyond-5G and 6G technologies.",
    badge: "6G Initiative",
  },
  {
    title: "Indigenous IPR",
    description: "Promoting Indian Intellectual Property Rights in global telecommunications standards.",
    badge: "Innovation",
  },
]

const partners = [
  "3GPP", "ITU", "ETSI", "oneM2M", "TEC", "DoT", "MeitY", "GSC"
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 sm:py-32">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/tsdsi_hero_network_1768295750786.png"
            alt="5G/6G Network"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 animate-fade-in bg-gradient-to-r from-primary to-secondary text-white border-0" variant="secondary">
              India's Premier Telecom Standards Organization
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl animate-slide-in-right">
              Shaping the Future of{" "}
              <span className="bg-gradient-to-r from-[hsl(217,91%,60%)] via-[hsl(270,95%,75%)] to-[hsl(24,95%,53%)] bg-clip-text text-transparent">
                Telecommunications
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground sm:text-xl animate-slide-in-left">
              TSDSI develops India-specific telecommunications and ICT standards while contributing
              to global standardization efforts including 5G, 6G, and beyond.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in">
              <Button size="lg" asChild className="group bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Link href="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-2 border-primary hover:bg-primary/10">
                <Link href="/membership">Become a Member</Link>
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
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Global Partnerships</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Collaborating with leading international standards organizations
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {partners.map((partner, index) => (
              <div
                key={partner}
                className="flex h-24 w-32 items-center justify-center rounded-lg border bg-card p-4 transition-all hover:shadow-md animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-xl font-bold text-muted-foreground">{partner}</span>
              </div>
            ))}
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
