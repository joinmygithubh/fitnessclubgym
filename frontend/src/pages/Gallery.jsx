import React, { useState, useEffect } from 'react';
import { getGalleryItemsApi } from '../services/galleryService';
import { X, Image as ImageIcon } from 'lucide-react';

const fallbackGallery = [
  {
    _id: '1',
    title: 'Work Hard Or Go Home - Authentic Gym Interior & Cardio Zone',
    imageUrl: '/gym-interior.jpg',
    category: 'Actual Gym Facility'
  },
  {
    _id: '2',
    title: 'Dumbbell & Free Weights Section',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    category: 'Free Weights'
  },
  {
    _id: '3',
    title: 'Cardio & Treadmill Conditioning Area',
    imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
    category: 'Cardio'
  },
  {
    _id: '4',
    title: 'Bench Press & Strength Station',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80',
    category: 'Strength Equipment'
  },
  {
    _id: '5',
    title: 'Functional Workout & Resistance Machine Area',
    imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80',
    category: 'Facilities'
  },
  {
    _id: '6',
    title: 'Gym Workout Environment',
    imageUrl: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=1200&q=80',
    category: 'Facilities'
  }
];

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await getGalleryItemsApi();
        if (res.success && res.data.length > 0) {
          setItems(res.data);
        } else {
          setItems(fallbackGallery);
        }
      } catch (err) {
        setItems(fallbackGallery);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  const categories = ['All', ...new Set(items.map((i) => i.category || 'Gym Facilities'))];

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter((i) => (i.category || 'Gym Facilities') === selectedCategory);

  return (
    <div className="py-20 lg:py-28 bg-[#08090c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="editorial-tag text-amber-500 text-xs block">PHOTOGRAPHY & FACILITY</span>
          <h1 className="text-5xl sm:text-7xl font-display font-extrabold text-white uppercase tracking-tight leading-none">
            FACILITY <span className="gold-gradient-text">GALLERY</span>
          </h1>
          <p className="text-slate-300 text-lg font-sans font-medium leading-relaxed pt-2">
            Explore Fitness Club Gym workout spaces, strength stations, and equipment setup.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-display font-extrabold uppercase tracking-widest transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'bg-[#11141c] text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Masonry Grid */}
        {loading ? (
          <div className="min-h-[300px] flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <div
                key={item._id}
                onClick={() => setLightboxImage(item)}
                className={`group cursor-pointer relative overflow-hidden rounded-3xl bg-[#11141c] border border-white/10 shadow-xl ${
                  idx % 3 === 0 ? 'md:col-span-2 lg:col-span-2 h-[420px]' : 'h-[420px]'
                }`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
                
                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <span className="editorial-tag text-[9px] bg-amber-500 text-black px-2.5 py-1 rounded-full font-bold inline-block">
                    {item.category || 'Gym Facility'}
                  </span>
                  <h3 className="text-xl font-display font-extrabold text-white uppercase tracking-tight">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxImage(null)}
          >
            <div
              className="relative max-w-5xl w-full bg-[#11141c] rounded-3xl overflow-hidden border border-white/15 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 z-10 p-3 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="w-full max-h-[75vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={lightboxImage.imageUrl}
                  alt={lightboxImage.title}
                  className="w-full h-full max-h-[75vh] object-contain"
                />
              </div>
              
              <div className="p-8 bg-[#11141c]">
                <span className="editorial-tag text-[10px] text-amber-500 block mb-1">
                  {lightboxImage.category || 'Gym Facility'}
                </span>
                <h3 className="text-2xl font-display font-extrabold text-white uppercase tracking-tight">{lightboxImage.title}</h3>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Gallery;
