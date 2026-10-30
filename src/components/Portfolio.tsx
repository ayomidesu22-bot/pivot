import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Check, ChevronDown, ChevronUp } from 'lucide-react';

export interface Project {
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
  const [showAll, setShowAll] = useState<boolean>(false);
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'vertex-wealth',
      title: 'Vertex Wealth & Capital Advisory',
      category: 'Business Website',
      shortDesc:
        'A comprehensive institutional web presence and client acquisition platform engineered for private wealth managers and family offices. Designed with authoritative typography, trust signals, and an intuitive client intake workflow that turns visitors into qualified consultations.',
      image:
        'https://res.cloudinary.com/hrgw9hui/image/upload/v1793366117/25332547_web_pages_presentation_mock_up_05-Recovered-Recovered-Recovered-bi.png',
      clientType: 'Private Wealth & Asset Advisory',
      year: '2026',
      results: '+185% Qualified Inquiries',
      challenge:
        'Vertex had an outdated digital identity with poor hierarchy that failed to instill immediate confidence in high-net-worth investors and family offices.',
      solution:
        'Designed an institutional dark-mode platform with strategic trust signals, bespoke typography, interactive wealth projection tools, and a frictionless intake workflow.',
      deliverables: [
        'Complete Website Architecture & Redesign',
        'Interactive Client Portal UI/UX',
        'Custom Design System & Tokens',
        'Mobile-Responsive Wealth Simulation Calculator',
      ],
      metrics: [
        { label: 'Inbound Inquiries', value: '+185%' },
        { label: 'Avg Session Dwell', value: '3.8 min' },
        { label: 'Bounce Rate', value: '-44%' },
      ],
      tags: ['Business Website', 'Wealth Advisory', 'Conversion Funnel'],
    },
    {
      id: 'aura-fintech',
      title: 'Aura Investment Dashboard & Suite',
      category: 'UI/UX Design',
      shortDesc:
        'Next-generation portfolio visualization and multi-asset trading interface with fluid micro-interactions, dark-mode contrast hierarchy, and touch-optimized data telemetry to eliminate cognitive friction for active capital allocators.',
      image:
        'https://res.cloudinary.com/hrgw9hui/image/upload/v1793366117/25332547_web_pages_presentation_mock_up_05jn.png',
      clientType: 'FinTech & Asset Management',
      year: '2026',
      results: '+72% User Engagement Retention',
      challenge:
        'Investors struggled to navigate dense multi-asset financial charts on mobile and desktop without friction, cognitive fatigue, or slow execution lag.',
      solution:
        'Crafted a high-clarity dashboard interface featuring modular data widgets, interactive performance graphs, and frictionless execution pathways.',
      deliverables: [
        'Interactive Dashboard UI/UX & Wireframing',
        'Dark/Light Dynamic Financial Design System',
        'Real-time Market Telemetry Visualizations',
        'Responsive Mobile Web App Layouts',
      ],
      metrics: [
        { label: 'Retention Rate', value: '+72%' },
        { label: 'Usability Score', value: '98/100' },
        { label: 'Action Latency', value: '<120ms' },
      ],
      tags: ['UI/UX Design', 'FinTech Dashboard', 'Data Visualization'],
    },
    {
      id: 'crestline-capital',
      title: 'Crestline Private Equity & Capital Partners',
      category: 'Business Website',
      shortDesc:
        'An authoritative institutional digital hub featuring deal portfolio filtering, LP investor portal access, and executive leadership credentials engineered to inspire allocator confidence and accelerate fundraising rounds.',
      image:
        'https://res.cloudinary.com/hrgw9hui/image/upload/v1793368616/25332547_web_pages_presentation_mock_up_05ttyk.png',
      clientType: 'Private Equity & Asset Management',
      year: '2026',
      results: '+175% LP Inquiries',
      challenge:
        'Crestline’s legacy web presence lacked proof of transaction velocity and presented outdated fund materials that caused allocator skepticism during due diligence.',
      solution:
        'Engineered an ultra-clean corporate identity system highlighting historic IRR metrics, deal case studies, and a gated investor relationship portal.',
      deliverables: [
        'Institutional Web Architecture',
        'Deal Track Record Filtering Matrix',
        'Gated LP Data Room UI',
        'Executive Bios & Insights Hub',
      ],
      metrics: [
        { label: 'LP Inquiries', value: '+175%' },
        { label: 'Time on Page', value: '4.2 min' },
        { label: 'Mobile Score', value: '99/100' },
      ],
      tags: ['Business Website', 'Private Equity', 'Capital Raising'],
    },
    {
      id: 'axon-saas',
      title: 'Axon Cloud Enterprise Funnel',
      category: 'Landing Page',
      shortDesc:
        'A high-impact, objection-handling landing page designed to capture enterprise buying intent and accelerate software sales cycles. Combines live feature previews, transparent proof points, and single-click booking to maximize demo conversions.',
      image:
        'https://res.cloudinary.com/hrgw9hui/image/upload/v1793366121/25332547_web_pages_presentation_mock_up_05ghckjv.png',
      clientType: 'Enterprise B2B Software',
      year: '2025',
      results: '3.2x Demo Request Lift',
      challenge:
        'The previous product site relied on abstract technical jargon, causing potential enterprise buyers to bounce without booking demonstrations.',
      solution:
        'Engineered an objection-handling narrative layout with live interactive product tours, social proof strips, and a streamlined booking form.',
      deliverables: [
        'High-Converting SaaS Landing Page Architecture',
        'Interactive Product Feature Walkthrough',
        'Enterprise Lead Capture & Qualification Funnel',
        'Ultra-fast Web Performance & Core Web Vitals',
      ],
      metrics: [
        { label: 'Demo Request Lift', value: '3.2x' },
        { label: 'Form Completion', value: '78%' },
        { label: 'Page Load Speed', value: '0.7s' },
      ],
      tags: ['Landing Page', 'B2B SaaS', 'Conversion Rate Optimization'],
    },
    {
      id: 'solstice-ai',
      title: 'Solstice AI Workflow & Operations Suite',
      category: 'UI/UX Design',
      shortDesc:
        'Tactile canvas interface and node-based workflow builder designed to make complex multi-agent orchestrations accessible and visually intuitive for enterprise engineering teams.',
      image:
        'https://res.cloudinary.com/hrgw9hui/image/upload/v1793368617/25332547_web_pages_presentation_mock_up_05jui.png',
      clientType: 'Artificial Intelligence & Automation',
      year: '2026',
      results: '+84% Task Speed Velocity',
      challenge:
        'Engineers faced cognitive friction navigating multiple nested configuration dialogs in legacy node-based automation tools.',
      solution:
        'Developed a fluid infinite-canvas UX with contextual action palettes, magnetic snapping, and real-time execution visualizers.',
      deliverables: [
        'Infinite Canvas UI/UX & Wireframing',
        'Modular Node Component Library',
        'Real-Time Execution State Visuals',
        'Light/Dark Theme Design Tokens',
      ],
      metrics: [
        { label: 'Task Speed', value: '+84%' },
        { label: 'Onboarding Time', value: '-60%' },
        { label: 'User Satisfaction', value: '4.9/5' },
      ],
      tags: ['UI/UX Design', 'AI Workflow', 'Infinite Canvas'],
    },
    {
      id: 'primestone-advisory',
      title: 'PrimeStone Strategic Advisory',
      category: 'Website Redesign',
      shortDesc:
        'End-to-end digital brand overhaul repositioning a legacy corporate advisory firm for premium market leadership. Highlights transaction track records, leadership credentials, and strategic insights to win high-ticket executive mandates.',
      image:
        'https://res.cloudinary.com/hrgw9hui/image/upload/v1793366123/25332547_web_pages_presentation_mock_up_05nb_j.png',
      clientType: 'Corporate Advisory & M&A',
      year: '2026',
      results: '+140% Consultation Bookings',
      challenge:
        'Their legacy website appeared dated and indistinguishable from competitors, creating hesitation among high-ticket corporate leaders.',
      solution:
        'Built a clean, commanding editorial digital experience highlighting deal track records, partner credentials, and strategic insights.',
      deliverables: [
        'Strategic UX Audit & Competitive Positioning',
        'Full Responsive Website Redesign',
        'Executive Leadership & Case Study Showcase',
        'Direct Consultation Intake Integration',
      ],
      metrics: [
        { label: 'Consultations Booked', value: '+140%' },
        { label: 'Mobile Conversion', value: '+88%' },
        { label: 'Brand Prestige Score', value: '96/100' },
      ],
      tags: ['Website Redesign', 'Corporate Advisory', 'Brand Authority'],
    },
    {
      id: 'helios-cloud',
      title: 'Helios Hyper-Scale Cloud Infrastructure',
      category: 'Landing Page',
      shortDesc:
        'Conversion-engineered technical product page communicating serverless speed, uptime reliability, and developer adoption with interactive command-line simulations.',
      image:
        'https://res.cloudinary.com/hrgw9hui/image/upload/v1793368617/25332547_web_pages_presentation_mock_up_05_2.png',
      clientType: 'Cloud & DevOps Infrastructure',
      year: '2026',
      results: '4.1x Free Trial Starts',
      challenge:
        'Developers and CTOs were bouncing because previous marketing copy felt vague and lacked interactive code-level proof points.',
      solution:
        'Built an interactive terminal playground, real-time latency ping bench, and single-click GitHub OAuth signup flow right in the hero viewport.',
      deliverables: [
        'Technical Landing Page Architecture',
        'Interactive CLI Simulator Component',
        'Single-Click Sign-up Pathway',
        'Ultra-Low TTFB Web Performance',
      ],
      metrics: [
        { label: 'Trial Signups', value: '4.1x' },
        { label: 'Dev Engagement', value: '+135%' },
        { label: 'Core Web Vitals', value: '100/100' },
      ],
      tags: ['Landing Page', 'DevOps & Cloud', 'Developer Experience'],
    },
    {
      id: 'novus-consulting',
      title: 'Novus Global Management Consulting',
      category: 'Website Redesign',
      shortDesc:
        'Complete digital brand modernization transforming an archaic corporate portal into a modern thought leadership destination with sector-specific engagement funnels.',
      image:
        'https://res.cloudinary.com/hrgw9hui/image/upload/v1793368618/25332547_web_pages_presentation_mock_up_05-Recoverederctvhb.png',
      clientType: 'Executive Strategy & Transformation',
      year: '2026',
      results: '+160% High-Value RFP Requests',
      challenge:
        'The firm’s 10-year-old site buried valuable whitepapers and failed to convert Fortune 500 corporate decision makers.',
      solution:
        'Restructured the site around client sector challenges, interactive research libraries, and friction-free partner consultation scheduling.',
      deliverables: [
        'Strategic Information Architecture',
        'Thought Leadership Hub & Whitepaper Gating',
        'Executive Team Showcase',
        'Global Multi-Region Navigation',
      ],
      metrics: [
        { label: 'RFP Inbound', value: '+160%' },
        { label: 'Whitepaper Downloads', value: '5.2k+' },
        { label: 'Bounce Rate', value: '-52%' },
      ],
      tags: ['Website Redesign', 'Management Consulting', 'Executive B2B'],
    },
    {
      id: 'vesper-luxury',
      title: 'Vesper Precision Timepieces & Horology',
      category: 'E-commerce & Growth',
      shortDesc:
        'Ultra-high-definition digital boutique featuring 360-degree watch detail views, bespoke strap customizer, and seamless white-glove concierge checkout.',
      image:
        'https://res.cloudinary.com/hrgw9hui/image/upload/v1793368617/25332547_web_pages_presentation_mock_up_05.jpg',
      clientType: 'Luxury Horology & Direct Retail',
      year: '2026',
      results: '+55% Direct Order Conversion',
      challenge:
        'Collectors hesitated purchasing high-ticket luxury timepieces online without tactile product depth and immediate personal support.',
      solution:
        'Crafted a museum-grade digital boutique with macro-detail zooms, provenance timeline, and instant WhatsApp concierge chat.',
      deliverables: [
        'Luxury Horology E-Commerce UI',
        'Interactive 360 Product Inspection',
        'Bespoke Customization Studio',
        'Frictionless VIP Checkout Flow',
      ],
      metrics: [
        { label: 'Order Conversion', value: '+55%' },
        { label: 'Avg Basket Size', value: '$2,450' },
        { label: 'Concierge Inquiries', value: '+210%' },
      ],
      tags: ['E-commerce & Growth', 'Luxury Retail', 'High-Ticket Checkout'],
    },
    {
      id: 'elysium-architecture',
      title: 'Elysium Architectural Design & Master Planning',
      category: 'Business Website',
      shortDesc:
        'Architectural portfolio platform designed to showcase monumental projects with cinematic full-bleed viewports, project specification drawer modals, and client inquiry pipelines.',
      image:
        'https://res.cloudinary.com/hrgw9hui/image/upload/v1793368619/25332547_web_pages_presentation_mock_up_05rtcyhv.png',
      clientType: 'High-End Architecture & Urban Design',
      year: '2026',
      results: '$24M Project Inquiries Driven',
      challenge:
        'Their standard photography portfolio could not convey the spatial nuance, structural materials, or scale of their multi-million dollar civic projects.',
      solution:
        'Engineered an editorial architectural grid with blueprint overlays, material sample drawers, and bespoke project storyboards.',
      deliverables: [
        'Full-Bleed Architectural Portfolio System',
        'Interactive Blueprint & Material Drawer',
        'High-Ticket Developer Intake Funnel',
        'Dynamic Media Preloading',
      ],
      metrics: [
        { label: 'Pipeline Generated', value: '$24M' },
        { label: 'Portfolio Dwell Time', value: '5.1 min' },
        { label: 'Inquiry Quality', value: '98%' },
      ],
      tags: ['Business Website', 'Architecture & Design', 'High-Ticket Inbound'],
    },
    {
      id: 'quantex-trading',
      title: 'Quantex Real-Time Algorithmic Trading Desk',
      category: 'UI/UX Design',
      shortDesc:
        'High-density financial terminal interface offering sub-millisecond market depth visualizations, custom keyboard macro hotkeys, and modular multi-monitor layouts.',
      image:
        'https://res.cloudinary.com/hrgw9hui/image/upload/v1793368620/25332547_web_pages_presentation_mock_up_05hjk.png',
      clientType: 'Quantitative Finance & Prop Trading',
      year: '2026',
      results: '<80ms Execution Interaction',
      challenge:
        'Traders suffered from visual clutter and laggy UI state synchronization when executing high-frequency order strategies.',
      solution:
        'Created a zero-latency dark UI layout utilizing high-contrast typography, customizable order books, and hardware-accelerated charting.',
      deliverables: [
        'High-Frequency Trading Terminal UI',
        'Dynamic Order Book Depth Visuals',
        'Modular Multi-Monitor Grid Engine',
        'Keyboard Hotkey Command Palette',
      ],
      metrics: [
        { label: 'Interaction Latency', value: '<80ms' },
        { label: 'Trader Usability Score', value: '99/100' },
        { label: 'Execution Accuracy', value: '99.9%' },
      ],
      tags: ['UI/UX Design', 'Quantitative Trading', 'High-Frequency FinTech'],
    },
    {
      id: 'kinetics-commerce',
      title: 'Kinetics Direct Commerce',
      category: 'E-commerce & Growth',
      shortDesc:
        'Speed-optimized storefront engineered for sub-second page loads, instant cart drawers, and frictionless mobile checkouts that minimize cart abandonment and boost average order value across high-traffic digital retail campaigns.',
      image:
        'https://res.cloudinary.com/hrgw9hui/image/upload/v1793366124/vhvkyfh.png',
      clientType: 'Direct-To-Consumer & Retail',
      year: '2025',
      results: '+48% Checkout Conversion Rate',
      challenge:
        'Mobile visitors experienced slow loading speeds and multi-step checkout friction resulting in severe shopping cart abandonment.',
      solution:
        'Overhauled the complete product experience with 1-click buy paths, dynamic instant search, and lightning-fast edge-cached assets.',
      deliverables: [
        'Conversion-Focused E-commerce UX Design',
        'Frictionless Mobile Checkout Flow',
        'Interactive Product Lookbook & Gallery',
        'High-Performance Mobile Speed Optimization',
      ],
      metrics: [
        { label: 'Checkout Lift', value: '+48%' },
        { label: 'Mobile Load Time', value: '0.8s' },
        { label: 'Average Order Value', value: '+26%' },
      ],
      tags: ['E-commerce & Growth', 'Frictionless Checkout', 'Mobile Retail'],
    },
    {
      id: 'nexus-analytics',
      title: 'Nexus Data Intelligence Suite',
      category: 'UI/UX Design',
      shortDesc:
        'Sophisticated operational telemetry and BI platform presenting complex enterprise data streams with clarity and tactile feedback. Replaces confusing legacy tables with modular widget cards and instant keyboard shortcuts.',
      image:
        'https://res.cloudinary.com/hrgw9hui/image/upload/v1793366127/25332547_web_pages_presentation_mock_up_05nh_n.png',
      clientType: 'Data Intelligence Solutions',
      year: '2026',
      results: '4.9/5 User Usability Score',
      challenge:
        'Internal corporate teams were overwhelmed by unstructured data sets and clunky legacy software with confusing navigation.',
      solution:
        'Engineered an intuitive hierarchy featuring customizable metric tiles, unified dark-surface contrast, and keyboard shortcut navigation.',
      deliverables: [
        'Comprehensive BI Dashboard UI System',
        'Interactive Heatmaps & Financial Charts',
        'Granular Permission Management UI',
        'Production-Grade Component Figma Library',
      ],
      metrics: [
        { label: 'Usability Score', value: '4.9/5' },
        { label: 'Workflow Efficiency', value: '+65%' },
        { label: 'Daily Active Users', value: '+110%' },
      ],
      tags: ['UI/UX Design', 'Analytics Suite', 'Enterprise Software'],
    },
    {
      id: 'meridian-realty',
      title: 'Meridian Luxury Real Estate',
      category: 'Business Website',
      shortDesc:
        'Immersive portfolio and high-ticket client acquisition showcase for premier commercial and luxury residential developments. Features interactive architectural blueprints, drone viewports, and executive commission intake workflows.',
      image:
        'https://res.cloudinary.com/hrgw9hui/image/upload/v1793366128/25332547_web_pages_presentation_mock_up_05-Recoveredxku_tcjyikul.png',
      clientType: 'Luxury Commercial Property',
      year: '2025',
      results: '$12.8M Deal Inquiries Pipeline',
      challenge:
        'Their past portfolio was a flat gallery without architectural context, neighborhood data, or a structured pipeline for institutional buyers.',
      solution:
        'Created a tactile, editorial showcase featuring interactive building blueprints, drone viewports, and an executive commission intake portal.',
      deliverables: [
        'Editorial Grid System & Property Showcase',
        'Interactive Development Blueprint Viewer',
        'High-Ticket Commission Inquiry Workflow',
        'Progressive High-Res Image Optimization',
      ],
      metrics: [
        { label: 'Pipeline Generated', value: '$12.8M' },
        { label: 'Gallery Engagement', value: '+160%' },
        { label: 'Inquiry Lead Quality', value: 'High' },
      ],
      tags: ['Business Website', 'Commercial Real Estate', 'High-Ticket Inbound'],
    },
    {
      id: 'vanguard-legal',
      title: 'Vanguard Corporate Legal Counsel',
      category: 'Website Redesign',
      shortDesc:
        'Trust-first digital presence and practice area navigation for a commercial law and cross-border corporate governance firm. Translates complex legal capabilities into accessible, client-focused problem solving with direct consultation funnels.',
      image:
        'https://res.cloudinary.com/hrgw9hui/image/upload/v1793366127/25332547_web_pages_presentation_mock_up_05-Recoveredjlk.png',
      clientType: 'Cross-Border Corporate Law',
      year: '2026',
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
      tags: ['Website Redesign', 'Legal Practice', 'WCAG AA Accessible'],
    },
    {
      id: 'stratos-growth',
      title: 'Stratos Enterprise Growth Funnel',
      category: 'Landing Page',
      shortDesc:
        'Targeted, high-velocity campaign landing page built to turn cold corporate traffic into qualified enterprise demo requests. Employs focused visual narrative pacing, ROI estimation calculators, and frictionless one-click consultation forms.',
      image:
        'https://res.cloudinary.com/hrgw9hui/image/upload/v1793367268/25332547_web_pages_presentation_mock_up_05yudfufd.png',
      clientType: 'B2B Tech Scale-Up',
      year: '2026',
      results: '+220% Qualified Pipeline Value',
      challenge:
        'Stratos struggled with elongated sales cycles and high visitor drop-off caused by dense technical copy and an uninspired generic form.',
      solution:
        'Structured an objection-handling narrative layout with live demo triggers, frictionless single-step booking, and interactive value calculators.',
      deliverables: [
        'High-Converting Landing Page Design',
        'Interactive ROI Calculator UI',
        'Objection-Handling Story Arc',
        'Full Speed & SEO Optimization',
      ],
      metrics: [
        { label: 'Pipeline Value', value: '+220%' },
        { label: 'Demo Bookings', value: '3.4x' },
        { label: 'Load Speed', value: '0.6s' },
      ],
      tags: ['Landing Page', 'B2B SaaS', 'Conversion Rate Optimization'],
    },
    {
      id: 'aethel-commerce',
      title: 'Aethel Luxury Goods & Direct Commerce',
      category: 'E-commerce & Growth',
      shortDesc:
        'Atmospheric luxury retail experience blending editorial aesthetics with high-performance commerce architecture. Features interactive product lookbooks, zero-friction slide-out carting, and rapid mobile checkouts designed to elevate brand prestige.',
      image:
        'https://res.cloudinary.com/hrgw9hui/image/upload/v1793367267/vy_vyiv_yiv_uv_fuyv_iuf.png',
      clientType: 'Luxury Goods & Direct Commerce',
      year: '2026',
      results: '+64% Mobile Checkout Conversion',
      challenge:
        'High mobile cart abandonment resulted from slow page transitions, unoptimized media rendering, and an uninspired catalog presentation.',
      solution:
        'Engineered an ultra-sleek, editorial shopping experience with instant slide-out cart drawers, high-resolution fluid galleries, and one-tap checkout.',
      deliverables: [
        'Luxury E-Commerce Design System',
        'Mobile-Optimized Cart & Checkout UX',
        'Interactive Product Storyboards',
        'Lightning Fast Web Performance',
      ],
      metrics: [
        { label: 'Mobile Checkout', value: '+64%' },
        { label: 'Avg Order Value', value: '+35%' },
        { label: 'Bounce Rate', value: '-38%' },
      ],
      tags: ['E-commerce & Growth', 'Luxury Storefront', 'Conversion Optimization'],
    },
  ];

  const INITIAL_VISIBLE_COUNT = 6;

  // Show the first INITIAL_VISIBLE_COUNT items; clicking the button expands to all projects
  const displayedProjects = showAll
    ? projects
    : projects.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <section id="work" className="py-24 sm:py-32 relative bg-[#070b14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            <span>Case Studies</span>
            <span className="text-slate-600">·</span>
            <span>Selected Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 [text-wrap:balance]">
            Selected Work
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            A curated collection of websites, landing pages, and digital experiences designed
            to help businesses present themselves with authority and turn visitors into clients.
          </p>
        </motion.div>

        {/* Project Cards Showcase Grid with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl bg-[#090f20] border border-slate-800/90 hover:border-blue-500/50 overflow-hidden transition-colors duration-300 hover:shadow-2xl hover:shadow-blue-600/10 flex flex-col justify-between"
            >
              {/* Project Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={`${project.category} - ${project.title}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Graceful fallback container in case of network issues
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.classList.add(
                        'bg-gradient-to-br',
                        'from-[#0a1024]',
                        'to-[#0e1738]',
                        'flex',
                        'items-center',
                        'justify-center'
                      );
                    }
                  }}
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090f20] via-black/20 to-transparent opacity-80" />

                {/* Metric Badge floating on preview */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-medium text-blue-300 px-2.5 py-1 rounded-md bg-[#070c18]/90 backdrop-blur-md border border-blue-500/30">
                    {project.results}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category as the Primary Headline per user requirement */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-semibold bg-blue-950/70 border border-blue-800/40 px-2 py-0.5 rounded">
                      Category 0{idx + 1}
                    </span>
                    <span className="text-xs text-slate-400 truncate max-w-[150px]">
                      {project.clientType}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white group-hover:text-blue-300 transition-colors mb-1">
                    {project.category}
                  </h3>

                  {/* Project Title Subheadline */}
                  <div className="text-xs font-semibold text-blue-400/90 mb-3">
                    {project.title}
                  </div>

                  {/* Proper Comprehensive Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Bottom Row / View Project Trigger */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Delivered Project</span>
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All / Show Less Toggle Button (shown when projects > initial count) */}
        {projects.length > INITIAL_VISIBLE_COUNT && (
          <div className="mt-14 flex flex-col items-center justify-center gap-3">
            <button
              onClick={() => {
                setShowAll(!showAll);
                if (showAll) {
                  // Smoothly scroll back to section header when collapsing
                  const sectionEl = document.getElementById('work');
                  if (sectionEl) {
                    sectionEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#0d1630] to-[#121e42] border border-blue-500/40 text-white font-semibold text-sm hover:border-blue-400 hover:from-blue-900/40 hover:to-blue-800/40 shadow-lg shadow-black/40 hover:shadow-blue-600/10 transition-all cursor-pointer active:scale-95"
            >
              <span>
                {showAll ? 'Show Fewer Projects' : `View All Projects (${projects.length})`}
              </span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 text-blue-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-blue-400" />
              )}
            </button>
            <p className="text-xs text-slate-400 font-mono">
              {showAll
                ? `Showing all ${projects.length} featured works`
                : `Showing ${INITIAL_VISIBLE_COUNT} of ${projects.length} featured works`}
            </p>
          </div>
        )}
      </div>

      {/* Deep-Dive Project Modal with AnimatePresence */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
            onClick={() => setActiveModalProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-3xl rounded-2xl bg-[#0a1124] border border-slate-700/80 shadow-2xl overflow-hidden my-8"
              onClick={(e) => e.stopPropagation()}
            >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#0d152c] border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                  {activeModalProject.category}
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-xs text-slate-300 font-medium">
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
            <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden border-b border-slate-800">
              <img
                src={activeModalProject.image}
                alt={`${activeModalProject.category} - ${activeModalProject.title}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-1">
                  {activeModalProject.category}
                </div>
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </section>
  );
};
