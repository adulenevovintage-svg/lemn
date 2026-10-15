import React, { useState } from 'react';
import { Bed, Bath, Maximize2, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Listing, FEATURED_LISTINGS } from '../data/agentData';

interface FeaturedListingsProps {
  onSelectListing: (listing: Listing) => void;
  onScheduleTour: (listing: Listing) => void;
}

export const FeaturedListings: React.FC<FeaturedListingsProps> = ({
  onSelectListing,
  onScheduleTour,
}) => {
  const [filter, setFilter] = useState<'All' | 'Luxury' | 'Investment' | 'Closed'>('All');

  const filtered = FEATURED_LISTINGS.filter((l) => {
    if (filter === 'All') return true;
    if (filter === 'Luxury') return l.type.includes('Luxury');
    if (filter === 'Investment') return l.type.includes('Multi-Family');
    if (filter === 'Closed') return l.status === 'Closed';
    return true;
  });

  return (
    <section id="listings" className="py-24 bg-slate-50 border-b border-sky-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-sky-100">
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest text-amber-900 font-medium">
              Curated Property Portfolio
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-950 text-balance">
              Active Listings & Proven Market Represented Assets.
            </h2>
          </div>

          {/* Interactive Filter Segmented Bar (Valid Buttons, Not Pills) */}
          <div className="flex items-center gap-1 p-1 bg-sky-100/70 border border-sky-200 self-start md:self-auto">
            {(['All', 'Luxury', 'Investment', 'Closed'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap ${
                  filter === tab
                    ? 'bg-amber-900 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                {tab === 'All' ? 'All Portfolios' : tab === 'Luxury' ? 'Luxury Estates' : tab === 'Investment' ? 'Multi-Family Duplex' : 'Recent Closings'}
              </button>
            ))}
          </div>
        </div>

        {/* Listings Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between border border-sky-200 bg-white transition-all hover:border-amber-700 hover:shadow-md"
            >
              <div>
                {/* Media frame with fallback */}
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900 cursor-pointer"
                  onClick={() => onSelectListing(item)}
                >
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle top indicator bar */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between text-xs">
                    <span className="bg-slate-950/85 px-2.5 py-1 text-sky-100 font-mono-num">
                      MLS #{item.mlsNumber}
                    </span>
                    <span className="bg-white/95 px-2.5 py-1 text-slate-950 font-medium">
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  {/* Unboxed Metadata Line with typographic separators */}
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>{item.neighborhood}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.type}</span>
                    <span aria-hidden="true">·</span>
                    <span>Built {item.yearBuilt}</span>
                  </div>

                  <div>
                    <h3
                      onClick={() => onSelectListing(item)}
                      className="font-serif-luxury text-xl font-medium text-slate-950 hover:text-amber-900 cursor-pointer transition-colors leading-snug line-clamp-1"
                    >
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Quantitative Specs */}
                  <div className="flex items-center justify-between border-y border-sky-100 py-3 text-xs font-mono-num text-slate-700">
                    <span className="flex items-center gap-1.5">
                      <Bed className="h-3.5 w-3.5 text-amber-800" />
                      {item.beds} Beds
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Bath className="h-3.5 w-3.5 text-amber-800" />
                      {item.baths} Baths
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Maximize2 className="h-3.5 w-3.5 text-amber-800" />
                      {item.sqft.toLocaleString()} Sq Ft
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 pt-0 border-t border-sky-100/50 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-500 uppercase tracking-wider">
                    {item.status === 'Closed' ? 'Recorded Price' : 'Listing Price'}
                  </div>
                  <div className="font-mono-num text-2xl font-semibold text-slate-950">
                    ${item.price.toLocaleString()}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectListing(item)}
                    className="flex items-center gap-1 text-xs font-medium text-slate-900 hover:text-amber-900 transition-colors py-2 px-3 border border-sky-200 hover:border-amber-700"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => onScheduleTour(item)}
                    className="text-xs font-medium uppercase tracking-wider text-white bg-amber-800 hover:bg-amber-900 transition-colors py-2 px-3"
                  >
                    Tour
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Proof Note */}
        <div className="mt-12 p-6 bg-sky-50/70 border border-sky-200 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-slate-700">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-amber-800 shrink-0" />
            <span>
              All listings represented in full compliance with Northwest Multiple Listing Service (NWMLS) standards and Washington state real estate broker disclosure mandates.
            </span>
          </div>
          <a
            href="tel:2063759349"
            className="font-mono-num font-medium text-slate-900 hover:text-amber-900 underline whitespace-nowrap"
          >
            Inquire directly: (206) 375-9349
          </a>
        </div>
      </div>
    </section>
  );
};
