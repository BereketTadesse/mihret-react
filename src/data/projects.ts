/* ── Shared project data ────────────────────────────────────────────
   Single source of truth for all categories and projects.
   Import this in Portfolio.tsx and ProjectDetail.tsx.
──────────────────────────────────────────────────────────────────── */

export interface Project {
  id: number;
  slug: string;
  title: string;
  type: string;
  client: string;
  crew: string;
  description: string;
  fullDescription?: string;
  images: string[];
  featured?: boolean;
  year?: string;
  location?: string;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
  accent: string;
  tagline: string;
  serviceImage: string;
  serviceDescription: string;
  projects: Project[];
}

export const CATEGORIES: Category[] = [
  {
    id: 'movies-documentaries',
    label: 'Movies & Documentaries',
    icon: 'movie',
    accent: 'from-amber-600 to-orange-700',
    tagline: 'Stories that move the world.',
    serviceImage: '/services/movies and documentaries.png',
    serviceDescription:
      'We create compelling films and documentaries that tell powerful stories, combining creative vision, professional production, and high-quality editing to deliver impactful visual content.',
    projects: [
      {
        id: 1,
        slug: 'journalist-tesfaye',
        title: 'Journalist Tesfaye G/Mariam',
        type: 'Documentary',
        client: 'TDS Multimedia & Abronet PLC',
        crew: 'Camera & Edit: Yonatan Worku',
        description:
          'An autobiographical documentary highlighting the life and career of influential journalist and disability activist Tesfaye G/Mariam — an intimate and cinematic portrait.',
        fullDescription:
          'We successfully produced an autobiographical documentary highlighting the life and career of influential journalist and disability activist Tesfaye G/Mariam. The film delivers an engaging and insightful narrative with a strong cinematic approach, weaving together archival footage, personal interviews, and on-location cinematography to create a portrait that is both intimate and historically significant. The documentary explores his decades-long career in journalism and his tireless advocacy work for persons with disabilities in Ethiopia.',
        images: [
          '/Movies%20&%20Documentaries/1.1%20A.png',
          '/Movies%20&%20Documentaries/1.1%20B.png',
        ],
        featured: true,
        year: '2025',
        location: 'Addis Ababa, Ethiopia',
      },
      {
        id: 2,
        slug: 'abronet-awardees',
        title: 'Abronet Awardees',
        type: 'Documentary',
        client: 'Abronet Business Consultancy',
        crew: 'Dir: Mintesnot Desaleng | Ed: Yonatan Worku',
        description:
          `A documentary series showcasing the life stories and achievements of the client's awardees, celebrating excellence and impact.`,
        fullDescription:
          `A carefully produced documentary series commissioned by Abronet Business Consultancy Training Service & Work Facilitating PLC. Each episode spotlights an awardee — their personal journey, professional milestones, and the qualities that earned them recognition. The series was produced with a warm, human-centered visual language that honors each subject's story with dignity and depth.`,
        images: [
          '/Movies%20&%20Documentaries/1.2%20A.png',
          '/Movies%20&%20Documentaries/1.2%20B.png',
        ],
        featured: false,
        year: '2025',
        location: 'Addis Ababa, Ethiopia',
      },
      {
        id: 3,
        slug: 'mot-beketero',
        title: 'MOT BEKETERO',
        type: 'Short Film',
        client: 'Selamawit',
        crew: 'Cam: Abraham Bahiru | Ed: Yonatan Worku',
        description:
          'A visceral short film built on dramatic tension and raw human emotion.',
        fullDescription:
          'MOT BEKETERO is a gripping short film produced for client Selamawit, exploring themes of mortality, perseverance, and the choices that define us. Shot with cinematic precision by Abraham Bahiru and meticulously edited by Yonatan Worku, the film uses a restrained visual palette to amplify its emotional core. The result is a compact, powerful piece of narrative cinema that leaves a lasting impression.',
        images: [
          '/Movies%20&%20Documentaries/1.3%20A.png',
          '/Movies%20&%20Documentaries/1.3%20B.png',
        ],
        featured: false,
        year: '2025',
        location: 'Ethiopia',
      },
      {
        id: 4,
        slug: 'meklit',
        title: 'MEKLIT',
        type: 'Drama Series',
        client: 'Gojo Casting',
        crew: 'Script: Betelhem Zemecha | Ed: Yonatan Worku',
        description:
          'An engaging drama series crafted in collaboration with Gojo Casting, weaving compelling narratives across multiple episodes.',
        fullDescription:
          'MEKLIT is a multi-episode drama series developed in close collaboration with Gojo Casting. Written by the talented Betelhem Zemecha and brought to life through the lens of Yonatan Worku, the series follows intricate character arcs rooted in contemporary Ethiopian life. Each episode is crafted with careful attention to pacing, performance, and visual tone — creating a series that resonates deeply with its audience.',
        images: [
          '/Movies%20&%20Documentaries/1.5%20B.png',
          '/Movies%20&%20Documentaries/1.5%20C.png',
        ],
        featured: false,
        year: '2025',
        location: 'Addis Ababa, Ethiopia',
      },
      {
        id: 5,
        slug: 'nikodimos',
        title: 'Nikodimos',
        type: 'Short Film',
        client: 'Fire Haymanot Media',
        crew: 'Prod: Fire Haymanot Media',
        description:
          'A short film rooted in a biblical story, produced at Petros and Pawlos Church — faith rendered through the lens of cinema.',
        fullDescription:
          'Nikodimos is a short film produced for Fire Haymanot Media, drawing its narrative from a well-known biblical account. Shot on location at Petros and Pawlos Church, the production blends reverence with cinematic storytelling — using natural light, careful composition, and a deeply felt performance to bring the story to life. The film was received warmly by faith communities and cinephiles alike.',
        images: [
          '/Movies%20&%20Documentaries/1.8A.png',
          '/Movies%20&%20Documentaries/1.8B.png',
          '/Movies%20&%20Documentaries/1.8%20C.png',
        ],
        featured: false,
        year: '2025',
        location: 'Ethiopia',
      },
      {
        id: 6,
        slug: 'gojo',
        title: 'GOJO',
        type: 'Narrative Documentary',
        client: 'Gojo Casting',
        crew: 'Editor: Yonatan Worku',
        description:
          'A powerful narrative documentary that weaves reality and storytelling in a compelling portrait of place and identity.',
        fullDescription:
          'GOJO is a narrative documentary produced for Gojo Casting that explores themes of place, belonging, and Ethiopian identity. Edited by Yonatan Worku, the film employs a distinctive visual rhythm — interweaving observational footage with scripted sequences to blur the line between documentary and drama. The result is an evocative, genre-defying work that holds a mirror up to its community.',
        images: [
          '/Movies%20&%20Documentaries/1.6%20A.png',
          '/Movies%20&%20Documentaries/1.6%20B.png',
        ],
        featured: false,
        year: '2025',
        location: 'Addis Ababa, Ethiopia',
      },
      {
        id: 7,
        slug: 'bete-abreham',
        title: 'BETE ABREHAM – Dire Dawa',
        type: 'Documentary',
        client: 'Satela Show',
        crew: 'Cam: Yonatan Worku | Ed: Mintesnot Desaleng',
        description:
          'An insightful documentary shot on location in Dire Dawa, capturing the essence of place and community for Satela Show.',
        fullDescription:
          'Produced for the Satela Show, BETE ABREHAM takes viewers on a journey to Dire Dawa — one of Ethiopia\'s most vibrant cities. Cinematographer Yonatan Worku captures the texture of daily life, architecture, and community with a warm, observational lens. Editor Mintesnot Desaleng shapes the footage into a coherent and moving portrait of place. The documentary stands as a rich cultural document that will endure.',
        images: [
          '/Movies%20&%20Documentaries/1.7%20B.png',
          '/Movies%20&%20Documentaries/1.7%20C.png',
        ],
        featured: false,
        year: '2025',
        location: 'Dire Dawa, Ethiopia',
      },
    ],
  },
  {
    id: 'events',
    label: 'Event Production & Management',
    icon: 'event',
    accent: 'from-rose-600 to-red-700',
    tagline: 'Experiences crafted in every detail.',
    serviceImage: '/services/Event orginizing and production.png',
    serviceDescription:
      'We plan, manage, and execute events from concept to completion, delivering seamless experiences through creative design, professional coordination, and high-quality production services.',
    projects: [
      {
        id: 8,
        slug: 'grand-abronet-award',
        title: 'Grand Abronet Award',
        type: 'Event Production, Live Streaming & Marketing',
        client: 'Abronet PLC',
        crew: 'Mihret Multimedia',
        description: 'A large-scale event held at Millennium Hall with over 26 media outlets, government officials, influencers, and artists.',
        fullDescription: 'A large-scale event held at Millennium Hall with over 26 media outlets, government officials, influencers, artists, and multiple sponsoring organizations. Mihret Multimedia managed all aspects including planning, sponsorship, design, production, and live streaming.',
        images: [
          '/Event%20Production%20&%20Management/3.1A.png',
          '/Event%20Production%20&%20Management/3.1%20B.png',
          '/Event%20Production%20&%20Management/3.1%20C.png',
          '/Event%20Production%20&%20Management/3.1%20D.png'
        ],
        featured: true,
        year: '2025',
        location: 'Millennium Hall'
      },
      {
        id: 9,
        slug: 'efea-launching-event',
        title: 'EFEA Launching Event',
        type: 'Event Organization & Promotion',
        client: 'Ethiopian Food Engineering Association',
        crew: 'Organizer: Yonatan Worku | Promoter: Yegena Lijoch',
        description: 'A historic launch event held at Capital Hotel marking the establishment of the association.',
        fullDescription: 'A historic launch event held at Capital Hotel marking the establishment of the association.',
        images: [
          '/Event%20Production%20&%20Management/3.2%20C.png',
          '/Event%20Production%20&%20Management/3.2%20D.png'
        ],
        featured: false,
        year: '2025',
        location: 'Capital Hotel'
      },
      {
        id: 10,
        slug: 'adabay-project-assembly',
        title: 'Adabay Project Assembly',
        type: 'Event Production',
        client: 'Adabay Food Consultancy',
        crew: 'Mihret Multimedia',
        description: 'A professional panel discussion and presentation event between Hayat Ltd and Adabay Food Consultancy.',
        fullDescription: 'A professional panel discussion and presentation event between Hayat Ltd and Adabay Food Consultancy.',
        images: [
          '/Event%20Production%20&%20Management/3.3%20A.png'
        ],
        featured: false,
        year: '2025'
      },
      {
        id: 11,
        slug: 'grand-graduation-ceremony',
        title: 'Grand Graduation Ceremony',
        type: 'Event Production',
        client: 'AMI Makeup Academy',
        crew: 'Mihret Multimedia',
        description: 'A well-organized graduation ceremony for academy students.',
        fullDescription: 'A well-organized graduation ceremony for academy students.',
        images: [
          '/Event%20Production%20&%20Management/3.4%20A.png',
          '/Event%20Production%20&%20Management/3.4%20B.png',
          '/Event%20Production%20&%20Management/3.4%20C.png',
          '/Event%20Production%20&%20Management/3.4%20D.png'
        ],
        featured: false,
        year: '2025'
      },
      {
        id: 12,
        slug: 'abronet-saccos-opening',
        title: 'Abronet SACCOs Opening General Assembly',
        type: 'Event Organization & Production',
        client: 'Abronet SACCOs',
        crew: 'Mihret Multimedia',
        description: 'A grand opening ceremony including design, printing, and full event production.',
        fullDescription: 'A grand opening ceremony including design, printing, and full event production.',
        images: [
          '/Event%20Production%20&%20Management/3.5%20A.png'
        ],
        featured: false,
        year: '2025'
      },
      {
        id: 13,
        slug: 'kanfire-trading-meeting',
        title: 'Kanfire Trading Meeting',
        type: 'Event Production',
        client: 'Kanfire Trading PLC',
        crew: 'Mihret Multimedia',
        description: 'A professionally produced event meeting for Kanfire Trading PLC.',
        fullDescription: 'A professionally produced event meeting for Kanfire Trading PLC.',
        images: [
          '/Event%20Production%20&%20Management/3.6%20A.png'
        ],
        featured: false,
        year: '2025'
      },
      {
        id: 14,
        slug: 'gojo-masterclass',
        title: 'Gojo Masterclass',
        type: 'Event Production',
        client: 'Gojo Casting',
        crew: 'Feleke Abebe Yemarweha',
        description: 'A one-day masterclass conducted by artist Feleke Abebe Yemarweha.',
        fullDescription: 'A one-day masterclass conducted by artist Feleke Abebe Yemarweha.',
        images: [
          '/Event%20Production%20&%20Management/3.7%20A.png',
          '/Event%20Production%20&%20Management/3.7%20B.png'
        ],
        featured: false,
        year: '2025'
      },
      {
        id: 15,
        slug: 'book-launching-event',
        title: 'Book Launching Event',
        type: 'Event Production',
        client: 'Satela Show',
        crew: 'Mihret Multimedia',
        description: 'A grand book launch event held at Walia Books Hall.',
        fullDescription: 'A grand book launch event held at Walia Books Hall.',
        images: [
          '/Event%20Production%20&%20Management/3.8%20A.png',
          '/Event%20Production%20&%20Management/3.8%20B.png'
        ],
        featured: false,
        location: 'Walia Books Hall'
      },
      {
        id: 16,
        slug: 'tsedey-radio-anniversary',
        title: 'Tsedey Radio 2nd Anniversary',
        type: 'Event Production',
        client: 'Tsedey Radio',
        crew: 'Mihret Multimedia',
        description: 'Anniversary celebration held at Magnolia Hotel.',
        fullDescription: 'Anniversary celebration held at Magnolia Hotel.',
        images: [
          '/Event%20Production%20&%20Management/3.9%20A.png',
          '/Event%20Production%20&%20Management/3.9%20B.png'
        ],
        featured: false,
        location: 'Magnolia Hotel'
      },
      {
        id: 17,
        slug: 'african-womens-conference',
        title: 'African Women’s Conference 2023',
        type: 'Event Production',
        client: 'Satela Charitable Organization',
        crew: 'Host: Etenesh Tefera',
        description: 'A one-day international conference at Sheraton Addis Hotel with participants from across Africa.',
        fullDescription: 'A one-day international conference at Sheraton Addis Hotel with participants from across Africa.',
        images: [
          '/Event%20Production%20&%20Management/3.10.png'
        ],
        featured: false,
        year: '2025',
        location: 'Sheraton Addis Hotel'
      },
      {
        id: 18,
        slug: 'enku-set-event',
        title: 'Enku Set Event',
        type: 'Event Production',
        client: 'Enku Set & Satela Charitable Organization',
        crew: 'Mihret Multimedia',
        description: 'An elegantly produced event for Enku Set & Satela Charitable Organization.',
        fullDescription: 'An elegantly produced event for Enku Set & Satela Charitable Organization.',
        images: [
          '/Event%20Production%20&%20Management/3.11%20A.png'
        ],
        featured: false,
        year: '2025'
      }
    ],
  },
  {
    id: 'tv-commercials',
    label: 'TV Shows & Commercials',
    icon: 'live_tv',
    accent: 'from-violet-600 to-purple-700',
    tagline: 'Production that commands attention.',
    serviceImage: '/services/Tv Shows And Commercials.png',
    serviceDescription:
      'We produce engaging TV shows and high-impact commercials, combining creative storytelling, strategic messaging, and professional production to capture and retain audience attention.',
    projects: [
      {
        id: 19,
        slug: 'satela-show',
        title: 'SATELA SHOW',
        type: 'TV Series',
        client: 'Satela Charitable Organization',
        crew: 'Director: Yonatan Worku',
        description: 'Produced over 120 episodes of a weekly TV show aired on Asham Television for two consecutive years.',
        fullDescription: 'Produced over 120 episodes of a weekly TV show aired on Asham Television for two consecutive years. The show focuses on women’s empowerment and human rights advocacy. It includes event coverage, studio podcasts, documentaries, social research, vox pops, holiday specials, and community-based journalism.',
        images: [
          '/TV%20Shows%20&%20Commercials/2.1%20A.png',
          '/TV%20Shows%20&%20Commercials/2.1%20B.png',
          '/TV%20Shows%20&%20Commercials/2.1%20C.png',
          '/TV%20Shows%20&%20Commercials/2.1%20D.png',
          '/TV%20Shows%20&%20Commercials/2.1%20E.png',
          '/TV%20Shows%20&%20Commercials/2.1%20F.png'
        ],
        featured: true
      },
      {
        id: 20,
        slug: 'fasika-abronet',
        title: 'Fasika Abronet (Part 1 & 2)',
        type: 'TV Commercial',
        client: 'Abronet PLC',
        crew: 'Cam: Yonatan Worku | Ed: Sead Hassen | Mng: Natnael Worku',
        description: 'High-quality television commercials produced for Ethiopian Easter celebrations.',
        fullDescription: 'High-quality television commercials produced for Ethiopian Easter celebrations (2016 & 2017). Scriptwriter: Fitsum Fikru.',
        images: [
          '/TV%20Shows%20&%20Commercials/2.2%20A.png',
          '/TV%20Shows%20&%20Commercials/2.2%20B.png',
          '/TV%20Shows%20&%20Commercials/2.2%20C.png'
        ],
        featured: false
      },
      {
        id: 21,
        slug: 'ye-almaz-dental',
        title: 'Ye Almaz Dental',
        type: 'Social Media Commercial',
        client: 'Ye Almaz Dental Clinic',
        crew: 'Cam: Yonatan Worku | Ed: Sead Hassen',
        description: 'A polished social media commercial driving brand awareness and patient engagement.',
        fullDescription: 'A polished social media commercial driving brand awareness and patient engagement for Ye Almaz Dental Clinic.',
        images: [
          '/TV%20Shows%20&%20Commercials/2.3%20A.png',
          '/TV%20Shows%20&%20Commercials/2.3%20B.png'
        ],
        featured: false
      }
    ],
  },
  {
    id: 'portrait',
    label: 'Portraits',
    icon: 'auto_awesome',
    accent: 'from-teal-600 to-emerald-700',
    tagline: 'Faces, fashion, and form.',
    serviceImage: '/services/portrait Creatives.png',
    serviceDescription:
      'We create visually striking portrait and creative content tailored for individuals and brands, specializing in reels, fashion, model portfolios, and product photography that stand out.',
    projects: [
      {
        id: 28,
        slug: 'loret-art-academy-photoshoot',
        title: 'Loret Art Academy Photoshoot',
        type: 'Portrait Photography',
        client: 'Kedamawi Modeling School',
        crew: 'Photographer: Yonatan Worku',
        description: 'A striking portrait photography series for Kedamawi Modeling School.',
        fullDescription: 'A striking portrait photography series commissioned by Kedamawi Modeling School, designed to highlight individual expression and fashion aesthetics.',
        images: [
          '/Portraits/5.1%20A.png',
          '/Portraits/5.1%20B.png',
          '/Portraits/5.1%20C.png',
          '/Portraits/5.1%20D.png',
          '/Portraits/5.1%20E.png'
        ],
        featured: false
      },
      {
        id: 29,
        slug: 'graduation-portrait-photography',
        title: 'Graduation Portrait Photography',
        type: 'Photography',
        client: 'Addis Ababa University (Chinese Language Graduates – 2017)',
        crew: 'Photographers: Sead Hassen & Natnael Worku',
        description: 'Professional graduation portraits capturing a monumental milestone.',
        fullDescription: 'Professional graduation portraits for the Addis Ababa University Chinese Language Graduates of 2017, effectively capturing the joy and monumental milestone of the students.',
        images: [
          '/Portraits/5.2%20A.png',
          '/Portraits/5.2%20B.png',
          '/Portraits/5.2%20C.png',
          '/Portraits/5.2%20D.png',
          '/Portraits/5.2%20E.png'
        ],
        featured: false
      },
      {
        id: 30,
        slug: 'wedding-photography',
        title: 'Wedding Photography',
        type: 'Wedding Photography',
        client: 'Various Couples',
        crew: 'Photographer: Yonatan Worku',
        description:
          'Timeless wedding photography that captures every heartfelt moment — from the ceremony to the celebration.',
        fullDescription:
          'At Mihret Multimedia, we bring a cinematic and deeply personal approach to wedding photography. We specialize in capturing every precious moment of your special day — the quiet glances, the joyful tears, the grand celebrations — weaving them into a timeless visual story you will cherish forever. Our team works seamlessly in the background, ensuring natural, unposed moments are preserved alongside beautifully composed portraits. From intimate traditional ceremonies to large-scale receptions, we deliver stunning images that reflect the love, culture, and emotion of your wedding day.',
        images: [
          '/Portraits/PORTRAITS%201.png',
          '/Portraits/PORTRAITS%202.png',
          '/Portraits/PORTRAITS%204.png',
          '/Portraits/PORTRAITS%205.png',
          '/Portraits/PORTRAITS%206.png',
          '/Portraits/PORTRAITS%207.png',
        ],
        featured: true,
        year: '2026',
        location: 'Addis Ababa, Ethiopia',
      }
    ],
  },
  {
    id: 'digital-marketing',
    label: 'Digital Marketing, Web & Branding',
    icon: 'ads_click',
    accent: 'from-lime-600 to-green-700',
    tagline: 'Growth through digital vision.',
    serviceImage: '/services/Digital Marketing.png',
    serviceDescription:
      'We provide result-driven digital marketing solutions, including content creation, social media management, targeted campaigns, and website development to grow brand visibility and drive engagement.',
    projects: [
      {
        id: 22,
        slug: 'abronet-saccos-branding',
        title: 'Abronet SACCOs Branding',
        type: 'Branding',
        client: 'Abronet SACCOs',
        crew: 'Designer: Eyerusalem Gezaheng',
        description: 'Full organizational branding package.',
        fullDescription: 'Full organizational branding package encompassing visual identity, print materials, and digital brand guidelines to standardize communications.',
        images: [
          '/Digital%20Marketing,%20Web%20&%20Branding/4.1.png'
        ],
        featured: false
      },
      {
        id: 23,
        slug: 'absimadakos-media',
        title: 'Absimadakos Media',
        type: 'Branding',
        client: 'Absimadakos Media',
        crew: 'Designer: Yonatan Worku',
        description: 'Complete digital branding including logo, intro animation, banner, and channel setup.',
        fullDescription: 'Complete digital branding including logo, intro animation, banner, and channel setup to launch and align the brand’s digital presence.',
        images: [
          '/Digital%20Marketing,%20Web%20&%20Branding/4.2.png'
        ],
        featured: true
      },
      {
        id: 24,
        slug: 'canary-tube',
        title: 'Canary Tube',
        type: 'Branding',
        client: 'Canary Tube',
        crew: 'Designer: Yonatan Worku',
        description: 'Full digital branding and channel setup.',
        fullDescription: 'Full digital branding and YouTube channel setup for a clean, recognizable visual presence designed for high audience engagement.',
        images: [
          '/Digital%20Marketing,%20Web%20&%20Branding/4.3%20A.png',
          '/Digital%20Marketing,%20Web%20&%20Branding/4.3%20B.png',
          '/Digital%20Marketing,%20Web%20&%20Branding/4.3%20C.png'
        ],
        featured: false
      },
      {
        id: 25,
        slug: 'cartela',
        title: 'Cartela',
        type: 'Branding',
        client: 'Enjoy Cartela',
        crew: 'Designer: Yonatan Worku',
        description: 'Complete brand identity including logo, color scheme, and website design.',
        fullDescription: 'Complete brand identity including logo, color scheme, and website design, capturing a vibrant, engaging experience for users from the first interaction.',
        images: [
          '/Digital%20Marketing,%20Web%20&%20Branding/4.4.png'
        ],
        featured: false
      },
      {
        id: 26,
        slug: 'tds-multimedia',
        title: 'TDS Multimedia',
        type: 'Digital Marketing',
        client: 'TDS Multimedia',
        crew: 'Mihret Multimedia',
        description: 'Streamlined digital marketing initiatives for TDS Multimedia.',
        fullDescription: 'A streamlined multi-channel digital marketing initiative tailored to boost awareness and conversions for TDS Multimedia’s services.',
        images: [
          '/Digital%20Marketing,%20Web%20&%20Branding/4.5.png'
        ],
        featured: false
      },
      {
        id: 27,
        slug: 'abronet-business-consultancy',
        title: 'Abronet Business Consultancy',
        type: 'Digital Marketing',
        client: 'Abronet Business Consultancy',
        crew: 'Mihret Multimedia',
        description: 'A 6-month contract providing full digital marketing services.',
        fullDescription: 'A 6-month contract providing full digital marketing services including branding, content creation, and management of YouTube, TikTok, Instagram, and Facebook platforms.',
        images: [
          '/Digital%20Marketing,%20Web%20&%20Branding/4.6%20A%20(1).jpg',
          '/Digital%20Marketing,%20Web%20&%20Branding/4.6%20B.jpg',
          '/Digital%20Marketing,%20Web%20&%20Branding/4.6%20C.png',
          '/Digital%20Marketing,%20Web%20&%20Branding/4.6%20D.jpg',
          '/Digital%20Marketing,%20Web%20&%20Branding/4.6%20E.jpg'
        ],
        featured: false
      }
    ],
  }
];

/** Helper: find a single project by category + slug */
export function findProject(categoryId: string, slug: string) {
  const cat = CATEGORIES.find((c) => c.id === categoryId);
  if (!cat) return null;
  const proj = cat.projects.find((p) => p.slug === slug);
  return proj ? { category: cat, project: proj } : null;
}
