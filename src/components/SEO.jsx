import Head from 'next/head';
import { SITE_CONFIG, META_TAGS } from '@/constants/siteConfig';

export default function SEO({ 
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  section,
  tags
}) {
  const metaTitle = title ? `${title} | ${SITE_CONFIG.name}` : META_TAGS.primary.title;
  const metaDescription = description || META_TAGS.primary.description;
  const metaKeywords = keywords || META_TAGS.primary.keywords;
  const metaImage = image || META_TAGS.openGraph.image;
  const metaUrl = url || SITE_CONFIG.url;
  const metaAuthor = author || META_TAGS.primary.author;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={metaAuthor} />
      <meta name="robots" content={META_TAGS.primary.robots} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={metaUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content={META_TAGS.twitter.card} />
      <meta property="twitter:url" content={metaUrl} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={metaImage} />
      
      {/* Article specific meta tags */}
      {type === "article" && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags && tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content={SITE_CONFIG.themeColor} />
      <meta name="msapplication-TileColor" content={SITE_CONFIG.themeColor} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={SITE_CONFIG.name} />
      
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
            "@type": type === "article" ? "Article" : "WebPage",
            "name": metaTitle,
            "description": metaDescription,
            "url": metaUrl,
            "image": metaImage,
            "publisher": {
              "@type": "Organization",
              "name": SITE_CONFIG.name,
              "logo": {
                "@type": "ImageObject",
                "url": SITE_CONFIG.logo
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": SITE_CONFIG.url
            },
            ...(type === "article" && {
              "author": {
                "@type": "Person",
                "name": metaAuthor
              },
              "datePublished": publishedTime,
              "dateModified": modifiedTime || publishedTime,
              "headline": title,
              "articleSection": section,
              "keywords": metaKeywords
            })
          })
        }}
      />
    </Head>
  );
} 