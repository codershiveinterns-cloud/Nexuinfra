import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';

export default function WiseCleanerCTA({ title, description }) {
  const defaultTitle = "Wise Care 365 Benchmarks & Detailed Review";
  const defaultDesc = "Read our expert review of Wise Care 365 to learn how it clears temporary cache, repairs registry entries, optimizes RAM, and speeds up boot times.";

  return (
    <div className="wisecleaner-cta-card">
      <div className="cta-header-tag">
        <ShieldCheck size={18} color="#38bdf8" />
        <span>EDITOR'S CHOICE #1 RECOMMENDED PC SOLUTION</span>
      </div>

      <div className="cta-main-grid">
        <div className="cta-info">
          <h3 className="cta-title">{title || defaultTitle}</h3>
          <p className="cta-description">{description || defaultDesc}</p>
          
          <div className="cta-trust-chips">
            <span className="trust-chip"><CheckCircle size={14} color="#38bdf8" /> Verified Independent Benchmark</span>
            <span className="trust-chip"><CheckCircle size={14} color="#38bdf8" /> Windows 11 / 10 / 8 / 7</span>
            <span className="trust-chip"><CheckCircle size={14} color="#38bdf8" /> In-Depth Feature Comparison</span>
          </div>
        </div>

        <div className="cta-button-box">
          <Link 
            to="/reviews/wise-care-365-review"
            className="btn btn-primary btn-lg"
            style={{ width: '100%', justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <BookOpen size={20} /> Read Full Software Review <ArrowRight size={16} />
          </Link>
          <span className="cta-guarantee-text">
            📋 100% Unbiased Software Testing & Analysis
          </span>
        </div>
      </div>
    </div>
  );
}

