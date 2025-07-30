import { 
  Code, 
  Palette, 
  Business, 
  Psychology,
  Science,
  School
} from '@mui/icons-material';

// Mock blog data
export const mockBlogs = [
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

export const categories = [
  { name: "Technology", icon: <Code />, count: 2 },
  { name: "Design", icon: <Palette />, count: 1 },
  { name: "Business", icon: <Business />, count: 2 },
  { name: "Psychology", icon: <Psychology />, count: 1 },
  { name: "Science", icon: <Science />, count: 0 },
  { name: "Education", icon: <School />, count: 0 }
]; 