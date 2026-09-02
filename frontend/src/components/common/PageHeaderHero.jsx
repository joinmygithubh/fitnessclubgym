import React from 'react';
import ScrollReveal from './ScrollReveal';

const PageHeaderHero = ({
  bgImage,
  bgPosition = 'object-center',
  tagline,
  title,
  description,
  children
}) => {
  return (
    <div className="relative min-h-[360px] sm:min-h-[420px] lg:min-h-[460px] flex items-center overflow-hidden rounded-3xl border border-white/10 p-6 sm:p-10 lg:p-14 shadow-2xl mb-12 lg:mb-16">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={bgImage}
          alt={tagline || 'Fitness Background'}
          className={`w-full h-full object-cover ${bgPosition} filter brightness-[0.78] contrast-[1.08] scale-100 sm:scale-105 transition-transform duration-1000 ease-out`}
        />
        {/* Layered Gradient Overlays for Superior Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-[#08090c]/70 to-[#08090c]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090c]/95 via-[#08090c]/75 to-[#08090c]/30 sm:to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-3xl space-y-4">
        <ScrollReveal variant="fade-up" delay={0} className="space-y-4">
          {tagline && (
            <span className="editorial-tag text-amber-400 text-xs sm:text-sm font-semibold tracking-widest block drop-shadow-md">
              {tagline}
            </span>
          )}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white uppercase tracking-tight leading-none drop-shadow-lg">
            {title}
          </h1>
          {description && (
            <p className="text-slate-200 text-base sm:text-lg lg:text-xl font-sans font-medium leading-relaxed pt-1 sm:pt-2 drop-shadow-md">
              {description}
            </p>
          )}
          {children}
        </ScrollReveal>
      </div>
    </div>
  );
};

export default PageHeaderHero;
