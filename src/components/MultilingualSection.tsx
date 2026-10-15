import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { AGENT_PROFILE } from '../data/agentData';

interface MultilingualSectionProps {
  onOpenConsultation: () => void;
}

export const MultilingualSection: React.FC<MultilingualSectionProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'amharic' | 'tigrinya'>('overview');

  const termsDictionary = [
    {
      term: 'Earnest Money Deposit',
      amharic: 'የውል ማስያዣ ገንዘብ (Earnest Money)',
      tigrinya: 'ናይ ውዕል መተሓጋገዚ ገንዘብ',
      explanation: 'Deposit held in escrow demonstrating the buyer’s bona fide good-faith commitment.',
    },
    {
      term: 'Escalation Clause',
      amharic: 'የዋጋ ማሳደጊያ አንቀጽ (Escalation Clause)',
      tigrinya: 'ናይ ዋጋ መዕበዪ ዓንቀጽ',
      explanation: 'Pre-set incremental bidding structure that automatically beats competing offers up to your cap.',
    },
    {
      term: 'Title Insurance & Clean Deed',
      amharic: 'የባለቤትነት ማረጋገጫ ዋስትና (Title Insurance)',
      tigrinya: 'ናይ ዋናነት መድሕን ሰነድ',
      explanation: 'Legal indemnification guaranteeing zero historical liens, encumbrances, or boundary disputes.',
    },
    {
      term: 'Inspection Contingency (Form 35)',
      amharic: 'የቤት ፍተሻ መብት (Inspection Contingency)',
      tigrinya: 'ናይ ገዛ መርመራ መሰል',
      explanation: 'Statutory window to inspect foundation, sewer, roof, and HVAC to demand repair credits or cancel.',
    },
  ];

  return (
    <section id="multilingual" className="py-24 bg-sky-50/60 border-b border-sky-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-sky-200">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs uppercase tracking-widest text-amber-900 font-medium">
              Seamless Cross-Cultural Communication
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-950 text-balance">
              Multilingual Mastery in Diverse Property Markets.
            </h2>
            <p className="text-slate-700 text-base leading-relaxed font-light">
              Real estate documents are dense and legally binding. Language barriers or subtle misunderstandings can cost buyers their earnest money or lead to mispriced assets. Lemn bridges international capital, diaspora families, and local Northwest property ecosystems.
            </p>
          </div>

          {/* Interactive Language Selector Tabs */}
          <div className="flex items-center gap-1 p-1 bg-sky-200/80 border border-sky-300 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3.5 py-1.5 text-xs font-medium transition-colors ${
                activeTab === 'overview'
                  ? 'bg-amber-900 text-white shadow-xs'
                  : 'text-slate-800 hover:text-slate-950'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('amharic')}
              className={`px-3.5 py-1.5 text-xs font-medium transition-colors ${
                activeTab === 'amharic'
                  ? 'bg-amber-900 text-white shadow-xs'
                  : 'text-slate-800 hover:text-slate-950'
              }`}
            >
              አማርኛ (Amharic)
            </button>
            <button
              onClick={() => setActiveTab('tigrinya')}
              className={`px-3.5 py-1.5 text-xs font-medium transition-colors ${
                activeTab === 'tigrinya'
                  ? 'bg-amber-900 text-white shadow-xs'
                  : 'text-slate-800 hover:text-slate-950'
              }`}
            >
              ትግርኛ (Tigrinya)
            </button>
          </div>
        </div>

        {/* 3 Pillars of Language Advantage */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {AGENT_PROFILE.languages.map((lang) => (
            <div
              key={lang.code}
              className="border border-sky-200 bg-white p-8 flex flex-col justify-between space-y-6 shadow-xs hover:border-amber-700 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif-luxury text-2xl font-semibold text-slate-950">
                    {lang.name}
                  </span>
                  <span className="text-xs font-medium text-amber-900 font-mono-num">
                    {lang.nativeName}
                  </span>
                </div>
                <div className="text-xs font-medium text-slate-800 pb-2 border-b border-sky-100">
                  {lang.fluency}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  {lang.description}
                </p>
              </div>

              <div className="pt-4 border-t border-sky-100">
                <button
                  onClick={onOpenConsultation}
                  className="flex items-center gap-1.5 text-xs font-medium text-amber-900 hover:text-amber-950 transition-colors"
                >
                  <span>Book in {lang.name}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Real Estate Terms Cross-Language Translator Matrix */}
        <div className="mt-16 border border-sky-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-sky-100">
            <div>
              <div className="text-xs uppercase tracking-wider text-amber-900 font-medium">
                Contractual Precision Matrix
              </div>
              <h3 className="font-serif-luxury text-xl font-medium text-slate-950">
                Demystifying US Real Estate Legalities Across Languages
              </h3>
            </div>
            <div className="text-xs text-slate-600">
              Clear, transparent fiduciary explanations for every contract clause.
            </div>
          </div>

          <div className="mt-6 divide-y divide-sky-100">
            {termsDictionary.map((item, index) => (
              <div key={index} className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                <div className="md:col-span-3">
                  <div className="font-semibold text-sm text-slate-900">{item.term}</div>
                </div>
                <div className="md:col-span-4 space-y-1">
                  <div className="text-xs text-amber-900 font-medium">{item.amharic}</div>
                  <div className="text-xs text-slate-600">{item.tigrinya}</div>
                </div>
                <div className="md:col-span-5 text-xs text-slate-600 leading-relaxed">
                  {item.explanation}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-sky-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs text-slate-700">
              Need assistance reviewing loan documents, title commitments, or lease agreements in your preferred language?
            </span>
            <button
              onClick={onOpenConsultation}
              className="bg-amber-800 px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-white hover:bg-amber-900 transition-colors whitespace-nowrap shadow-sm"
            >
              Schedule Multilingual Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
