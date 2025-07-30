export const SITE_CONFIG = {
  name: "Your Friendly Blog",
  description: "Discover insights, tutorials, and stories from our team of experts. Stay updated with the latest trends in technology, design, and business.",
  url: "https://your-friendly-blog.com",
  ogImage: "https://your-friendly-blog.com/og-image.jpg",
  twitterImage: "https://your-friendly-blog.com/twitter-image.jpg",
  logo: "https://your-friendly-blog.com/logo.png",
  keywords: "blog, technology, design, business, web development, AI, UX design, remote work, machine learning",
  author: "Your Friendly Blog Team",
  themeColor: "#667eea",
  contact: {
    email: "hello@your-friendly-blog.com",
    phone: "+1 (555) 123-4567",
    address: "123 Blog Street, Tech City, TC 12345"
  },
  social: {
    twitter: "https://twitter.com/yourfriendlyblog",
    linkedin: "https://linkedin.com/company/your-friendly-blog",
    github: "https://github.com/your-friendly-blog",
    facebook: "https://facebook.com/yourfriendlyblog"
  },
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy', href: '/privacy' }
  ]
};

export const META_TAGS = {
  primary: {
    title: `${SITE_CONFIG.name} - Insights, Tutorials & Stories`,
    description: SITE_CONFIG.description,
    keywords: SITE_CONFIG.keywords,
    author: SITE_CONFIG.author,
    robots: "index, follow"
  },
  openGraph: {
    type: "website",
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.name} - Insights, Tutorials & Stories`,
    description: SITE_CONFIG.description,
    image: SITE_CONFIG.ogImage,
    siteName: SITE_CONFIG.name
  },
  twitter: {
    card: "summary_large_image",
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.name} - Insights, Tutorials & Stories`,
    description: SITE_CONFIG.description,
    image: SITE_CONFIG.twitterImage
  }
}; 