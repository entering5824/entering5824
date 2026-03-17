export function LessonsLearned() {
  return (
    <section className="section snap-section" aria-labelledby="lessons-heading">
      <h2 id="lessons-heading" className="section__title">Lessons Learned</h2>
      <div className="section__content">
        <p>
          I once built a digit recognition system without researching existing solutions.
          That experience taught me an important lesson:
        </p>
        <div className="highlight-box">
          <p>
            Engineering is not only about building systems, but also about choosing the right problems to solve.
          </p>
        </div>
      </div>
    </section>
  );
}
