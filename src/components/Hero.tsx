import ShinyText from './ShinyText';

export function Hero() {
  return (
    <header className="hero">
      <h1 className="hero__name">
        <ShinyText
          text="PHẠM NGUYỄN MINH TÚ"
          speed={2}
          delay={0}
          color="#e8e6e3"
          shineColor="#e5a00d"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
        />
      </h1>
      <p className="hero__role">AI Application Developer — NLP, Recommendation &amp; Automation</p>
      <p className="hero__tagline">"Building practical AI systems that work in real environments."</p>
    </header>
  );
}
