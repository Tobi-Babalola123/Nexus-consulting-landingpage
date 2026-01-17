"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Building2, Briefcase, DollarSign, CheckCircle } from "lucide-react"

const features = [
  {
    icon: DollarSign,
    title: "Financial Strategy",
    description: "Optimize capital structure, improve cash flow, and maximize shareholder value.",
    items: ["M&A advisory", "Valuation services", "Capital allocation"],
  },
  {
    icon: Building2,
    title: "Risk Management",
    description: "Identify, assess, and mitigate enterprise risks with comprehensive frameworks.",
    items: ["Risk assessment", "Compliance programs", "Internal controls"],
  },
  {
    icon: Briefcase,
    title: "Corporate Finance",
    description: "Navigate complex financial decisions with confidence and precision.",
    items: ["Due diligence", "Financial modeling", "Investment analysis"],
  },
]

export function TimePayrollSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Financial advisory & risk management
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Make informed financial decisions and protect your organization from emerging risks.
          </p>
        </div>

        <div ref={cardsRef} className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-slate-700" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
              <ul className="mt-6 space-y-3">
                {feature.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-slate-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
