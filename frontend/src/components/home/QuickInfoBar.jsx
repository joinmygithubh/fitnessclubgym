import React from 'react';
import { BUSINESS_INFO } from '../../constants';
import { Clock, MapPin, Phone } from 'lucide-react';

const QuickInfoBar = () => {
  return (
    <section className="bg-[#11141c] border-b border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {/* Location */}
          <div className="flex items-center gap-4 py-2 md:py-0 md:pr-6">
            <div className="p-3 rounded-full bg-amber-500/10 text-amber-500 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="editorial-tag text-[10px] text-amber-500 block">LOCATION</span>
              <p className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                Sehatpur, Faridabad, Haryana
              </p>
            </div>
          </div>

          {/* Timings */}
          <div className="flex items-center gap-4 py-2 md:py-0 md:px-6">
            <div className="p-3 rounded-full bg-amber-500/10 text-amber-500 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="editorial-tag text-[10px] text-amber-500 block">DAILY HOURS</span>
              <p className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                05:00 AM – 10:00 AM | 05:00 PM – 10:00 PM
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 py-2 md:py-0 md:pl-6">
            <div className="p-3 rounded-full bg-amber-500/10 text-amber-500 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="editorial-tag text-[10px] text-amber-500 block">PHONE INQUIRY</span>
              <a
                href={`tel:${BUSINESS_INFO.phones[0]}`}
                className="text-xs font-bold text-white hover:text-amber-400 uppercase tracking-wider transition-colors"
              >
                +91 {BUSINESS_INFO.phones[0]}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuickInfoBar;
