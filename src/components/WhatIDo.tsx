import MagicBento from './MagicBento';
import type { BentoCardProps } from './MagicBento';

const customCardData: BentoCardProps[] = [
  {
    color: '#161616',
    title: 'NLP Systems',
    description: 'Speech-to-text, text normalization, robust handling for slang/noisy input, sentence segmentation',
    label: 'NLP'
  },
  {
    color: '#161616',
    title: 'Recommendation & Automation',
    description: 'Recommendation pipelines, workflow automation, and tools that reduce repetitive manual work',
    label: 'Applied'
  },
  {
    color: '#161616',
    title: 'AI-integrated Web Applications',
    description: 'FastAPI/Streamlit, Python services, React/Vue UI, Dockerized deployment',
    label: 'Web Apps'
  }
];

export function WhatIDo() {
  return (
    <section className="section what-i-do snap-section" aria-labelledby="what-i-do-heading">
      <h2 id="what-i-do-heading" className="section__title">What I Do</h2>
      <div style={{ marginTop: '1rem' }}>
        <MagicBento
          cards={customCardData}
          textAutoHide={true}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect
          spotlightRadius={400}
          particleCount={12}
          glowColor="229, 160, 13"
          disableAnimations={false}
        />
      </div>
      <ul className="card__list mt-1">
        <li>Build end-to-end ML pipelines (data → training → evaluation → inference)</li>
        <li>Develop AI services with FastAPI and deploy models as APIs</li>
        <li>Design AI applications and demos using Streamlit or web interfaces</li>
        <li>Optimize for limited resources (CPU / free-tier deployment), and package with Docker</li>
      </ul>
    </section>
  );
}
