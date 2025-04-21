import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorks } from "@/components/how-it-works"
import { SecuritySection } from "@/components/security-section"
import { WaitlistForm } from "@/components/waitlist-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <SecuritySection />
      <WaitlistForm />
      <Footer />
    </main>
  );
}