import React from 'react';
import { AGENT_PROFILE } from '../data/agentData';

export const AgentBio: React.FC = () => {
  const { transactionHistory, homeTypes } = AGENT_PROFILE;

  return (
    <section className="py-20 bg-white border-b border-sky-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="font-serif-luxury text-3xl font-normal text-slate-950">About Lemlem Tesfay</h2>
            <p className="text-slate-700 leading-relaxed font-light">
              With 9 years of dedicated experience in the Seattle and Puget Sound real estate market, Lemlem Tesfay brings a data-driven approach to every transaction. Specializing in residential houses, townhouses, condos, and land development, Lemlem has successfully guided clients through 37 closed sales with a total volume exceeding $27M.
            </p>
            <div className="flex flex-wrap gap-2">
              {homeTypes.map((type) => (
                <span key={type} className="px-3 py-1 bg-sky-100 text-sky-900 text-xs font-medium rounded-full">
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-900 rounded-3xl text-white shadow-lg">
              <div className="text-3xl font-semibold font-mono-num mb-1">{transactionHistory.seller.deals}</div>
              <div className="text-xs text-sky-300 uppercase tracking-wider">Seller Deals</div>
              <div className="text-sm mt-2 font-mono-num">${(transactionHistory.seller.totalValue / 1000000).toFixed(1)}M Total Value</div>
            </div>
            <div className="p-6 bg-amber-800 rounded-3xl text-white shadow-lg">
              <div className="text-3xl font-semibold font-mono-num mb-1">{transactionHistory.buyer.deals}</div>
              <div className="text-xs text-amber-100 uppercase tracking-wider">Buyer Deals</div>
              <div className="text-sm mt-2 font-mono-num">${(transactionHistory.buyer.totalValue / 1000000).toFixed(1)}M Total Value</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
