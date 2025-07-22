import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
];

export default function Header() {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link href="/" passHref legacyBehavior>
            <Button color="inherit" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
              Blog
            </Button>
          </Link>
        </Box>
        {navLinks.map(({ label, href }) => (
          <Link key={href} href={href} passHref legacyBehavior>
            <Button color="inherit" sx={{ mx: 1 }}>
              {label}
            </Button>
          </Link>
        ))}
        <Box sx={{ ml: 2 }}>
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
} 