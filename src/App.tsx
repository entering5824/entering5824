import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhatIDo } from './components/WhatIDo';
import { FeaturedProject } from './components/FeaturedProject';
import { Experience } from './components/Experience';
import { LessonsLearned } from './components/LessonsLearned';
import { Philosophy } from './components/Philosophy';
import { PersonalEdge } from './components/PersonalEdge';
import { Contact } from './components/Contact';
import GradualBlur from './components/GradualBlur';
import SplashCursor from './components/SplashCursor';
import './index.css';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const SCROLL_DURATION_MS = 720;
const WHEEL_THRESHOLD = 5;
const SCROLL_LOCK_MS = 720;

function App() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const scrollLockRef = useRef(false);
  const scrollAnimRef = useRef<number | null>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  const prefersReducedMotion = useCallback(
    () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
    []
  );

  const easeInOutCubic = useCallback(
    (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
    []
  );

  const clamp = useCallback((n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n)), []);

  const animateScrollTop = useCallback(
    (el: HTMLElement, to: number, durationMs: number) => {
      if (scrollAnimRef.current != null) {
        cancelAnimationFrame(scrollAnimRef.current);
        scrollAnimRef.current = null;
      }

      const from = el.scrollTop;
      const delta = to - from;
      if (Math.abs(delta) < 1) return;

      if (prefersReducedMotion()) {
        el.classList.remove('is-animating');
        el.scrollTop = to;
        return;
      }

      el.classList.add('is-animating');
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / durationMs);
        el.scrollTop = from + delta * easeInOutCubic(t);
        if (t < 1) {
          scrollAnimRef.current = requestAnimationFrame(tick);
        } else {
          scrollAnimRef.current = null;
          el.classList.remove('is-animating');
        }
      };
      scrollAnimRef.current = requestAnimationFrame(tick);
    },
    [easeInOutCubic, prefersReducedMotion]
  );

  const getClosestSectionIndex = useCallback(() => {
    const scroller = scrollerRef.current;
    const sections = sectionsRef.current;
    if (!scroller || sections.length === 0) return 0;

    const top = scroller.scrollTop;
    let currentIndex = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    for (let i = 0; i < sections.length; i++) {
      const dist = Math.abs(sections[i].offsetTop - top);
      if (dist < bestDist) {
        bestDist = dist;
        currentIndex = i;
      }
    }
    return currentIndex;
  }, []);

  const scrollToSection = useCallback(
    (direction: -1 | 1) => {
      const scroller = scrollerRef.current;
      const sections = sectionsRef.current;
      if (!scroller || sections.length === 0) return;

      const currentIndex = getClosestSectionIndex();
      const nextIndex = clamp(currentIndex + direction, 0, sections.length - 1);
      if (nextIndex === currentIndex) return;

      animateScrollTop(scroller, sections[nextIndex].offsetTop, SCROLL_DURATION_MS);
    },
    [animateScrollTop, clamp, getClosestSectionIndex]
  );

  const scrollToIndex = useCallback(
    (index: number) => {
      const scroller = scrollerRef.current;
      const sections = sectionsRef.current;
      if (!scroller || sections.length === 0) return;

      const nextIndex = clamp(index, 0, sections.length - 1);
      animateScrollTop(scroller, sections[nextIndex].offsetTop, SCROLL_DURATION_MS);
    },
    [animateScrollTop, clamp]
  );

  const sectionLabels = useMemo(
    () => ['Hero', 'About', 'What I Do', 'Featured', 'Experience', 'Lessons', 'Philosophy', 'Edge', 'Contact'],
    []
  );

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    sectionsRef.current = Array.from(scroller.querySelectorAll<HTMLElement>('.snap-section'));
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const lock = (ms: number) => {
      scrollLockRef.current = true;
      window.setTimeout(() => {
        scrollLockRef.current = false;
      }, ms);
    };

    const onWheel = (e: WheelEvent) => {
      if (scrollLockRef.current) return;
      const delta = Math.abs(e.deltaY);
      if (delta < WHEEL_THRESHOLD) return;
      e.preventDefault();
      lock(SCROLL_LOCK_MS);
      scrollToSection(e.deltaY > 0 ? 1 : -1);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (scrollLockRef.current) return;
      if (e.defaultPrevented) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      const tag = target?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select' || target?.isContentEditable) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        lock(SCROLL_LOCK_MS);
        scrollToSection(1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        lock(SCROLL_LOCK_MS);
        scrollToSection(-1);
      }
    };

    const onScroll = () => {
      const next = getClosestSectionIndex();
      setActiveSectionIndex(next);
    };

    scroller.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    scroller.addEventListener('scroll', onScroll, { passive: true });

    // Initialize indicator on mount.
    onScroll();

    return () => {
      scroller.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      scroller.removeEventListener('scroll', onScroll);
    };
  }, [getClosestSectionIndex, scrollToSection]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    return () => {
      if (scrollAnimRef.current != null) {
        cancelAnimationFrame(scrollAnimRef.current);
        scrollAnimRef.current = null;
      }
      scroller?.classList.remove('is-animating');
    };
  }, []);

  return (
    <>
      <SplashCursor />
      <main className="page">
        <nav className="section-indicator" aria-label="Section progress">
          {sectionLabels.map((label, idx) => (
            <button
              key={label}
              type="button"
              className={`section-indicator__item ${idx === activeSectionIndex ? 'is-active' : ''}`}
              onClick={() => scrollToIndex(idx)}
              aria-current={idx === activeSectionIndex ? 'true' : undefined}
              aria-label={`Go to ${label}`}
            >
              <span className="section-indicator__dot" aria-hidden="true" />
              <span className="section-indicator__label">{label}</span>
            </button>
          ))}
        </nav>
        <div ref={scrollerRef} className="page__scroller" aria-label="Sections" tabIndex={0}>
          <Hero />
          <About />
          <WhatIDo />
          <FeaturedProject />
          <Experience />
          <LessonsLearned />
          <Philosophy />
          <PersonalEdge />
          <Contact />
        </div>
        <GradualBlur
          target="parent"
          position="bottom"
          height="7rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential
          opacity={1}
        />
      </main>
    </>
  );
}

export default App;
