import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Mail, MessageSquare, Clock, Globe, ArrowRight, ShieldCheck, Sparkles, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    projectType: 'Website Design & Redesign',
    budgetRange: '$1k – $2k',
    projectDetails: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        projectType: preselectedService,
      }));
    }
  }, [preselectedService]);

  const projectTypes = [
    'Website Design & Redesign',
    'UI/UX Design',
    'Landing Page Design',
    'Conversion-Focused Design',
    'Full Brand & Web Experience',
  ];

  const budgetRanges = [
    '$500 – $1k',
    '$1k – $1.5k',
    '$1.5k – $2k',
    '$2k – $3k',
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.businessName.trim()) newErrors.businessName = 'Please enter your company or brand name.';
    if (!formData.projectDetails.trim()) newErrors.projectDetails = 'Please share a brief note on your project goals.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate high-reliability form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      businessName: '',
      projectType: 'Website Design & Redesign',
      budgetRange: '$1k – $2k',
      projectDetails: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#070b14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Context, Direct Reach & Availability */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
                <span>Start A Project</span>
                <span className="text-slate-600">·</span>
                <span>Get In Touch</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 [text-wrap:balance]">
                Let's Build Something That Works.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8">
                Have a website idea, redesign project, or landing page in mind?
                Let's talk about what you're trying to achieve and how we can make it a reality.
              </p>

              {/* Status Indicator */}
              <div className="p-4 rounded-xl bg-[#091024] border border-blue-500/30 mb-8">
                <div className="flex items-center gap-2.5 text-xs text-white font-medium mb-1">
                  <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                  <span>Available for freelance projects and collaborations.</span>
                </div>
                <p className="text-xs text-slate-400 pl-4.5">
                  Currently booking new client projects for the upcoming cycle.
                </p>
              </div>

              {/* Direct Touchpoints */}
              <div className="space-y-4">
                {/* WhatsApp Direct */}
                <div className="flex items-start gap-3 text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-mono">Instant Chat (WhatsApp)</div>
                    <a
                      href="https://wa.me/message/CWDDSFYIVE3VB1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Message on WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Email Direct */}
                <div className="flex items-start gap-3 text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-mono">Email Directly</div>
                    <a
                      href="mailto:pitapan551@gmail.com"
                      className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                    >
                      pitapan551@gmail.com
                    </a>
                  </div>
                </div>

                {/* Physical Location */}
                <div className="flex items-start gap-3 text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-mono">Office Address</div>
                    <div className="text-sm font-semibold text-white">
                      1000 Woodward Avenue
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      Detroit, Michigan (MI) 48226, United States
                    </div>
                  </div>
                </div>

                {/* Turnaround */}
                <div className="flex items-start gap-3 text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-mono">Response Time</div>
                    <div className="text-sm text-slate-200">
                      Discovery response within 24 hours
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>100% Confidentiality & Non-Disclosure protected</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#091024] border border-slate-800 p-8 sm:p-10 shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>.
                    I've received your notes for{' '}
                    <span className="text-white font-semibold">{formData.businessName}</span> and
                    will review your project scope and get back to you within 24 hours.
                  </p>

                  <div className="w-full max-w-md p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-left text-xs text-slate-400 space-y-2 mb-8">
                    <div className="flex justify-between">
                      <span>Service:</span>
                      <span className="text-white font-medium">{formData.projectType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Budget:</span>
                      <span className="text-white font-medium">{formData.budgetRange}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Email:</span>
                      <span className="text-white font-medium">{formData.email}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Your Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-3 rounded-xl bg-[#0c142b] border text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                          errors.name ? 'border-rose-500' : 'border-slate-800 focus:border-blue-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-400 mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Your Email <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#0c142b] border text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                          errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-blue-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-400 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Business Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Business or Company Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Acme Wealth Partners"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0c142b] border text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                        errors.businessName ? 'border-rose-500' : 'border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.businessName && (
                      <p className="text-xs text-rose-400 mt-1">{errors.businessName}</p>
                    )}
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0c142b] border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    >
                      {projectTypes.map((pt) => (
                        <option key={pt} value={pt} className="bg-[#091024] text-white">
                          {pt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Range Selection */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Estimated Budget Range
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {budgetRanges.map((range) => (
                        <button
                          type="button"
                          key={range}
                          onClick={() => setFormData({ ...formData, budgetRange: range })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                            formData.budgetRange === range
                              ? 'bg-blue-600/20 border-blue-500 text-blue-300 font-semibold'
                              : 'bg-[#0c142b] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Project Details & Objectives <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Tell me about what you are trying to achieve, your timeline, or links to your current website..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#0c142b] border text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                        errors.projectDetails ? 'border-rose-500' : 'border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.projectDetails && (
                      <p className="text-xs text-rose-400 mt-1">{errors.projectDetails}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-200 active:scale-[0.99] cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Sending Inquiry...</span>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
