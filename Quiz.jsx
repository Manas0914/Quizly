import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Flag, Lightbulb, Send } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { questions } from '../data/questions.js';
import Timer from '../components/Timer.jsx';

const QUIZ_DURATION = 10 * 60;

export default function Quiz() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [secondsLeft, setSecondsLeft] = useState(QUIZ_DURATION);
  const [showSubmit, setShowSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const current = questions[currentIndex];
  const selectedAnswer = answers[current.id];
  const answeredCount = Object.keys(answers).length;

  useEffect(() => {
    if (submitted) return undefined;
    const timerId = window.setInterval(() => {
      setSecondsLeft((remaining) => {
        if (remaining <= 1) {
          window.clearInterval(timerId);
          setSubmitted(true);
          return 0;
        }
        return remaining - 1;
      });
    }, 1000);
    return () => window.clearInterval(timerId);
  }, [submitted]);

  useEffect(() => {
    if (!submitted) return;
    const correct = questions.filter((question) => answers[question.id] === question.answer).length;
    navigate('/result', { replace: true, state: { answers, score: correct, total: questions.length, timeUsed: QUIZ_DURATION - secondsLeft, timedOut: secondsLeft === 0 } });
  }, [submitted, answers, navigate, secondsLeft]);

  function chooseAnswer(optionIndex) {
    setAnswers((previous) => ({ ...previous, [current.id]: optionIndex }));
  }

  function submitQuiz() {
    setShowSubmit(false);
    setSubmitted(true);
  }

  return (
    <main className="page-shell quiz-page">
      <div className="quiz-topline"><Link to="/" className="back-link"><ArrowLeft size={17} /> Exit quiz</Link><Timer seconds={secondsLeft} /></div>
      <div className="quiz-heading"><div><span className="section-kicker">QUICK CHALLENGE</span><h1>Test your knowledge<span>.</span></h1><p>Take your time, trust what you know, and do your best.</p></div><div className="quiz-count"><strong>{String(currentIndex + 1).padStart(2, '0')}</strong><span>/ {String(questions.length).padStart(2, '0')}</span></div></div>
      <div className="quiz-progress-meta"><span>YOUR PROGRESS</span><strong>{Math.round(((currentIndex + 1) / questions.length) * 100)}%</strong></div>
      <div className="progress-track"><span style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} /></div>
      <div className="quiz-layout">
        <section className="question-panel">
          <div className="question-meta"><span className="question-number">QUESTION {String(currentIndex + 1).padStart(2, '0')}</span><span className="category-pill">{current.category}</span></div>
          <h2>{current.question}</h2>
          <p className="select-hint">Choose one answer below.</p>
          <div className="answer-list">{current.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            return <button type="button" className={`answer-option ${isSelected ? 'answer-selected' : ''}`} key={option} onClick={() => chooseAnswer(index)} aria-pressed={isSelected}><span className="answer-letter">{String.fromCharCode(65 + index)}</span><span className="answer-text">{option}</span><span className="answer-check">{isSelected && <Check size={17} />}</span></button>;
          })}</div>
          <div className="question-footer"><span><Lightbulb size={16} /> Your answer is saved automatically.</span><span>{selectedAnswer !== undefined ? 'Answer selected' : 'Not answered yet'}</span></div>
          <div className="quiz-navigation"><button className="button button-quiet nav-button" onClick={() => setCurrentIndex((index) => Math.max(0, index - 1))} disabled={currentIndex === 0}><ArrowLeft size={17} /> Previous</button>{currentIndex < questions.length - 1 ? <button className="button button-primary nav-button" onClick={() => setCurrentIndex((index) => Math.min(questions.length - 1, index + 1))}>Next question <ArrowRight size={17} /></button> : <button className="button button-primary nav-button" onClick={() => setShowSubmit(true)}><Flag size={17} /> Finish quiz</button>}</div>
        </section>
        <aside className="question-sidebar"><div className="sidebar-card"><div className="sidebar-title"><h3>Question map</h3><span>{answeredCount}/{questions.length}</span></div><p>Jump to any question.</p><div className="question-map">{questions.map((question, index) => <button key={question.id} className={`map-number ${index === currentIndex ? 'map-current' : ''} ${answers[question.id] !== undefined ? 'map-answered' : ''}`} onClick={() => setCurrentIndex(index)} aria-label={`Go to question ${index + 1}`} aria-current={index === currentIndex ? 'step' : undefined}>{index + 1}</button>)}</div><div className="map-legend"><span><i className="legend-dot legend-current" /> Current</span><span><i className="legend-dot legend-answered" /> Answered</span><span><i className="legend-dot legend-empty" /> Unanswered</span></div></div><div className="sidebar-tip"><span className="tip-icon"><Lightbulb size={18} /></span><div><strong>Quick tip</strong><p>You can return to any question before submitting your quiz.</p></div></div></aside>
      </div>
      {showSubmit && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setShowSubmit(false); }}><section className="confirm-modal" role="dialog" aria-modal="true" aria-labelledby="submit-title"><span className="modal-icon"><Send size={23} /></span><h2 id="submit-title">Submit your quiz?</h2><p>You have answered {answeredCount} out of {questions.length} questions. Unanswered questions will be marked incorrect.</p><div className="modal-actions"><button className="button button-quiet" onClick={() => setShowSubmit(false)}>Keep reviewing</button><button className="button button-primary" onClick={submitQuiz}>Submit quiz <ArrowRight size={17} /></button></div></section></div>}
    </main>
  );
}
