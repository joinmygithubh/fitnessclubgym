import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';
import AnimatedCounter from '../common/AnimatedCounter';

const AboutSection = () => {
  return (
    <section className="py-28 lg:py-36 bg-[#08090c] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Editorial Top Tag & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Editorial Intro */}
          <ScrollReveal variant="slide-right" delay={0} className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="editorial-number text-amber-500 text-4xl sm:text-5xl block">
                <AnimatedCounter value="01" />
              </span>
              <span className="editorial-tag text-slate-400 text-xs block">ABOUT FITNESS CLUB GYM</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white uppercase tracking-tighter leading-none">
              TRAIN WITH PURPOSE.<br />
              <span className="gold-gradient-text">BECOME STRONGER EVERY DAY.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
              At <strong>Fitness Club Gym</strong>, we provide a clean, dedicated space designed for building strength, improving daily energy, and achieving long-term physical goals.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed font-sans">
              Located in Sehatpur, Faridabad, our workout facility prioritizes disciplined resistance training, functional strength work, and an approachable environment for beginners and experienced lifters alike.
            </p>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-display font-extrabold uppercase tracking-widest text-amber-400 hover:text-amber-300 group"
              >
                <span>EXPLORE OUR PHILOSOPHY</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 stroke-[3]" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Right Column: Editorial Large Image Composition */}
          <ScrollReveal variant="slide-left" delay={150} className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group card-hover-effect">
              <img
                src="/gym-interior.jpg"
                alt="Fitness Club Gym Workout Floor"
                className="w-full h-[480px] sm:h-[560px] object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <span className="editorial-tag text-[10px] text-amber-400 block mb-1">REAL GYM FACILITY</span>
                <h3 className="font-display font-extrabold text-xl text-white uppercase tracking-wider">
                  SEHATPUR, FARIDABAD
                </h3>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
