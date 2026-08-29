import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Shield, Users, CreditCard, Image, Mail, LogOut, ArrowLeft } from 'lucide-react';

const AdminLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-[#08090c] text-slate-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#11141c] border-r border-white/10 flex flex-col justify-between hidden md:flex shrink-0">
        <div>
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center space-x-3">
            <img
              src="/logo.jpg"
              alt="Fitness Club Gym Logo"
              className="w-10 h-10 rounded-lg object-contain border border-amber-500/40 bg-black"
            />
            <div>
              <h2 className="font-display font-extrabold text-white text-sm uppercase tracking-wider">FITNESS CLUB</h2>
              <span className="editorial-tag text-[9px] text-amber-500 block">ADMIN PORTAL</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5 text-xs font-display font-extrabold uppercase tracking-widest">
            <Link
              to="/admin"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Shield className="w-4 h-4 text-amber-500" />
              <span>Overview & Stats</span>
            </Link>
            <Link
              to="/admin?tab=memberships"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              <CreditCard className="w-4 h-4 text-amber-500" />
              <span>Memberships</span>
            </Link>
            <Link
              to="/admin?tab=users"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Users className="w-4 h-4 text-amber-500" />
              <span>Registered Users</span>
            </Link>
            <Link
              to="/admin?tab=gallery"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Image className="w-4 h-4 text-amber-500" />
              <span>Gallery Management</span>
            </Link>
            <Link
              to="/admin?tab=contact"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Mail className="w-4 h-4 text-amber-500" />
              <span>Contact Inquiries</span>
            </Link>
          </nav>
        </div>

        {/* Footer info & Logout */}
        <div className="p-4 border-t border-white/10 space-y-3">
          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-bold text-slate-400 hover:text-white bg-white/5 rounded-xl border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Main Site
          </button>
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-400 font-medium truncate">{user?.name}</span>
            <button
              onClick={logout}
              className="p-1.5 text-slate-400 hover:text-red-400 transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top bar for mobile */}
        <header className="bg-[#11141c] border-b border-white/10 p-4 flex md:hidden items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-amber-500" />
            <span className="font-display font-extrabold text-white text-sm uppercase">Admin Dashboard</span>
          </div>
          <button
            onClick={() => navigate('/')}
            className="text-xs text-amber-400 hover:underline font-bold"
          >
            Exit Admin
          </button>
        </header>

        <main className="flex-1 p-6 md:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
