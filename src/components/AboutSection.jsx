import { Box, Typography, Container, Avatar, Paper, Grid, Chip, Divider } from '@mui/material';
import { Email, LinkedIn, GitHub, Twitter, Star, TrendingUp, Group, Lightbulb, Code, Palette, Rocket, School, Work, LocationOn, Language } from '@mui/icons-material';
import Link from 'next/link';

const teamMembers = [
  {
    name: "Ben Doe",
    role: "Founder & Lead Developer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    bio: "Passionate web developer with 5+ years of experience building modern web applications. Loves turning ideas into digital experiences and believes in the power of community-driven development.",
    highlights: [
      "🌐 5+ years building web apps and blogs",
      "✍️ Published 100+ articles on web development", 
      "🎨 Enthusiast in UI/UX and design systems",
      "🤝 Loves open source and community events",
      "🏆 Speaker at 10+ developer conferences",
      "📚 Authored 3 technical books"
    ],
    skills: ["React", "Node.js", "TypeScript", "Next.js", "Python", "AWS"],
    social: {
      email: "ben@example.com",
      linkedin: "https://linkedin.com/in/bendoe",
      github: "https://github.com/bendoe",
      twitter: "https://twitter.com/bendoe"
    },
    location: "San Francisco, CA",
    experience: "5+ years",
    education: "Master's in Computer Science"
  },
  {
    name: "Sarah Smith",
    role: "Content Creator & Writer",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    bio: "Creative writer and content strategist who believes in the power of storytelling to connect and inspire people. Specializes in technical writing and educational content.",
    highlights: [
      "📝 3+ years in content creation and strategy",
      "📚 Published author with 50+ articles",
      "🎯 Expert in SEO and content marketing",
      "💡 Passionate about user engagement",
      "🎓 Master's in Communications",
      "🏅 Award-winning technical writer"
    ],
    skills: ["Content Strategy", "SEO", "Copywriting", "Social Media", "Analytics", "Editing"],
    social: {
      email: "sarah@example.com",
      linkedin: "https://linkedin.com/in/sarahsmith",
      github: "https://github.com/sarahsmith",
      twitter: "https://twitter.com/sarahsmith"
    },
    location: "New York, NY",
    experience: "3+ years",
    education: "Master's in Communications"
  },
  {
    name: "Alex Chen",
    role: "UI/UX Designer & Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    bio: "Creative designer and frontend developer who bridges the gap between beautiful design and functional code. Passionate about creating intuitive user experiences.",
    highlights: [
      "🎨 4+ years in UI/UX design",
      "💻 Full-stack design to development",
      "🏆 15+ design awards and recognitions",
      "📱 Expert in mobile-first design",
      "🎓 Design Thinking certified",
      "🌍 Worked with 20+ international brands"
    ],
    skills: ["Figma", "React", "CSS", "JavaScript", "Design Systems", "Prototyping"],
    social: {
      email: "alex@example.com",
      linkedin: "https://linkedin.com/in/alexchen",
      github: "https://github.com/alexchen",
      twitter: "https://twitter.com/alexchen"
    },
    location: "Seattle, WA",
    experience: "4+ years",
    education: "Bachelor's in Design"
  }
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly explore new technologies and creative solutions to deliver cutting-edge experiences."
  },
  {
    icon: Group,
    title: "Community",
    description: "Building meaningful connections and fostering a supportive environment for learning and growth."
  },
  {
    icon: Code,
    title: "Quality",
    description: "Committed to writing clean, maintainable code and creating content that adds real value."
  },
  {
    icon: Palette,
    title: "Creativity",
    description: "Embracing artistic expression and innovative design to make the web more beautiful and functional."
  }
];

const achievements = [
  { number: "500+", label: "Articles Published", icon: Star },
  { number: "10K+", label: "Happy Readers", icon: Group },
  { number: "50+", label: "Projects Completed", icon: Rocket },
  { number: "4.9", label: "Average Rating", icon: TrendingUp }
];

