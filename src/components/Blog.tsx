import React from 'react';

const Blog: React.FC = () => {
  const posts = [
    {
      title: "Welcome to My Blog",
      excerpt: "Join me as I share insights from my journey in game development and programming. I'll be documenting my experiences, learnings, and thoughts on various aspects of software development and game creation.",
      date: "March 20, 2024",
      slug: "welcome"
    }
  ];

  return (
    <section className="section">
      <div className="container mx-auto">
        <h2 className="section-title text-center text-glow">Blogs</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Thoughts, experiences, and insights from my journey in game development and programming.
        </p>
        
        <div className="mythical-divider mx-auto w-3/4 mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="blog-card mb-10"
            >
              <div className="p-6">
                <div className="blog-date mb-2">{post.date}</div>
                <h3 className="text-xl font-trojan mb-3">
                  {post.title}
                </h3>
                <p className="blog-excerpt mb-4">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}

          <article className="blog-card mb-10">
            <div className="p-6 text-center">
              <h3 className="text-xl font-trojan mb-3">More Posts Coming Soon</h3>
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
  );
};

export default Blog; 