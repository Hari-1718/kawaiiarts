import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  // Simple accent palettes to recolor the project consistently
  const ACCENTS = {
    purple: {
      accent: '#a855f7',
      hover: '#c084fc',
      navbarBrand: '#7c3aed',
      bgNavbarLight: 'linear-gradient(135deg, #f3e8ff, #e9d5ff)',
      bgNavbarDark: 'linear-gradient(135deg, #1e1b4b, #312e81)'
    },
    blue: {
      accent: '#3b82f6',
      hover: '#60a5fa',
      navbarBrand: '#1d4ed8',
      bgNavbarLight: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
      bgNavbarDark: 'linear-gradient(135deg, #1e3a8a, #1e40af)'
    },
    indigo: {
      accent: '#6366f1',
      hover: '#818cf8',
      navbarBrand: '#4338ca',
      bgNavbarLight: 'linear-gradient(135deg, #e0e7ff, #c7d2fe)',
      bgNavbarDark: 'linear-gradient(135deg, #3730a3, #4338ca)'
    },
    violet: {
      accent: '#8b5cf6',
      hover: '#a78bfa',
      navbarBrand: '#6d28d9',
      bgNavbarLight: 'linear-gradient(135deg, #ede9fe, #ddd6fe)',
      bgNavbarDark: 'linear-gradient(135deg, #4c1d95, #5b21b6)'
    },
    emerald: {
      accent: '#10b981',
      hover: '#34d399',
      navbarBrand: '#047857',
      bgNavbarLight: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
      bgNavbarDark: 'linear-gradient(135deg, #064e3b, #065f46)'
    },
    green: {
      accent: '#22c55e',
      hover: '#4ade80',
      navbarBrand: '#15803d',
      bgNavbarLight: 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
      bgNavbarDark: 'linear-gradient(135deg, #14532d, #166534)'
    },
    teal: {
      accent: '#14b8a6',
      hover: '#2dd4bf',
      navbarBrand: '#0f766e',
      bgNavbarLight: 'linear-gradient(135deg, #ccfbf1, #99f6e4)',
      bgNavbarDark: 'linear-gradient(135deg, #115e59, #134e4a)'
    },
    cyan: {
      accent: '#06b6d4',
      hover: '#22d3ee',
      navbarBrand: '#0e7490',
      bgNavbarLight: 'linear-gradient(135deg, #cffafe, #a5f3fc)',
      bgNavbarDark: 'linear-gradient(135deg, #155e75, #164e63)'
    },
    sky: {
      accent: '#0ea5e9',
      hover: '#38bdf8',
      navbarBrand: '#0369a1',
      bgNavbarLight: 'linear-gradient(135deg, #e0f2fe, #bae6fd)',
      bgNavbarDark: 'linear-gradient(135deg, #075985, #0c4a6e)'
    },
    amber: {
      accent: '#f59e0b',
      hover: '#fbbf24',
      navbarBrand: '#b45309',
      bgNavbarLight: 'linear-gradient(135deg, #fef3c7, #fde68a)',
      bgNavbarDark: 'linear-gradient(135deg, #7c2d12, #92400e)'
    },
    orange: {
      accent: '#f97316',
      hover: '#fb923c',
      navbarBrand: '#c2410c',
      bgNavbarLight: 'linear-gradient(135deg, #ffedd5, #fed7aa)',
      bgNavbarDark: 'linear-gradient(135deg, #7c2d12, #9a3412)'
    },
    red: {
      accent: '#ef4444',
      hover: '#f87171',
      navbarBrand: '#b91c1c',
      bgNavbarLight: 'linear-gradient(135deg, #fee2e2, #fecaca)',
      bgNavbarDark: 'linear-gradient(135deg, #7f1d1d, #991b1b)'
    },
    lime: {
      accent: '#84cc16',
      hover: '#a3e635',
      navbarBrand: '#4d7c0f',
      bgNavbarLight: 'linear-gradient(135deg, #ecfccb, #d9f99d)',
      bgNavbarDark: 'linear-gradient(135deg, #3f6212, #365314)'
    },
    pink: {
      accent: '#ec4899',
      hover: '#f472b6',
      navbarBrand: '#be185d',
      bgNavbarLight: 'linear-gradient(135deg, #fce7f3, #fbcfe8)',
      bgNavbarDark: 'linear-gradient(135deg, #831843, #9d174d)'
    },
    rose: {
      accent: '#e11d48',
      hover: '#fb7185',
      navbarBrand: '#be123c',
      bgNavbarLight: 'linear-gradient(135deg, #ffe4e6, #fecdd3)',
      bgNavbarDark: 'linear-gradient(135deg, #881337, #9f1239)'
    }
  };

  const [accentKey, setAccentKey] = useState(() => {
    return localStorage.getItem('accentKey') || 'purple';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Apply accent palette whenever mode or accentKey changes
  useEffect(() => {
    const root = document.documentElement;
    const p = ACCENTS[accentKey] || ACCENTS.purple;
    root.style.setProperty('--accent-color', p.accent);
    root.style.setProperty('--accent-hover', p.hover);
    root.style.setProperty('--hover-blue', p.hover);
    root.style.setProperty('--navbar-brand', p.navbarBrand);
    root.style.setProperty('--brand-color', 'var(--navbar-brand)');
    root.style.setProperty('--bg-navbar', isDark ? p.bgNavbarDark : p.bgNavbarLight);
    localStorage.setItem('accentKey', accentKey);
  }, [accentKey, isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, accentKey, setAccentKey }}>
      {children}
    </ThemeContext.Provider>
  );
}; 