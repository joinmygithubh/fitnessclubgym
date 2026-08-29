import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden py-14 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      
      {/* Immersive Responsive Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/gym-interior.jpg"
          alt="Fitness Club Gym Facility Interior"
          className="w-full h-full object-cover object-[center_30%] sm:object-center filter brightness-[0.82] contrast-[1.05] scale-100 sm:scale-105 transition-all duration-500"
        />
        {/* Subtle Dark Vignette Overlay preserving visual image quality & text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-[#08090c]/55 to-[#08090c]/70 sm:to-[#08090c]/80"></div>
      </div>

      {/* Main Editorial Hero Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-6 sm:space-y-10 text-left">
        
        {/* Uppercase Editorial Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-3 sm:mb-0">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span className="editorial-tag text-white tracking-widest text-[10px] sm:text-[11px]">
            FITNESS CLUB GYM • SEHATPUR, FARIDABAD
          </span>
        </div>

        {/* Responsive Editorial Display Typography Header */}
        <div className="max-w-5xl space-y-3 sm:space-y-4">
          <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[105px] font-display font-extrabold text-white uppercase tracking-tighter leading-[0.95] sm:leading-[0.9]">
            BUILD<br />
            <span className="text-slate-300">YOUR </span>
            <span className="gold-gradient-text">STRONGER</span><br />
            SELF.
          </h1>

          <p className="text-base sm:text-xl lg:text-2xl text-slate-300 max-w-2xl font-sans font-medium leading-relaxed pt-1 sm:pt-2">
            "Train with purpose. Become stronger every day."
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2 sm:pt-4">
          <Link
            to="/membership"
            className="px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-display font-extrabold text-xs sm:text-sm uppercase tracking-widest transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 hover:scale-105"
          >
            <span>JOIN NOW</span>
            <ArrowUpRight className="w-4 h-4 stroke-[3]" />
          </Link>

          <Link
            to="/gallery"
            className="px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-display font-bold text-xs sm:text-sm uppercase tracking-widest transition-all border border-white/15 backdrop-blur-md flex items-center justify-center gap-2"
          >
            <span>EXPLORE THE GYM</span>
          </Link>
        </div>

        {/* Hairline Editorial Highlights Bar */}
        <div className="pt-10 sm:pt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-white/10 max-w-5xl">
          <div className="space-y-1">
            <span className="editorial-tag text-[9px] sm:text-[10px] text-amber-500 block">FACILITY</span>
            <p className="font-display font-bold text-xs sm:text-base text-white uppercase">HEAVY FREE WEIGHTS</p>
            <p className="text-[11px] sm:text-xs text-slate-400">Barbells & dumbbells</p>
          </div>

          <div className="space-y-1">
            <span className="editorial-tag text-[9px] sm:text-[10px] text-amber-500 block">ATMOSPHERE</span>
            <p className="font-display font-bold text-xs sm:text-base text-white uppercase">BEGINNER FRIENDLY</p>
            <p className="text-[11px] sm:text-xs text-slate-400">Motivating environment</p>
          </div>

          <div className="space-y-1">
            <span className="editorial-tag text-[9px] sm:text-[10px] text-amber-500 block">STANDARDS</span>
            <p className="font-display font-bold text-xs sm:text-base text-white uppercase">CLEAN WORKOUT SPACE</p>
            <p className="text-[11px] sm:text-xs text-slate-400">Organized training area</p>
          </div>

          <div className="space-y-1">
            <span className="editorial-tag text-[9px] sm:text-[10px] text-amber-500 block">SCHEDULE</span>
            <p className="font-display font-bold text-xs sm:text-base text-white uppercase">DAILY SESSIONS</p>
            <p className="text-[11px] sm:text-xs text-slate-400">Morning & Evening</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
