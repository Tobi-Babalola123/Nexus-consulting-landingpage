"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const stats = [
  { value: "2,500+", label: "Clients worldwide" },
  { value: "$4.8B", label: "Value delivered" },
  { value: "15,000+", label: "Projects completed" },
  { value: "45+", label: "Countries" },
  { value: "97%", label: "Client retention" },
]

export function TrustSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-slate-500/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Trusted by industry leaders worldwide
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400">{stat.value}</div>
              <div className="mt-2 text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-60" : "opacity-0"
          }`}
        >
          {["Microsoft", "Google", "Amazon", "IBM", "Salesforce"].map((company) => (
            <div key={company} className="text-gray-500 text-lg font-semibold">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
