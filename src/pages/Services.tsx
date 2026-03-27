import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/animations/RevealOnScroll';
import StaggerChildren from '../components/animations/StaggerChildren';
import BlurText from '../components/animations/BlurText';
import { itemVariants, itemVariantsReduced } from '../components/animations/index';

const services = [
  { icon: 'movie', title: 'Event orginizing and production', body: 'We plan, manage, and execute events from concept to completion, delivering seamless experiences through creative design, professional coordination, and high-quality production services.', img: '/services/Event orginizing and production.png', alt: 'Event orginizing and production' },
  { icon: 'event', title: 'movies and documentaries', body: 'We create compelling films and documentaries that tell powerful stories, combining creative vision, professional production, and high-quality editing to deliver impactful visual content.', img: '/services/movies and documentaries.png', alt: 'movies and documentaries' },
  { icon: 'live_tv', title: 'Tv Shows And Commercials', body: 'We produce engaging TV shows and high-impact commercials, combining creative storytelling, strategic messaging, and professional production to capture and retain audience attention.', img: '/services/Tv Shows And Commercials.png', alt: 'Tv Shows And Commercials' },
  { icon: 'ads_click', title: 'photo And Video service', body: 'We capture life\'s most important moments with high-quality photography and videography, delivering timeless visuals that preserve memories with creativity and precision.', img: '/services/photo And Video service.png', alt: 'photo And Video service' },
  { icon: 'auto_awesome', title: 'portrait Creatives', body: 'We create visually striking portrait and creative content tailored for individuals and brands, specializing in reels, fashion, model portfolios, and product photography that stand out.', img: '/services/portrait Creatives.png', alt: 'portrait Creatives' },
  { icon: 'photo_camera', title: 'Digital Marketing and Web Development', body: 'We provide result-driven digital marketing solutions, including content creation, social media management, targeted campaigns, and website development to grow brand visibility, strengthen your online presence, and drive engagement.', img: '/services/Digital Marketing.png', alt: 'Digital Marketing and Web Development' },
  { icon: 'campaign', title: 'Graphics design And Editing services', body: 'We deliver creative graphic design and professional editing solutions, producing visually appealing content that enhances brand identity and communicates messages effectively.', img: '/services/Graphics design And Editing services.png', alt: 'Graphics design And Editing services' },
  { icon: 'videocam', title: 'Youtube Managment', body: 'We offer complete YouTube channel management, including content planning, video optimization, uploading, and performance tracking to grow your audience and maximize engagement.', img: '/services/Youtube Managment.png', alt: 'Youtube Managment' },
];

export default function Services() {
  const prefersReduced = useReducedMotion();
  const iv = prefersReduced ? itemVariantsReduced : itemVariants;

  return (
    <main className="pt-32 pb-40 px-6 max-w-7xl mx-auto font-body min-h-screen">
      {/* Hero */}
      <section className="mb-24 text-left">
        <BlurText
          text="Capabilities"
          delay={30} stepDuration={0.45} animateBy="letters" direction="top"
          className="font-label text-primary tracking-[0.2em] uppercase mb-4 text-xs font-bold block"
        />
        <div style={{ overflow: 'hidden' }} className="mb-2">
          <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-[-0.04em] text-on-surface leading-tight flex flex-col gap-1 items-start">
            <span className="flex gap-3">
              <BlurText text="CRAFTING" delay={180} stepDuration={0.45} animateBy="words" direction="top" className="inline-flex" />
              <span className="text-primary italic inline-flex">
                <BlurText text="VISIBLE" delay={180} stepDuration={0.45} animateBy="words" direction="top" />
              </span>
            </span>
            <BlurText text="NARRATIVES." delay={180} stepDuration={0.45} animateBy="words" direction="top" className="inline-flex" />
          </h2>
        </div>
      </section>

      {/* Services Grid */}
      <StaggerChildren staggerDelay={0.07} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((svc) => (
          <motion.div key={svc.title} variants={iv}
            className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low shadow-2xl"
            whileHover={{ y: -6, boxShadow: '0 36px 60px rgba(0,0,0,0.28)' }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
            <div className="absolute inset-0 z-0 scale-110 transition-transform duration-700 group-hover:scale-100 opacity-60">
              <img className="w-full h-full object-cover" alt={svc.alt} src={svc.img} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end backdrop-blur-[2px] border border-outline-variant/10 group-hover:backdrop-blur-none transition-all">
              <span className="material-symbols-outlined text-primary mb-4 text-4xl">{svc.icon}</span>
              <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">{svc.title}</h3>
              <p className="text-on-surface/70 text-sm leading-relaxed mb-6">{svc.body}</p>
              <div className="w-12 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </div>
          </motion.div>
        ))}
      </StaggerChildren>

      {/* CTA */}
      <RevealOnScroll delay={0.1}>
        <section className="mt-32 text-center py-20 bg-surface-container-lowest rounded-xl border border-outline-variant/5">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8 flex flex-wrap justify-center gap-x-3">
            <BlurText text="Ready to bring your" delay={120} stepDuration={0.45} animateBy="words" direction="top" />
            <span className="text-primary italic">
              <BlurText text="Vision" delay={120} stepDuration={0.45} animateBy="words" direction="top" />
            </span>
            <BlurText text="to life?" delay={120} stepDuration={0.45} animateBy="words" direction="top" />
          </h2>
          <motion.div
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
            <Link
              to="/contact"
              className="inline-block shimmer-effect px-12 py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-extrabold uppercase tracking-widest text-lg shadow-[0_20px_50px_rgba(212,175,55,0.2)]"
            >
              Start a Project
            </Link>
          </motion.div>
        </section>
      </RevealOnScroll>
    </main>
  );
}
