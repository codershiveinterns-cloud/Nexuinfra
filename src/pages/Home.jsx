import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  ShieldCheck, 
  Download, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  ExternalLink,
  Layers,
  AlertTriangle,
  BookOpen
} from 'lucide-react';
import { AFFILIATE_CONFIG } from '../config/affiliate';
import { ALL_ARTICLES, CATEGORIES } from '../data/siteData';
import RankingTable from '../components/RankingTable';
import InteractiveFinder from '../components/InteractiveFinder';
import RecommendationQuiz from '../components/RecommendationQuiz';

export default function Home({ onOpenSpeedCheck }) {
  const featuredArticles = ALL_ARTICLES.slice(0, 3);
  const reviewArticles = ALL_ARTICLES.filter(a => a.category === 'reviews').slice(0, 3);
  const blogArticles = ALL_ARTICLES.filter(a => a.category === 'blog').slice(0, 3);
  const problemArticles = ALL_ARTICLES.filter(a => a.category === 'problems').slice(0, 3);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero-section text-center">
        <div className="container">
          <div className="hero-badge mx-auto">
            <ShieldCheck size={16} /> Verified 2026 Infrastructure Guide
          </div>
          
          <h1 className="hero-title mx-auto">
            Find the Right Infrastructure for Your Business
          </h1>

          <p className="hero-subtitle mx-auto">
            Compare hosting, cloud platforms, VPS, security tools and other online infrastructure services — based on pricing, performance, features and real-world use cases.
          </p>

          <div className="hero-actions mx-auto" style={{ justifyContent: 'center' }}>
            <Link 
              to="/reviews" 
              className="btn btn-warning btn-lg"
            >
              <Layers size={18} /> Compare Hosting <ArrowRight size={16} />
            </Link>
            <Link 
              to="/blog" 
              className="btn btn-outline btn-lg"
            >
              <Zap size={18} /> Explore Cloud <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon"><CheckCircle size={22} /></div>
              <div>
                <div className="trust-title">Independent comparisons</div>
                <div className="trust-desc">Unbiased benchmarks & analysis</div>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon"><Award size={22} /></div>
              <div>
                <div className="trust-title">Updated pricing</div>
                <div className="trust-desc">Real-time costs & plans</div>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon"><BookOpen size={22} /></div>
              <div>
                <div className="trust-title">Expert research</div>
                <div className="trust-desc">In-depth performance testing</div>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon"><ShieldCheck size={22} /></div>
              <div>
                <div className="trust-title">Affiliate disclosure</div>
                <div className="trust-desc">100% transparent & honest</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE RECOMMENDATION FINDER */}
      <InteractiveFinder />

      {/* 60-SECOND RECOMMENDATION QUIZ */}
      <RecommendationQuiz />

      {/* RANKING TABLE SECTION */}
      <section className="ranking-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">2026 BENCHMARK RANKING</span>
            <h2 className="section-title">Top PC Cleaner Software 2026</h2>
            <p className="section-subtitle">
              We benchmarked scan speed, disk space reclaimed, and RAM footprint across 12 optimization utilities.
            </p>
          </div>

          <RankingTable />
        </div>
      </section>

      {/* FEATURED ARTICLES ROW */}
      <section style={{ padding: '40px 0 60px', backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <div className="section-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="section-tag">FEATURED GUIDES</span>
              <h2 className="section-title">Popular PC Speed Optimization Guides</h2>
            </div>
            <Link to="/blog" className="btn btn-outline btn-sm">
              View All Guides <ArrowRight size={14} />
            </Link>
          </div>

          <div className="cards-grid">
            {featuredArticles.map((art) => (
              <article key={art.id} className="article-card">
                <div>
                  <span className="card-category">{art.categoryLabel}</span>
                  <h3 className="card-title">
                    <Link to={`/${art.category}/${art.slug}`}>{art.title}</Link>
                  </h3>
                  <p className="card-excerpt">{art.excerpt}</p>
                </div>
                <div className="card-meta">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={14} /> {art.readTime}
                  </span>
                  <span>{art.updatedDate}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY EXPLORER GRID */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">EXPLORE BY CATEGORY</span>
            <h2 className="section-title">Solve Windows Problems & Optimize Speed</h2>
            <p className="section-subtitle">Find exact step-by-step solutions tailored for your Windows system.</p>
          </div>

          <div className="cards-grid">
            {/* Reviews Category Card */}
            <div className="article-card" style={{ borderTop: '4px solid var(--color-accent)' }}>
              <div>
                <div style={{ color: 'var(--color-accent-light)', marginBottom: '12px' }}><Layers size={32} /></div>
                <h3 className="card-title"><Link to="/reviews">Software Reviews</Link></h3>
                <p className="card-excerpt">{CATEGORIES.reviews.description}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', marginBottom: '20px' }}>
                  {reviewArticles.map((a) => (
                    <li key={a.id}>
                      <Link to={`/reviews/${a.slug}`} style={{ color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <ArrowRight size={12} color="var(--color-accent-light)" /> {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/reviews" className="btn btn-outline btn-sm">Explore Reviews →</Link>
            </div>

            {/* Fix Slow PC Blog Category Card */}
            <div className="article-card" style={{ borderTop: '4px solid #eab308' }}>
              <div>
                <div style={{ color: '#eab308', marginBottom: '12px' }}><Zap size={32} /></div>
                <h3 className="card-title"><Link to="/blog">Fix Slow PC</Link></h3>
                <p className="card-excerpt">{CATEGORIES.blog.description}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', marginBottom: '20px' }}>
                  {blogArticles.map((a) => (
                    <li key={a.id}>
                      <Link to={`/blog/${a.slug}`} style={{ color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <ArrowRight size={12} color="#eab308" /> {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/blog" className="btn btn-outline btn-sm">Read Blog Articles →</Link>
            </div>

            {/* Common PC Problems Category Card */}
            <div className="article-card" style={{ borderTop: '4px solid #ef4444' }}>
              <div>
                <div style={{ color: '#ef4444', marginBottom: '12px' }}><AlertTriangle size={32} /></div>
                <h3 className="card-title"><Link to="/problems">Common PC Problems</Link></h3>
                <p className="card-excerpt">{CATEGORIES.problems.description}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', marginBottom: '20px' }}>
                  {problemArticles.map((a) => (
                    <li key={a.id}>
                      <Link to={`/problems/${a.slug}`} style={{ color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <ArrowRight size={12} color="#ef4444" /> {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/problems" className="btn btn-outline btn-sm">Troubleshoot PC Problems →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
