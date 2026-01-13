"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Moon, Sun, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const megaMenuItems = {
    "About TSDSI": {
        items: [
            { name: "Overview", href: "/about", description: "Learn about TSDSI's mission and vision" },
            { name: "Governance", href: "/governance", description: "Our organizational structure" },
            { name: "Partners", href: "/partners", description: "Our member organizations" },
            { name: "Contact Us", href: "/contact", description: "Get in touch with us" },
        ]
    },
    "Technical Activities": {
        items: [
            { name: "Study Groups", href: "/study-groups/networks", description: "Networks & Services standards" },
            { name: "White Papers", href: "/white-papers", description: "Technical publications" },
            { name: "Standards", href: "/standards", description: "Published standards catalog" },
        ]
    },
    "Membership": {
        items: [
            { name: "Join Us", href: "/membership", description: "Become a member" },
            { name: "FAQ", href: "/faq", description: "Frequently asked questions" },
        ]
    },
    "News & Events": {
        items: [
            { name: "Latest News", href: "/news", description: "Recent updates and announcements" },
            { name: "Collaborations", href: "/collaborations", description: "Partnership activities" },
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
                            <button
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
                            </button>

                            {/* Mega Menu Dropdown */}
                            <div className={cn(
                                "absolute left-0 top-full mt-2 w-80 rounded-lg border-2 border-primary/20 bg-background/98 backdrop-blur-xl shadow-2xl transition-all duration-200",
                                activeMenu === menuName
                                    ? "opacity-100 visible translate-y-0"
                                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                            )}>
                                <div className="p-4 space-y-2 bg-gradient-to-b from-background to-muted/30 rounded-lg">
                                    {menuData.items.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="block p-3 rounded-md hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all group/item border border-transparent hover:border-primary/20"
                                        >
                                            <div className="font-semibold text-sm group-hover/item:text-primary transition-colors">
                                                {item.name}
                                            </div>
                                            <div className="text-xs text-muted-foreground mt-1 group-hover/item:text-foreground/70">
                                                {item.description}
                                            </div>
                                        </Link>
                                    ))}
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
