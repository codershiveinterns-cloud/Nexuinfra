import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CouponCard({ couponData }) {
  return (
    <div className="coupon-card">
      <div className="verified-tag">
        <CheckCircle2 size={14} /> Verified Software Review
      </div>

      <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', color: 'var(--color-primary)' }}>
        {couponData?.productName || "Wise Care 365 Review"}
      </h3>
      
      <p style={{ color: 'var(--color-muted)', fontSize: '0.92rem' }}>
        Read our in-depth performance analysis, benchmark scores, and feature comparison.
      </p>

      <div style={{ marginTop: '16px' }}>
        <Link 
          to="/reviews/wise-care-365-review"
          className="btn btn-primary btn-sm"
          style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
        >
          Read Review <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

