import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Privacy() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>Privacy Policy</Typography>
      <Typography variant="body1">This is the Privacy Policy page. Add your privacy policy here.</Typography>
    </Container>
  );
} 