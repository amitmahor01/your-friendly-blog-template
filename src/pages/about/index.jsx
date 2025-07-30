import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { 
  Email, 
  LinkedIn, 
  GitHub, 
  Twitter, 
  Star, 
  TrendingUp, 
  Group, 
  Lightbulb, 
  Code, 
  Palette, 
  Rocket,
  School,
  Work,
  LocationOn,
  Language,
  CalendarToday,
  Business
} from '@mui/icons-material';
import Link from 'next/link';

export default function About() {
  const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "MongoDB", 
    "PostgreSQL", "AWS", "Docker", "Git", "Figma", "Tailwind CSS"
  ];

  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Leading development of scalable web applications and mentoring junior developers."
    },
    {
      role: "Frontend Developer",
      company: "StartupXYZ",
      period: "2020 - 2022", 
      description: "Built responsive user interfaces and optimized application performance."
    },
    {
      role: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2018 - 2020",
      description: "Delivered custom web solutions for various clients across different industries."
    }
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      school: "Stanford University",
      period: "2016 - 2018",
      description: "Specialized in Software Engineering and Web Technologies"
    },
    {
      degree: "Bachelor of Computer Science", 
      school: "MIT",
      period: "2012 - 2016",
      description: "Major in Computer Science with minor in Design"
    }
  ];

  const achievements = [
    { number: "500+", label: "Articles Published", icon: Star },
    { number: "10K+", label: "Happy Readers", icon: Group },
    { number: "50+", label: "Projects Completed", icon: Rocket },
    { number: "4.9", label: "Average Rating", icon: TrendingUp }
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
                About Ben Doe
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
                Passionate web developer, writer, and creator dedicated to building meaningful digital experiences and sharing knowledge with the community.
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

        {/* Main Content Grid */}
        <Grid container spacing={4}>
          {/* Profile Section - Full width on mobile, sidebar on desktop */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Card
              elevation={8}
              sx={{
                p: { xs: 3, md: 4 },
                textAlign: 'center',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: 3,
                position: { lg: 'sticky' },
                top: { lg: 24 },
                height: 'fit-content',
                '&:hover': {
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              {/* Avatar */}
              <Box sx={{ position: 'relative', mb: 4 }}>
                <Avatar
                  alt="Ben Doe"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                  sx={{ 
                    width: { xs: 120, md: 160 }, 
                    height: { xs: 120, md: 160 }, 
                    mx: 'auto',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
                    border: '6px solid white',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: -6,
                      left: -6,
                      right: -6,
                      bottom: -6,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      zIndex: -1,
                    }
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 8,
                    right: '50%',
                    transform: 'translateX(50%)',
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    bgcolor: '#4CAF50',
                    border: '3px solid white',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                  }}
                />
              </Box>

              {/* Name and Title */}
              <Typography 
                variant="h3" 
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  color: 'text.primary',
                  letterSpacing: '-0.01em',
                  fontSize: { xs: '1.75rem', md: '2.125rem' }
                }}
              >
                Ben Doe
              </Typography>
              <Typography 
                variant="h6" 
                sx={{
                  color: 'primary.main', 
                  fontWeight: 600, 
                  mb: 2,
                  letterSpacing: '0.02em',
                  fontSize: { xs: '0.875rem', md: '1.25rem' }
                }}
              >
                Full Stack Developer & Content Creator
              </Typography>
              
              {/* Location */}
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                mb: 3,
                p: 1.5,
                bgcolor: 'grey.50',
                borderRadius: 2,
                mx: 'auto',
                width: 'fit-content'
              }}>
                <LocationOn sx={{ mr: 1, color: 'primary.main', fontSize: 20 }} />
                <Typography variant="body2" color="text.secondary" fontWeight={500}>
                  San Francisco, CA
                </Typography>
              </Box>

              {/* Quote */}
              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ 
                  mb: 4, 
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  p: 2,
                  bgcolor: 'grey.50',
                  borderRadius: 2,
                  border: '1px solid rgba(0,0,0,0.05)',
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}
              >
                "Building ideas, sharing stories, and exploring the web. I believe in creating technology that makes a difference in people's lives."
              </Typography>

              {/* Social Links */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 2 }}>
                  Connect With Me
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                  <Grid size="auto">
                    <Link href="mailto:ben@example.com" style={{ textDecoration: 'none' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: { xs: 45, md: 50 },
                          height: { xs: 45, md: 50 },
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                          color: 'white',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                          '&:hover': {
                            bgcolor: 'primary.dark',
                            transform: 'scale(1.1) translateY(-2px)',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
                          },
                        }}
                      >
                        <Email sx={{ fontSize: { xs: 20, md: 24 } }} />
                      </Box>
                    </Link>
                  </Grid>
                  <Grid size="auto">
                    <Link href="https://linkedin.com/in/bendoe" target="_blank" style={{ textDecoration: 'none' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: { xs: 45, md: 50 },
                          height: { xs: 45, md: 50 },
                          borderRadius: '50%',
                          bgcolor: '#0077b5',
                          color: 'white',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                          '&:hover': {
                            bgcolor: '#005885',
                            transform: 'scale(1.1) translateY(-2px)',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
                          },
                        }}
                      >
                        <LinkedIn sx={{ fontSize: { xs: 20, md: 24 } }} />
                      </Box>
                    </Link>
                  </Grid>
                  <Grid size="auto">
                    <Link href="https://github.com/bendoe" target="_blank" style={{ textDecoration: 'none' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: { xs: 45, md: 50 },
                          height: { xs: 45, md: 50 },
                          borderRadius: '50%',
                          bgcolor: '#333',
                          color: 'white',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                          '&:hover': {
                            bgcolor: '#000',
                            transform: 'scale(1.1) translateY(-2px)',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
                          },
                        }}
                      >
                        <GitHub sx={{ fontSize: { xs: 20, md: 24 } }} />
                      </Box>
                    </Link>
                  </Grid>
                  <Grid size="auto">
                    <Link href="https://twitter.com/bendoe" target="_blank" style={{ textDecoration: 'none' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: { xs: 45, md: 50 },
                          height: { xs: 45, md: 50 },
                          borderRadius: '50%',
                          bgcolor: '#1DA1F2',
                          color: 'white',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                          '&:hover': {
                            bgcolor: '#0d8bd9',
                            transform: 'scale(1.1) translateY(-2px)',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
                          },
                        }}
                      >
                        <Twitter sx={{ fontSize: { xs: 20, md: 24 } }} />
                      </Box>
                    </Link>
                  </Grid>
                </Grid>
              </Box>

              <Divider sx={{ my: 3 }} />

              {/* Skills */}
              <Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
                  Technical Skills
                </Typography>
                <Grid container spacing={1} justifyContent="center">
                  {skills.map((skill, idx) => (
                    <Grid size="auto" key={idx}>
                      <Chip
                        label={skill}
                        size="small"
                        sx={{
                          bgcolor: 'primary.main',
                          color: 'white',
                          fontWeight: 600,
                          fontSize: { xs: '0.7rem', md: '0.75rem' },
                          height: { xs: 24, md: 28 },
                          '&:hover': {
                            bgcolor: 'primary.dark',
                            transform: 'scale(1.05)',
                          }
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Card>
          </Grid>

          {/* Content Sections */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Grid container spacing={4}>
              {/* Bio Section */}
              <Grid size={12}>
                <Card 
                  elevation={4}
                  sx={{ 
                    p: { xs: 3, md: 5 },
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    border: '1px solid rgba(0,0,0,0.08)',
                    '&:hover': {
                      boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
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
                        <Code sx={{ fontSize: { xs: 24, md: 30 } }} />
                      </Box>
                    </Grid>
                    <Grid size="auto" sx={{ flexGrow: 1 }}>
                      <Typography variant="h3" fontWeight="bold" sx={{ 
                        letterSpacing: '-0.01em',
                        fontSize: { xs: '1.5rem', md: '2.125rem' }
                      }}>
                        About Me
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="body1" color="text.secondary" paragraph sx={{ 
                    lineHeight: 1.8, 
                    fontSize: { xs: '0.875rem', md: '1.1rem' }
                  }}>
                    Hi there! I'm Ben Doe, a passionate full-stack developer and content creator with over 5 years of experience in building modern web applications. I specialize in React, Next.js, and Node.js, and I love turning complex problems into simple, beautiful solutions.
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph sx={{ 
                    lineHeight: 1.8, 
                    fontSize: { xs: '0.875rem', md: '1.1rem' }
                  }}>
                    When I'm not coding, you'll find me writing technical articles, contributing to open-source projects, or speaking at developer conferences. I believe in the power of community and knowledge sharing, which is why I've published over 500 articles and helped thousands of developers grow their skills.
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ 
                    lineHeight: 1.8, 
                    fontSize: { xs: '0.875rem', md: '1.1rem' }
                  }}>
                    My mission is to create technology that not only solves problems but also inspires and empowers people to build amazing things themselves.
                  </Typography>
                </Card>
              </Grid>

              {/* Experience and Education in a row on desktop */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Card 
                  elevation={4}
                  sx={{ 
                    p: { xs: 3, md: 4 },
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    border: '1px solid rgba(0,0,0,0.08)',
                    height: '100%',
                    '&:hover': {
                      boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
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
                        <Work sx={{ fontSize: { xs: 24, md: 30 } }} />
                      </Box>
                    </Grid>
                    <Grid size="auto" sx={{ flexGrow: 1 }}>
                      <Typography variant="h4" fontWeight="bold" sx={{ 
                        letterSpacing: '-0.01em',
                        fontSize: { xs: '1.25rem', md: '1.75rem' }
                      }}>
                        Experience
                      </Typography>
                    </Grid>
                  </Grid>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {experiences.map((exp, idx) => (
                      <Box 
                        key={idx} 
                        sx={{ 
                          pl: 3, 
                          borderLeft: '4px solid', 
                          borderColor: 'primary.main',
                          position: 'relative',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: -8,
                            top: 8,
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                            border: '3px solid white',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                          }
                        }}
                      >
                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 1, fontSize: { xs: '0.875rem', md: '1.25rem' } }}>
                          {exp.role}
                        </Typography>
                        <Typography variant="subtitle1" color="primary.main" fontWeight="600" sx={{ mb: 1, fontSize: { xs: '0.75rem', md: '1rem' } }}>
                          {exp.company}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <CalendarToday sx={{ mr: 1, color: 'text.secondary', fontSize: 16 }} />
                          <Typography variant="body2" color="text.secondary" fontWeight={500} sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                            {exp.period}
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                          {exp.description}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Card>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Card 
                  elevation={4}
                  sx={{ 
                    p: { xs: 3, md: 4 },
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    border: '1px solid rgba(0,0,0,0.08)',
                    height: '100%',
                    '&:hover': {
                      boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
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
                        <School sx={{ fontSize: { xs: 24, md: 30 } }} />
                      </Box>
                    </Grid>
                    <Grid size="auto" sx={{ flexGrow: 1 }}>
                      <Typography variant="h4" fontWeight="bold" sx={{ 
                        letterSpacing: '-0.01em',
                        fontSize: { xs: '1.25rem', md: '1.75rem' }
                      }}>
                        Education
                      </Typography>
                    </Grid>
                  </Grid>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {education.map((edu, idx) => (
                      <Box 
                        key={idx} 
                        sx={{ 
                          pl: 3, 
                          borderLeft: '4px solid', 
                          borderColor: 'primary.main',
                          position: 'relative',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: -8,
                            top: 8,
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                            border: '3px solid white',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                          }
                        }}
                      >
                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 1, fontSize: { xs: '0.875rem', md: '1.25rem' } }}>
                          {edu.degree}
                        </Typography>
                        <Typography variant="subtitle1" color="primary.main" fontWeight="600" sx={{ mb: 1, fontSize: { xs: '0.75rem', md: '1rem' } }}>
                          {edu.school}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <CalendarToday sx={{ mr: 1, color: 'text.secondary', fontSize: 16 }} />
                          <Typography variant="body2" color="text.secondary" fontWeight={500} sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                            {edu.period}
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                          {edu.description}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Card>
              </Grid>

              {/* Achievements Section */}
              <Grid size={12}>
                <Card 
                  elevation={4}
                  sx={{ 
                    p: { xs: 3, md: 5 },
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    border: '1px solid rgba(0,0,0,0.08)',
                    '&:hover': {
                      boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ 
                    textAlign: 'center', 
                    mb: 5, 
                    letterSpacing: '-0.01em',
                    fontSize: { xs: '1.5rem', md: '2.125rem' }
                  }}>
                    Achievements & Impact
                  </Typography>
                  <Grid container spacing={3}>
                    {achievements.map((achievement, index) => {
                      const IconComponent = achievement.icon;
                      return (
                        <Grid size={{ xs: 6, sm: 3 }} key={index}>
                          <Paper
                            elevation={2}
                            sx={{
                              p: { xs: 2, md: 4 },
                              textAlign: 'center',
                              height: '100%',
                              transition: 'all 0.3s ease',
                              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                              color: 'white',
                              borderRadius: 3,
                              '&:hover': {
                                transform: 'translateY(-8px)',
                                boxShadow: '0 20px 40px rgba(102, 126, 234, 0.4)',
                              },
                            }}
                          >
                            <IconComponent sx={{ fontSize: { xs: 30, md: 40 }, mb: { xs: 2, md: 3 }, opacity: 0.9 }} />
                            <Typography
                              variant="h2"
                              sx={{
                                fontWeight: 800,
                                mb: 1,
                                color: 'white',
                                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
                              }}
                            >
                              {achievement.number}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 600,
                                opacity: 0.9,
                                fontSize: { xs: '0.75rem', md: '0.9rem' }
                              }}
                            >
                              {achievement.label}
                            </Typography>
                          </Paper>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Card>
              </Grid>

              {/* Call to Action */}
              <Grid size={12}>
                <Card 
                  elevation={6}
                  sx={{
                    p: { xs: 4, md: 6 },
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 3,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -50,
                      right: -50,
                      width: 200,
                      height: 200,
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.1)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -30,
                      left: -30,
                      width: 150,
                      height: 150,
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.1)',
                    }
                  }}
                >
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ 
                      mb: 3,
                      fontSize: { xs: '1.5rem', md: '2.125rem' }
                    }}>
                      Let's Work Together!
                    </Typography>
                    <Typography variant="h6" sx={{ 
                      mb: 4, 
                      opacity: 0.9, 
                      maxWidth: '600px', 
                      mx: 'auto',
                      fontSize: { xs: '0.875rem', md: '1.25rem' }
                    }}>
                      I'm always open to new opportunities, collaborations, and interesting projects. 
                      Whether you want to discuss a potential project or just say hello, I'd love to hear from you!
                    </Typography>
                    <Link href="/contact" style={{ textDecoration: 'none' }}>
                      <Box
                        component="button"
                        sx={{
                          bgcolor: 'white',
                          color: 'primary.main',
                          border: 'none',
                          px: { xs: 3, md: 5 },
                          py: { xs: 2, md: 2.5 },
                          borderRadius: 3,
                          fontSize: { xs: '1rem', md: '1.2rem' },
                          fontWeight: 700,
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                          '&:hover': {
                            bgcolor: '#f8f9fa',
                            transform: 'translateY(-3px)',
                            boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
                          },
                        }}
                      >
                        Get in Touch
                      </Box>
                    </Link>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    </Container>
    </Box>
  );
} 