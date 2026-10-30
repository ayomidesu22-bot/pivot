import React from 'react';
import { ArrowRight, Mail, Calendar, MessageSquare, Sparkles } from 'lucide-react';

interface CtaSectionProps {
  onStartProject: () => void;
  onTalkClick: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onStartProject, onTalkClick }) => {
  return (
    <section className="py-24 sm:py-32 relative bg-[#060a12] border-t border-slate-800/80 overflow-hidden">
      {/* Background Animated Radial Glow & Grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ready To Take The Next Step?</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 [text-wrap:balance]">
          Your Website Should Work As Hard As Your Business.
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
          Let's create a modern digital experience that builds trust, attracts the
          right customers, and helps your business grow.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            onClick={onStartProject}
            className="group inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-xl shadow-blue-600/35 hover:shadow-blue-600/50 transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://wa.me/message/CWDDSFYIVE3VB1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold text-emerald-300 hover:text-white bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/40 rounded-xl transition-all cursor-pointer shadow-md"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            onClick={onTalkClick}
            className="inline-flex items-center gap-2 px-6 py-4 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all cursor-pointer shadow-md"
          >
            <span>Scope Calculator</span>
          </button>
        </div>

        {/* Reassurance text */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Current Availability: Taking 2 new projects this quarter</span>
          </span>
          <span className="hidden sm:inline text-slate-700">·</span>
          <span>Typical response time: Under 24 hours</span>
        </div>
      </div>
    </section>
  );
};
