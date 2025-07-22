import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function About() {
  return (
    <Container maxWidth="xl" sx={{ py: 2, backgroundColor: 'transparent',}}>
      <Card>
        <CardContent>
          <Grid container spacing={4} alignItems="flex-start" sx={{ width: '100%' }}>
            {/* Left: Profile & Intro */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar
                  alt="Ben Doe"
                  src="/avatar.png"
                  sx={{ width: 96, height: 96, mb: 2, boxShadow: 2 }}
                />
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Ben Doe
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" align="center">
                  Web Creator & Blogger
                </Typography>
                <Box mt={2}>
                  <Typography variant="body2" color="text.secondary" align="center">
                    "Building ideas, sharing stories, and exploring the web."
                  </Typography>
                </Box>
              </Box>
            </Grid>
            {/* Right: Bio & Highlights */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                About Me
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Hi there! I'm Ben Doe, a passionate web developer and writer who loves to turn ideas into digital experiences. I enjoy working with modern web technologies, writing about my journey, and connecting with fellow creators.
              </Typography>
              <Box mt={2}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Highlights
                </Typography>
                <ul style={{ margin: 0, paddingLeft: 20 }}>
                  <li><Typography variant="body2">🌐 5+ years building web apps and blogs</Typography></li>
                  <li><Typography variant="body2">✍️ Published 100+ articles on web development</Typography></li>
                  <li><Typography variant="body2">🎨 Enthusiast in UI/UX and design systems</Typography></li>
                  <li><Typography variant="body2">🤝 Loves open source and community events</Typography></li>
                </ul>
              </Box>
              <Box mt={3}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Get in Touch
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Want to collaborate or chat? Reach out via the contact page!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
} 