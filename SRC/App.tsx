import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import CompactAudioPlayer from './components/CompactAudioPlayer';
import HomePage from './pages/HomePage';
import TrackerPage from './pages/TrackerPage';
import BookPage from './pages/BookPage';
import GratitudePage from './pages/GratitudePage';
import AboutPage from './pages/AboutPage';
import SupportPage from './pages/SupportPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-background-light to-background-warm flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-gold text-white px-4 py-2 rounded z-50 focus:outline-none focus:ring-4 focus:ring-focus-ring"
        >
          Skip to main content
        </a>

        <Header />
        <CompactAudioPlayer />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tracker" element={<TrackerPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/gratitude" element={<GratitudePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>

        <Footer />
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
