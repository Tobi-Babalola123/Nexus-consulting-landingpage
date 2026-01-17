"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Factory, TrendingDown, Package, Truck, ClipboardCheck, PieChart } from "lucide-react"

const features = [
  {
    icon: Factory,
    title: "Operational Excellence",
    description: "Implement lean methodologies and continuous improvement frameworks.",
  },
  {
    icon: TrendingDown,
    title: "Cost Reduction",
    description: "Identify savings opportunities without sacrificing quality or performance.",
  },
  { icon: Package, title: "Supply Chain Optimization", description: "Build resilient and efficient supply networks." },
  { icon: Truck, title: "Logistics & Distribution", description: "Optimize your logistics for speed and reliability." },
  {
    icon: ClipboardCheck,
    title: "Quality Management",
    description: "Establish robust quality systems and compliance frameworks.",
  },
  {
    icon: PieChart,
    title: "Resource Planning",
    description: "Maximize resource utilization and capacity planning.",
  },
]

export function EmployeeManagementSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Operations & supply chain consulting
          </h2>
          <p className="mt-4 text-lg text-emerald-100">
            Streamline your operations and build supply chains that deliver competitive advantage.
          </p>
        </div>

        <div ref={contentRef} className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div
            className={`transition-all duration-1000 delay-300 ${
              contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img src="/operations-management-supply-chain-dashboard-logis.jpg" alt="Operations Management" className="w-full h-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-500 ${
                  contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">{feature.title}</h3>
                    <p className="mt-1 text-emerald-100 text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
