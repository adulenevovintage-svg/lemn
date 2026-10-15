import React from 'react';
import { Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/agentData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="track-record" className="py-24 bg-white border-b border-sky-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-12 border-b border-sky-200">
          <div className="text-xs uppercase tracking-widest text-amber-900 font-medium">
            Verified Client Outcomes & Proof
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-950 text-balance">
            Real Negotiations. Tangible Client Victories.
          </h2>
          <p className="text-slate-700 text-base leading-relaxed font-light">
            Every transaction is an individualized battle for value. Read how Lemn represented buyers, sellers, and multi-family investors to secure pivotal financial outcomes.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="border border-sky-200 bg-sky-50/40 p-8 flex flex-col justify-between space-y-6 shadow-xs hover:border-amber-700 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-amber-800">
                  <Quote className="h-6 w-6 text-amber-800/80" />
                  <span className="font-mono-num text-xs font-semibold text-white bg-amber-900 px-2.5 py-1 shadow-xs">
                    {t.outcomeMetric}
                  </span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed font-light italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-sky-200 space-y-1">
                <div className="font-serif-luxury font-medium text-slate-950 text-base">
                  {t.clientName}
                </div>
                <div className="text-xs text-slate-600">
                  {t.clientRole} · {t.location}
                </div>
                <div className="text-[11px] text-amber-900 font-medium">
                  {t.transactionType}
                  {t.languageHighlight && ` · ${t.languageHighlight}`}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Micro Credibility Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-sky-50 border border-sky-200 text-xs text-slate-800">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="h-4 w-4 text-amber-800 shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-slate-900">Zero Agency Conflicts</div>
              <div className="text-slate-600">Uncompromising fiduciary allegiance</div>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="h-4 w-4 text-amber-800 shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-slate-900">NWMLS Active Member</div>
              <div className="text-slate-600">Complete real-time MLS data integration</div>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="h-4 w-4 text-amber-800 shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-slate-900">Skyline Properties Standing</div>
              <div className="text-slate-600">Washington's top independent firm</div>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="h-4 w-4 text-amber-800 shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-slate-900">Multilingual Fluency</div>
              <div className="text-slate-600">English, Amharic & Tigrinya</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
