import { motion, useReducedMotion } from 'framer-motion';
import RevealOnScroll from '../components/animations/RevealOnScroll';
import StaggerChildren from '../components/animations/StaggerChildren';
import BlurText from '../components/animations/BlurText';
import { itemVariants, itemVariantsReduced } from '../components/animations/index';

const services = [
  { icon: 'movie', title: 'Event orginizing and production', body: 'We plan, manage, and execute events from concept to completion, delivering seamless experiences through creative design, professional coordination, and high-quality production services.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHLlgojGI1QkKsY3rwOuIUB_rHhHZeCQijqkBJWOjNdZP9ELfwdbd7C7szwlVlcBN9fBkE_Y6PRgLtOSktCkzeq6mK7iLIH6eq0f9xFev2givGtSXv7USLKPDxV8lWaWLltpA2l7sGsULHniww3hs2lTiZyYp0MyMwxhkAVnY3xpT2-PQtuSQMpqcqS_3X-UJMHWlo06-4EtAjVM8l7byoT9gfX_3wcvKRrxup25z-rzfjcRWY-oEJnhQN6Mq8J4Pyn80m2dlqTeAf', alt: 'Cinematic movie set' },
  { icon: 'event', title: 'movies and documentaries', body: 'We create compelling films and documentaries that tell powerful stories, combining creative vision, professional production, and high-quality editing to deliver impactful visual content.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtJXwSKxWWf_MvH4QDegPSzPC1xUDtxdSVBnXzoDb6XxGtkIq9UxkIxojZU31r8s2VxTCylZnm3y7ziqnaxCYKWrRtKdrB7qM5B-TEHNRAwPkI8xVgTHXBEnjCrE_hnT87apejjtVoAAAZ6AwMiFl-hkPP7RjT9TB2BF4MyEqBaLgi47poOm36mwIJVFfJ0inkxfcFehZsZdVMnkqkMlMajtiqfWJHR3WpHTlnpfLd9GthcDOl-90DqMBm-U4NOskMERB_IhWeLWEx', alt: 'Concert stage' },
  { icon: 'live_tv', title: 'Tv Shows And Commercials', body: 'We produce engaging TV shows and high-impact commercials, combining creative storytelling, strategic messaging, and professional production to capture and retain audience attention.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLXnHo5NLmnOCLsaS_JY1zyWwWh4-Rcin1v10yhtarjC_lAjalhTFxr3dchOykQQksV6iOKZkPLvWWFwInV-DaC4I7zRY9prj0NljCA30QxVZtMh6dwiHvPt6fXg2GZSIEkv3PA8xRDxXf0O20iie-N-n4k6v2cXzPTLviPFg7jlR4QDNAZKv5E1m1ZIPiTKiiPPyGkHWgemnY1HFyMQHuCpv5nVHoY-2_rPH9dzxY09Jbg3WVdPqYFUXR8pWeS4XpnuzA7vba66GbWmWYr35-NLPE-2KtSez7xTy93Sy0yYleb9tvOiIT29TCjU1rbWBX799iwJJi', alt: 'Broadcast studio' },
  { icon: 'ads_click', title: 'photo And Video service', body: 'We capture life’s most important moments with high-quality photography and videography, delivering timeless visuals that preserve memories with creativity and precision.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWc1yjzVmlj-UjbggxCmVEakPsPugR_Fw8O4BhjJu64M6OmeCxL2_RvB2WVpZ2gg0XR4hycDq38Z9LfW7qxOz1qC_pw2ta74RvPfGfRp6WclapPEnklcz_40BkZLfeP1iPOk5Noj8PG7gZtNrJ8mKnevQuscO3lmK4WozH8Q2hV7I74CAIIcMlzHcLifaWN7JCMfRm-qusI4YxgoDz9z2tu5o3L_xM4KHz2MkOYjOokirMbXh4wGM5jAr_wTL391kqF8ewgOZSE3O8', alt: 'Social media' },
  { icon: 'auto_awesome', title: 'portrait Creatives', body: 'We create visually striking portrait and creative content tailored for individuals and brands, specializing in reels, fashion, model portfolios, and product photography that stand out.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgUb8s9a-T6TckyMJC1ZMFgKKnf0d0mpA4voZRYhpKRiOUGPxbsgNItFe1vSqaxSwmvxXVHlNuprSY8Fmx4Mg4m4N5Xx8hfCueUOeo9Afi0R6R_qkh3DHvWF63rqC-o5HU5CjfE0ca4mWGlfwtNfaTPtYG-KWQGKL0bZcy3Lrslu11PROChmkG-cQH4qzNDWUPrcruMXTK6iAavlhULpUn2Lz38X9yjrYnxtZHyGMuYACCwnQw0H50tc1VF5_7G5M_JMQsCoqkWq_Z', alt: 'Graphics workstation' },
  { icon: 'photo_camera', title: 'Digital Marketing', body: 'We provide result-driven digital marketing solutions, including content creation, social media management, and targeted campaigns to grow brand visibility and engagement.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANKzDg_5uwG88FloO3MqOmTsfhGoqZW3PQ1aKAu-tUgSqLB20Gvp5CqvYHbOVQNASwpC0jWuTY_leKDNwZIcuYA7qFLVln_ZE3N-3zRBw73wS-rfIUm8SWOfM7de8dMg4hFN3gvUURQwJ064KuUTld6SvCk8Y-FDezocEen-Wic6ZRpSJWmxD2lB1Eo1-QKtnhGqflPfNPGYvTTFlCPj5IZaJKw6nZSaCYNzBYzy74q6SS6Xn_hPF465PhOe0MeNhrQlmUaPgGe72Jk', alt: 'Professional camera' },
  { icon: 'campaign', title: 'Graphics design And Editing services', body: 'We deliver creative graphic design and professional editing solutions, producing visually appealing content that enhances brand identity and communicates messages effectively.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWc1yjzVmlj-UjbggxCmVEakPsPugR_Fw8O4BhjJu64M6OmeCxL2_RvB2WVpZ2gg0XR4hycDq38Z9LfW7qxOz1qC_pw2ta74RvPfGfRp6WclapPEnklcz_40BkZLfeP1iPOk5Noj8PG7gZtNrJ8mKnevQuscO3lmK4WozH8Q2hV7I74CAIIcMlzHcLifaWN7JCMfRm-qusI4YxgoDz9z2tu5o3L_xM4KHz2MkOYjOokirMbXh4wGM5jAr_wTL391kqF8ewgOZSE3O8', alt: 'Creative brand communication setup' },
  { icon: 'videocam', title: 'Youtube Managment', body: 'We offer complete YouTube channel management, including content planning, video optimization, uploading, and performance tracking to grow your audience and maximize engagement.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjk9hjiFZOXbkdsW79PJmnzBK-1CrpYhyyxzenhoX0Fpw6hO_7TZB8-XCdNqwv4q0OtliRsddlDnrv7_ZMtogps9fUDUtjytgs6hZiKMFaQYZY02VhGtrN_Ec_VIYoxX-OCOrfKr7_D7Y4kR2k1XidvaubxDdRU6jDP3KnWOt5TUyceBBkqU_VuXvGKRvLPbGhyLcOSEAj8VBkOQ1zOfYRNHIsgl46UdG9-nBX2nh6miOrNWYLwZ2NyhZVE5v9F-MekdgkVj2uBHLL', alt: 'Commercial video production scene' },
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
          <motion.button
            className="shimmer-effect px-12 py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-extrabold uppercase tracking-widest text-lg shadow-[0_20px_50px_rgba(212,175,55,0.2)]"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
            Start a Project
          </motion.button>
        </section>
      </RevealOnScroll>
    </main>
  );
}
