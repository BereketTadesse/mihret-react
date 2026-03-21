import { useState } from 'react';

type TeamMember = {
  name: string;
  role: string;
  focus: string;
  experience: string;
  highlights: string;
  photo: string;
  accent: string;
};

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  const team: TeamMember[] = [
    {
      name: 'Yemeseret Tsegaw',
      role: 'Founder & Production Manager',
      focus: 'TV show directing and event organizing',
      experience: '6 years',
      highlights: 'Teamwork, leadership, creativity, and problem-solving.',
      photo: '/team-doc-images/image1.png',
      accent: 'Studio Lead',
    },
    {
      name: 'Yonatan Worku',
      role: 'General Manager, Cinematographer & Editor',
      focus: 'Film making, editing, graphics design, and digital marketing',
      experience: '4 years',
      highlights: 'Adobe Premiere Pro, After Effects, Illustrator, Photoshop, and Canva.',
      photo: '/team-doc-images/image2.png',
      accent: 'Visual Direction',
    },
    {
      name: 'Betelhem Asmamaw',
      role: 'Actor, Scriptwriter & Director',
      focus: 'Film making, directing, and event organizing',
      experience: 'Documented in team profile',
      highlights: 'Creativity, teamwork, leadership, and production support.',
      photo: '/team-doc-images/image3.png',
      accent: 'Performance & Story',
    },
    {
      name: 'Sead Hassen',
      role: 'VFX Artist, Motion Designer & Editor',
      focus: 'Film making, video editing, and motion design',
      experience: 'Documented in team profile',
      highlights: 'Post-production craft and visual storytelling support.',
      photo: '/team-doc-images/image4.png',
      accent: 'Post Production',
    },
    {
      name: 'Eyerusalem Gezaheng',
      role: 'Web Developer, Content Creator & Digital Marketer',
      focus: 'Digital marketing, social media management, and web development',
      experience: 'Documented in team profile',
      highlights: 'Software Engineering background from Bahirdar University.',
      photo: '/team-doc-images/image5.png',
      accent: 'Digital Growth',
    },
    {
      name: 'Mintesnot Desaleng',
      role: 'Cinematographer & Graphics Designer',
      focus: 'Film making and video editing',
      experience: 'Documented in team profile',
      highlights: 'Creative support across camera and design workflows.',
      photo: '/team-doc-images/image6.png',
      accent: 'Camera & Design',
    },
    {
      name: 'Natnael Worku',
      role: 'Photography & Photo Editing',
      focus: 'Film making, photography, and photo editing',
      experience: 'Documented in team profile',
      highlights: 'Teamwork, creativity, and visual support across production.',
      photo: '/team-doc-images/image7.png',
      accent: 'Photo Support',
    },
    {
      name: 'Betelhem Zemecha',
      role: 'Script Writer & Director',
      focus: 'Film making, script writing, and content creation',
      experience: '4 years',
      highlights: 'Fade In, MS Word, CapCut, and Adobe Photoshop.',
      photo: '/team-doc-images/image8.jpg',
      accent: 'Script & Direction',
    },
    {
      name: 'Natnael Gezaheng',
      role: 'Cinematographer & Set Designer',
      focus: 'Film making and photography',
      experience: '4 years',
      highlights: 'CapCut, Adobe Photoshop, and Adobe Premiere Pro.',
      photo: '/team-doc-images/image9.png',
      accent: 'Set & Camera',
    },
  ];

  const pillars = [
    {
      icon: 'lightbulb',
      title: 'Innovation',
      body: "We don't just capture images; we architect immersive experiences. By integrating cutting-edge narrative technology with traditional cinematic mastery, Mihret Multimedia redefines the visual frontier.",
    },
    {
      icon: 'diversity_3',
      title: 'Diversity',
      body: 'Our strength lies in the plurality of voices. We believe the most powerful stories are born from the intersection of varied perspectives, cultural depth, and untapped global narratives.',
    },
    {
      icon: 'movie_filter',
      title: 'Craftsmanship',
      body: 'Every frame is a deliberate act. From pre-production to final grade, we pursue visual perfection with obsessive attention to detail, colour, motion, and sound.',
    },
  ];

  const getWrappedIndex = (index: number) => (index + team.length) % team.length;
  const activeMember = team[activeIndex];
  const visibleMembers = [
    activeMember,
    team[getWrappedIndex(activeIndex + 1)],
    team[getWrappedIndex(activeIndex + 2)],
    team[getWrappedIndex(activeIndex + 3)],
  ];

  const goPrevious = () => setActiveIndex((current) => getWrappedIndex(current - 1));
  const goNext = () => setActiveIndex((current) => getWrappedIndex(current + 1));

  return (
    <div className="min-h-screen font-body overflow-x-hidden">
      <section className="relative min-h-[70vh] flex items-end pt-32 md:pt-36 pb-20 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-primary/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/65 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(242,202,80,0.12),transparent_60%)]" />
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 border-r border-primary/40"
              style={{ left: `${10 + i * 12}%` }}
            />
          ))}
        </div>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-headline font-black text-on-surface/5 select-none whitespace-nowrap">
          MIHRET
        </span>

        <div className="relative z-10 max-w-5xl">
          <span className="font-label text-primary tracking-[0.35em] text-xs uppercase mb-5 block">
            Our Narrative
          </span>
          <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter leading-none mb-6">
            BEYOND <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
              THE LENS.
            </span>
          </h1>
          <p className="text-on-surface text-lg md:text-xl max-w-2xl leading-relaxed">
            A collective of cinematic auteurs crafting stories that blur the boundary between reality and digital artistry.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group relative p-8 bg-surface-container-low border border-outline-variant/20 hover:border-primary/40 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-primary to-primary-container transition-all duration-500" />

              <span className="material-symbols-outlined text-primary text-4xl mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>
                {p.icon}
              </span>
              <h3 className="font-headline font-bold text-xl uppercase tracking-widest mb-4 text-on-surface">
                {p.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="relative rounded-[2rem] border border-outline-variant/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,255,255,0.78))] dark:bg-[linear-gradient(180deg,rgba(36,30,26,0.92),rgba(24,20,18,0.94))] shadow-[0_30px_80px_rgba(201,75,28,0.12)] p-6 md:p-8 lg:p-10">
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_bottom_left,rgba(201,75,28,0.14),transparent_32%),radial-gradient(circle_at_top_right,rgba(240,120,80,0.12),transparent_28%)]" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div className="max-w-xl">
              <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-primary mb-4">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-headline font-extrabold tracking-tighter text-on-surface leading-tight">
                Meet the creatives shaping each Mihret production
              </h2>
              <p className="text-on-surface-variant text-sm md:text-base mt-3 leading-relaxed">
                A lighter card carousel inspired by your reference, adapted to Mihret&apos;s warm orange identity and real team portraits.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start">
              <button
                type="button"
                onClick={goPrevious}
                aria-label="Previous team member"
                className="h-10 w-10 rounded-full border border-outline-variant/20 bg-background/70 text-on-surface transition-colors duration-300 hover:border-primary/40 hover:text-primary"
              >
                <span className="material-symbols-outlined text-[18px]">chevron_left</span>
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next team member"
                className="h-10 w-10 rounded-full border border-outline-variant/20 bg-background/70 text-on-surface transition-colors duration-300 hover:border-primary/40 hover:text-primary"
              >
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {visibleMembers.map((member, index) => {
              const isActive = index === 0;

              return (
                <article
                  key={`${member.name}-${index}`}
                  className={`group relative overflow-hidden rounded-[1.35rem] border transition-all duration-300 ${
                    isActive
                      ? 'border-primary/35 bg-gradient-to-b from-primary to-primary-container text-on-primary shadow-[0_24px_50px_rgba(201,75,28,0.25)]'
                      : 'border-outline-variant/20 bg-surface text-on-surface shadow-[0_14px_28px_rgba(17,17,17,0.08)]'
                  }`}
                >
                  <div className={`absolute inset-0 ${isActive ? 'bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.24),transparent_28%)]' : ''}`} />

                  <div className="relative z-10 p-3">
                    <div
                      className={`relative overflow-hidden rounded-[1rem] ${isActive ? 'bg-black/10' : 'bg-primary/5'}`}
                      style={{ height: isActive ? '290px' : '250px' }}
                    >
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className={`absolute inset-0 ${isActive ? 'bg-gradient-to-t from-black/30 to-transparent' : 'bg-gradient-to-t from-black/20 to-transparent'}`} />
                      <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/15 backdrop-blur-md">
                        <span className={`material-symbols-outlined text-[15px] ${isActive ? 'text-white' : 'text-on-surface'}`}>north_east</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 px-4 pb-4">
                    <div className="mb-3 flex items-center gap-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <span
                          key={starIndex}
                          className={`material-symbols-outlined text-[14px] ${isActive ? 'text-white/90' : 'text-primary'}`}
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-headline font-bold tracking-tight">
                      {member.name}
                    </h3>
                    <p className={`text-xs mt-1 ${isActive ? 'text-white/80' : 'text-on-surface-variant'}`}>
                      {member.role}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="relative z-10 mt-6 flex items-center justify-center gap-2">
            {team.map((member, index) => (
              <button
                key={member.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${member.name}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-10 bg-primary' : 'w-4 bg-outline-variant/50 hover:bg-primary/60'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-16 bg-surface-container-low border-y border-outline-variant/15">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: '12+', label: 'Years of Experience' },
            { num: '200+', label: 'Projects Delivered' },
            { num: '15', label: 'Awards Won' },
            { num: '40+', label: 'Global Clients' },
          ].map((s) => (
            <div key={s.label} className="group">
              <p className="text-5xl font-headline font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                {s.num}
              </p>
              <p className="font-label text-on-surface-variant text-sm uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 md:px-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,202,80,0.07),transparent_65%)]" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter uppercase mb-6">
            WORK WITH <span className="text-primary">THE BEST</span>
          </h2>
          <p className="text-on-surface-variant mb-10 leading-relaxed">
            Start your cinematic journey with Mihret Multimedia today. Together we redefine what&apos;s possible.
          </p>
          <button className="shimmer-btn relative overflow-hidden bg-gradient-to-br from-primary to-primary-container text-on-primary px-12 py-5 font-label font-bold tracking-[0.2em] uppercase transition-transform hover:scale-105 active:scale-95">
            Contact Studio
          </button>
        </div>
      </section>
    </div>
  );
}
