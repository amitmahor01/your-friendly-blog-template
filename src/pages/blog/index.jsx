import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Blog() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>Blog</Typography>
      <Typography variant="body1">This is the Blog listing page. Blog posts will appear here.</Typography>
    </Container>
  );
} 