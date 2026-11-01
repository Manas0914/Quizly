import { BrainCircuit, CircleHelp } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="topbar">
      <Link className="brand" to="/" aria-label="Quizly home">
        <span className="brand-mark"><BrainCircuit size={21} /></span>
        <span>quizly<span className="brand-dot">.</span></span>
      </Link>
      <nav className="nav-links" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <a href="/#about">About</a>
      </nav>
      <div className="topbar-help"><CircleHelp size={17} /><span>Learn as you go</span></div>
    </header>
  );
}