export default function AboutSection() {
  return (
    <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mb: 2,
              color: 'text.primary',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Meet Our Amazing Team
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            We're a passionate team of creators, developers, designers, and writers dedicated to sharing knowledge and building amazing digital experiences that inspire and empower people around the world.
          </Typography>
        </Box>

        {/* Team Members */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              fontWeight: 700,
              mb: 4,
              color: 'text.primary'
            }}
          >
            Our Core Team
          </Typography>
          <Grid 
            container 
            spacing={4}
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(3, 1fr)'
              },
              gap: 4
            }}
          >
            {teamMembers.map((member, index) => (
              <Box key={index}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  {/* Profile Header */}
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Avatar
                      src={member.avatar}
                      alt={member.name}
                      sx={{
                        width: 120,
                        height: 120,
                        mx: 'auto',
                        mb: 2,
                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                        border: '4px solid white',
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: -4,
                          left: -4,
                          right: -4,
                          bottom: -4,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          zIndex: -1,
                        }
                      }}
                    />
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: 'text.primary'
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 600,
                        mb: 1
                      }}
                    >
                      {member.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      📍 {member.location} • {member.experience} • {member.education}
                    </Typography>
                  </Box>

                  {/* Bio */}
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      mb: 3,
                      lineHeight: 1.7,
                      flexGrow: 1
                    }}
                  >
                    {member.bio}
                  </Typography>

                  {/* Skills */}
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: 'text.primary'
                      }}
                    >
                      Skills
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {member.skills.map((skill, idx) => (
                        <Chip
                          key={idx}
                          label={skill}
                          size="small"
                          sx={{
                            bgcolor: 'primary.main',
                            color: 'white',
                            fontWeight: 600,
                            '&:hover': {
                              bgcolor: 'primary.dark',
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Highlights */}
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: 'text.primary'
                      }}
                    >
                      Highlights
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {member.highlights.map((highlight, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          color="text.secondary"
                          sx={{ display: 'flex', alignItems: 'center' }}
                        >
                          {highlight}
                        </Typography>
                      ))}
                    </Box>
                  </Box>

                  {/* Social Links */}
                  <Box sx={{ mt: 'auto' }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: 'text.primary'
                      }}
                    >
                      Get in Touch
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                      <Link href={`mailto:${member.social.email}`} style={{ textDecoration: 'none' }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                            color: 'white',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              bgcolor: 'primary.dark',
                              transform: 'scale(1.1)',
                            },
                          }}
                        >
                          <Email sx={{ fontSize: 20 }} />
                        </Box>
                      </Link>
                      <Link href={member.social.linkedin} target="_blank" style={{ textDecoration: 'none' }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            bgcolor: '#0077b5',
                            color: 'white',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              bgcolor: '#005885',
                              transform: 'scale(1.1)',
                            },
                          }}
                        >
                          <LinkedIn sx={{ fontSize: 20 }} />
                        </Box>
                      </Link>
                      <Link href={member.social.github} target="_blank" style={{ textDecoration: 'none' }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            bgcolor: '#333',
                            color: 'white',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              bgcolor: '#000',
                              transform: 'scale(1.1)',
                            },
                          }}
                        >
                          <GitHub sx={{ fontSize: 20 }} />
                        </Box>
                      </Link>
                      <Link href={member.social.twitter} target="_blank" style={{ textDecoration: 'none' }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            bgcolor: '#1DA1F2',
                            color: 'white',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              bgcolor: '#0d8bd9',
                              transform: 'scale(1.1)',
                            },
                          }}
                        >
                          <Twitter sx={{ fontSize: 20 }} />
                        </Box>
                      </Link>
                    </Box>
                  </Box>
                </Paper>
              </Box>
            ))}
          </Grid>
        </Box>

        {/* Our Values Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              fontWeight: 700,
              mb: 4,
              color: 'text.primary'
            }}
          >
            Our Values
          </Typography>
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
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Box key={index}>
                  <Paper
                    elevation={1}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      height: '100%',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        color: 'white',
                        mb: 2,
                      }}
                    >
                      <IconComponent sx={{ fontSize: 30 }} />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: 'text.primary'
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.6 }}
                    >
                      {value.description}
                    </Typography>
                  </Paper>
                </Box>
              );
            })}
          </Grid>
        </Box>

        {/* Achievements Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              fontWeight: 700,
              mb: 4,
              color: 'text.primary'
            }}
          >
            Our Achievements
          </Typography>
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
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Box key={index}>
                  <Paper
                    elevation={1}
                    sx={{
                      p: 4,
                      textAlign: 'center',
                      height: '100%',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 15px 35px rgba(102, 126, 234, 0.3)',
                      },
                    }}
                  >
                    <IconComponent sx={{ fontSize: 40, mb: 2, opacity: 0.9 }} />
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: 'white'
                      }}
                    >
                      {achievement.number}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        opacity: 0.9
                      }}
                    >
                      {achievement.label}
                    </Typography>
                  </Paper>
                </Box>
              );
            })}
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Paper
            elevation={3}
            sx={{
              p: 6,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
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
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: 'white'
                }}
              >
                Want to Join Our Team?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  maxWidth: '600px',
                  mx: 'auto'
                }}
              >
                We're always looking for passionate individuals who share our vision of creating meaningful content and experiences.
              </Typography>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Box
                  component="button"
                  sx={{
                    bgcolor: 'white',
                    color: 'primary.main',
                    border: 'none',
                    px: 4,
                    py: 2,
                    borderRadius: 2,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: '#f8f9fa',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Get in Touch
                </Box>
              </Link>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
} 