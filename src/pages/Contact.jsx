import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { Mail, MapPin, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="container" style={{ padding: '40px 20px 80px' }}>
      <Breadcrumbs items={[{ label: "Contact Us" }]} />

      {/* Hero Section */}
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
        <div className="hero-badge" style={{ display: 'inline-flex', marginBottom: '16px' }}>
          <Mail size={14} /> SUPPORT DESK
        </div>
        <h1 style={{ fontSize: '2.8rem', fontWeight: '800', lineHeight: '1.2', margin: '0 0 16px' }}>
          Get in Touch with Nexuinfra
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-muted)', lineHeight: '1.6', margin: 0 }}>
          Have questions about a software review, advertisement inquiries, or coupon codes? Fill out the form below.
        </p>
      </div>

      {/* Main 2-Column Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'start' }}>
        
        {/* Left Column: Contact Info */}
        <div>
          <h2 style={{ fontSize: '2.1rem', fontWeight: '800', marginBottom: '16px' }}>Contact Information</h2>
          <p style={{ color: 'var(--color-muted)', fontSize: '1rem', lineHeight: '1.65', marginBottom: '36px' }}>
            Our support desk audits submissions daily. For advertising partnerships or coupon adjustments, please choose the corresponding dropdown item in the form.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            
            {/* Item 1: Email */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ 
                width: '44px', 
                height: '44px', 
                borderRadius: '10px', 
                backgroundColor: 'rgba(56, 189, 248, 0.1)', 
                border: '1px solid rgba(56, 189, 248, 0.2)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: '#38bdf8', 
                flexShrink: 0 
              }}>
                <Mail size={20} />
              </div>
              <div>
                <div style={{ fontWeight: '700', fontSize: '1.05rem', color: 'var(--color-primary)', marginBottom: '4px' }}>
                  Email Support
                </div>
                <div style={{ color: '#38bdf8', fontSize: '0.95rem', fontWeight: '500' }}>
                  support@nexuinfra.com
                </div>
              </div>
            </div>

            {/* Item 2: Corporate Headquarters */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ 
                width: '44px', 
                height: '44px', 
                borderRadius: '10px', 
                backgroundColor: 'rgba(56, 189, 248, 0.1)', 
                border: '1px solid rgba(56, 189, 248, 0.2)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: '#38bdf8', 
                flexShrink: 0 
              }}>
                <MapPin size={20} />
              </div>
              <div>
                <div style={{ fontWeight: '700', fontSize: '1.05rem', color: 'var(--color-primary)', marginBottom: '4px' }}>
                  Corporate Headquarters
                </div>
                <div style={{ color: 'var(--color-muted)', fontSize: '0.92rem', lineHeight: '1.5' }}>
                  KOHIYA POST RADOLI<br />
                  TH. KOTKHAWDA DIST. JAIPUR 303908<br />
                  <span style={{ color: '#38bdf8', fontWeight: '600' }}>RAJASTHAN, INDIA</span>
                </div>
              </div>
            </div>

            {/* Item 3: Encryption Assurance */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ 
                width: '44px', 
                height: '44px', 
                borderRadius: '10px', 
                backgroundColor: 'rgba(56, 189, 248, 0.1)', 
                border: '1px solid rgba(56, 189, 248, 0.2)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: '#38bdf8', 
                flexShrink: 0 
              }}>
                <ShieldCheck size={20} />
              </div>
              <div>
                <div style={{ fontWeight: '700', fontSize: '1.05rem', color: 'var(--color-primary)', marginBottom: '4px' }}>
                  Encryption Assurance
                </div>
                <div style={{ color: 'var(--color-muted)', fontSize: '0.88rem', lineHeight: '1.55' }}>
                  All contact submissions are encrypted end-to-end through our secure endpoint API.
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Contact Form Card */}
        <div style={{ 
          backgroundColor: 'var(--color-surface)', 
          border: '1px solid var(--color-border)', 
          borderRadius: 'var(--radius-lg)', 
          padding: '36px',
          boxShadow: 'var(--shadow-md)'
        }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ 
                width: '56px', 
                height: '56px', 
                borderRadius: '50%', 
                backgroundColor: 'rgba(22, 163, 74, 0.15)', 
                color: '#22c55e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <CheckCircle2 size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '10px' }}>Message Received!</h3>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.98rem', lineHeight: '1.6' }}>
                Thank you for reaching out to Nexuinfra. Our support engineering desk will review your inquiry and respond within 24 hours.
              </p>
              <button 
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' }); }}
                className="btn btn-secondary" 
                style={{ marginTop: '24px' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              
              {/* Row 1: Name & Email */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', marginBottom: '8px', color: 'var(--color-primary)' }}>
                    Full Name <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border)',
                      backgroundColor: 'var(--color-subsurface)',
                      color: 'var(--color-text)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', marginBottom: '8px', color: 'var(--color-primary)' }}>
                    Email Address <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border)',
                      backgroundColor: 'var(--color-subsurface)',
                      color: 'var(--color-text)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Row 2: Inquiry Subject */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', marginBottom: '8px', color: 'var(--color-primary)' }}>
                  Inquiry Subject <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <select 
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    backgroundColor: 'var(--color-subsurface)',
                    color: 'var(--color-text)',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Advertising & Partnerships">Advertising & Partnerships</option>
                  <option value="Coupon / Deal Correction">Coupon / Deal Correction</option>
                  <option value="Software Review Request">Software Review Request</option>
                  <option value="Technical Support">Technical Support</option>
                </select>
              </div>

              {/* Row 3: Message Details */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', marginBottom: '8px', color: 'var(--color-primary)' }}>
                  Message Details <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <textarea 
                  rows={5}
                  placeholder="Describe your inquiry in detail..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    backgroundColor: 'var(--color-subsurface)',
                    color: 'var(--color-text)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ 
                  width: '100%', 
                  padding: '14px 24px', 
                  fontSize: '1rem', 
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <Send size={18} /> Submit Message
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
