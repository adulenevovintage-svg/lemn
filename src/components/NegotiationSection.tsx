import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import { NEGOTIATION_PILLARS } from '../data/agentData';

interface NegotiationSectionProps {
  onOpenConsultation: () => void;
}

export const NegotiationSection: React.FC<NegotiationSectionProps> = ({ onOpenConsultation }) => {
  const [clientType, setClientType] = useState<'buyer' | 'seller' | 'investor'>('buyer');
  const [propertyValue, setPropertyValue] = useState<number>(1250000);

  const discountRate = clientType === 'buyer' ? 0.042 : clientType === 'seller' ? 0.025 : 0.055;
  const estimatedImpact = Math.round(propertyValue * discountRate);
  const rateBuydownSavings = Math.round((propertyValue * 0.8) * 0.015);

  return (
    <section id="negotiation" className="py-24 bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-medium">
            Fiduciary Advocacy & Negotiation Doctrine
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-white text-balance">
            A Firm Negotiator on Your Behalf. No Concessions Left on the Table.
          </h2>
          <p className="text-slate-300 text-base leading-relaxed font-light">
            In competitive Washington markets, generic representation leaves tens of thousands of dollars behind. My negotiation strategy treats every contract clause as an economic instrument designed to defend your capital and maximize leverage.
          </p>
        </div>

        {/* 4 Pillars Editorial List */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {NEGOTIATION_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="border border-sky-900/60 bg-slate-900/90 p-8 flex flex-col justify-between space-y-6 shadow-xl rounded-3xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono-num text-sm text-amber-400 font-medium">
                    {pillar.number}.
                  </span>
                  <span className="text-xs text-sky-300 uppercase tracking-wider">
                    Core Doctrine
                  </span>
                </div>
                <h3 className="font-serif-luxury text-xl font-medium text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {pillar.summary}
                </p>
              </div>

              {/* Specific Tactics */}
              <div className="pt-4 border-t border-sky-900/60 space-y-2.5">
                <div className="text-xs font-medium uppercase tracking-wider text-sky-200">
                  Execution Tactics
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {pillar.tactics.map((t, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">―</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Negotiation Strategy Simulator */}
        <div className="mt-20 border border-sky-900/80 bg-slate-900 p-8 lg:p-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-sky-900/60">
            <div>
              <div className="flex items-center gap-2 text-xs text-amber-400 font-medium uppercase tracking-wider mb-1">
                <Calculator className="h-4 w-4 text-amber-400" />
                Interactive Leverage Simulator
              </div>
              <h3 className="font-serif-luxury text-2xl lg:text-3xl font-medium text-white">
                Simulate Your Transaction Leverage Blueprint
              </h3>
            </div>
            <div className="text-xs text-slate-300 max-w-sm">
              Adjust your transaction profile and price point to see how Lemn's negotiation strategy structures your contractual advantage.
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls */}
            <div className="lg:col-span-6 space-y-6">
              {/* Client Type Selector */}
              <div>
                <label className="block text-xs font-medium text-sky-200 uppercase tracking-wider mb-2">
                  1. Your Representation Objective
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setClientType('buyer')}
                    className={`py-3 px-3 text-xs text-center border transition-all ${
                      clientType === 'buyer'
                        ? 'border-amber-500 bg-amber-900 text-white font-semibold shadow-sm'
                        : 'border-sky-900/80 bg-slate-950 text-slate-400 hover:text-white'
                    }`}
                  >
                    Buyer Representation
                  </button>
                  <button
                    onClick={() => setClientType('seller')}
                    className={`py-3 px-3 text-xs text-center border transition-all ${
                      clientType === 'seller'
                        ? 'border-amber-500 bg-amber-900 text-white font-semibold shadow-sm'
                        : 'border-sky-900/80 bg-slate-950 text-slate-400 hover:text-white'
                    }`}
                  >
                    Listing / Seller Fiduciary
                  </button>
                  <button
                    onClick={() => setClientType('investor')}
                    className={`py-3 px-3 text-xs text-center border transition-all ${
                      clientType === 'investor'
                        ? 'border-amber-500 bg-amber-900 text-white font-semibold shadow-sm'
                        : 'border-sky-900/80 bg-slate-950 text-slate-400 hover:text-white'
                    }`}
                  >
                    Multi-Family / Investor
                  </button>
                </div>
              </div>

              {/* Price Point Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-sky-200 font-medium uppercase tracking-wider">
                    2. Target Property Value
                  </span>
                  <span className="font-mono-num text-lg font-semibold text-white">
                    ${propertyValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={500000}
                  max={4000000}
                  step={25000}
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-slate-950 cursor-pointer h-2"
                />
                <div className="flex justify-between text-[11px] font-mono-num text-slate-400">
                  <span>$500K</span>
                  <span>$1.5M</span>
                  <span>$2.5M</span>
                  <span>$4.0M+</span>
                </div>
              </div>

              {/* Negotiation Blueprint Output Details */}
              <div className="border border-sky-900/60 p-5 bg-slate-950/65 space-y-3 text-xs">
                <div className="font-semibold text-sky-200 uppercase tracking-wider">
                  Recommended Contract Stance
                </div>
                {clientType === 'buyer' && (
                  <p className="text-slate-300 leading-relaxed font-light">
                    Apply targeted Form 35 inspection credit negotiation rather than cosmetic punch-lists. Request a 2-1 permanent/temporary interest rate buy-down funded by the seller, reducing your monthly payment by an estimated <strong className="text-white font-mono-num">${Math.round(rateBuydownSavings / 12)}/month</strong>.
                  </p>
                )}
                {clientType === 'seller' && (
                  <p className="text-slate-300 leading-relaxed font-light">
                    Anchor price at market ceiling using verified comps. Impose pre-offer financing vetting on all buyer pre-approvals and restrict Form 22 loan contingency timelines to 21 days maximum, protecting your equity.
                  </p>
                )}
                {clientType === 'investor' && (
                  <p className="text-slate-300 leading-relaxed font-light">
                    Structure capitalization-rate sensitivity clauses and demand complete rent-roll & lease-estoppel verification prior to earnest money deposit going non-refundable.
                  </p>
                )}
              </div>
            </div>

            {/* Results Card */}
            <div className="lg:col-span-6 border border-sky-900/80 bg-slate-950 p-6 sm:p-8 space-y-6">
              <div className="text-xs uppercase tracking-wider text-amber-400 font-medium">
                Projected Negotiation Yield
              </div>

              <div className="space-y-1">
                <div className="text-xs text-slate-300">
                  {clientType === 'buyer' ? 'Targeted Buyer Acquisition Discount & Concessions' : clientType === 'seller' ? 'Preserved Listing Equity Above Median Comps' : 'Estimated Investment Yield Enhancement'}
                </div>
                <div className="font-serif-luxury text-4xl sm:text-5xl font-semibold text-white font-mono-num">
                  ${estimatedImpact.toLocaleString()}
                </div>
                <div className="text-xs text-slate-400 pt-1">
                  Based on Lemn's historical 4.2% buyer discount / 98.8% seller price capture ratios across King County transactions.
                </div>
              </div>

              <div className="pt-4 border-t border-sky-900/60 space-y-3 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Contract Hardening Protocol</span>
                  <span className="font-mono-num text-white">Full Escrow Defense</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Contingency Defense Window</span>
                  <span className="font-mono-num text-white">Strict Statutory Deadlines</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Multilingual Contract Review</span>
                  <span className="font-mono-num text-white">English · አማርኛ · ትግርኛ</span>
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full mt-4 flex items-center justify-center gap-2 bg-amber-800 text-white py-3.5 text-xs font-semibold uppercase tracking-wider hover:bg-amber-900 transition-colors shadow-md"
              >
                <span>Request Custom Deal Strategy</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
