import { ArrowRight, Award, BookOpenCheck, CheckCircle2, Clock3, Layers3, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const topics = [
  { icon: <Layers3 size={19} />, title: 'React & Hooks', detail: 'Core React concepts', color: 'purple' },
  { icon: <BookOpenCheck size={19} />, title: 'JavaScript', detail: 'Language essentials', color: 'blue' },
  { icon: <CheckCircle2 size={19} />, title: 'Web Basics', detail: 'HTML, CSS & HTTP', color: 'green' }
];

export default function Home() {
  return (
    <main className="page-shell home-page">
      <section className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15} /> LEARN. PRACTICE. IMPROVE.</div>
          <h1>Your next big idea<br />starts with a <span>quiz.</span></h1>
          <p className="hero-description">Challenge yourself, test what you know, and turn small wins into real progress.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/quiz">Start the quiz <ArrowRight size={18} /></Link>
            <a className="button button-quiet" href="#how-it-works">How it works</a>
          </div>
          <div className="social-proof"><div className="avatar-stack"><span>M</span><span>A</span><span>S</span><span>+</span></div><div><strong>One step at a time</strong><small>Practice makes progress</small></div></div>
        </div>
        <div className="hero-art" aria-label="Quiz progress illustration">
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
          <div className="floating-chip chip-top"><Sparkles size={16} /> Keep growing</div>
          <div className="floating-chip chip-bottom"><Award size={17} /> Every answer counts</div>
          <div className="quiz-preview-card">
            <div className="preview-top"><span className="mini-icon"><BookOpenCheck size={18} /></span><span className="preview-tag">QUICK CHALLENGE</span><span className="live-dot"></span></div>
            <div className="preview-line short"></div><div className="preview-line long"></div>
            <div className="preview-question">What helps you build a skill?</div>
            <div className="preview-option selected"><span className="option-letter">A</span> Consistent practice <CheckCircle2 size={17} /></div>
            <div className="preview-option"><span className="option-letter">B</span> Waiting for the right time</div>
            <div className="preview-option"><span className="option-letter">C</span> Avoiding challenges</div>
            <div className="preview-progress"><span></span></div><div className="preview-footer"><span>QUESTION 03 OF 10</span><span>30%</span></div>
          </div>
          <div className="score-bubble"><span className="score-bubble-icon"><Award size={18} /></span><span><strong>You're improving!</strong><small>One question at a time</small></span></div>
        </div>
      </section>

      <section className="stats-row" aria-label="Quiz details">
        <div className="stat-item"><span className="stat-icon purple"><BookOpenCheck size={20} /></span><span><strong>10 questions</strong><small>Multiple choice</small></span></div>
        <div className="stat-item"><span className="stat-icon blue"><Clock3 size={20} /></span><span><strong>10 minutes</strong><small>Beat the clock</small></span></div>
        <div className="stat-item"><span className="stat-icon green"><Award size={20} /></span><span><strong>Instant results</strong><small>Review your answers</small></span></div>
      </section>

      <section className="topics-section" id="how-it-works">
        <div className="section-heading"><div><span className="section-kicker">YOUR LEARNING JOURNEY</span><h2>Small quiz. Big progress.</h2></div><p>Three topic areas, one quick challenge.<br />See what you know and what to learn next.</p></div>
        <div className="topic-grid">{topics.map((topic) => <article className="topic-card" key={topic.title}><span className={`topic-icon ${topic.color}`}>{topic.icon}</span><div><h3>{topic.title}</h3><p>{topic.detail}</p></div><ArrowRight className="topic-arrow" size={18} /></article>)}</div>
      </section>
      <section className="bottom-cta" id="about"><div><span className="section-kicker">READY WHEN YOU ARE</span><h2>Let's see what you know.</h2><p>No pressure. Just progress.</p></div><Link className="button button-primary" to="/quiz">Take the challenge <ArrowRight size={18} /></Link></section>
      <footer className="footer"><span>© 2026 Quizly</span><span>Built for curious minds <span className="footer-heart">♥</span></span></footer>
    </main>
  );
}
