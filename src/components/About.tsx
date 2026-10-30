import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import aboutIllustrationImg from '../assets/images/about_designer_illustration_1793368076273.jpg';

export const About: React.FC = () => {
  const badges = [
    'Website Design',
    'UI/UX',
    'Landing Pages',
    'Conversion',
    'Responsive Design',
  ];

  const highlights = [
    { label: 'Years of Experience', value: '4+ Years' },
    { label: 'Completed Jobs', value: 'Over 50' },
    { label: 'Client Satisfaction', value: '99%' },
    { label: 'Commitment to ROI', value: '100%' },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#070b14] border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Designer Studio Visual & Workspace with Motion Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group"
            >
              <img
                src={aboutIllustrationImg}
                alt="Pivot Wealth Solutions Creative Digital Designer & Strategist working on modern website UI wireframes"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070c18] via-transparent to-transparent opacity-80" />

              {/* Floating Card on Image */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#091024]/90 backdrop-blur-md border border-slate-700/80"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">Lead Digital Designer & Strategist</div>
                    <div className="text-xs text-blue-400">Pivot Wealth Solutions Studio</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Subtle decorative glow with breathing animation */}
            <motion.div
              animate={{
                opacity: [0.2, 0.45, 0.2],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -inset-4 bg-blue-600/15 rounded-3xl blur-2xl -z-10"
            />
          </motion.div>

          {/* Right Column: Narrative, Badges, Values with Staggered Motion */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
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

            {/* Badges strip with Micro-Interaction physics */}
            <div className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                Core Design Disciplines
              </span>
              <div className="flex flex-wrap gap-2">
                {badges.map((badge, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(30, 58, 138, 0.4)' }}
                    className="px-3.5 py-1.5 rounded-lg bg-[#0d162e] border border-blue-500/25 text-xs font-medium text-slate-200 cursor-default transition-colors"
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Experience & Trust Metrics with Staggered Count */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-800 w-full">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
                  className="group"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-blue-400 transition-colors tabular-nums">
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
