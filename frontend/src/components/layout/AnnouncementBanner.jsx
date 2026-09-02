import React from 'react';

const bannerItems = [
  'FITNESS CLUB GYM',
  'SEHATPUR, FARIDABAD',
  'BUILD YOUR STRONGER SELF',
  'JOIN US TODAY',
];

const AnnouncementBanner = () => {
  // Repeat items 6 times per block to guarantee seamless looping across wide viewports (4K/Ultrawide)
  const repeatedItems = [
    ...bannerItems,
    ...bannerItems,
    ...bannerItems,
    ...bannerItems,
    ...bannerItems,
    ...bannerItems,
  ];

  return (
    <div
      className="w-full bg-[#faf7f2] text-slate-950 py-1.5 sm:py-2 overflow-hidden relative z-[101] border-b border-amber-300/40 select-none shadow-sm"
      aria-label="Gym Announcement"
    >
      <div className="w-full overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap items-center shrink-0">
          {/* First Block */}
          <div className="flex items-center shrink-0">
            {repeatedItems.map((text, idx) => (
              <div
                key={`b1-${idx}`}
                className="flex items-center gap-3 sm:gap-4 pr-6 sm:pr-8 shrink-0"
              >
                <span className="font-display font-extrabold text-[11px] sm:text-xs tracking-wider uppercase text-slate-950">
                  {text}
                </span>
                <span
                  className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block shrink-0"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>

          {/* Second Block (Identical clone for 100% seamless, infinite scroll loop) */}
          <div className="flex items-center shrink-0" aria-hidden="true">
            {repeatedItems.map((text, idx) => (
              <div
                key={`b2-${idx}`}
                className="flex items-center gap-3 sm:gap-4 pr-6 sm:pr-8 shrink-0"
              >
                <span className="font-display font-extrabold text-[11px] sm:text-xs tracking-wider uppercase text-slate-950">
                  {text}
                </span>
                <span
                  className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block shrink-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
