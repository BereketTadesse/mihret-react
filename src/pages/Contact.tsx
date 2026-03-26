import { motion } from 'framer-motion';
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
  return (
    <main className="min-h-screen pt-32 pb-40 px-6 max-w-7xl mx-auto font-body">

      {/* Hero */}
      <section className="mb-20">
        <BlurText
          text="Studio Contact"
          delay={30} stepDuration={0.45} animateBy="letters" direction="top"
          className="font-label text-primary tracking-[0.25em] uppercase text-xs font-bold mb-4 block"
        />
        <div style={{ overflow: 'hidden' }} className="mb-4">
          <h1 className="font-headline font-bold text-5xl md:text-7xl tracking-[-0.04em] text-on-surface flex flex-wrap gap-x-3 items-center">
            <BlurText text="GET IN" delay={180} stepDuration={0.45} animateBy="words" direction="top" />
            <span className="text-primary">
              <BlurText text="TOUCH" delay={180} stepDuration={0.45} animateBy="words" direction="top" />
            </span>
          </h1>
        </div>
        <BlurText
          text="Elevate your cinematic vision. Our studio doors are open for auteurs, creators, and visionaries ready to redefine multimedia."
          delay={60} stepDuration={0.45} animateBy="words" direction="bottom"
          className="font-body text-on-surface/60 text-lg md:text-xl max-w-xl leading-relaxed"
        />
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

        {/* Left — Contact Details */}
        <RevealOnScroll delay={0.1}>
          <div className="space-y-12">
            <div className="bg-surface-variant/40 backdrop-blur-2xl p-10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-outline-variant/15">
              <StaggerChildren staggerDelay={0.1} containerDelay={0.05}>
                {contactDetails.map((item) => (
                  <motion.div key={item.label} variants={itemVariants} className="flex items-start gap-6 mb-10 last:mb-0">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg flex-shrink-0">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                    </div>
                    <div>
                      <p className="font-label text-primary uppercase tracking-[0.1em] text-xs mb-1">{item.label}</p>
                      <p className="text-xl font-headline font-semibold whitespace-pre-line">{item.value}</p>
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
          <div className="bg-surface-variant/40 backdrop-blur-2xl p-10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-outline-variant/15">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              {[
                { label: 'Full Name', placeholder: 'John Doe', type: 'text' },
                { label: 'Email Address', placeholder: 'john@multimedia.com', type: 'email' },
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
                    className="w-full bg-transparent border-b-2 border-outline-variant/20 focus:border-primary transition-colors py-3 px-0 font-headline text-lg placeholder:text-on-surface/20 outline-none"
                    placeholder={field.placeholder}
                    type={field.type}
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
                  className="w-full bg-transparent border-b-2 border-outline-variant/20 focus:border-primary transition-colors py-3 px-0 font-headline text-lg placeholder:text-on-surface/20 resize-none outline-none"
                  placeholder="Briefly describe your production or project..."
                  rows={4}
                />
              </motion.div>
              <motion.button
                className="shimmer-effect w-full py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed font-headline font-bold uppercase tracking-widest text-sm rounded-sm shadow-[0_10px_30px_rgba(242,202,80,0.2)]"
                type="submit"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.88, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Initialize Project
              </motion.button>
            </form>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
}
