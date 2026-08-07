import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { Mail, ShieldCheck } from 'lucide-react';

export default function LegalPage() {
  const location = useLocation();
  const path = location.pathname;

  let title = "Legal & Policy";
  let content = null;

  if (path === '/about') {
    title = "About Us";
    content = (
      <div>
        <p>Welcome to <strong>Nexuinfra</strong>. We are an independent team of systems engineers, software reviewers, and tech enthusiasts dedicated to keeping Windows PCs fast, secure, and bloatware-free.</p>
        
        <h2>Our Mission</h2>
        <p>Our mission is to empower millions of computer users around the world to optimize their Windows operating systems safely. We conduct independent, empirical stress tests on utility software to separate genuine performance tools from deceptive bloatware.</p>

        <h2>Our Benchmarking & Testing Standards</h2>
        <p>Every software program listed on Nexuinfra undergoes strict testing across four standardized metrics in our laboratory:</p>
        <ul>
          <li><strong>Scan Speed & Resource Overhead:</strong> We measure background RAM usage and CPU thread stress during active system scanning to ensure zero lag.</li>
          <li><strong>Disk Space Reclaimed:</strong> We test software against standardized 35GB system cache datasets containing temporary Windows files, browser cache, and dump logs.</li>
          <li><strong>Registry Safety:</strong> We verify that registry repair engines create automatic restore points before modifying any registry keys to prevent OS crashes.</li>
          <li><strong>Zero Unwanted Software:</strong> We check installers for hidden toolbars, browser hijackers, or unwanted third-party software bundles.</li>
        </ul>

        <h2>Editorial Integrity</h2>
        <p>All reviews, comparison charts, and benchmarks on Nexuinfra are produced by our editorial team based on real-world system testing. We do not publish paid reviews or accept payment to alter performance scores.</p>
      </div>
    );
  } else if (path === '/affiliate-disclosure') {
    title = "Affiliate Disclosure";
    content = (
      <div>
        <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>Last updated: June 2026</p>
        
        <p>Transparency is important to us. This page explains how Nexuinfra may fund some of its content, resources, guides, comparisons, and recommendations. The short version: Nexuinfra may participate in affiliate programmes. If you purchase through certain links on our website, we may earn a commission. This comes at no extra cost to you.</p>

        <h2>Our Commitment to Honesty</h2>
        <p>Our goal is to provide helpful, practical, and research-based content for people choosing PC cleaners, optimization software, system utilities, and other privacy and cybersecurity tools. Products and services mentioned on our website should be selected based on usefulness, features, security performance, pricing fit, ease of use, and individual protection needs.</p>

        <p>We do not accept payment to write fake positive reviews. Affiliate commissions should not control our opinions, comparisons, or recommendations.</p>

        <h2>How Affiliate Links Work</h2>
        <p>When you click an affiliate link on our website to a third-party provider, such as a PC cleaner service, software company, or security provider, a tracking code may be used. This helps the provider know that you came from our website.</p>

        <p>If you decide to purchase a product or service through that link, Nexuinfra may receive a referral fee or commission. This can help cover the costs of running this website, creating resources, testing tools, maintaining content, and supporting our business operations.</p>

        <h2>No Extra Cost to You</h2>
        <p>Using an affiliate link does not increase the price you pay. In some cases, affiliate links may provide access to special discounts, offers, or introductory pricing from the provider. Any discount, pricing, or offer is controlled by the third-party provider and may change at any time.</p>

        <h2>Third-Party Services</h2>
        <p>Any third-party product or service you buy is provided by that company, not by Nexuinfra. Your purchase, account, billing, support, performance, refunds, and service terms are subject to the provider's own terms, privacy policy, and support process.</p>

        <h2>Limitation of Liability</h2>
        <p>We try to keep information accurate and useful, but pricing, features, discounts, availability, and terms for third-party providers can change without notice. We cannot guarantee the performance, security, reliability, pricing, or support quality of any third-party service provider.</p>

        <p>You should always review the provider's latest pricing, features, terms, privacy policy, and refund policy before making a purchase.</p>

        <h2>Questions?</h2>
        <p>If you have any questions about our affiliate relationships or how we fund this site, please contact us at support@nexuinfra.com.</p>
      </div>
    );
  } else if (path === '/privacy-policy') {
    title = "Privacy Policy";
    content = (
      <div>
        <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>Last updated: June 2026</p>
        
        <p>Your privacy is important to us. Nexuinfra is committed to protecting your personal data when you visit our website. This Privacy Policy outlines how we collect, use, and safeguard information.</p>
        
        <h2>Information We Collect</h2>
        <p>We collect minimal information necessary to deliver high-quality content and maintain site security:</p>
        <ul>
          <li><strong>Log Files & Analytics:</strong> Like standard web servers, we record IP addresses, browser types, operating systems, and page visit duration to analyze site traffic and improve performance.</li>
          <li><strong>Voluntary Communications:</strong> If you contact us via email, we retain your email address and message content solely to respond to your inquiry.</li>
        </ul>

        <h2>Cookies & Web Analytics</h2>
        <p>We use standard anonymous web analytics cookies to understand site performance, visitor count, and navigation patterns. Cookies are small text files stored on your device that help us optimize user experience. You can disable cookies at any time through your web browser settings.</p>

        <h2>Third-Party External Links</h2>
        <p>Nexuinfra contains links to external websites and software vendors. Once you leave our domain, we do not control third-party privacy policies or data collection practices. We encourage you to review the privacy policy of any third-party site you visit.</p>

        <h2>Data Security & Retention</h2>
        <p>We implement SSL/TLS encryption across all site traffic to protect data transmissions. We do not sell, rent, or trade your personal information to third parties.</p>

        <h2>Contact Us Regarding Privacy</h2>
        <p>If you have questions regarding this Privacy Policy or wish to request data deletion, contact us at <code>support@nexuinfra.com</code>.</p>
      </div>
    );
  } else if (path === '/terms') {
    title = "Terms of Service";
    content = (
      <div>
        <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>Last updated: June 2026</p>
        
        <p>By accessing and using Nexuinfra, you agree to comply with and be bound by the following Terms of Service. If you do not agree with these terms, please discontinue use of this site.</p>
        
        <h2>Educational & Benchmark Purpose Only</h2>
        <p>All content, benchmarks, tutorials, and guides published on Nexuinfra are provided strictly for educational and informational purposes. While we test tools thoroughly, system configurations vary widely.</p>

        <div className="callout callout-tip">
          <strong>⚠️ Safety Recommendation:</strong> Users should always create a full <strong>Windows System Restore Point</strong> before attempting registry edits, disk partition changes, or system cleaning utilities.
        </div>

        <h2>Intellectual Property</h2>
        <p>All original content, text, benchmark graphics, comparison charts, and branding elements on Nexuinfra are protected by international copyright laws. Reproduction without explicit written permission is prohibited.</p>

        <h2>Disclaimer of Warranties & Limitation of Liability</h2>
        <p>Nexuinfra provides its content on an "as is" and "as available" basis without warranties of any kind. We are not liable for system instability, software errors, or data loss arising from the use of recommended third-party applications.</p>

        <h2>Modifications to Terms</h2>
        <p>We reserve the right to modify these Terms of Service at any time. Continued use of Nexuinfra following updates constitutes acceptance of the modified terms.</p>
      </div>
    );
  } else if (path === '/contact') {
    title = "Contact Us";
    content = (
      <div>
        <p>Have questions about a software review, feedback on a tutorial, or need help troubleshooting a PC speed issue? Reach out to our editorial and review team.</p>
        
        <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: '28px', borderRadius: '12px', marginTop: '24px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <Mail size={22} color="var(--color-accent-light)" />
            <span style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--color-primary)' }}>Official Support & Editorial Contacts</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
            <div>
              <strong>Editorial & Review Inquiries:</strong> <code>support@nexuinfra.com</code>
            </div>
            <div>
              <strong>Response Window:</strong> We typically respond to technical and review inquiries within 24 to 48 business hours.
            </div>
          </div>
        </div>

        <h2>Frequently Contacted Topics</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          <div style={{ backgroundColor: 'var(--color-subsurface)', border: '1px solid var(--color-border)', padding: '16px', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 8px', fontSize: '1rem', color: 'var(--color-primary)' }}>Benchmark Corrections</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-muted)' }}>Spotted a software update or benchmark score change? Email our lab team with your test hardware specifications.</p>
          </div>

          <div style={{ backgroundColor: 'var(--color-subsurface)', border: '1px solid var(--color-border)', padding: '16px', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 8px', fontSize: '1rem', color: 'var(--color-primary)' }}>Software Submission</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-muted)' }}>Software developers seeking inclusion in our Windows PC cleaner benchmark directory can submit software builds for testing.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '40px 20px 60px' }}>
      <Breadcrumbs items={[{ label: title }]} />

      <main className="article-main" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '24px', borderBottom: '1px solid var(--color-border)', paddingBottom: '16px' }}>
          {title}
        </h1>

        <div className="article-body">
          {content}
        </div>
      </main>
    </div>
  );
}

