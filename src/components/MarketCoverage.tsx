import React from 'react';
import { MapPin } from 'lucide-react';

export const MarketCoverage: React.FC<{ onOpenConsultation: () => void }> = () => {
  const regions = [
    {
      name: 'Queen Anne & Magnolia',
      tag: 'Luxury Modern & Hillside Estates',
      characteristics: 'Prestigious enclaves, protected greenbelts, dramatic city & water vistas. High average price per square foot with strict zoning.',
      featuredAsset: 'MLS #2535662 ($2,499,000 Stream Sanctuary)',
      medianDays: '14 Days',
    },
    {
      name: 'Licton Springs & Green Lake',
      tag: 'Multi-Family Duplexes & Craftsman Assets',
      characteristics: 'High rental demand near North Seattle College, Oak Tree Plaza, and Northgate Light Rail. Exceptional house-hacking and ADU potential.',
      featuredAsset: 'MLS #2578946 ($880,000 Corner Duplex)',
      medianDays: '18 Days',
    },
    {
      name: 'Bellevue & The Eastside',
      tag: 'Executive Relocations & Tech Corridors',
      characteristics: 'Nationally ranked schools (Somerset, Newport, Bellevue High), proximity to tech employers, and competitive multi-offer escalation dynamics.',
      featuredAsset: 'Past Relocation Closing ($1,850,000)',
      medianDays: '9 Days',
    },
    {
      name: 'Ballard & Fremont',
      tag: 'Urban Infill & Modern Townhomes',
      characteristics: 'Vibrant urban villages, walkability, rapid tenant turnover, and sustained appreciation for modern energy-efficient designs.',
      featuredAsset: 'Townhome Portfolios & New Builds',
      medianDays: '12 Days',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-sky-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-sky-200">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-900 font-medium">
              Geographic & Territorial Specialization
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-slate-950 mt-2">
              Puget Sound & Greater Washington Footprint
            </h2>
          </div>
          <p className="text-xs text-slate-700 max-w-md">
            Serving buyers and sellers across King, Snohomish, and Pierce counties with granular submarket valuation data and hyper-local negotiation intelligence.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((r, i) => (
            <div
              key={i}
              className="border border-sky-200 bg-white p-6 flex flex-col justify-between space-y-4 shadow-2xs hover:border-amber-700 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1.5 text-xs text-amber-900">
                  <MapPin className="h-3.5 w-3.5 text-amber-800" />
                  <span>Seattle / WA Submarket</span>
                </div>
                <h3 className="font-serif-luxury text-lg font-semibold text-slate-950">
                  {r.name}
                </h3>
                <div className="text-xs font-medium text-slate-700">
                  {r.tag}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  {r.characteristics}
                </p>
              </div>

              <div className="pt-4 border-t border-sky-100 text-xs space-y-1.5">
                <div className="text-slate-500 text-[11px]">Representative Inventory:</div>
                <div className="font-medium text-slate-900">{r.featuredAsset}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
