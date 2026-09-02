import React from 'react';
import { BUSINESS_INFO, GET_WHATSAPP_LINK } from '../constants';
import { ShieldCheck, Heart, Zap, Smile, CheckCircle, MessageSquare, Phone } from 'lucide-react';
import OwnerSection from '../components/home/OwnerSection';
import ScrollReveal from '../components/common/ScrollReveal';

const About = () => {
  const corePillars = [
    {
      title: "Strength Focus",
      desc: "Providing heavy-duty weight training equipment and dedicated spaces for strength development.",
      icon: ShieldCheck
    },
    {
      title: "General Fitness & Health",
      desc: "Promoting cardiovascular endurance, mobility, and healthy active daily routines.",
      icon: Heart
    },
    {
      title: "Building Confidence",
      desc: "Helping members feel strong, capable, and confident in their everyday life.",
      icon: Zap
    },
    {
      title: "Beginner-Friendly Workouts",
      desc: "An approachable, supportive atmosphere suitable for anyone starting out on their fitness journey.",
      icon: Smile
    }
  ];

  return (
    <div className="relative min-h-screen py-16 sm:py-20 lg:py-28 overflow-hidden">
      
      {/* LAYER 1: 1920px High-Res Background Image & LAYER 2: Transparent Dark Overlay (50% opacity) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/about-hero-bg.jpg"
          alt="Premium Gym Strength Training Background"
          className="w-full h-full object-cover object-[38%_25%] sm:object-[45%_30%] md:object-center filter brightness-95 contrast-[1.03]"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* LAYER 3: Page Content / Text (Top Layer) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        
        {/* Header Hero */}
        <ScrollReveal variant="fade-up" delay={0} className="space-y-4 max-w-3xl">
          <span className="editorial-tag text-amber-400 text-xs sm:text-sm block font-bold tracking-widest drop-shadow-md">
            OUR PURPOSE & STORY
          </span>
          <h1 className="text-5xl sm:text-7xl font-display font-extrabold text-white uppercase tracking-tight leading-none drop-shadow-lg">
            ABOUT <span className="gold-gradient-text">FITNESS CLUB GYM</span>
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl font-sans font-medium leading-relaxed pt-2 drop-shadow-md">
            A professional, dedicated fitness facility in Sehatpur, Faridabad designed to cultivate physical strength, consistency, and confidence.
          </p>
        </ScrollReveal>

        {/* Purpose & Philosophy Box */}
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="p-10 sm:p-14 rounded-3xl bg-[#11141c]/85 backdrop-blur-md border border-white/10 space-y-6 card-hover-effect">
            <span className="editorial-tag text-[10px] text-amber-400 block font-bold">FOUNDATIONAL MISSION</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white uppercase tracking-tight">
              Our Purpose & Philosophy
            </h2>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-sans font-medium">
              <strong>Fitness Club Gym</strong>, owned by <strong>{BUSINESS_INFO.owner}</strong>, was established to offer a focused, no-nonsense fitness environment where individuals can train consistently and achieve real progress. We believe that consistent workout routines, combined with structured resistance and cardiovascular training, form the cornerstone of long-term health and self-confidence.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed font-sans">
              Our gym floor is organized to support diverse workout styles—whether you are performing heavy barbell squats, dumbbell bench presses, cardio conditioning, or functional mobility circuits.
            </p>
          </div>
        </ScrollReveal>

        {/* Core Pillars Grid */}
        <div className="space-y-10">
          <ScrollReveal variant="fade-up" delay={0} className="space-y-2">
            <span className="editorial-tag text-amber-400 text-xs block font-bold">OUR PILLARS</span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white uppercase tracking-tight drop-shadow-md">
              WHAT DEFINES OUR <span className="gold-gradient-text">ENVIRONMENT</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <ScrollReveal key={idx} variant="fade-up" delay={idx * 80}>
                  <div
                    className="p-8 rounded-3xl bg-[#11141c]/85 backdrop-blur-md border border-white/10 space-y-4 card-hover-effect group h-full"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500/30 transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-display font-extrabold text-white uppercase tracking-tight group-hover:text-amber-400 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Owner Section Component */}
        <OwnerSection />

        {/* Facility Details & Direct Contact */}
        <ScrollReveal variant="fade-up" delay={0}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#11141c]/85 backdrop-blur-md p-10 sm:p-12 rounded-3xl border border-white/10 card-hover-effect">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="editorial-tag text-amber-400 text-xs block font-bold">FACILITY STANDARDS</span>
              <h3 className="text-3xl font-display font-extrabold text-white uppercase tracking-tight">Gym Facility Highlights</h3>
              
              <ul className="space-y-3 text-sm text-slate-200 font-sans">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Dedicated zones for free weights, barbells, dumbbells, and bench press stations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Cardiovascular machines for endurance building and fat loss goals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Welcoming atmosphere suitable for beginners and seasoned lifters.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Convenient location at Sehatpur, Faridabad.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 p-8 rounded-2xl bg-[#08090c]/85 backdrop-blur-md border border-white/10 space-y-6 text-center">
              <span className="editorial-tag text-[10px] text-amber-400 block font-bold">DIRECT INQUIRIES</span>
              <h4 className="font-display font-extrabold text-white text-xl uppercase tracking-wider">Contact Fitness Club Gym</h4>
              <p className="text-xs text-slate-300 font-sans">{BUSINESS_INFO.address.full}</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phones[0]}`}
                  className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-display font-extrabold text-xs uppercase tracking-widest rounded-full transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL US</span>
                </a>
                <a
                  href={GET_WHATSAPP_LINK()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WHATSAPP</span>
                </a>
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default About;
