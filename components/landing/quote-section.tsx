"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function QuoteSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Our approach to consulting</h2>
        <blockquote className="relative">
          <div className="text-6xl text-slate-300 absolute -top-4 -left-4">"</div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic px-8">
            At Nexus, we believe that exceptional consulting isn't about giving advice—it's about partnering with our
            clients to build lasting capabilities. We work shoulder-to-shoulder with leadership teams to solve their
            most complex challenges, transfer knowledge, and create sustainable competitive advantage that endures long
            after our engagement ends.
          </p>
          <div className="text-6xl text-slate-300 absolute -bottom-8 right-4 rotate-180">"</div>
        </blockquote>
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src="/professional-female-ceo-executive-headshot-corpora.jpg" alt="CEO" className="w-full h-full object-cover" />
          </div>
          <div className="text-left">
            <div className="font-semibold text-gray-900">Victoria Reynolds</div>
            <div className="text-sm text-gray-600">Managing Partner & CEO</div>
          </div>
        </div>
      </div>
    </section>
  )
}
