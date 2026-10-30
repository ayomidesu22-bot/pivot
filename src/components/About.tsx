import React from 'react';
import { Check, ShieldCheck, Award, HeartHandshake, Sparkles, Terminal } from 'lucide-react';
import workspaceImg from '../assets/images/designer_workspace_1791811863739.jpg';

export const About: React.FC = () => {
  const badges = [
    'Website Design',
    'UI/UX',
    'Landing Pages',
    'Conversion',
    'Responsive Design',
  ];

  const highlights = [
    { label: 'Specialized Experience', value: '8+ Years' },
    { label: 'Completed Digital Builds', value: '40+' },
    { label: 'Client Satisfaction', value: '99%' },
    { label: 'Commitment to ROI', value: '100%' },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#070b14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Designer Studio Visual & Workspace */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
              <img
                src={workspaceImg}
                alt="Pivot Wealth Solutions Creative Design Studio Desk"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070c18] via-transparent to-transparent opacity-80" />

              {/* Float Card on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#091024]/90 backdrop-blur-md border border-slate-700/80">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">Lead Digital Designer & Strategist</div>
                    <div className="text-xs text-blue-400">Pivot Wealth Solutions Studio</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative glow */}
            <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl blur-2xl -z-10" />
          </div>

          {/* Right Column: Narrative, Badges, Values */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
              <span>About The Brand</span>
              <span className="text-slate-600">·</span>
              <span>Design Partner</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 [text-wrap:balance]">
              Designing Digital Experiences That Move Businesses Forward.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              <p>
                I'm the designer behind <span className="text-white font-semibold">Pivot Wealth Solutions</span>,
                focused on creating modern websites, intuitive interfaces, and high-converting landing
                pages for businesses that want to grow online.
              </p>
              <p>
                My approach combines clean visual design, user experience, responsive development,
                and conversion-focused thinking to create websites that don't just look good — they have a purpose.
              </p>
            </div>

            {/* Badges strip (Clean unboxed / subtle metadata style) */}
            <div className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                Core Design Disciplines
              </span>
              <div className="flex flex-wrap gap-2">
                {badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-lg bg-[#0d162e] border border-blue-500/20 text-xs font-medium text-slate-200"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience & Trust Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-800 w-full">
              {highlights.map((item, idx) => (
                <div key={idx}>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
