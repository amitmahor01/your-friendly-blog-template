import { Box, Typography, Grid, Container, Paper } from '@mui/material';
import { Article, People, TrendingUp, Star } from '@mui/icons-material';
import { useState, useEffect } from 'react';

const stats = [
  {
    icon: Article,
    number: 150,
    label: "Articles Published",
    description: "Quality content that educates and inspires"
  },
  {
    icon: People,
    number: 5000,
    label: "Happy Readers",
    description: "Growing community of engaged readers"
  },
  {
    icon: TrendingUp,
    number: 98,
    label: "Success Rate",
    description: "Consistent delivery of valuable insights"
  },
  {
    icon: Star,
    number: 4.9,
    label: "Average Rating",
    description: "Rated highly by our community"
  }
];

function AnimatedCounter({ end, duration = 2000, decimals = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const start = 0;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const current = start + (end - start) * progress;
      setCount(parseFloat(current.toFixed(decimals)));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, decimals]);

  return count;
}

export default function StatsSection() {
  return (
    <Box sx={{ py: 8, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mb: 2,
              color: 'text.primary'
            }}
          >
            Why Choose Our Blog?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            We're committed to delivering high-quality content that makes a difference
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={3}
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)'
            },
            gap: 3
          }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Box key={index}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '280px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      color: 'white',
                      mb: 3,
                      mx: 'auto'
                    }}
                  >
                    <IconComponent sx={{ fontSize: 40 }} />
                  </Box>
                  
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      color: 'primary.main',
                      fontSize: { xs: '2rem', md: '2.5rem' }
                    }}
                  >
                    {stat.label === "Average Rating" ? (
                      <AnimatedCounter end={stat.number} decimals={1} />
                    ) : (
                      <AnimatedCounter end={stat.number} />
                    )}
                    {stat.label === "Success Rate" && "%"}
                  </Typography>
                  
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: 'text.primary',
                      fontSize: { xs: '1rem', md: '1.1rem' }
                    }}
                  >
                    {stat.label}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ 
                      lineHeight: 1.6,
                      fontSize: { xs: '0.9rem', md: '1rem' }
                    }}
                  >
                    {stat.description}
                  </Typography>
                </Paper>
              </Box>
            );
          })}
        </Grid>

        {/* Additional features section */}
        <Box sx={{ mt: 8, pt: 8, borderTop: '1px solid', borderColor: 'grey.200' }}>
          <Grid 
            container 
            spacing={6}
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)'
              },
              gap: 6,
              alignItems: 'center'
            }}
          >
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: 'text.primary',
                  fontSize: { xs: '2rem', md: '2.5rem' }
                }}
              >
                Built for Modern Readers
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                {[
                  "📱 Mobile-first responsive design",
                  "🎨 Beautiful, clean typography",
                  "⚡ Fast loading and optimized",
                  "🔍 SEO-friendly structure",
                  "🌙 Dark mode support",
                  "📧 Newsletter integration"
                ].map((feature, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                      fontSize: '1.1rem',
                      color: 'text.secondary'
                    }}
                  >
                    <Typography variant="body1" sx={{ ml: 1 }}>
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            
            <Box>
              <Box
                sx={{
                  position: 'relative',
                  height: 400,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  overflow: 'hidden',
                }}
              >
                {/* Background decoration */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -100,
                    right: -100,
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -50,
                    left: -50,
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                  }}
                />
                
                <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
                    Ready to Get Started?
                  </Typography>
                  <Typography variant="h6" sx={{ opacity: 0.9 }}>
                    Join thousands of readers who trust our content
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
} 