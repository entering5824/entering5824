import MagicBento from './MagicBento';
import type { BentoCardProps } from './MagicBento';

const customCardData: BentoCardProps[] = [
  {
    color: '#161616',
    title: 'NLP Systems',
    description: 'Speech-to-Text, Text normalization, Handling slang & noisy input, Sentence segmentation',
    label: 'NLP'
  },
  {
    color: '#161616',
    title: 'Recommendation & Automation',
    description: 'Tư duy tối ưu quy trình, Ứng dụng AI để giảm thao tác thủ công, Xây dựng tool hỗ trợ công việc lặp lại',
    label: 'Automation'
  },
  {
    color: '#161616',
    title: 'AI-integrated Web Applications',
    description: 'FastAPI, Streamlit, Python backend, React / Vue frontend, Docker deployment',
    label: 'Web Apps'
  }
];

export function WhatIDo() {
  return (
    <section className="section what-i-do" aria-labelledby="what-i-do-heading">
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
      <p className="section__content mt-1">
        Tôi đã từng deploy model lên server, tối ưu để chạy trên tài nguyên hạn chế (free-tier compatible).
        Tôi có kinh nghiệm viết test cơ bản và đóng gói hệ thống bằng Docker.
      </p>
    </section>
  );
}
