import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const PALETTE = [
  { key: 'purple', color: '#a855f7', label: 'Purple' },
  { key: 'indigo', color: '#6366f1', label: 'Indigo' },
  { key: 'violet', color: '#8b5cf6', label: 'Violet' },
  { key: 'blue', color: '#3b82f6', label: 'Blue' },
  { key: 'sky', color: '#0ea5e9', label: 'Sky' },
  { key: 'cyan', color: '#06b6d4', label: 'Cyan' },
  { key: 'teal', color: '#14b8a6', label: 'Teal' },
  { key: 'emerald', color: '#10b981', label: 'Emerald' },
  { key: 'green', color: '#22c55e', label: 'Green' },
  { key: 'lime', color: '#84cc16', label: 'Lime' },
  { key: 'amber', color: '#f59e0b', label: 'Amber' },
  { key: 'orange', color: '#f97316', label: 'Orange' },
  { key: 'red', color: '#ef4444', label: 'Red' },
  { key: 'rose', color: '#e11d48', label: 'Rose' },
  { key: 'pink', color: '#ec4899', label: 'Pink' },
];

const ThemeColorPicker = () => {
  const { accentKey, setAccentKey } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={() => setOpen(v => !v)}
        aria-label="Change theme color"
        title="Change theme color"
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-color)'
        }}
      >
        {/* Palette Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a10 10 0 1 1 10-10c0 2.21-1.79 4-4 4h-1a2 2 0 0 0-2 2 4 4 0 0 1-4 4z" />
          <circle cx="7.5" cy="10.5" r="1.5" />
          <circle cx="12" cy="7.5" r="1.5" />
          <circle cx="16.5" cy="10.5" r="1.5" />
        </svg>
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Theme colors"
          style={{
            position: 'absolute',
            right: 0,
            marginTop: 8,
            background: 'var(--card-bg)',
            border: '1px solid rgba(0,0,0,0.08)',
            boxShadow: '0 8px 24px var(--shadow-soft)',
            borderRadius: 12,
            padding: 10,
            zIndex: 1200
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 28px)', gap: 10 }}>
            {PALETTE.map(p => (
              <button
                key={p.key}
                aria-label={p.label}
                title={p.label}
                onClick={() => setAccentKey(p.key)}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  background: p.color,
                  border: p.key === accentKey ? '3px solid var(--text-color)' : '2px solid rgba(0,0,0,0.12)',
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeColorPicker;
