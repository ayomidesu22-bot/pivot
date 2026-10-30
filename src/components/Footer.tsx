import React from 'react';
import { Logo } from './Logo.tsx';
import { ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'Behance', href: 'https://behance.net' },
    { name: 'Dribbble', href: 'https://dribbble.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'Instagram', href: 'https://instagram.com' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050810] border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Statement */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="mb-4">
              <Logo size="md" />
            </a>
            <p className="text-sm text-slate-300 font-medium max-w-sm mb-6">
              Modern websites. Better experiences. Business growth.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Specialized digital design studio creating conversion-focused web platforms,
              bespoke UI/UX, and high-impact landing pages for ambitious businesses.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Navigation
            </div>
            <ul className="grid grid-cols-2 gap-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect, Social & Contact Details */}
          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Direct Contact
            </div>
            <div className="space-y-4 text-xs mb-6">
              {/* Prominent WhatsApp Card in Footer */}
              <div>
                <a
                  href="https://wa.me/message/CWDDSFYIVE3VB1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 transition-all shadow-md shadow-[#25D366]/10"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <WhatsAppIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-xs font-bold text-white group-hover:text-[#25D366] transition-colors flex items-center gap-1.5">
                      <span>Chat on WhatsApp</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping" />
                    </div>
                    <div className="text-[11px] text-[#25D366]">Direct Line · Fast Reply</div>
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="mailto:pitapan551@gmail.com"
                  className="text-slate-300 hover:text-white transition-colors block"
                >
                  pitapan551@gmail.com
                </a>
              </div>
              <div className="text-slate-400 leading-relaxed">
                1000 Woodward Avenue<br />
                Detroit, Michigan (MI) 48226<br />
                United States
              </div>
            </div>

            <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Portfolios & Social
            </div>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
              {socialLinks.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{s.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Pivot Wealth Solutions. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/message/CWDDSFYIVE3VB1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#25D366] hover:text-emerald-300 transition-colors font-medium"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Direct</span>
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
