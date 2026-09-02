import React from 'react';
import { Outlet } from 'react-router-dom';
import AnnouncementBanner from '../components/layout/AnnouncementBanner';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { GET_WHATSAPP_LINK } from '../constants';
import { MessageSquare } from 'lucide-react';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#08090c] text-slate-100 relative font-sans">
      <AnnouncementBanner />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <a
        href={GET_WHATSAPP_LINK()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-600/30 flex items-center justify-center transition-all hover:scale-110 group border border-emerald-400/30"
        aria-label="WhatsApp Us"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-display font-extrabold uppercase tracking-wider pl-0 group-hover:pl-2">
          Chat with Us
        </span>
      </a>
    </div>
  );
};

export default MainLayout;
