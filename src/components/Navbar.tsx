import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { AGENT_PROFILE } from '../data/agentData';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-sky-100 bg-slate-50/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-8 px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-serif-luxury text-2xl font-semibold tracking-tight text-slate-900 transition-colors hover:text-amber-900 whitespace-nowrap shrink-0"
        >
          {AGENT_PROFILE.name}
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <a
            href="#listings"
            className="hover:text-amber-900 transition-colors whitespace-nowrap shrink-0"
          >
            Curated Listings
          </a>
          <a
            href="#negotiation"
            className="hover:text-amber-900 transition-colors whitespace-nowrap shrink-0"
          >
            Negotiation Edge
          </a>
          <a
            href="#multilingual"
            className="hover:text-amber-900 transition-colors whitespace-nowrap shrink-0"
          >
            Multilingual Reach
          </a>
          <a
            href="#track-record"
            className="hover:text-amber-900 transition-colors whitespace-nowrap shrink-0"
          >
            Track Record
          </a>
          <a
            href="#contact"
            className="hover:text-amber-900 transition-colors whitespace-nowrap shrink-0"
          >
            Direct Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a
            href={`tel:${AGENT_PROFILE.phoneRaw}`}
            className="hidden lg:flex items-center gap-2 text-xs font-mono-num font-medium text-slate-700 hover:text-amber-900 transition-colors whitespace-nowrap"
          >
            <Phone className="h-3.5 w-3.5 text-amber-800" />
            <span>{AGENT_PROFILE.phone}</span>
          </a>
          <button
            onClick={onOpenConsultation}
            className="rounded-none bg-slate-900 px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-amber-900 whitespace-nowrap shrink-0 shadow-sm"
          >
            Schedule Consultation
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-800 hover:text-slate-950"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-sky-100 bg-slate-50 px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4 text-sm font-medium text-slate-700">
            <a
              href="#listings"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-900 border-b border-sky-100"
            >
              Curated Listings
            </a>
            <a
              href="#negotiation"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-900 border-b border-sky-100"
            >
              Negotiation Edge
            </a>
            <a
              href="#multilingual"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-900 border-b border-sky-100"
            >
              Multilingual Reach
            </a>
            <a
              href="#track-record"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-900 border-b border-sky-100"
            >
              Track Record
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-900 border-b border-sky-100"
            >
              Direct Contact
            </a>
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={`tel:${AGENT_PROFILE.phoneRaw}`}
                className="flex items-center gap-2 text-xs font-mono-num font-medium text-slate-800"
              >
                <Phone className="h-4 w-4 text-amber-800" />
                <span>Call {AGENT_PROFILE.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full bg-slate-900 py-3 text-xs font-medium uppercase tracking-wider text-white text-center hover:bg-amber-900"
              >
                Schedule Consultation
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
