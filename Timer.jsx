import { Clock3 } from 'lucide-react';

export default function Timer({ seconds }) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');
  return (
    <div className={`timer ${seconds <= 60 ? 'timer-warning' : ''}`} aria-live="polite">
      <Clock3 size={17} />
      <span className="timer-label">Time left</span>
      <strong>{mins}:{secs}</strong>
    </div>
  );
}
