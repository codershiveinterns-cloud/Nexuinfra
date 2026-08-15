import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  RotateCcw, 
  ShieldCheck, 
  Star, 
  Zap, 
  CheckCircle2, 
  XCircle,
  HelpCircle,
  Award
} from 'lucide-react';

export default function RecommendationQuiz() {
  const [currentStep, setCurrentStep] = useState(1);
  const [buildingType, setBuildingType] = useState('');
  const [budget, setBudget] = useState('');
  const [priority, setPriority] = useState('');
  const [isCalculated, setIsCalculated] = useState(false);

  const question1Options = [
    { label: 'Personal website', icon: '🌐', desc: 'Portfolios, personal blogs, or bio links' },
    { label: 'Business website', icon: '💼', desc: 'Company site, agency, or professional service' },
    { label: 'Online store', icon: '🛒', desc: 'E-commerce shop with checkout & payments' },
    { label: 'SaaS application', icon: '⚡', desc: 'Web app, dashboard, or software platform' },
    { label: 'Blog', icon: '📝', desc: 'Content publishing, news, or affiliate blog' },
    { label: 'Developer project', icon: '🚀', desc: 'APIs, staging server, or experimental app' }
  ];

  const question2Options = [
    { label: 'Under $5/month', icon: '💵', desc: 'Entry-level budget hosting & free tier tools' },
    { label: '$5–$15 / month', icon: '💳', desc: 'Standard business & high-speed cloud tier' },
    { label: '$15–$50 / month', icon: '💎', desc: 'Pro performance, dedicated RAM & security' },
    { label: '$50+ / month', icon: '🚀', desc: 'High-scale enterprise, multi-core & SLA' }
  ];

  const question3Options = [
    { label: 'Price', icon: '🏷️', desc: 'Maximum features for the lowest cost' },
    { label: 'Performance', icon: '⚡', desc: 'Lightning-fast load speed & unthrottled CPU' },
    { label: 'Security', icon: '🔐', desc: 'Air-tight data protection & auto-backups' },
    { label: 'Ease of use', icon: '😊', desc: '1-Click setup with zero tech skills needed' },
    { label: 'Scalability', icon: '📈', desc: 'Auto-scaling for high traffic bursts' }
  ];

  const handleSelectBuilding = (val) => {
    setBuildingType(val);
    setCurrentStep(2);
  };

  const handleSelectBudget = (val) => {
    setBudget(val);
    setCurrentStep(3);
  };

  const handleSelectPriority = (val) => {
    setPriority(val);
    setIsCalculated(true);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setBuildingType('');
    setBudget('');
    setPriority('');
    setIsCalculated(false);
  };

  // Determine Recommendation Match
  const getRecommendationResult = () => {
    if (budget === 'Under $5/month' || priority === 'Price') {
      return {
        providerName: 'Wise Care 365 Essential & Starter Host',
        badge: 'Best Value Match 🏆',
        score: '9.8 / 10',
        whyRecommend: 'Perfect match for budget-conscious creators who want maximum performance and 1-click automatic system maintenance under $5/mo.',
        pros: [
          'Unbeatable cost-to-performance ratio',
          'Free SSL certificate & 1-click installer',
          'Low background RAM consumption',
          'Automated weekly cache & junk cleanup'
        ],
        cons: [
          'Shared server resources on basic tier',
          'Multi-PC license sold separately'
        ],
        pricing: '$2.95 / month (60% OFF)',
        guarantee: '30-Day Money-Back Guarantee',
        link: '/reviews/best-pc-cleaner-2026',
        linkText: 'View Recommendation →'
      };
    } else if (priority === 'Security' || buildingType === 'Business website' || buildingType === 'Online store') {
      return {
        providerName: 'Wise Care 365 PRO Enterprise & Secure Cloud',
        badge: 'Top Security & Reliability 🔐',
        score: '9.9 / 10',
        whyRecommend: 'Engineered for businesses requiring 99.99% uptime, real-time protection, registry safety guarantees, and automated cloud backups.',
        pros: [
          'Real-time system protection & malware shield',
          'Safe registry cleaner with mandatory auto-backup',
          'PCI-DSS compliant server environment',
          '24/7 priority technical support'
        ],
        cons: [
          'Requires annual subscription for best rate'
        ],
        pricing: '$14.95 / month',
        guarantee: '60-Day Unconditional Guarantee',
        link: '/reviews/wise-care-365-review',
        linkText: 'View Recommendation →'
      };
    } else if (priority === 'Performance' || priority === 'Scalability' || buildingType === 'SaaS application' || buildingType === 'Developer project') {
      return {
        providerName: 'High-Performance NVMe Compute & Dev Suite',
        badge: 'Speed & Scale Winner ⚡',
        score: '9.9 / 10',
        whyRecommend: 'Designed for developers and high-traffic applications demanding unthrottled CPU cores, 10Gbps networking, and NVMe SSD speed.',
        pros: [
          '100% NVMe storage with high IOPS throughput',
          'Dedicated CPU core allocation (zero throttling)',
          'Instant auto-scaling during traffic spikes',
          'Full root administrator access'
        ],
        cons: [
          'Higher price point for high-tier specs'
        ],
        pricing: '$29.99 / month',
        guarantee: '7-Day Free Trial Available',
        link: '/blogs/windows-11-24h2-update-performance-review',
        linkText: 'View Recommendation →'
      };
    } else {
      return {
        providerName: 'Wise Care 365 Universal Infrastructure Suite',
        badge: 'Editor\'s Top Pick ⭐',
        score: '9.8 / 10',
        whyRecommend: 'An all-around balanced suite providing fast page load speeds, system optimization, disk cleanup, and beginner-friendly controls.',
        pros: [
          '1-Click automated PC checkup',
          'Deep junk & registry cleaner',
          'Hardware temperature monitoring',
          'Supports Windows 11 / 10 / 8 / 7'
        ],
        cons: [
          'Advanced features require Pro activation'
        ],
        pricing: '$9.95 / month',
        guarantee: '60-Day Guarantee',
        link: '/reviews/best-pc-cleaner-2026',
        linkText: 'View Recommendation →'
      };
    }
  };

  const result = getRecommendationResult();

  return (
    <section className="recommendation-quiz-section" style={{
      padding: '64px 0',
      backgroundColor: 'var(--color-surface)',
      borderTop: '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)'
    }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        {/* Header Title */}
        <div className="text-center" style={{ marginBottom: '32px' }}>
          <div className="hero-badge mx-auto" style={{ marginBottom: '12px' }}>
            <Sparkles size={15} color="#eab308" /> 60-Second Recommendation Quiz ⭐
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--color-primary)', marginBottom: '8px' }}>
            Which service is right for you?
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--color-muted)', margin: 0 }}>
            Answer 3 quick questions to discover your tailored infrastructure & optimization match.
          </p>
        </div>

        {/* Quiz Container Card */}
        <div style={{
          backgroundColor: 'var(--color-bg)',
          border: '1px solid var(--color-border-bright)',
          borderRadius: '24px',
          padding: '36px',
          boxShadow: 'var(--shadow-lg)'
        }}>
          {!isCalculated ? (
            <div>
              {/* Progress Indicator */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: '700', color: 'var(--color-muted)', marginBottom: '8px' }}>
                  <span>QUESTION {currentStep} OF 3</span>
                  <span>{Math.round((currentStep / 3) * 100)}% Completed</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--color-subsurface)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{
                    width: `${(currentStep / 3) * 100}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #0284c7 0%, #38bdf8 100%)',
                    transition: 'width 0.3s ease'
                  }} />
                </div>
              </div>

              {/* STEP 1: What are you building? */}
              {currentStep === 1 && (
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--color-primary)', marginBottom: '6px' }}>
                    Question 1: What are you building?
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-muted)', marginBottom: '24px' }}>
                    Select the type of website or system application you are planning.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                    {question1Options.map((opt, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelectBuilding(opt.label)}
                        className="quiz-option-btn"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '16px',
                          borderRadius: '14px',
                          backgroundColor: 'var(--color-surface)',
                          border: buildingType === opt.label ? '2px solid var(--color-accent-light)' : '1px solid var(--color-border)',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <span style={{ fontSize: '1.5rem' }}>{opt.icon}</span>
                        <div>
                          <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--color-primary)' }}>
                            {opt.label}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--color-muted)', marginTop: '2px' }}>
                            {opt.desc}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: What's your budget? */}
              {currentStep === 2 && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <button 
                      type="button" 
                      onClick={() => setCurrentStep(1)}
                      style={{ background: 'none', border: 'none', color: 'var(--color-accent-light)', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '600', padding: 0 }}
                    >
                      ← Back to Question 1
                    </button>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--color-primary)', marginBottom: '6px' }}>
                    Question 2: What's your monthly budget?
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-muted)', marginBottom: '24px' }}>
                    Choose the target monthly investment for your hosting or software infrastructure.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                    {question2Options.map((opt, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelectBudget(opt.label)}
                        className="quiz-option-btn"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '16px',
                          borderRadius: '14px',
                          backgroundColor: 'var(--color-surface)',
                          border: budget === opt.label ? '2px solid var(--color-accent-light)' : '1px solid var(--color-border)',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <span style={{ fontSize: '1.5rem' }}>{opt.icon}</span>
                        <div>
                          <div style={{ fontWeight: '700', fontSize: '0.98rem', color: 'var(--color-primary)' }}>
                            {opt.label}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--color-muted)', marginTop: '2px' }}>
                            {opt.desc}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: What's most important? */}
              {currentStep === 3 && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <button 
                      type="button" 
                      onClick={() => setCurrentStep(2)}
                      style={{ background: 'none', border: 'none', color: 'var(--color-accent-light)', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '600', padding: 0 }}
                    >
                      ← Back to Question 2
                    </button>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--color-primary)', marginBottom: '6px' }}>
                    Question 3: What's most important to you?
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-muted)', marginBottom: '24px' }}>
                    Select your primary priority for evaluating providers.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                    {question3Options.map((opt, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelectPriority(opt.label)}
                        className="quiz-option-btn"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '16px',
                          borderRadius: '14px',
                          backgroundColor: 'var(--color-surface)',
                          border: priority === opt.label ? '2px solid var(--color-accent-light)' : '1px solid var(--color-border)',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <span style={{ fontSize: '1.5rem' }}>{opt.icon}</span>
                        <div>
                          <div style={{ fontWeight: '700', fontSize: '0.98rem', color: 'var(--color-primary)' }}>
                            {opt.label}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--color-muted)', marginTop: '2px' }}>
                            {opt.desc}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* RESULT MATCH DISPLAY CARD */
            <div>
              {/* Selected Answers Summary Tag */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '10px',
                paddingBottom: '16px',
                marginBottom: '20px',
                borderBottom: '1px solid var(--color-border)'
              }}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.75rem', backgroundColor: 'var(--color-subsurface)', padding: '4px 10px', borderRadius: '12px', color: 'var(--color-muted)', border: '1px solid var(--color-border)' }}>
                    Building: <strong>{buildingType}</strong>
                  </span>
                  <span style={{ fontSize: '0.75rem', backgroundColor: 'var(--color-subsurface)', padding: '4px 10px', borderRadius: '12px', color: 'var(--color-muted)', border: '1px solid var(--color-border)' }}>
                    Budget: <strong>{budget}</strong>
                  </span>
                  <span style={{ fontSize: '0.75rem', backgroundColor: 'var(--color-subsurface)', padding: '4px 10px', borderRadius: '12px', color: 'var(--color-muted)', border: '1px solid var(--color-border)' }}>
                    Priority: <strong>{priority}</strong>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-accent-light)',
                    fontSize: '0.82rem',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  <RotateCcw size={13} /> Retake Quiz
                </button>
              </div>

              {/* Match Card */}
              <div style={{
                backgroundColor: 'var(--color-surface)',
                border: '2px solid var(--color-accent-light)',
                borderRadius: '20px',
                padding: '28px',
                boxShadow: '0 8px 32px rgba(56, 189, 248, 0.15)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                  <span style={{
                    fontSize: '0.78rem',
                    fontWeight: '800',
                    backgroundColor: 'rgba(2, 132, 199, 0.15)',
                    color: 'var(--color-accent-light)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    border: '1px solid rgba(56, 189, 248, 0.3)'
                  }}>
                    🎯 YOUR BEST MATCH
                  </span>
                  <span style={{
                    fontSize: '0.9rem',
                    fontWeight: '800',
                    color: '#f59e0b',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Star size={15} fill="#f59e0b" /> Score: {result.score}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.65rem', fontWeight: '900', color: 'var(--color-primary)', margin: '0 0 10px 0' }}>
                  {result.providerName}
                </h3>

                <p style={{ fontSize: '0.96rem', color: 'var(--color-text)', lineHeight: '1.6', marginBottom: '20px' }}>
                  <strong>Why we recommend it:</strong> {result.whyRecommend}
                </p>

                {/* Pros and Cons Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '16px',
                  backgroundColor: 'var(--color-bg)',
                  padding: '20px',
                  borderRadius: '14px',
                  marginBottom: '24px',
                  border: '1px solid var(--color-border)'
                }}>
                  <div>
                    <h4 style={{ fontSize: '0.88rem', fontWeight: '800', color: 'var(--color-success)', textTransform: 'uppercase', margin: '0 0 10px 0' }}>
                      Pros &amp; Strengths
                    </h4>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {result.pros.map((p, idx) => (
                        <li key={idx} style={{ fontSize: '0.85rem', color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <CheckCircle2 size={14} color="var(--color-success)" style={{ flexShrink: 0 }} /> {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '0.88rem', fontWeight: '800', color: 'var(--color-warning)', textTransform: 'uppercase', margin: '0 0 10px 0' }}>
                      Things to Consider
                    </h4>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {result.cons.map((c, idx) => (
                        <li key={idx} style={{ fontSize: '0.85rem', color: 'var(--color-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <XCircle size={14} color="var(--color-warning)" style={{ flexShrink: 0 }} /> {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action CTA Row */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--color-border)'
                }}>
                  <Link
                    to={result.link}
                    className="btn btn-primary btn-lg"
                    style={{
                      borderRadius: '14px',
                      padding: '14px 28px',
                      fontWeight: '800',
                      fontSize: '1rem',
                      textDecoration: 'none',
                      gap: '8px'
                    }}
                  >
                    {result.linkText}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
