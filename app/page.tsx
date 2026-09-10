import { Benefits } from '../components/Benefits';
import { CTA } from '../components/CTA';
import { Features } from '../components/Features';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { Navbar } from '../components/Navbar';
import { PlatformHighlights } from '../components/PlatformHighlights';
import { Stakeholders } from '../components/Stakeholders';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f4f8f2] text-slate-800">
      <Navbar />
      <Hero />
      <PlatformHighlights />
      <HowItWorks />
      <Stakeholders />
      <Features />
      <Benefits />
      <CTA />
      <Footer />
    </main>
  );
}
