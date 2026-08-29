import React from 'react';
import { BUSINESS_INFO, GET_WHATSAPP_LINK } from '../../constants';
import { Phone, MessageSquare, Instagram, Navigation } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-24 bg-[#08090c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-14 rounded-3xl bg-[#11141c] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">
          
          <div className="space-y-3 text-center lg:text-left">
            <span className="editorial-tag text-amber-500 text-xs block">DIRECT CONTACT</span>
            <h3 className="text-3xl sm:text-5xl font-display font-extrabold text-white uppercase tracking-tight">
              HAVE QUESTIONS? <span className="gold-gradient-text">REACH OUT TODAY</span>
            </h3>
            <p className="text-sm text-slate-400 max-w-xl font-sans font-medium">
              Connect with Fitness Club Gym directly for workout routines, gym timings, or membership inquiries.
            </p>
          </div>

          {/* 4 Action Buttons: CALL, WHATSAPP, GET DIRECTIONS, INSTAGRAM */}
          <div className="flex flex-wrap gap-3 shrink-0 justify-center">
            
            {/* CALL */}
            <a
              href={`tel:${BUSINESS_INFO.phones[0]}`}
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-display font-extrabold text-xs uppercase tracking-widest rounded-full transition-all shadow-md flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>CALL</span>
            </a>

            {/* WHATSAPP */}
            <a
              href={GET_WHATSAPP_LINK()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP</span>
            </a>

            {/* GET DIRECTIONS */}
            <a
              href={BUSINESS_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-xs uppercase tracking-widest rounded-full border border-white/10 transition-all flex items-center gap-2"
            >
              <Navigation className="w-4 h-4 text-amber-400" />
              <span>GET DIRECTIONS</span>
            </a>

            {/* INSTAGRAM */}
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-pink-400 font-display font-bold text-xs uppercase tracking-widest rounded-full border border-white/10 transition-all flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              <span>INSTAGRAM</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
