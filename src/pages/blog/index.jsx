import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { mockBlogs, categories } from '@/data/blogData';
import BlogCard from '@/components/BlogCard';
import SearchBar from '@/components/SearchBar';
import NewsletterSignup from '@/components/NewsletterSignup';
import SEO from '@/components/SEO';

export default function Blog() {
  const featuredPosts = mockBlogs.filter(post => post.featured);
  const regularPosts = mockBlogs.filter(post => !post.featured);

  return (
    <>
      <SEO 
        title="Blog"
        description="Explore our latest articles on technology, design, business, and more. Stay updated with insights from our expert team."
        keywords="blog articles, technology insights, design tutorials, business tips, web development, AI, UX design"
        type="website"
      />
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
        <SearchBar sx={{ mb: 4 }} />
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
            <BlogCard key={post.id} post={post} />
          ))}
        </Box>
      </Box>

      {/* Newsletter Signup */}
      <NewsletterSignup />
      </Container>
    </>
  );
} 