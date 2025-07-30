import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <title>Your Friendly Blog - Insights, Tutorials & Stories</title>
        <meta name="title" content="Your Friendly Blog - Insights, Tutorials & Stories" />
        <meta name="description" content="Discover insights, tutorials, and stories from our team of experts. Stay updated with the latest trends in technology, design, and business." />
        <meta name="keywords" content="blog, technology, design, business, web development, AI, UX design, remote work, machine learning" />
        <meta name="author" content="Your Friendly Blog Team" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-friendly-blog.com/" />
        <meta property="og:title" content="Your Friendly Blog - Insights, Tutorials & Stories" />
        <meta property="og:description" content="Discover insights, tutorials, and stories from our team of experts. Stay updated with the latest trends in technology, design, and business." />
        <meta property="og:image" content="https://your-friendly-blog.com/og-image.jpg" />
        <meta property="og:site_name" content="Your Friendly Blog" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://your-friendly-blog.com/" />
        <meta property="twitter:title" content="Your Friendly Blog - Insights, Tutorials & Stories" />
        <meta property="twitter:description" content="Discover insights, tutorials, and stories from our team of experts. Stay updated with the latest trends in technology, design, and business." />
        <meta property="twitter:image" content="https://your-friendly-blog.com/twitter-image.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#667eea" />
        <meta name="msapplication-TileColor" content="#667eea" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Your Friendly Blog" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Your Friendly Blog",
              "description": "Discover insights, tutorials, and stories from our team of experts. Stay updated with the latest trends in technology, design, and business.",
              "url": "https://your-friendly-blog.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://your-friendly-blog.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Your Friendly Blog",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://your-friendly-blog.com/logo.png"
                }
              }
            })
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
