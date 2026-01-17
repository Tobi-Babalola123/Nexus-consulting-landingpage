import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nexus Consulting - Strategic Business Solutions",
  description:
    "Transform your business with world-class strategy consulting, digital transformation, and operational excellence. Partner with Nexus for measurable results.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#1e3a5f",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
