import React from 'react';
import { BUSINESS_INFO } from '../../constants';
import { Sun, Moon, Clock } from 'lucide-react';

const TimingsSection = () => {
  return (
    <section className="py-28 lg:py-36 bg-[#08090c] border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="editorial-tag text-amber-500 text-xs block">OPERATIONAL HOURS</span>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white uppercase tracking-tight">
            GYM <span className="gold-gradient-text">TIMINGS</span>
          </h2>
          <p className="text-sm text-slate-400 font-sans max-w-md mx-auto">
            Convenient morning and evening daily workout sessions in Sehatpur, Faridabad.
          </p>
        </div>

        {/* Editorial Schedule 2-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          
          {/* Morning */}
          <div className="p-10 sm:p-12 rounded-3xl bg-[#11141c] border border-white/10 hover:border-amber-500/40 transition-all text-center space-y-6 group">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 text-amber-400 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sun className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="editorial-tag text-[10px] text-slate-400 block">SESSION 01</span>
              <h3 className="text-2xl font-display font-extrabold text-white uppercase tracking-wider">MORNING</h3>
            </div>

            <div className="py-4 border-y border-white/10">
              <p className="text-3xl sm:text-4xl font-display font-extrabold text-amber-400 tracking-tight">
                {BUSINESS_INFO.timings.morning}
              </p>
            </div>

            <p className="text-xs text-slate-400 font-sans uppercase tracking-widest font-semibold">
              Daily Training Session
            </p>
          </div>

          {/* Evening */}
          <div className="p-10 sm:p-12 rounded-3xl bg-[#11141c] border border-white/10 hover:border-amber-500/40 transition-all text-center space-y-6 group">
            <div className="w-16 h-16 rounded-full bg-sky-500/10 text-sky-400 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
              <Moon className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="editorial-tag text-[10px] text-slate-400 block">SESSION 02</span>
              <h3 className="text-2xl font-display font-extrabold text-white uppercase tracking-wider">EVENING</h3>
            </div>

            <div className="py-4 border-y border-white/10">
              <p className="text-3xl sm:text-4xl font-display font-extrabold text-amber-400 tracking-tight">
                {BUSINESS_INFO.timings.evening}
              </p>
            </div>

            <p className="text-xs text-slate-400 font-sans uppercase tracking-widest font-semibold">
              Daily Training Session
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TimingsSection;
