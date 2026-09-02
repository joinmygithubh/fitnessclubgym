import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_LIST, GET_WHATSAPP_LINK } from '../constants';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import ScrollReveal from '../components/common/ScrollReveal';
import AnimatedCounter from '../components/common/AnimatedCounter';

const Services = () => {
  return (
    <div className="relative min-h-screen py-16 sm:py-20 lg:py-28 overflow-hidden">
      
      {/* LAYER 1: 1920px High-Res Background Image & LAYER 2: Transparent Dark Overlay (50% opacity) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/services-hero-bg.jpg"
          alt="Energetic Workout Services Background"
          className="w-full h-full object-cover object-[50%_25%] sm:object-[50%_30%] md:object-center filter brightness-95 contrast-[1.03]"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* LAYER 3: Page Content / Text (Top Layer) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
        
        {/* Page Header */}
        <ScrollReveal variant="fade-up" delay={0} className="space-y-4 max-w-3xl">
          <span className="editorial-tag text-amber-400 text-xs sm:text-sm block font-bold tracking-widest drop-shadow-md">
            WORKOUT PROGRAMS & OFFERINGS
          </span>
          <h1 className="text-5xl sm:text-7xl font-display font-extrabold text-white uppercase tracking-tight leading-none drop-shadow-lg">
            OUR FITNESS <span className="gold-gradient-text">SERVICES</span>
          </h1>
          <p className="text-slate-200 text-lg font-sans font-medium leading-relaxed pt-2 drop-shadow-md">
            Explore dedicated training programs designed to help you build strength, burn calories, and achieve consistent progress.
          </p>
        </ScrollReveal>

        {/* Services Editorial List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_LIST.map((service, index) => {
            const formattedNum = String(index + 1).padStart(2, '0');
            return (
              <ScrollReveal key={service.id} variant="fade-up" delay={index * 60}>
                <div
                  className="p-8 sm:p-10 rounded-3xl bg-[#11141c]/85 backdrop-blur-md border border-white/10 hover:border-amber-500/40 card-hover-effect flex flex-col justify-between group space-y-6 h-full"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="editorial-number text-amber-400 text-3xl font-extrabold">
                        <AnimatedCounter value={formattedNum} />
                      </span>
                      <span className="editorial-tag text-[10px] text-slate-300 font-bold">PROGRAM {formattedNum}</span>
                    </div>

                    <h3 className="text-3xl font-display font-extrabold text-white uppercase tracking-tight group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-200 font-sans leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <a
                      href={GET_WHATSAPP_LINK(`Hello Fitness Club Gym, I would like to inquire about ${service.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-display font-extrabold uppercase tracking-widest text-emerald-400 hover:text-emerald-300 transition-colors group/link"
                    >
                      <MessageSquare className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                      <span>INQUIRE VIA WHATSAPP</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Guidance Banner */}
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="p-10 sm:p-14 rounded-3xl bg-[#11141c]/85 backdrop-blur-md border border-amber-500/40 text-center space-y-6 card-hover-effect">
            <span className="editorial-tag text-xs text-amber-400 block font-bold">PERSONALIZED GUIDANCE</span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white uppercase tracking-tight">
              Need Guidance Choosing The Right Program?
            </h2>
            <p className="text-slate-200 text-sm max-w-xl mx-auto font-sans font-medium">
              Contact Fitness Club Gym directly or visit us in Sehatpur, Faridabad to discuss your fitness goals with our team.
            </p>
            
            <div className="pt-2 flex justify-center">
              <Link
                to="/contact"
                className="px-9 py-4 bg-amber-500 hover:bg-amber-400 text-black font-display font-extrabold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg inline-flex items-center gap-2 hover:scale-105 active:scale-95 group"
              >
                <span>CONTACT US</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default Services;
