import React, { useState } from 'react';
import { Compass, Users, Target, Rocket, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(3); // Default to Growth stage or interactive

  const pillars = [
    {
      icon: Compass,
      title: 'Strategy First',
      description:
        'Every design decision should support a clear business objective. We do not design for decoration; every layout, hierarchy, and copy block is intentional.',
      metric: 'Outcome-driven architecture',
    },
    {
      icon: Users,
      title: 'User Focused',
      description:
        'Create simple, intuitive experiences that make it easier for visitors to take action. When interfaces feel natural, friction disappears and engagement soars.',
      metric: 'Zero-friction navigation',
    },
    {
      icon: Target,
      title: 'Conversion Driven',
      description:
        'Design pages around trust, clarity, engagement, and measurable business outcomes. Turn passive traffic into high-intent inbound leads.',
      metric: 'Engineered conversion funnels',
    },
    {
      icon: Rocket,
      title: 'Built To Scale',
      description:
        'Create flexible digital experiences that can grow with the business. Modular component systems ensure seamless feature expansion and longevity.',
      metric: 'Future-proof design system',
    },
  ];

  const stages = [
    {
      name: 'Problem',
      badge: 'Current State',
      title: 'The Silent Leak in Your Business',
      symptoms: [
        'Outdated look that fails to reflect your real capability',
        'Confusing navigation causing visitors to bounce in seconds',
        'Weak or buried CTAs that leave revenue on the table',
        'Mobile visitors struggle with clunky, slow-loading pages',
      ],
      resultColor: 'text-rose-400',
    },
    {
      name: 'Strategy',
      badge: 'Phase 01',
      title: 'Mapping the Business Objectives',
      symptoms: [
        'Deep-dive into target client psychology and purchasing triggers',
        'Streamlining information architecture to guide the decision process',
        'Formulating high-converting value propositions and messaging',
        'Structuring proof points to eliminate buyer skepticism upfront',
      ],
      resultColor: 'text-amber-400',
    },
    {
      name: 'Design',
      badge: 'Phase 02',
      title: 'Crafting High-End Digital Experience',
      symptoms: [
        'Premium bespoke aesthetic tailored exclusively to your brand',
        'Harmonious typography scale, whitespace, and micro-interactions',
        'Precision responsive design perfected for smartphones, tablets, and desktops',
        'Interactive preview states and accessible contrast standards',
      ],
      resultColor: 'text-sky-400',
    },
    {
      name: 'Growth',
      badge: 'Final Outcome',
      title: 'A High-Converting Business Asset',
      symptoms: [
        'Immediate credibility and prestige that justifies premium pricing',
        'Higher conversion rate turning existing traffic into booked calls',
        'Lower client acquisition friction with seamless lead capture',
        'A resilient digital foundation ready to scale alongside your firm',
      ],
      resultColor: 'text-emerald-400',
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative bg-[#070b14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            <span>Philosophy & Edge</span>
            <span className="text-slate-600">·</span>
            <span>Why Pivot Wealth Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 [text-wrap:balance]">
            Design With Purpose. Built For Growth.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Great web design is not an expense—it is your highest-leverage business
            development asset working 24 hours a day, 7 days a week.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#090f20]/90 border border-slate-800 p-7 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/80 text-xs font-medium text-blue-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>{pillar.metric}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Transformation Visual: Problem → Strategy → Design → Growth */}
        <div className="rounded-3xl bg-[#0a1024] border border-slate-800/90 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Subheader */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                The Transformation Engine
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                How We Turn Static Sites Into Revenue Generators
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              Click any stage below to inspect the evolution
            </span>
          </div>

          {/* Stepper Timeline Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {stages.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={stage.name}
                  onClick={() => setActiveStage(idx)}
                  className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600/15 border-blue-500/80 shadow-lg shadow-blue-500/10'
                      : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                    <span className={`text-[11px] font-medium ${stage.resultColor}`}>
                      {stage.name}
                    </span>
                  </div>
                  <div className={`text-sm font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {stage.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Stage Content */}
          <div className="rounded-2xl bg-[#0c142b] border border-slate-800/80 p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                  {stages[activeStage].badge}
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {stages[activeStage].title}
                </h4>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span>Stage {activeStage + 1} of 4</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stages[activeStage].symptoms.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/60"
                >
                  {activeStage === 0 ? (
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  )}
                  <span className="text-sm text-slate-200 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
