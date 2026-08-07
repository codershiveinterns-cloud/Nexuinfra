import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Zap, 
  ChevronDown, 
  Menu, 
  X, 
  Layers, 
  AlertTriangle, 
  BookOpen,
  Cpu,
  ShieldCheck
} from 'lucide-react';
import { AFFILIATE_CONFIG } from '../config/affiliate';

export default function Navbar({ onOpenSpeedCheck }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Main Header Navbar */}
      <header className="navbar">
        <div className="container navbar-container">
          {/* Logo */}
          <Link to="/" className="nav-brand">
            <div className="brand-icon">
              <Cpu size={22} />
            </div>
            <div className="brand-text">
              <span className="brand-name">
                Nexu<span className="brand-highlight">infra</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-links">
              <li className="nav-item">
                <Link to="/blog" className={`nav-link ${location.pathname.startsWith('/blog') ? 'active' : ''}`}>
                  <Zap size={15} /> Fix Slow PC <ChevronDown size={13} />
                </Link>
                <div className="dropdown-menu">
                  <div className="dropdown-header">SPEED FIXES</div>
                  <Link to="/blog/why-is-my-computer-so-slow" className="dropdown-item">Why Is My Computer So Slow?</Link>
                  <Link to="/blog/windows-11-running-slow-10-fixes" className="dropdown-item">Windows 11 Running Slow (10 Fixes)</Link>
                  <Link to="/blog/pc-freezing-lagging-solutions" className="dropdown-item">Stop PC Freezing & Mouse Lag</Link>
                  <Link to="/blog/high-cpu-disk-usage-fix" className="dropdown-item">Fix 100% High CPU & Disk Usage</Link>
                  <Link to="/blog/laptop-overheating-fixes" className="dropdown-item">Laptop Overheating & Fan Noise</Link>
                  <Link to="/blog/startup-taking-too-long-fix" className="dropdown-item">Speed Up Windows Boot Time</Link>
                </div>
              </li>

              <li className="nav-item">
                <Link to="/problems" className={`nav-link ${location.pathname.startsWith('/problems') ? 'active' : ''}`}>
                  <AlertTriangle size={15} /> Common Problems <ChevronDown size={13} />
                </Link>
                <div className="dropdown-menu">
                  <div className="dropdown-header">SYSTEM REPAIR</div>
                  <Link to="/problems/blue-screen-of-death-fix" className="dropdown-item">Blue Screen of Death (BSOD) Fix</Link>
                  <Link to="/problems/c-drive-full-cleanup" className="dropdown-item">C Drive Full - Clean 30GB Junk</Link>
                  <Link to="/problems/windows-update-stuck-fix" className="dropdown-item">Windows Update Stuck at 100%</Link>
                  <Link to="/problems/pc-wont-boot-troubleshooting" className="dropdown-item">PC Won't Boot / Black Screen</Link>
                  <Link to="/problems/slow-internet-pc-optimization" className="dropdown-item">Slow Internet Network Fix</Link>
                  <Link to="/problems/file-wont-delete-force-remove" className="dropdown-item">File Won't Delete (Force Remove)</Link>
                  <Link to="/problems/recover-deleted-files-guide" className="dropdown-item">Recover Deleted Files Guide</Link>
                  <Link to="/problems/find-delete-duplicate-files" className="dropdown-item">Find & Delete Duplicate Files</Link>
                  <Link to="/problems/stubborn-program-uninstall" className="dropdown-item">Program Uninstall Won't Remove</Link>
                </div>
              </li>

              <li className="nav-item">
                <Link to="/guides" className={`nav-link ${location.pathname.startsWith('/guides') ? 'active' : ''}`}>
                  <BookOpen size={15} /> How-To Guides <ChevronDown size={13} />
                </Link>
                <div className="dropdown-menu">
                  <div className="dropdown-header">WINDOWS TUTORIALS</div>
                  <Link to="/guides/clean-registry-safely" className="dropdown-item">Clean Registry Safely</Link>
                  <Link to="/guides/clear-junk-files-windows" className="dropdown-item">Clear Junk Files in Windows 11/10</Link>
                  <Link to="/guides/speed-up-boot-time" className="dropdown-item">Speed Up Boot Time Hacks</Link>
                  <Link to="/guides/optimize-pc-for-gaming" className="dropdown-item">Optimize PC for High Gaming FPS</Link>
                  <Link to="/guides/fix-corrupted-windows-system-files" className="dropdown-item">Repair System Files (SFC & DISM)</Link>
                  <Link to="/guides/disable-windows-telemetry-privacy" className="dropdown-item">Disable Windows Telemetry & Privacy</Link>
                </div>
              </li>

              <li className="nav-item">
                <Link to="/blogs" className={`nav-link ${location.pathname.startsWith('/blogs') ? 'active' : ''}`}>
                  <BookOpen size={15} /> Blogs <ChevronDown size={13} />
                </Link>
                <div className="dropdown-menu">
                  <div className="dropdown-header">TECH BLOGS</div>
                  <Link to="/blogs/pchealthlens-review-scan-score-restore" className="dropdown-item">PCHealthLens Review: Diagnose Before You Delete</Link>
                  <Link to="/blogs/top-10-pc-performance-myths-debunked" className="dropdown-item">Top 10 PC Myths Debunked</Link>
                  <Link to="/blogs/windows-11-24h2-update-performance-review" className="dropdown-item">Windows 11 24H2 Speed Review</Link>
                  <Link to="/blogs/ssd-vs-hdd-optimization-guide-2026" className="dropdown-item">SSD vs HDD Tuning Guide</Link>
                  <Link to="/blogs/how-to-fix-high-ram-usage-windows-11" className="dropdown-item">Fix High RAM Usage in Windows 11</Link>
                  <Link to="/blogs/is-ccleaner-safe-in-2026" className="dropdown-item">Is CCleaner Safe in 2026?</Link>
                  <Link to="/blogs/ultimate-pc-maintenance-checklist-2026" className="dropdown-item">2026 PC Maintenance Checklist</Link>
                </div>
              </li>

              <li className="nav-item nav-item-disclosure">
                <Link 
                  to="/affiliate-disclosure" 
                  className={`nav-link ${location.pathname === '/affiliate-disclosure' ? 'active' : ''}`}
                >
                  <ShieldCheck size={15} /> Affiliate Disclosure
                </Link>
                <div className="disclosure-tooltip">
                  <div className="disclosure-tooltip-arrow" />
                  <p className="disclosure-tooltip-text">
                    Some links on this site are affiliate links. We may earn a commission at no extra cost to you. Our content remains independent and research-based.
                  </p>
                </div>
              </li>
            </ul>
          </nav>

          {/* Action CTAs */}
          <div className="nav-actions">
            <button 
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-content">

            <div className="mobile-nav-group">
              <div className="mobile-group-title">NAVIGATION</div>
              <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">⚡ Fix Slow PC</Link>
              <Link to="/problems" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">⚠️ Common PC Problems</Link>
              <Link to="/guides" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">📘 How-To Guides</Link>
              <Link to="/blogs" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">📝 Blogs</Link>
              <Link to="/affiliate-disclosure" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">🛡️ Affiliate Disclosure</Link>
            </div>

            <div style={{ borderTop: '1px solid var(--color-border)', marginTop: '20px', paddingTop: '16px', display: 'flex', gap: '16px', fontSize: '0.82rem', color: 'var(--color-muted)' }}>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
              <Link to="/privacy-policy" onClick={() => setMobileMenuOpen(false)}>Privacy</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
