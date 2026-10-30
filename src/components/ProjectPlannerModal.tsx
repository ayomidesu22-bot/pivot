import React, { useState } from 'react';
import { X, Check, ArrowRight, Calculator, Sparkles } from 'lucide-react';

interface ProjectPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyPlan: (details: { service: string; budget: string; scopeSummary: string }) => void;
}

export const ProjectPlannerModal: React.FC<ProjectPlannerModalProps> = ({
  isOpen,
  onClose,
  onApplyPlan,
}) => {
  const [projectGoal, setProjectGoal] = useState<string>('Website Redesign');
  const [pageScope, setPageScope] = useState<string>('5–10 Key Pages');
  const [timeline, setTimeline] = useState<string>('3–4 Weeks');
  const [features, setFeatures] = useState<string[]>([
    'Interactive UI / Prototypes',
    'Conversion Funnel Strategy',
  ]);

  if (!isOpen) return null;

  const goals = [
    'Brand New Website',
    'Website Redesign',
    'High-Converting Landing Page',
    'UI/UX Design & Prototype',
  ];

  const scopes = [
    '1–3 Pages (Focused Launch)',
    '5–10 Key Pages (Standard Business)',
    '12+ Pages (Comprehensive Platform)',
  ];

  const availableFeatures = [
    'Conversion Funnel Strategy',
    'Interactive UI / Prototypes',
    'Custom CMS Integration',
    'SEO Architecture Setup',
    'Copywriting & Messaging Polish',
  ];

  const toggleFeature = (feat: string) => {
    if (features.includes(feat)) {
      setFeatures(features.filter((f) => f !== feat));
    } else {
      setFeatures([...features, feat]);
    }
  };

  const getEstimatedBudget = () => {
    if (projectGoal === 'High-Converting Landing Page') return '$500 – $1k';
    if (pageScope.startsWith('12+')) return '$2k – $3k';
    if (pageScope.startsWith('5–10')) return '$1.5k – $2.5k';
    return '$1k – $2k';
  };

  const handleConfirm = () => {
    const summary = `Project: ${projectGoal} | Scope: ${pageScope} | Desired Timeline: ${timeline} | Key Features: ${features.join(', ')}`;
    onApplyPlan({
      service: projectGoal,
      budget: getEstimatedBudget(),
      scopeSummary: summary,
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-[#0a1124] border border-slate-700/80 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0d152c] border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Interactive Project Scope Planner</h3>
              <p className="text-xs text-slate-400">Configure your parameters to calculate roadmap & budget</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Goal */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2.5">
              1. What is your primary objective?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {goals.map((g) => (
                <button
                  type="button"
                  key={g}
                  onClick={() => setProjectGoal(g)}
                  className={`p-3 text-left rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                    projectGoal === g
                      ? 'bg-blue-600/20 border-blue-500 text-blue-300 font-semibold'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Scope */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2.5">
              2. Estimated website scale
            </label>
            <div className="grid grid-cols-1 gap-2">
              {scopes.map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => setPageScope(s)}
                  className={`p-3 text-left rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                    pageScope === s
                      ? 'bg-blue-600/20 border-blue-500 text-blue-300 font-semibold'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2.5">
              3. Desired strategic capabilities
            </label>
            <div className="flex flex-wrap gap-2">
              {availableFeatures.map((f) => {
                const isSelected = features.includes(f);
                return (
                  <button
                    type="button"
                    key={f}
                    onClick={() => toggleFeature(f)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium border flex items-center gap-1.5 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600/20 border-blue-500 text-blue-300'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Check className={`w-3.5 h-3.5 ${isSelected ? 'opacity-100' : 'opacity-30'}`} />
                    <span>{f}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Estimation Summary Box */}
          <div className="p-4 rounded-xl bg-[#080e1e] border border-blue-500/30 flex items-center justify-between">
            <div>
              <div className="text-xs text-slate-400">Estimated Investment Bracket</div>
              <div className="text-xl font-bold text-white mt-0.5">
                {getEstimatedBudget()}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-400">Delivery Window</div>
              <div className="text-sm font-semibold text-blue-400 mt-0.5">
                {timeline}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span>Apply To Inquiry Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
