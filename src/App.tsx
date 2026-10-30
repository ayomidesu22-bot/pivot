import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ValueStrip } from './components/ValueStrip.tsx';
import { Services } from './components/Services.tsx';
import { WhyUs } from './components/WhyUs.tsx';
import { Portfolio } from './components/Portfolio.tsx';
import { CaseStudyShowcase } from './components/CaseStudyShowcase.tsx';
import { Process } from './components/Process.tsx';
import { About } from './components/About.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { CtaSection } from './components/CtaSection.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { ProjectPlannerModal } from './components/ProjectPlannerModal.tsx';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Website Design & Redesign');
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const workEl = document.getElementById('work');
    if (workEl) {
      workEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyPlan = (details: { service: string; budget: string; scopeSummary: string }) => {
    setSelectedService(details.service);
    scrollToContact(details.service);
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white relative">
      {/* Navigation */}
      <Navbar onStartProjectClick={() => scrollToContact()} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onStartProject={() => scrollToContact()}
          onViewWork={scrollToWork}
        />

        {/* Value Strip */}
        <ValueStrip />

        {/* Services Section */}
        <Services onSelectService={(service) => scrollToContact(service)} />

        {/* Why Pivot Wealth Solutions */}
        <WhyUs />

        {/* Featured Work / Portfolio */}
        <Portfolio onStartProject={() => scrollToContact()} />

        {/* Project Showcase / Case Study */}
        <CaseStudyShowcase
          onExploreWork={scrollToWork}
          onStartProject={() => scrollToContact()}
        />

        {/* Design Process */}
        <Process />

        {/* About Section */}
        <About />

        {/* Testimonials */}
        <Testimonials />

        {/* CTA Section */}
        <CtaSection
          onStartProject={() => scrollToContact()}
          onTalkClick={() => setIsPlannerOpen(true)}
        />

        {/* Contact Section */}
        <Contact preselectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Scope Planner Modal */}
      <ProjectPlannerModal
        isOpen={isPlannerOpen}
        onClose={() => setIsPlannerOpen(false)}
        onApplyPlan={handleApplyPlan}
      />

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/message/CWDDSFYIVE3VB1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Pivot Wealth Solutions"
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-900/40 hover:shadow-emerald-600/50 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-5 h-5 text-white" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
