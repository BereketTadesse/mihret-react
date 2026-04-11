import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLenis } from 'lenis/react';
import { findProject } from '../data/projects';
import RevealOnScroll from '../components/animations/RevealOnScroll';
import BlurText from '../components/animations/BlurText';

export default function ProjectDetail() {
  const { categoryId, slug } = useParams<{ categoryId: string; slug: string }>();
  const navigate = useNavigate();
  const lenis = useLenis();
  const [activeImage, setActiveImage] = useState(0);

  // Scroll to top every time the project slug changes
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    setActiveImage(0); // also reset to first image
  }, [slug, lenis]);

  const result = findProject(categoryId ?? '', slug ?? '');

  if (!result) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 font-body">
        <span className="material-symbols-outlined text-6xl text-primary">error</span>
        <h1 className="font-headline text-3xl font-bold uppercase">Project not found</h1>
        <Link to="/portfolio" className="text-primary text-sm font-label uppercase tracking-widest hover:underline">
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  const { category, project } = result;

  // Sibling projects (same category, excluding current)
  const siblings = category.projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <main className="min-h-screen font-body pb-32">

      {/* ── Hero image ─────────────────────────────────────────────── */}
      <div className="relative w-full bg-black" style={{ minHeight: '60vh' }}>
        <motion.img
          key={activeImage}
          src={project.images[activeImage]}
          alt={project.title}
          className="w-full object-contain"
          style={{ maxHeight: '80vh', minHeight: '55vh', display: 'block', margin: '0 auto' }}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />

        {/* Back button */}
        <motion.button
          onClick={() => navigate(`/portfolio`)}
          className="absolute top-6 left-6 md:top-10 md:left-10 flex items-center gap-2 text-[11px] font-label uppercase tracking-[0.2em] text-white bg-black/30 backdrop-blur-md border border-white/15 px-5 py-3 rounded-full hover:bg-primary hover:border-primary transition-all duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Portfolio
        </motion.button>

        {/* Category badge */}
        <motion.div
          className="absolute top-6 right-6 md:top-10 md:right-10"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
        >
          <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${category.accent} text-white text-[10px] font-label font-bold uppercase tracking-widest shadow-xl`}>
            <span className="material-symbols-outlined text-sm">{category.icon}</span>
            {category.label}
          </span>
        </motion.div>

        {/* Hero title block */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-20 pb-12 md:pb-16">
          <motion.span
            key={project.slug + '-type'}
            className="font-label text-primary text-[10px] tracking-[0.3em] uppercase mb-4 block"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {project.type}
          </motion.span>
          <div style={{ overflow: 'hidden' }}>
            <BlurText
              key={project.slug + '-title'}
              text={project.title}
              delay={120}
              stepDuration={0.4}
              animateBy="words"
              direction="top"
              className="font-headline text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none"
            />
          </div>
        </div>
      </div>

      {/* ── Thumbnail strip ─────────────────────────────────────────── */}
      {project.images.length > 1 && (
        <div className="px-6 md:px-20 mt-6 flex gap-3">
          {project.images.map((img, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                activeImage === i
                  ? 'border-primary shadow-[0_0_20px_rgba(201,75,28,0.4)]'
                  : 'border-outline-variant/20 opacity-50 hover:opacity-80'
              }`}
              style={{ width: '120px', aspectRatio: '16/9' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <img src={img} alt={`Still ${i + 1}`} className="w-full h-full object-contain bg-black" />
              {activeImage === i && (
                <div className="absolute inset-0 border-2 border-primary/40 rounded-xl pointer-events-none" />
              )}
            </motion.button>
          ))}
        </div>
      )}

      {/* ── Content ─────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-14">

        {/* Left: description */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          <RevealOnScroll key={project.slug + '-desc'}>
            <div className="flex flex-col gap-4">
              <span className="font-label text-[9px] uppercase tracking-[0.3em] text-on-surface-variant/60">About this project</span>
              <h2 className="font-headline text-2xl md:text-3xl font-bold uppercase tracking-tight">
                {project.title}
              </h2>
              <p className="text-on-surface/80 text-base md:text-lg leading-relaxed">
                {project.fullDescription ?? project.description}
              </p>
            </div>
          </RevealOnScroll>

          {/* All images gallery — show all stills */}
          {project.images.length > 1 && (
            <RevealOnScroll key={project.slug + '-gallery'} delay={0.1}>
              <div className="flex flex-col gap-4">
                <span className="font-label text-[9px] uppercase tracking-[0.3em] text-on-surface-variant/60">Production Stills</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.images.map((img, i) => (
                    <motion.div
                      key={i}
                      className="relative overflow-hidden rounded-2xl cursor-pointer group border border-outline-variant/10 bg-black"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setActiveImage(i)}
                      transition={{ type: 'spring', stiffness: 250, damping: 26 }}
                    >
                      <img
                        src={img}
                        alt={`Still ${i + 1}`}
                        className="w-full object-contain transition-opacity duration-500 group-hover:opacity-90"
                        style={{ maxHeight: '320px', minHeight: '180px', display: 'block', margin: '0 auto' }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          fullscreen
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          )}
        </div>

        {/* Right: metadata panel */}
        <div className="lg:col-span-1">
          <RevealOnScroll key={project.slug + '-meta'} delay={0.15}>
            <div className="sticky top-28 flex flex-col gap-1">
              {/* Meta card */}
              <div className="rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-8 flex flex-col gap-6">
                <span className="font-label text-[9px] uppercase tracking-[0.3em] text-on-surface-variant/60">Project Info</span>

                {[
                  { label: 'Project Type', value: project.type, icon: 'category' },
                  { label: 'Client', value: project.client, icon: 'business' },
                  { label: 'Crew', value: project.crew, icon: 'group' },
                  ...(project.year ? [{ label: 'Year', value: project.year, icon: 'calendar_today' }] : []),
                  ...(project.location ? [{ label: 'Location', value: project.location, icon: 'location_on' }] : []),
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 pb-5 border-b border-outline-variant/15 last:border-0 last:pb-0">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-primary text-[18px]">{item.icon}</span>
                    </div>
                    <div>
                      <p className="font-label text-[9px] uppercase tracking-[0.22em] text-on-surface-variant/50 mb-1">{item.label}</p>
                      <p className="font-body text-sm text-on-surface leading-snug">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Category card */}
              <div className={`mt-4 rounded-2xl bg-gradient-to-br ${category.accent} p-6 flex flex-col gap-3 text-white`}>
                <span className="material-symbols-outlined text-2xl text-white/80">{category.icon}</span>
                <p className="font-label text-[9px] uppercase tracking-[0.25em] text-white/60">{category.label}</p>
                <p className="font-body text-sm leading-relaxed text-white/80">{category.serviceDescription}</p>
              </div>

              {/* CTA */}
              <motion.div className="mt-4" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-3 w-full shimmer-btn bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 font-label font-bold tracking-[0.18em] uppercase text-[11px] shadow-[0_12px_40px_rgba(201,75,28,0.25)]"
                >
                  Start a Similar Project
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </motion.div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* ── Siblings ─────────────────────────────────────────────────── */}
      {siblings.length > 0 && (
        <RevealOnScroll delay={0.1}>
          <section className="max-w-7xl mx-auto px-6 md:px-20 mt-24">
            <div className="flex items-center gap-6 mb-10">
              <div>
                <span className="font-label text-[9px] uppercase tracking-[0.3em] text-on-surface-variant/50 block mb-1">Same Category</span>
                <h3 className="font-headline text-2xl font-bold uppercase tracking-tight">More in {category.label}</h3>
              </div>
              <div className="flex-1 h-px bg-outline-variant/20 hidden md:block" />
              <Link
                to="/portfolio"
                className="hidden md:flex items-center gap-2 text-[10px] font-label uppercase tracking-widest text-primary hover:underline shrink-0"
              >
                View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {siblings.map((sib, i) => (
                <motion.div
                  key={sib.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={`/portfolio/${categoryId}/${sib.slug}`}
                    className="group block rounded-2xl overflow-hidden border border-outline-variant/15 bg-surface-container-lowest hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="aspect-video overflow-hidden relative bg-black">
                      <img
                        src={sib.images[0]}
                        alt={sib.title}
                        className="w-full h-full object-contain transition-opacity duration-500 group-hover:opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute top-3 left-3 font-label text-[9px] tracking-[0.25em] uppercase text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                        {sib.type}
                      </span>
                    </div>
                    <div className="p-5">
                      <h4 className="font-headline text-lg font-bold uppercase tracking-tight group-hover:text-primary transition-colors duration-300">
                        {sib.title}
                      </h4>
                      <p className="text-on-surface-variant text-sm mt-1 line-clamp-2 font-body">{sib.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        </RevealOnScroll>
      )}

    </main>
  );
}
