import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { TalentSourcingSection } from "@/components/landing/talent-sourcing-section"
import { RecruitingSection } from "@/components/landing/recruiting-section"
import { EmployeeManagementSection } from "@/components/landing/employee-management-section"
import { TimePayrollSection } from "@/components/landing/time-payroll-section"
import { AISection } from "@/components/landing/ai-section"
import { StatsSection } from "@/components/landing/stats-section"
import { QuoteSection } from "@/components/landing/quote-section"
import { TrustSection } from "@/components/landing/trust-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TalentSourcingSection />
      <RecruitingSection />
      <EmployeeManagementSection />
      <TimePayrollSection />
      <AISection />
      <StatsSection />
      <QuoteSection />
      <TrustSection />
      <Footer />
    </main>
  )
}
