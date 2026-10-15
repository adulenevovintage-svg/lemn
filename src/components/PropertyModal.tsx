import React, { useState } from 'react';
import { X, Calendar, MapPin, Bed, Bath, Maximize2, Share2, Check, Phone } from 'lucide-react';
import { Listing, AGENT_PROFILE } from '../data/agentData';

interface PropertyModalProps {
  listing: Listing | null;
  onClose: () => void;
  onScheduleTour: (listing: Listing) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({
  listing,
  onClose,
  onScheduleTour,
}) => {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!listing) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="property-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto bg-slate-950/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-sky-50/5 border border-sky-200 bg-white shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-sky-200 bg-slate-50/95 px-6 py-4 backdrop-blur-md">
          <div className="flex items-center gap-3 text-xs text-slate-700">
            <span className="font-semibold text-slate-950">MLS #{listing.mlsNumber}</span>
            <span aria-hidden="true">·</span>
            <span>{listing.neighborhood}</span>
            <span aria-hidden="true">·</span>
            <span className="text-amber-900 font-medium">{listing.status}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-700 hover:text-slate-950 border border-sky-200 hover:border-amber-700 transition-colors bg-white"
              title="Copy property link"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Share2 className="h-3.5 w-3.5" />}
              <span>{copied ? 'Copied' : 'Share'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-950 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 lg:p-8 space-y-8">
          {/* Main Gallery Display */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
              <img
                src={listing.galleryImages[activePhotoIdx] || listing.coverImage}
                alt={`${listing.title} view ${activePhotoIdx + 1}`}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-3 right-3 bg-slate-950/85 px-3 py-1 text-xs font-mono-num text-sky-100">
                {activePhotoIdx + 1} / {listing.galleryImages.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {listing.galleryImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {listing.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`relative h-16 w-24 flex-shrink-0 overflow-hidden border-2 transition-all ${
                      activePhotoIdx === idx ? 'border-amber-800' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Pricing & Key Summary Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-sky-200">
            <div>
              <div className="flex items-center gap-2 text-xs text-amber-900 mb-1">
                <MapPin className="h-3.5 w-3.5" />
                <span>{listing.neighborhood}, {listing.location}</span>
                <span aria-hidden="true">·</span>
                <span>Year Built: {listing.yearBuilt}</span>
              </div>
              <h2 id="property-modal-title" className="font-serif-luxury text-2xl sm:text-3xl font-normal text-slate-950">
                {listing.title}
              </h2>
            </div>

            <div className="text-left md:text-right">
              <div className="font-mono-num text-3xl font-semibold text-slate-950">
                ${listing.price.toLocaleString()}
              </div>
              {listing.originalPrice && listing.originalPrice !== listing.price && (
                <div className="text-xs text-slate-500 font-mono-num">
                  Original List: <span className="line-through">${listing.originalPrice.toLocaleString()}</span> (Strategic Price Revision)
                </div>
              )}
            </div>
          </div>

          {/* Key Specs Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-sky-50/70 border border-sky-200">
            <div className="flex items-center gap-3">
              <Bed className="h-5 w-5 text-amber-800" />
              <div>
                <div className="text-xs text-slate-500">Bedrooms</div>
                <div className="font-mono-num font-semibold text-slate-900">{listing.beds} Beds</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Bath className="h-5 w-5 text-amber-800" />
              <div>
                <div className="text-xs text-slate-500">Bathrooms</div>
                <div className="font-mono-num font-semibold text-slate-900">{listing.baths} Baths</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Maximize2 className="h-5 w-5 text-amber-800" />
              <div>
                <div className="text-xs text-slate-500">Living Area</div>
                <div className="font-mono-num font-semibold text-slate-900">{listing.sqft.toLocaleString()} Sq Ft</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-amber-800" />
              <div>
                <div className="text-xs text-slate-500">Lot Size</div>
                <div className="font-mono-num font-semibold text-slate-900">{listing.lotSize}</div>
              </div>
            </div>
          </div>

          {/* Description & Remarks */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
                  Architectural & Investment Narrative
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed font-light">
                  {listing.description}
                </p>
              </div>

              {/* Highlights List */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-3">
                  Distinctive Property Attributes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {listing.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-amber-800 select-none">―</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price History / Strategic Log */}
              {listing.priceHistory && listing.priceHistory.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
                    MLS Negotiation & Pricing Log
                  </h3>
                  <div className="border border-sky-200 divide-y divide-sky-100 text-xs">
                    {listing.priceHistory.map((ph, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-white">
                        <span className="font-mono-num text-slate-500">{ph.date}</span>
                        <span className="font-mono-num font-semibold text-slate-900">{ph.price}</span>
                        <span className="text-slate-600">{ph.change}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Broker Representation & Quick Action */}
            <div className="space-y-6">
              <div className="border border-sky-200 bg-white p-6 space-y-4 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-900">
                  Listing Representation
                </div>
                <div>
                  <div className="font-serif-luxury text-lg font-semibold text-slate-950">
                    {AGENT_PROFILE.name}
                  </div>
                  <div className="text-xs text-slate-700">
                    {AGENT_PROFILE.brokerage}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {AGENT_PROFILE.licenseNumber} · {AGENT_PROFILE.mlsAffiliation}
                  </div>
                </div>

                <div className="pt-2 border-t border-sky-100 flex flex-col gap-2.5">
                  <button
                    onClick={() => onScheduleTour(listing)}
                    className="w-full bg-amber-800 py-3 text-xs font-medium uppercase tracking-wider text-white hover:bg-amber-900 transition-colors shadow-sm"
                  >
                    Request Private Showing
                  </button>
                  <a
                    href={`tel:${AGENT_PROFILE.phoneRaw}`}
                    className="flex items-center justify-center gap-2 border border-sky-200 py-2.5 text-xs font-mono-num font-medium text-slate-900 hover:border-amber-800 transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-amber-800" />
                    <span>Call {AGENT_PROFILE.phone}</span>
                  </a>
                </div>

                <div className="text-[11px] text-slate-500 leading-tight">
                  Multilingual representation available in English, Amharic (አማርኛ), and Tigrinya (ትግርኛ).
                </div>
              </div>

              {/* School Districts */}
              <div className="border border-sky-200 p-4 bg-sky-50/50 space-y-2 text-xs">
                <div className="font-semibold text-slate-800">Designated Public Schools</div>
                <div className="text-slate-600">Primary: {listing.schools.elementary}</div>
                <div className="text-slate-600">Middle: {listing.schools.middle}</div>
                <div className="text-slate-600">High: {listing.schools.high}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
