import { useMemo } from 'react';
import { ArrowLeft, ArrowRight, Award, CheckCircle2, CircleX, Clock3, RotateCcw, Sparkles, Target } from 'lucide-react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { questions } from '../data/questions.js';

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}m ${String(seconds).padStart(2, '0')}s`;
}

export default function Result() {
  const { state } = useLocation();
  const result = useMemo(() => {
    if (!state) return null;
    const correct = questions.filter((question) => state.answers?.[question.id] === question.answer).length;
    return { ...state, score: correct, total: questions.length, percentage: Math.round((correct / questions.length) * 100) };
  }, [state]);

  if (!result) return <Navigate to="/" replace />;
  const message = result.percentage >= 80 ? ['Excellent work!', 'You have a strong grasp of these topics. Keep that momentum going.'] : result.percentage >= 50 ? ['Good progress!', 'You have a solid start. Review the explanations and keep practising.'] : ['Every attempt teaches you something.', 'Review the answers below, revisit the concepts, and give it another try.'];
  const circumference = 2 * Math.PI * 48;

  return (
    <main className="page-shell result-page">
      <Link to="/" className="back-link result-back"><ArrowLeft size={17} /> Back to home</Link>
      <section className="result-hero"><div className="result-sparkle"><Sparkles size={18} /></div><span className="section-kicker">QUIZ COMPLETED</span><h1>{message[0]}</h1><p>{result.timedOut ? 'Time ran out, so your quiz was submitted automatically.' : message[1]}</p>
        <div className="score-ring" aria-label={`Score ${result.score} out of ${result.total}`}><svg viewBox="0 0 112 112" aria-hidden="true"><circle className="ring-track" cx="56" cy="56" r="48" /><circle className="ring-value" cx="56" cy="56" r="48" strokeDasharray={circumference} strokeDashoffset={circumference * (1 - result.percentage / 100)} /></svg><div className="ring-label"><strong>{result.percentage}%</strong><span>YOUR SCORE</span></div></div>
        <div className="result-score-line"><strong>{result.score}</strong><span>out of {result.total} correct</span></div>
      </section>
      <section className="result-stats"><div className="result-stat"><span className="result-stat-icon correct-icon"><CheckCircle2 size={20} /></span><div><strong>{result.score}</strong><span>Correct answers</span></div></div><div className="result-stat"><span className="result-stat-icon wrong-icon"><CircleX size={20} /></span><div><strong>{result.total - result.score}</strong><span>Incorrect / skipped</span></div></div><div className="result-stat"><span className="result-stat-icon time-icon"><Clock3 size={20} /></span><div><strong>{formatTime(result.timeUsed ?? 0)}</strong><span>Time used</span></div></div><div className="result-stat"><span className="result-stat-icon target-icon"><Target size={20} /></span><div><strong>{result.percentage >= 80 ? 'Great' : result.percentage >= 50 ? 'Good' : 'Keep going'}</strong><span>Performance</span></div></div></section>
      <section className="review-section"><div className="section-heading review-heading"><div><span className="section-kicker">LEARN FROM EVERY ANSWER</span><h2>Answer review</h2></div><span className="review-count">{questions.length} questions</span></div><div className="review-list">{questions.map((question, index) => { const chosen = result.answers?.[question.id]; const correct = chosen === question.answer; return <article className="review-card" key={question.id}><div className={`review-status ${correct ? 'review-correct' : 'review-wrong'}`}>{correct ? <CheckCircle2 size={18} /> : <CircleX size={18} />}</div><div className="review-content"><div className="review-topline"><span>QUESTION {String(index + 1).padStart(2, '0')}</span><span className={`review-badge ${correct ? 'badge-correct' : 'badge-wrong'}`}>{correct ? 'Correct' : 'Review this'}</span></div><h3>{question.question}</h3><p className="review-answer"><span>Your answer:</span> {chosen === undefined ? 'Not answered' : question.options[chosen]}</p>{!correct && <p className="correct-answer"><span>Correct answer:</span> {question.options[question.answer]}</p>}<p className="review-explanation">{question.explanation}</p></div></article>; })}</div></section>
      <section className="result-cta"><span className="result-cta-icon"><Award size={22} /></span><div><h2>Ready for another round?</h2><p>Each attempt is a chance to learn something new.</p></div><Link className="button button-primary" to="/quiz" onClick={() => window.scrollTo(0, 0)}>Try again <RotateCcw size={17} /></Link></section>
      <footer className="footer"><span>© 2026 Quizly</span><Link to="/" className="footer-home">Return home <ArrowRight size={14} /></Link></footer>
    </main>
  );
}
