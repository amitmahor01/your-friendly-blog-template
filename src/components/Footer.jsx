import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, textAlign: 'center', borderTop: 1, borderColor: 'divider', mt: 4 }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Your Friendly Blog Template &mdash; <Link href="/privacy">Privacy</Link>
      </Typography>
    </Box>
  );
} 