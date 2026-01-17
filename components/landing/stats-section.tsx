"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Award, Globe2, Headphones, Building } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Ranked among top consulting firms by Forbes, Gartner, and industry analysts.",
  },
  {
    icon: Globe2,
    title: "Global Presence",
    description: "Offices in 45+ countries with local expertise and global reach.",
  },
  {
    icon: Building,
    title: "Fortune 500 Clients",
    description: "Trusted by leading enterprises across every major industry sector.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Senior partner involvement and responsive client service teams.",
  },
]

const stats = [
  { value: "500+", label: "Projects delivered" },
  { value: "98%", label: "Client satisfaction" },
  { value: "4.2x", label: "Average ROI" },
]

export function StatsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Built for enterprise success</h2>
          <p className="mt-4 text-lg text-gray-600">Proven expertise that delivers measurable business outcomes.</p>
        </div>

        {/* Stats */}
        <div
          ref={contentRef}
          className={`mt-12 flex flex-wrap justify-center gap-8 md:gap-16 transition-all duration-700 delay-200 ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-slate-700">{stat.value}</div>
              <div className="mt-2 text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`p-6 rounded-2xl bg-gray-50 hover:bg-slate-50 transition-all duration-500 ${
                contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
