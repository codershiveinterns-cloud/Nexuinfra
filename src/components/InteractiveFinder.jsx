import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Cloud, 
  ShieldCheck, 
  Bot, 
  Briefcase, 
  Rocket, 
  ArrowRight, 
  Star, 
  ExternalLink,
  CheckCircle2,
  Zap,
  ChevronRight
} from 'lucide-react';
import { AFFILIATE_CONFIG } from '../config/affiliate';

export default function InteractiveFinder() {
  const [activeCategoryId, setActiveCategoryId] = useState('website');

  const categories = [
    {
      id: 'website',
      icon: Globe,
      emoji: '🌐',
      title: 'A website',
      tagline: 'Hosting, domain & site builders',
      accentColor: '#38bdf8'
    },
    {
      id: 'cloud',
      icon: Cloud,
      emoji: '☁️',
      title: 'Cloud infrastructure',
      tagline: 'VPS, servers & cloud storage',
      accentColor: '#818cf8'
    },
    {
      id: 'security',
      icon: ShieldCheck,
      emoji: '🔐',
      title: 'Online security',
      tagline: 'PC protection, VPN & privacy',
      accentColor: '#22c55e'
    },
    {
      id: 'ai',
      icon: Bot,
      emoji: '🤖',
      title: 'AI tools',
      tagline: 'Optimization & AI suites',
      accentColor: '#a855f7'
    },
    {
      id: 'business',
      icon: Briefcase,
      emoji: '💼',
      title: 'Business software',
      tagline: 'SaaS, backup & productivity',
      accentColor: '#f59e0b'
    },
    {
      id: 'dev',
      icon: Rocket,
      emoji: '🚀',
      title: 'Developer tools',
      tagline: 'IDEs, benchmarks & API suites',
      accentColor: '#ec4899'
    }
  ];

  const recommendationsData = {
    website: {
      headline: 'Best Recommendations for Building & Hosting Your Website',
      description: 'Hand-picked solutions tested for 99.99% uptime, fast SSD load speeds, and beginner-friendly setups.',
      items: [
        {
          title: 'Best hosting for beginners',
          badge: 'Top Pick for 2026',
          rating: 9.8,
          desc: 'Ultra-fast SSD web hosting with free SSL certificate, 1-click installer, and 24/7 support.',
          link: '/reviews/best-pc-cleaner-2026',
          linkText: 'Read Full Review',
          isExternal: false,
          tag: 'Web Hosting'
        },
        {
          title: 'Best WordPress hosting',
          badge: 'High Performance',
          rating: 9.7,
          desc: 'Managed WordPress cloud servers with built-in caching, auto-updates, and staging environments.',
          link: '/blog/windows-11-running-slow-10-fixes',
          linkText: 'View Speed Guide',
          isExternal: false,
          tag: 'WordPress'
        },
        {
          title: 'Best website builders',
          badge: 'No Code Required',
          rating: 9.6,
          desc: 'Intuitive drag-and-drop website builders with responsive mobile templates and SEO tools.',
          link: '/reviews',
          linkText: 'Compare Builders',
          isExternal: false,
          tag: 'Site Builder'
        },
        {
          title: 'Best domain registrars',
          badge: 'Best Value',
          rating: 9.5,
          desc: 'Secure domain registration with free WHOIS privacy protection and custom DNS control.',
          link: '/problems/slow-internet-pc-optimization',
          linkText: 'DNS Setup Guide',
          isExternal: false,
          tag: 'Domain & DNS'
        }
      ]
    },
    cloud: {
      headline: 'Enterprise-Grade Cloud Infrastructure & VPS Solutions',
      description: 'High-speed cloud servers, scalable NVMe storage, and managed cloud deployments.',
      items: [
        {
          title: 'Best Cloud VPS Servers 2026',
          badge: 'Ultra Fast NVMe',
          rating: 9.9,
          desc: 'Dedicated cloud instances with scalable RAM, 10Gbps connectivity, and root administrator access.',
          link: '/reviews/wise-care-365-review',
          linkText: 'Benchmark Results',
          isExternal: false,
          tag: 'Cloud VPS'
        },
        {
          title: 'Top Cloud Storage Solutions',
          badge: 'Zero-Knowledge Security',
          rating: 9.7,
          desc: 'Encrypted cloud backup & file sync platforms designed for remote teams and system backups.',
          link: '/problems/c-drive-full-cleanup',
          linkText: 'Storage Guide',
          isExternal: false,
          tag: 'Cloud Backup'
        },
        {
          title: 'Managed Kubernetes Hosts',
          badge: 'DevOps Approved',
          rating: 9.6,
          desc: 'Container orchestrators with automated load balancing, auto-scaling, and high availability.',
          link: '/blogs/windows-11-24h2-update-performance-review',
          linkText: 'Performance Review',
          isExternal: false,
          tag: 'Kubernetes'
        },
        {
          title: 'Enterprise Cloud Migration',
          badge: 'Zero Downtime',
          rating: 9.4,
          desc: 'Step-by-step strategies to migrate legacy servers to modern cloud infrastructure seamlessly.',
          link: '/blogs/ssd-vs-hdd-optimization-guide-2026',
          linkText: 'Migration Checklist',
          isExternal: false,
          tag: 'Cloud Migration'
        }
      ]
    },
    security: {
      headline: 'Top-Rated PC Security, Registry Repair & Privacy Tools',
      description: 'Keep your computer free from malware, system crashes, privacy tracking, and registry corruption.',
      items: [
        {
          title: 'Best PC Cleaner & Security 2026',
          badge: 'Editor\'s Choice 🏆',
          rating: 9.9,
          desc: 'Wise Care 365 PRO — 1-click system tune-up, real-time protection, and deep junk file removal.',
          link: '/reviews/wise-care-365-review',
          linkText: 'Read Full Review',
          isExternal: false,
          tag: 'PC Security'
        },
        {
          title: 'Safe Registry Cleaner with Auto-Backup',
          badge: '100% Safe Test',
          rating: 9.7,
          desc: 'Wise Registry Cleaner — repairs broken keys, cleans invalid DLL pointers, and defrags registry hives.',
          link: '/guides/clean-registry-safely',
          linkText: 'Registry Safety Guide',
          isExternal: false,
          tag: 'Registry Repair'
        },
        {
          title: 'Top VPN & Privacy Shield Services',
          badge: 'Zero Log Guaranteed',
          rating: 9.6,
          desc: 'Encrypt your web connection, prevent ISP throttling, and bypass geographic content filters.',
          link: '/guides/disable-windows-telemetry-privacy',
          linkText: 'Privacy Guide',
          isExternal: false,
          tag: 'VPN & Privacy'
        },
        {
          title: 'Wise Data Recovery PRO',
          badge: 'High Recovery Rate',
          rating: 9.5,
          desc: 'Scan and recover lost documents, photos, and formatted hard drive partitions instantly.',
          link: '/problems/recover-deleted-files-guide',
          linkText: 'Data Recovery Guide',
          isExternal: false,
          tag: 'Data Recovery'
        }
      ]
    },
    ai: {
      headline: 'Cutting-Edge AI Tools for PC Optimization & Productivity',
      description: 'Discover AI-driven system tune-up engines, automated workflows, and smart developer assistants.',
      items: [
        {
          title: 'AI-Powered System Tune-up Engine',
          badge: 'Smart Diagnostics',
          rating: 9.8,
          desc: 'Autonomous machine learning algorithms that analyze background processes and prevent lag spikes.',
          link: '/blogs/pchealthlens-review-scan-score-restore',
          linkText: 'PCHealthLens Review',
          isExternal: false,
          tag: 'AI Optimization'
        },
        {
          title: 'Top AI Developer Assistants',
          badge: 'Productivity Booster',
          rating: 9.7,
          desc: 'Intelligent code completion engines that accelerate software development and automated testing.',
          link: '/guides/optimize-pc-for-gaming',
          linkText: 'Dev Setup Guide',
          isExternal: false,
          tag: 'AI Coding'
        },
        {
          title: 'AI Image & Media Generation Suites',
          badge: 'Creative Suite',
          rating: 9.6,
          desc: 'High-resolution generative AI models for creating web design assets, mockups, and visual content.',
          link: '/blogs/top-10-pc-performance-myths-debunked',
          linkText: 'Hardware Requirements',
          isExternal: false,
          tag: 'AI Media'
        },
        {
          title: 'AI Content & SEO Optimizers',
          badge: 'Search Traffic',
          rating: 9.5,
          desc: 'Real-time keyword analysis and content structuring tools to maximize search engine rankings.',
          link: '/blog',
          linkText: 'Explore SEO Blogs',
          isExternal: false,
          tag: 'AI SEO'
        }
      ]
    },
    business: {
      headline: 'Essential Business Software & Multi-PC Maintenance',
      description: 'Streamline team workflows, manage endpoint PC health, and protect company intellectual property.',
      items: [
        {
          title: 'Wise Care 365 Business Edition',
          badge: 'Multi-PC License',
          rating: 9.9,
          desc: 'Manage company PC fleet maintenance, enforce privacy sweeps, and speed up office computers.',
          link: '/reviews/best-pc-cleaner-2026',
          linkText: 'Read Business Review',
          isExternal: false,
          tag: 'Business IT'
        },
        {
          title: 'Enterprise File Recovery & Backup',
          badge: 'RAID & Server Support',
          rating: 9.7,
          desc: 'Comprehensive data backup and recovery software engineered for office servers and NAS units.',
          link: '/reviews/wise-data-recovery-review',
          linkText: 'Enterprise Review',
          isExternal: false,
          tag: 'Backup & Recovery'
        },
        {
          title: 'SaaS License & Expense Management',
          badge: 'Cost Optimizer',
          rating: 9.5,
          desc: 'Track software subscription usage across team accounts and eliminate duplicate recurring software bills.',
          link: '/problems/find-delete-duplicate-files',
          linkText: 'Cost Saving Tips',
          isExternal: false,
          tag: 'SaaS Manager'
        },
        {
          title: 'Uninstaller & Bloatware Purger',
          badge: 'Clean Office PCs',
          rating: 9.6,
          desc: 'Forcibly remove pre-installed bloatware toolbars and lingering trialware from corporate workstations.',
          link: '/problems/stubborn-program-uninstall',
          linkText: 'Uninstallation Guide',
          isExternal: false,
          tag: 'Endpoint Clean'
        }
      ]
    },
    dev: {
      headline: 'High-Performance Developer Tools & Workstation Tuning',
      description: 'Maximize compiler speeds, tune NVMe SSD read/write queues, and optimize local dev environments.',
      items: [
        {
          title: 'High-Speed Dev Workstation Tuning',
          badge: 'Maximum Throughput',
          rating: 9.9,
          desc: 'Tune Windows 11 kernel settings, disable memory page swapping, and allocate maximum RAM for Docker & IDEs.',
          link: '/blogs/how-to-fix-high-ram-usage-windows-11',
          linkText: 'RAM Tuning Guide',
          isExternal: false,
          tag: 'Workstation Setup'
        },
        {
          title: 'NVMe SSD vs SATA Benchmark Suite',
          badge: 'Storage Hardware',
          rating: 9.8,
          desc: 'Compare sequential read/write IOPS and TRIM commands for local database and code compilation speeds.',
          link: '/blogs/ssd-vs-hdd-optimization-guide-2026',
          linkText: 'SSD Optimization',
          isExternal: false,
          tag: 'Disk I/O'
        },
        {
          title: 'Windows System File Repair (SFC & DISM)',
          badge: 'Dev Environment Fix',
          rating: 9.7,
          desc: 'Repair broken environment variables, corrupt C++ runtimes, and system DLLs with 1-click commands.',
          link: '/guides/fix-corrupted-windows-system-files',
          linkText: 'Repair Tutorial',
          isExternal: false,
          tag: 'System Integrity'
        },
        {
          title: 'Gaming & High-Load GPU Optimization',
          badge: 'HAGS & Game Mode',
          rating: 9.6,
          desc: 'Unlock raw GPU compute performance for machine learning models, 3D rendering, and high-FPS gaming.',
          link: '/guides/optimize-pc-for-gaming',
          linkText: 'GPU Tuning Guide',
          isExternal: false,
          tag: 'GPU Compute'
        }
      ]
    }
  };

  const activeCategory = categories.find(c => c.id === activeCategoryId) || categories[0];
  const activeContent = recommendationsData[activeCategoryId];

  return (
    <section className="interactive-finder-section" style={{
      padding: '60px 0',
      background: 'radial-gradient(ellipse at 50% 0%, rgba(2, 132, 199, 0.12) 0%, rgba(15, 23, 42, 0) 70%)',
      borderTop: '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: '36px' }}>
          <div className="hero-badge mx-auto" style={{ marginBottom: '12px' }}>
            <Zap size={15} /> Interactive Recommendation Engine
          </div>
          <h2 style={{ fontSize: '2.3rem', fontWeight: '900', color: 'var(--color-primary)', marginBottom: '10px' }}>
            What are you looking for?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-muted)', maxWidth: '640px', margin: '0 auto' }}>
            Select what you need below to instantly reveal expert recommendations, benchmarks, and step-by-step guides.
          </p>
        </div>

        {/* Category Picker Tabs / Grid */}
        <div className="finder-category-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '14px',
          marginBottom: '36px'
        }}>
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategoryId(cat.id)}
                className={`finder-category-btn ${isActive ? 'active' : ''}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '18px 14px',
                  borderRadius: '16px',
                  backgroundColor: isActive ? 'var(--color-surface)' : 'rgba(30, 41, 59, 0.6)',
                  border: isActive ? `2px solid ${cat.accentColor}` : '1px solid var(--color-border)',
                  boxShadow: isActive ? `0 8px 24px ${cat.accentColor}33` : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  fontSize: '1.8rem',
                  marginBottom: '8px',
                  transform: isActive ? 'scale(1.15)' : 'scale(1)',
                  transition: 'transform 0.2s ease'
                }}>
                  {cat.emoji}
                </div>
                <div style={{
                  fontWeight: '700',
                  fontSize: '0.96rem',
                  color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
                  marginBottom: '4px'
                }}>
                  I need {cat.title.toLowerCase()}
                </div>
                <div style={{
                  fontSize: '0.76rem',
                  color: 'var(--color-muted)',
                  lineHeight: '1.2'
                }}>
                  {cat.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Recommendation Panel */}
        <div className="finder-recommendation-panel" style={{
          backgroundColor: 'var(--color-surface)',
          border: `1px solid ${activeCategory.accentColor}44`,
          borderRadius: '20px',
          padding: '32px',
          boxShadow: 'var(--shadow-lg)'
        }}>
          {/* Panel Top Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '24px',
            paddingBottom: '20px',
            borderBottom: '1px solid var(--color-border)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                fontSize: '2rem',
                backgroundColor: `${activeCategory.accentColor}18`,
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1px solid ${activeCategory.accentColor}44`
              }}>
                {activeCategory.emoji}
              </div>
              <div>
                <span style={{
                  fontSize: '0.78rem',
                  fontWeight: '800',
                  color: activeCategory.accentColor,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}>
                  Selected Category: {activeCategory.title}
                </span>
                <h3 style={{ margin: '4px 0 0', fontSize: '1.45rem', fontWeight: '800', color: 'var(--color-primary)' }}>
                  {activeContent.headline}
                </h3>
              </div>
            </div>
            <div style={{
              fontSize: '0.85rem',
              color: 'var(--color-muted)',
              backgroundColor: 'var(--color-subsurface)',
              padding: '6px 14px',
              borderRadius: '20px',
              border: '1px solid var(--color-border)'
            }}>
              Showing 4 Hand-Picked Recommendations
            </div>
          </div>

          {/* Panel Recommendation Grid */}
          <div className="finder-items-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '20px'
          }}>
            {activeContent.items.map((item, idx) => (
              <div key={idx} className="recommendation-item-card" style={{
                backgroundColor: 'var(--color-subsurface)',
                border: '1px solid var(--color-border)',
                borderRadius: '16px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: '800',
                      backgroundColor: `${activeCategory.accentColor}18`,
                      color: activeCategory.accentColor,
                      padding: '3px 8px',
                      borderRadius: '6px',
                      border: `1px solid ${activeCategory.accentColor}33`
                    }}>
                      {item.tag}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.82rem', color: '#f59e0b', fontWeight: '700' }}>
                      <Star size={13} fill="#f59e0b" /> {item.rating}
                    </div>
                  </div>

                  <h4 style={{ fontSize: '1.08rem', fontWeight: '700', color: 'var(--color-primary)', margin: '0 0 8px 0', lineHeight: '1.3' }}>
                    {item.title}
                  </h4>

                  <p style={{ fontSize: '0.88rem', color: 'var(--color-muted)', margin: '0 0 16px 0', lineHeight: '1.5' }}>
                    {item.desc}
                  </p>
                </div>

                <Link
                  to={item.link}
                  className="btn btn-outline btn-sm"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    borderRadius: '10px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    gap: '6px'
                  }}
                >
                  {item.linkText} <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
