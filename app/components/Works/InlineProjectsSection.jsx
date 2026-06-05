'use client';

import Image from 'next/image';
import { useRef, useCallback, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

/*
  mediaType options: 'image' | 'video' | 'gif'
  Swap out placeholder with real asset when ready.
  Keep mediaType so you know what format to produce.
*/
const projectData = [
  {
    id: 'true-legacy',
    category: 'Brand strategy',
    year: '2026',
    color: '#00AA9F',
    tint: '#E6F7F5',
    mediaType: 'image',
    mediaHint: 'Lifestyle photo — a real home, a real transition moment',
    headline: 'In the middle\nof everything.',
    subhead: 'Estate sales, downsizing, inherited homes. Always more emotional than anyone expects.',
    situation: 'Families navigating estate transitions are not in shopping mode. They are in grief mode, logistics mode, and uncertainty mode, all at once. The old messaging missed all of that.',
    result: 'I reframed the brand story and carried it through campaign concepts, paid social, CRM, content planning, and everyday messaging. Strategy became a system the team could actually use.',
    outcome: 'Make the next step feel clear.',
    skills: ['Storytelling', 'Paid media', 'Social strategy', 'CRM', 'Brand voice'],
  },
  {
    id: 'missio',
    category: 'Content systems',
    year: '2025',
    color: '#20A851',
    tint: '#E9F7EE',
    mediaType: 'video',
    mediaHint: 'Short loop showing the content workflow or a before/after of posting rhythm',
    headline: 'Great mission.\nChaotic content.',
    subhead: 'Powerful story, limited structure. One of those is fixable.',
    situation: 'The mission was clear. The machinery to communicate it was not. Content went out reactively. Voice drifted post to post. Nothing compounded into anything.',
    result: 'I built the social media workflows, content systems, and editorial strategy. Now the work builds on itself, week after week.',
    outcome: 'Good systems make consistency easier.',
    skills: ['Content systems', 'Social workflows', 'Editorial strategy', 'Visual direction'],
  },
  {
    id: 'boehringer',
    category: 'Campaign direction',
    year: '2023',
    color: '#113661',
    tint: '#E9EEF5',
    mediaType: 'video',
    mediaHint: 'Live broadcast clip or real-time social moment, not a polished ad',
    headline: 'Presence\nover polish.',
    subhead: 'Misinformation moves fast. Credibility has to move faster.',
    situation: 'People were overwhelmed and skeptical. Polished messaging felt distant from their reality. The problem was not information. It was trust.',
    result: 'I shaped expert-led content, live conversations, and social response into one trust-building system. Less distance. More useful presence.',
    outcome: 'Presence builds trust.',
    skills: ['Real-time social', 'Live broadcast', 'Expert content', 'Community response'],
  },
  {
    id: 'sanmiguelcorp',
    category: 'Brand & community',
    year: '2022',
    color: '#27449E',
    tint: '#E9EDFA',
    mediaType: 'gif',
    mediaHint: 'Community moment loop or social content carousel animation',
    headline: 'From product\nto community.',
    subhead: 'Pet owners are not buying nutrition. They are caring for a relationship.',
    situation: 'Pet food is a deeply emotional category. The brand was showing up like a commodity. Nice packaging, no real connection to the people buying it.',
    result: 'I shifted the brand toward participation — everyday routines, shared experiences, and long-term connection over single transactions. When people feel recognized, loyalty follows.',
    outcome: 'Recognition builds loyalty.',
    skills: ['Community building', 'Social content', 'Brand participation', 'Loyalty design'],
  },
  {
    id: 'jfc',
    category: 'Digital experience',
    year: '2024',
    color: '#EA1B3B',
    tint: '#FDE8EC',
    mediaType: 'video',
    mediaHint: 'Screen recording of the 3D experience — show the exploration, not a logo',
    headline: 'Digital as\na destination.',
    subhead: 'Most brand websites inform. Few create memories.',
    situation: 'Jollibee had decades of genuine story. The challenge was delivering it without making anyone feel like they were reading a company archive.',
    result: 'I shaped the experience flow, story beats, and digital touchpoints for an interactive brand world. History became something people could explore.',
    outcome: 'Make the story playable.',
    skills: ['Interactive design', 'Experience direction', '3D web', 'Creative tech'],
  },
  {
    id: 'giz',
    category: 'Advocacy film',
    year: '2023',
    color: '#D40E14',
    tint: '#FBE7E8',
    mediaType: 'video',
    mediaHint: 'Documentary frame, people first',
    headline: 'People before\npolicy.',
    subhead: 'Advocacy lands better when it starts with real life.',
    situation: 'The subject was bigger than any institution. If the film led with policy, it would feel distant. The story needed people, place, and stakes.',
    result: 'I directed the narrative and pacing so the interviews, visuals, and institution all served the human story.',
    outcome: 'Lead with people.',
    skills: ['Narrative direction', 'Documentary story', 'Interview pacing', 'Advocacy film'],
  },
  {
    id: 'dost',
    category: 'Science communication',
    year: '2024',
    color: '#4BC5D4',
    tint: '#E8F8FA',
    mediaType: 'video',
    mediaHint: 'Event broadcast highlight or a moment where science and people connect on screen',
    headline: 'Science that\nfeels human.',
    subhead: 'Science communication has an accessibility problem. We made it personal.',
    situation: 'DOST was doing genuinely important work. The challenge was making it feel that way to people outside the institution. Complexity was getting in the way of connection.',
    result: 'I translated complexity into real stories, real applications, and tangible impact. Science stopped being something that happened to people and started being something for them.',
    outcome: 'Make science feel close.',
    skills: ['Science storytelling', 'AV direction', 'Public communication', 'Motion assets'],
  },
  {
    id: 'azazel',
    category: 'Director of photography',
    year: '2024',
    color: '#8F1D1D',
    tint: '#F2EDEE',
    mediaType: 'image',
    mediaHint: 'Six widescreen cinematography stills from Azazel. Drop replacements into /public/works/azazel.',
    headline: 'Love as\na locked room.',
    subhead: 'Cinematography for a psychological horror short about care, resentment, shame, and the terror of not knowing who is family.',
    situation: 'As director of photography, I was brought in to build the visual language for a psychological horror short. The brief: a domestic space that feels unstable. Intimate enough to feel trapped, dark enough to let memory distort the room.',
    result: 'I approached the image language around pressure, shadow, and withheld information. Performance close-ups, negative space, and decaying interiors turn the house into a witness, so the horror comes less from spectacle and more from what the frame refuses to fully explain.',
    outcome: 'Let the frame hold the tension.',
    skills: ['Cinematography', 'Psychological horror', 'Lighting', 'Shot language', 'Performance tension'],
  },
];

const projectMedia = {
  'true-legacy': {
    layout: 'home',
    logo: {
      src: '/icons/true-legacy-icon.svg',
      alt: 'True Legacy Homes logo',
    },
    assets: [
      {
        src: '/works/true-legacy/leadcampaign.png',
        alt: 'True Legacy Homes campaign showing a downsizing message',
        label: 'Lead campaign',
        ratio: '1:1',
      },
      {
        src: '/works/true-legacy/Secondary%20narrative%20image.png',
        alt: 'True Legacy Homes estate sale holiday campaign',
        label: 'Seasonal narrative',
        ratio: '1:1',
      },
      {
        src: '/works/true-legacy/trust-proof-social-image.png',
        alt: 'True Legacy Homes social content',
        label: 'Trust proof',
        ratio: '1:1',
      },
      {
        src: '/works/true-legacy/truelegacyestatesales.mp4',
        alt: 'A quiet home transition ambient loop for True Legacy Homes',
        label: 'Ambient home loop',
        type: 'video',
        ratio: '16:9',
      },
    ],
  },
  missio: {
    layout: 'portrait-system',
    logo: {
      src: '/works/missio/missio-logo.svg',
      alt: 'Missio logo',
    },
    assets: [
      {
        src: '/works/missio/CC%20040125.png',
        alt: 'Missio portrait content card 01',
        label: 'Content card 01',
        ratio: '4:5',
      },
      {
        src: '/works/missio/CC%20041825.png',
        alt: 'Missio portrait content card 02',
        label: 'Content card 02',
        ratio: '4:5',
      },
      {
        src: '/works/missio/CC%20041925.png',
        alt: 'Missio portrait content card 03',
        label: 'Content card 03',
        ratio: '4:5',
      },
      {
        src: '/works/missio/CC%20042025.png',
        alt: 'Missio portrait content card 04',
        label: 'Content card 04',
        ratio: '4:5',
      },
      {
        src: '/works/missio/FBCA%20042725.png',
        alt: 'Missio portrait content card 05',
        label: 'Content card 05',
        ratio: '4:5',
      },
    ],
  },
  boehringer: {
    layout: 'expert-video',
    logo: {
      src: '/works/boehringer/Boehringer_Ingelheim_Logo.svg',
      alt: 'Boehringer Ingelheim logo',
    },
    assets: [
      {
        src: '/works/boehringer/boehringer_ingelheim_xpert_series (1080p).mp4',
        alt: 'Boehringer Ingelheim Xpert Series expert video',
        label: 'Xpert Series',
        type: 'video',
        ratio: '16:9',
      },
      {
        src: '/works/boehringer/ben_en_biko_v1 (1080p).mp4',
        alt: 'Ben and Biko Boehringer Ingelheim video',
        label: 'Community response',
        type: 'video',
        ratio: '16:9',
      },
    ],
  },
  sanmiguelcorp: {
    layout: 'community',
    logo: {
      src: '/works/nutrichunks/smc-logo.svg',
      alt: 'San Miguel Corporation logo',
    },
    assets: [
      {
        src: '/works/nutrichunks/MOCK-UP-WEBSITE-3.png',
        alt: 'Nutri Chunks website hero',
        label: 'Brand home',
      },
      {
        src: '/works/nutrichunks/MOCK-UP-WEBSITE_1.png',
        alt: 'Nutri Chunks Join our Pawmily signup',
        label: 'Community signup',
      },
      {
        src: '/works/nutrichunks/Phones.png',
        alt: 'Nutri Chunks social content',
        label: 'Social content',
      },
    ],
  },
  jfc: {
    layout: 'jollibee',
    logo: {
      src: '/works/jfc/jfc-logo.svg',
      alt: 'Jollibee Foods Corporation logo',
    },
    assets: [
      { src: '/works/jfc/jfc_universe chapter1.mp4', type: 'video', alt: 'JFC Universe Chapter 1' },
      { src: '/works/jfc/jfc_universe chapter2.mp4', type: 'video', alt: 'JFC Universe Chapter 2' },
      { src: '/works/jfc/jfc_universe chapter3.mp4', type: 'video', alt: 'JFC Universe Chapter 3' },
      { src: '/works/jfc/jfc_universe chapter4.mp4', type: 'video', alt: 'JFC Universe Chapter 4' },
      { src: '/works/jfc/joy-waving.webm', fallbackSrc: '/works/jfc/joy-waving.mp4', alt: 'Joy character waving', type: 'video' },
    ],
  },
  dost: {
    layout: 'broadcast',
    logo: {
      src: '/works/dost/dost-logo.svg',
      alt: 'DOST logo',
    },
    assets: [
      {
        src: '/works/dost/1MIN_TEASER.mp4',
        alt: 'DOST science event teaser',
        label: 'Event broadcast',
        type: 'video',
      },
      {
        src: '/works/dost/dost-animated-1.mp4',
        alt: 'DOST science moment',
        label: 'Human moment',
        type: 'video',
      },
      {
        src: '/works/dost/dost-animated-2.mp4',
        alt: 'DOST broadcast moment',
        label: 'Science story',
        type: 'video',
      },
      {
        src: '/works/dost/dost-animated-3.mp4',
        alt: 'DOST animated science story moment',
        label: 'Science story',
        type: 'video',
      },
      {
        src: '/works/dost/dost-animated-4.mp4',
        alt: 'DOST animated research application moment',
        label: 'Research application',
        type: 'video',
      },
      {
        src: '/works/dost/dost-animated-5.mp4',
        alt: 'DOST animated public science moment',
        label: 'Public science',
        type: 'video',
      },
    ],
  },
  giz: {
    layout: 'film',
    logo: {
      src: '/works/giz/giz-logo.svg',
      alt: 'GIZ logo',
    },
    assets: [
      {
        src: '/works/giz/1.png',
        alt: 'GIZ advocacy film frame',
        label: 'Opening frame',
      },
      {
        src: '/works/giz/2.png',
        alt: 'GIZ advocacy film frame',
        label: 'Interview arc',
      },
    ],
  },
  azazel: {
    layout: 'horror',
    assets: [
      {
        src: '/works/azazel/IMG_8860.JPG',
        alt: 'Azazel cinematography still 01',
        label: 'Still 01',
      },
      {
        src: '/works/azazel/IMG_8861.JPG',
        alt: 'Azazel cinematography still 02',
        label: 'Still 02',
      },
      {
        src: '/works/azazel/IMG_8862.JPG',
        alt: 'Azazel cinematography still 03',
        label: 'Still 03',
      },
      {
        src: '/works/azazel/IMG_8863.JPG',
        alt: 'Azazel cinematography still 04',
        label: 'Still 04',
      },
      {
        src: '/works/azazel/IMG_8864.JPG',
        alt: 'Azazel cinematography still 05',
        label: 'Still 05',
      },
      {
        src: '/works/azazel/IMG_8865.JPG',
        alt: 'Azazel cinematography still 06',
        label: 'Still 06',
      },
    ],
  },
};

const stageThemes = {
  'true-legacy': {
    bg: '#FBFEFD',
    text: '#111111',
    muted: '#5F6664',
    soft: '#8A9391',
    rule: '#DCECEA',
    progressTrack: '#EAF7F5',
    mediaFirst: false,
  },
  missio: {
    bg: '#F4FBF6',
    text: '#102116',
    muted: '#4E6255',
    soft: '#7D9184',
    rule: '#D6EBDD',
    progressTrack: '#E4F5E9',
    mediaFirst: true,
  },
  boehringer: {
    bg: '#F5F8FB',
    text: '#091626',
    muted: '#536173',
    soft: '#7F8C9B',
    rule: '#D8E1EA',
    progressTrack: '#E7EEF5',
    mediaFirst: false,
  },
  sanmiguelcorp: {
    bg: '#F6F8FF',
    text: '#10172F',
    muted: '#4F5B7B',
    soft: '#7E89A8',
    rule: '#DCE3FA',
    progressTrack: '#E6EBFB',
    mediaFirst: true,
  },
  jfc: {
    bg: '#FFF8F9',
    text: '#1C0508',
    muted: '#8C4E58',
    soft: '#C07080',
    rule: 'rgba(234,27,59,0.10)',
    progressTrack: 'rgba(234,27,59,0.08)',
    mediaFirst: false,
  },
  dost: {
    bg: '#F1FBFC',
    text: '#082A31',
    muted: '#426A70',
    soft: '#70959A',
    rule: '#CDEFF3',
    progressTrack: '#DDF6F8',
    mediaFirst: true,
  },
  giz: {
    bg: '#111111',
    text: '#FFFFFF',
    muted: '#D8D8D8',
    soft: '#8F8F8F',
    rule: 'rgba(255,255,255,0.12)',
    progressTrack: 'rgba(255,255,255,0.09)',
    mediaFirst: false,
  },
  azazel: {
    bg: '#090606',
    text: '#FFFFFF',
    muted: '#D4B2B2',
    soft: '#8F6F6F',
    rule: 'rgba(255,255,255,0.11)',
    progressTrack: 'rgba(255,255,255,0.08)',
    mediaFirst: true,
  },
};

const getStageTheme = (project) => stageThemes[project.id] || {
  bg: '#FFFFFF',
  text: '#111111',
  muted: '#5F6368',
  soft: '#8A8F94',
  rule: '#E5E5E5',
  progressTrack: '#F5F5F7',
  mediaFirst: false,
};

/* ── Media type icons ── */
const PlayIcon = ({ color }) => (
  <svg width='40' height='40' viewBox='0 0 40 40' fill='none' aria-hidden='true' focusable='false'>
    <title>Video</title>
    <circle cx='20' cy='20' r='19' stroke={color} strokeWidth='1.5' />
    <polygon points='16,13 29,20 16,27' fill={color} />
  </svg>
);

const ImageIcon = ({ color }) => (
  <svg width='40' height='40' viewBox='0 0 40 40' fill='none' aria-hidden='true' focusable='false'>
    <title>Image</title>
    <rect x='6' y='9' width='28' height='22' rx='3' stroke={color} strokeWidth='1.5' />
    <circle cx='14' cy='17' r='3' stroke={color} strokeWidth='1.5' />
    <path d='M6 26l9-7 6 5 4-3 9 7' stroke={color} strokeWidth='1.5' strokeLinejoin='round' />
  </svg>
);

const GifBadge = ({ color }) => (
  <div
    className='rounded border-2 px-2 py-0.5 text-sm font-black tracking-tight'
    style={{ borderColor: color, color }}
  >
    GIF
  </div>
);

/* ── Placeholder visual ── */
const MediaPlaceholder = ({ project }) => {
  const { mediaType, mediaHint, color, tint } = project;

  const Icon = () => {
    if (mediaType === 'video') return <PlayIcon color={color} />;
    if (mediaType === 'gif') return <GifBadge color={color} />;
    return <ImageIcon color={color} />;
  };

  const label = mediaType === 'video' ? 'VIDEO' : mediaType === 'gif' ? 'GIF' : 'IMAGE';

  return (
    <div
      className='flex w-full flex-col items-center justify-center gap-5 rounded-2xl px-8 py-16 text-center'
      style={{
        backgroundColor: tint,
        minHeight: '340px',
        border: `1.5px dashed ${color}40`,
      }}
    >
      <Icon />
      <div>
        <p className='mb-1 text-[11px] font-black uppercase tracking-[0.22em]' style={{ color }}>
          {label}
        </p>
        <p className='max-w-[220px] text-sm font-medium leading-snug text-neutral-500'>
          {mediaHint}
        </p>
      </div>
    </div>
  );
};

/* Split className: object-* and opacity-* apply to the image; everything else sizes the wrapper. */
function splitImgClass(className) {
  const parts = (className || '').split(' ').filter(Boolean);
  const img = parts.filter((c) => c.startsWith('object-') || c.startsWith('opacity-') || c.startsWith('brightness-'));
  const wrap = parts.filter((c) => !img.includes(c));
  return { imgClass: img.join(' '), wrapClass: wrap.join(' ') };
}

const MediaAsset = ({ asset, className, sizes = '(max-width: 640px) 85vw, 50vw' }) => {
  const isVideo = asset.type === 'video' || /\.(mp4|webm)$/i.test(asset.src);
  const isGif = /\.gif$/i.test(asset.src);
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    if (!isVideo) return;
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoSrc(asset.src);
          observer.disconnect();
        }
      },
      { rootMargin: '800px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isVideo, asset.src]);

  useEffect(() => {
    if (videoSrc && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [videoSrc]);

  if (isVideo) {
    const hasMultiSource = asset.fallbackSrc && videoSrc;
    return (
      <video
        ref={videoRef}
        src={hasMultiSource ? undefined : (videoSrc || undefined)}
        aria-label={asset.alt}
        className={className}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      >
        {hasMultiSource && <source src={videoSrc} type="video/webm" />}
        {hasMultiSource && <source src={asset.fallbackSrc} type="video/mp4" />}
      </video>
    );
  }

  const { imgClass, wrapClass } = splitImgClass(className);

  return (
    <>
      <span className={`relative block ${wrapClass}`}>
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          unoptimized={isGif}
          className={imgClass || 'object-cover'}
          sizes={sizes}
        />
      </span>
      {asset.label ? <figcaption className='sr-only'>{asset.label}</figcaption> : null}
    </>
  );
};

const StillPlaceholder = ({ asset, project, index, className }) => (
  <div
    className={`flex flex-col justify-between border border-white/10 bg-white/[0.04] p-4 ${className}`}
    style={{ aspectRatio: '16 / 9' }}
  >
    <div>
      <p className='text-[10px] font-black uppercase tracking-[0.2em]' style={{ color: '#DCA3A3' }}>
        widescreen still {String(index + 1).padStart(2, '0')}
      </p>
      <p className='mt-2 text-xs font-semibold leading-snug text-white/40'>
        Drop image at
      </p>
      <p className='mt-1 break-all text-[10px] font-medium leading-tight text-white/30'>
        public{asset.src}
      </p>
    </div>
    <div
      className='h-1 w-full origin-left'
      style={{ backgroundColor: `${project.color}80` }}
    />
  </div>
);

const AzazelStill = ({ asset, project, index, className }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-black ${className}`} style={{ aspectRatio: '16 / 9' }}>
      {!loaded ? (
        <StillPlaceholder
          asset={asset}
          project={project}
          index={index}
          className='absolute inset-0'
        />
      ) : null}
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        className='object-cover opacity-90 transition-opacity duration-500'
        sizes="(max-width: 768px) 50vw, 33vw"
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      {loaded ? (
        <div className='absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20' />
      ) : null}
    </div>
  );
};

const SampleBadge = () => null;

const SceneShell = ({ children, project }) => (
  <div
    className='relative min-h-[360px] overflow-visible md:min-h-[580px]'
    style={{ color: project.color }}
  >
    {children}
  </div>
);

const FigureLabel = () => null;

const ProjectLogo = ({ project, className = '' }) => {
  const logo = projectMedia[project.id]?.logo;

  if (!logo) {
    return null;
  }

  return (
    <div className={`relative flex h-9 w-24 items-center ${className}`}>
      <Image
        src={logo.src}
        alt={logo.alt}
        fill
        className='object-contain'
        sizes="96px"
      />
    </div>
  );
};

const MobileSectionProgress = ({ progress, color, track }) => (
  <div
    className='sticky top-[52px] z-20 h-[2px] md:hidden'
    style={{ backgroundColor: track }}
    role='progressbar'
    aria-label='Section reading progress'
    aria-valuemin={0}
    aria-valuemax={100}
  >
    <motion.div
      className='h-full origin-left'
      style={{ scaleX: progress, backgroundColor: color }}
    />
  </div>
);

const MobileGhostNumber = ({ progress, index, color }) => {
  const y = useTransform(progress, [0, 1], [36, -44]);
  const opacity = useTransform(progress, [0, 0.18, 0.82, 1], [0, 0.065, 0.065, 0]);

  return (
    <motion.p
      className='pointer-events-none absolute right-[-0.08em] top-20 z-0 text-[42vw] font-black leading-none tracking-[-0.08em] md:hidden'
      style={{ color, opacity, y }}
    >
      {String(index + 1).padStart(2, '0')}
    </motion.p>
  );
};

const MobileMediaBeat = ({ children, delay = 0, className = '', style }) => (
  <motion.figure
    className={className}
    style={style}
    initial={{ opacity: 0, y: 34, scale: 0.96 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: '-16%' }}
    transition={{ duration: 0.82, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.figure>
);

/* ── Apple-style layered media scene ── */
const ProjectMediaScene = ({ project, progress }) => {
  const media = projectMedia[project.id];
  const primary = media?.assets?.[0];
  const secondary = media?.assets?.[1];
  const tertiary = media?.assets?.[2];

  const mainScale = useTransform(progress, [0, 0.24, 0.78, 1], [0.92, 1, 1, 0.96]);
  const mainY = useTransform(progress, [0, 0.24, 1], [28, 0, -16]);
  const cardOpacity = useTransform(progress, [0.18, 0.34, 0.88], [0, 1, 0.82]);
  const cardY = useTransform(progress, [0.18, 0.48], [44, 0]);
  const thirdOpacity = useTransform(progress, [0.38, 0.54, 0.92], [0, 1, 1]);
  const thirdY = useTransform(progress, [0.38, 0.64], [52, 0]);
  const sweepX = useTransform(progress, [0, 1], ['-36%', '36%']);
  const portalRotate = useTransform(progress, [0, 0.8], [-5, 4]);
  const filmX = useTransform(progress, [0, 1], ['0%', '-20%']);
  // Credential card back-card reveal
  const credBackX = useTransform(progress, [0.2, 0.62], ['0%', '12%']);
  const credBackY = useTransform(progress, [0.2, 0.62], ['0%', '10%']);
  const credBackRotate = useTransform(progress, [0.2, 0.62], [0, 3]);
  const phoneY = useTransform(progress, [0.2, 0.72], [34, -10]);
  const phoneRotate = useTransform(progress, [0.2, 0.72], [8, -4]);
  const horrorDoorWidth = useTransform(progress, [0.12, 0.64], ['5%', '22%']);
  const horrorRedWash = useTransform(progress, [0.2, 0.76], [0.08, 0.34]);
  const horrorMotherOpacity = useTransform(progress, [0.18, 0.36, 0.78], [0, 1, 0.72]);
  const horrorSonOpacity = useTransform(progress, [0.34, 0.52, 0.9], [0, 1, 0.84]);
  const horrorFrameY = useTransform(progress, [0.46, 0.74], [46, 0]);
  const horrorFrameOpacity = useTransform(progress, [0.44, 0.62], [0, 1]);
  const portraitWallY = useTransform(progress, [0.12, 0.58], [34, -8]);
  const portraitWallOpacity = useTransform(progress, [0.08, 0.26], [0, 1]);
  const portraitWallScale = useTransform(progress, [0.12, 0.48, 1], [0.96, 1, 0.985]);
  const firstBeatOpacity = useTransform(progress, [0.08, 0.18], [0, 1]);
  const firstBeatY = useTransform(progress, [0.08, 0.28, 0.6], [8, 0, -6]);
  const firstBeatScale = useTransform(progress, [0.08, 0.32, 0.62], [0.94, 1, 0.94]);
  const secondBeatOpacity = useTransform(progress, [0.48, 0.62, 0.94], [0, 1, 1]);
  const secondBeatY = useTransform(progress, [0.48, 0.68], [8, 0]);
  const secondBeatScale = useTransform(progress, [0.48, 0.7, 1], [0.94, 1, 0.98]);
  const broadcastRailOpacity = useTransform(progress, [0.18, 0.32, 0.92], [0, 1, 1]);
  const broadcastRailY = useTransform(progress, [0.18, 0.36, 1], [28, 0, -6]);
  const broadcastRailX = useTransform(progress, [0.24, 1], ['0%', '-22%']);
  const fourthOpacity = useTransform(progress, [0.66, 0.82], [0, 1]);
  const fourthY = useTransform(progress, [0.66, 0.84], [56, 0]);
  const communityBeat1Opacity = useTransform(progress, [0, 0.1, 0.36, 0.5], [0, 1, 1, 0]);
  const communityBeat1Y = useTransform(progress, [0, 0.18, 0.5], [18, 0, -10]);
  const communityBeat2Opacity = useTransform(progress, [0.34, 0.48, 0.7, 0.84], [0, 1, 1, 0]);
  const communityBeat2Y = useTransform(progress, [0.34, 0.52, 0.84], [18, 0, -10]);
  const communityBeat3Opacity = useTransform(progress, [0.68, 0.82], [0, 1]);
  const communityBeat3Y = useTransform(progress, [0.68, 0.86], [18, 0]);
  const ch1Opacity = useTransform(progress, [0.04, 0.16], [0, 1]);
  const ch2Opacity = useTransform(progress, [0.24, 0.36], [0, 1]);
  const ch3Opacity = useTransform(progress, [0.44, 0.56], [0, 1]);
  const ch4Opacity = useTransform(progress, [0.64, 0.76], [0, 1]);
  const ch1Scale = useTransform(progress, [0.04, 0.18], [0.88, 1]);
  const ch2Scale = useTransform(progress, [0.24, 0.38], [0.88, 1]);
  const ch3Scale = useTransform(progress, [0.44, 0.58], [0.88, 1]);
  const ch4Scale = useTransform(progress, [0.64, 0.78], [0.88, 1]);
  const joyFloatOpacity = useTransform(progress, [0.48, 0.62], [0, 1]);
  const joyFloatY = useTransform(progress, [0.48, 0.62], [16, 0]);

  if (media?.layout === 'horror') {
    const stills = media.assets.slice(0, 6);

    return (
      <div className='relative min-h-[360px] overflow-hidden bg-neutral-950 text-white shadow-[0_30px_90px_rgba(0,0,0,0.24)] md:min-h-[580px]'>
        <motion.div
          className='absolute inset-0'
          style={{
            opacity: horrorRedWash,
            background: `radial-gradient(circle at 50% 38%, ${project.color}, transparent 54%)`,
          }}
        />
        <div className='absolute inset-x-0 top-0 z-10 h-px bg-white/10' />

        <div className='absolute inset-x-[18%] bottom-0 top-[14%] border-x border-t border-white/10 bg-black/35 md:inset-x-[24%]'>
          <motion.div
            className='absolute bottom-0 left-1/2 top-0 -translate-x-1/2 bg-[#1b0808] shadow-[0_0_80px_rgba(143,29,29,0.35)]'
            style={{ width: horrorDoorWidth }}
          />
          <div className='absolute inset-x-0 top-[52%] h-px bg-white/10' />
        </div>

        <motion.div
          className='absolute inset-x-5 top-16 z-20 grid grid-cols-2 gap-2 md:inset-x-8 md:top-20 md:gap-3'
          style={{ scale: mainScale, y: mainY }}
        >
          {stills.map((asset, i) => (
            <motion.div
              key={asset.src}
              style={{
                opacity: i < 3 ? 1 : horrorFrameOpacity,
                y: i < 3 ? 0 : horrorFrameY,
              }}
            >
              <AzazelStill
                asset={asset}
                project={project}
                index={i}
                className={i === 1 ? 'translate-y-4 md:translate-y-6' : i === 4 ? '-translate-y-3 md:-translate-y-4' : ''}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className='absolute bottom-8 left-6 z-30 h-px w-24 bg-white/20 md:left-10'
          style={{ opacity: horrorMotherOpacity, y: cardY }}
        />
        <motion.div
          className='absolute bottom-8 right-6 z-30 h-px w-24 bg-white/20 md:right-10'
          style={{ opacity: horrorSonOpacity, y: thirdY }}
        />
      </div>
    );
  }

  if (!primary) {
    return <MediaPlaceholder project={project} />;
  }

  if (media.layout === 'portrait-system') {
    const portraits = media.assets.slice(0, 5);
    const [featuredPortrait, ...queuedPortraits] = portraits;

    return (
      <div className='w-full py-3 md:py-8' style={{ color: project.color }}>
        <motion.div
          className='flex flex-col items-center gap-3 md:grid md:grid-cols-[1.15fr_1fr] md:items-center md:gap-6'
          style={{ y: portraitWallY, opacity: portraitWallOpacity, scale: portraitWallScale }}
        >
          {featuredPortrait ? (
            <figure
              className='w-[68%] overflow-visible md:w-full'
            >
              <MediaAsset
                asset={featuredPortrait}
                className='aspect-[4/5] w-full object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.14)]'
                sizes='(max-width: 768px) 70vw, 300px'
              />
            </figure>
          ) : null}

          <div className='grid w-full grid-cols-4 gap-2 md:grid-cols-2 md:gap-3'>
            {queuedPortraits.map((asset) => (
              <figure
                key={asset.src}
                className='overflow-visible'
              >
                <MediaAsset
                  asset={asset}
                  className='aspect-[4/5] w-full object-contain drop-shadow-[0_10px_22px_rgba(0,0,0,0.12)]'
                  sizes='(max-width: 768px) 22vw, 150px'
                />
              </figure>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  if (media.layout === 'expert-video') {
    const videos = media.assets.filter((asset) => asset.type === 'video' || /\.(mp4|webm)$/i.test(asset.src));
    const [primaryVideo, secondaryVideo] = videos;

    // Stacked full-width — both videos full container width, playing simultaneously
    return (
      <motion.div
        className='flex w-full flex-col gap-2'
        style={{ opacity: firstBeatOpacity, scale: firstBeatScale, y: firstBeatY }}
      >
        {/* Video 1: Xpert Series */}
        <div className='relative aspect-video w-full max-h-[calc(50vh-56px)] overflow-hidden rounded-[18px] bg-black shadow-[0_16px_48px_rgba(17,54,97,0.28)]'>
          {primaryVideo ? (
            <MediaAsset asset={primaryVideo} className='h-full w-full object-cover' />
          ) : null}
          <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-3 pt-12'>
            <div className='flex items-center gap-2'>
              <span className='relative flex h-[5px] w-[5px]'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-60' />
                <span className='relative inline-flex h-[5px] w-[5px] rounded-full bg-red-500' />
              </span>
              <p className='text-[8px] font-bold uppercase tracking-[.18em] text-white/55'>Xpert Series</p>
            </div>
          </div>
        </div>

        {/* Video 2: Community Response */}
        <div className='relative aspect-video w-full max-h-[calc(50vh-56px)] overflow-hidden rounded-[18px] bg-black shadow-[0_16px_48px_rgba(17,54,97,0.28)]'>
          {secondaryVideo ? (
            <MediaAsset asset={secondaryVideo} className='h-full w-full object-cover' />
          ) : null}
          <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-3 pt-12'>
            <div className='flex items-center gap-2'>
              <span className='relative flex h-[5px] w-[5px]'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-60' />
                <span className='relative inline-flex h-[5px] w-[5px] rounded-full bg-red-500' />
              </span>
              <p className='text-[8px] font-bold uppercase tracking-[.18em] text-white/55'>Community Response</p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (media.layout === 'home') {
    const [lead, narrative, proof] = media.assets.filter((asset) => asset.type !== 'video');
    const ambient = media.assets.find((asset) => asset.type === 'video');
    const squareAssets = [lead, narrative, proof].filter(Boolean);

    return (
      <div
        className='w-full overflow-visible md:relative md:min-h-[580px]'
        style={{ color: project.color }}
      >
        <div className='space-y-1 px-1 py-1 md:hidden'>
          {ambient ? (
            <figure className='relative mx-auto w-[62%] max-w-[230px] overflow-hidden bg-neutral-950 shadow-[0_20px_70px_rgba(0,0,0,0.12)]'>
              <MediaAsset asset={ambient} className='aspect-video w-full object-contain opacity-90' />
              <div className='absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/25' />
            </figure>
          ) : null}

          <div className='grid grid-cols-3 gap-2'>
            {squareAssets.map((asset) => (
              <figure
                key={`${asset.src}-mobile`}
                className='overflow-visible'
              >
                <MediaAsset asset={asset} className='aspect-square max-h-[74px] w-full object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.14)]' />
              </figure>
            ))}
          </div>
        </div>

        <div className='absolute inset-0 hidden flex-col justify-center gap-4 px-5 py-5 md:flex'>
          {ambient ? (
            <motion.figure
              className='relative overflow-hidden bg-neutral-950 shadow-[0_20px_70px_rgba(0,0,0,0.12)]'
              style={{ scale: mainScale, y: mainY }}
            >
              <MediaAsset asset={ambient} className='aspect-video w-full object-cover opacity-90' />
              <div className='absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/25' />
            </motion.figure>
          ) : null}

          <motion.div
            className='grid grid-cols-3 gap-3'
            style={{ opacity: cardOpacity, y: cardY }}
          >
            {squareAssets.map((asset) => (
              <figure
                key={asset.src}
                className='overflow-visible'
              >
                <MediaAsset asset={asset} className='aspect-square w-full object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.14)]' sizes='(max-width: 768px) 30vw, 16vw' />
              </figure>
            ))}
          </motion.div>
        </div>
      </div>
    );
  }

  if (media.layout === 'editorial') {
    return (
      <SceneShell project={project} mode='editorial system'>
        <div
          className='absolute left-2 right-2 top-16 rounded-[34px] px-4 pb-7 pt-5 md:left-4 md:right-4 md:top-20 md:px-6 md:pb-9'
          style={{ backgroundColor: project.tint }}
        >
          <div className='grid grid-cols-[0.9fr_1.1fr] gap-4 md:gap-6'>
            {[primary, secondary, tertiary].filter(Boolean).map((asset, i) => (
              <motion.figure
                key={asset.src}
                className={`overflow-hidden bg-white shadow-[0_16px_50px_rgba(0,0,0,0.14)] ${
                  i === 0 ? 'row-span-2 self-center' : ''
                }`}
                style={{
                  borderRadius: i === 0 ? 28 : 18,
                  opacity: i === 0 ? 1 : i === 1 ? cardOpacity : thirdOpacity,
                  y: i === 0 ? mainY : i === 1 ? cardY : thirdY,
                  scale: i === 0 ? mainScale : 1,
                }}
              >
                <MediaAsset
                  asset={asset}
                  className={`${i === 0 ? 'h-[260px] md:h-[410px]' : 'h-[120px] md:h-[180px]'} w-full object-cover`}
                />
                <FigureLabel asset={asset} project={project} extra={`0${i + 1}`} />
              </motion.figure>
            ))}
          </div>
        </div>
        <div className='absolute bottom-0 left-5 right-5 flex justify-between gap-4 md:left-7 md:right-7'>
          <p className='max-w-[250px] text-xs font-semibold leading-snug text-neutral-500'>
            Content moves from reactive posts into a repeatable publishing rhythm.
          </p>
          <SampleBadge project={project} label='workflow sample' />
        </div>
      </SceneShell>
    );
  }

  if (media.layout === 'broadcast') {
    const storyBeats = media.assets.slice(1);

    return (
      <SceneShell project={project}>
        <motion.div
          className='absolute left-0 right-0 top-8 overflow-hidden rounded-[18px] bg-neutral-950 shadow-[0_24px_80px_rgba(75,197,212,0.20)] md:top-12'
          style={{ scale: mainScale, y: mainY }}
        >
          <MediaAsset asset={primary} className='aspect-video w-full object-cover opacity-95' />
        </motion.div>
        <div className='absolute bottom-8 left-0 right-0 overflow-hidden pb-3 md:bottom-10'>
          <motion.div
            className='flex w-[138%] gap-3 md:gap-4'
            style={{ opacity: broadcastRailOpacity, y: broadcastRailY, x: broadcastRailX }}
          >
            {storyBeats.map((asset) => (
              <figure
                key={asset.src}
                className='w-[28%] shrink-0 overflow-hidden rounded-[16px] bg-white shadow-[0_16px_44px_rgba(0,0,0,0.12)]'
              >
                <MediaAsset asset={asset} className='aspect-video w-full object-cover' />
              </figure>
            ))}
          </motion.div>
        </div>
      </SceneShell>
    );
  }

  if (media.layout === 'community') {
    const [heroPage, signupPage, igAd] = media.assets;

    return (
      <SceneShell project={project}>
        {heroPage ? (
          <motion.figure
            className='absolute inset-0 flex items-center justify-center p-6'
            style={{ opacity: communityBeat1Opacity, y: communityBeat1Y }}
          >
            <MediaAsset asset={heroPage} className='h-full w-full object-contain drop-shadow-[0_16px_36px_rgba(0,0,0,0.14)]' />
          </motion.figure>
        ) : null}
        {signupPage ? (
          <motion.figure
            className='absolute inset-0 flex items-center justify-center p-6'
            style={{ opacity: communityBeat2Opacity, y: communityBeat2Y }}
          >
            <MediaAsset asset={signupPage} className='h-full w-full object-contain drop-shadow-[0_16px_36px_rgba(0,0,0,0.14)]' />
          </motion.figure>
        ) : null}
        {igAd ? (
          <motion.figure
            className='absolute inset-0 flex items-center justify-center p-6'
            style={{ opacity: communityBeat3Opacity, y: communityBeat3Y }}
          >
            <MediaAsset asset={igAd} className='h-full w-full object-contain drop-shadow-[0_16px_36px_rgba(0,0,0,0.14)]' />
          </motion.figure>
        ) : null}
      </SceneShell>
    );
  }

  if (media.layout === 'commerce') {
    return (
      <SceneShell project={project} mode='path to action'>
        <div
          className='absolute bottom-8 left-0 right-8 top-16 rounded-[40px] md:right-16 md:top-20'
          style={{ backgroundColor: project.tint }}
        />
        <motion.figure
          className='absolute left-0 right-12 top-20 overflow-hidden rounded-2xl bg-white shadow-[0_18px_58px_rgba(0,0,0,0.16)] md:right-24'
          style={{ scale: mainScale, y: mainY }}
        >
          <MediaAsset asset={primary} className='h-[190px] w-full object-cover md:h-[320px]' />
          <FigureLabel asset={primary} project={project} extra='desktop' />
        </motion.figure>
        {secondary ? (
          <motion.figure
            className='absolute bottom-8 right-0 z-20 w-[34%] overflow-hidden rounded-[26px] bg-neutral-950 p-2 shadow-[0_22px_60px_rgba(0,0,0,0.24)] md:bottom-10'
            style={{ opacity: cardOpacity, y: phoneY, rotate: phoneRotate }}
          >
            <MediaAsset asset={secondary} className='h-[220px] w-full rounded-[20px] object-cover md:h-[310px]' />
          </motion.figure>
        ) : null}
        {tertiary ? (
          <motion.figure
            className='absolute bottom-9 left-5 z-10 w-[40%] overflow-hidden rounded-2xl bg-white shadow-[0_14px_44px_rgba(0,0,0,0.15)]'
            style={{ opacity: thirdOpacity, y: thirdY }}
          >
            <MediaAsset asset={tertiary} className='h-[125px] w-full object-cover md:h-[170px]' />
            <FigureLabel asset={tertiary} project={project} extra='loyalty' />
          </motion.figure>
        ) : null}
      </SceneShell>
    );
  }

  if (media.layout === 'immersive') {
    return (
      <SceneShell project={project} mode='interactive world'>
        <motion.div
          className='absolute -left-3 right-3 top-16 overflow-hidden rounded-[34px] bg-black shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:-left-6 md:right-6 md:top-20'
          style={{ scale: mainScale, y: mainY, rotate: portalRotate }}
        >
          <MediaAsset asset={primary} className='h-[230px] w-full object-cover opacity-90 md:h-[360px]' />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
        </motion.div>
        {secondary ? (
          <motion.figure
            className='absolute bottom-10 left-0 z-20 w-[28%] overflow-hidden rounded-2xl bg-white shadow-[0_18px_50px_rgba(0,0,0,0.2)]'
            style={{ opacity: cardOpacity, y: cardY }}
          >
            <MediaAsset asset={secondary} className='h-[140px] w-full object-cover md:h-[210px]' />
          </motion.figure>
        ) : null}
        {tertiary ? (
          <motion.figure
            className='absolute bottom-5 right-0 z-10 w-[42%] overflow-hidden rounded-2xl bg-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]'
            style={{ opacity: thirdOpacity, y: thirdY }}
          >
            <MediaAsset asset={tertiary} className='h-[130px] w-full object-cover md:h-[180px]' />
            <FigureLabel asset={tertiary} project={project} extra='scene' />
          </motion.figure>
        ) : null}
      </SceneShell>
    );
  }

  if (media.layout === 'jollibee') {
    const [ch1, ch2, ch3, ch4, joy] = media.assets;
    const cells = [
      { asset: ch1, opacity: ch1Opacity, scale: ch1Scale },
      { asset: ch2, opacity: ch2Opacity, scale: ch2Scale },
      { asset: ch3, opacity: ch3Opacity, scale: ch3Scale },
      { asset: ch4, opacity: ch4Opacity, scale: ch4Scale },
    ];

    return (
      <div className='relative grid grid-cols-2 gap-2 md:gap-3'>
        {/* 2×2 bento cells */}
        {cells.map(({ asset, opacity, scale }, i) =>
          asset ? (
            <motion.figure
              key={i}
              className='relative overflow-hidden rounded-[14px] bg-[#1C0508]'
              style={{ aspectRatio: '16/9', opacity, scale }}
            >
              <MediaAsset asset={asset} className='h-full w-full object-cover' />
              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent' />
            </motion.figure>
          ) : (
            <div key={i} className='rounded-[14px] bg-[#1C0508]/30' style={{ aspectRatio: '16/9' }} />
          )
        )}

        {/* Joy — flex overlay centered exactly at grid intersection, no transform conflict */}
        {joy ? (
          <div className='pointer-events-none absolute inset-0 z-20 flex items-center justify-center'>
            <motion.figure
              className='w-[42%] md:w-[36%]'
              style={{ opacity: joyFloatOpacity, y: joyFloatY }}
            >
              <MediaAsset asset={joy} className='aspect-square w-full object-contain drop-shadow-[0_16px_40px_rgba(0,0,0,0.7)]' />
            </motion.figure>
          </div>
        ) : null}
      </div>
    );
  }

  if (media.layout === 'film') {
    const frames = [primary, secondary, tertiary].filter(Boolean);

    return (
      <SceneShell project={project} mode='film sequence'>
        <motion.div
          className='absolute left-5 top-20 flex w-[145%] gap-4 md:left-8 md:gap-5'
          style={{ x: filmX }}
        >
          {frames.concat(frames).map((asset, i) => (
            <figure
              key={`${asset.src}-${i}`}
              className='w-[42%] shrink-0 overflow-hidden rounded-2xl bg-neutral-950 shadow-[0_20px_60px_rgba(0,0,0,0.2)]'
            >
              <MediaAsset asset={asset} className='h-[210px] w-full object-cover opacity-95 md:h-[340px]' sizes='(max-width: 768px) 80vw, 30vw' />
            </figure>
          ))}
        </motion.div>
      </SceneShell>
    );
  }

  return (
    <SceneShell project={project} mode='trust journey'>
      <div
        className='absolute bottom-12 left-2 right-2 top-16 rounded-[44px] md:left-5 md:right-5 md:top-20'
        style={{ backgroundColor: project.tint }}
      />
      <motion.figure
        className='absolute inset-x-8 top-24 overflow-hidden rounded-2xl bg-white shadow-[0_18px_60px_rgba(0,0,0,0.16)] md:inset-x-14'
        style={{ scale: mainScale, y: mainY }}
      >
        <MediaAsset asset={primary} className='h-[220px] w-full object-cover md:h-[330px]' />
        <FigureLabel asset={primary} project={project} extra={project.mediaType} />
      </motion.figure>
      {secondary ? (
        <motion.figure
          className='absolute bottom-10 right-0 z-10 w-[58%] overflow-hidden rounded-2xl bg-white shadow-[0_18px_54px_rgba(0,0,0,0.20)]'
          style={{ opacity: cardOpacity, y: cardY }}
        >
          <MediaAsset asset={secondary} className='h-[150px] w-full object-cover md:h-[210px]' />
          <FigureLabel asset={secondary} project={project} extra='phase' />
        </motion.figure>
      ) : null}
      {tertiary ? (
        <motion.figure
          className='absolute bottom-8 left-0 z-20 w-[36%] overflow-hidden rounded-2xl bg-white shadow-[0_14px_44px_rgba(0,0,0,0.18)] md:bottom-10'
          style={{ opacity: thirdOpacity, y: thirdY }}
        >
          <MediaAsset asset={tertiary} className='h-[130px] w-full object-cover md:h-[180px]' />
          <FigureLabel asset={tertiary} project={project} extra='proof' />
        </motion.figure>
      ) : null}
      <motion.div
        className='absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 md:bottom-6 md:left-7 md:right-7'
        style={{ x: sweepX }}
      >
        <p className='max-w-[240px] text-xs font-semibold leading-snug text-neutral-500'>
          {project.mediaHint}
        </p>
        <SampleBadge project={project} />
      </motion.div>
    </SceneShell>
  );
};

/* ── Reveal ── */
const Reveal = ({ children, delay = 0, y = 28 }) => {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: reduced ? 0 : 0.8, delay: reduced ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

/* ── Sticky media column ── */
const StickyMedia = ({ project, sectionRef }) => {
  const springConfig = { stiffness: 100, damping: 22, mass: 0.6 };
  const tiltX = useSpring(0, springConfig);
  const tiltY = useSpring(0, springConfig);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.94, 1, 1, 0.94]);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width - 0.5;
    const cy = (e.clientY - rect.top) / rect.height - 0.5;
    tiltX.set(cy * -10);
    tiltY.set(cx * 10);
  }, [tiltX, tiltY]);

  const handleMouseLeave = useCallback(() => {
    tiltX.set(0);
    tiltY.set(0);
  }, [tiltX, tiltY]);

  return (
    <div className='relative hidden md:block'>
      <div className='sticky top-[72px] flex h-[calc(100vh-72px)] items-center p-8 lg:p-12'>
        <motion.div
          className='w-full'
          style={{ scale, rotateX: tiltX, rotateY: tiltY, transformStyle: 'preserve-3d' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <MediaPlaceholder project={project} />
        </motion.div>
      </div>
    </div>
  );
};

/* ── Mobile media ── */
const MobileMedia = ({ project }) => (
  <motion.div
    className='mb-10 md:hidden'
    initial={{ opacity: 0, scale: 0.97 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-8%' }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  >
    <MediaPlaceholder project={project} />
  </motion.div>
);

/* ── Outcome statement ── */
const OutcomeStatement = ({ outcome, color, bg }) => {
  const reduced = useReducedMotion();
  return (
    <section
      className='flex min-h-[8vh] items-center justify-center px-6 py-6 text-center md:min-h-[14vh] md:py-10'
      style={{ backgroundColor: bg }}
    >
      <motion.p
        className='text-[clamp(20px,6vw,28px)] font-bold leading-[1.0] tracking-[-0.045em] md:text-[clamp(36px,5.5vw,72px)]'
        style={{ color }}
        initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: reduced ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        {outcome}
      </motion.p>
    </section>
  );
};

const TrueLegacyMobileCase = ({ project, index, stage }) => {
  const media = projectMedia[project.id];
  const ambient = media.assets.find((asset) => asset.type === 'video');
  const squareAssets = media.assets.filter((asset) => asset.type !== 'video');
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const galleryRef = useRef(null);

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const { scrollYProgress: videoProgress } = useScroll({
    target: videoRef,
    offset: ['start end', 'end start'],
  });
  const { scrollYProgress: galleryProgress } = useScroll({
    target: galleryRef,
    offset: ['start end', 'end start'],
  });

  const videoScale = useTransform(videoProgress, [0, 0.42, 1], [0.94, 1, 1.04]);
  const videoY = useTransform(videoProgress, [0, 0.48, 1], [34, 0, -28]);
  const galleryY = useTransform(galleryProgress, [0, 0.5, 1], [28, 0, -18]);
  const galleryScale = useTransform(galleryProgress, [0, 0.48, 1], [0.97, 1, 0.99]);

  return (
    <section
      ref={sectionRef}
      className='relative scroll-mt-[52px] [overflow-x:clip] md:hidden'
      style={{ backgroundColor: stage.bg }}
    >
      <MobileSectionProgress progress={sectionProgress} color={project.color} track={stage.progressTrack} />
      <MobileGhostNumber progress={sectionProgress} index={index} color={stage.text} />

      <div className='relative z-10 px-6 pb-10 pt-24'>
        <motion.div
          className='mb-8 flex items-center gap-3'
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProjectLogo project={project} className='mr-1' />
          <span className='text-[11px] font-bold tabular-nums' style={{ color: project.color }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className='h-px w-5 opacity-30' style={{ backgroundColor: project.color }} />
          <span className='text-[11px] font-bold uppercase tracking-[0.22em]' style={{ color: project.color }}>
            {project.category}
          </span>
          <span className='ml-auto text-[11px] font-semibold' style={{ color: stage.soft }}>
            {project.year}
          </span>
        </motion.div>

        <motion.h2
          className='whitespace-pre-line text-[clamp(40px,13.5vw,52px)] font-bold leading-[0.93] tracking-[-0.055em]'
          style={{ color: stage.text }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {project.headline}
        </motion.h2>

        <motion.p
          className='mt-5 text-[clamp(17px,5.2vw,21px)] font-medium leading-[1.22]'
          style={{ color: stage.muted }}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          {project.subhead}
        </motion.p>
      </div>

      {ambient ? (
        <motion.figure
          ref={videoRef}
          className='relative z-10 w-full overflow-hidden bg-neutral-950'
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ scale: videoScale, y: videoY }}
        >
          <MediaAsset asset={ambient} className='aspect-video w-full object-cover opacity-95' />
          <div className='absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20' />
        </motion.figure>
      ) : null}

      <div className='relative z-10 px-6 py-12'>
        <motion.p
          className='max-w-[330px] text-[24px] font-semibold leading-[1.08] tracking-[-0.035em]'
          style={{ color: stage.text }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Real homes, real transitions, and a trust story built across every touchpoint.
        </motion.p>
      </div>

      <div
        ref={galleryRef}
        className='relative z-10 px-6 py-8'
        style={{ backgroundColor: stage.bg }}
      >
        <motion.div
          className='grid grid-cols-2 gap-5'
          style={{
            y: galleryY,
            scale: galleryScale,
          }}
        >
          {squareAssets.map((asset, assetIndex) => (
            <motion.figure
              key={`${asset.src}-mobile-feature`}
              className={`${assetIndex === 0 ? 'col-span-2 w-full' : 'w-full'} overflow-visible ${
                assetIndex === 1 ? 'justify-self-start' : assetIndex === 2 ? 'justify-self-end' : ''
              }`}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{
                duration: 0.9,
                delay: assetIndex * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <MediaAsset
                asset={asset}
                className='aspect-square w-full object-contain drop-shadow-[0_24px_70px_rgba(0,0,0,0.18)]'
              />
            </motion.figure>
          ))}
        </motion.div>
      </div>

      <div className='relative z-10 px-6 pb-16'>
        <motion.div
          className='border-t pt-9'
          style={{ borderColor: stage.rule }}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className='mb-3 text-[11px] font-bold uppercase tracking-[0.26em]' style={{ color: project.color }}>
            The situation
          </p>
          <p className='text-lg font-medium leading-[1.5]' style={{ color: stage.muted }}>
            {project.situation}
          </p>
        </motion.div>

        <motion.div
          className='mt-10 border-l-2 pl-5'
          style={{ borderColor: project.color }}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.9, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className='mb-3 text-[11px] font-bold uppercase tracking-[0.26em]' style={{ color: project.color }}>
            The result
          </p>
          <p className='text-lg font-medium leading-[1.5]' style={{ color: stage.muted }}>
            {project.result}
          </p>
        </motion.div>

        <motion.div
          className='mt-10 flex flex-wrap gap-2'
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {project.skills.map((s) => (
            <span
              key={s}
              className='rounded-full border px-3 py-1.5 text-xs font-semibold'
              style={{ borderColor: `${project.color}50`, color: project.color }}
            >
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const MissioMobileCase = ({ project, index, stage }) => {
  const portraits = projectMedia[project.id].assets.slice(0, 5);
  const sectionRef = useRef(null);
  const galleryRef = useRef(null);

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const { scrollYProgress: galleryProgress } = useScroll({
    target: galleryRef,
    offset: ['start end', 'end start'],
  });
  const galleryY = useTransform(galleryProgress, [0, 0.5, 1], [30, 0, -20]);
  const galleryScale = useTransform(galleryProgress, [0, 0.45, 1], [0.97, 1, 0.99]);

  return (
    <section
      ref={sectionRef}
      className='relative [overflow-x:clip] md:hidden'
      style={{ backgroundColor: stage.bg }}
    >
      <MobileSectionProgress progress={sectionProgress} color={project.color} track={stage.progressTrack} />
      <MobileGhostNumber progress={sectionProgress} index={index} color={stage.text} />

      <div className='relative z-10 px-6 pb-10 pt-24'>
        <motion.div
          className='mb-8 flex items-center gap-3'
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProjectLogo project={project} className='mr-1' />
          <span className='text-[11px] font-bold tabular-nums' style={{ color: project.color }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className='h-px w-5 opacity-30' style={{ backgroundColor: project.color }} />
          <span className='text-[11px] font-bold uppercase tracking-[0.22em]' style={{ color: project.color }}>
            {project.category}
          </span>
          <span className='ml-auto text-[11px] font-semibold' style={{ color: stage.soft }}>
            {project.year}
          </span>
        </motion.div>

        <motion.h2
          className='whitespace-pre-line text-[clamp(38px,12.5vw,48px)] font-bold leading-[0.93] tracking-[-0.055em]'
          style={{ color: stage.text }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {project.headline}
        </motion.h2>

        <motion.p
          className='mt-5 text-[clamp(17px,5.2vw,21px)] font-medium leading-[1.22]'
          style={{ color: stage.muted }}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          {project.subhead}
        </motion.p>
      </div>

      <div className='relative z-10 px-6 py-10' style={{ backgroundColor: stage.bg }}>
        <motion.p
          className='max-w-[330px] text-[clamp(20px,6.2vw,24px)] font-semibold leading-[1.08] tracking-[-0.035em]'
          style={{ color: stage.text }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          A repeatable content system for high-volume, church-specific communication.
        </motion.p>

        <div
          ref={galleryRef}
          className='mt-9 snap-x overflow-x-auto [scrollbar-width:none]'
          style={{ marginInline: '-24px', scrollPaddingInline: '24px' }}
        >
          <motion.div className='flex w-max gap-5 px-6' style={{ y: galleryY, scale: galleryScale }}>
            {portraits.map((asset, assetIndex) => (
              <motion.figure
                key={`${asset.src}-missio-mobile`}
                className='w-[72vw] max-w-[310px] shrink-0 snap-center overflow-visible'
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8%' }}
                transition={{
                  duration: 0.9,
                  delay: assetIndex * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <MediaAsset
                  asset={asset}
                  className='aspect-[4/5] w-full object-contain drop-shadow-[0_24px_70px_rgba(0,0,0,0.16)]'
                />
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </div>

      <div className='relative z-10 px-6 pb-16 pt-12'>
        <motion.div
          className='border-t pt-9'
          style={{ borderColor: stage.rule }}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className='mb-3 text-[11px] font-bold uppercase tracking-[0.26em]' style={{ color: project.color }}>
            The situation
          </p>
          <p className='text-lg font-medium leading-[1.5]' style={{ color: stage.muted }}>
            {project.situation}
          </p>
        </motion.div>

        <motion.div
          className='mt-10 border-l-2 pl-5'
          style={{ borderColor: project.color }}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.9, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className='mb-3 text-[11px] font-bold uppercase tracking-[0.26em]' style={{ color: project.color }}>
            The result
          </p>
          <p className='text-lg font-medium leading-[1.5]' style={{ color: stage.muted }}>
            {project.result}
          </p>
        </motion.div>

        <motion.div
          className='mt-10 flex flex-wrap gap-2'
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {project.skills.map((s) => (
            <span
              key={s}
              className='rounded-full border px-3 py-1.5 text-xs font-semibold'
              style={{ borderColor: `${project.color}50`, color: project.color }}
            >
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const BoehringerMobileCase = ({ project, index, stage }) => {
  const videos = projectMedia[project.id].assets.filter((asset) => asset.type === 'video' || /\.(mp4|webm)$/i.test(asset.src));
  const [primaryVideo, secondaryVideo] = videos;
  const sectionRef = useRef(null);
  const firstVideoRef = useRef(null);
  const secondVideoRef = useRef(null);

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const { scrollYProgress: firstProgress } = useScroll({
    target: firstVideoRef,
    offset: ['start end', 'end start'],
  });
  const { scrollYProgress: secondProgress } = useScroll({
    target: secondVideoRef,
    offset: ['start end', 'end start'],
  });

  const firstY = useTransform(firstProgress, [0, 0.5, 1], [32, 0, -18]);
  const firstScale = useTransform(firstProgress, [0, 0.48, 1], [0.96, 1, 0.985]);
  const secondY = useTransform(secondProgress, [0, 0.5, 1], [32, 0, -18]);
  const secondScale = useTransform(secondProgress, [0, 0.48, 1], [0.96, 1, 0.985]);

  return (
    <section
      ref={sectionRef}
      className='relative [overflow-x:clip] md:hidden'
      style={{ backgroundColor: stage.bg }}
    >
      <MobileSectionProgress progress={sectionProgress} color={project.color} track={stage.progressTrack} />
      <MobileGhostNumber progress={sectionProgress} index={index} color={stage.text} />

      <div className='relative z-10 px-6 pb-10 pt-24'>
        <motion.div
          className='mb-8 flex items-center gap-3'
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProjectLogo project={project} className='mr-1' />
          <span className='text-[11px] font-bold tabular-nums' style={{ color: project.color }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className='h-px w-5 opacity-30' style={{ backgroundColor: project.color }} />
          <span className='text-[11px] font-bold uppercase tracking-[0.22em]' style={{ color: project.color }}>
            {project.category}
          </span>
          <span className='ml-auto text-[11px] font-semibold' style={{ color: stage.soft }}>
            {project.year}
          </span>
        </motion.div>

        <motion.h2
          className='whitespace-pre-line text-[clamp(38px,12.5vw,48px)] font-bold leading-[0.93] tracking-[-0.055em]'
          style={{ color: stage.text }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {project.headline}
        </motion.h2>

        <motion.p
          className='mt-5 text-[clamp(17px,5.2vw,21px)] font-medium leading-[1.18]'
          style={{ color: stage.muted }}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          {project.subhead}
        </motion.p>
      </div>

      <div className='relative z-10 flex flex-col gap-3 pb-6'>
        {secondaryVideo ? (
          <motion.figure
            ref={secondVideoRef}
            className='relative w-full overflow-hidden bg-black'
            style={{ y: secondY, scale: secondScale }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <MediaAsset asset={secondaryVideo} className='aspect-video w-full object-cover opacity-95' />
          </motion.figure>
        ) : null}

        {primaryVideo ? (
          <motion.figure
            ref={firstVideoRef}
            className='relative w-full overflow-hidden bg-black'
            style={{ y: firstY, scale: firstScale }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <MediaAsset asset={primaryVideo} className='aspect-video w-full object-cover opacity-95' />
          </motion.figure>
        ) : null}
      </div>

      <div className='relative z-10 px-6 pb-6'>
        <motion.p
          className='max-w-[320px] text-[clamp(20px,6.2vw,24px)] font-semibold leading-[1.08] tracking-[-0.035em]'
          style={{ color: stage.text }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Expert presence first. Public response close behind.
        </motion.p>
      </div>

      <div className='relative z-10 px-6 pb-16 pt-4'>
        <motion.div
          className='border-t pt-9'
          style={{ borderColor: stage.rule }}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className='mb-3 text-[11px] font-bold uppercase tracking-[0.26em]' style={{ color: project.color }}>
            The situation
          </p>
          <p className='text-lg font-medium leading-[1.5]' style={{ color: stage.muted }}>
            {project.situation}
          </p>
        </motion.div>

        <motion.div
          className='mt-10 border-l-2 pl-5'
          style={{ borderColor: project.color }}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.9, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className='mb-3 text-[11px] font-bold uppercase tracking-[0.26em]' style={{ color: project.color }}>
            The result
          </p>
          <p className='text-lg font-medium leading-[1.5]' style={{ color: stage.muted }}>
            {project.result}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

/* ── JFC jollibee carousel with dot indicators ── */
const JollibeeMobileScene = ({ project }) => {
  const media = projectMedia[project.id];
  const chapters = media?.assets?.slice(0, 4).filter(Boolean) ?? [];
  const joy = media?.assets?.[4];
  const scrollRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const stage = getStageTheme(project);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      // Use per-card width for accurate index — each card is 82vw + 12px gap
      const firstCard = el.firstElementChild;
      const cardW = firstCard ? firstCard.offsetWidth + 12 : el.scrollWidth / chapters.length;
      const idx = Math.min(Math.round(el.scrollLeft / cardW), chapters.length - 1);
      setActiveIdx(idx);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [chapters.length]);

  return (
    <div className='flex flex-col gap-3'>
      <div
        ref={scrollRef}
        className='flex gap-3 overflow-x-auto pb-1'
        style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {chapters.map((ch, i) => (
          <MobileMediaBeat
            key={i}
            delay={i * 0.04}
            className='w-[82vw] shrink-0 overflow-hidden rounded-xl bg-black'
            style={{ scrollSnapAlign: 'center' }}
          >
            <MediaAsset asset={ch} className='aspect-video w-full object-cover' />
          </MobileMediaBeat>
        ))}
      </div>

      {/* Dot indicators — initial={false} skips entry animation, avoids hydration flash */}
      <div className='flex items-center justify-center gap-2' aria-hidden='true'>
        {chapters.map((_, i) => (
          <motion.span
            key={i}
            className='block rounded-full'
            initial={false}
            animate={{
              width: i === activeIdx ? 16 : 6,
              height: 6,
              backgroundColor: i === activeIdx ? project.color : '#d4d4d4',
              opacity: i === activeIdx ? 1 : 0.5,
            }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>

      {/* Joy — plain opacity wrapper with explicit bg so multiply blend works on iOS */}
      {joy ? (
        <motion.div
          className='mx-auto w-[64%]'
          style={{ backgroundColor: stage.bg }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <MediaAsset asset={joy} className='aspect-square w-full object-contain [mix-blend-mode:multiply]' />
        </motion.div>
      ) : null}
    </div>
  );
};

/* ── Inline mobile media (no absolute positioning) ── */
const MobileMediaScene = ({ project }) => {
  const media = projectMedia[project.id];
  if (!media?.assets?.length) return null;

  const [primary, secondary] = media.assets;

  if (media.layout === 'horror') {
    return (
      <div className='flex flex-col gap-3'>
        {media.assets.slice(0, 4).map((asset, i) => (
          <MobileMediaBeat key={asset.src} delay={i * 0.05} className='w-full'>
            <AzazelStill asset={asset} project={project} index={i} className='w-full' />
          </MobileMediaBeat>
        ))}
      </div>
    );
  }

  if (media.layout === 'film') {
    const frames = media.assets;
    return (
      <div className='overflow-x-auto [scrollbar-width:none]' style={{ marginInline: '-24px' }}>
        <div className='flex gap-3 px-6'>
          {frames.concat(frames).map((asset, i) => (
            <MobileMediaBeat key={`${asset.src}-${i}`} delay={(i % frames.length) * 0.04} className='w-[78vw] shrink-0 overflow-hidden rounded-xl bg-neutral-950'>
              <MediaAsset asset={asset} className='aspect-video w-full object-cover opacity-95' />
            </MobileMediaBeat>
          ))}
        </div>
      </div>
    );
  }

  if (media.layout === 'broadcast') {
    const storyBeats = media.assets.slice(1);

    return (
      <div className='flex flex-col gap-3'>
        {primary ? (
          <MobileMediaBeat className='overflow-hidden rounded-xl bg-neutral-950'>
            <MediaAsset asset={primary} className='aspect-video w-full object-cover opacity-95' />
          </MobileMediaBeat>
        ) : null}
        <div
          className='flex gap-3 overflow-x-auto pb-1'
          style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {storyBeats.map((asset) => (
            <MobileMediaBeat
              key={asset.src}
              delay={0.04}
              className='w-[72vw] shrink-0 overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.09)]'
              style={{ scrollSnapAlign: 'center' }}
            >
              <MediaAsset asset={asset} className='aspect-video w-full object-cover' />
            </MobileMediaBeat>
          ))}
        </div>
      </div>
    );
  }

  if (media.layout === 'immersive') {
    return (
      <div className='flex flex-col gap-3'>
        {primary ? (
          <MobileMediaBeat className='overflow-hidden rounded-2xl bg-neutral-950'>
            <MediaAsset asset={primary} className='aspect-video w-full object-cover opacity-90' />
          </MobileMediaBeat>
        ) : null}
        {secondary ? (
          <MobileMediaBeat delay={0.06} className='w-[56%] overflow-hidden rounded-xl bg-neutral-950'>
            <MediaAsset asset={secondary} className='aspect-square w-full object-cover opacity-90' />
          </MobileMediaBeat>
        ) : null}
      </div>
    );
  }

  if (media.layout === 'jollibee') {
    return <JollibeeMobileScene project={project} />;
  }

  if (media.layout === 'community') {
    const [heroPage, signupPage, igAd] = media.assets;
    return (
      <div className='flex flex-col gap-4'>
        {heroPage ? (
          <MobileMediaBeat className='overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.09)]'>
            <MediaAsset asset={heroPage} className='aspect-[4/3] w-full object-contain' />
          </MobileMediaBeat>
        ) : null}
        {signupPage ? (
          <MobileMediaBeat delay={0.06} className='overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.09)]'>
            <MediaAsset asset={signupPage} className='aspect-[4/3] w-full object-contain' />
          </MobileMediaBeat>
        ) : null}
        {igAd ? (
          <MobileMediaBeat delay={0.12} className='overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.09)]'>
            <MediaAsset asset={igAd} className='aspect-[16/10] w-full object-contain' />
          </MobileMediaBeat>
        ) : null}
      </div>
    );
  }

  if (primary) {
    return (
      <MobileMediaBeat className='overflow-hidden rounded-2xl bg-neutral-950'>
        <MediaAsset asset={primary} className='aspect-video w-full object-cover opacity-90' />
      </MobileMediaBeat>
    );
  }

  return null;
};

/* ── Generic mobile case (used for projects without a bespoke mobile layout) ── */
const GenericMobileCase = ({ project, index, stage }) => {
  const sectionRef = useRef(null);
  const mediaRef = useRef(null);

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const { scrollYProgress: mediaProgress } = useScroll({
    target: mediaRef,
    offset: ['start end', 'end start'],
  });
  const mediaY = useTransform(mediaProgress, [0, 0.5, 1], [42, 0, -28]);
  const mediaScale = useTransform(mediaProgress, [0, 0.45, 1], [0.94, 1, 0.985]);
  const textY = useTransform(sectionProgress, [0, 0.28], [0, -18]);

  return (
    <section ref={sectionRef} className='relative [overflow-x:clip] md:hidden' style={{ backgroundColor: stage.bg }}>
      <MobileSectionProgress progress={sectionProgress} color={project.color} track={stage.progressTrack} />
      <MobileGhostNumber progress={sectionProgress} index={index} color={stage.text} />

      <motion.div className='relative z-10 px-6 pb-10 pt-24' style={{ y: textY }}>
        <motion.div
          className='mb-8 flex items-center gap-3'
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProjectLogo project={project} className='mr-1' />
          <span className='text-[11px] font-bold tabular-nums' style={{ color: project.color }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className='h-px w-5 opacity-30' style={{ backgroundColor: project.color }} />
          <span className='text-[11px] font-bold uppercase tracking-[0.22em]' style={{ color: project.color }}>
            {project.category}
          </span>
          <span className='ml-auto text-[11px] font-semibold' style={{ color: stage.soft }}>
            {project.year}
          </span>
        </motion.div>

        <motion.h2
          className='whitespace-pre-line text-[clamp(38px,12.5vw,48px)] font-bold leading-[0.93] tracking-[-0.055em]'
          style={{ color: stage.text }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {project.headline}
        </motion.h2>

        <motion.p
          className='mt-5 text-[clamp(17px,5.2vw,21px)] font-medium leading-[1.18]'
          style={{ color: stage.muted }}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          {project.subhead}
        </motion.p>
      </motion.div>

      <motion.div
        ref={mediaRef}
        className='relative z-10 px-6 pb-8'
        style={{ y: mediaY, scale: mediaScale }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <MobileMediaScene project={project} />
      </motion.div>

      <div className='relative z-10 px-6 pb-16 pt-4'>
        <motion.div
          className='border-t pt-9'
          style={{ borderColor: stage.rule }}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className='mb-3 text-[11px] font-bold uppercase tracking-[0.26em]' style={{ color: project.color }}>
            The situation
          </p>
          <p className='text-lg font-medium leading-[1.5]' style={{ color: stage.muted }}>
            {project.situation}
          </p>
        </motion.div>

        <motion.div
          className='mt-10 border-l-2 pl-5'
          style={{ borderColor: project.color }}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.9, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className='mb-3 text-[11px] font-bold uppercase tracking-[0.26em]' style={{ color: project.color }}>
            The result
          </p>
          <p className='text-lg font-medium leading-[1.5]' style={{ color: stage.muted }}>
            {project.result}
          </p>
        </motion.div>

        <motion.div
          className='mt-10 flex flex-wrap gap-2'
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {project.skills.map((s) => (
            <span
              key={s}
              className='rounded-full border px-3 py-1.5 text-xs font-semibold'
              style={{ borderColor: `${project.color}50`, color: project.color }}
            >
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ── Pinned scroll section (Apple-style) ── */
const PinnedProjectSection = ({ project, index }) => {
  const containerRef = useRef(null);
  const stage = getStageTheme(project);
  const mediaFirst = stage.mediaFirst;
  const gridClass = mediaFirst
    ? 'grid h-full md:grid-cols-[1.08fr_0.92fr]'
    : 'grid h-full md:grid-cols-[0.92fr_1.08fr]';
  const textOrderClass = mediaFirst ? 'md:order-2' : 'md:order-1';
  const mediaOrderClass = mediaFirst ? 'md:order-1' : 'md:order-2';
  const mobileMediaFirst = project.id === 'missio';
  const forceSubheadVisible = project.id === 'true-legacy';
  const compactMobile = project.id === 'true-legacy';
  const standaloneMobile = true;
  const bespokeMobile = project.id === 'true-legacy' || project.id === 'missio' || project.id === 'boehringer';
  const tightDesktop = project.id === 'boehringer';
  const copySlotHeight = tightDesktop ? '148px' : '176px';

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Phase 1: eyebrow + headline are visible at direct anchors, then hold.
  const eyebrowOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 1]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 1]);
  const headlineY = useTransform(scrollYProgress, [0, 0.2], [0, 0]);

  // Phase 2: subhead
  const subheadOpacity = useTransform(scrollYProgress, [0.16, 0.28], [0, 1]);

  // Phase 3: situation (fades in, then out)
  const situationOpacity = useTransform(scrollYProgress, [0.26, 0.38, 0.56, 0.66], [0, 1, 1, 0]);
  const situationY = useTransform(scrollYProgress, [0.26, 0.38], [20, 0]);

  // Phase 4: result (fades in after situation leaves)
  const resultOpacity = useTransform(scrollYProgress, [0.62, 0.74], [0, 1]);
  const resultY = useTransform(scrollYProgress, [0.62, 0.74], [20, 0]);

  // Phase 5: skills
  const skillsOpacity = useTransform(scrollYProgress, [0.8, 0.92], [0, 1]);

  // Media enters and breathes
  const mediaScale = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [0.88, 1, 1, 0.94]);
  const mediaOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 1]);

  // Thin progress bar
  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <div
        id={standaloneMobile ? project.id : undefined}
        className={standaloneMobile ? 'scroll-mt-[52px] md:scroll-mt-[72px]' : undefined}
      >
        {compactMobile ? (
          <TrueLegacyMobileCase project={project} index={index} stage={stage} />
        ) : null}
        {project.id === 'missio' ? (
          <MissioMobileCase project={project} index={index} stage={stage} />
        ) : null}
        {project.id === 'boehringer' ? (
          <BoehringerMobileCase project={project} index={index} stage={stage} />
        ) : null}
        {!bespokeMobile ? (
          <GenericMobileCase project={project} index={index} stage={stage} />
        ) : null}

        {/* Tall container — scroll buffer */}
        <div
          ref={containerRef}
          id={standaloneMobile ? undefined : project.id}
          style={{ height: '300vh', backgroundColor: stage.bg }}
          className={`${standaloneMobile ? 'hidden md:block' : 'relative'} scroll-mt-[72px]`}
        >
        {/* Sticky viewport */}
        <div
          className='sticky top-[52px] h-[calc(100vh-52px)] overflow-hidden md:top-[72px] md:h-[calc(100vh-72px)]'
          style={{ backgroundColor: stage.bg, borderColor: stage.rule }}
        >

          {/* Progress bar */}
          <div className='absolute inset-x-0 top-0 z-10 h-[2px]' style={{ backgroundColor: stage.progressTrack }}>
            <motion.div
              className='h-full origin-left'
              style={{ scaleX: progressScaleX, backgroundColor: project.color }}
            />
          </div>

          <div className={gridClass}>

            {/* Left: scroll-driven text */}
            <div className={`relative z-10 flex flex-col justify-center px-6 md:px-8 lg:px-14 ${textOrderClass}`}>
              <motion.p
                className='pointer-events-none absolute right-6 top-20 hidden text-[18vw] font-black leading-none tracking-[-0.08em] opacity-[0.035] md:block'
                style={{ color: stage.text, y: headlineY }}
              >
                {String(index + 1).padStart(2, '0')}
              </motion.p>

              <motion.div className={`${compactMobile ? 'mb-1' : 'mb-7'} flex items-center gap-3 ${tightDesktop ? 'md:mb-5' : 'md:mb-7'}`} style={{ opacity: eyebrowOpacity }}>
                <ProjectLogo project={project} className='mr-1' />
                <span className='text-[11px] font-bold tabular-nums' style={{ color: project.color }}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className='h-px w-5 opacity-30' style={{ backgroundColor: project.color }} />
                <span className='text-[11px] font-bold uppercase tracking-[0.22em]' style={{ color: project.color }}>
                  {project.category}
                </span>
                <span className='ml-auto text-[11px] font-semibold' style={{ color: stage.soft }}>
                  {project.year}
                </span>
              </motion.div>

              <motion.h2
                className={`${compactMobile ? 'mb-1 text-[34px]' : 'mb-5 text-[44px]'} whitespace-pre-line font-bold leading-[0.93] tracking-[-0.055em] ${tightDesktop ? 'md:mb-4 md:text-[clamp(38px,5vw,68px)]' : 'md:mb-5 md:text-[clamp(40px,5.5vw,80px)]'}`}
                style={{ opacity: headlineOpacity, y: headlineY, color: stage.text }}
              >
                {project.headline}
              </motion.h2>

              {mobileMediaFirst ? (
                <motion.div
                  className='mb-5 md:hidden'
                  style={{ opacity: mediaOpacity, scale: mediaScale }}
                >
                  <ProjectMediaScene project={project} progress={scrollYProgress} />
                </motion.div>
              ) : null}

              <motion.p
                className={`${compactMobile ? 'mb-2 text-sm' : mobileMediaFirst ? 'mb-4 text-base' : 'mb-10 text-xl'} font-medium leading-snug ${tightDesktop ? 'md:mb-7 md:text-lg' : 'md:mb-10 md:text-xl'}`}
                style={{ opacity: forceSubheadVisible ? 1 : subheadOpacity, color: stage.muted }}
              >
                {project.subhead}
              </motion.p>

              {!mobileMediaFirst ? (
                <motion.div
                  className={`${compactMobile ? 'mb-3' : 'mb-10'} md:hidden`}
                  style={{ opacity: mediaOpacity, scale: mediaScale }}
                >
                  <ProjectMediaScene project={project} progress={scrollYProgress} />
                </motion.div>
              ) : null}

              {compactMobile ? (
                <div className='mb-1 md:hidden'>
                  <p className='mb-1 text-[9px] font-bold uppercase tracking-[0.26em]' style={{ color: project.color }}>
                    The situation
                  </p>
                  <p className='text-[11px] font-medium leading-[1.32]' style={{ color: stage.muted }}>
                    {project.situation}
                  </p>
                </div>
              ) : null}

              {/* Rotating content slot: situation → result (grid overlap so container auto-sizes) */}
              <div className={`${compactMobile ? 'hidden md:grid' : 'grid'}`} style={{ gridTemplateColumns: '1fr', gridTemplateRows: '1fr' }}>
                <motion.div
                  className='col-start-1 row-start-1'
                  style={{ opacity: situationOpacity, y: situationY }}
                >
                  <p className={`${compactMobile ? 'mb-1 text-[9px]' : 'mb-3 text-[10px]'} font-bold uppercase tracking-[0.26em]`} style={{ color: project.color }}>
                    The situation
                  </p>
                  <p className={`${compactMobile ? 'text-[11px] leading-[1.32]' : 'text-base leading-[1.65]'} font-medium ${tightDesktop ? 'md:text-base md:leading-[1.5]' : 'md:text-lg md:leading-[1.65]'}`} style={{ color: stage.muted }}>
                    {project.situation}
                  </p>
                </motion.div>

                <motion.div
                  className={`${compactMobile ? 'pl-3' : 'pl-5'} col-start-1 row-start-1 border-l-2`}
                  style={{ opacity: resultOpacity, y: resultY, borderColor: project.color }}
                >
                  <p className={`${compactMobile ? 'mb-1 text-[9px]' : 'mb-3 text-[10px]'} font-bold uppercase tracking-[0.26em]`} style={{ color: project.color }}>
                    The result
                  </p>
                  <p className={`${compactMobile ? 'text-[11px] leading-[1.32]' : 'text-base leading-[1.65]'} font-medium ${tightDesktop ? 'md:text-base md:leading-[1.5]' : 'md:text-lg md:leading-[1.65]'}`} style={{ color: stage.muted }}>
                    {project.result}
                  </p>
                </motion.div>
              </div>

              {/* Skills */}
              <motion.div className={`${compactMobile ? 'mt-3 hidden' : 'mt-8 flex'} flex-wrap gap-2 ${tightDesktop ? 'md:mt-5' : 'md:mt-8'} md:flex`} style={{ opacity: skillsOpacity }}>
                {project.skills.map((s, si) => (
                  <motion.span
                    key={s}
                    className='rounded-full border px-3 py-1 text-xs font-semibold'
                    style={{ borderColor: `${project.color}50`, color: project.color }}
                    initial={{ opacity: 0, scale: 0.88, y: 8 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: si * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {s}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Right: media */}
            <div className={`relative z-10 hidden items-center justify-center ${tightDesktop ? 'p-4 md:p-6 lg:p-8' : 'p-4 md:p-6 lg:p-10'} md:flex ${mediaOrderClass}`}>
              <motion.div className='w-full' style={{ scale: mediaScale, opacity: mediaOpacity }}>
                <ProjectMediaScene project={project} progress={scrollYProgress} />
              </motion.div>
            </div>

          </div>
        </div>
        </div>
      </div>

      <OutcomeStatement outcome={project.outcome} color={project.color} bg={project.tint} />
    </>
  );
};

/* ── Standard project section ── */
const ProjectSection = ({ project, index }) => {
  const sectionRef = useRef(null);
  const isEven = index % 2 === 0;
  const bg = isEven ? '#ffffff' : '#f5f5f7';
  const statementBg = isEven ? '#f5f5f7' : '#ffffff';

  return (
    <>
      <section
        ref={sectionRef}
        className='border-b border-neutral-200'
        style={{ backgroundColor: bg }}
      >
        <div className='grid md:grid-cols-2'>
          {/* Left: scrollable text */}
          <div className='px-6 py-20 md:px-14 md:py-28'>
            <Reveal>
              <div className='mb-10 flex items-center gap-3'>
                <span className='text-[11px] font-bold tabular-nums' style={{ color: project.color }}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className='h-px w-5 opacity-30' style={{ backgroundColor: project.color }} />
                <span className='text-[11px] font-bold uppercase tracking-[0.22em]' style={{ color: project.color }}>
                  {project.category}
                </span>
                <span className='ml-auto text-[11px] font-semibold text-neutral-400'>
                  {project.year}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.04}>
              <h2 className='mb-6 whitespace-pre-line text-[44px] font-bold leading-[0.93] tracking-[-0.055em] text-neutral-950 md:text-[clamp(52px,6.5vw,88px)]'>
                {project.headline}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className='mb-10 text-xl font-medium leading-snug text-neutral-500'>
                {project.subhead}
              </p>
            </Reveal>

            <MobileMedia project={project} />

            <Reveal delay={0.16}>
              <div className='mb-8'>
                <p className='mb-3 text-[10px] font-bold uppercase tracking-[0.26em]' style={{ color: project.color }}>
                  The situation
                </p>
                <p className='text-base font-medium leading-[1.65] text-neutral-600 md:text-lg'>
                  {project.situation}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className='mb-10 border-l-2 pl-5' style={{ borderColor: project.color }}>
                <p className='mb-3 text-[10px] font-bold uppercase tracking-[0.26em]' style={{ color: project.color }}>
                  The result
                </p>
                <p className='text-base font-medium leading-[1.65] text-neutral-600 md:text-lg'>
                  {project.result}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className='flex flex-wrap gap-2'>
                {project.skills.map((s) => (
                  <span
                    key={s}
                    className='rounded-full border px-3 py-1 text-xs font-semibold'
                    style={{ borderColor: `${project.color}50`, color: project.color }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: sticky media */}
          <StickyMedia project={project} sectionRef={sectionRef} />
        </div>
      </section>

      <OutcomeStatement outcome={project.outcome} color={project.color} bg={project.tint} />
    </>
  );
};

/* ── Work section dot nav ── */
const WorkDotNav = () => {
  const [mounted, setMounted] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [visible, setVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const reduced = useReducedMotion();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleScroll = () => {
      const workEl = document.getElementById('work');
      if (!workEl) return;

      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const workTop = workEl.offsetTop;
      const workBottom = workTop + workEl.offsetHeight;

      setVisible(scrollY + vh * 0.3 >= workTop && scrollY < workBottom - vh * 0.1);

      const scrollMid = scrollY + vh * 0.4;
      for (let i = projectData.length - 1; i >= 0; i--) {
        const el = document.getElementById(projectData[i].id);
        if (el && el.offsetTop <= scrollMid) {
          setActiveId(projectData[i].id);
          return;
        }
      }
      setActiveId(null);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: Math.max(el.offsetTop - 72, 0), behavior: 'smooth' });
  };

  if (!mounted) return null;

  return (
    <motion.nav
      aria-label='Jump to project'
      className='fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-[10px] md:flex'
      initial={false}
      animate={reduced ? { opacity: visible ? 1 : 0 } : { opacity: visible ? 1 : 0, x: visible ? 0 : 10 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    >
      {projectData.map((project, i) => {
        const isActive = activeId === project.id;
        const isHovered = hoveredId === project.id;

        return (
          <div
            key={project.id}
            className='relative flex items-center justify-end'
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Tooltip */}
            <motion.span
              className='pointer-events-none absolute right-6 whitespace-nowrap rounded bg-neutral-950/90 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white/80 [backdrop-filter:blur(8px)]'
              initial={false}
              animate={reduced ? { opacity: isHovered ? 1 : 0 } : { opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 4 }}
              transition={{ duration: 0.12 }}
              aria-hidden='true'
            >
              <span className='mr-1.5 opacity-40'>{String(i + 1).padStart(2, '0')}</span>
              {project.headline.split('\n')[0]}
            </motion.span>

            {/* Dot button */}
            <button
              onClick={() => handleClick(project.id)}
              aria-label={`Jump to project ${i + 1}: ${project.headline.replace('\n', ' ')}`}
              className='flex h-5 w-5 cursor-pointer items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AA9F] focus-visible:ring-offset-1'
            >
              <motion.span
                className='block rounded-full'
                initial={false}
                animate={{
                  width: isActive ? 8 : 5,
                  height: isActive ? 8 : 5,
                  backgroundColor: isActive ? project.color : '#d4d4d4',
                  opacity: isActive ? 1 : isHovered ? 0.75 : 0.45,
                }}
                transition={{ duration: reduced ? 0 : 0.18 }}
              />
            </button>
          </div>
        );
      })}
    </motion.nav>
  );
};

export const InlineProjectsSection = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div id='work'>
      {mounted ? (
        <>
          <WorkDotNav />
          {projectData.map((project, index) => (
            <PinnedProjectSection key={project.id} project={project} index={index} />
          ))}
        </>
      ) : (
        /* SSR placeholder — matches each section's bg color to prevent layout shift */
        projectData.map((project) => (
          <div
            key={project.id}
            id={project.id}
            style={{ minHeight: '300vh', backgroundColor: stageThemes[project.id]?.bg ?? '#f5f5f7' }}
          />
        ))
      )}
    </div>
  );
};
