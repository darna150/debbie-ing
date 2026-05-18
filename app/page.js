'use client';

/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { InlineProjectsSection } from './components/Works/InlineProjectsSection';

/* ─── Services ─── */
const services = [
  {
    name: 'Brand strategy',
    desc: 'Positioning, messaging, and the core idea everything else can follow.',
  },
  {
    name: 'Campaign direction',
    desc: 'Concepts, scripts, visuals, and rollout thinking with one clear point of view.',
  },
  {
    name: 'Content systems',
    desc: 'Editorial plans, formats, and workflows teams can keep using.',
  },
  {
    name: 'Design',
    desc: 'Digital experiences shaped around how people actually move and decide.',
  },
  {
    name: 'Film & broadcast',
    desc: 'Films, AVPs, and live moments with a clear story underneath.',
  },
  {
    name: 'AI generation',
    desc: 'Fast visual exploration, guided by taste, context, and restraint.',
  },
];

/* ─── Reveal ─── */
const Reveal = ({ children, delay = 0, y = 28 }) => {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: reduced ? 0 : 0.8, delay: reduced ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

/* ─── Nav ─── */
const Nav = () => (
  <>
    <a
      href='#main'
      className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-neutral-950 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white'
    >
      Skip to main content
    </a>
    <nav className='fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-3 border-b border-neutral-200/70 bg-white/80 px-4 py-4 backdrop-blur-md sm:px-6 md:px-10'>
      <a href='#' className='shrink-0 text-[13px] font-bold tracking-[-0.02em] text-neutral-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AA9F] focus-visible:ring-offset-2 sm:text-sm'>
        justdebbie.ing
      </a>
      <div className='flex min-w-0 items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-500 sm:gap-7 sm:text-xs sm:tracking-[0.18em]'>
        <a href='#work' className='transition-colors hover:text-neutral-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AA9F] focus-visible:ring-offset-2 rounded-sm'>Work</a>
        <a href='#about' className='transition-colors hover:text-neutral-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AA9F] focus-visible:ring-offset-2 rounded-sm'>About</a>
        <a href='mailto:hol@justdebbie.ing' className='transition-colors hover:text-neutral-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AA9F] focus-visible:ring-offset-2 rounded-sm'>
          Contact
        </a>
      </div>
    </nav>
  </>
);

/* ─── Hero ─── */
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <header
      ref={ref}
      className='relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#f5f5f7] px-6 pb-14 pt-28 md:px-16 md:pb-20 md:pt-36'
    >
      <motion.div style={{ y, opacity }} className='flex flex-col'>
        <Reveal>
          <p className='mb-8 text-xs font-bold uppercase tracking-[0.28em] text-neutral-400'>
            Creative direction — Manila / remote
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className='mb-7 text-[clamp(58px,19vw,76px)] font-bold leading-[0.88] tracking-[-0.075em] text-neutral-950 md:text-[clamp(108px,14vw,196px)]'>
            debbie-ing.
          </h1>
        </Reveal>

        <Reveal delay={0.14}>
          <p className='max-w-[560px] text-lg font-medium leading-snug text-neutral-500 md:text-2xl lg:text-3xl'>
            Creative direction for brands that need less &ldquo;what now?&rdquo; and more &ldquo;watch this.&rdquo;
          </p>
        </Reveal>
      </motion.div>

      {/* Bottom row */}
      <Reveal delay={0.22}>
        <div className='grid gap-6 md:grid-cols-[1fr_400px] md:items-end'>
          <div className='flex flex-wrap gap-2'>
            {[
              'debbie-ing ideas into shape',
              'debbie-ing teams into motion',
              'debbie-ing stories into systems',
              'debbie-ing chaos into something shippable',
            ].map((line) => (
              <span
                key={line}
                className='rounded-full border border-neutral-300 px-3 py-1 text-sm font-medium text-neutral-600 transition-colors hover:border-[#00AA9F] hover:text-[#00AA9F]'
              >
                {line}
              </span>
            ))}
          </div>
          <a
            href='#work'
            aria-label='See the work — scroll to portfolio'
            className='hidden self-end text-right text-sm font-bold uppercase tracking-[0.18em] text-[#00AA9F] transition-opacity hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AA9F] focus-visible:ring-offset-2 rounded-sm md:block'
          >
            See the work ↓
          </a>
        </div>
      </Reveal>
    </header>
  );
};

/* ─── Tagline ─── */
const TaglineSection = () => (
  <section className='border-b border-neutral-200 bg-white px-6 py-28 text-center md:px-16 md:py-44'>
    <div className='mx-auto max-w-[900px]'>
      <Reveal>
        <p className='mb-7 text-xs font-bold uppercase tracking-[0.26em] text-neutral-400'>
          How the work connects
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className='mb-10 text-[clamp(30px,9.5vw,40px)] font-bold leading-[0.95] tracking-[-0.055em] text-neutral-950 md:text-[clamp(56px,8vw,112px)]'>
          Find the idea. Build the system. Make it felt.
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <p className='text-xl font-medium leading-snug text-neutral-500 md:text-2xl'>
          I turn messy ambition into story, structure, and creative direction people can actually use.
        </p>
      </Reveal>
    </div>
  </section>
);

