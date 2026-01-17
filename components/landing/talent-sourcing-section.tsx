"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { TrendingUp, Target, Lightbulb, Users, BarChart3 } from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Business Strategy",
    description: "Develop winning strategies that align your organization and drive sustainable competitive advantage.",
  },
  {
    icon: Target,
    title: "Market Expansion",
    description: "Identify and capture new market opportunities with data-driven go-to-market strategies.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Consulting",
    description: "Transform your business model and embrace innovation to stay ahead of disruption.",
  },
  {
    icon: Users,
    title: "Organizational Design",
    description: "Build high-performing teams and optimize your organizational structure for agility.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Leverage advanced analytics to uncover insights and drive informed decision-making.",
  },
]

export function TalentSourcingSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Comprehensive strategic consulting
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We help organizations navigate complexity and unlock their full potential with tailored solutions.
          </p>
        </div>

        <div ref={cardsRef} className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl hover:shadow-slate-500/10 transition-all duration-500 hover:-translate-y-1 ${
                cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-slate-800 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
