import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { ShieldCheck, Award, Layers, Zap, MapPin, Heart, Cpu, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="container" style={{ padding: '40px 20px 80px' }}>
      <Breadcrumbs items={[{ label: "About Us" }]} />

      {/* Hero Section */}
      <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px' }}>
        <div className="hero-badge" style={{ display: 'inline-flex', marginBottom: '16px' }}>
          <ShieldCheck size={14} /> OUR MISSION
        </div>
        <h1 style={{ fontSize: '2.8rem', fontWeight: '800', lineHeight: '1.2', margin: '0 0 20px' }}>
          Transparent Software Deals & PC Optimization
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--color-muted)', lineHeight: '1.65', margin: 0 }}>
          Nexuinfra was founded by <strong>DHARMPAL DHANKA</strong> to help users navigate the complicated landscape of security and system optimization software. We cut through the marketing hype to deliver direct advice, real benchmark data, and exclusive savings.
        </p>
      </div>

      {/* Who We Are & By The Numbers */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px', alignItems: 'center', marginBottom: '80px' }}>
        <div>
          <h2 style={{ fontSize: '2.1rem', fontWeight: '800', marginBottom: '20px' }}>Who We Are</h2>
          <p style={{ color: 'var(--color-muted)', lineHeight: '1.7', fontSize: '1.02rem', marginBottom: '18px' }}>
            In today's digital landscape, security threats and system slowdowns are multiplying by the hour. Between malicious tracker bots, public Wi-Fi exploits, background junk bloat, and broken registry keys, finding high-tier protection and optimization is a necessity, not a luxury.
          </p>
          <p style={{ color: 'var(--color-muted)', lineHeight: '1.7', fontSize: '1.02rem', marginBottom: '18px' }}>
            However, search engines are flooded with generic "ranking" sites that recommend software purely based on which provider pays the highest affiliate referral fee. This leads to biased reviews and inflated pricing.
          </p>
          <p style={{ color: 'var(--color-text)', lineHeight: '1.7', fontSize: '1.02rem', fontWeight: '500' }}>
            <strong style={{ color: '#38bdf8' }}>Nexuinfra is different.</strong> We purchase software accounts ourselves, test them across standardized Windows 11 and 10 test benches, publish diagnostic logs openly, and collaborate directly with providers to secure retail discounts.
          </p>
        </div>

        {/* Nexuinfra by the Numbers Card */}
        <div style={{ 
          backgroundColor: 'var(--color-surface)', 
          border: '1px solid var(--color-border)', 
          borderRadius: 'var(--radius-lg)', 
          padding: '36px 32px',
          boxShadow: 'var(--shadow-md)'
        }}>
          <h3 style={{ textAlign: 'center', fontSize: '1.25rem', fontWeight: '700', marginBottom: '32px', color: 'var(--color-primary)' }}>
            Nexuinfra by the Numbers
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px 20px', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: '800', color: '#38bdf8', lineHeight: '1' }}>120+</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-muted)', marginTop: '8px' }}>Software Suites Audited</div>
            </div>
            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: '800', color: '#38bdf8', lineHeight: '1' }}>480+</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-muted)', marginTop: '8px' }}>Speed Tests Checked Weekly</div>
            </div>
            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: '800', color: '#38bdf8', lineHeight: '1' }}>86%</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-muted)', marginTop: '8px' }}>Max Customer Savings Secured</div>
            </div>
            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: '800', color: '#38bdf8', lineHeight: '1' }}>0%</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-muted)', marginTop: '8px' }}>Paid Review Placements</div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Testing Methodology */}
      <div style={{ marginBottom: '80px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.1rem', fontWeight: '800', marginBottom: '12px' }}>Our Testing Methodology</h2>
        <p style={{ color: 'var(--color-muted)', fontSize: '1.05rem', marginBottom: '40px', maxWidth: '640px', margin: '0 auto 40px' }}>
          Every product review page on Nexuinfra is backed by rigorous multi-step testing criteria:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', textAlign: 'left' }}>
          <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '28px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8', marginBottom: '20px' }}>
              <Award size={20} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '12px' }}>Speed & Bandwidth Logs</h3>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
              We connect to standardized test benches and measure throughput loss, RAM footprint, and disk scan speeds to ensure your system speeds remain optimal for gaming and multitasking.
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '28px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8', marginBottom: '20px' }}>
              <ShieldCheck size={20} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '12px' }}>System Safety Audits</h3>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
              We run active diagnostic scripts to check for broken registry keys and verify that automatic Windows System Restore Points are generated prior to executing system changes.
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '28px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8', marginBottom: '20px' }}>
              <Zap size={20} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '12px' }}>Malware & Bloatware Rates</h3>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
              We test real-time scanners against sandbox containers of safe malware signatures and junk file caches to record exact detection rates without false positives.
            </p>
          </div>
        </div>
      </div>

      {/* Founder & Corporate Headquarters */}
      <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          
          {/* Card 1: Our Founder */}
          <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '36px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8', marginBottom: '24px' }}>
              <Heart size={20} />
            </div>
            <div style={{ fontSize: '0.78rem', fontWeight: '800', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
              OUR FOUNDER
            </div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', margin: '0 0 4px', lineHeight: '1.2' }}>
              DHARMPAL DHANKA
            </h3>
            <div style={{ fontSize: '0.9rem', color: 'var(--color-muted)', fontWeight: '600', marginBottom: '20px' }}>
              Lead Systems Analyst & Founder
            </div>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.94rem', lineHeight: '1.65', margin: 0 }}>
              DHARMPAL DHANKA founded Nexuinfra in 2026 with a simple mission: to build a digital ecosystem that separates marketing hype from actual software performance. With extensive systems engineering experience, Dharmpal reviews every software recommendation to ensure it meets our strict transparency and security standards.
            </p>
          </div>

          {/* Card 2: Corporate Headquarters */}
          <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '36px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8', marginBottom: '24px' }}>
              <MapPin size={20} />
            </div>
            <div style={{ fontSize: '0.78rem', fontWeight: '800', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
              CORPORATE HEADQUARTERS
            </div>

            <div style={{ 
              backgroundColor: 'var(--color-subsurface)', 
              borderLeft: '4px solid #38bdf8', 
              borderRadius: '0 8px 8px 0', 
              padding: '20px 24px', 
              margin: '16px 0 24px' 
            }}>
              <div style={{ fontWeight: '700', fontSize: '1.05rem', color: 'white', lineHeight: '1.6' }}>
                KOHIYA POST RADOLI
              </div>
              <div style={{ color: 'var(--color-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                TH. KOTKHAWDA DIST. JAIPUR 303908
              </div>
              <div style={{ color: '#38bdf8', fontWeight: '600', fontSize: '0.95rem', marginTop: '4px' }}>
                RAJASTHAN, INDIA
              </div>
            </div>

            <p style={{ color: 'var(--color-muted)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
              All legal notices, mailings, and partner audits should be addressed to our headquarters registered under Indian corporate business records.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
