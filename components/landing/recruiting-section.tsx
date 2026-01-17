"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { RefreshCw, Cpu, Cloud, Shield, LineChart, Workflow, Settings } from "lucide-react"

const features = [
  {
    icon: RefreshCw,
    title: "Digital Transformation",
    description: "Modernize operations and customer experiences with cutting-edge technology.",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description: "Implement intelligent automation to drive efficiency and reduce costs.",
  },
  {
    icon: Cloud,
    title: "Cloud Strategy",
    description: "Migrate and optimize your infrastructure for scalability and resilience.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your assets with comprehensive security frameworks.",
  },
  {
    icon: LineChart,
    title: "Data & Analytics",
    description: "Turn data into actionable insights with advanced analytics platforms.",
  },
  { icon: Workflow, title: "Process Optimization", description: "Streamline workflows and eliminate inefficiencies." },
  {
    icon: Settings,
    title: "Technology Integration",
    description: "Connect systems and unify your technology ecosystem seamlessly.",
  },
]

export function RecruitingSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Technology & digital excellence</h2>
          <p className="mt-4 text-lg text-slate-300">
            Accelerate your digital journey with proven methodologies and deep technical expertise.
          </p>
        </div>

        <div ref={contentRef} className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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
                    <p className="mt-1 text-slate-300 text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img src="/digital-transformation-technology-dashboard-modern.jpg" alt="Technology Platform" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
