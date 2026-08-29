import React, { useState } from 'react';
import { BUSINESS_INFO, GET_WHATSAPP_LINK } from '../constants';
import { submitContactFormApi } from '../services/contactService';
import { Phone, MapPin, Instagram, MessageSquare, Navigation, Send, CheckCircle2, AlertCircle, User, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      const res = await submitContactFormApi(formData);
      if (res.success) {
        setFeedback({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (err) {
      setFeedback({ type: 'error', text: err.message || 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20 lg:py-28 bg-[#08090c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="editorial-tag text-amber-500 text-xs block">CONTACT & INQUIRIES</span>
          <h1 className="text-5xl sm:text-7xl font-display font-extrabold text-white uppercase tracking-tight leading-none">
            GET IN <span className="gold-gradient-text">TOUCH</span>
          </h1>
          <p className="text-slate-300 text-lg font-sans font-medium leading-relaxed pt-2">
            We are here to assist you with gym timings, membership details, and training information.
          </p>
        </div>

        {/* 4 Action Buttons Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          
          {/* CALL */}
          <a
            href={`tel:${BUSINESS_INFO.phones[0]}`}
            className="p-6 rounded-3xl bg-[#11141c] border border-white/10 hover:border-amber-500/40 text-center space-y-3 group transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-500 mx-auto flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-colors">
              <Phone className="w-6 h-6" />
            </div>
            <span className="font-display font-extrabold text-white text-base block uppercase tracking-wider">CALL</span>
            <span className="text-xs font-sans text-slate-400 block">+91 {BUSINESS_INFO.phones[0]}</span>
          </a>

          {/* WHATSAPP */}
          <a
            href={GET_WHATSAPP_LINK()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl bg-[#11141c] border border-white/10 hover:border-emerald-500/40 text-center space-y-3 group transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
              <MessageSquare className="w-6 h-6" />
            </div>
            <span className="font-display font-extrabold text-white text-base block uppercase tracking-wider">WHATSAPP</span>
            <span className="text-xs font-sans text-slate-400 block">Quick Chat</span>
          </a>

          {/* GET DIRECTIONS */}
          <a
            href={BUSINESS_INFO.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl bg-[#11141c] border border-white/10 hover:border-amber-500/40 text-center space-y-3 group transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-500 mx-auto flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-colors">
              <Navigation className="w-6 h-6" />
            </div>
            <span className="font-display font-extrabold text-white text-base block uppercase tracking-wider">GET DIRECTIONS</span>
            <span className="text-xs font-sans text-slate-400 block">Google Maps</span>
          </a>

          {/* INSTAGRAM */}
          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl bg-[#11141c] border border-white/10 hover:border-pink-500/40 text-center space-y-3 group transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-pink-500/10 text-pink-400 mx-auto flex items-center justify-center group-hover:bg-pink-500 group-hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </div>
            <span className="font-display font-extrabold text-white text-base block uppercase tracking-wider">INSTAGRAM</span>
            <span className="text-xs font-sans text-slate-400 block">{BUSINESS_INFO.instagramHandle}</span>
          </a>

        </div>

        {/* Main Content Grid: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Official Business Info Card */}
          <div className="p-10 sm:p-12 rounded-3xl bg-[#11141c] border border-white/10 space-y-8">
            <div>
              <span className="editorial-tag text-amber-500 text-xs block mb-1">OFFICIAL DETAILS</span>
              <h2 className="text-3xl font-display font-extrabold text-white uppercase tracking-tight">{BUSINESS_INFO.name}</h2>
            </div>

            <div className="space-y-6 text-sm font-sans">
              
              {/* Owner */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 text-amber-500 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white uppercase tracking-wider">Gym Owner</h4>
                  <p className="text-amber-400 font-bold text-base mt-0.5">{BUSINESS_INFO.owner}</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 text-amber-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white uppercase tracking-wider">Gym Address</h4>
                  <p className="text-slate-300 leading-relaxed font-medium mt-1">
                    {BUSINESS_INFO.address.full}
                  </p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 text-amber-500 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white uppercase tracking-wider">Gym Timings</h4>
                  <div className="text-slate-300 text-xs mt-2 space-y-1 bg-[#08090c] p-4 rounded-2xl border border-white/10 font-medium">
                    <p><strong className="text-amber-400 font-bold">MORNING:</strong> {BUSINESS_INFO.timings.morning}</p>
                    <p><strong className="text-amber-400 font-bold">EVENING:</strong> {BUSINESS_INFO.timings.evening}</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 text-amber-500 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white uppercase tracking-wider">Phone Numbers</h4>
                  <div className="flex flex-col mt-1 space-y-1">
                    <a href={`tel:${BUSINESS_INFO.phones[0]}`} className="text-slate-200 hover:text-amber-400 font-bold transition-colors">
                      +91 {BUSINESS_INFO.phones[0]}
                    </a>
                    <a href={`tel:${BUSINESS_INFO.phones[1]}`} className="text-slate-200 hover:text-amber-400 font-bold transition-colors">
                      +91 {BUSINESS_INFO.phones[1]}
                    </a>
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 text-pink-400 flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white uppercase tracking-wider">Instagram Handle</h4>
                  <a
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:underline font-bold block mt-1"
                  >
                    {BUSINESS_INFO.instagramHandle}
                  </a>
                </div>
              </div>

            </div>

            {/* Embedded Map */}
            <div className="rounded-2xl overflow-hidden border border-white/10 h-52 bg-black">
              <iframe
                title="Fitness Club Gym Map Location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS_INFO.address.full)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

          </div>

          {/* Interactive Contact Form */}
          <div className="p-10 sm:p-12 rounded-3xl bg-[#11141c] border border-white/10 space-y-6">
            <div>
              <span className="editorial-tag text-amber-500 text-xs block mb-1">SEND AN INQUIRY</span>
              <h2 className="text-3xl font-display font-extrabold text-white uppercase tracking-tight">Send Us A Message</h2>
            </div>

            {feedback && (
              <div
                className={`p-4 rounded-2xl text-xs font-semibold flex items-center gap-2 ${
                  feedback.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-red-500/10 text-red-400 border border-red-500/30'
                }`}
              >
                {feedback.type === 'success' ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
                <span>{feedback.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="editorial-tag text-[10px] text-slate-300 block mb-2">YOUR NAME *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full bg-[#08090c] border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-amber-500 font-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="editorial-tag text-[10px] text-slate-300 block mb-2">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full bg-[#08090c] border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-amber-500 font-sans"
                  />
                </div>
                <div>
                  <label className="editorial-tag text-[10px] text-slate-300 block mb-2">PHONE NUMBER *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="w-full bg-[#08090c] border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-amber-500 font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="editorial-tag text-[10px] text-slate-300 block mb-2">YOUR MESSAGE *</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ask about workout sessions, gym timings, or membership..."
                  className="w-full bg-[#08090c] border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-amber-500 font-sans"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-display font-extrabold text-xs uppercase tracking-widest rounded-full transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? 'SENDING...' : 'SEND MESSAGE'}</span>
              </button>
            </form>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
