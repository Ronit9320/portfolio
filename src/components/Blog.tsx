import React from 'react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const posts = [
    {
      title: "Welcome to My Technical Blog",
      excerpt: "Join me as I share insights from my journey in game development, graphics programming, and low-level systems. From raytracing and shaders to kernel development and networking, I'll be documenting my learnings and project experiences. As a self-taught developer focusing on C++ and system programming, I'll be sharing detailed technical write-ups about my projects, including game engine development, graphics programming with OpenGL and SDL, and various system-level explorations.",
      date: "March 20, 2024",
      slug: "welcome"
    }
  ];

  return (
    <section className="section">
      <div className="container mx-auto">
        <h2 className="section-title text-center text-glow">Technical Blog</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Deep dives into low-level programming, graphics, game engine development, and system programming. 
          Follow my journey as I explore raytracing, shaders, kernel development, and open source contributions.
        </p>
        
        <div className="mythical-divider mx-auto w-3/4 mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
          {/* Welcome Post */}
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
                <Link 
                  to="/blog" 
                  className="fancy-link inline-block mt-2 font-semibold"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}

          {/* Coming Soon Card */}
          <article className="blog-card mb-10">
            <div className="p-6 text-center">
              <h3 className="text-xl font-trojan mb-3">Technical Deep Dives Coming Soon</h3>
              <p className="blog-excerpt mb-4">
                Upcoming articles will cover a range of technical topics including:
                <br/><br/>
                • Game Engine Architecture and Development<br/>
                • Graphics Programming with OpenGL and SDL<br/>
                • Raytracing and Shader Development<br/>
                • System Programming and Kernel Exploration<br/>
                • Networking in Game Development<br/>
                • Open Source Contributions and Experiences<br/>
                <br/>
                Follow me on X for regular updates on my programming journey and new blog posts.
              </p>
            </div>
          </article>
        </div>
        
        <div className="mythical-divider mx-auto w-3/4 mt-12"></div>
        
        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto mythical-border p-6">
            <h3 className="text-xl font-trojan mb-4">Stay Updated</h3>
            <p className="mb-6">
              Subscribe to get notified about new articles on game development, graphics programming, 
              and low-level system exploration.
            </p>
            <div className="flex max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-2 rounded-l-md border border-r-0 border-accent-1 focus:outline-none"
              />
              <button className="submit-button rounded-l-none">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog; 