/* ─── Services ─── */
const ServicesSection = () => (
  <section className='border-b border-neutral-200 bg-[#f5f5f7] px-5 py-20 sm:px-6 md:px-16 md:py-36'>
    <div className='mx-auto max-w-[1100px]'>
      <Reveal>
        <p className='mb-10 text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-400 sm:text-xs sm:tracking-[0.26em] md:mb-14'>
          The work, practically
        </p>
      </Reveal>
      <div className='grid gap-px bg-neutral-200 border border-neutral-200 md:grid-cols-2 lg:grid-cols-3'>
        {services.map((s, i) => (
          <motion.div
            key={s.name}
            className='bg-[#f5f5f7] px-6 py-8 sm:px-8 sm:py-10'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-6%' }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className='mb-1 text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-400'>
              {String(i + 1).padStart(2, '0')}
            </p>
            <p className='mb-3 text-lg font-bold text-neutral-950'>{s.name}</p>
            <p className='text-sm font-medium leading-[1.65] text-neutral-500'>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── About ─── */
const AboutSection = () => (
  <section
    id='about'
    className='border-b border-neutral-200 bg-white px-6 py-20 md:px-16 md:py-36'
  >
    <div className='mx-auto grid max-w-[1100px] items-start gap-14 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]'>

      {/* Portrait placeholder */}
      <Reveal>
        <img
          src='/debbie/debbie_blink.gif'
          alt='Debbie Melgarejo, creative director'
          className='mx-auto w-full max-w-[260px] md:max-w-none'
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </Reveal>

      <div>
        <Reveal>
          <p className='mb-5 text-xs font-bold uppercase tracking-[0.24em] text-neutral-400'>
            Origin story
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className='mb-10 text-[clamp(30px,9.5vw,40px)] font-bold leading-[0.95] tracking-[-0.05em] text-neutral-950 md:text-[clamp(48px,5.5vw,80px)]'>
            Creative direction for the messy middle.
          </h2>
        </Reveal>
        <div className='grid gap-7 text-lg font-medium leading-[1.5] text-neutral-500 sm:text-xl sm:leading-[1.45] md:grid-cols-2'>
          <Reveal delay={0.1}>
            <p>
              I work where strategy, content, film, design, and production start overlapping. That is usually where the interesting problems are.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p>
              My job is to find the throughline, sharpen the story, and turn it into work that can ship without losing the idea.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Footer ─── */
const Footer = () => (
  <footer id='contact' className='bg-neutral-950 px-6 pb-14 pt-20 text-white md:px-16 md:pt-36'>
    <div className='mx-auto max-w-[1100px]'>
      <Reveal>
        <p className='mb-5 text-xs font-bold uppercase tracking-[0.26em] text-white/35'>
          Contact
        </p>
      </Reveal>
      <Reveal delay={0.06}>
        <p className='mb-16 max-w-[400px] text-lg font-medium leading-snug text-white/40'>
          Have a project with too many moving parts? Good. That&apos;s the fun part.
        </p>
      </Reveal>

      <div className='border-t border-white/10 pt-14'>
        <Reveal delay={0.1}>
          <h2 className='mb-10 text-[clamp(36px,11vw,52px)] font-bold leading-[0.9] tracking-[-0.06em] md:text-[clamp(72px,11vw,160px)]'>
            Tell me<br />what you&apos;re making.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <a
            href='mailto:hol@justdebbie.ing'
            className='inline-block break-all text-2xl font-bold text-[#00AA9F] transition-colors hover:text-white md:text-4xl'
          >
            hol@justdebbie.ing
          </a>
        </Reveal>

        <div className='mt-14 flex flex-col justify-between gap-5 border-t border-white/8 pt-8 md:mt-16 md:flex-row md:items-center'>
          <div className='flex flex-wrap gap-x-8 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/25 sm:text-xs'>
            <p>Manila / remote</p>
            <p>Strategy / content / film / digital</p>
          </div>
          <p className='text-xs font-semibold text-white/20'>
            © {new Date().getFullYear()} justdebbie.ing
          </p>
        </div>
      </div>
    </div>
  </footer>
);

/* ─── Page ─── */
export default function Home() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);

      if (!id) {
        return;
      }

      const target = document.getElementById(id);

      if (!target) {
        return;
      }

      window.requestAnimationFrame(() => {
        window.scrollTo({
          top: Math.max(target.offsetTop - 52, 0),
          behavior: 'smooth',
        });
      });
    };

    const timeout = window.setTimeout(scrollToHash, 0);

    window.addEventListener('hashchange', scrollToHash);

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, []);

  return (
    <>
      <Nav />
      <main id='main'>
        <Hero />
        <TaglineSection />
        <InlineProjectsSection />
        <ServicesSection />
        <AboutSection />
        <Footer />
      </main>
    </>
  );
}
