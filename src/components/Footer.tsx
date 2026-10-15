import React from 'react';
import { AGENT_PROFILE } from '../data/agentData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-sky-900/60 bg-slate-950 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 space-y-12">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 space-y-3">
            <span className="font-serif-luxury text-2xl font-semibold text-white tracking-tight">
              {AGENT_PROFILE.name}
            </span>
            <div className="text-sky-200 font-medium">
              {AGENT_PROFILE.title} · {AGENT_PROFILE.brokerage}
            </div>
            <p className="text-slate-300 font-light leading-relaxed max-w-md">
              Serving buyers, sellers, and multi-family investors throughout Seattle, King County, and the Puget Sound with relentless contract negotiation and multilingual proficiency in English, Amharic, and Tigrinya.
            </p>
          </div>

          {/* Navigation Links Mirror */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-200 mb-3">
              Navigation
            </div>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#listings" className="hover:text-white transition-colors">Curated Listings</a></li>
              <li><a href="#negotiation" className="hover:text-white transition-colors">Negotiation Edge</a></li>
              <li><a href="#multilingual" className="hover:text-white transition-colors">Multilingual Reach</a></li>
              <li><a href="#track-record" className="hover:text-white transition-colors">Track Record & Proof</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Schedule Consultation</a></li>
            </ul>
          </div>

          {/* Legal and Office Disclosures */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-200 mb-3">
              Office & Affiliation
            </div>
            <div className="space-y-1 text-slate-300">
              <div>Brokerage: <span className="text-white">{AGENT_PROFILE.brokerage}</span></div>
              <div>License: <span className="text-white font-mono-num">{AGENT_PROFILE.licenseNumber}</span></div>
              <div>Affiliation: <span className="text-white">{AGENT_PROFILE.mlsAffiliation}</span></div>
              <div>Direct Phone: <a href={`tel:${AGENT_PROFILE.phoneRaw}`} className="text-amber-400 font-mono-num hover:underline">{AGENT_PROFILE.phone}</a></div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclosure & Equal Housing Statement */}
        <div className="pt-8 border-t border-sky-900/40 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="flex flex-wrap items-center gap-3">
            <span>Equal Housing Opportunity</span>
            <span aria-hidden="true">·</span>
            <span>All information deemed reliable but not guaranteed and should be independently verified.</span>
            <span aria-hidden="true">·</span>
            <span>Properties subject to prior sale, change, or withdrawal.</span>
          </div>
          <div>
            © {new Date().getFullYear()} {AGENT_PROFILE.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
