import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--color-muted)', marginBottom: '24px' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Home size={14} /> Home
      </Link>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight size={14} />
          {item.link ? (
            <Link to={item.link}>{item.label}</Link>
          ) : (
            <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
