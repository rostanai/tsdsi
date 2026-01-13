import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TSDSI - Telecommunications Standards Development Society, India",
    template: "%s | TSDSI",
  },
  description:
    "TSDSI is India's premier organization for developing telecommunications and ICT standards, contributing to global standardization efforts including 5G, 6G, and beyond.",
  keywords: [
    "TSDSI",
    "telecommunications",
    "standards",
    "5G",
    "6G",
    "India",
    "ICT",
    "3GPP",
    "ITU",
  ],
  authors: [{ name: "TSDSI" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://tsdsi.in",
    title: "TSDSI - Telecommunications Standards Development Society, India",
    description:
      "India's premier organization for developing telecommunications and ICT standards",
    siteName: "TSDSI",
  },
  twitter: {
    card: "summary_large_image",
    title: "TSDSI - Telecommunications Standards Development Society, India",
    description:
      "India's premier organization for developing telecommunications and ICT standards",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

