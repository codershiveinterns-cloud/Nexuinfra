import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Layers, Award, CheckCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info & Trust Badges */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'linear-gradient(135deg, var(--color-accent) 0%, #0369a1 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <Cpu size={20} />
              </div>
              <h3 style={{ margin: 0, fontSize: '1.35rem' }}>Nexu<span style={{ color: '#38bdf8' }}>infra</span></h3>
            </div>
            <p>
              Independent Windows software testing, speed diagnostics, and registry safety benchmarks. 
              Our mission is to help PC users compare optimization software and fix system slowdowns safely.
            </p>
            <div style={{ display: 'flex', gap: '20px', fontSize: '0.85rem', color: '#cbd5e1', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Layers size={16} color="#38bdf8" /> Unbiased Software Reviews
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Award size={16} color="#38bdf8" /> Expert Comparisons
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle size={16} color="#38bdf8" /> Windows 11 / 10 / 8 / 7
              </div>
            </div>
          </div>

          {/* Trust & Legal Links */}
          <div className="footer-column">
            <h4>Trust & Disclosure</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/affiliate-disclosure">Affiliate Disclosure</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Nexuinfra. All Rights Reserved. 
            Windows is a registered trademark of Microsoft Corporation.
          </div>
        </div>
      </div>
    </footer>
  );
}
