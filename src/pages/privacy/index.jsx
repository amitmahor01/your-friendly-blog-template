import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

import { 
  Security,
  Shield,
  Visibility,
  DataUsage,
  Cookie,
  LocationOn,
  Email,
  Phone,
  Business,
  Person,
  ExpandMore,
  CheckCircle,
  Warning,
  Info
} from '@mui/icons-material';

export default function Privacy() {
  const privacySections = [
    {
      title: "Information We Collect",
      icon: DataUsage,
      content: [
        "Personal information (name, email, phone number) when you contact us",
        "Usage data and analytics to improve our services",
        "Cookies and similar technologies for website functionality",
        "Information you provide through our contact forms"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Business,
      content: [
        "To provide and maintain our services",
        "To communicate with you about projects and inquiries",
        "To improve our website and user experience",
        "To send you updates and newsletters (with your consent)"
      ]
    },
    {
      title: "Data Protection & Security",
      icon: Shield,
      content: [
        "We implement industry-standard security measures",
        "Your data is encrypted during transmission",
        "We regularly update our security protocols",
        "Access to your data is limited to authorized personnel only"
      ]
    },
    {
      title: "Third-Party Services",
      icon: Visibility,
      content: [
        "We may use third-party analytics services",
        "Social media platforms for communication",
        "Payment processors for transactions",
        "All third-party services comply with privacy regulations"
      ]
    }
  ];

  const cookieTypes = [
    {
      type: "Essential Cookies",
      description: "Required for basic website functionality",
      examples: "Login, security, shopping cart",
      necessary: true
    },
    {
      type: "Analytics Cookies",
      description: "Help us understand how visitors use our site",
      examples: "Page views, time spent, user behavior",
      necessary: false
    },
    {
      type: "Marketing Cookies",
      description: "Used for advertising and marketing purposes",
      examples: "Targeted ads, social media integration",
      necessary: false
    },
    {
      type: "Preference Cookies",
      description: "Remember your settings and preferences",
      examples: "Language, theme, layout preferences",
      necessary: false
    }
  ];

  const dataRights = [
    "Access - Request access to your personal data",
    "Rectification - Correct inaccurate or incomplete data",
    "Erasure - Request deletion of your personal data",
    "Portability - Receive your data in a portable format",
    "Objection - Object to processing of your data",
    "Restriction - Limit how we process your data"
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
                Privacy Policy
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
                We are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data.
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

        {/* Main Privacy Policy Content - Full Width */}
        <Grid container spacing={4}>
          <Grid size={12}>
            <Card
              elevation={8}
              sx={{
                p: { xs: 3, md: 5 },
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: 3,
                '&:hover': {
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              {/* Introduction Section */}
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
                    <Security sx={{ fontSize: { xs: 24, md: 30 } }} />
                  </Box>
                </Grid>
                <Grid size="auto" sx={{ flexGrow: 1 }}>
                  <Typography variant="h3" fontWeight="bold" sx={{ 
                    letterSpacing: '-0.01em',
                    fontSize: { xs: '1.5rem', md: '2.125rem' }
                  }}>
                    Your Privacy Matters
                  </Typography>
                </Grid>
              </Grid>
              
              <Typography variant="body1" color="text.secondary" paragraph sx={{ 
                lineHeight: 1.8, 
                fontSize: { xs: '0.875rem', md: '1.1rem' }
              }}>
                At Ben Doe's Blog, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. We are committed to protecting your privacy and ensuring the security of your personal information.
              </Typography>
              
              <Typography variant="body1" color="text.secondary" paragraph sx={{ 
                lineHeight: 1.8, 
                fontSize: { xs: '0.875rem', md: '1.1rem' }
              }}>
                By using our website, you consent to the data practices described in this policy. If you do not agree with our policies and practices, please do not use our website.
              </Typography>

              <Box sx={{ 
                p: 3, 
                bgcolor: 'primary.main', 
                color: 'white', 
                borderRadius: 2,
                mb: 4
              }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Last Updated: December 2024
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  This privacy policy is effective as of the date listed above and will remain in effect except with respect to any changes in its provisions in the future.
                </Typography>
              </Box>

              {/* Privacy Sections */}
              {privacySections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <Box key={index} sx={{ mb: 4 }}>
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
                          <IconComponent sx={{ fontSize: { xs: 20, md: 24 } }} />
                        </Box>
                      </Grid>
                      <Grid size="auto" sx={{ flexGrow: 1 }}>
                        <Typography variant="h4" fontWeight="bold" sx={{ 
                          fontSize: { xs: '1.125rem', md: '1.5rem' }
                        }}>
                          {section.title}
                        </Typography>
                      </Grid>
                    </Grid>
                    
                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                      {section.content.map((item, idx) => (
                        <Typography
                          key={idx}
                          component="li"
                          variant="body1"
                          color="text.secondary"
                          sx={{ 
                            mb: 1.5,
                            lineHeight: 1.7,
                            fontSize: { xs: '0.875rem', md: '1rem' }
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Box>
                    
                    {index < privacySections.length - 1 && (
                      <Divider sx={{ mt: 3, mb: 3 }} />
                    )}
                  </Box>
                );
              })}
            </Card>
          </Grid>
        </Grid>

        {/* Bottom Sections - Cookie Policy & Your Rights */}
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {/* Cookie Policy */}
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
                    <Cookie sx={{ fontSize: { xs: 20, md: 24 } }} />
                  </Box>
                </Grid>
                <Grid size="auto" sx={{ flexGrow: 1 }}>
                  <Typography variant="h4" fontWeight="bold" sx={{ 
                    fontSize: { xs: '1.125rem', md: '1.5rem' }
                  }}>
                    Cookie Policy
                  </Typography>
                </Grid>
              </Grid>
              
              <Typography variant="body1" color="text.secondary" paragraph sx={{ 
                lineHeight: 1.8, 
                fontSize: { xs: '0.875rem', md: '1rem' }
              }}>
                We use cookies and similar tracking technologies to track activity on our website and hold certain information.
              </Typography>

              <Grid container spacing={2}>
                {cookieTypes.map((cookie, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <Paper
                      elevation={1}
                      sx={{
                        p: 2,
                        border: '1px solid rgba(0,0,0,0.05)',
                        borderRadius: 2,
                        height: '100%',
                        '&:hover': {
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                          transform: 'translateY(-2px)',
                          transition: 'all 0.3s ease'
                        }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Typography variant="body2" fontWeight="bold" sx={{ flex: 1, fontSize: '0.8rem' }}>
                          {cookie.type}
                        </Typography>
                        <Chip
                          label={cookie.necessary ? "Necessary" : "Optional"}
                          size="small"
                          color={cookie.necessary ? "primary" : "default"}
                          sx={{ fontSize: '0.6rem', height: 20 }}
                        />
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                        {cookie.description}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>

          {/* Your Rights */}
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
                Your Data Rights
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ 
                lineHeight: 1.7,
                fontSize: { xs: '0.875rem', md: '1rem' },
                opacity: 0.9
              }}>
                Under data protection laws, you have several rights regarding your personal information:
              </Typography>
              
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                {dataRights.map((right, index) => (
                  <Typography
                    key={index}
                    component="li"
                    variant="body2"
                    sx={{ 
                      mb: 1.5,
                      lineHeight: 1.6,
                      fontSize: { xs: '0.75rem', md: '0.875rem' },
                      opacity: 0.9
                    }}
                  >
                    {right}
                  </Typography>
                ))}
              </Box>
              
              <Box sx={{ 
                mt: 3, 
                p: 2, 
                bgcolor: 'rgba(255,255,255,0.1)', 
                borderRadius: 2,
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <Typography variant="body2" sx={{ opacity: 0.9, fontSize: '0.8rem' }}>
                  To exercise any of these rights, please contact us using the information provided in our contact section.
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 