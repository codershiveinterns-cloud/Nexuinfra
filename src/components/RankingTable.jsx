import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { RANKING_TABLE_DATA } from '../data/siteData';

export default function RankingTable() {
  return (
    <div className="ranking-table-wrapper">
      {/* Desktop Table View */}
      <div className="ranking-table-desktop">
        <div className="table-header-row">
          <div>RANK & SOFTWARE</div>
          <div>KEY FEATURES</div>
          <div>EXPERT SCORE</div>
          <div>REVIEWS & COMPARISON</div>
        </div>

        {RANKING_TABLE_DATA.map((item) => (
          <div 
            key={item.rank} 
            className={`ranking-table-row ${item.highlight ? 'highlight-row' : ''}`}
          >
            {/* Rank & Software Logo/Badge */}
            <div className="col-software">
              <div className="rank-badge">#{item.rank}</div>
              <div className="software-logo-box">{item.logo}</div>
              <div className="software-title-area">
                <div className="software-name">{item.name}</div>
                <span className={`badge-tag badge-${item.badgeType}`}>
                  {item.badge}
                </span>
              </div>
            </div>

            {/* Key Features */}
            <div className="col-features">
              <ul className="feature-bullets">
                {item.features.slice(0, 3).map((feat, idx) => (
                  <li key={idx}>
                    <Check size={14} className="check-icon" /> {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Expert Rating Score */}
            <div className="col-rating">
              <div className="score-badge">
                {item.rating}
                <span className="score-max">/10</span>
              </div>
              <div className="stars-row">
                ★★★★★
              </div>
              <span className="breakdown-text">{item.scoreBreakdown}</span>
            </div>

            {/* Action Buttons */}
            <div className="col-actions">
              <Link 
                to={`/reviews/${item.reviewSlug}`}
                className="btn btn-primary btn-sm btn-full"
              >
                Read Review <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Stacked Card View */}
      <div className="ranking-table-mobile">
        {RANKING_TABLE_DATA.map((item) => (
          <div 
            key={item.rank} 
            className={`mobile-rank-card ${item.highlight ? 'highlight-mobile-card' : ''}`}
          >
            <div className="mobile-card-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="mobile-rank-num">#{item.rank}</span>
                <span style={{ fontSize: '1.4rem' }}>{item.logo}</span>
                <div>
                  <h3 className="mobile-software-title">{item.name}</h3>
                  <span className={`badge-tag badge-${item.badgeType}`}>
                    {item.badge}
                  </span>
                </div>
              </div>
              <div className="score-badge-sm">
                {item.rating}
              </div>
            </div>

            <div className="mobile-card-body">
              <ul className="feature-bullets" style={{ marginBottom: '16px' }}>
                {item.features.slice(0, 3).map((feat, idx) => (
                  <li key={idx}>
                    <Check size={14} className="check-icon" /> {feat}
                  </li>
                ))}
              </ul>

              <div className="mobile-card-actions">
                <Link 
                  to={`/reviews/${item.reviewSlug}`}
                  className="btn btn-primary btn-md"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  Read Review <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

