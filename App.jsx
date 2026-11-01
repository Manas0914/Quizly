import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Quiz from './pages/Quiz.jsx';
import Result from './pages/Result.jsx';

export default function App() {
  return <><Navbar /><Routes><Route path="/" element={<Home />} /><Route path="/quiz" element={<Quiz />} /><Route path="/result" element={<Result />} /><Route path="*" element={<Home />} /></Routes></>;
}
