import { Box, Typography, Card, CardContent, CardMedia, Grid, Container, Chip } from '@mui/material';
import { CalendarToday, Person, ArrowForward } from '@mui/icons-material';
import Link from 'next/link';

const featuredPosts = [
  {
    id: 1,
    title: "Getting Started with Modern Web Development",
    excerpt: "Learn the fundamentals of building modern web applications with the latest technologies and best practices.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
    author: "John Doe",
    date: "2024-01-15",
    category: "Development",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Art of Effective Writing",
    excerpt: "Discover techniques to improve your writing skills and create compelling content that engages your audience.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop",
    author: "Jane Smith",
    date: "2024-01-12",
    category: "Writing",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Design Principles for Better User Experience",
    excerpt: "Explore key design principles that will help you create intuitive and delightful user experiences.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
    author: "Mike Johnson",
    date: "2024-01-10",
    category: "Design",
    readTime: "6 min read"
  }
];

export default function FeaturedPosts() {
  return (
    <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
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
            Featured Posts
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Discover our latest articles and insights on technology, design, and creativity
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
              md: 'repeat(3, 1fr)'
            },
            gap: 3
          }}
        >
          {featuredPosts.map((post, index) => (
            <Box key={post.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="120"
                  image={post.image}
                  alt={post.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 2 }}>
                  <Chip
                    label={post.category}
                    size="small"
                    sx={{
                      alignSelf: 'flex-start',
                      mb: 1.5,
                      bgcolor: 'primary.main',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '0.7rem',
                    }}
                  />
                  
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      mb: 1.5,
                      lineHeight: 1.3,
                      color: 'text.primary',
                      fontSize: '1rem',
                    }}
                  >
                    {post.title}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      flexGrow: 1,
                      lineHeight: 1.5,
                      fontSize: '0.8rem',
                    }}
                  >
                    {post.excerpt}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5, gap: 1.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Person sx={{ fontSize: 12, color: 'text.secondary' }} />
                      <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                        {post.author}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CalendarToday sx={{ fontSize: 12, color: 'text.secondary' }} />
                      <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                        {new Date(post.date).toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric'
                        })}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Typography variant="caption" color="text.secondary" sx={{ mb: 1.5, fontSize: '0.7rem' }}>
                    {post.readTime}
                  </Typography>
                  
                  <Link href={`/blog/${post.id}`} style={{ textDecoration: 'none' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'primary.main',
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        '&:hover': {
                          color: 'primary.dark',
                        },
                        transition: 'color 0.3s ease',
                      }}
                    >
                      Read More
                      <ArrowForward sx={{ ml: 0.5, fontSize: 14 }} />
                    </Box>
                  </Link>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Link href="/blog" style={{ textDecoration: 'none' }}>
            <Box
              component="button"
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                border: 'none',
                px: 4,
                py: 2,
                borderRadius: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'primary.dark',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              View All Posts
            </Box>
          </Link>
        </Box>
      </Container>
    </Box>
  );
} 