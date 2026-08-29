import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BUSINESS_INFO, GET_WHATSAPP_LINK } from '../constants';
import { useAuth } from '../context/AuthContext';
import { createMembershipApi } from '../services/membershipService';
import { Phone, MessageSquare, ArrowUpRight, ShieldCheck, Check, Send, AlertCircle } from 'lucide-react';

const Membership = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState('General Membership');
  const [notes, setNotes] = useState('');
  const [statusMsg, setStatusMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmitInquiry = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate('/login?redirect=/membership');
      return;
    }

    setLoading(true);
    setStatusMsg(null);

    try {
      const res = await createMembershipApi({ plan: selectedPlan, notes });
      if (res.success) {
        setStatusMsg({ type: 'success', text: 'Membership request submitted! We will contact you shortly.' });
        setNotes('');
      }
    } catch (err) {
      setStatusMsg({ type: 'error', text: err.message || 'Failed to submit membership inquiry' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20 lg:py-28 bg-[#08090c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="editorial-tag text-amber-500 text-xs block">MEMBERSHIP INQUIRY & PLANS</span>
          <h1 className="text-5xl sm:text-7xl font-display font-extrabold text-white uppercase tracking-tight leading-none">
            JOIN <span className="gold-gradient-text">FITNESS CLUB GYM</span>
          </h1>
          <p className="text-slate-300 text-lg font-sans font-medium leading-relaxed pt-2">
            Train harder, get stronger, and achieve your health targets with dedicated guidance.
          </p>
        </div>

        {/* STRICT PRICING MANDATE NOTICE CARD */}
        <div className="p-10 sm:p-14 rounded-3xl bg-[#11141c] border-2 border-amber-500/40 text-center max-w-4xl mx-auto shadow-2xl space-y-8">
          <div className="w-16 h-16 rounded-full bg-amber-500/10 text-amber-500 mx-auto flex items-center justify-center">
            <ShieldCheck className="w-8 h-8" />
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-amber-400 uppercase tracking-tight">
              Contact us for membership plans and pricing.
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto font-sans font-medium">
              We offer customized membership durations and training options suited for individual goals. Reach out to our gym team for details.
            </p>
          </div>

          {/* REQUIRED 3 ACTIONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            
            {/* Call Now */}
            <a
              href={`tel:${BUSINESS_INFO.phones[0]}`}
              className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-display font-extrabold text-xs uppercase tracking-widest rounded-full transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>CALL NOW (+91 {BUSINESS_INFO.phones[0]})</span>
            </a>

            {/* WhatsApp Us */}
            <a
              href={GET_WHATSAPP_LINK('Hello Fitness Club Gym, I would like to inquire about your membership plans and pricing.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP US</span>
            </a>

            {/* Contact Us */}
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-xs uppercase tracking-widest rounded-full transition-all border border-white/10 flex items-center justify-center gap-2"
            >
              <span>CONTACT US</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </Link>

          </div>
        </div>

        {/* Features included */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-[#11141c] border border-white/10 space-y-4">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-amber-500" />
              <h3 className="font-display font-extrabold text-white text-lg uppercase tracking-wider">FULL GYM ACCESS</h3>
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              Access to free weights, resistance machines, bench press stations, and functional training areas.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#11141c] border border-white/10 space-y-4">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-amber-500" />
              <h3 className="font-display font-extrabold text-white text-lg uppercase tracking-wider">CARDIO & ENDURANCE</h3>
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              Cardiovascular conditioning machines designed for calorie burn and heart health.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#11141c] border border-white/10 space-y-4">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-amber-500" />
              <h3 className="font-display font-extrabold text-white text-lg uppercase tracking-wider">CLEAN FACILITY</h3>
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              Maintained workout environment located at Shyam Colony, Sehatpur, Faridabad.
            </p>
          </div>
        </div>

        {/* Online Membership Request Form */}
        <div className="p-10 sm:p-14 rounded-3xl bg-[#11141c] border border-white/10 max-w-3xl mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <span className="editorial-tag text-amber-500 text-xs block">ONLINE INQUIRY</span>
            <h3 className="text-3xl font-display font-extrabold text-white uppercase tracking-tight">
              SEND MEMBERSHIP REQUEST
            </h3>
            <p className="text-xs text-slate-400 font-sans">
              Submit your interest online and our staff will get back to you with plan details.
            </p>
          </div>

          {statusMsg && (
            <div
              className={`p-4 rounded-2xl text-xs font-semibold flex items-center gap-2 ${
                statusMsg.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-red-500/10 text-red-400 border border-red-500/30'
              }`}
            >
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{statusMsg.text}</span>
            </div>
          )}

          <form onSubmit={handleSubmitInquiry} className="space-y-6">
            <div>
              <label className="editorial-tag text-[10px] text-slate-300 block mb-2">PROGRAM INTEREST</label>
              <select
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                className="w-full bg-[#08090c] border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-amber-500 font-sans"
              >
                <option value="General Membership">General Gym Membership</option>
                <option value="Strength Training Package">Strength Training Package</option>
                <option value="Personal Training Inquiry">Personal Training Inquiry</option>
                <option value="Cardio & Fat Loss Program">Cardio & Fat Loss Program</option>
              </select>
            </div>

            <div>
              <label className="editorial-tag text-[10px] text-slate-300 block mb-2">ADDITIONAL NOTES / QUESTIONS</label>
              <textarea
                rows="3"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Specify preferred workout timing or fitness questions..."
                className="w-full bg-[#08090c] border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-amber-500 font-sans"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-display font-extrabold text-xs uppercase tracking-widest rounded-full transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{loading ? 'SUBMITTING...' : 'SUBMIT REQUEST'}</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Membership;
