import React, { useState } from 'react';
import { BUSINESS_INFO, GET_WHATSAPP_LINK } from '../constants';
import { submitContactFormApi } from '../services/contactService';
import { Phone, MapPin, Instagram, MessageSquare, Navigation, Send, CheckCircle2, AlertCircle, User, Clock } from 'lucide-react';
import ScrollReveal from '../components/common/ScrollReveal';

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
    <div className="relative min-h-screen py-16 sm:py-20 lg:py-28 overflow-hidden">
      
      {/* LAYER 1: 1920px High-Res Background Image & LAYER 2: Transparent Dark Overlay (50% opacity) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/contact-hero-bg.jpg"
          alt="Clean Premium Gym Interior Contact Background"
          className="w-full h-full object-cover object-[45%_30%] sm:object-[50%_35%] md:object-center filter brightness-95 contrast-[1.03]"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* LAYER 3: Page Content / Text (Top Layer) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
        
        {/* Header */}
        <ScrollReveal variant="fade-up" delay={0} className="space-y-4 max-w-3xl">
          <span className="editorial-tag text-amber-400 text-xs sm:text-sm block font-bold tracking-widest drop-shadow-md">
            CONTACT & INQUIRIES
          </span>
          <h1 className="text-5xl sm:text-7xl font-display font-extrabold text-white uppercase tracking-tight leading-none drop-shadow-lg">
            GET IN <span className="gold-gradient-text">TOUCH</span>
          </h1>
          <p className="text-slate-200 text-lg font-sans font-medium leading-relaxed pt-2 drop-shadow-md">
            We are here to assist you with gym timings, membership details, and training information.
          </p>
        </ScrollReveal>

        {/* 4 Action Buttons Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          
          {/* CALL */}
          <ScrollReveal variant="fade-up" delay={0}>
            <a
              href={`tel:${BUSINESS_INFO.phones[0]}`}
              className="p-6 rounded-3xl bg-[#11141c]/85 backdrop-blur-md border border-white/10 hover:border-amber-500/40 text-center space-y-3 group transition-all duration-300 card-hover-effect block h-full"
            >
              <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <span className="font-display font-extrabold text-white text-base block uppercase tracking-wider group-hover:text-amber-400 transition-colors">CALL</span>
              <span className="text-xs font-sans text-slate-300 block">+91 {BUSINESS_INFO.phones[0]}</span>
            </a>
          </ScrollReveal>

          {/* WHATSAPP */}
          <ScrollReveal variant="fade-up" delay={80}>
            <a
              href={GET_WHATSAPP_LINK()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-[#11141c]/85 backdrop-blur-md border border-white/10 hover:border-emerald-500/40 text-center space-y-3 group transition-all duration-300 card-hover-effect block h-full"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="font-display font-extrabold text-white text-base block uppercase tracking-wider group-hover:text-emerald-400 transition-colors">WHATSAPP</span>
              <span className="text-xs font-sans text-slate-300 block">Quick Chat</span>
            </a>
          </ScrollReveal>

          {/* GET DIRECTIONS */}
          <ScrollReveal variant="fade-up" delay={160}>
            <a
              href={BUSINESS_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-[#11141c]/85 backdrop-blur-md border border-white/10 hover:border-amber-500/40 text-center space-y-3 group transition-all duration-300 card-hover-effect block h-full"
            >
              <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                <Navigation className="w-6 h-6" />
              </div>
              <span className="font-display font-extrabold text-white text-base block uppercase tracking-wider group-hover:text-amber-400 transition-colors">GET DIRECTIONS</span>
              <span className="text-xs font-sans text-slate-300 block">Google Maps</span>
            </a>
          </ScrollReveal>

          {/* INSTAGRAM */}
          <ScrollReveal variant="fade-up" delay={240}>
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-[#11141c]/85 backdrop-blur-md border border-white/10 hover:border-pink-500/40 text-center space-y-3 group transition-all duration-300 card-hover-effect block h-full"
            >
              <div className="w-12 h-12 rounded-full bg-pink-500/20 text-pink-400 mx-auto flex items-center justify-center group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                <Instagram className="w-6 h-6" />
              </div>
              <span className="font-display font-extrabold text-white text-base block uppercase tracking-wider group-hover:text-pink-400 transition-colors">INSTAGRAM</span>
              <span className="text-xs font-sans text-slate-300 block">{BUSINESS_INFO.instagramHandle}</span>
            </a>
          </ScrollReveal>

        </div>

        {/* Main Content Grid: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Official Business Info Card */}
          <ScrollReveal variant="slide-right" delay={100}>
            <div className="p-10 sm:p-12 rounded-3xl bg-[#11141c]/85 backdrop-blur-md border border-white/10 space-y-8 card-hover-effect">
              <div>
                <span className="editorial-tag text-amber-400 text-xs block mb-1 font-bold">OFFICIAL DETAILS</span>
                <h2 className="text-3xl font-display font-extrabold text-white uppercase tracking-tight">{BUSINESS_INFO.name}</h2>
              </div>

              <div className="space-y-6 text-sm font-sans">
                
                {/* Owner */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-amber-400 flex items-center justify-center shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white uppercase tracking-wider">Gym Owner</h4>
                    <p className="text-amber-400 font-bold text-base mt-0.5">{BUSINESS_INFO.owner}</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white uppercase tracking-wider">Gym Address</h4>
                    <p className="text-slate-200 leading-relaxed font-medium mt-1">
                      {BUSINESS_INFO.address.full}
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white uppercase tracking-wider">Gym Timings</h4>
                    <div className="text-slate-200 text-xs mt-2 space-y-1 bg-[#08090c]/85 p-4 rounded-2xl border border-white/10 font-medium">
                      <p><strong className="text-amber-400 font-bold">MORNING:</strong> {BUSINESS_INFO.timings.morning}</p>
                      <p><strong className="text-amber-400 font-bold">EVENING:</strong> {BUSINESS_INFO.timings.evening}</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-amber-400 flex items-center justify-center shrink-0">
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
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-pink-400 flex items-center justify-center shrink-0">
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
          </ScrollReveal>

          {/* Interactive Contact Form */}
          <ScrollReveal variant="slide-left" delay={200}>
            <div className="p-10 sm:p-12 rounded-3xl bg-[#11141c]/85 backdrop-blur-md border border-white/10 space-y-6 card-hover-effect">
              <div>
                <span className="editorial-tag text-amber-400 text-xs block mb-1 font-bold">SEND AN INQUIRY</span>
                <h2 className="text-3xl font-display font-extrabold text-white uppercase tracking-tight">Send Us A Message</h2>
              </div>

              {feedback && (
                <div
                  className={`p-4 rounded-2xl text-xs font-semibold flex items-center gap-2 ${
                    feedback.type === 'success' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-red-500/20 text-red-300 border border-red-500/40'
                  }`}
                >
                  {feedback.type === 'success' ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
                  <span>{feedback.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="editorial-tag text-[10px] text-slate-200 block mb-2 font-bold">YOUR NAME *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full bg-[#08090c]/85 border border-white/15 rounded-2xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-amber-400 font-sans transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="editorial-tag text-[10px] text-slate-200 block mb-2 font-bold">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full bg-[#08090c]/85 border border-white/15 rounded-2xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-amber-400 font-sans transition-colors"
                    />
                  </div>
                  <div>
                    <label className="editorial-tag text-[10px] text-slate-200 block mb-2 font-bold">PHONE NUMBER *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="w-full bg-[#08090c]/85 border border-white/15 rounded-2xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-amber-400 font-sans transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="editorial-tag text-[10px] text-slate-200 block mb-2 font-bold">YOUR MESSAGE *</label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ask about workout sessions, gym timings, or membership..."
                    className="w-full bg-[#08090c]/85 border border-white/15 rounded-2xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-amber-400 font-sans transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-display font-extrabold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'SENDING...' : 'SEND MESSAGE'}</span>
                </button>
              </form>

            </div>
          </ScrollReveal>

        </div>

      </div>
    </div>
  );
};

export default Contact;
