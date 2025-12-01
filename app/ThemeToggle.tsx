'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="ml-4 px-3 py-2 rounded cursor-pointer"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
