import React, { useState } from 'react';
import { Search, Compass, Palette, Code2, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: '01',
      title: 'Discover',
      tagline: 'Understand your business, audience, goals, and challenges.',
      icon: Search,
      duration: 'Week 1',
      description:
        'We begin by diagnosing where your current site falls short, identifying your ideal client profile, analyzing key market competitors, and establishing measurable success KPIs for the new website.',
      deliverables: [
        'Stakeholder discovery interview',
        'Competitor & audience teardown',
        'Core positioning & messaging guidelines',
        'Website feature scope & technical roadmap',
      ],
    },
    {
      number: '02',
      title: 'Strategize',
      tagline: 'Plan the structure, content flow, user journey, and conversion opportunities.',
      icon: Compass,
      duration: 'Week 1–2',
      description:
        'Before designing visuals, we engineer the information architecture and conversion blueprint. Every page is mapped to guide visitors naturally from curiosity to booking.',
      deliverables: [
        'Complete website sitemap & page tree',
        'Low-fidelity wireframes & layout hierarchy',
        'Strategic call-to-action placement matrix',
        'Conversion-focused copywriting framework',
      ],
    },
    {
      number: '03',
      title: 'Design',
      tagline: 'Create the visual direction, UI/UX, layouts, and responsive experience.',
      icon: Palette,
      duration: 'Week 2–3',
      description:
        'This is where your brand transforms. We design modern, bespoke user interfaces in Figma with refined typography, balanced whitespace, and interactive micro-animations.',
      deliverables: [
        'High-fidelity desktop & mobile UI mockups',
        'Design system (typography, colors, tokens)',
        'Clickable interactive prototype',
        'Iterative design review & feedback rounds',
      ],
    },
    {
      number: '04',
      title: 'Build',
      tagline: 'Turn the approved design into a polished, responsive website.',
      icon: Code2,
      duration: 'Week 3–4',
      description:
        'We engineer pixel-perfect, lightning-fast code. Responsive on every device, optimized for SEO, and built with clean, accessible standards that never break.',
      deliverables: [
        'Pixel-accurate responsive frontend build',
        'High performance & 95+ Core Web Vitals score',
        'Interactive forms with validation & notifications',
        'SEO metadata & OpenGraph social card setup',
      ],
    },
    {
      number: '05',
      title: 'Refine',
      tagline: 'Test, improve, optimize, and make sure everything feels right before launch.',
      icon: Sparkles,
      duration: 'Launch Week',
      description:
        'Rigorous quality assurance across browsers, screen ratios, and real mobile devices. We stress-test load times, verify form submissions, and launch smoothly.',
      deliverables: [
        'Cross-browser & mobile device QA testing',
        'Form deliverability & lead routing verification',
        'Production deployment & DNS pointing',
        'Post-launch 30-day warranty & support',
      ],
    },
  ];

  return (
    <section id="process" className="py-24 sm:py-32 relative bg-[#070b14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            <span>Methodology</span>
            <span className="text-slate-600">·</span>
            <span>How We Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 [text-wrap:balance]">
            A Simple Process. A Better Website.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            No guesswork, no endless revisions, and no missed deadlines. A disciplined,
            transparent 5-step progression designed to deliver high-converting results.
          </p>
        </div>

        {/* Process Steps: Horizontal Timeline on Desktop / Accordion on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Step Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;

              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-600/15 border-blue-500/80 shadow-lg shadow-blue-500/10'
                      : 'bg-[#090f20] border-slate-800/80 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-slate-900 border border-slate-800 text-slate-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-slate-400">
                          {step.number}
                        </span>
                        <span className="text-slate-600">·</span>
                        <span className="text-xs text-blue-400 font-medium">
                          {step.duration}
                        </span>
                      </div>
                      <div className={`text-base font-bold ${isActive ? 'text-white' : 'text-slate-200'}`}>
                        {step.title}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`text-xs font-mono font-semibold px-2 py-0.5 rounded ${
                      isActive ? 'text-blue-300 bg-blue-500/20' : 'text-slate-400'
                    }`}
                  >
                    Phase {idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Card */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-3xl bg-[#091024] border border-slate-800 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />

              <div>
                {/* Step Metadata Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl sm:text-3xl font-mono font-extrabold text-blue-400">
                      {steps[activeStep].number}
                    </span>
                    <span className="text-slate-600">/</span>
                    <span className="text-lg font-bold text-white">
                      {steps[activeStep].title}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>Estimated: {steps[activeStep].duration}</span>
                  </div>
                </div>

                {/* Tagline & Main Paragraph */}
                <p className="text-base sm:text-lg text-blue-200 font-medium mb-4">
                  {steps[activeStep].tagline}
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                  {steps[activeStep].description}
                </p>

                {/* Deliverables Checklist */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                    Phase Key Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {steps[activeStep].deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step Navigation Dots / Footer */}
              <div className="pt-8 mt-8 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {steps.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setActiveStep(dotIdx)}
                      aria-label={`Jump to step ${dotIdx + 1}`}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        activeStep === dotIdx ? 'w-8 bg-blue-500' : 'w-2 bg-slate-700 hover:bg-slate-600'
                      }`}
                    />
                  ))}
                </div>

                <div className="text-xs text-slate-400">
                  Step {activeStep + 1} of {steps.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
