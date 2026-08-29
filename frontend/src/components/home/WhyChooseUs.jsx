import React from 'react';

const WhyChooseUs = () => {
  const editorialPillars = [
    {
      num: '01',
      title: 'TRAIN WITH PURPOSE.',
      subtitle: 'FUNCTIONAL EQUIPMENT & FREE WEIGHT ZONES',
      description: 'Equipped with heavy barbells, power racks, resistance machines, and conditioning tools so every workout has clear focus and output.'
    },
    {
      num: '02',
      title: 'BUILD REAL STRENGTH.',
      subtitle: 'PROGRESSIVE RESISTANCE TRAINING',
      description: 'Dedicated weightlifting zones tailored for progressive overload, muscle hypertrophic growth, and structural power development.'
    },
    {
      num: '03',
      title: 'STAY CONSISTENT.',
      subtitle: 'CONVENIENT DAILY TIMINGS',
      description: 'Organized morning and evening workout sessions designed around daily routines to maintain long-term training habits.'
    },
    {
      num: '04',
      title: 'BECOME STRONGER.',
      subtitle: 'MOTIVATING ENVIRONMENT',
      description: 'An authentic, approachable gym atmosphere located in Sehatpur, Faridabad where beginners and lifters push their boundaries.'
    }
  ];

  return (
    <section className="py-28 lg:py-36 bg-[#0c0e14] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Editorial Section Header */}
        <div className="space-y-3 text-left max-w-3xl">
          <span className="editorial-tag text-amber-500 text-xs block">WHY FITNESS CLUB GYM</span>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white uppercase tracking-tight">
            WHY TRAIN <span className="gold-gradient-text">WITH US</span>
          </h2>
          <p className="text-slate-400 text-base font-sans pt-2">
            We prioritize real physical progress, authentic atmosphere, and disciplined workout habits.
          </p>
        </div>

        {/* Large Editorial Statement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {editorialPillars.map((pillar) => (
            <div
              key={pillar.num}
              className="space-y-4 p-8 sm:p-10 rounded-3xl bg-[#11141c] border border-white/10 hover:border-amber-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <span className="editorial-number text-amber-500 text-3xl font-extrabold">{pillar.num}</span>
                <span className="editorial-tag text-[10px] text-slate-400">{pillar.subtitle}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white uppercase tracking-tight group-hover:text-amber-400 transition-colors">
                {pillar.title}
              </h3>

              <p className="text-sm text-slate-300 font-sans leading-relaxed pt-2">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
