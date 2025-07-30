import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { AccessTime, ArrowForward } from '@mui/icons-material';

export default function BlogCard({ post }) {
  return (
    <Card 
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
  );
} 