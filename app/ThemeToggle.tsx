'use client';

import { useEffect, useState } from 'react';
import styles from './themeToggle.module.css';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
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
