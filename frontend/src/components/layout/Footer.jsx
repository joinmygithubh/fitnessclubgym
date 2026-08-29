import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, GET_WHATSAPP_LINK } from '../../constants';
import { Phone, MapPin, Instagram, MessageSquare, ArrowUpRight, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050608] text-slate-400 border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <img
                src="/logo.jpg"
                alt="Fitness Club Gym Logo"
                className="w-10 h-10 rounded-lg object-contain border border-amber-500/40 bg-black"
              />
              <span className="font-display font-extrabold text-xl tracking-wider text-white uppercase">
                FITNESS CLUB <span className="text-amber-500">GYM</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-md font-medium leading-relaxed">
              Build Strength. Build Confidence. Build Yourself. A premier fitness facility in Sehatpur, Faridabad dedicated to disciplined training and long-term health.
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-md space-y-1">
              <span className="editorial-tag text-[10px] text-amber-500 block">GYM LEADERSHIP</span>
              <p className="text-sm font-extrabold text-white uppercase tracking-wider">{BUSINESS_INFO.owner}</p>
              <p className="text-xs text-slate-400">Owner, Fitness Club Gym</p>
            </div>
          </div>

          {/* Quick Nav (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="editorial-tag text-xs text-slate-200">NAVIGATION</h4>
            <ul className="space-y-3 text-xs font-bold uppercase tracking-widest">
              {['Home', 'About', 'Services', 'Membership', 'Gallery', 'Contact'].map((item) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                return (
                  <li key={item}>
                    <Link
                      to={path}
                      className="text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{item}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Timings (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="editorial-tag text-xs text-slate-200">GYM TIMINGS</h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-amber-400 font-extrabold block uppercase tracking-wider">MORNING</span>
                <span className="text-slate-300 font-medium">{BUSINESS_INFO.timings.morning}</span>
              </div>
              <div>
                <span className="text-amber-400 font-extrabold block uppercase tracking-wider">EVENING</span>
                <span className="text-slate-300 font-medium">{BUSINESS_INFO.timings.evening}</span>
              </div>
            </div>
          </div>

          {/* Contact & Social (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="editorial-tag text-xs text-slate-200">CONTACT & LOCATION</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              {BUSINESS_INFO.address.full}
            </p>

            <div className="pt-1 space-y-2">
              <a
                href={`tel:${BUSINESS_INFO.phones[0]}`}
                className="text-xs font-bold text-white hover:text-amber-400 transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>+91 {BUSINESS_INFO.phones[0]}</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phones[1]}`}
                className="text-xs font-bold text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>+91 {BUSINESS_INFO.phones[1]}</span>
              </a>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-pink-500/20 text-pink-400 border border-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={GET_WHATSAPP_LINK()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-emerald-500/20 text-emerald-400 border border-white/10 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p className="font-medium">
            256, Gali Number 1, Shyam Colony, Part-1, Sehatpur, Faridabad - 121003
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
