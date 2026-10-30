import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, TrendingUp, Smartphone, Search, Users } from 'lucide-react';
import heroIllustrationImg from '../assets/images/hero_designer_laptop_1793028210018.jpg';

interface HeroProps {
  onStartProject: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewWork }) => {
  const [activeTab, setActiveTab] = useState<'desktop' | 'metrics'>('desktop');

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex flex-col justify-center"
    >
      {/* Subtle Background Radial Glows & Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[350px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      {/* Precision Blueprint Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Value Proposition, Action CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Small Eyebrow: Zero-Pill Typography */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-5">
              <span>Website Design</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>UI/UX</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>Digital Experiences</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6 [text-wrap:balance]">
              Websites That Make Your Business{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                Stand Out & Grow.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              Modern websites, landing pages, and digital experiences designed to build
              trust, attract customers, and turn visitors into opportunities.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={onStartProject}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/45 transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onViewWork}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 rounded-xl transition-all duration-200 cursor-pointer shadow-sm"
              >
                <span>View My Work</span>
              </button>
            </div>

            {/* Small Trust Statement */}
            <div className="flex items-center gap-2.5 text-xs text-slate-400 tracking-wide">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="font-medium text-slate-300">Designing with strategy. Building with purpose.</span>
            </div>

            {/* Quick Proof Highlights */}
            <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-slate-800/80 w-full max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">+140%</div>
                <div className="text-xs text-slate-400 mt-0.5">Avg. Lead Lift</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">40+</div>
                <div className="text-xs text-slate-400 mt-0.5">Bespoke Launches</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">Custom Strategy</div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Website Mockup with Precision Depth */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            {/* Ambient Backlight */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-sky-400/10 rounded-3xl blur-2xl -z-10" />

            {/* Main Layered Browser Container */}
            <div className="relative w-full max-w-lg rounded-2xl border border-slate-800/90 bg-[#0a1020]/90 backdrop-blur-xl shadow-2xl shadow-black/60 overflow-hidden transform transition-transform duration-500 hover:scale-[1.01]">
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d1428] border-b border-slate-800/80">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                {/* Clean URL bar */}
                <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-900/90 rounded-md text-[11px] font-mono text-slate-400 border border-slate-800">
                  <span className="text-blue-400 font-semibold">https://</span>
                  <span>pivotwealthsolutions.com/client-showcase</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="text-[10px] uppercase font-mono">Live</span>
                </div>
              </div>

              {/* Showcase Image or Interactive Mode */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 group">
                <img
                  src={heroIllustrationImg}
                  alt="Pivot Wealth Solutions Creative Studio — Modern UI/UX Designer working on a digital web platform"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle Gradient Scrim for crisp edge contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1020] via-transparent to-transparent opacity-60" />
              </div>

              {/* Browser Footer Status Bar */}
              <div className="p-3 bg-[#0c1324] border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-slate-200 font-medium">Pivot Design Studio</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-400 text-[11px]">Bespoke UI/UX & High-Impact Growth</span>
                </div>
                <div className="text-emerald-400 font-semibold text-[11px] tabular-nums">
                  +185% Inquiries
                </div>
              </div>
            </div>

            {/* Floating UI Pillar Callouts around the mockup */}
            {/* 1. Conversion Callout */}
            <div className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0e172e]/95 border border-blue-500/30 shadow-xl backdrop-blur-md text-xs text-white transform -rotate-1 hover:rotate-0 transition-transform">
              <TrendingUp className="w-4 h-4 text-blue-400 shrink-0" />
              <div>
                <div className="font-semibold text-white">Conversion</div>
                <div className="text-[10px] text-blue-300 tabular-nums">Engineered to turn visits to leads</div>
              </div>
            </div>

            {/* 2. Mobile Ready Callout */}
            <div className="hidden sm:flex absolute -bottom-4 -left-4 items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0e172e]/95 border border-slate-700/80 shadow-xl backdrop-blur-md text-xs text-white transform rotate-1 hover:rotate-0 transition-transform">
              <Smartphone className="w-4 h-4 text-sky-400 shrink-0" />
              <div>
                <div className="font-semibold text-white">Mobile Ready</div>
                <div className="text-[10px] text-slate-300">Fluid touch responsiveness</div>
              </div>
            </div>

            {/* 3. SEO Ready Callout */}
            <div className="hidden sm:flex absolute top-1/2 -left-6 -translate-y-1/2 items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0c1429]/95 border border-slate-800 shadow-lg backdrop-blur-md text-xs text-slate-200">
              <Search className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span className="font-medium text-xs">SEO Ready</span>
            </div>

            {/* 4. User Focused Callout */}
            <div className="hidden sm:flex absolute bottom-8 -right-6 items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0c1429]/95 border border-slate-800 shadow-lg backdrop-blur-md text-xs text-slate-200">
              <Users className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span className="font-medium text-xs">User Focused</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
