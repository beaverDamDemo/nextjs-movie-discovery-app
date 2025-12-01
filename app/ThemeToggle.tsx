'use client';

import { useEffect, useState } from 'react';
import styles from './themeToggle.module.css';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      const initial = prefersDark ? 'dark' : 'light';
      setTheme(initial);
      document.documentElement.setAttribute('data-theme', initial);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div
      className={`${styles.toggle} ${theme === 'dark' ? styles.dark : styles.light}`}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <div className={styles.knob}>{theme === 'light' ? '☀️' : '🌙'}</div>
    </div>
  );
}
