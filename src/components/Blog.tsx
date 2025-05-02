import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog: React.FC = () => {
  const posts = [
    {
      title: "Welcome to My Blog",
      excerpt: "Join me as I share insights from my journey in game development and programming. I'll be documenting my experiences, learnings, and thoughts on various aspects of software development and game creation.",
      date: "2024-03-20",
      slug: "welcome",
      tags: ["Game Development", "Programming", "Learning Journey"],
      readingTime: "5 min read"
    }
  ];

  // Schema markup for blog
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "GameDev Portfolio Blog",
    "description": "Insights and experiences from game development and programming",
    "url": "https://username.github.io/gamedev-portfolio/blog",
    "author": {
      "@type": "Person",
      "name": "Ronit Shah"
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": "Ronit Shah"
      },
      "keywords": post.tags.join(", ")
    }))
  };

  return (
    <>
      <Helmet>
        <title>GameDev Blog - Insights on Game Development and Programming</title>
        <meta name="description" content="Explore insights, tutorials, and experiences in game development, programming, and technical deep-dives." />
        <meta name="keywords" content="game development blog, programming tutorials, game engine development, OpenGL, Vulkan, C++" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="GameDev Blog - Technical Insights and Tutorials" />
        <meta property="og:description" content="Dive into game development, programming tutorials, and technical deep-dives." />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content="https://username.github.io/gamedev-portfolio/blog" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GameDev Blog - Technical Insights" />
        <meta name="twitter:description" content="Explore game development, programming tutorials, and technical deep-dives." />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
      </Helmet>

      <section className="section">
        <div className="container mx-auto">
          <h1 className="section-title text-center text-glow">GameDev Blog</h1>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            Technical insights, tutorials, and experiences from my journey in game development and programming.
          </p>
          
          <div className="mythical-divider mx-auto w-3/4 mb-12"></div>
          
          <div className="max-w-4xl mx-auto">
            {posts.map((post, index) => (
              <article 
                key={index}
                className="blog-card mb-10"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <div className="p-6">
                  <div className="blog-date mb-2" itemProp="datePublished">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <h2 className="text-xl font-trojan mb-3" itemProp="headline">
                    {post.title}
                  </h2>
                  <p className="blog-excerpt mb-4" itemProp="description">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <React.Fragment key={tagIndex}>
                        <span 
                          className="project-tag"
                          itemProp="keywords"
                        >
                          {tag}
                        </span>
                        {tagIndex < post.tags.length - 1 && <span className="text-gray-400">•</span>}
                      </React.Fragment>
                    ))}
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-600">{post.readingTime}</span>
                  </div>
                  <a 
                    href={`/blog/${post.slug}`}
                    className="fancy-link inline-block mt-4 font-semibold"
                    itemProp="url"
                  >
                    Read More
                  </a>
                </div>
              </article>
            ))}

            <article className="blog-card mb-10">
              <div className="p-6 text-center">
                <h2 className="text-xl font-trojan mb-3">More Posts Coming Soon</h2>
                <p className="blog-excerpt mb-4">
                  Upcoming articles will cover various topics including:
                  <br/><br/>
                  • Game Development Experiences<br/>
                  • Programming Insights<br/>
                  • Project Updates<br/>
                  • Learning Journey<br/>
                  • Industry Thoughts<br/>
                  • Open Source Contributions<br/>
                  <br/>
                  Follow me on X for regular updates and new blog posts.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog; 