import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../../constants';
import { Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

const MembershipCTA = () => {
  return (
    <section className="py-28 lg:py-36 bg-[#0c0e14] border-b border-white/10 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-10">
        
        <ScrollReveal variant="scale-in" delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-400 hover:border-amber-500/40 transition-colors">
            <ShieldCheck className="w-4 h-4" />
            <span className="editorial-tag text-[10px] text-amber-400">MEMBERSHIP OPPORTUNITY</span>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={100} className="space-y-4">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold text-white uppercase tracking-tighter leading-[0.95]">
            READY<br />
            <span className="gold-gradient-text">TO START?</span>
          </h2>

          <p className="text-xl sm:text-3xl font-display font-bold text-slate-200 tracking-tight">
            "Your fitness journey starts with one decision."
          </p>
        </ScrollReveal>

        {/* Pricing Notice */}
        <ScrollReveal variant="fade-up" delay={200}>
          <div className="p-8 rounded-3xl bg-[#11141c] border border-amber-500/30 max-w-xl mx-auto space-y-2 shadow-2xl card-hover-effect">
            <p className="text-lg sm:text-xl font-display font-extrabold text-amber-400 uppercase tracking-wide">
              Contact us for membership plans and pricing.
            </p>
            <p className="text-xs text-slate-400 font-sans">
              Get in touch directly to discuss customized training options and gym schedules.
            </p>
          </div>
        </ScrollReveal>

        {/* Action CTAs: JOIN NOW & CALL US */}
        <ScrollReveal variant="fade-up" delay={300} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          
          <Link
            to="/membership"
            className="w-full sm:w-auto px-10 py-4 bg-amber-500 hover:bg-amber-400 text-black font-display font-extrabold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 group"
          >
            <span>JOIN NOW</span>
            <ArrowUpRight className="w-4 h-4 stroke-[3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <a
            href={`tel:${BUSINESS_INFO.phones[0]}`}
            className="w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 border border-white/15 hover:border-amber-400/40 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>CALL US (+91 {BUSINESS_INFO.phones[0]})</span>
          </a>

        </ScrollReveal>

      </div>
    </section>
  );
};

export default MembershipCTA;
