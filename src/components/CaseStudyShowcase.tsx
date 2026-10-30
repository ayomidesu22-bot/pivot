import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Layers, Sparkles, TrendingUp, ShieldCheck, Check, Code2, Compass, BarChart3, CheckCircle2 } from 'lucide-react';

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
        {/* Section Header with Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
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
        </motion.div>

        {/* 4 Metrics-Style Cards with Staggered Entrance and Hover Physics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {metrics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
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
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Featured Case Study Architecture Blueprint (Image Removed) */}
        <div className="rounded-3xl bg-[#091024] border border-slate-800 p-6 sm:p-10 shadow-2xl relative">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-300">
                Vertex Wealth & Capital Advisory · Strategic Blueprint
              </span>
            </div>

            {/* Interactive Mode Tabs */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('strategy')}
                className={`px-3.5 py-1.5 text-xs rounded-lg transition-colors cursor-pointer font-medium ${
                  activeTab === 'strategy'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
                }`}
              >
                Strategy
              </button>
              <button
                onClick={() => setActiveTab('execution')}
                className={`px-3.5 py-1.5 text-xs rounded-lg transition-colors cursor-pointer font-medium ${
                  activeTab === 'execution'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
                }`}
              >
                Interface
              </button>
              <button
                onClick={() => setActiveTab('outcomes')}
                className={`px-3.5 py-1.5 text-xs rounded-lg transition-colors cursor-pointer font-medium ${
                  activeTab === 'outcomes'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
                }`}
              >
                ROI Impact
              </button>
            </div>
          </div>

          {/* Interactive Case Study Content Panel */}
          <div className="rounded-2xl bg-[#0b1228] border border-slate-800/90 p-6 sm:p-8">
            {activeTab === 'strategy' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-mono uppercase text-blue-400 font-semibold">
                      Phase 1: Information Architecture & Positioning
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      Framing High-Ticket Advisory Credibility
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800 self-start sm:self-auto">
                    Objective: Trust & Authority
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Replaced text-heavy legacy pages with a focused modular layout.
                  Visitors immediately see verified investment allocations, performance
                  indexes, and partner bios within 3 seconds of page load.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <Compass className="w-5 h-5 text-blue-400 mb-2.5" />
                    <div className="text-sm font-bold text-white mb-1">Audience Intent Mapping</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Structured page paths specifically for high-net-worth investors seeking discretionary wealth advisory.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <Layers className="w-5 h-5 text-sky-400 mb-2.5" />
                    <div className="text-sm font-bold text-white mb-1">Information Hierarchy</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Prioritized investment track records, fee transparency, and fiduciary certifications above the fold.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <ShieldCheck className="w-5 h-5 text-indigo-400 mb-2.5" />
                    <div className="text-sm font-bold text-white mb-1">Objection Neutralization</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Strategically embedded compliance disclaimers and audited performance proofs adjacent to CTAs.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'execution' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-mono uppercase text-sky-400 font-semibold">
                      Phase 2: Visual & Responsive Craft
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      Precision UI System & Micro-Interactions
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800 self-start sm:self-auto">
                    Standard: WCAG AA & 60fps
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Deep obsidian surfaces with subtle hairline gold/blue accents, custom
                  SVG asset allocation charts, and fluid layout scaling tuned for ultra-wide
                  monitors, laptops, and mobile devices.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <Code2 className="w-5 h-5 text-sky-400 mb-2.5" />
                    <div className="text-sm font-bold text-white mb-1">Component Design Tokens</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Unified font hierarchies, radius math, and accessible 4.5:1 text contrast ratios.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <Sparkles className="w-5 h-5 text-blue-400 mb-2.5" />
                    <div className="text-sm font-bold text-white mb-1">Tactile Feedback</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Smooth settling curves (&lt;180ms) on hover states, buttons, and interactive modals.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <TrendingUp className="w-5 h-5 text-emerald-400 mb-2.5" />
                    <div className="text-sm font-bold text-white mb-1">Lightning Performance</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Sub-second first contentful paint (0.7s) and 98+ Google Lighthouse performance score.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'outcomes' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-mono uppercase text-emerald-400 font-semibold">
                      Phase 3: Measurable Growth & Revenue Impact
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      +185% Increase in Inbound Inquiries
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-500/40 self-start sm:self-auto">
                    Verified ROI Outcome
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Within 60 days of release, the client recorded their highest quarterly
                  inbound client acquisition volume in the firm's history, with substantial decreases
                  in visitor bounce rates.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <BarChart3 className="w-5 h-5 text-emerald-400 mb-2.5" />
                    <div className="text-2xl font-bold text-white tabular-nums mb-0.5">+185%</div>
                    <div className="text-xs font-semibold text-slate-300 mb-1">Client Inquiries</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Dramatic increase in qualified consultation submissions over the first quarter.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mb-2.5" />
                    <div className="text-2xl font-bold text-white tabular-nums mb-0.5">3.8 min</div>
                    <div className="text-xs font-semibold text-slate-300 mb-1">Session Duration</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Up from 45 seconds on legacy site, showing deep engagement with case studies.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <TrendingUp className="w-5 h-5 text-sky-400 mb-2.5" />
                    <div className="text-2xl font-bold text-white tabular-nums mb-0.5">-44%</div>
                    <div className="text-xs font-semibold text-slate-300 mb-1">Bounce Rate Drop</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Streamlined user journey eliminated confusion and early page abandonment.
                    </p>
                  </div>
                </div>
              </div>
            )}
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
