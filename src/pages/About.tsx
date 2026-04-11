import { useState } from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from '../components/animations/RevealOnScroll';
import BlurText from '../components/animations/BlurText';

type TeamMember = {
  name: string; role: string; focus: string; experience: string;
  highlights: string; photo: string; accent: string;
};

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  const team: TeamMember[] = [
    { name: 'Yemeseret Tsegaw', role: 'Founder & Production Manager', focus: 'TV show directing and event organizing', experience: '6 years', highlights: 'Teamwork, leadership, creativity, and problem-solving.', photo: '/team-doc-images/image1.png', accent: 'Studio Lead' },
    { name: 'Yonatan Worku', role: 'General Manager, Cinematographer & Editor', focus: 'Film making, editing, graphics design, and digital marketing', experience: '4 years', highlights: 'Adobe Premiere Pro, After Effects, Illustrator, Photoshop, and Canva.', photo: '/team-doc-images/image2.png', accent: 'Visual Direction' },
    { name: 'Betelhem Asmamaw', role: 'Actor, Scriptwriter & Director', focus: 'Film making, directing, and event organizing', experience: 'Documented in team profile', highlights: 'Creativity, teamwork, leadership, and production support.', photo: '/team-doc-images/image3.png', accent: 'Performance & Story' },
    { name: 'Sead Hassen', role: 'VFX Artist, Motion Designer & Editor', focus: 'Film making, video editing, and motion design', experience: 'Documented in team profile', highlights: 'Post-production craft and visual storytelling support.', photo: '/team-doc-images/image4.png', accent: 'Post Production' },
    { name: 'Eyerusalem Gezaheng', role: 'Web Developer, Content Creator & Digital Marketer', focus: 'Digital marketing, social media management, and web development', experience: 'Documented in team profile', highlights: 'Software Engineering background from Bahirdar University.', photo: '/team-doc-images/image5.png', accent: 'Digital Growth' },
    { name: 'Mintesnot Desaleng', role: 'Cinematographer & Graphics Designer', focus: 'Film making and video editing', experience: 'Documented in team profile', highlights: 'Creative support across camera and design workflows.', photo: '/team-doc-images/image6.png', accent: 'Camera & Design' },
    { name: 'Natnael Worku', role: 'Photography & Photo Editing', focus: 'Film making, photography, and photo editing', experience: 'Documented in team profile', highlights: 'Teamwork, creativity, and visual support across production.', photo: '/team-doc-images/image7.png', accent: 'Photo Support' },
    { name: 'Betelhem Zemecha', role: 'Script Writer & Director', focus: 'Film making, script writing, and content creation', experience: '4 years', highlights: 'Fade In, MS Word, CapCut, and Adobe Photoshop.', photo: '/team-doc-images/image8.jpg', accent: 'Script & Direction' },
    { name: 'Natnael Gezaheng', role: 'Cinematographer & Set Designer', focus: 'Film making and photography', experience: '4 years', highlights: 'CapCut, Adobe Photoshop, and Adobe Premiere Pro.', photo: '/team-doc-images/image9.png', accent: 'Set & Camera' },
  ];

  const getWrappedIndex = (index: number) => (index + team.length) % team.length;
  const activeMember = team[activeIndex];

  // On mobile: show 1, on sm: show 2, on xl: show 4
  const visibleMembers = [
    activeMember,
    team[getWrappedIndex(activeIndex + 1)],
    team[getWrappedIndex(activeIndex + 2)],
    team[getWrappedIndex(activeIndex + 3)],
  ];

  const goPrevious = () => setActiveIndex((c) => getWrappedIndex(c - 1));
  const goNext = () => setActiveIndex((c) => getWrappedIndex(c + 1));

  return (
    <div className="min-h-screen font-body overflow-x-hidden pt-24 md:pt-32 pb-32 md:pb-40">
      <section className="px-4 md:px-6 lg:px-16 max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="relative rounded-[1.5rem] md:rounded-[2rem] border border-outline-variant/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,255,255,0.78))] dark:bg-[linear-gradient(180deg,rgba(36,30,26,0.92),rgba(24,20,18,0.94))] shadow-[0_30px_80px_rgba(201,75,28,0.12)] p-4 md:p-8 lg:p-10">
            <div className="absolute inset-0 rounded-[1.5rem] md:rounded-[2rem] bg-[radial-gradient(circle_at_bottom_left,rgba(201,75,28,0.14),transparent_32%),radial-gradient(circle_at_top_right,rgba(240,120,80,0.12),transparent_28%)]" />

            {/* Header */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 md:mb-8">
              <div className="max-w-xl">
                <BlurText
                  text="Our Team"
                  delay={30} stepDuration={0.45} animateBy="letters" direction="top"
                  className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-primary mb-3 md:mb-4 justify-center"
                />
                <div style={{ overflow: 'hidden' }} className="mb-2">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-headline font-extrabold tracking-in-tight text-on-surface leading-tight flex flex-wrap gap-x-2 md:gap-x-3 items-center">
                    <BlurText text="MEET THE" delay={180} stepDuration={0.45} animateBy="words" direction="top" />
                    <span className="text-primary">
                      <BlurText text="CREATIVES" delay={180} stepDuration={0.45} animateBy="words" direction="top" />
                    </span>
                  </h1>
                </div>
                <BlurText
                  text="The visionary minds shaping each Mihret production."
                  delay={60} stepDuration={0.45} animateBy="words" direction="bottom"
                  className="text-on-surface-variant text-sm md:text-base mt-2 leading-relaxed"
                />
              </div>
            </div>

            {/* Cards Grid — 1 col on mobile, 2 on sm, 4 on xl */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
              {visibleMembers.map((member, index) => {
                const isActive = index === 0;
                const visibilityClass = index === 0 ? '' : index === 1 ? 'hidden sm:block' : 'hidden xl:block';
                return (
                  <motion.article key={`${member.name}-${index}`}
                    className={`group relative overflow-hidden rounded-[1.1rem] md:rounded-[1.35rem] border transition-all duration-300 ${visibilityClass} ${isActive ? 'border-primary/35 bg-gradient-to-b from-primary to-primary-container text-on-primary shadow-[0_24px_50px_rgba(201,75,28,0.25)]' : 'border-outline-variant/20 bg-surface text-on-surface shadow-[0_14px_28px_rgba(17,17,17,0.08)]'}`}
                    whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}>
                    <div className={`absolute inset-0 ${isActive ? 'bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.24),transparent_28%)]' : ''}`} />
                    <div className="relative z-10 p-2.5 md:p-3">
                      <div className={`relative overflow-hidden rounded-[0.85rem] md:rounded-[1rem] ${isActive ? 'bg-black/10' : 'bg-primary/5'}`}
                        style={{ height: isActive ? '280px' : '240px' }}>
                        <img src={member.photo} alt={member.name} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                        <div className={`absolute inset-0 ${isActive ? 'bg-gradient-to-t from-black/30 to-transparent' : 'bg-gradient-to-t from-black/20 to-transparent'}`} />
                        <div className="absolute top-2.5 right-2.5 md:top-3 md:right-3 flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full border border-white/25 bg-white/15 backdrop-blur-md">
                          <span className={`material-symbols-outlined text-[13px] md:text-[15px] ${isActive ? 'text-white' : 'text-on-surface'}`}>north_east</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-10 px-3 md:px-4 pb-3 md:pb-4">
                      <div className="mb-2 md:mb-3 flex items-center gap-1">
                        {[...Array(5)].map((_, si) => (
                          <span key={si} className={`material-symbols-outlined text-[12px] md:text-[14px] ${isActive ? 'text-white/90' : 'text-primary'}`} style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        ))}
                      </div>
                      <h3 className="text-base md:text-lg font-headline font-bold tracking-tight">{member.name}</h3>
                      <p className={`text-[11px] md:text-xs mt-1 ${isActive ? 'text-white/80' : 'text-on-surface-variant'}`}>{member.role}</p>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="relative z-10 mt-6 md:mt-8 flex items-center justify-center gap-4 md:gap-6">
              <motion.button type="button" onClick={goPrevious} aria-label="Previous"
                className="flex items-center justify-center h-12 w-12 md:h-10 md:w-10 rounded-full border border-outline-variant/20 bg-background/70 text-on-surface hover:border-primary/40 hover:text-primary transition-colors active:scale-90"
                whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}>
                <span className="material-symbols-outlined text-[22px] md:text-[18px]">chevron_left</span>
              </motion.button>

              <div className="flex items-center gap-2">
                {team.map((member, index) => (
                  <button key={member.name} type="button" onClick={() => setActiveIndex(index)} aria-label={`Show ${member.name}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 md:w-10 bg-primary' : 'w-3 md:w-4 bg-outline-variant/50 hover:bg-primary/60'}`} />
                ))}
              </div>

              <motion.button type="button" onClick={goNext} aria-label="Next"
                className="flex items-center justify-center h-12 w-12 md:h-10 md:w-10 rounded-full border border-outline-variant/20 bg-background/70 text-on-surface hover:border-primary/40 hover:text-primary transition-colors active:scale-90"
                whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}>
                <span className="material-symbols-outlined text-[22px] md:text-[18px]">chevron_right</span>
              </motion.button>
            </div>

            {/* Active member detail on mobile */}
            <div className="relative z-10 mt-5 sm:hidden rounded-xl border border-outline-variant/15 bg-surface p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary mb-1">{activeMember.accent}</p>
              <h4 className="font-headline text-base font-bold text-on-surface mb-1">{activeMember.name}</h4>
              <p className="text-[11px] text-on-surface-variant leading-relaxed">{activeMember.role}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-[10px] border border-outline-variant/20 rounded-full px-2 py-1 text-on-surface-variant">
                  {activeMember.experience} exp.
                </span>
                <span className="text-[10px] border border-primary/20 rounded-full px-2 py-1 text-primary bg-primary/5">
                  {activeMember.focus.split(',')[0]}
                </span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}
