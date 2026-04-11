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
        year: '2023',
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
        year: '2023',
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
        year: '2023',
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
        year: '2023',
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
          '/Movies%20&%20Documentaries/1.5%20A.png',
          '/Movies%20&%20Documentaries/1.5%20B.png',
        ],
        featured: false,
        year: '2023',
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
        year: '2023',
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
        year: '2023',
        location: 'Dire Dawa, Ethiopia',
      },
    ],
  },
  {
    id: 'events',
    label: 'Event Organizing & Production',
    icon: 'event',
    accent: 'from-rose-600 to-red-700',
    tagline: 'Experiences crafted in every detail.',
    serviceImage: '/services/Event orginizing and production.png',
    serviceDescription:
      'We plan, manage, and execute events from concept to completion, delivering seamless experiences through creative design, professional coordination, and high-quality production services.',
    projects: [],
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
    projects: [],
  },
  {
    id: 'photo-video',
    label: 'Photo & Video Service',
    icon: 'photo_camera',
    accent: 'from-sky-600 to-blue-700',
    tagline: 'Every frame, a story.',
    serviceImage: '/services/photo And Video service.png',
    serviceDescription:
      'We capture life\'s most important moments with high-quality photography and videography, delivering timeless visuals that preserve memories with creativity and precision.',
    projects: [],
  },
  {
    id: 'portrait',
    label: 'Portrait Creatives',
    icon: 'auto_awesome',
    accent: 'from-teal-600 to-emerald-700',
    tagline: 'Faces, fashion, and form.',
    serviceImage: '/services/portrait Creatives.png',
    serviceDescription:
      'We create visually striking portrait and creative content tailored for individuals and brands, specializing in reels, fashion, model portfolios, and product photography that stand out.',
    projects: [],
  },
  {
    id: 'digital-marketing',
    label: 'Digital Marketing & Web',
    icon: 'ads_click',
    accent: 'from-lime-600 to-green-700',
    tagline: 'Growth through digital vision.',
    serviceImage: '/services/Digital Marketing.png',
    serviceDescription:
      'We provide result-driven digital marketing solutions, including content creation, social media management, targeted campaigns, and website development to grow brand visibility and drive engagement.',
    projects: [],
  },
  {
    id: 'graphics',
    label: 'Graphics Design & Editing',
    icon: 'brush',
    accent: 'from-pink-600 to-fuchsia-700',
    tagline: 'Visual identity, perfected.',
    serviceImage: '/services/Graphics design And Editing services.png',
    serviceDescription:
      'We deliver creative graphic design and professional editing solutions, producing visually appealing content that enhances brand identity and communicates messages effectively.',
    projects: [],
  },
  {
    id: 'youtube',
    label: 'YouTube Management',
    icon: 'videocam',
    accent: 'from-red-600 to-rose-700',
    tagline: 'Channels built to grow.',
    serviceImage: '/services/Youtube Managment.png',
    serviceDescription:
      'We offer complete YouTube channel management, including content planning, video optimization, uploading, and performance tracking to grow your audience and maximize engagement.',
    projects: [],
  },
];

/** Helper: find a single project by category + slug */
export function findProject(categoryId: string, slug: string) {
  const cat = CATEGORIES.find((c) => c.id === categoryId);
  if (!cat) return null;
  const proj = cat.projects.find((p) => p.slug === slug);
  return proj ? { category: cat, project: proj } : null;
}
