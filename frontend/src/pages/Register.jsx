import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, Mail, User, Phone, AlertCircle, ArrowUpRight } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await register(formData);
      if (res.success) {
        navigate('/');
      }
    } catch (err) {
      setErrorMsg(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-[#08090c]">
      <div className="max-w-md w-full space-y-8 bg-[#11141c] p-10 sm:p-12 rounded-3xl border border-white/10 shadow-2xl">
        
        {/* Brand Header */}
        <div className="text-center space-y-3">
          <img
            src="/logo.jpg"
            alt="Fitness Club Gym Logo"
            className="w-14 h-14 rounded-2xl object-contain border border-amber-500/40 bg-black mx-auto shadow-lg shadow-amber-500/10"
          />
          <span className="editorial-tag text-amber-500 text-[10px] block">JOIN COMMUNITY</span>
          <h2 className="text-3xl font-display font-extrabold text-white uppercase tracking-tight">
            CREATE <span className="gold-gradient-text">ACCOUNT</span>
          </h2>
        </div>

        {errorMsg && (
          <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 font-sans">
          <div>
            <label className="editorial-tag text-[10px] text-slate-300 block mb-2">FULL NAME *</label>
            <div className="relative">
              <User className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-[#08090c] border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-white text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="editorial-tag text-[10px] text-slate-300 block mb-2">EMAIL ADDRESS *</label>
            <div className="relative">
              <Mail className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full bg-[#08090c] border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-white text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="editorial-tag text-[10px] text-slate-300 block mb-2">PHONE NUMBER</label>
            <div className="relative">
              <Phone className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="7399999949"
                className="w-full bg-[#08090c] border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-white text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="editorial-tag text-[10px] text-slate-300 block mb-2">PASSWORD * (MIN 6 CHARS)</label>
            <div className="relative">
              <Lock className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                name="password"
                required
                minLength={6}
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-[#08090c] border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-white text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-display font-extrabold text-xs uppercase tracking-widest rounded-full transition-all shadow-lg flex items-center justify-center gap-2 mt-2"
          >
            <span>{loading ? 'REGISTERING...' : 'REGISTER ACCOUNT'}</span>
            <ArrowUpRight className="w-4 h-4 stroke-[3]" />
          </button>
        </form>

        <div className="text-center pt-2">
          <p className="text-xs text-slate-400 font-sans">
            Already have an account?{' '}
            <Link to="/login" className="text-amber-400 hover:underline font-bold">
              Sign In
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Register;
