import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

const galleryItems = [
  {
    id: 1,
    title: 'Work Hard Or Go Home - Authentic Gym Interior',
    url: '/gym-interior.jpg',
    category: 'Actual Facility',
    colSpan: 'lg:col-span-8',
    height: 'h-[420px] sm:h-[480px]'
  },
  {
    id: 2,
    title: 'Dumbbell Rack & Free Weights Area',
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    category: 'Free Weights',
    colSpan: 'lg:col-span-4',
    height: 'h-[420px] sm:h-[480px]'
  },
  {
    id: 3,
    title: 'Cardio & Conditioning Floor',
    url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
    category: 'Cardio Zone',
    colSpan: 'lg:col-span-5',
    height: 'h-[360px]'
  },
  {
    id: 4,
    title: 'Heavy Barbell Rack & Strength Station',
    url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    category: 'Strength Equipment',
    colSpan: 'lg:col-span-7',
    height: 'h-[360px]'
  }
];

const GalleryPreview = () => {
  return (
    <section className="py-28 lg:py-36 bg-[#08090c] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <ScrollReveal variant="fade-up" delay={0} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="editorial-tag text-amber-500 text-xs block">FACILITY GALLERY</span>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white uppercase tracking-tight">
              EXPLORE OUR <span className="gold-gradient-text">FACILITY</span>
            </h2>
          </div>
          
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-xs font-display font-extrabold uppercase tracking-widest text-amber-400 hover:text-amber-300 group"
          >
            <span>VIEW FULL GALLERY</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 stroke-[3]" />
          </Link>
        </ScrollReveal>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {galleryItems.map((img, idx) => (
            <ScrollReveal
              key={img.id}
              variant="scale-in"
              delay={idx * 100}
              className={`${img.colSpan}`}
            >
              <div
                className={`group relative overflow-hidden rounded-3xl bg-[#11141c] border border-white/10 ${img.height} card-hover-effect cursor-pointer`}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
                
                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <span className="editorial-tag text-[9px] bg-amber-500 text-black px-2.5 py-1 rounded-full font-bold inline-block shadow-md">
                    {img.category}
                  </span>
                  <h3 className="text-lg font-display font-extrabold text-white uppercase tracking-wider leading-snug group-hover:text-amber-400 transition-colors">
                    {img.title}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GalleryPreview;
