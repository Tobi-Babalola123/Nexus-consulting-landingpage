"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-slate-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div
            className={`hidden lg:flex flex-col gap-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="w-32 h-40 rounded-2xl overflow-hidden shadow-lg transform -rotate-6">
              <img src="/professional-business-consultant-woman-in-navy-sui.jpg" alt="Senior Consultant" className="w-full h-full object-cover" />
            </div>
            <div className="w-28 h-36 rounded-2xl overflow-hidden shadow-lg transform rotate-3 ml-8">
              <img src="/professional-business-consultant-man-in-corporate-.jpg" alt="Strategy Consultant" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex-1 text-center max-w-3xl mx-auto">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Strategic solutions for <span className="text-slate-700">business growth</span>
            </h1>
            <p
              className={`mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              We partner with forward-thinking organizations to solve complex challenges, drive transformation, and
              unlock sustainable growth through data-driven strategies.
            </p>

            <div
              className={`mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Button
                size="lg"
                className="bg-slate-800 hover:bg-slate-900 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-slate-800/25"
              >
                Schedule a Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg border-gray-300 bg-white/50 backdrop-blur"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                View Case Studies
              </Button>
            </div>

            <div
              className={`mt-12 relative transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
            >
              <div className="relative mx-auto max-w-4xl">
                <div className="bg-white rounded-2xl shadow-2xl shadow-gray-900/10 overflow-hidden border border-gray-100">
                  <img src="/corporate-business-analytics-dashboard-with-charts.jpg" alt="Business Analytics Dashboard" className="w-full h-auto" />
                </div>
                <div className="absolute -left-4 top-1/4 bg-white rounded-xl shadow-xl p-3 hidden md:block animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">↑</span>
                    </div>
                    <span className="text-sm font-medium">Revenue +27%</span>
                  </div>
                </div>
                <div className="absolute -right-4 top-1/3 bg-white rounded-xl shadow-xl p-3 hidden md:block animate-float-delayed">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm">★</span>
                    </div>
                    <span className="text-sm font-medium">Strategy deployed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`hidden lg:flex flex-col gap-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <div className="w-28 h-36 rounded-2xl overflow-hidden shadow-lg transform rotate-6">
              <img src="/professional-executive-woman-corporate-leader.jpg" alt="Executive Consultant" className="w-full h-full object-cover" />
            </div>
            <div className="w-32 h-40 rounded-2xl overflow-hidden shadow-lg transform -rotate-3 ml-4">
              <img src="/professional-business-leader-man-in-boardroom.jpg" alt="Managing Partner" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        :global(.animate-float) {
          animation: float 3s ease-in-out infinite;
        }
        :global(.animate-float-delayed) {
          animation: float-delayed 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </section>
  )
}
