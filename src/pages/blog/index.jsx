import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { 
  Search, 
  TrendingUp, 
  Code, 
  Palette, 
  Business, 
  Psychology,
  Science,
  School,
  AccessTime,
  Person,
  Favorite,
  Share,
  Bookmark,
  ArrowForward
} from '@mui/icons-material';

// Mock blog data
const mockBlogs = [
  {
    id: 1,
    title: "The Future of Web Development: What's Next in 2024",
    excerpt: "Explore the latest trends in web development, from AI-powered tools to new frameworks that are reshaping how we build the web.",
    content: "Web development is evolving at an unprecedented pace. In 2024, we're seeing the rise of AI-powered development tools, new JavaScript frameworks, and innovative approaches to building user experiences...",
    author: "Sarah Johnson",
    authorAvatar: "SJ",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    categoryIcon: <Code />,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
    tags: ["Web Development", "AI", "JavaScript"],
    featured: true,
    likes: 124,
    views: 2340
  },
  {
    id: 2,
    title: "Designing for Accessibility: A Complete Guide",
    excerpt: "Learn how to create inclusive digital experiences that work for everyone, regardless of their abilities or disabilities.",
    content: "Accessibility in design isn't just about compliance—it's about creating experiences that work for everyone. From color contrast to keyboard navigation, every design decision impacts accessibility...",
    author: "Michael Chen",
    authorAvatar: "MC",
    date: "March 12, 2024",
    readTime: "12 min read",
    category: "Design",
    categoryIcon: <Palette />,
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=200&fit=crop",
    tags: ["Accessibility", "UX Design", "Inclusive Design"],
    featured: true,
    likes: 89,
    views: 1567
  },
  {
    id: 3,
    title: "Building a Successful Remote Team: Lessons Learned",
    excerpt: "Discover the strategies and tools that make remote teams thrive in today's distributed work environment.",
    content: "Remote work has become the new normal for many organizations. But building and maintaining a successful remote team requires intentional strategies and the right tools...",
    author: "Emily Rodriguez",
    authorAvatar: "ER",
    date: "March 10, 2024",
    readTime: "10 min read",
    category: "Business",
    categoryIcon: <Business />,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop",
    tags: ["Remote Work", "Team Management", "Productivity"],
    featured: false,
    likes: 67,
    views: 1234
  },
  {
    id: 4,
    title: "The Psychology of User Experience Design",
    excerpt: "Understanding human psychology is key to creating intuitive and engaging user experiences.",
    content: "Great UX design goes beyond aesthetics—it's about understanding how people think, feel, and behave. By applying psychological principles, we can create more effective interfaces...",
    author: "David Kim",
    authorAvatar: "DK",
    date: "March 8, 2024",
    readTime: "15 min read",
    category: "Psychology",
    categoryIcon: <Psychology />,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop",
    tags: ["UX Psychology", "User Research", "Behavioral Design"],
    featured: false,
    likes: 156,
    views: 2890
  },
  {
    id: 5,
    title: "Machine Learning for Beginners: Getting Started",
    excerpt: "A comprehensive introduction to machine learning concepts and practical applications for developers.",
    content: "Machine learning is transforming industries across the board. Whether you're a developer looking to add ML to your toolkit or just curious about the technology, this guide will help you get started...",
    author: "Lisa Wang",
    authorAvatar: "LW",
    date: "March 5, 2024",
    readTime: "20 min read",
    category: "Technology",
    categoryIcon: <Code />,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
    tags: ["Machine Learning", "AI", "Python"],
    featured: false,
    likes: 203,
    views: 3456
  },
  {
    id: 6,
    title: "Sustainable Business Practices in the Digital Age",
    excerpt: "How companies can leverage technology to reduce their environmental impact while improving efficiency.",
    content: "Sustainability isn't just about reducing paper usage—it's about rethinking how we do business in the digital age. Technology can be a powerful tool for creating more sustainable business practices...",
    author: "Alex Thompson",
    authorAvatar: "AT",
    date: "March 3, 2024",
    readTime: "11 min read",
    category: "Business",
    categoryIcon: <Business />,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=200&fit=crop",
    tags: ["Sustainability", "Green Tech", "Business Strategy"],
    featured: false,
    likes: 78,
    views: 1456
  }
];

const categories = [
  { name: "Technology", icon: <Code />, count: 2 },
  { name: "Design", icon: <Palette />, count: 1 },
  { name: "Business", icon: <Business />, count: 2 },
  { name: "Psychology", icon: <Psychology />, count: 1 },
  { name: "Science", icon: <Science />, count: 0 },
  { name: "Education", icon: <School />, count: 0 }
];

export default function Blog() {
  const featuredPosts = mockBlogs.filter(post => post.featured);
  const regularPosts = mockBlogs.filter(post => !post.featured);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header Section */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
          Our Blog
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
          Insights, tutorials, and stories from our team of experts. Stay updated with the latest trends in technology, design, and business.
        </Typography>
        
        {/* Search Bar */}
        <TextField
          fullWidth
          placeholder="Search articles..."
          variant="outlined"
          sx={{ maxWidth: 500, mb: 4 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Categories */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
          Categories
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {categories.map((category) => (
            <Chip
              key={category.name}
              icon={category.icon}
              label={`${category.name} (${category.count})`}
              variant="outlined"
              clickable
              sx={{ mb: 1 }}
            />
          ))}
        </Box>
      </Box>

      {/* All Blog Posts in Single Column */}
      <Box>
        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
          Latest Articles
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {mockBlogs.map((post) => (
            <Card 
              key={post.id}
              sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 3
                }
              }}
            >
              <CardMedia
                component="img"
                sx={{ 
                  width: { xs: '100%', md: 280 },
                  height: { xs: 200, md: 200 },
                  objectFit: 'cover'
                }}
                image={post.image}
                alt={post.title}
              />
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {post.categoryIcon}
                  <Chip 
                    label={post.category} 
                    size="small" 
                    sx={{ ml: 1 }}
                  />
                  {post.featured && (
                    <Chip 
                      label="Featured" 
                      size="small" 
                      color="primary"
                      sx={{ ml: 1 }}
                    />
                  )}
                </Box>
                
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, lineHeight: 1.3 }}>
                  {post.title}
                </Typography>
                
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, flexGrow: 1 }}>
                  {post.excerpt}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ width: 40, height: 40, mr: 2, bgcolor: 'primary.main' }}>
                    {post.authorAvatar}
                  </Avatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {post.author}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="caption" color="text.secondary">
                        {post.date}
                      </Typography>
                      <AccessTime sx={{ fontSize: 14 }} />
                      <Typography variant="caption" color="text.secondary">
                        {post.readTime}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {post.tags.map((tag) => (
                      <Chip key={tag} label={tag} size="small" variant="outlined" />
                    ))}
                  </Box>
                  <Button 
                    variant="contained"
                    endIcon={<ArrowForward />}
                    size="medium"
                    sx={{ textTransform: 'none' }}
                  >
                    Read More
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Newsletter Signup */}
      <Box sx={{ mt: 8, p: 4, bgcolor: 'grey.50', borderRadius: 2, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Stay Updated
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Get the latest articles and insights delivered to your inbox.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, maxWidth: 400, mx: 'auto' }}>
          <TextField
            placeholder="Enter your email"
            variant="outlined"
            size="small"
            sx={{ flexGrow: 1 }}
          />
          <Button variant="contained" size="small">
            Subscribe
          </Button>
        </Box>
      </Box>
    </Container>
  );
} 