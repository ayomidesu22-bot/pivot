import React, { useState } from 'react';
import { ArrowUpRight, Layout, Sparkles, Target, Zap, Check, ChevronRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const services = [
    {
      number: '01',
      title: 'Website Design & Redesign',
      icon: Layout,
      description:
        'Design or redesign modern, responsive websites that improve your brand image, user experience, and customer journey.',
      deliverables: [
        'Bespoke visual architecture & typography',
        'Fluid responsive layouts across all screen sizes',
        'Modern component systems & design tokens',
        'Fast loading speeds & SEO structural foundation',
      ],
      idealFor: 'Businesses needing a serious brand upgrade or complete modern overhaul.',
    },
    {
      number: '02',
      title: 'UI/UX Design',
      icon: Sparkles,
      description:
        'Create intuitive interfaces and user experiences that make websites easier to navigate and more enjoyable to use.',
      deliverables: [
        'User journeys & friction-free navigation architecture',
        'High-fidelity interactive prototypes in Figma',
        'Micro-interactions & tactile state transitions',
        'Design systems built for effortless development',
      ],
      idealFor: 'SaaS products, web applications, and customer portals.',
    },
    {
      number: '03',
      title: 'Landing Page Design',
      icon: Zap,
      description:
        'Build focused landing pages designed to capture attention, generate leads, and drive conversions.',
      deliverables: [
        'High-impact hero propositions & above-the-fold clarity',
        'Objection-handling copy structure & social proof strips',
        'Focused conversion pathways & high-intent forms',
        'Ad-campaign alignment & A/B testing readiness',
      ],
      idealFor: 'New product launches, campaign funnels, and marketing campaigns.',
    },
    {
      number: '04',
      title: 'Conversion-Focused Design',
      icon: Target,
      description:
        'Turn your website into a stronger business tool by improving layout, messaging, calls-to-action, and user flow.',
      deliverables: [
        'UX audit of current drop-off & conversion bottlenecks',
        'Strategic call-to-action placement and hierarchy',
        'Trust reinforcement, credibility cues & social proof',
        'Form streamlining to maximize completion rates',
      ],
      idealFor: 'Established businesses looking to multiply their current traffic ROI.',
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 relative bg-[#070b14]">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            <span>Capabilities</span>
            <span className="text-slate-600">·</span>
            <span>Strategic Design</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 [text-wrap:balance]">
            Everything Your Business Needs to Win Online
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            From strategy and UI/UX to complete website design, I create digital
            experiences that look professional, work smoothly, and help businesses move forward.
          </p>
        </div>

        {/* 4 Premium Service Cards in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={service.number}
                className="group relative rounded-2xl bg-[#0a1021]/80 hover:bg-[#0d152c] border border-slate-800/80 hover:border-blue-500/40 p-8 sm:p-10 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between"
              >
                {/* Top Row: Icon, Number, Arrow */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-600/25 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-mono font-semibold text-slate-400">
                        {service.number}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectService(service.title)}
                      aria-label={`Inquire about ${service.title}`}
                      className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-blue-500/60 group-hover:bg-blue-600 transition-all cursor-pointer"
                    >
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* What's Included Deliverables */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                      Included Deliverables
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-xs text-slate-400 italic">
                    {service.idealFor}
                  </span>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-all cursor-pointer whitespace-nowrap ml-4"
                  >
                    <span>Request Service</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
