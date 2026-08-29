import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_LIST, GET_WHATSAPP_LINK } from '../constants';
import { MessageSquare, ArrowUpRight } from 'lucide-react';

const Services = () => {
  return (
    <div className="py-20 lg:py-28 bg-[#08090c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="editorial-tag text-amber-500 text-xs block">WORKOUT PROGRAMS & OFFERINGS</span>
          <h1 className="text-5xl sm:text-7xl font-display font-extrabold text-white uppercase tracking-tight leading-none">
            OUR FITNESS <span className="gold-gradient-text">SERVICES</span>
          </h1>
          <p className="text-slate-300 text-lg font-sans font-medium leading-relaxed pt-2">
            Explore dedicated training programs designed to help you build strength, burn calories, and achieve consistent progress.
          </p>
        </div>

        {/* Services Editorial List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_LIST.map((service, index) => {
            const formattedNum = String(index + 1).padStart(2, '0');
            return (
              <div
                key={service.id}
                className="p-8 sm:p-10 rounded-3xl bg-[#11141c] border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between group space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="editorial-number text-amber-500 text-3xl font-extrabold">{formattedNum}</span>
                    <span className="editorial-tag text-[10px] text-slate-400">PROGRAM {formattedNum}</span>
                  </div>

                  <h3 className="text-3xl font-display font-extrabold text-white uppercase tracking-tight group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 font-sans leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <a
                    href={GET_WHATSAPP_LINK(`Hello Fitness Club Gym, I would like to inquire about ${service.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-display font-extrabold uppercase tracking-widest text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>INQUIRE VIA WHATSAPP</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guidance Banner */}
        <div className="p-10 sm:p-14 rounded-3xl bg-[#11141c] border border-amber-500/30 text-center space-y-6">
          <span className="editorial-tag text-xs text-amber-500 block">PERSONALIZED GUIDANCE</span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white uppercase tracking-tight">
            Need Guidance Choosing The Right Program?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto font-sans">
            Contact Fitness Club Gym directly or visit us in Sehatpur, Faridabad to discuss your fitness goals with our team.
          </p>
          
          <div className="pt-2 flex justify-center">
            <Link
              to="/contact"
              className="px-9 py-4 bg-amber-500 hover:bg-amber-400 text-black font-display font-extrabold text-xs uppercase tracking-widest rounded-full transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>CONTACT US</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
