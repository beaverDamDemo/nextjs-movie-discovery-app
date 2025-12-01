'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import styles from './themeToggle.module.css';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // this is solution for flickering from light to dark theme on load
  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`${styles.toggle} ${theme === 'dark' ? styles.dark : styles.light}`}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <div className={styles.knob}>{theme === 'light' ? '☀️' : '🌙'}</div>
    </div>
  );
}
