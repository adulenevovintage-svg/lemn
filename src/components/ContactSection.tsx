import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Send, ShieldCheck, Languages } from 'lucide-react';
import { AGENT_PROFILE } from '../data/agentData';

interface ContactSectionProps {
  prefilledListingTitle?: string;
  prefilledMls?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledListingTitle,
  prefilledMls,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [clientRole, setClientRole] = useState<'buyer' | 'seller' | 'investor' | 'general'>('buyer');
  const [preferredLang, setPreferredLang] = useState<string>('English');
  const [targetMarket, setTargetMarket] = useState('Seattle / Puget Sound');
  const [message, setMessage] = useState(
    prefilledListingTitle
      ? `Hello Lemn, I am interested in scheduling a private viewing or receiving the strategic valuation packet for MLS #${prefilledMls} (${prefilledListingTitle}).`
      : ''
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = 'Please provide your full name.';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid email is required.';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) errs.phone = 'Valid 10-digit phone number is required.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setFormSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Contact Info & Fiduciary Pledge */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-widest text-amber-400 font-medium">
                Direct Broker Engagement
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-white text-balance">
                Initiate a Confidential Strategy Session.
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Whether you are planning an immediate purchase, preparing a luxury home for market, or seeking strategic counsel on an income duplex, your inquiry receives direct personal attention.
              </p>
            </div>

            {/* Direct Contact Details */}
            <div className="border border-sky-900/80 bg-slate-900 p-6 space-y-4 shadow-xl">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-sky-300">Direct Broker Phone & SMS</div>
                  <a
                    href={`tel:${AGENT_PROFILE.phoneRaw}`}
                    className="font-mono-num text-lg font-semibold text-white hover:text-sky-200 transition-colors"
                  >
                    {AGENT_PROFILE.phone}
                  </a>
                  <div className="text-[11px] text-slate-400">Available 7 days/week for active negotiations</div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-sky-900/60">
                <Mail className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-sky-300">Official Electronic Mail</div>
                  <a
                    href={`mailto:${AGENT_PROFILE.email}`}
                    className="text-sm font-medium text-slate-200 hover:text-white transition-colors"
                  >
                    {AGENT_PROFILE.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-sky-900/60">
                <MapPin className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-sky-300">Brokerage Affiliation & Office</div>
                  <div className="text-sm font-medium text-slate-200">
                    {AGENT_PROFILE.brokerage}
                  </div>
                  <div className="text-xs text-slate-400">
                    {AGENT_PROFILE.licenseNumber} · {AGENT_PROFILE.officeAddress}
                  </div>
                </div>
              </div>
            </div>

            {/* Language & Service Guarantees */}
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-sky-200">
                <Languages className="h-4 w-4 text-amber-400 shrink-0" />
                <span>Consultations seamlessly conducted in English, Amharic (አማርኛ), or Tigrinya (ትግርኛ)</span>
              </div>
              <div className="flex items-center gap-2 text-sky-200">
                <ShieldCheck className="h-4 w-4 text-amber-400 shrink-0" />
                <span>Strict non-disclosure confidentiality on all property valuations & client disclosures</span>
              </div>
            </div>
          </div>

          {/* Right: Lead Capture Form */}
          <div className="lg:col-span-7 border border-sky-900/80 bg-slate-900 p-8 sm:p-10 shadow-2xl">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle className="h-14 w-14 text-amber-400 mx-auto stroke-1" />
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-white">
                  Strategy Request Received
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto font-light leading-relaxed">
                  Thank you, <strong className="text-white">{fullName}</strong>. Lemn Tesfaye will review your target criteria and reach out directly at <strong className="text-white">{phone}</strong> within 4 business hours in <strong className="text-white">{preferredLang}</strong>.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFullName('');
                      setEmail('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="border border-sky-700 px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-slate-300 hover:text-white hover:border-sky-500 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif-luxury text-2xl font-medium text-white mb-1">
                    Book a Fiduciary Consultation
                  </h3>
                  <p className="text-xs text-sky-200">
                    Fill out your details below to schedule an initial comparative analysis or discuss an active MLS listing.
                  </p>
                </div>

                {/* Role Selector */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-sky-200 mb-2">
                    Primary Objective
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {(['buyer', 'seller', 'investor', 'general'] as const).map((r) => (
                      <button
                        type="button"
                        key={r}
                        onClick={() => setClientRole(r)}
                        className={`py-2 px-3 text-xs text-center border transition-all ${
                          clientRole === r
                            ? 'border-amber-500 bg-amber-900 text-white font-semibold'
                            : 'border-sky-900/80 bg-slate-950 text-slate-400 hover:text-white'
                        }`}
                      >
                        {r === 'buyer' ? 'Buying Home' : r === 'seller' ? 'Selling Home' : r === 'investor' ? 'Multi-Family' : 'General Advice'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-sky-200 mb-1.5">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Daniel Haile"
                      className={`w-full bg-slate-950 border px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-400' : 'border-sky-900/80 focus:border-amber-500'
                      }`}
                    />
                    {errors.fullName && (
                      <div className="text-[11px] text-red-400 mt-1">{errors.fullName}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-sky-200 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="daniel@domain.com"
                      className={`w-full bg-slate-950 border px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-400' : 'border-sky-900/80 focus:border-amber-500'
                      }`}
                    />
                    {errors.email && (
                      <div className="text-[11px] text-red-400 mt-1">{errors.email}</div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-sky-200 mb-1.5">
                      Mobile Phone (Call / Text) *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(206) 555-0199"
                      className={`w-full bg-slate-950 border px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-400' : 'border-sky-900/80 focus:border-amber-500'
                      }`}
                    />
                    {errors.phone && (
                      <div className="text-[11px] text-red-400 mt-1">{errors.phone}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-sky-200 mb-1.5">
                      Preferred Language for Meeting
                    </label>
                    <select
                      value={preferredLang}
                      onChange={(e) => setPreferredLang(e.target.value)}
                      className="w-full bg-slate-950 border border-sky-900/80 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="English">English</option>
                      <option value="Amharic (አማርኛ)">Amharic (አማርኛ)</option>
                      <option value="Tigrinya (ትግርኛ)">Tigrinya (ትግርኛ)</option>
                      <option value="Spanish / Other">Spanish / Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-sky-200 mb-1.5">
                    Target Area or Property Details
                  </label>
                  <input
                    type="text"
                    value={targetMarket}
                    onChange={(e) => setTargetMarket(e.target.value)}
                    placeholder="e.g. Queen Anne, Licton Springs, Bellevue, or MLS #2535662"
                    className="w-full bg-slate-950 border border-sky-900/80 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-sky-200 mb-1.5">
                    Specific Negotiation or Timing Goals
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share any key requirements, price targets, or timing deadlines..."
                    className="w-full bg-slate-950 border border-sky-900/80 p-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-amber-800 text-white py-4 text-xs font-semibold uppercase tracking-wider hover:bg-amber-900 transition-colors shadow-md"
                >
                  <Send className="h-4 w-4" />
                  <span>Submit Consultation Request</span>
                </button>

                <div className="text-[11px] text-slate-400 text-center">
                  Your information is strictly protected under fiduciary broker confidentiality. No spam.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
