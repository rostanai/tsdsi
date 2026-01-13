import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
    about: [
        { name: "About TSDSI", href: "/about" },
        { name: "Mission & Vision", href: "/about#mission" },
        { name: "Leadership", href: "/about#leadership" },
        { name: "Governance", href: "/about#governance" },
    ],
    standards: [
        { name: "Standards", href: "/standards" },
        { name: "Working Groups", href: "/standards#working-groups" },
        { name: "5G/6G Initiatives", href: "/standards#5g-6g" },
        { name: "Publications", href: "/standards#publications" },
    ],
    membership: [
        { name: "Join TSDSI", href: "/membership" },
        { name: "Member Benefits", href: "/membership#benefits" },
        { name: "Member Directory", href: "/membership#directory" },
        { name: "Collaborations", href: "/collaborations" },
    ],
    resources: [
        { name: "News & Events", href: "/news" },
        { name: "Contact Us", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
    ],
}

export function Footer() {
    return (
        <footer className="border-t bg-muted/50">
            <div className="container mx-auto px-4 py-12 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center space-x-3 mb-4">
                            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[hsl(217,91%,60%)] via-[hsl(270,95%,75%)] to-[hsl(24,95%,53%)] flex items-center justify-center">
                                <span className="text-white font-bold text-2xl">T</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl">TSDSI</span>
                                <span className="text-sm text-muted-foreground">
                                    Telecommunications Standards Development Society, India
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm text-muted-foreground mb-6 max-w-md">
                            India's premier organization for developing telecommunications and ICT standards,
                            contributing to global standardization efforts and fostering innovation.
                        </p>

                        {/* Newsletter */}
                        <div className="space-y-2">
                            <h4 className="text-sm font-semibold">Subscribe to our newsletter</h4>
                            <div className="flex gap-2">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="max-w-xs"
                                />
                                <Button>Subscribe</Button>
                            </div>
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div>
                        <h3 className="font-semibold mb-4">About</h3>
                        <ul className="space-y-3">
                            {footerLinks.about.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Standards</h3>
                        <ul className="space-y-3">
                            {footerLinks.standards.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Resources</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Separator className="my-8" />

                {/* Bottom Section */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>New Delhi, India</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <a href="mailto:info@tsdsi.in" className="hover:text-primary">
                                info@tsdsi.in
                            </a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        <Button variant="ghost" size="icon" asChild>
                            <a href="https://twitter.com/tsdsi" target="_blank" rel="noopener noreferrer">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a href="https://linkedin.com/company/tsdsi" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a href="https://facebook.com/tsdsi" target="_blank" rel="noopener noreferrer">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </a>
                        </Button>
                    </div>
                </div>

                <Separator className="my-6" />

                <div className="text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} TSDSI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
