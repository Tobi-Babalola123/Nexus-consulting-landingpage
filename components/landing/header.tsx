"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Nexus</span>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {["Services", "Industries", "Insights", "About"].map((item) => (
              <button
                key={item}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-slate-800 transition-colors"
              >
                {item}
                <ChevronDown className="w-4 h-4" />
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" className="text-gray-700 hover:text-slate-800">
              Client Portal
            </Button>
            <Button className="bg-slate-800 hover:bg-slate-900 text-white rounded-full px-6">Get a Consultation</Button>
          </div>

          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {["Services", "Industries", "Insights", "About"].map((item) => (
              <button key={item} className="flex items-center justify-between w-full py-2 text-gray-700">
                {item}
                <ChevronDown className="w-4 h-4" />
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Button variant="outline" className="w-full bg-transparent">
                Client Portal
              </Button>
              <Button className="w-full bg-slate-800 hover:bg-slate-900">Get a Consultation</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
