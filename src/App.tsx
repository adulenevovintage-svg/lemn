/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AgentBio } from './components/AgentBio';
import { FeaturedListings } from './components/FeaturedListings';
import { NegotiationSection } from './components/NegotiationSection';
import { MultilingualSection } from './components/MultilingualSection';
import { MarketCoverage } from './components/MarketCoverage';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PropertyModal } from './components/PropertyModal';
import { Listing } from './data/agentData';

export default function App() {
  const [selectedLang, setSelectedLang] = useState<'en' | 'am' | 'ti'>('en');
  const [activeListing, setActiveListing] = useState<Listing | null>(null);
  const [prefilledTitle, setPrefilledTitle] = useState<string>('');
  const [prefilledMls, setPrefilledMls] = useState<string>('');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScheduleTour = (listing: Listing) => {
    setPrefilledTitle(listing.title);
    setPrefilledMls(listing.mlsNumber);
    setActiveListing(null);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-sky-50/30 text-slate-900 flex flex-col font-sans-clean">
      {/* Top Navigation */}
      <Navbar onOpenConsultation={scrollToContact} />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          onOpenConsultation={scrollToContact}
          selectedLang={selectedLang}
          onSelectLang={setSelectedLang}
        />
        
        <AgentBio />

        {/* Curated Listings Section (Features Real MLS Listings from References) */}
        <FeaturedListings
          onSelectListing={(listing) => setActiveListing(listing)}
          onScheduleTour={handleScheduleTour}
        />

        {/* Firm Negotiator Framework & Interactive Leverage Simulator */}
        <NegotiationSection onOpenConsultation={scrollToContact} />

        {/* Multilingual Client Communication Engine */}
        <MultilingualSection onOpenConsultation={scrollToContact} />

        {/* Market Submarket Coverage */}
        <MarketCoverage onOpenConsultation={scrollToContact} />

        {/* Client Proof & Testimonials */}
        <TestimonialsSection />

        {/* Contact & Consultation Portal */}
        <ContactSection
          prefilledListingTitle={prefilledTitle}
          prefilledMls={prefilledMls}
        />
      </main>

      {/* Property Details Modal */}
      <PropertyModal
        listing={activeListing}
        onClose={() => setActiveListing(null)}
        onScheduleTour={handleScheduleTour}
      />

      {/* Brokerage & Legal Footer */}
      <Footer />
    </div>
  );
}
