import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // This would typically come from a database or CMS
  const post = {
    title: "Welcome to My Blog",
    date: "2025-05-02",
    content: `
      <div class="text-center py-12">
        <h2 class="text-2xl font-trojan mb-4">Blogs Starting Soon</h2>
        <p class="text-gray-600">Stay tuned for upcoming content about game development, programming insights, and technical deep-dives.</p>
      </div>
    `,
    tags: ["Game Development", "Programming", "Learning Journey"],
    readingTime: "5 min read"
  };

  // Schema markup for blog post
  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": "Ronit Shah"
    },
    "description": "Welcome to my game development blog where I share insights and experiences.",
    "keywords": post.tags.join(", ")
  };

  return (
    <>
      <Helmet>
        <title>{post.title} - GameDev Blog</title>
        <meta name="description" content="Welcome to my game development blog where I share insights and experiences." />
        <meta name="keywords" content={post.tags.join(", ")} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={`${post.title} - GameDev Blog`} />
        <meta property="og:description" content="Welcome to my game development blog where I share insights and experiences." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://ronit9320.github.io/gamedev-portfolio/blog/${slug}`} />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} - GameDev Blog`} />
        <meta name="twitter:description" content="Welcome to my game development blog where I share insights and experiences." />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify(postSchema)}
        </script>
      </Helmet>

      <section className="section">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="fancy-link inline-block mb-8">
              ← Back to Blog
            </Link>

            <article className="blog-card" itemScope itemType="https://schema.org/BlogPosting">
              <div className="p-6">
                <div className="blog-date mb-2" itemProp="datePublished">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <h1 className="text-3xl font-trojan text-glow" itemProp="headline">
                    {post.title}
                  </h1>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600">{post.readingTime}</span>
                </div>
                <div 
                  className="prose prose-lg max-w-none"
                  itemProp="articleBody"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost; 