import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, TrendingUp, Smartphone, Search, Users } from 'lucide-react';
import heroIllustrationImg from '../assets/images/hero_designer_laptop_1793028210018.jpg';

interface HeroProps {
  onStartProject: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewWork }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex flex-col justify-center"
    >
      {/* Subtle Background Radial Glows & Grid */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.22, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          scale: [1.05, 0.95, 1.05],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 left-10 w-[400px] h-[350px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10"
      />

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
            {/* Small Eyebrow: Zero-Pill Typography with smooth entrance */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-5"
            >
              <span>Website Design</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>UI/UX</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>Digital Experiences</span>
            </motion.div>

            {/* Main Headline with Staggered Reveal */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6 [text-wrap:balance]"
            >
              Websites That Make Your Business{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                Stand Out & Grow.
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal"
            >
              Modern websites, landing pages, and digital experiences designed to build
              trust, attract customers, and turn visitors into opportunities.
            </motion.p>

            {/* Action Buttons with Interactive Micro-Animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onStartProject}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-200 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(30, 41, 59, 0.95)' }}
                whileTap={{ scale: 0.98 }}
                onClick={onViewWork}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 border border-slate-700/80 rounded-xl transition-all duration-200 cursor-pointer shadow-sm"
              >
                <span>View My Work</span>
              </motion.button>
            </motion.div>

            {/* Small Trust Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-2.5 text-xs text-slate-400 tracking-wide"
            >
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="font-medium text-slate-300">Designing with strategy. Building with purpose.</span>
            </motion.div>

            {/* Quick Proof Highlights with Staggered Count Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-slate-800/80 w-full max-w-lg"
            >
              <div className="group">
                <div className="text-xl sm:text-2xl font-bold text-white tabular-nums group-hover:text-blue-400 transition-colors">+140%</div>
                <div className="text-xs text-slate-400 mt-0.5">Avg. Lead Lift</div>
              </div>
              <div className="group">
                <div className="text-xl sm:text-2xl font-bold text-white tabular-nums group-hover:text-blue-400 transition-colors">50+</div>
                <div className="text-xs text-slate-400 mt-0.5">Completed Jobs</div>
              </div>
              <div className="group">
                <div className="text-xl sm:text-2xl font-bold text-white tabular-nums group-hover:text-blue-400 transition-colors">4+</div>
                <div className="text-xs text-slate-400 mt-0.5">Years Experience</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Website Mockup with Physics & Micro-Interactions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full flex justify-center items-center"
          >
            {/* Pulsing Ambient Backlight */}
            <motion.div
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [0.96, 1.04, 0.96],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -inset-4 bg-gradient-to-tr from-blue-600/25 to-sky-400/15 rounded-3xl blur-2xl -z-10"
            />

            {/* Main Floating Browser Container with Smooth Bobbing Motion */}
            <motion.div
              animate={{
                y: [-7, 7, -7],
                rotate: [-0.4, 0.4, -0.4],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="relative w-full max-w-lg rounded-2xl border border-slate-800/90 bg-[#0a1020]/90 backdrop-blur-xl shadow-2xl shadow-black/70 overflow-hidden transition-all duration-300"
            >
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
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  <span className="text-[10px] uppercase font-mono">Live</span>
                </div>
              </div>

              {/* Showcase Image with Zoom Effect */}
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
            </motion.div>

            {/* Floating UI Pillar Callouts around the mockup with independent float physics */}
            {/* 1. Conversion Callout */}
            <motion.div
              animate={{ y: [-4, 5, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.08 }}
              className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0e172e]/95 border border-blue-500/40 shadow-xl backdrop-blur-md text-xs text-white cursor-default"
            >
              <TrendingUp className="w-4 h-4 text-blue-400 shrink-0" />
              <div>
                <div className="font-semibold text-white">Conversion</div>
                <div className="text-[10px] text-blue-300 tabular-nums">Engineered to turn visits to leads</div>
              </div>
            </motion.div>

            {/* 2. Mobile Ready Callout */}
            <motion.div
              animate={{ y: [5, -4, 5] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.08 }}
              className="hidden sm:flex absolute -bottom-4 -left-4 items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0e172e]/95 border border-slate-700/80 shadow-xl backdrop-blur-md text-xs text-white cursor-default"
            >
              <Smartphone className="w-4 h-4 text-sky-400 shrink-0" />
              <div>
                <div className="font-semibold text-white">Mobile Ready</div>
                <div className="text-[10px] text-slate-300">Fluid touch responsiveness</div>
              </div>
            </motion.div>

            {/* 3. SEO Ready Callout */}
            <motion.div
              animate={{ x: [-3, 3, -3] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.08 }}
              className="hidden sm:flex absolute top-1/2 -left-6 -translate-y-1/2 items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0c1429]/95 border border-slate-800 shadow-lg backdrop-blur-md text-xs text-slate-200 cursor-default"
            >
              <Search className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span className="font-medium text-xs">SEO Ready</span>
            </motion.div>

            {/* 4. User Focused Callout */}
            <motion.div
              animate={{ x: [3, -3, 3] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.08 }}
              className="hidden sm:flex absolute bottom-8 -right-6 items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0c1429]/95 border border-slate-800 shadow-lg backdrop-blur-md text-xs text-slate-200 cursor-default"
            >
              <Users className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span className="font-medium text-xs">User Focused</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
