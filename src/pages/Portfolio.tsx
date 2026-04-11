import { useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { CATEGORIES, type Category, type Project } from '../data/projects';
import RevealOnScroll from '../components/animations/RevealOnScroll';
import BlurText from '../components/animations/BlurText';

/* ── Sub-components ─────────────────────────────────────────────────── */
function FeaturedCard({
  project,
  categoryId,
}: {
  project: Project;
  categoryId: string;
}) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="group cursor-pointer rounded-3xl overflow-hidden bg-black shadow-2xl border border-white/5"
      onClick={() => navigate(`/portfolio/${categoryId}/${project.slug}`)}
    >
      {/* Image area */}
      <motion.div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: '16/9' }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 200, damping: 26 }}
      >
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent md:from-black md:via-black/50" />

        {/* Thumbnail strip */}
        {project.images[1] && (
          <motion.div
            className="absolute top-6 right-6 w-28 md:w-40 aspect-video rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl"
            animate={{ opacity: hovered ? 1 : 0.55, scale: hovered ? 1.04 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <img src={project.images[1]} alt="Still" className="w-full h-full object-contain bg-black" />
          </motion.div>
        )}

        {/* Hover pill */}
        <motion.div
          className="absolute top-6 left-6 flex items-center gap-2 bg-primary text-on-primary text-[10px] font-label font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-xl"
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.3 }}
        >
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
          View Project
        </motion.div>

        {/* Mobile: minimal title inside image */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:hidden">
          <span className="font-label text-primary text-[9px] tracking-[0.28em] uppercase bg-primary/15 border border-primary/30 px-3 py-1 rounded-full">
            {project.type}
          </span>
          <h3 className="font-headline text-xl font-black uppercase tracking-tighter leading-tight text-white mt-2">
            {project.title}
          </h3>
        </div>

        {/* Desktop: full overlay content */}
        <div className="absolute inset-0 hidden md:flex flex-col justify-end p-8 md:p-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-label text-primary text-[10px] tracking-[0.3em] uppercase bg-primary/15 border border-primary/30 px-4 py-1.5 rounded-full">
              {project.type}
            </span>
            <div className="h-px flex-1 bg-white/15" />
            <span className="text-white/50 text-[10px] font-label tracking-widest uppercase">Featured</span>
          </div>
          <h3 className="font-headline text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4 text-white">
            {project.title}
          </h3>
          <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl mb-6 font-body">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-6 text-xs font-label uppercase tracking-widest text-white/50 border-t border-white/10 pt-5">
            <span>
              <strong className="text-white/80">Client</strong> — {project.client}
            </span>
            <span>
              <strong className="text-white/80">Crew</strong> — {project.crew}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Mobile only: description + meta below image */}
      <div className="md:hidden p-4 bg-surface-container-lowest">
        <p className="text-on-surface-variant text-xs leading-relaxed mb-3 font-body line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-[10px] font-label uppercase tracking-widest text-on-surface-variant border-t border-outline-variant/20 pt-3">
          <span>
            <strong className="text-on-surface">Client</strong> — {project.client}
          </span>
          <span>
            <strong className="text-on-surface">Crew</strong> — {project.crew}
          </span>
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-primary text-[10px] font-bold uppercase tracking-widest">
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
          View Project
        </div>
      </div>
    </div>
  );
}


