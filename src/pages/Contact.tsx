import { motion } from 'framer-motion';
import { useState } from 'react';
import RevealOnScroll from '../components/animations/RevealOnScroll';
import StaggerChildren from '../components/animations/StaggerChildren';
import BlurText from '../components/animations/BlurText';
import { itemVariants } from '../components/animations/index';

const contactDetails = [
  { icon: 'call', label: 'Phone', value: '+251902312888' },
  { icon: 'mail', label: 'Email', value: 'mihretmultimedia@gmail.com' },
  { icon: 'location_on', label: 'Location', value: '4 Kilo Ikhlas Bldg,\nAddis Ababa' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch("https://formsubmit.co/ajax/Mihretmultimedia005@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New Contact Form Submission from Mihret Multimedia",
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-32 md:pb-40 px-4 md:px-6 max-w-7xl mx-auto font-body">

      {/* Hero */}
      <section className="mb-10 md:mb-20">
        <BlurText
          text="Studio Contact"
          delay={30} stepDuration={0.45} animateBy="letters" direction="top"
          className="font-label text-primary tracking-[0.25em] uppercase text-xs font-bold mb-3 md:mb-4 block"
        />
        <div style={{ overflow: 'hidden' }} className="mb-3 md:mb-4">
          <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-7xl tracking-[-0.04em] text-on-surface flex flex-wrap gap-x-3 items-center">
            <BlurText text="GET IN" delay={180} stepDuration={0.45} animateBy="words" direction="top" />
            <span className="text-primary">
              <BlurText text="TOUCH" delay={180} stepDuration={0.45} animateBy="words" direction="top" />
            </span>
          </h1>
        </div>
        <BlurText
          text="Elevate your cinematic vision. Our studio doors are open for auteurs, creators, and visionaries ready to redefine multimedia."
          delay={60} stepDuration={0.45} animateBy="words" direction="bottom"
          className="font-body text-on-surface/60 text-sm md:text-xl max-w-xl leading-relaxed"
        />
      </section>

      {/* Quick contact chips — mobile only */}
      <div className="flex gap-3 mb-8 md:hidden">
        <a href="tel:+251902312888" className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-primary text-xs font-bold uppercase tracking-wider active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
          Call Us
        </a>
        <a href="mailto:mihretmultimedia@gmail.com" className="flex items-center gap-2 bg-surface-container-low border border-outline-variant/20 rounded-full px-4 py-2 text-on-surface-variant text-xs font-bold uppercase tracking-wider active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
          Email
        </a>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-24 items-start">

        {/* Left — Contact Details */}
        <RevealOnScroll delay={0.1}>
          <div className="space-y-6 md:space-y-12">
            <div className="bg-surface-variant/40 backdrop-blur-2xl p-5 md:p-10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-outline-variant/15">
              <StaggerChildren staggerDelay={0.1} containerDelay={0.05}>
                {contactDetails.map((item) => (
                  <motion.div key={item.label} variants={itemVariants} className="flex items-start gap-4 md:gap-6 mb-6 md:mb-10 last:mb-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-primary/10 rounded-lg flex-shrink-0">
                      <span className="material-symbols-outlined text-primary text-lg md:text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                    </div>
                    <div>
                      <p className="font-label text-primary uppercase tracking-[0.1em] text-[10px] md:text-xs mb-1">{item.label}</p>
                      <p className="text-base md:text-xl font-headline font-semibold whitespace-pre-line">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </StaggerChildren>
            </div>

            {/* Decorative image */}
            <div className="hidden lg:block h-64 w-full rounded-xl overflow-hidden relative">
              <img
                className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
                alt="Abstract cinematic light leaks"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA3T1p39m-UqxpGamiTg5xCNm2AYg0E0r6907cBph5jOXVbX0b6lXTFPWAVAhlrC7534JTRRkLCGqOTMOmqGcUwiuOIxldSv9E8dh2iskQfUFDSHYU8LPFrm8xtdQFuqLwV63ZdOc3yB1fPDF1zRYUJuV8XPIVsAYJEGxfDAeX1vc3Oazm9mG-cap790UqDd4snTXGlJytPpnPZy95cwPawrxtg1BMgmZ7Q6hHbtkNk5ZohoE_2-vN3JoofS8Y7-pVpgU8Et0Gd7Iw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>
        </RevealOnScroll>

        {/* Right — Form */}
        <RevealOnScroll delay={0.2}>
          <div className="bg-surface-variant/40 backdrop-blur-2xl p-5 md:p-10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-outline-variant/15">
            <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
              {[
                { label: 'Full Name', placeholder: 'John Doe', type: 'text', name: 'name' as const },
                { label: 'Email Address', placeholder: 'john@multimedia.com', type: 'email', name: 'email' as const },
              ].map((field, i) => (
                <motion.div
                  key={field.label}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.55 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <label className="font-label text-xs uppercase tracking-[0.2em] text-on-surface/50">{field.label}</label>
                  <input
                    className="w-full bg-transparent border-b-2 border-outline-variant/20 focus:border-primary transition-colors py-2.5 md:py-3 px-0 font-headline text-base md:text-lg placeholder:text-on-surface/20 outline-none"
                    placeholder={field.placeholder}
                    type={field.type}
                    value={formData[field.name]}
                    onChange={(e) => setFormData(prev => ({ ...prev, [field.name]: e.target.value }))}
                    required
                  />
                </motion.div>
              ))}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <label className="font-label text-xs uppercase tracking-[0.2em] text-on-surface/50">Message</label>
                <textarea
                  className="w-full bg-transparent border-b-2 border-outline-variant/20 focus:border-primary transition-colors py-2.5 md:py-3 px-0 font-headline text-base md:text-lg placeholder:text-on-surface/20 resize-none outline-none"
                  placeholder="Briefly describe your production or project..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  required
                />
              </motion.div>

              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="text-[#4ade80] text-sm text-center font-body bg-[#4ade80]/10 py-3 rounded-md border border-[#4ade80]/20"
                >
                  Message sent successfully! We will get back to you soon.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="text-[#f87171] text-sm text-center font-body bg-[#f87171]/10 py-3 rounded-md border border-[#f87171]/20"
                >
                  Failed to send message. Please try again or use direct contact methods.
                </motion.div>
              )}

              <motion.button
                className="shimmer-effect w-full py-4 md:py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed font-headline font-bold uppercase tracking-widest text-sm rounded-sm shadow-[0_10px_30px_rgba(242,202,80,0.2)] disabled:opacity-70 disabled:cursor-not-allowed"
                type="submit"
                disabled={isSubmitting}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.88, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={isSubmitting ? {} : { scale: 1.02 }}
                whileTap={isSubmitting ? {} : { scale: 0.97 }}
              >
                {isSubmitting ? 'Sending...' : 'Initialize Project'}
              </motion.button>
            </form>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
}
