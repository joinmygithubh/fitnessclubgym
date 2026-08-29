import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { BUSINESS_INFO } from '../../constants';
import { Menu, X, Phone, Shield, LogOut, User, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Membership', path: '/membership' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  // Track scroll for sticky backdrop blur transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open & listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Always close mobile drawer on route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-[100] transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-[#08090c] border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-[#08090c]/80 backdrop-blur-md border-b border-white/5 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Title */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3.5 group shrink-0">
            <img
              src="/logo.jpg"
              alt="Fitness Club Gym Logo"
              className="w-10 h-10 rounded-lg object-contain border border-amber-500/40 bg-black group-hover:border-amber-400 transition-colors shadow-md shadow-amber-500/10"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-wider text-white uppercase leading-none group-hover:text-amber-400 transition-colors">
                FITNESS CLUB <span className="text-amber-500 font-extrabold">GYM</span>
              </span>
              <span className="text-[9px] tracking-widest text-slate-400 font-bold uppercase mt-1">
                SEHATPUR • FARIDABAD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  isActive(link.path)
                    ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {isAdmin && (
              <Link
                to="/admin"
                className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/40 flex items-center gap-1.5 hover:bg-amber-500/20 transition-all ml-2"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Admin</span>
              </Link>
            )}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={`tel:${BUSINESS_INFO.phones[0]}`}
              className="px-4 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-widest text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>CALL</span>
            </a>

            <Link
              to="/membership"
              className="px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest bg-amber-500 hover:bg-amber-400 text-black shadow-lg shadow-amber-500/20 transition-all flex items-center gap-1.5 hover:scale-105"
            >
              <span>JOIN NOW</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
            </Link>

            {isAuthenticated && (
              <div className="flex items-center space-x-2 pl-2 border-l border-white/10">
                <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                  <User className="w-3.5 h-3.5 text-amber-400" />
                  {user?.name?.split(' ')[0]}
                </span>
                <button
                  onClick={logout}
                  className="p-2 text-slate-400 hover:text-red-400 hover:bg-white/5 rounded-full transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href={`tel:${BUSINESS_INFO.phones[0]}`}
              className="p-2.5 rounded-full text-amber-400 bg-amber-500/10 border border-amber-500/30 md:hidden"
              aria-label="Call Gym"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full text-white bg-white/10 hover:bg-amber-500 hover:text-black border border-white/20 focus:outline-none transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu - Positioned Directly Below Header with Solid Background & High Z-Index */}
      {isOpen && (
        <div className="lg:hidden fixed left-0 right-0 top-[65px] bottom-0 z-[100] bg-[#08090c] border-t border-white/10 flex flex-col justify-between p-6 sm:p-8 overflow-y-auto animate-fade-in shadow-2xl">
          
          {/* Navigation Links */}
          <div className="py-4 space-y-2.5 my-auto">
            {navLinks.map((link, idx) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`group py-3.5 px-5 rounded-2xl flex items-center justify-between transition-all ${
                  isActive(link.path)
                    ? 'bg-amber-500/15 border border-amber-500/40 text-amber-400'
                    : 'bg-white/[0.03] text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-display text-amber-500 font-bold">0{idx + 1}</span>
                  <span className="font-display font-extrabold text-xl tracking-wide uppercase text-white group-hover:text-amber-400 transition-colors">
                    {link.name}
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            ))}

            {isAdmin && (
              <Link
                to="/admin"
                onClick={closeMenu}
                className="py-3.5 px-5 rounded-2xl bg-amber-500/15 border border-amber-500/40 text-amber-400 font-extrabold text-base uppercase tracking-wider flex items-center gap-3"
              >
                <Shield className="w-5 h-5" />
                <span>Admin Dashboard</span>
              </Link>
            )}
          </div>

          {/* Mobile Footer CTAs */}
          <div className="space-y-3 pt-6 border-t border-white/10 shrink-0">
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phones[0]}`}
                className="py-3.5 px-4 bg-white/5 hover:bg-white/10 text-white font-extrabold text-xs uppercase tracking-widest rounded-xl border border-white/10 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>CALL</span>
              </a>

              <Link
                to="/membership"
                onClick={closeMenu}
                className="py-3.5 px-4 bg-amber-500 hover:bg-amber-400 text-black font-black text-xs uppercase tracking-widest rounded-xl text-center shadow-lg"
              >
                JOIN NOW
              </Link>
            </div>

            {isAuthenticated && (
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-xs font-semibold text-slate-300">{user?.name}</span>
                <button
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                  className="text-xs text-red-400 hover:underline font-bold flex items-center gap-1.5"
                >
                  <LogOut className="w-3.5 h-3.5" /> Logout
                </button>
              </div>
            )}
          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;
