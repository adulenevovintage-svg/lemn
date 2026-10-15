import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Languages, CheckCircle2 } from 'lucide-react';
import { AGENT_PROFILE, MULTILINGUAL_CONTENT } from '../data/agentData';

interface HeroProps {
  onOpenConsultation: () => void;
  selectedLang: 'en' | 'am' | 'ti';
  onSelectLang: (lang: 'en' | 'am' | 'ti') => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  selectedLang,
  onSelectLang,
}) => {
  const content = MULTILINGUAL_CONTENT[selectedLang];
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-100">
      {/* Background Architectural Backdrop with Subtle Scrim & Light Blue-Brown Touch */}
      <div className="absolute inset-0 z-0">
        <img
          src={AGENT_PROFILE.heroImage}
          alt="Modern Pacific Northwest luxury residence overlooking Seattle"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center opacity-30 mix-blend-luminosity filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-sky-950/70" />
        <div className="absolute inset-0 bg-amber-950/15 mix-blend-color pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:py-28 lg:px-8">
        {/* Top unboxed kicker */}
        <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider uppercase text-sky-200/80 mb-6">
          <span className="font-medium text-sky-100">{AGENT_PROFILE.brokerage}</span>
          <span aria-hidden="true" className="text-sky-800">/</span>
          <span>{AGENT_PROFILE.licenseNumber}</span>
          <span aria-hidden="true" className="text-sky-800">/</span>
          <span>Seattle & Greater USA Markets</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.15] text-balance">
              The Firm Negotiator on Your Behalf in Diverse Property Markets.
            </h1>

            <p className="text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
              Representing buyers, sellers, and investors across Seattle, the Puget Sound, and premier US markets. Combining uncompromising contract advocacy with native multilingual proficiency for seamless, zero-compromise transactions.
            </p>

            {/* Multilingual Preview Switcher Bar */}
            <div className="border border-sky-900/60 bg-slate-900/90 p-4 rounded-none backdrop-blur-sm shadow-lg">
              <div className="flex items-center justify-between gap-4 mb-2 pb-2 border-b border-sky-900/60 text-xs text-sky-300">
                <span className="flex items-center gap-1.5 font-medium text-sky-200">
                  <Languages className="h-3.5 w-3.5 text-amber-400" />
                  Multilingual Client Pledge
                </span>
                <div className="flex items-center gap-1">
                  {(['en', 'am', 'ti'] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => onSelectLang(l)}
                      className={`px-2.5 py-1 text-xs transition-colors ${
                        selectedLang === l
                          ? 'bg-amber-800 text-white font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {l === 'en' ? 'English' : l === 'am' ? 'አማርኛ' : 'ትግርኛ'}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-sm text-slate-200 italic font-light">
                "{content.negotiationPledge}"
              </p>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="group flex items-center gap-2 bg-amber-800 text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all hover:bg-amber-900 hover:shadow-lg whitespace-nowrap"
              >
                <span>{content.consultationCta}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#listings"
                className="border border-sky-800/80 bg-transparent px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-sky-100 transition-colors hover:border-sky-500 hover:text-white whitespace-nowrap"
              >
                Explore Active Listings
              </a>
            </div>

            {/* Core Commitments */}
            <div className="pt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-400" />
                Fiduciary Client Exclusivity
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-400" />
                Rigorous Form 35 Inspection Defense
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-400" />
                Cross-Border & Diaspora Wealth
              </span>
            </div>
          </div>

          {/* Right Column: Agent Portrait Frame & Fiduciary Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md border border-sky-900/80 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-sm">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-900">
                {!imgError ? (
                  <div className="relative h-full w-full">
                    <img
                      src={AGENT_PROFILE.agentPhoto}
                      alt="Lemn Tesfaye - Real Estate Broker"
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                      className="h-full w-full object-cover object-top filter saturate-110 contrast-105"
                    />
                  </div>
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-slate-900 p-6 text-center text-slate-400">
                    <ShieldCheck className="h-12 w-12 text-amber-400 mb-2" />
                    <span className="font-serif-luxury text-xl text-slate-200">{AGENT_PROFILE.name}</span>
                    <span className="text-xs text-slate-400 mt-1">{AGENT_PROFILE.title}</span>
                  </div>
                )}
                {/* Subtle caption bar on portrait */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4">
                  <div className="text-base font-serif-luxury text-white">{AGENT_PROFILE.name}</div>
                  <div className="text-xs text-sky-200">{AGENT_PROFILE.brokerage} · Washington State</div>
                </div>
              </div>

              {/* Direct Reach Strip */}
              <div className="mt-4 pt-4 border-t border-sky-900/60 flex items-center justify-between text-xs">
                <div>
                  <div className="text-slate-400">Direct Broker Line</div>
                  <a
                    href={`tel:${AGENT_PROFILE.phoneRaw}`}
                    className="font-mono-num font-medium text-slate-200 hover:text-white"
                  >
                    {AGENT_PROFILE.phone}
                  </a>
                </div>
                <div className="text-right">
                  <div className="text-slate-400">MLS Standing</div>
                  <div className="font-medium text-amber-300">Active NWMLS Broker</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Stat Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-sky-900/60">
          {AGENT_PROFILE.stats.map((s, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-serif-luxury text-3xl sm:text-4xl font-semibold text-white font-mono-num">
                {s.value}
              </div>
              <div className="text-xs font-medium text-sky-200 uppercase tracking-wider">
                {s.label}
              </div>
              <div className="text-xs text-slate-400">
                {s.context}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
