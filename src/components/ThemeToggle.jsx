import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <Tooltip title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
      <IconButton
        onClick={toggleTheme}
        color="inherit"
        sx={{ ml: 1, transition: 'transform 0.15s', '&:active': { transform: 'scale(0.9)' }, '&:hover': { backgroundColor: 'rgba(0,0,0,0.08)' } }}
        aria-label="Toggle theme"
      >
        <span key={theme} className="slide-in-x text-lg block">
          {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </span>
      </IconButton>
    </Tooltip>
  );
} 