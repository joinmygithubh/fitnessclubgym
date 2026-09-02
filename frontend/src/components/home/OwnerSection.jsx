import React from 'react';
import { BUSINESS_INFO, GET_WHATSAPP_LINK } from '../../constants';
import { Phone, MessageSquare, ShieldCheck, Instagram } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

const OwnerSection = () => {
  return (
    <section className="py-28 lg:py-36 bg-[#0c0e14] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" delay={0} className="space-y-3 mb-16 text-left">
          <span className="editorial-tag text-amber-500 text-xs block">GYM LEADERSHIP</span>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white uppercase tracking-tight">
            MEET THE <span className="gold-gradient-text">OWNER</span>
          </h2>
        </ScrollReveal>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Large Portrait Image Column (5 Cols) */}
          <ScrollReveal variant="slide-right" delay={100} className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group bg-[#11141c] card-hover-effect">
              <img
                src="/owner.jpg"
                alt="Mr. Mohit Chillar - Owner of Fitness Club Gym"
                loading="lazy"
                className="w-full h-auto max-h-[580px] object-cover object-top filter brightness-[0.98] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="editorial-tag text-[10px] bg-amber-500 text-black px-3 py-1 rounded-full font-bold inline-block shadow-md">
                  FITNESS CLUB GYM OWNER
                </span>
              </div>
            </div>

            {/* Owner Instagram Link Directly Below Owner Photo */}
            <div className="flex justify-center pt-1">
              <a
                href={BUSINESS_INFO.ownerInstagramUrl || "https://www.instagram.com/mohit_chhillar/"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 hover:bg-amber-500/10 border border-white/10 hover:border-amber-500/40 text-slate-200 hover:text-amber-400 font-display font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md group hover:scale-105"
              >
                <Instagram className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                <span>@mohit_chhillar</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Owner Information Column (7 Cols) */}
          <ScrollReveal variant="slide-left" delay={200} className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <span className="editorial-tag text-slate-400 text-xs block">OWNER & FOUNDER</span>
              <h3 className="text-4xl sm:text-5xl font-display font-extrabold text-white uppercase tracking-tight">
                {BUSINESS_INFO.owner}
              </h3>
              <p className="text-sm font-extrabold text-amber-500 uppercase tracking-widest">
                Owner, Fitness Club Gym
              </p>
            </div>

            {/* Verified Content Box */}
            <div className="p-8 rounded-3xl bg-[#11141c] border border-white/10 space-y-4 hover:border-white/20 transition-colors">
              <p className="text-slate-200 text-base leading-relaxed font-sans font-medium">
                Mr. Mohit Chillar is the owner of Fitness Club Gym, dedicated to establishing a disciplined, supportive workout environment for members in Sehatpur, Faridabad.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed font-sans">
                Under his direction, Fitness Club Gym focuses on providing accessible strength equipment, organized daily workout timings, and a motivating fitness atmosphere.
              </p>
            </div>

            {/* Verified Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 hover:bg-white/10 hover:border-amber-500/30 transition-all">
                <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">Dedicated Gym Leadership</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 hover:bg-white/10 hover:border-amber-500/30 transition-all">
                <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">Motivating Gym Atmosphere</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phones[0]}`}
                className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-display font-extrabold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>CALL OWNER OFFICE</span>
              </a>

              <a
                href={GET_WHATSAPP_LINK('Hello Mr. Mohit Chillar, I would like to inquire about Fitness Club Gym!')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 border border-white/10 hover:border-emerald-400/40 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>CONNECT ON WHATSAPP</span>
              </a>
            </div>

          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};

export default OwnerSection;
