import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_LIST, GET_WHATSAPP_LINK } from '../../constants';
import { ArrowUpRight, MessageSquare } from 'lucide-react';

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-28 lg:py-36 bg-[#08090c] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-12">
          <div className="space-y-3">
            <span className="editorial-number text-amber-500 text-4xl sm:text-5xl block">02</span>
            <span className="editorial-tag text-slate-400 text-xs block">PROGRAMS & TRAINING</span>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white uppercase tracking-tight">
              OUR <span className="gold-gradient-text">SERVICES</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-sans leading-relaxed">
            Targeted fitness programs crafted for strength building, body composition, cardiovascular endurance, and routine consistency.
          </p>
        </div>

        {/* Editorial Numbered Service List */}
        <div className="divide-y divide-white/10 border-b border-white/10">
          {SERVICES_LIST.map((service, index) => {
            const formattedNum = String(index + 1).padStart(2, '0');
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`py-8 sm:py-10 transition-all duration-300 group cursor-pointer ${
                  isHovered ? 'bg-white/[0.02] px-4 sm:px-6 rounded-2xl' : ''
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  
                  {/* Left: Number & Service Name */}
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span
                      className={`editorial-number text-2xl sm:text-4xl font-bold transition-colors ${
                        isHovered ? 'text-amber-500' : 'text-slate-600'
                      }`}
                    >
                      {formattedNum}
                    </span>

                    <h3
                      className={`text-2xl sm:text-4xl font-display font-extrabold uppercase tracking-tight transition-colors ${
                        isHovered ? 'text-amber-400 translate-x-2' : 'text-white'
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Right: Description & Action */}
                  <div className="flex items-center justify-between lg:justify-end gap-8 lg:max-w-xl w-full">
                    <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                      {service.description}
                    </p>

                    <a
                      href={GET_WHATSAPP_LINK(`Hello Fitness Club Gym, I would like to inquire about ${service.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full border transition-all shrink-0 ${
                        isHovered
                          ? 'bg-amber-500 text-black border-amber-500 scale-110'
                          : 'bg-white/5 text-slate-400 border-white/10'
                      }`}
                      title={`Inquire about ${service.title}`}
                    >
                      <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* View All Details Action */}
        <div className="pt-4 text-center">
          <Link
            to="/services"
            className="px-9 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-display font-bold text-xs uppercase tracking-widest border border-white/10 transition-all inline-flex items-center gap-2"
          >
            <span>VIEW ALL SERVICES DETAILS</span>
            <ArrowUpRight className="w-4 h-4 text-amber-500 stroke-[3]" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
