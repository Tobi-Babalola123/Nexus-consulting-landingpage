"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Sparkles, Brain, MessageSquare } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Predictive Analytics",
    description:
      "Leverage AI to forecast trends, identify opportunities, and anticipate market shifts before they happen.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Brain,
    title: "Intelligent Automation",
    description:
      "Deploy AI-driven automation to streamline processes, reduce errors, and free your teams for strategic work.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: MessageSquare,
    title: "Decision Intelligence",
    description:
      "Empower leaders with AI-powered insights and recommendations for faster, more confident decision-making.",
    gradient: "from-violet-500 to-purple-500",
  },
]

export function AISection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-indigo-800 via-violet-800 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/abstract-geometric-pattern-subtle.jpg')] opacity-5" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Consulting
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Harness the power of AI</h2>
          <p className="mt-4 text-lg text-purple-200">
            Stay ahead of the competition with cutting-edge AI solutions tailored to your business challenges.
          </p>
        </div>

        <div ref={cardsRef} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/20 transition-all duration-500 ${
                cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-purple-200">{feature.description}</p>

              <div
                className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.gradient} rounded-full opacity-0 blur-3xl group-hover:opacity-30 transition-opacity duration-500`}
              />
            </div>
          ))}
        </div>

        <div
          className={`mt-16 transition-all duration-1000 delay-500 ${
            cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
            <img src="/ai-analytics-dashboard-machine-learning-insights-b.jpg" alt="AI Analytics Platform" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
