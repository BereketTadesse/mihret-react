import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import RevealOnScroll from '../components/animations/RevealOnScroll';
import StaggerChildren from '../components/animations/StaggerChildren';
import BlurText from '../components/animations/BlurText';
import { itemVariants, itemVariantsReduced } from '../components/animations/index';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const prefersReduced = useReducedMotion();
  const iv = prefersReduced ? itemVariantsReduced : itemVariants;
  const categories = ['all', 'movies-documentaries', 'commercials', 'digital-marketing', 'events'];

  const getCategoryLabel = (category: string) => {
    if (category === 'all') return 'All Work';
    if (category === 'movies-documentaries') return 'Movies & Documentaries';
    if (category === 'digital-marketing') return 'Digital Marketing';
    return category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');
  };

  const filteredStyle = (category: string) => {
    return filter === 'all' || filter === category
      ? { display: 'block', opacity: 1, transform: 'scale(1)' }
      : { display: 'none', opacity: 0, transform: 'scale(0.95)' };
  };

  const getBtnClass = (activeTarget: string) => {
    const base = "font-label tracking-widest uppercase transition-all pb-1";
    if (filter === activeTarget) return `${base} text-primary border-b-2 border-primary`;
    return `${base} text-on-surface-variant hover:text-on-surface`;
  };

  return (
    <>
      <main className="pt-32 pb-32 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">

        {/* Hero */}
        <section className="mb-20">
          <div className="max-w-4xl">
            <BlurText 
              text="Portfolio 2024"
              delay={30} stepDuration={0.45} animateBy="letters" direction="top"
              className="font-label text-primary tracking-[0.3em] uppercase mb-4 block"
            />
            
            <div style={{ overflow: 'hidden' }} className="mb-8">
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter leading-none text-on-surface">
                <BlurText text="Mihret Multimedia:" delay={180} stepDuration={0.45} animateBy="words" direction="top" className="mb-1" />
                <span className="text-primary-container">
                  <BlurText text="The Auteur's Vision." delay={180} stepDuration={0.45} animateBy="words" direction="top" />
                </span>
              </h1>
            </div>
            
            <BlurText 
              text="Crafting cinematic experiences that blur the line between reality and digital artistry. Every frame is a deliberate choice."
              delay={80} stepDuration={0.6} animateBy="words" direction="bottom"
              className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            />
            <motion.div className="flex gap-4"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}>
              <motion.button className="shimmer-btn relative bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 font-label font-bold tracking-widest uppercase overflow-hidden"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                Watch Showreel
              </motion.button>
              <motion.button className="border border-outline-variant/30 hover:bg-surface-container-high px-8 py-4 font-label font-bold tracking-widest uppercase transition-all"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                Inquiry
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Filter Bar */}
        <div className="sticky top-24 z-30 mb-12 py-4 -mx-6 px-6 overflow-x-auto no-scrollbar glass-blur bg-surface-variant/40 rounded-xl">
          <div className="flex items-center gap-8 min-w-max">
            {categories.map((cat) => (
              <button key={cat} className={getBtnClass(cat)} onClick={() => setFilter(cat)}>
                {getCategoryLabel(cat)}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <StaggerChildren staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[240px]">
          <motion.div variants={iv} style={filteredStyle('movies-documentaries')}
            className="col-span-1 sm:col-span-2 row-span-2 group relative overflow-hidden bg-surface-container-low cursor-pointer"
            whileHover={{ scale: 1.012 }} transition={{ type: 'spring', stiffness: 250, damping: 24 }}>
            <img alt="The Obsidian Night" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJNu8nN5q_h8q6T0x67FAE6i_leNjM58SBqZI93tjZEA2AshvUTXQ8lJrQYla2xWcUHHTHUse_Szk6ZZPpO4EF0QekKELLEoGPW1i749-jAfBCc4EpdlLx17lMGuvxzLkrtHuyfAJpaJCNtlzQp-GpUOIuzwH3e6jSrjcihmAJEYwYRdYOx9UmYtynS3iu5LP8JUKWqwk5wIzKM6rrT_bJTFm6oNIBWeLR2kKKxLa2roWtQT5cFEwws6Xdyey7oXrOcDI0gSciZU3H" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
              <span className="material-symbols-outlined text-primary text-7xl drop-shadow-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
            </div>
            <div className="absolute bottom-6 left-6">
              <span className="font-label text-primary-container text-xs mb-2 block tracking-widest">FEATURE FILM</span>
              <h3 className="text-2xl font-headline font-bold uppercase tracking-tight">The Obsidian Night</h3>
            </div>
          </motion.div>

          <motion.div variants={iv} style={filteredStyle('movies-documentaries')}
            className="col-span-1 row-span-2 group relative overflow-hidden bg-surface-container-low cursor-pointer"
            whileHover={{ scale: 1.012 }} transition={{ type: 'spring', stiffness: 250, damping: 24 }}>
            <img alt="Documentary Series" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6OXangioR7ufhf8ELhqhIJq3pi6XkR_ltgXgowOmqjwsAnAhW-sEO6vkkhgmgljjhILEuoI6f9GZz_N-mYlcNXaVVSiTpBQ0PRnKQeZ0JeFsmOSTVbsJLiAzg2Id8JkHLaqg7C0nKYJIEyWAdPQisJGIlMX2mPeN4VXYAK8MmCCRT7BiuwAFQOz7Xslqs2qjH7eTE-uycGOKgjBXQtvw9heGEvjQgcUqaDjCffhnavfhJXO6OA5x5QISqDcDhbbD_4Ns2OKtOBww7" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
            </div>
            <div className="absolute bottom-6 left-6">
              <span className="font-label text-primary-container text-xs mb-2 block tracking-widest">DOCUMENTARY</span>
              <h3 className="text-xl font-headline font-bold uppercase tracking-tight">Unfiltered Souls</h3>
            </div>
          </motion.div>

          <motion.div variants={iv} style={filteredStyle('commercials')}
            className="col-span-1 row-span-1 group relative overflow-hidden bg-surface-container-low cursor-pointer"
            whileHover={{ scale: 1.012 }} transition={{ type: 'spring', stiffness: 250, damping: 24 }}>
            <img alt="Commercial" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUzFDZ2fPdP5GgvEUXD8UftDBq6hF6TKddAgieEQkaNj3hR6wv5ZKKXkewFzx88SQbYI4VNikm2VTz9m5pq-iGAoYgk0PWfaT5GkzE3B9WFCCnNeOFgRKpisbEcHWmRo1RdOldPpkyggwAKlQEWl6DiCGKCGUNPWSVFHR3Yyh_oqI2S3Aog_kWnjd4j3Fv-yV5sca0HDGtkGkvJK6QcUOwvMyfqMD24IXcfZEkdNFJP1u2YzoMq5QCibR7NujKWko9ioHHRveCYqiu" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="font-label text-primary-container text-[10px] mb-1 block tracking-widest">COMMERCIAL</span>
              <h3 className="text-lg font-headline font-bold uppercase tracking-tight">Aura Fragrance</h3>
            </div>
          </motion.div>

          <motion.div variants={iv} style={filteredStyle('events')}
            className="col-span-1 row-span-1 group relative overflow-hidden bg-surface-container-low cursor-pointer"
            whileHover={{ scale: 1.012 }} transition={{ type: 'spring', stiffness: 250, damping: 24 }}>
            <img alt="Event" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5BRQ-cA9o1d4-UAryBcPxp46TLSQhXJS_2hV7io2t6BzRzQlhz1mjwJJeLBI5cRiD0m6KGx4xailGrAHCwM0YRaH1p-0iad0U1MAFRyMFNCYXRE7Oof15UkRa2AQATpC3u8qmX5sRdV1L5bvyWXOye9nsem9N3Ol491SknM_cMgWouAl_R_1E97TXIJewRl5aVl9d5qtX6z_kfIPYSKEO41vMBHgfKPqFrjOGtrOdz9yqC4HtKYPWQfPzKAIrYeWBKL0_uXWjNiqL" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="font-label text-primary-container text-[10px] mb-1 block tracking-widest">EVENT</span>
              <h3 className="text-lg font-headline font-bold uppercase tracking-tight">Vortex Festival</h3>
            </div>
          </motion.div>

          <motion.div variants={iv} style={filteredStyle('digital-marketing')}
            className="col-span-1 row-span-1 group relative overflow-hidden bg-surface-container-low cursor-pointer"
            whileHover={{ scale: 1.012 }} transition={{ type: 'spring', stiffness: 250, damping: 24 }}>
            <img alt="Digital Marketing Campaign" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANKzDg_5uwG88FloO3MqOmTsfhGoqZW3PQ1aKAu-tUgSqLB20Gvp5CqvYHbOVQNASwpC0jWuTY_leKDNwZIcuYA7qFLVln_ZE3N-3zRBw73wS-rfIUm8SWOfM7de8dMg4hFN3gvUURQwJ064KuUTld6SvCk8Y-FDezocEen-Wic6ZRpSJWmxD2lB1Eo1-QKtnhGqflPfNPGYvTTFlCPj5IZaJKw6nZSaCYNzBYzy74q6SS6Xn_hPF465PhOe0MeNhrQlmUaPgGe72Jk" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70 group-hover:opacity-45 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="font-label text-primary-container text-[10px] mb-1 block tracking-widest">DIGITAL MARKETING</span>
              <h3 className="text-lg font-headline font-bold uppercase tracking-tight">Growth Campaign</h3>
            </div>
          </motion.div>

          <motion.div variants={iv} style={filteredStyle('experimental')}
            className="col-span-1 row-span-1 group relative overflow-hidden bg-surface-container-low cursor-pointer">
            <img alt="Experimental" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlkHsTlyZvYfRC1-VMLzTKj1oJzQ2InHKkipyi5CGS9opNpRKVVtmBl6tkx_k2NTJGHlfa-83MRZ8MQstK16LVkVeXQdRukaAEgns5EqXM3Sy2ZzA56ntWbtjCnU3dMpXAv0nuSTzd_qcVH96PrhO1IGSlkFtRX-41Gwad_kV_kw5gL2llcH5lMeAQjS5SNTQsy5xasU99Ql7gCg6_bDEFCzgf46Ao_R4BAlj1hEc1fjrmvBEPSpmnDgek21s9nJTGu7BfP5RVKfL_" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
            <div className="absolute bottom-4 left-4">
              <span className="font-label text-primary-container text-[10px] mb-1 block tracking-widest">EXPERIMENTAL</span>
              <h3 className="text-lg font-headline font-bold uppercase tracking-tight">Lens Distortion</h3>
            </div>
          </motion.div>

          <motion.div variants={iv} style={filteredStyle('events')}
            className="col-span-1 row-span-1 group relative overflow-hidden bg-surface-container-low cursor-pointer">
            <img alt="Awards" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnoiEZwb20sSkXyBvDxmtj8GtGqaRDZvMla5j3b7FWfWrhbnc-d7HQVs5HVSrTA7PSaLjw71u_qqeBWk-Z25SNepNPXao3yoL8OxyvXYF71-0eesV_Ab66afFIKTG6C71S5BTameo6WxrQFOv3Ps-dyte0Vu9J9wWrjLYqcY-_esdkvupdK1Un4tUUC1bX4EGhVK5RBqMFKJX6TceY-QTeh-0EgjMqVWW8HE-u0R9ZeGVhBItHdvDxbBiRK6W1beCn9aWaw1UmIW-0" />
            <div className="absolute inset-0 bg-surface-container-highest/60 flex flex-col items-center justify-center text-center p-6">
              <span className="material-symbols-outlined text-primary text-4xl mb-2">star</span>
              <h3 className="text-lg font-headline font-bold uppercase tracking-widest">Awards &amp; Recognition</h3>
              <p className="text-[10px] font-label text-on-surface/50 mt-2">12 International Selections</p>
            </div>
          </motion.div>
        </StaggerChildren>

        {/* CTA */}
        <RevealOnScroll delay={0.1}>
          <section className="mt-32 py-24 bg-surface-container-lowest text-center rounded-2xl">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter uppercase mb-6 flex flex-wrap justify-center gap-x-3">
              <BlurText text="Start" delay={120} stepDuration={0.45} animateBy="words" direction="top" />
              <BlurText text="Your" delay={120} stepDuration={0.45} animateBy="words" direction="top" />
              <span className="text-primary italic">
                <BlurText text="Project" delay={120} stepDuration={0.45} animateBy="words" direction="top" />
              </span>
            </h2>
            <BlurText
              text="Let's redefine the cinematic landscape together. Our team is ready to bring your vision to life with precision and passion."
              delay={60} stepDuration={0.45} animateBy="words" direction="bottom"
              className="text-on-surface-variant max-w-xl mx-auto mb-10 px-4 leading-relaxed"
            />
            <motion.button className="shimmer-btn relative bg-gradient-to-br from-primary to-primary-container text-on-primary px-12 py-5 font-label font-bold tracking-[0.2em] uppercase overflow-hidden"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
              Let&apos;s Talk
            </motion.button>
          </section>
        </RevealOnScroll>
      </main>
    </>
  );
}
