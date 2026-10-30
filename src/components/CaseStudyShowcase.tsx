import React, { useState } from 'react';
import { ArrowRight, Layers, Sparkles, TrendingUp, ShieldCheck, Check, Eye } from 'lucide-react';
import auraCapitalImg from '../assets/images/project_wealth_tech_1791811837130.jpg';

interface CaseStudyShowcaseProps {
  onExploreWork: () => void;
  onStartProject: () => void;
}

export const CaseStudyShowcase: React.FC<CaseStudyShowcaseProps> = ({
  onExploreWork,
  onStartProject,
}) => {
  const [activeTab, setActiveTab] = useState<'strategy' | 'execution' | 'outcomes'>('strategy');

  const metrics = [
    {
      title: 'Better UX',
      metric: '+68%',
      subtitle: 'Higher Task Completion',
      desc: 'Intuitive navigation paths eliminate friction and visitor drop-off.',
    },
    {
      title: 'Clearer Messaging',
      metric: '2.4x',
      subtitle: 'Longer Attention Dwell',
      desc: 'Value propositions positioned directly in line of user eye scan.',
    },
    {
      title: 'Stronger Brand Presence',
      metric: '100%',
      subtitle: 'Bespoke Visual Identity',
      desc: 'Institutes instant credibility that commands premium client trust.',
    },
    {
      title: 'Conversion Focused',
      metric: '+185%',
      subtitle: 'Qualified Inbound Leads',
      desc: 'Engineered CTAs and frictionless intake forms maximize action.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative bg-[#060a12] border-t border-slate-800/80 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            <span>Case Study Deep Dive</span>
            <span className="text-slate-600">·</span>
            <span>Strategic Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 [text-wrap:balance]">
            From First Impression To Final Conversion.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Every project combines visual design, user experience, and business
            strategy to create websites that are built to perform.
          </p>
        </div>

        {/* 4 Metrics-Style Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#090f22]/90 border border-slate-800/80 hover:border-blue-500/40 transition-colors shadow-lg"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
                {item.title}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums tracking-tight mb-1">
                {item.metric}
              </div>
              <div className="text-xs font-medium text-slate-200 mb-3">
                {item.subtitle}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Large Featured Browser Mockup Showcase */}
        <div className="rounded-3xl bg-[#091024] border border-slate-800 p-4 sm:p-8 shadow-2xl relative">
          {/* Mockup Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-400">
                Aura Capital Partners · Flagship Redesign
              </span>
            </div>

            {/* Interactive Mode Pills */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('strategy')}
                className={`px-3 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                  activeTab === 'strategy'
                    ? 'bg-blue-600 text-white font-medium'
                    : 'text-slate-400 hover:text-white bg-slate-900'
                }`}
              >
                Strategy
              </button>
              <button
                onClick={() => setActiveTab('execution')}
                className={`px-3 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                  activeTab === 'execution'
                    ? 'bg-blue-600 text-white font-medium'
                    : 'text-slate-400 hover:text-white bg-slate-900'
                }`}
              >
                Interface
              </button>
              <button
                onClick={() => setActiveTab('outcomes')}
                className={`px-3 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                  activeTab === 'outcomes'
                    ? 'bg-blue-600 text-white font-medium'
                    : 'text-slate-400 hover:text-white bg-slate-900'
                }`}
              >
                ROI Impact
              </button>
            </div>
          </div>

          {/* Browser Display Visual */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
            <img
              src={auraCapitalImg}
              alt="Aura Capital Partners Web Redesign by Pivot Wealth Solutions"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />

            {/* Tab Specific Interactive Overlay Information */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080d1c] via-[#080d1c]/40 to-transparent p-6 sm:p-10 flex flex-col justify-end">
              <div className="max-w-2xl bg-[#091024]/90 backdrop-blur-md border border-slate-700/80 p-6 rounded-2xl shadow-xl">
                {activeTab === 'strategy' && (
                  <div>
                    <span className="text-xs font-mono uppercase text-blue-400 font-semibold">
                      Phase 1: Information Architecture
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mt-1 mb-2">
                      Framing High-Ticket Advisory Credibility
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Replaced text-heavy legacy pages with a focused modular layout.
                      Visitors immediately see verified investment allocations, performance
                      indexes, and partner bios within 3 seconds of page load.
                    </p>
                  </div>
                )}

                {activeTab === 'execution' && (
                  <div>
                    <span className="text-xs font-mono uppercase text-sky-400 font-semibold">
                      Phase 2: Visual & Responsive Craft
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mt-1 mb-2">
                      Precision UI System & Micro-Interactions
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Deep obsidian surfaces with subtle hairline gold/blue accents, custom
                      SVG asset allocation charts, and fluid layout scaling tuned for ultra-wide
                      monitors, laptops, and mobile devices.
                    </p>
                  </div>
                )}

                {activeTab === 'outcomes' && (
                  <div>
                    <span className="text-xs font-mono uppercase text-emerald-400 font-semibold">
                      Phase 3: Measurable Growth
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mt-1 mb-2">
                      +140% Increase in Inbound Consultations
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Within 60 days of release, the client recorded their highest quarterly
                      inbound client acquisition volume in the firm's 12-year history.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Full confidentiality maintained. Verified commercial results.</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onExploreWork}
                className="group inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all cursor-pointer shadow-md"
              >
                <span>Explore The Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
