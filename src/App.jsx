import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SpeedCheckModal from './components/SpeedCheckModal';
import Home from './pages/Home';
import ArticleView from './pages/ArticleView';
import CategoryView from './pages/CategoryView';
import LegalPage from './pages/LegalPage';
import About from './pages/About';

// Auto-scroll to top on navigation change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [speedCheckOpen, setSpeedCheckOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar onOpenSpeedCheck={() => setSpeedCheckOpen(true)} />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home onOpenSpeedCheck={() => setSpeedCheckOpen(true)} />} />
            
            {/* Reviews Category & Articles */}
            <Route path="/reviews" element={<CategoryView category="reviews" />} />
            <Route path="/reviews/:slug" element={<ArticleView />} />

            {/* Blog Category & Articles */}
            <Route path="/blog" element={<CategoryView category="blog" />} />
            <Route path="/blog/:slug" element={<ArticleView />} />

            {/* Common Problems Category & Articles */}
            <Route path="/problems" element={<CategoryView category="problems" />} />
            <Route path="/problems/:slug" element={<ArticleView />} />

            {/* How-To Guides Category & Articles */}
            <Route path="/guides" element={<CategoryView category="guides" />} />
            <Route path="/guides/:slug" element={<ArticleView />} />

            {/* Blogs Category & Articles */}
            <Route path="/blogs" element={<CategoryView category="blogs" />} />
            <Route path="/blogs/:slug" element={<ArticleView />} />

            {/* Trust & Legal Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/affiliate-disclosure" element={<LegalPage />} />
            <Route path="/privacy-policy" element={<LegalPage />} />
            <Route path="/terms" element={<LegalPage />} />
            <Route path="/contact" element={<LegalPage />} />

            {/* Fallback */}
            <Route path="*" element={<Home onOpenSpeedCheck={() => setSpeedCheckOpen(true)} />} />
          </Routes>
        </div>

        <Footer />

        {/* Speed Check Modal */}
        <SpeedCheckModal 
          isOpen={speedCheckOpen} 
          onClose={() => setSpeedCheckOpen(false)} 
        />
      </div>
    </Router>
  );
}
