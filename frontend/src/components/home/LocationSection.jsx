import React from 'react';
import { BUSINESS_INFO } from '../../constants';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

const LocationSection = () => {
  return (
    <section className="py-28 lg:py-36 bg-[#0c0e14] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Location Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="editorial-tag text-amber-500 text-xs block">LOCATION & DIRECTIONS</span>
              <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white uppercase tracking-tight">
                VISIT <span className="gold-gradient-text">OUR GYM</span>
              </h2>
            </div>

            <div className="p-8 rounded-3xl bg-[#11141c] border border-white/10 space-y-4">
              <span className="editorial-tag text-[10px] text-amber-500 block">OFFICIAL ADDRESS</span>
              <p className="text-slate-200 text-sm leading-relaxed font-sans font-medium">
                {BUSINESS_INFO.address.street},<br />
                {BUSINESS_INFO.address.colony},<br />
                {BUSINESS_INFO.address.area},<br />
                {BUSINESS_INFO.address.city} - {BUSINESS_INFO.address.pincode},<br />
                {BUSINESS_INFO.address.state}, {BUSINESS_INFO.address.country}
              </p>
            </div>

            {/* Required Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-display font-extrabold text-xs uppercase tracking-widest rounded-full transition-all shadow-lg flex items-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-xs uppercase tracking-widest rounded-full transition-all border border-white/10 flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4 text-amber-400" />
                <span>VIEW LOCATION</span>
              </a>
            </div>

          </div>

          {/* Map Embed (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[460px] bg-[#11141c]">
            <iframe
              title="Fitness Club Gym Location Map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS_INFO.address.full)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LocationSection;