function ProjectCard({
  project,
  index,
  categoryId,
}: {
  project: Project;
  index: number;
  categoryId: string;
}) {
  const navigate = useNavigate();

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl cursor-pointer bg-surface-container-lowest border border-outline-variant/15 hover:border-primary/30 transition-colors duration-300"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      onClick={() => navigate(`/portfolio/${categoryId}/${project.slug}`)}
    >
      {/* Image */}
      <div className="aspect-video overflow-hidden relative bg-black">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Dual image hint */}
        {project.images[1] && (
          <div className="absolute bottom-4 right-4 w-16 h-10 rounded-lg overflow-hidden border border-white/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-xl">
            <img src={project.images[1]} alt="" className="w-full h-full object-contain bg-black" />
          </div>
        )}

        <span className="absolute top-4 left-4 font-label text-[9px] tracking-[0.28em] uppercase text-primary bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-primary/25">
          {project.type}
        </span>

        {/* Hover arrow */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
          <span className="material-symbols-outlined text-on-primary text-sm">arrow_forward</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="font-headline text-xl font-bold uppercase tracking-tight text-on-surface mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h4>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-5 font-body line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-col gap-1.5 text-[11px] font-label uppercase tracking-wider text-on-surface-variant border-t border-outline-variant/20 pt-4">
          <span>
            <strong className="text-on-surface">Client:</strong> {project.client}
          </span>
          <span className="text-primary">
            <strong className="text-on-surface">Crew:</strong> {project.crew}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function EmptyCategoryPlaceholder({ category }: { category: Category }) {
  return (
    <RevealOnScroll>
      <div className="relative w-full rounded-3xl overflow-hidden border border-outline-variant/15 bg-surface-container-lowest flex flex-col items-center justify-center text-center py-24 px-8 gap-6">
        <div
          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.accent} flex items-center justify-center shadow-xl`}
        >
          <span className="material-symbols-outlined text-white text-4xl">{category.icon}</span>
        </div>
        <div>
          <h3 className="font-headline text-2xl font-bold uppercase tracking-tight text-on-surface mb-2">
            {category.label}
          </h3>
          <p className="text-on-surface-variant text-base font-body italic mb-1">{category.tagline}</p>
          <p className="text-on-surface-variant/60 text-sm font-label tracking-widest uppercase">
            Projects Coming Soon
          </p>
        </div>
        <Link
          to="/contact"
          className="flex items-center gap-2 text-[11px] font-label uppercase tracking-[0.18em] text-primary border border-primary/30 hover:bg-primary hover:text-on-primary px-6 py-3 rounded-sm transition-all duration-300"
        >
          Inquire About This Service
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </Link>
      </div>
    </RevealOnScroll>
  );
}

/* ── Main Component ─────────────────────────────────────────────────── */
export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('movies-documentaries');
  const prefersReduced = useReducedMotion();
  const contentRef = useRef<HTMLDivElement>(null);

  const activeCat = CATEGORIES.find((c) => c.id === activeCategory)!;
  const featured = activeCat.projects.find((p) => p.featured);
  const rest = activeCat.projects.filter((p) => !p.featured);

  const handleSelect = (id: string) => {
    setActiveCategory(id);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  return (
    <>
      <main className="min-h-screen font-body">
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative w-full pt-28 md:pt-40 pb-16 md:pb-28 px-4 md:px-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,75,28,0.12),transparent_55%)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[min(720px,90vw)] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <BlurText
              text="Our Portfolio"
              delay={30}
              stepDuration={0.45}
              animateBy="letters"
              direction="top"
              className="font-label text-primary tracking-[0.3em] uppercase mb-6 block text-xs"
            />
            <div style={{ overflow: 'hidden' }} className="mb-4 md:mb-6">
              <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] leading-none flex flex-col items-start gap-1">
                <BlurText text="CRAFTED" delay={180} stepDuration={0.45} animateBy="words" direction="top" />
                <span className="text-primary italic">
                  <BlurText text="STORIES," delay={180} stepDuration={0.45} animateBy="words" direction="top" />
                </span>
                <BlurText text="PROVEN IMPACT." delay={180} stepDuration={0.45} animateBy="words" direction="top" />
              </h1>
            </div>
            <BlurText
              text="Explore our body of work across film, events, branding, and digital — each project a testament to craft, vision, and execution."
              delay={60}
              stepDuration={0.5}
              animateBy="words"
              direction="bottom"
              className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed"
            />
          </div>
        </section>

        {/* ── Mobile category chip strip (hidden on lg+) ─────────────── */}
        <div className="lg:hidden px-4 pb-4 pt-2">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelect(cat.id)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wide border transition-all duration-300 active:scale-95 ${
                    isActive
                      ? 'bg-primary text-on-primary border-primary shadow-[0_4px_20px_rgba(201,75,28,0.35)]'
                      : 'border-outline-variant/25 bg-surface-container-low text-on-surface-variant'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[15px] ${isActive ? 'text-on-primary' : 'text-primary'}`}>{cat.icon}</span>
                  {cat.label}
                  {cat.projects.length > 0 && (
                    <span className={`text-[9px] font-black rounded-full px-1.5 py-0.5 ${
                      isActive ? 'bg-white/25 text-white' : 'bg-primary/10 text-primary'
                    }`}>{cat.projects.length}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Two-column layout: Sidebar + Content ──────────────────────── */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-16 pb-28 md:pb-40 flex flex-col lg:flex-row gap-6 lg:gap-16 relative">
          {/* ── Sticky Sidebar — hidden on mobile, lg+ only ─────────────── */}
          <aside className="hidden lg:block lg:w-[280px] xl:w-[310px] shrink-0">
            <div className="lg:sticky lg:top-28 flex flex-col gap-2">
              <p className="font-label text-[9px] uppercase tracking-[0.3em] text-on-surface-variant/60 px-1 mb-3">
                Service Categories
              </p>
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <motion.button
                    key={cat.id}
                    onClick={() => handleSelect(cat.id)}
                    className={`group relative w-full flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all duration-300 overflow-hidden border ${
                      isActive
                        ? 'bg-primary text-on-primary border-primary shadow-[0_8px_30px_rgba(201,75,28,0.3)]'
                        : 'border-outline-variant/20 hover:border-primary/30 hover:bg-surface-container-high text-on-surface'
                    }`}
                    whileHover={isActive ? {} : { x: 4 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                  >
                    <span
                      className={`material-symbols-outlined text-xl shrink-0 ${
                        isActive ? 'text-on-primary' : 'text-primary'
                      }`}
                    >
                      {cat.icon}
                    </span>
                    <span className="font-label text-[12px] font-bold uppercase tracking-wide leading-snug flex-1">
                      {cat.label}
                    </span>
                    {cat.projects.length > 0 && (
                      <span
                        className={`text-[10px] font-black rounded-full px-2 py-0.5 shrink-0 ${
                          isActive ? 'bg-white/20 text-on-primary' : 'bg-primary/10 text-primary'
                        }`}
                      >
                        {cat.projects.length}
                      </span>
                    )}
                  </motion.button>
                );
              })}

              {/* Sidebar CTA */}
              <div className="mt-6 p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/15 flex flex-col gap-3">
                <span className="material-symbols-outlined text-primary text-2xl">send</span>
                <p className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant">
                  Start a project with us
                </p>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 text-[10px] font-label font-bold uppercase tracking-[0.18em] text-primary hover:underline"
                >
                  Get in touch
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </aside>

          {/* ── Main Content ──────────────────────────────────────────────── */}
          <div ref={contentRef} className="flex-1 min-w-0 pt-2 scroll-mt-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: prefersReduced ? 0 : -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-5 mb-10">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activeCat.accent} flex items-center justify-center shadow-lg shrink-0`}
                  >
                    <span className="material-symbols-outlined text-white text-2xl">{activeCat.icon}</span>
                  </div>
                  <div>
                    <h2 className="font-headline text-2xl md:text-3xl font-black uppercase tracking-tight text-on-surface leading-none">
                      {activeCat.label}
                    </h2>
                    <p className="text-on-surface-variant text-sm font-body italic mt-1">{activeCat.tagline}</p>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-outline-variant/30 to-transparent hidden md:block" />
                  {activeCat.projects.length > 0 && (
                    <span className="hidden md:flex font-label text-[10px] uppercase tracking-widest text-primary border border-primary/25 bg-primary/5 px-4 py-2 rounded-full">
                      {activeCat.projects.length} projects
                    </span>
                  )}
                </div>

                {activeCat.projects.length === 0 ? (
                  <EmptyCategoryPlaceholder category={activeCat} />
                ) : (
                  <div className="flex flex-col gap-12">
                    {/* Featured hero card */}
                    {featured && (
                      <RevealOnScroll>
                        <FeaturedCard project={featured} categoryId={activeCategory} />
                      </RevealOnScroll>
                    )}

                    {/* Divider */}
                    {featured && rest.length > 0 && (
                      <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-outline-variant/20" />
                        <span className="font-label text-[9px] uppercase tracking-[0.3em] text-on-surface-variant/50">
                          More from this category
                        </span>
                        <div className="h-px flex-1 bg-outline-variant/20" />
                      </div>
                    )}

                    {/* Card grid */}
                    {rest.length > 0 && (
                      <div
                        className={`grid gap-6 ${
                          rest.length === 1
                            ? 'grid-cols-1 md:grid-cols-2'
                            : 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
                        }`}
                      >
                        {rest.map((project, i) => (
                          <ProjectCard
                            key={project.id}
                            project={project}
                            index={i}
                            categoryId={activeCategory}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <RevealOnScroll>
          <section className="mx-4 md:mx-10 lg:mx-16 mb-20 relative overflow-hidden rounded-3xl border border-outline-variant/10 bg-surface-container-lowest">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(201,75,28,0.10),transparent_55%)]" />
            <div className="relative z-10 text-center py-24 px-6">
              <h2 className="font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 flex flex-wrap justify-center gap-x-4">
                <BlurText text="Ready to create" delay={120} stepDuration={0.45} animateBy="words" direction="top" />
                <span className="text-primary italic">
                  <BlurText
                    text="something iconic?"
                    delay={120}
                    stepDuration={0.45}
                    animateBy="words"
                    direction="top"
                  />
                </span>
              </h2>
              <BlurText
                text="Let's redefine the cinematic landscape together. Our team is ready to bring your vision to life with precision and passion."
                delay={60}
                stepDuration={0.45}
                animateBy="words"
                direction="bottom"
                className="text-on-surface-variant max-w-xl mx-auto mb-10 px-4 leading-relaxed font-body"
              />
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 shimmer-btn bg-gradient-to-br from-primary to-primary-container text-on-primary px-12 py-5 font-label font-bold tracking-[0.2em] uppercase shadow-[0_20px_60px_rgba(201,75,28,0.25)]"
                >
                  Let&apos;s Talk
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </motion.div>
            </div>
          </section>
        </RevealOnScroll>
      </main>
    </>
  );
}
