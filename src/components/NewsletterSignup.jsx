import { useState } from 'react';
import { Box, Typography, TextField, Button, Container, Paper, Alert } from '@mui/material';
import { Email, Send } from '@mui/icons-material';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // 'success', 'error', or ''

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      return;
    }
    
    // Simulate API call
    setStatus('success');
    setEmail('');
    
    // Reset status after 3 seconds
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <Box sx={{ py: 8, bgcolor: 'primary.main', color: 'white' }}>
      <Container maxWidth="md">
        <Paper
          elevation={8}
          sx={{
            p: 6,
            textAlign: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background decoration */}
          <Box
            sx={{
              position: 'absolute',
              top: -50,
              right: -50,
              width: 200,
              height: 200,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: -30,
              left: -30,
              width: 150,
              height: 150,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
            }}
          />
          
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Email sx={{ fontSize: 60, mb: 3, opacity: 0.9 }} />
            
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              Stay Updated
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                opacity: 0.9,
                maxWidth: '500px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Subscribe to our newsletter and never miss out on the latest posts, 
              insights, and updates from our blog.
            </Typography>
            
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                maxWidth: '500px',
                mx: 'auto',
                alignItems: 'center',
              }}
            >
              <TextField
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  flexGrow: 1,
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'rgba(255,255,255,0.9)',
                    borderRadius: 2,
                    '& fieldset': {
                      borderColor: 'transparent',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255,255,255,0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: '#333',
                    '&::placeholder': {
                      color: '#666',
                      opacity: 1,
                    },
                  },
                }}
                size="large"
              />
              
              <Button
                type="submit"
                variant="contained"
                size="large"
                endIcon={<Send />}
                sx={{
                  bgcolor: '#FFD700',
                  color: '#333',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 2,
                  minWidth: { xs: '100%', sm: 'auto' },
                  '&:hover': {
                    bgcolor: '#FFC700',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Subscribe
              </Button>
            </Box>
            
            {status === 'success' && (
              <Alert
                severity="success"
                sx={{
                  mt: 3,
                  bgcolor: 'rgba(76, 175, 80, 0.9)',
                  color: 'white',
                  '& .MuiAlert-icon': {
                    color: 'white',
                  },
                }}
              >
                Thank you for subscribing! You'll receive our updates soon.
              </Alert>
            )}
            
            {status === 'error' && (
              <Alert
                severity="error"
                sx={{
                  mt: 3,
                  bgcolor: 'rgba(244, 67, 54, 0.9)',
                  color: 'white',
                  '& .MuiAlert-icon': {
                    color: 'white',
                  },
                }}
              >
                Please enter a valid email address.
              </Alert>
            )}
            
            <Typography
              variant="body2"
              sx={{
                mt: 3,
                opacity: 0.8,
                fontSize: '0.9rem'
              }}
            >
              We respect your privacy. Unsubscribe at any time.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
} 