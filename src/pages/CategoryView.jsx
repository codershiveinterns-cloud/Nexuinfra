import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { ALL_ARTICLES, CATEGORIES } from '../data/siteData';
import Breadcrumbs from '../components/Breadcrumbs';
import { Clock, ArrowRight } from 'lucide-react';

export default function CategoryView({ category: propCategory }) {
  const { categorySlug } = useParams();
  const location = useLocation();

  // Extract category from prop, params, or pathname (e.g. /blogs -> blogs)
  const pathCategory = location.pathname.replace(/^\//, '').split('/')[0];
  const catKey = propCategory || categorySlug || pathCategory || 'reviews';

  const categoryInfo = CATEGORIES[catKey] || {
    title: "All Guides & Articles",
    description: "Browse all PC optimization guides, reviews, and repair tutorials."
  };

  const categoryArticles = ALL_ARTICLES.filter((a) => a.category === catKey);

  return (
    <div className="container" style={{ padding: '40px 20px 60px' }}>
      <Breadcrumbs items={[{ label: categoryInfo.title }]} />

      <div className="section-header">
        <span className="section-tag">CATEGORY INDEX</span>
        <h1 className="section-title">{categoryInfo.title}</h1>
        <p className="section-subtitle">{categoryInfo.description}</p>
      </div>

      <div className="cards-grid">
        {categoryArticles.map((art) => (
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
              <span>Updated {art.updatedDate}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
