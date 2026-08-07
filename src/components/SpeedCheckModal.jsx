import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ShieldAlert, Cpu, HardDrive, Zap, CheckCircle2 } from 'lucide-react';
import { AFFILIATE_CONFIG } from '../config/affiliate';

export default function SpeedCheckModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    os: 'windows11',
    symptom: 'startup',
    storage: 'over75'
  });
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);

  if (!isOpen) return null;

  const handleStartScan = () => {
    setScanning(true);
    let p = 0;
    const interval = setInterval(() => {
      p += 15;
      if (p >= 100) {
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setScanning(false);
          setStep(3);
        }, 500);
      } else {
        setProgress(p);
      }
    }, 250);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {step === 1 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Zap size={24} color="var(--color-accent)" />
              <h3 style={{ fontSize: '1.4rem', margin: 0 }}>Free PC Performance Speed Check</h3>
            </div>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
              Answer 3 quick questions about your Windows system to identify potential memory leaks, startup bottlenecks, and junk file accumulation.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
              <div>
                <label style={{ fontWeight: '600', fontSize: '0.9rem', display: 'block', marginBottom: '6px' }}>1. What operating system are you using?</label>
                <select 
                  value={answers.os} 
                  onChange={(e) => setAnswers({ ...answers, os: e.target.value })}
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)' }}
                >
                  <option value="windows11">Windows 11 (64-bit)</option>
                  <option value="windows10">Windows 10 (64-bit/32-bit)</option>
                  <option value="windows8">Windows 8 / 8.1</option>
                  <option value="windows7">Windows 7</option>
                </select>
              </div>

              <div>
                <label style={{ fontWeight: '600', fontSize: '0.9rem', display: 'block', marginBottom: '6px' }}>2. What is your primary system issue?</label>
                <select 
                  value={answers.symptom} 
                  onChange={(e) => setAnswers({ ...answers, symptom: e.target.value })}
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)' }}
                >
                  <option value="startup">Boot up / Startup takes over 45 seconds</option>
                  <option value="freezing">PC freezes or stutters during multitasking</option>
                  <option value="diskfull">C Drive is full & low on space</option>
                  <option value="fan">Laptop fans spin loud / High CPU usage</option>
                </select>
              </div>
            </div>

            <button 
              onClick={() => { setStep(2); handleStartScan(); }}
              className="btn btn-primary btn-lg" 
              style={{ width: '100%' }}
            >
              Analyze PC Performance Now
            </button>
          </div>
        )}

        {step === 2 && scanning && (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <Zap size={44} color="var(--color-accent)" className="animate-spin" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Scanning Windows System Indices...</h3>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
              Checking registry pointers, startup entries, and temporary cache footprint...
            </p>
            
            <div style={{ width: '100%', height: '10px', backgroundColor: 'var(--color-subsurface)', borderRadius: '5px', overflow: 'hidden' }}>
              <div style={{ width: `${progress}%`, height: '100%', backgroundColor: 'var(--color-accent)', transition: 'width 0.2s ease' }} />
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-muted)', marginTop: '8px', display: 'block' }}>{progress}% Complete</span>
          </div>
        )}

        {step === 3 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#eab308', marginBottom: '12px' }}>
              <ShieldAlert size={28} />
              <h3 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--color-primary)' }}>System Diagnostic Report</h3>
            </div>

            <div style={{ backgroundColor: 'rgba(234, 179, 8, 0.1)', border: '1px solid rgba(234, 179, 8, 0.3)', padding: '16px', borderRadius: '12px', marginBottom: '20px' }}>
              <div style={{ fontWeight: '700', fontSize: '1.1rem', color: '#ca8a04', marginBottom: '4px' }}>
                Estimated PC Health Score: 58 / 100 (Sub-optimal)
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text)', margin: 0 }}>
                We detected approximately <strong>14.2 GB of temporary junk</strong>, <strong>412 invalid registry keys</strong>, and <strong>12 slow startup items</strong> slowing down your {answers.os.toUpperCase()} installation.
              </p>
            </div>

            <h4 style={{ fontSize: '1rem', marginBottom: '10px' }}>Recommended Resolution:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--color-success)" />
                Purge temporary Windows installation & browser caches
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--color-success)" />
                Repair invalid registry entries with auto-backup protection
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--color-success)" />
                Disable background startup apps to restore fast boot times
              </div>
            </div>

            <Link 
              to="/reviews/wise-care-365-review"
              onClick={onClose}
              className="btn btn-primary btn-lg"
              style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              Read Wise Care 365 Optimization Review
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
