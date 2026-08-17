import { useState, useEffect, useRef, type PointerEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import RevealOnScroll from '../components/animations/RevealOnScroll';
import StaggerChildren from '../components/animations/StaggerChildren';
import BlurText from '../components/animations/BlurText';
import { itemVariants, itemVariantsReduced } from '../components/animations/index';
import { CATEGORIES } from '../data/projects';

export default function Home() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);

  // Load YouTube IFrame API and create player when video starts
  useEffect(() => {
    if (!isPlaying) return;

    const initPlayer = () => {
      playerRef.current = new (window as any).YT.Player('yt-player', {
        videoId: YOUTUBE_ID,
        playerVars: { autoplay: 1, rel: 0, modestbranding: 1 },
        events: {
          onStateChange: (event: any) => {
            // YT.PlayerState.ENDED === 0
            if (event.data === 0) {
              setIsPlaying(false);
            }
          },
        },
      });
    };

    if ((window as any).YT && (window as any).YT.Player) {
      initPlayer();
    } else {
      // Script not loaded yet — inject it
      if (!document.getElementById('yt-api-script')) {
        const tag = document.createElement('script');
        tag.id = 'yt-api-script';
        tag.src = 'https://www.youtube.com/iframe_api';
        document.head.appendChild(tag);
      }
      (window as any).onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      // Destroy player on cleanup to avoid memory leaks
      if (playerRef.current?.destroy) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [isPlaying]);
  const allProjects = CATEGORIES.flatMap(c => c.projects.map(p => ({ ...p, categoryId: c.id })));
  const homeFeatured = allProjects.filter(p => p.featured);
  const displayProjects = homeFeatured.length >= 3 ? homeFeatured.slice(0, 3) : allProjects.slice(0, 3);
  const mainProject = displayProjects[0];
  const sideProject1 = displayProjects[1];
  const sideProject2 = displayProjects[2];
  const prefersReduced = useReducedMotion();
  const iv = prefersReduced ? itemVariantsReduced : itemVariants;
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const tiltXRaw = useMotionValue(0);
  const tiltYRaw = useMotionValue(0);
  const tiltX = useSpring(tiltXRaw, { stiffness: 240, damping: 26, mass: 0.8 });
  const tiltY = useSpring(tiltYRaw, { stiffness: 240, damping: 26, mass: 0.8 });
  const glareLayer = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(201,75,28,0.34), rgba(201,75,28,0.18) 16%, rgba(201,75,28,0.08) 30%, transparent 62%)`;
  const sheenLayer = useMotionTemplate`linear-gradient(135deg, transparent 18%, rgba(255,255,255,0.08) 48%, transparent 74%)`;

  const updateGlare = (event: PointerEvent<HTMLDivElement>) => {
    if (prefersReduced) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    glareX.set(x * 100);
    glareY.set(y * 100);
    tiltXRaw.set((0.5 - y) * 8);
    tiltYRaw.set((x - 0.5) * 10);
  };

  const resetGlare = () => {
    glareX.set(50);
    glareY.set(50);
    tiltXRaw.set(0);
    tiltYRaw.set(0);
  };
  const clients = [
    { name: 'Abronet Business and Consultancy', logo: '/logo/Abronet Business and Consultancy.png' },
    { name: 'Abronet Saccos', logo: '/logo/Abronet Saccos.png' },
    { name: 'Adabay Food Consulting PLC', logo: '/logo/Adabay Food Consulting PLC.png' },
    { name: 'Amy Beauty Salon', logo: '/logo/Amy Beauty Salon.png' },
    { name: 'Canary Tube', logo: '/logo/Canary Tube.png' },
    { name: 'Ethiopian Food Engineering Association', logo: '/logo/Ethiopian Food Engineering Association.png' },
    { name: 'Feril`s Mad World', logo: '/logo/Feril`s Mad World.png' },
    { name: 'Gojo Casting', logo: '/logo/Gojo Casting.png' },
    { name: 'Kanfier Trading PLC', logo: '/logo/Kanfier Trading PLC.png' },
    { name: 'Kedamawi Modeling School', logo: '/logo/Kedamawi Modeling School.png' },
    { name: 'Promise Creative Studio', logo: '/logo/Promise Creative Studio.png' },
    { name: 'Satela Charitable Organization', logo: '/logo/Satela Charitable Organization.png' },
    { name: 'Saved To Save Charitable Organization', logo: '/logo/Saved To Save Charitable Organization.png' },
    { name: 'TDS Multimedia', logo: '/logo/TDS Multimedia.png' },
    { name: 'Tsedey Radio', logo: '/logo/Tsedey Radio.png' },
  ];
  const YOUTUBE_ID = 'Kca5W0qLxxU';

  return (
    <>


      {/* ── Hero Section ─────────────────────────────────────────────── */}
      <main className="relative min-h-screen w-full flex items-center justify-start overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
          <img
            className="w-full h-full object-cover scale-105"
            alt="Wide cinematic shot of a professional film set at night"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1MV9_BDpmlUDBBUrqh-nrIhSLvn4F_FejVP0cwj7KIe0bqKr24vB9w0wmGnGvtjcXt1_saY7FRsWLLgOuRuWa_lyNR_SuzfRRcPzxmm5l_G6QyPfZDf-pV09ll3BbAXq2QxDiaEqOHU2AlhrGwAdg8KYXxC7ixnv0pMbw3gKK7LJ8euMRgLlF1XVuy4euuPkxmJlQn2ps-WzL9iL6Ck8kXpqhxvPQNuFpN2Delo77OAs4vOkLeaB8k2_4UuozIEF1hF39C1sxvQe9"
          />
        </div>

        <div className="relative z-20 px-6 md:px-24 max-w-5xl">

          {/* Hero heading — blur reveal */}
          <div style={{ overflow: 'hidden' }} className="mb-4 md:mb-6">
            <h2 className="text-[2.15rem] xs:text-4xl sm:text-5xl md:text-[4.25rem] lg:text-[5.5rem] xl:text-[6rem] font-black tracking-tight md:tracking-tighter leading-[0.9] font-headline uppercase flex flex-col gap-0.5 sm:gap-2 items-start">
              <BlurText text="MIHRET" delay={180} stepDuration={0.45} animateBy="words" direction="top" />
              <span className="text-primary">
                <BlurText text="MULTIMEDIA" delay={180} stepDuration={0.45} animateBy="words" direction="top" />
              </span>
              <BlurText text="AND" delay={180} stepDuration={0.45} animateBy="words" direction="top" />
              <BlurText text="FILM PRODUCTION" delay={180} stepDuration={0.45} animateBy="words" direction="top" />
            </h2>
          </div>

          {/* Paragraph */}
          <BlurText
            text="A premier multimedia and film production company established to deliver comprehensive services. Founded by visionary women and dedicated to excellence."
            delay={60}
            stepDuration={0.45}
            animateBy="words"
            direction="bottom"
            className="text-sm sm:text-lg md:text-xl text-on-surface/80 max-w-xl mb-6 md:mb-10 leading-relaxed font-body"
          />

          {/* CTA Buttons — staggered */}
          <motion.div
            className="flex flex-wrap gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.button
              type="button"
              className="shimmer-btn group relative px-6 md:px-10 py-3.5 md:py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold tracking-widest uppercase text-xs md:text-sm flex items-center gap-2 md:gap-3"
              onClick={() => { const el = document.getElementById('showreel-embed'); el?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              WATCH SHOWREEL
              <span className="material-symbols-outlined text-sm md:text-base" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
            </motion.button>
            <motion.button
              className="px-6 md:px-10 py-3.5 md:py-5 border border-outline-variant/30 text-on-surface font-bold tracking-widest uppercase text-xs md:text-sm hover:bg-white/5 transition-colors"
              onClick={() => navigate('/portfolio')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              VIEW PORTFOLIO
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 md:gap-4 opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <span className="label-md tracking-widest uppercase text-xs">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent"></div>
        </motion.div>
      </main>

      {/* ── Who We Are Section ───────────────────────────────────────── */}
      <section className="bg-surface px-6 py-20 md:px-24 md:py-28 font-body relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,75,28,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0))]" />
        <div className="absolute top-0 left-1/2 h-px w-[min(720px,82vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

        <RevealOnScroll className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            className="group relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] px-6 py-12 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-colors sm:px-10 md:px-16 md:py-16"
            initial={{ opacity: 0, y: 72, scale: 0.94, filter: 'blur(14px)' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.01, y: -4 }}
            whileTap={{ scale: 0.995 }}
            onPointerMove={updateGlare}
            onPointerLeave={resetGlare}
            onPointerCancel={resetGlare}
            style={{
              rotateX: tiltX,
              rotateY: tiltY,
              transformStyle: 'preserve-3d',
            }}
          >
            <motion.div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-active:opacity-100"
              style={{ background: glareLayer }}
            />
            <motion.div
              className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen transition-opacity duration-500 group-hover:opacity-100 group-active:opacity-100"
              style={{ background: sheenLayer }}
            />
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-active:opacity-100">
              <div className="absolute left-[-8%] top-[-12%] h-40 w-40 rounded-full bg-primary/20 blur-3xl md:h-56 md:w-56" />
              <div className="absolute bottom-[-18%] right-[-8%] h-44 w-44 rounded-full bg-primary/15 blur-3xl md:h-64 md:w-64" />
              <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
            </div>

            <div className="pointer-events-none absolute inset-[1px] rounded-[calc(2rem-1px)] border border-primary/0 transition-colors duration-500 group-hover:border-primary/20 group-active:border-primary/20" />
            <h3 className="font-headline text-4xl font-black uppercase tracking-tight md:tracking-[-0.05em] text-primary sm:text-5xl md:text-6xl">
              WHO WE ARE
            </h3>

            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.38em] text-primary/75 sm:text-[11px]">
              MIHRET MULTIMEDIA AND FILM PRODUCTION
            </p>

            <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            <p className="mx-auto mt-8 max-w-3xl text-sm leading-7 text-on-surface/78 sm:text-[15px] sm:leading-8 md:text-base">
              A premier multimedia and film production company, licensed in Ethiopia, Addis Ababa, established to deliver comprehensive media, film, event, communication, and digital marketing services.
            </p>

            <p className="mx-auto mt-1 max-w-3xl text-sm leading-7 text-on-surface/78 sm:text-[15px] sm:leading-8 md:text-base">
              Founded by visionary women, our company prides itself on diversity and innovation, with a team of talented professionals dedicated to excellence in every project we undertake.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                Est. 2015
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-on-surface/75">
                Addis Ababa, Ethiopia
              </span>
            </div>
          </motion.div>
        </RevealOnScroll>
      </section>

      {/* ── Showreel Section ─────────────────────────────────────────── */}
      <section className="bg-surface px-8 py-12 md:px-24 md:py-16 font-body">
        <RevealOnScroll scale={0.97} duration={0.65}>
          <div className="mx-auto max-w-7xl">
            {/* Section label */}
            <div className="mb-6 flex items-center gap-4">
              <span className="font-label text-[10px] uppercase tracking-[0.3em] text-primary">Our Showreel</span>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
            </div>
            {/* Click-to-play embed */}
            <div
              id="showreel-embed"
              className="relative w-full overflow-hidden rounded-[2rem] border border-outline-variant/20 bg-[#16130f] shadow-[0_30px_90px_rgba(0,0,0,0.40)]"
            >
              {isPlaying ? (
                <div className="aspect-video w-full bg-black">
                  <div id="yt-player" className="w-full h-full" />
                </div>
              ) : (
                <button
                  type="button"
                  aria-label="Play showreel"
                  className="group relative block w-full overflow-hidden text-left"
                  onClick={() => setIsPlaying(true)}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.68))] z-10" />
                  <div className="absolute inset-y-0 left-0 w-[18%] bg-gradient-to-r from-black/80 via-black/45 to-transparent z-10" />
                  <div className="absolute inset-y-0 right-0 w-[18%] bg-gradient-to-l from-black/80 via-black/45 to-transparent z-10" />
                  <div className="absolute inset-y-[8%] left-[7%] w-[12%] rounded-t-[999px] border border-white/8 bg-gradient-to-b from-white/10 via-black/35 to-black/55 shadow-[inset_0_0_35px_rgba(255,255,255,0.05)] z-10" />
                  <div className="absolute inset-y-[8%] right-[7%] w-[12%] rounded-t-[999px] border border-white/8 bg-gradient-to-b from-white/10 via-black/35 to-black/55 shadow-[inset_0_0_35px_rgba(255,255,255,0.05)] z-10" />
                  <img
                    className="h-[380px] w-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105 md:h-[520px]"
                    alt="Showreel preview backdrop"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1MV9_BDpmlUDBBUrqh-nrIhSLvn4F_FejVP0cwj7KIe0bqKr24vB9w0wmGnGvtjcXt1_saY7FRsWLLgOuRuWa_lyNR_SuzfRRcPzxmm5l_G6QyPfZDf-pV09ll3BbAXq2QxDiaEqOHU2AlhrGwAdg8KYXxC7ixnv0pMbw3gKK7LJ8euMRgLlF1XVuy4euuPkxmJlQn2ps-WzL9iL6Ck8kXpqhxvPQNuFpN2Delo77OAs4vOkLeaB8k2_4UuozIEF1hF39C1sxvQe9"
                  />
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center">
                    <motion.div
                      className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#f3c856]/40 bg-[#f3c856]/12 text-[#f3c856] shadow-[0_0_35px_rgba(243,200,86,0.16)] group-hover:bg-[#f3c856]/25 transition-colors duration-300"
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                    >
                      <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        play_arrow
                      </span>
                    </motion.div>
                    <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-black/25 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.32em] text-primary">
                      Available Now
                    </span>
                    <h2 className="max-w-4xl text-4xl font-black uppercase tracking-[-0.06em] text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.55)] sm:text-5xl md:text-7xl">
                      THE SHOWREEL
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
                      A quick look into Mihret Multimedia&apos;s cinematic direction, production energy, and visual storytelling.
                    </p>
                  </div>
                </button>
              )}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── Projects Section ─────────────────────────────────────────── */}
      <section className="py-32 px-8 md:px-24 bg-surface-container-lowest relative font-body">
        <RevealOnScroll className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <span className="label-md tracking-widest text-primary uppercase font-bold text-xs">LATEST PRODUCTIONS</span>
            <h3 className="text-4xl md:text-6xl font-black tracking-tight md:tracking-tighter font-headline uppercase">FEATURED WORKS</h3>
          </div>
          <p className="text-on-surface-variant max-w-sm text-right font-medium">
            Our portfolio spans commercial high-fashion, narrative features, and documentary storytelling.
          </p>
        </RevealOnScroll>

        <StaggerChildren
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 h-auto md:h-[900px]"
        >
          {mainProject && (
            <motion.div
              variants={iv}
              onClick={() => navigate(`/portfolio/${mainProject.categoryId}/${mainProject.slug}`)}
              className="md:col-span-8 group relative overflow-hidden bg-black rounded-lg shadow-2xl cursor-pointer flex items-center justify-center border border-white/5 min-h-[260px] md:min-h-0"
            >
              <img
                className="w-full h-full object-contain bg-black transition-transform duration-700 group-hover:scale-[1.02]"
                alt={mainProject.title}
                src={mainProject.images[0]}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 p-5 md:p-12 w-full flex justify-between items-end pointer-events-none">
                <div className="space-y-2 md:space-y-4">
                  <span className="bg-primary/20 backdrop-blur-md px-3 py-1 rounded-sm text-[10px] text-primary font-bold tracking-widest uppercase border border-primary/20">{mainProject.type}</span>
                  <h4 className="text-xl md:text-5xl font-black font-headline tracking-tighter uppercase leading-none text-white">{mainProject.title}</h4>
                </div>
                <span className="material-symbols-outlined text-2xl md:text-4xl text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">arrow_forward</span>
              </div>
            </motion.div>
          )}

          <motion.div variants={iv} className="md:col-span-4 flex flex-row md:flex-col gap-3 md:gap-6">
            {sideProject1 && (
              <div 
                onClick={() => navigate(`/portfolio/${sideProject1.categoryId}/${sideProject1.slug}`)}
                className="flex-1 group relative overflow-hidden bg-black rounded-lg shadow-xl cursor-pointer flex items-center justify-center border border-white/5 min-h-[150px] md:min-h-0"
              >
                <img
                  className="w-full h-full object-contain bg-black transition-transform duration-700 group-hover:scale-[1.03]"
                  alt={sideProject1.title}
                  src={sideProject1.images[0]}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-500 pointer-events-none"></div>
                <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end pointer-events-none">
                  <span className="text-[9px] md:text-[10px] text-primary font-bold tracking-widest uppercase mb-1 drop-shadow-md">{sideProject1.type}</span>
                  <h4 className="text-sm md:text-xl font-black font-headline tracking-tight uppercase drop-shadow-lg leading-tight text-white">{sideProject1.title}</h4>
                </div>
              </div>
            )}
            
            {sideProject2 && (
              <div 
                onClick={() => navigate(`/portfolio/${sideProject2.categoryId}/${sideProject2.slug}`)}
                className="flex-1 group relative overflow-hidden bg-black rounded-lg shadow-xl cursor-pointer flex items-center justify-center border border-white/5 min-h-[150px] md:min-h-0"
              >
                <img
                  className="w-full h-full object-contain bg-black transition-transform duration-700 group-hover:scale-[1.03]"
                  alt={sideProject2.title}
                  src={sideProject2.images[0]}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-500 pointer-events-none"></div>
                <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end pointer-events-none">
                  <span className="text-[9px] md:text-[10px] text-primary font-bold tracking-widest uppercase mb-1 drop-shadow-md">{sideProject2.type}</span>
                  <h4 className="text-sm md:text-xl font-black font-headline tracking-tight uppercase drop-shadow-lg leading-tight text-white">{sideProject2.title}</h4>
                </div>
              </div>
            )}
          </motion.div>
        </StaggerChildren>
      </section>

      {/* ── Clients Section ──────────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-24 bg-surface-container-lowest border-y border-outline-variant/15 font-body relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,75,28,0.10),transparent_28%)]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <RevealOnScroll className="mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-4">
              <span className="label-md tracking-widest text-primary uppercase font-bold text-xs">Trusted By</span>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight md:tracking-tighter font-headline uppercase">
                OUR <span className="text-primary">CLIENTS</span>
              </h3>
            </div>
            <p className="text-on-surface-variant max-w-md text-sm md:text-base leading-relaxed">
              A curated wall of brands, studios, and organisations with each company name clearly shown beneath its mark.
            </p>
          </RevealOnScroll>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-14 md:w-24 bg-gradient-to-r from-surface-container-lowest to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-14 md:w-24 bg-gradient-to-l from-surface-container-lowest to-transparent z-10 pointer-events-none" />
            <div className="flex overflow-hidden">
              <div className="animate-marquee flex gap-4 md:gap-5 shrink-0 py-2">
                {[...clients, ...clients].map((client, index) => (
                  <article
                    key={`${client.name}-${index}`}
                    className="group relative w-[220px] md:w-[260px] min-h-[150px] md:min-h-[170px] border border-outline-variant/20 bg-surface-container-low hover:border-primary/40 transition-all duration-300 overflow-hidden shrink-0"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4 p-5 md:p-6">
                      <div className="h-16 md:h-20 w-full flex items-center justify-center">
                        <img
                          src={client.logo}
                          alt={`${client.name} logo`}
                          className="max-h-full max-w-full object-contain transition-all duration-300"
                        />
                      </div>
                      <div className="w-full text-center">
                        <div className="mx-auto mb-3 h-px w-10 bg-outline-variant/40 group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
                        <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] text-on-surface-variant group-hover:text-on-surface transition-colors duration-300">
                          {client.name}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Section ─────────────────────────────────────────── */}
      <section className="py-16 md:py-32 px-5 md:px-24 bg-surface font-body overflow-x-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 md:gap-20 items-center">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 blur-[100px]"></div>
            <div style={{ overflow: 'hidden' }} className="mb-12">
              <motion.h3
                className="text-5xl md:text-7xl font-black tracking-tight md:tracking-tighter font-headline uppercase leading-none"
                initial={{ y: '105%', opacity: 0 }}
                whileInView={{ y: '0%', opacity: 1 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                CRAFTING THE <br /><span className="text-primary italic">VISION</span>
              </motion.h3>
            </div>
            <StaggerChildren staggerDelay={0.1} containerDelay={0.1}>
              {[
                { icon: 'theaters', title: 'Post-Production', body: 'High-end color grading, visual effects, and sound design tailored for cinematic delivery.' },
                { icon: 'camera_roll', title: 'Cinematography', body: 'World-class lighting and camera work using industry-leading equipment.' },
                { icon: 'groups', title: 'Direction', body: 'Visionary leadership that transforms scripts into visceral on-screen experiences.' },
              ].map((service) => (
                <motion.div key={service.title} variants={iv} className="flex gap-8 group mb-12 last:mb-0">
                  <div className="flex-shrink-0 w-16 h-16 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-500">
                    <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-xl font-bold font-headline uppercase tracking-tight">{service.title}</h5>
                    <p className="text-on-surface-variant leading-relaxed">{service.body}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
 
          <RevealOnScroll delay={0.15} className="lg:w-1/2 grid grid-cols-2 gap-3 md:gap-4">
            <div className="h-48 sm:h-64 md:h-full group overflow-hidden rounded-sm bg-black/20">
              <img className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" alt="Behind the scene 3" src="/BEHIND%20THE%20SCENE/BTS%203.png" />
            </div>
            <div className="flex flex-col gap-3 md:gap-4 mt-8 md:mt-12">
              <div className="h-32 sm:h-40 md:h-64 group overflow-hidden rounded-sm bg-black/20">
                <img className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" alt="Behind the scene 4" src="/BEHIND%20THE%20SCENE/BTS%204.png" />
              </div>
              <div className="h-28 sm:h-36 md:flex-1 group overflow-hidden rounded-sm bg-black/20">
                <img className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" alt="Behind the scene 5" src="/BEHIND%20THE%20SCENE/BTS%205.png" />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
