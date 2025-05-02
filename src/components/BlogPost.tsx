import React from 'react';
import { Helmet } from 'react-helmet-async';

interface BlogPostProps {
  title: string;
  description: string;
  date: string;
  content: string;
  tags: string[];
  readingTime: string;
  slug: string;
  author: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  description,
  date,
  content,
  tags,
  readingTime,
  slug,
  author
}) => {
  // Schema markup for individual blog post
  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "datePublished": date,
    "author": {
      "@type": "Person",
      "name": author
    },
    "keywords": tags.join(", "),
    "url": `https://username.github.io/gamedev-portfolio/blog/${slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://username.github.io/gamedev-portfolio/blog/${slug}`
    }
  };

  return (
    <>
      <Helmet>
        <title>{title} - GameDev Blog</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={tags.join(", ")} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={`${title} - GameDev Blog`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://username.github.io/gamedev-portfolio/blog/${slug}`} />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify(postSchema)}
        </script>
      </Helmet>

      <article className="section" itemScope itemType="https://schema.org/BlogPosting">
        <div className="container mx-auto max-w-4xl">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-trojan mb-4" itemProp="headline">
              {title}
            </h1>
            <div className="flex items-center gap-4 text-gray-600 mb-4">
              <span itemProp="datePublished">{date}</span>
              <span>•</span>
              <span>{readingTime}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-white bg-opacity-50 rounded-full text-sm text-forest-700"
                  itemProp="keywords"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div 
            className="prose prose-lg max-w-none"
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          <footer className="mt-12 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Written by <span itemProp="author">{author}</span>
              </div>
              <div className="flex gap-4">
                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(`https://username.github.io/gamedev-portfolio/blog/${slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-1 hover:text-gray-800 transition-colors"
                >
                  Share on X
                </a>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </>
  );
};

export default BlogPost; 