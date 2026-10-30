import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Eleanor Vance',
      role: 'Managing Partner',
      company: 'Arcadius Wealth Management',
      initials: 'EV',
      gradient: 'from-blue-600 to-indigo-600',
      quote:
        'Pivot Wealth Solutions redesigned our entire firm web presence from the ground up. In the first 90 days after launch, our inbound high-net-worth client inquiries grew by 185%. The design establishes immediate credibility before we even jump on a discovery call.',
      highlight: '+185% Inbound Inquiries',
      service: 'Website Redesign & Client Portal',
    },
    {
      name: 'Marcus Sterling',
      role: 'Chief Executive Officer',
      company: 'Axon Operations',
      initials: 'MS',
      gradient: 'from-sky-500 to-blue-700',
      quote:
        'Our previous software landing page was too technical and lost most visitors within seconds. Pivot Wealth Solutions simplified our messaging, created stunning UI visuals, and increased our enterprise demo booking rate by over 3x.',
      highlight: '3.2x Demo Request Rate',
      service: 'B2B SaaS Landing Page',
    },
    {
      name: 'Sophia Laurent',
      role: 'Founder & Principal',
      company: 'Lumina Spatial Design',
      initials: 'SL',
      gradient: 'from-blue-500 to-cyan-600',
      quote:
        'Working with Pivot Wealth Solutions was the best creative investment we made this year. The portfolio looks like a high-end luxury architectural publication, and our project intake form immediately weeds out low-ticket inquiries.',
      highlight: '$8.4M Commission Pipeline',
      service: 'Editorial Web & UI/UX Design',
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative bg-[#070b14] border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 sm:mb-20"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
              <span>Client Feedback</span>
              <span className="text-slate-600">·</span>
              <span>Measurable Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 [text-wrap:balance]">
              What Clients Say
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal">
              Direct feedback from business founders and managing directors who partnered with
              Pivot Wealth Solutions to upgrade their digital brand and grow.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-mono self-start sm:self-auto">
            Verified Partner Reviews
          </div>
        </motion.div>

        {/* 3 Testimonial Cards with Staggered Entrance and Hover Physics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="rounded-2xl bg-[#090f20] border border-slate-800/90 hover:border-blue-500/50 p-8 flex flex-col justify-between transition-colors duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div>
                {/* Top Row: Service & Metric Highlight */}
                <div className="flex items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-800">
                  <span className="text-xs text-slate-400 font-medium truncate">
                    {t.service}
                  </span>
                  <span className="text-xs font-mono font-semibold text-blue-400 shrink-0">
                    {t.highlight}
                  </span>
                </div>

                {/* Stars & Quote Icon */}
                <div className="flex items-center gap-1 mb-4 text-blue-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 font-normal">
                  "{t.quote}"
                </blockquote>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-800/80">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-tr ${t.gradient} flex items-center justify-center text-white font-bold text-xs tracking-wider border border-white/20 shrink-0 shadow-md`}
                >
                  {t.initials}
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {t.role}, <span className="text-slate-300">{t.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
