import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import { 
  Email, 
  LinkedIn, 
  GitHub, 
  Twitter, 
  Phone,
  LocationOn,
  Schedule,
  Send,
  Business,
  Person,
  Subject,
  Message
} from '@mui/icons-material';
import Link from 'next/link';

export default function Contact() {
  const contactMethods = [
    {
      icon: Email,
      title: "Email",
      value: "ben@example.com",
      description: "Send me an email anytime",
      action: "mailto:ben@example.com",
      color: "#1976d2"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Call me during business hours",
      action: "tel:+15551234567",
      color: "#2e7d32"
    },
    {
      icon: LinkedIn,
      title: "LinkedIn",
      value: "linkedin.com/in/bendoe",
      description: "Connect with me professionally",
      action: "https://linkedin.com/in/bendoe",
      color: "#0077b5"
    },
    {
      icon: Twitter,
      title: "Twitter",
      value: "@bendoe",
      description: "Follow me for updates",
      action: "https://twitter.com/bendoe",
      color: "#1DA1F2"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const responseTime = [
    { type: "Email", time: "Within 24 hours" },
    { type: "Phone", time: "Same day" },
    { type: "Social Media", time: "Within 2-3 hours" }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      py: { xs: 3, md: 6 }
    }}>
      <Container maxWidth="xl">
        {/* Hero Section */}
        <Grid container justifyContent="center" sx={{ mb: { xs: 4, md: 8 } }}>
          <Grid size={{ xs: 12, md: 10, lg: 8 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' },
                  fontWeight: 800,
                  mb: { xs: 2, md: 3 },
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.02em',
                }}
              >
                Get in Touch
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '700px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontWeight: 400,
                  mb: 2,
                  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
                }}
              >
                I'd love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out.
              </Typography>
              <Divider sx={{ 
                width: '100px', 
                mx: 'auto', 
                borderColor: 'primary.main',
                borderWidth: 2,
                mt: 3
              }} />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          {/* Contact Form Section */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Card
              elevation={8}
              sx={{
                p: { xs: 3, md: 5 },
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: 3,
                height: '100%',
                '&:hover': {
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              <Grid container alignItems="center" sx={{ mb: 4 }}>
                <Grid size="auto">
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: { xs: 50, md: 60 },
                      height: { xs: 50, md: 60 },
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      color: 'white',
                      mr: { xs: 2, md: 3 },
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                    }}
                  >
                    <Send sx={{ fontSize: { xs: 24, md: 30 } }} />
                  </Box>
                </Grid>
                <Grid size="auto" sx={{ flexGrow: 1 }}>
                  <Typography variant="h3" fontWeight="bold" sx={{ 
                    letterSpacing: '-0.01em',
                    fontSize: { xs: '1.5rem', md: '2.125rem' }
                  }}>
                    Send a Message
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                {/* Name Field */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    variant="outlined"
                    required
                    InputProps={{
                      startAdornment: (
                        <Person sx={{ mr: 1, color: 'text.secondary' }} />
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                </Grid>

                {/* Email Field */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    required
                    InputProps={{
                      startAdornment: (
                        <Email sx={{ mr: 1, color: 'text.secondary' }} />
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                </Grid>

                {/* Subject Field */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    required
                    InputProps={{
                      startAdornment: (
                        <Subject sx={{ mr: 1, color: 'text.secondary' }} />
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                </Grid>

                {/* Project Type Field */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Project Type</InputLabel>
                    <Select
                      label="Project Type"
                      startAdornment={
                        <Business sx={{ mr: 1, color: 'text.secondary' }} />
                      }
                    >
                      <MenuItem value="web-development">Web Development</MenuItem>
                      <MenuItem value="consultation">Consultation</MenuItem>
                      <MenuItem value="collaboration">Collaboration</MenuItem>
                      <MenuItem value="freelance">Freelance Work</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Message Field */}
                <Grid size={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={6}
                    variant="outlined"
                    required
                    placeholder="Tell me about your project or how I can help you..."
                    InputProps={{
                      startAdornment: (
                        <Message sx={{ mr: 1, color: 'text.secondary', mt: 1 }} />
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                </Grid>

                {/* Submit Button */}
                <Grid size={12}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<Send />}
                      sx={{
                        px: 5,
                        py: 2,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        boxShadow: '0 8px 24px rgba(102, 126, 234, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 12px 32px rgba(102, 126, 234, 0.4)',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          {/* Contact Information Section - Compact */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Card
              elevation={8}
              sx={{
                p: { xs: 3, md: 4 },
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: 3,
                height: '100%',
                '&:hover': {
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ 
                mb: 3,
                fontSize: { xs: '1.25rem', md: '1.75rem' }
              }}>
                Contact Information
              </Typography>
              
              <Grid container spacing={2}>
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <Grid size={12} key={index}>
                      <Link href={method.action} style={{ textDecoration: 'none' }}>
                        <Paper
                          elevation={1}
                          sx={{
                            p: 2,
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            border: '1px solid rgba(0,0,0,0.05)',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
                              borderColor: method.color,
                            },
                          }}
                        >
                          <Grid container alignItems="center" spacing={2}>
                            <Grid size="auto">
                              <Box
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  width: 40,
                                  height: 40,
                                  borderRadius: '50%',
                                  bgcolor: method.color,
                                  color: 'white',
                                  boxShadow: '0 3px 10px rgba(0,0,0,0.15)',
                                }}
                              >
                                <IconComponent sx={{ fontSize: 20 }} />
                              </Box>
                            </Grid>
                            <Grid size="auto" sx={{ flexGrow: 1 }}>
                              <Typography variant="body1" fontWeight="bold" sx={{ mb: 0.5, fontSize: '0.9rem' }}>
                                {method.title}
                              </Typography>
                              <Typography variant="body2" color="primary.main" fontWeight="600" sx={{ mb: 0.5, fontSize: '0.8rem' }}>
                                {method.value}
                              </Typography>
                              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                                {method.description}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Paper>
                      </Link>
                    </Grid>
                  );
                })}
              </Grid>
            </Card>
          </Grid>
        </Grid>

        {/* Office Hours and Response Time Section - Same Row */}
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {/* Office Hours */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              elevation={4}
              sx={{
                p: { xs: 3, md: 4 },
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: 3,
                height: '100%',
                '&:hover': {
                  boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              <Grid container alignItems="center" sx={{ mb: 3 }}>
                <Grid size="auto">
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: { xs: 40, md: 50 },
                      height: { xs: 40, md: 50 },
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      color: 'white',
                      mr: { xs: 2, md: 3 },
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                    }}
                  >
                    <Schedule sx={{ fontSize: { xs: 20, md: 24 } }} />
                  </Box>
                </Grid>
                <Grid size="auto" sx={{ flexGrow: 1 }}>
                  <Typography variant="h4" fontWeight="bold" sx={{ 
                    fontSize: { xs: '1.125rem', md: '1.5rem' }
                  }}>
                    Office Hours
                  </Typography>
                </Grid>
              </Grid>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {officeHours.map((schedule, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      p: 2,
                      bgcolor: 'grey.50',
                      borderRadius: 2,
                      border: '1px solid rgba(0,0,0,0.05)'
                    }}
                  >
                    <Typography variant="body2" fontWeight="600" color="text.primary">
                      {schedule.day}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {schedule.hours}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Card>
          </Grid>

          {/* Response Time */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              elevation={4}
              sx={{
                p: { xs: 3, md: 4 },
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                borderRadius: 3,
                height: '100%',
                '&:hover': {
                  boxShadow: '0 12px 32px rgba(102, 126, 234, 0.3)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ 
                mb: 3,
                fontSize: { xs: '1.125rem', md: '1.5rem' }
              }}>
                Response Time
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {responseTime.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      p: 2,
                      bgcolor: 'rgba(255,255,255,0.1)',
                      borderRadius: 2,
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    <Typography variant="body2" fontWeight="600" sx={{ opacity: 0.9 }}>
                      {item.type}
                    </Typography>
                    <Chip
                      label={item.time}
                      size="small"
                      sx={{
                        bgcolor: 'rgba(255,255,255,0.2)',
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '0.75rem'
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Card>
          </Grid>
        </Grid>

        {/* Additional Information Section */}
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid size={12}>
            <Card
              elevation={4}
              sx={{
                p: { xs: 3, md: 5 },
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: 3,
                textAlign: 'center',
                '&:hover': {
                  boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ 
                mb: 3,
                fontSize: { xs: '1.5rem', md: '2.125rem' }
              }}>
                Let's Start Something Great
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ 
                mb: 4,
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.7,
                fontSize: { xs: '0.875rem', md: '1.1rem' }
              }}>
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you need a full website, consultation, or just want to discuss ideas, 
                I'm here to help bring your vision to life.
              </Typography>
              
              <Grid container spacing={3} justifyContent="center">
                <Grid size="auto">
                  <Chip
                    label="Web Development"
                    color="primary"
                    sx={{ fontWeight: 600, fontSize: '0.9rem' }}
                  />
                </Grid>
                <Grid size="auto">
                  <Chip
                    label="Consultation"
                    color="primary"
                    sx={{ fontWeight: 600, fontSize: '0.9rem' }}
                  />
                </Grid>
                <Grid size="auto">
                  <Chip
                    label="Freelance Work"
                    color="primary"
                    sx={{ fontWeight: 600, fontSize: '0.9rem' }}
                  />
                </Grid>
                <Grid size="auto">
                  <Chip
                    label="Collaboration"
                    color="primary"
                    sx={{ fontWeight: 600, fontSize: '0.9rem' }}
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 