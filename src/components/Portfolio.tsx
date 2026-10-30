import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, X, Check, BarChart3, Layers, Globe } from 'lucide-react';
import arcadiusImg from '../assets/images/hero_web_showcase_1791811823999.jpg';
import auraCapitalImg from '../assets/images/project_wealth_tech_1791811837130.jpg';
import axonImg from '../assets/images/project_saas_cloud_1791811853274.jpg';
import architectImg from '../assets/images/project_architect_studio_1793028004444.jpg';
import ventureImg from '../assets/images/project_venture_firm_1793028003789.jpg';

interface Project {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  image: string;
  clientType: string;
  year: string;
  results: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
}

interface PortfolioProps {
  onStartProject: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onStartProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'arcadius',
      title: 'Arcadius Wealth Management',
      category: 'Business Website',
      shortDesc:
        'A comprehensive brand elevation and client platform redesign for a multi-family wealth advisory firm managing $280M+ AUM.',
      image: arcadiusImg,
      clientType: 'Private Wealth & Asset Advisory',
      year: '2026',
      results: '+185% Qualified Client Inquiries in 90 Days',
      challenge:
        'Arcadius had an outdated, static website with confusing document access and an uninspired visual identity that failed to inspire confidence among ultra-high-net-worth investors.',
      solution:
        'Designed an institutional-grade dark-themed web platform with crystal-clear value framing, interactive portfolio simulations, and an intuitive client dashboard preview.',
      deliverables: [
        'Complete Website Architecture & Redesign',
        'Interactive Client Portal UI/UX',
        'Custom Design System & Component Library',
        'Mobile-Responsive Wealth Simulation Calculator',
      ],
      metrics: [
        { label: 'Inbound Inquiries', value: '+185%' },
        { label: 'Time on Page', value: '3.4 min' },
        { label: 'Bounce Rate', value: '-42%' },
      ],
      tags: ['Website Redesign', 'FinTech UI/UX', 'Conversion Architecture'],
    },
    {
      id: 'aura-capital',
      title: 'Aura Capital Partners',
      category: 'Website Redesign',
      shortDesc:
        'Modern investment advisory homepage and client experience engineered to establish immediate institutional credibility.',
      image: auraCapitalImg,
      clientType: 'Investment Management',
      year: '2026',
      results: '+140% Increase in Consultation Bookings',
      challenge:
        'Prospective clients were overwhelmed by text-heavy pages and unclear advisory specializations, leading to high abandonment rates on consultation booking forms.',
      solution:
        'Restructured the user journey into an elegant, story-driven progression highlighting performance benchmarks, bespoke wealth strategies, and seamless advisor scheduling.',
      deliverables: [
        'Strategic UX Audit & Information Architecture',
        'Full Responsive Website Design',
        'Consultation Booking Funnel Optimization',
        'Performance Metrics Visualization',
      ],
      metrics: [
        { label: 'Consultations Booked', value: '+140%' },
        { label: 'Mobile Conversion', value: '+92%' },
        { label: 'Brand Trust Score', value: '98/100' },
      ],
      tags: ['Investment Advisory', 'Responsive Design', 'Lead Generation'],
    },
    {
      id: 'axon-ops',
      title: 'Axon Operations Cloud',
      category: 'Landing Page',
      shortDesc:
        'High-converting B2B SaaS marketing website and self-serve onboarding flow for an enterprise workflow automation engine.',
      image: axonImg,
      clientType: 'Enterprise B2B Software',
      year: '2025',
      results: '3.2x Demo Request Rate',
      challenge:
        'The previous product site relied heavily on abstract technical jargon, causing potential enterprise buyers to leave without understanding the core workflow benefits.',
      solution:
        'Crafted a high-clarity landing page with interactive product demonstrations, customer ROI proof strips, and a streamlined demo request flow.',
      deliverables: [
        'High-Converting SaaS Landing Page',
        'Product Feature Interactive Walkthrough',
        'Enterprise Lead Capture Funnel',
        'Comprehensive Micro-Interactions',
      ],
      metrics: [
        { label: 'Demo Request Lift', value: '3.2x' },
        { label: 'Form Completion', value: '78%' },
        { label: 'Page Load Speed', value: '0.8s' },
      ],
      tags: ['SaaS Landing Page', 'Product UI', 'Conversion Rate Optimization'],
    },
    {
      id: 'lumina-architects',
      title: 'Lumina Architectural Studio',
      category: 'UI/UX Design',
      shortDesc:
        'Immersive portfolio and high-end client acquisition experience for an architectural firm specializing in modern luxury residences.',
      image: architectImg,
      clientType: 'Architecture & Spatial Design',
      year: '2025',
      results: '+210% Project Inquiries Over $1M Scope',
      challenge:
        'Their past portfolio was a flat image gallery without context, pricing framing, or a clear path for serious prospective clients to initiate commissions.',
      solution:
        'Created a tactile, editorial showcase highlighting spatial concepts, material studies, and a structured commission intake questionnaire.',
      deliverables: [
        'Editorial Grid System & Showcase',
        'Interactive Project Blueprint Viewer',
        'High-Ticket Commission Inquiry Flow',
        'Fast Progressive Image Loading',
      ],
      metrics: [
        { label: 'Commission Pipeline', value: '$8.4M' },
        { label: 'Gallery Engagement', value: '+160%' },
        { label: 'Inquiry Quality', value: 'High' },
      ],
      tags: ['Portfolio Showcase', 'Luxury Brand', 'Editorial UI'],
    },
    {
      id: 'vanguard-legal',
      title: 'Vanguard Corporate Counsel',
      category: 'Service Business',
      shortDesc:
        'Trust-first digital presence and practice area navigation for a commercial law and cross-border M&A firm.',
      image: auraCapitalImg,
      clientType: 'Corporate Legal Advisory',
      year: '2025',
      results: '+95% Inbound Retainer Inquiries',
      challenge:
        'Traditional legal websites tend to be dry, impenetrable, and indistinguishable from competitors, failing to attract forward-thinking corporate clients.',
      solution:
        'Designed a commanding, modern web experience with practice-specific problem framing, partner expertise profiles, and frictionless inquiry forms.',
      deliverables: [
        'Practice Area Information Architecture',
        'Partner Profile & Thought Leadership Hub',
        'Secure Client Intake Funnel',
        'Full Accessibility Compliance (WCAG AA)',
      ],
      metrics: [
        { label: 'Retainer Inquiries', value: '+95%' },
        { label: 'Mobile Readability', value: '100%' },
        { label: 'Client Retention', value: '4.9/5' },
      ],
      tags: ['Service Business', 'Corporate Law', 'WCAG Accessible'],
    },
    {
      id: 'horizon-ventures',
      title: 'Horizon Venture Partners',
      category: 'Business Website',
      shortDesc:
        'Next-generation portfolio directory and founder application platform for an early-stage fintech seed fund.',
      image: ventureImg,
      clientType: 'Venture Capital',
      year: '2026',
      results: '4x Qualified Founder Pitch Submissions',
      challenge:
        'A generic website failed to attract visionary tech founders and did not accurately represent the fund’s modern tech-forward investment philosophy.',
      solution:
        'Built a clean, dynamic portfolio interface with real-time fund metrics, founder testimonials, and an interactive pitch intake portal.',
      deliverables: [
        'Venture Fund Digital Identity & Web',
        'Interactive Portfolio Grid & Filters',
        'Founder Pitch Intake Optimization',
        'Fluid Responsive Layouts',
      ],
      metrics: [
        { label: 'Founder Inbound', value: '4x' },
        { label: 'Mobile Pitch Submissions', value: '+120%' },
        { label: 'Brand Recognition', value: '+85%' },
      ],
      tags: ['Venture Capital', 'Interactive Grid', 'Founder Portal'],
    },
  ];

  const categories = ['All', 'Business Website', 'Landing Page', 'UI/UX Design', 'Website Redesign', 'Service Business'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 sm:py-32 relative bg-[#070b14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
              <span>Case Studies</span>
              <span className="text-slate-600">·</span>
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 [text-wrap:balance]">
              Selected Work
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal">
              A collection of websites, landing pages, and digital experiences designed
              to help businesses present themselves better online and convert visitors into clients.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#0a1022] border border-slate-800 rounded-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Showcase: Asymmetric & High Elevation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-[#090f20] border border-slate-800/90 hover:border-blue-500/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/10 flex flex-col justify-between"
            >
              {/* Project Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090f20] via-black/20 to-transparent opacity-80" />

                {/* Metric Badge floating on preview */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-medium text-blue-300 px-2.5 py-1 rounded-md bg-[#070c18]/90 backdrop-blur-md border border-blue-500/30">
                    {project.results}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category & Client Type */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span className="text-blue-400 font-semibold">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.clientType}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Bottom Row / View Project Trigger */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                    <span>{project.year}</span>
                    <span>·</span>
                    <span>Delivered</span>
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl bg-[#0a1124] border border-slate-700/80 shadow-2xl overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#0d152c] border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                  {activeModalProject.category}
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-xs text-slate-400 font-medium">
                  {activeModalProject.clientType}
                </span>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {activeModalProject.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {activeModalProject.shortDesc}
                </p>
              </div>

              {/* Quantified Metrics */}
              <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                {activeModalProject.metrics.map((m, i) => (
                  <div key={i}>
                    <div className="text-xl sm:text-2xl font-bold text-blue-400 tabular-nums">
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-[#0c142b] border border-slate-800">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-2">
                    The Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeModalProject.challenge}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#0c142b] border border-slate-800">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
                    The Strategic Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeModalProject.solution}
                  </p>
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Scope of Work Delivered
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProject.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA footer in modal */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  Interested in similar outcomes for your business?
                </span>
                <button
                  onClick={() => {
                    setActiveModalProject(null);
                    onStartProject();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md transition-colors cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
