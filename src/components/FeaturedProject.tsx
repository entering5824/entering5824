export function FeaturedProject() {
  return (
    <section className="section snap-section" aria-labelledby="featured-heading">
      <h2 id="featured-heading" className="section__title">Featured Project</h2>
      <div className="section__content">
        <h3 className="card__title">Vietnamese Speech-to-Text System</h3>
        <p>
          Built with Whisper for a strong accuracy-to-cost tradeoff and practical deployment on limited resources.
          Key engineering challenges I handled:
        </p>
        <ul className="card__list">
          <li>Robust handling for slang and noisy input</li>
          <li>Sentence segmentation and post-processing to reduce transcription drift</li>
          <li>Working within constrained compute environments</li>
          <li>Optimization for free-tier friendly deployment</li>
        </ul>
        <p>
          This was a team project, and I owned most of the processing logic and deployment work.
        </p>
        <p>
          This project demonstrates my ability to take an AI system from idea to a working application.
        </p>
      </div>
    </section>
  );
}
