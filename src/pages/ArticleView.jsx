import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ALL_ARTICLES } from '../data/siteData';
import { AFFILIATE_CONFIG } from '../config/affiliate';
import Breadcrumbs from '../components/Breadcrumbs';
import { Clock, User, ShieldCheck, ArrowRight, Layers, Zap, AlertTriangle, ShoppingCart } from 'lucide-react';

export default function ArticleView() {
  const { slug } = useParams();
  const article = ALL_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2>Article Not Found</h2>
        <p>The requested optimization guide could not be found.</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '20px' }}>Return to Home</Link>
      </div>
    );
  }

  const relatedArticles = ALL_ARTICLES
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 4);

  return (
    <div className="container">
      <div className="article-layout">
        {/* Main Article Body */}
        <main className="article-main">
          <Breadcrumbs 
            items={[
              { label: article.categoryLabel, link: `/${article.category}` },
              { label: article.title }
            ]} 
          />

          <div className="article-header">
            <span className="card-category">{article.categoryLabel}</span>
            <h1 style={{ fontSize: '2.4rem', margin: '8px 0 16px', lineHeight: '1.25' }}>
              {article.title}
            </h1>
            
            <div className="article-header-meta">
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <User size={14} /> By {article.author}
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={14} /> {article.readTime}
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#16a34a', fontWeight: '600' }}>
                <ShieldCheck size={14} /> Fact Checked & Tested ({article.updatedDate})
              </span>
            </div>
          </div>

          {/* Render HTML Content */}
          <div 
            className="article-body"
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />

          {/* ARTICLE BOTTOM ACTION BUTTONS */}
          <div className="article-action-buttons" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginTop: '36px',
            marginBottom: '36px',
            paddingTop: '24px',
            borderTop: '1px solid var(--color-border)'
          }}>
            <a 
              href={AFFILIATE_CONFIG.products.wiseCare365} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
              style={{
                borderRadius: '12px',
                padding: '12px 28px',
                fontWeight: '700',
                fontSize: '0.98rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              Buy Now
            </a>

            <Link 
              to={`/${article.category}`}
              className="btn btn-outline"
              style={{
                borderRadius: '12px',
                padding: '12px 24px',
                fontWeight: '600',
                fontSize: '0.95rem',
                color: 'var(--color-primary)',
                borderColor: 'var(--color-border)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              Back to {article.categoryLabel || 'Blogs'}
            </Link>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="sidebar">
          {/* Top Reviews & Benchmarks Widget */}
          <div className="sidebar-widget" style={{ borderTop: '4px solid var(--color-accent)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <Layers size={18} color="var(--color-accent)" />
              <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: '700' }}>Top Reviews & Benchmarks</h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link to="/reviews/best-pc-cleaner-2026" className="sidebar-benchmark-link">
                🏆 Best PC Cleaner 2026
              </Link>
              <Link to="/reviews/wise-care-365-review" className="sidebar-benchmark-link">
                ⭐ Wise Care 365 Full Review
              </Link>
              <Link to="/reviews/wisecleaner-vs-ccleaner" className="sidebar-benchmark-link">
                ⚔️ WiseCleaner vs CCleaner
              </Link>
              <Link to="/reviews/wisecleaner-vs-iobit" className="sidebar-benchmark-link">
                ⚔️ WiseCleaner vs IObit
              </Link>
              <Link to="/reviews/best-free-registry-cleaner" className="sidebar-benchmark-link">
                🧹 Best Registry Cleaner
              </Link>
            </div>
          </div>

          {/* Related Articles Widget */}
          <div className="sidebar-widget">
            <h4 className="widget-title">Related {article.categoryLabel}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {relatedArticles.map((rel) => (
                <div key={rel.id} style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '10px' }}>
                  <Link 
                    to={`/${rel.category}/${rel.slug}`} 
                    style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-primary)' }}
                  >
                    {rel.title}
                  </Link>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-muted)', marginTop: '4px' }}>
                    {rel.readTime}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
