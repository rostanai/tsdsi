"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Moon, Sun, ChevronDown, Building2, Users, FileText, Globe, HelpCircle, Newspaper, Handshake, BookOpen, Award } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const megaMenuItems = {
    "About TSDSI": {
        color: "from-blue-600 to-cyan-600",
        items: [
            { name: "Overview", href: "/about", description: "Learn about TSDSI's mission and vision", icon: Building2, iconColor: "text-blue-600" },
            { name: "10th Anniversary", href: "/anniversary", description: "Celebrating a decade of excellence", icon: Award, iconColor: "text-yellow-600" },
            { name: "Governance", href: "/governance", description: "Our organizational structure", icon: Award, iconColor: "text-purple-600" },
            { name: "Governing Council", href: "/governing-council", description: "Leadership and council members", icon: Users, iconColor: "text-cyan-600" },
            { name: "Technical Leaders", href: "/technical-leaders", description: "Expert technical leadership", icon: Award, iconColor: "text-orange-600" },
            { name: "Secretariat", href: "/secretariat", description: "Administrative team and functions", icon: Users, iconColor: "text-indigo-600" },
            { name: "Hall of Fame", href: "/hall-of-fame", description: "Award recipients and recognition", icon: Award, iconColor: "text-yellow-600" },
            { name: "Partners", href: "/partners", description: "Our member organizations", icon: Handshake, iconColor: "text-green-600" },
            { name: "Careers", href: "/careers", description: "Join our team", icon: Users, iconColor: "text-pink-600" },
            { name: "Contact Us", href: "/contact", description: "Get in touch with us", icon: Globe, iconColor: "text-blue-600" },
        ]
    },
    "Technical Activities": {
        color: "from-purple-600 to-pink-600",
        items: [
            { name: "Study Groups", href: "/study-groups/networks", description: "Networks & Services standards", icon: BookOpen, iconColor: "text-purple-600" },
            { name: "White Papers", href: "/white-papers", description: "Technical publications", icon: FileText, iconColor: "text-orange-600" },
            { name: "Standards", href: "/standards", description: "Published standards catalog", icon: Award, iconColor: "text-cyan-600" },
        ]
    },
    "Membership": {
        color: "from-orange-600 to-red-600",
        items: [
            { name: "Join Us", href: "/membership", description: "Become a member", icon: Users, iconColor: "text-orange-600" },
            { name: "FAQ", href: "/faq", description: "Frequently asked questions", icon: HelpCircle, iconColor: "text-blue-600" },
        ]
    },
    "News & Events": {
        color: "from-green-600 to-teal-600",
        items: [
            { name: "Latest News", href: "/news", description: "Recent updates and announcements", icon: Newspaper, iconColor: "text-green-600" },
            { name: "Events Calendar", href: "/events", description: "Upcoming and past events", icon: Award, iconColor: "text-purple-600" },
            { name: "Gallery", href: "/gallery", description: "Event photos and media", icon: Award, iconColor: "text-orange-600" },
            { name: "Collaborations", href: "/collaborations", description: "Partnership activities", icon: Handshake, iconColor: "text-cyan-600" },
        ]
    },
}

export function Header() {
    const pathname = usePathname()
    const { theme, setTheme } = useTheme()
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const [activeMenu, setActiveMenu] = React.useState<string | null>(null)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "bg-background/95 backdrop-blur-lg border-b shadow-lg"
                    : "bg-transparent"
            )}
        >
            <nav className="container mx-auto flex items-center justify-between p-4 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3 group">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[hsl(217,91%,60%)] via-[hsl(270,95%,75%)] to-[hsl(24,95%,53%)] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
                        <span className="text-white font-bold text-xl">T</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-lg leading-tight">TSDSI</span>
                        <span className="text-xs text-muted-foreground hidden sm:block">
                            Standards Development Society
                        </span>
                    </div>
                </Link>

                {/* Desktop Mega Menu */}
                <div className="hidden lg:flex lg:gap-x-1">
                    {Object.entries(megaMenuItems).map(([menuName, menuData]) => (
                        <div
                            key={menuName}
                            className="relative group"
                            onMouseEnter={() => setActiveMenu(menuName)}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <Link
                                href={menuData.items[0].href}
                                className={cn(
                                    "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-primary rounded-md",
                                    activeMenu === menuName ? "text-primary bg-primary/10" : "text-muted-foreground"
                                )}
                            >
                                {menuName}
                                <ChevronDown className={cn(
                                    "h-4 w-4 transition-transform",
                                    activeMenu === menuName && "rotate-180"
                                )} />
                            </Link>

                            {/* Mega Menu Dropdown */}
                            <div className={cn(
                                "absolute left-0 top-full mt-2 w-80 rounded-lg border-2 border-primary/20 bg-background/98 backdrop-blur-xl shadow-2xl transition-all duration-200",
                                activeMenu === menuName
                                    ? "opacity-100 visible translate-y-0"
                                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                            )}>
                                {/* Category Header with Gradient */}
                                <div className={`p-3 bg-gradient-to-r ${menuData.color} rounded-t-lg`}>
                                    <h3 className="font-bold text-white text-sm">{menuName}</h3>
                                </div>
                                <div className="p-4 space-y-2 bg-gradient-to-b from-background to-muted/30 rounded-b-lg">
                                    {menuData.items.map((item) => {
                                        const Icon = item.icon
                                        return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="flex items-start gap-3 p-3 rounded-md hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all group/item border border-transparent hover:border-primary/20"
                                            >
                                                <Icon className={`h-5 w-5 mt-0.5 ${item.iconColor} group-hover/item:scale-110 transition-transform`} />
                                                <div className="flex-1">
                                                    <div className="font-semibold text-sm group-hover/item:text-primary transition-colors">
                                                        {item.name}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground mt-1 group-hover/item:text-foreground/70">
                                                        {item.description}
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Theme Toggle & Mobile Menu */}
                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="hidden sm:flex hover:bg-primary/10"
                    >
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>

                    {/* Mobile Menu */}
                    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <nav className="flex flex-col gap-6 mt-8">
                                {Object.entries(megaMenuItems).map(([menuName, menuData]) => (
                                    <div key={menuName}>
                                        <h3 className="font-bold text-sm text-primary mb-2 px-4">{menuName}</h3>
                                        <div className="space-y-1">
                                            {menuData.items.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className={cn(
                                                        "block text-sm font-medium transition-colors hover:text-primary px-4 py-2 rounded-md",
                                                        pathname === item.href
                                                            ? "text-primary bg-primary/10"
                                                            : "text-muted-foreground"
                                                    )}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <div className="mt-4 px-4">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                        className="w-full"
                                    >
                                        <Sun className="h-4 w-4 mr-2 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                        <span className="ml-6">Toggle theme</span>
                                    </Button>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    )
}
