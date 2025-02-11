// app/components/ThemeProvider.tsx
'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'white-green' | 'blue-green';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('white-green');

  useEffect(() => {
    // Remove existing theme classes
    document.documentElement.classList.remove('white-green', 'blue-green');
    // Add new theme class
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'white-green' ? 'blue-green' : 'white-green');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        {children}
        <button 
          onClick={toggleTheme}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
            padding: '10px',
            borderRadius: '50%',
            border: 'none',
            background: 'var(--primary)',
            color: 'white',
            cursor: 'pointer',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
          }}
        >
          {theme === 'white-green' ? '🌙' : '☀️'}
        </button>
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};