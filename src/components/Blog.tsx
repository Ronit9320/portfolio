import React from 'react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const posts = [
    {
      title: "Optimizing Memory Allocation in Game Engines",
      excerpt: "Exploring custom memory allocators and their impact on game performance. In this in-depth article, I discuss various allocation strategies, fragmentation issues, and how to profile memory usage effectively.",
      date: "March 15, 2024",
      slug: "memory-allocation-optimization"
    },
    {
      title: "Building a Modern Graphics Pipeline",
      excerpt: "A deep dive into implementing a Vulkan-based graphics pipeline. This article covers resource binding, shader compilation, and synchronization techniques for efficient rendering.",
      date: "February 28, 2024",
      slug: "modern-graphics-pipeline"
    },
    {
      title: "SIMD Optimization Techniques",
      excerpt: "How to leverage SIMD instructions for better performance in game physics. Learn about data alignment, intrinsics, and benchmarking methods to maximize computational throughput.",
      date: "February 10, 2024",
      slug: "simd-optimization"
    },
    {
      title: "Entity Component System Architecture",
      excerpt: "Designing an ECS for modern game engines. This article explores data-oriented design principles and how they can be applied to create high-performance game object management systems.",
      date: "January 22, 2024",
      slug: "ecs-architecture"
    },
    {
      title: "Profiling and Optimizing Game Performance",
      excerpt: "Tools and techniques for identifying performance bottlenecks in your game. Learn how to use hardware counters, profilers, and visualization tools to pinpoint optimization opportunities.",
      date: "January 5, 2024",
      slug: "performance-profiling"
    }
  ];

  return (
    <section className="section">
      <div className="container mx-auto">
        <h2 className="section-title text-center text-glow">Technical Blog</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Deep dives into game development techniques, focusing on performance, graphics, and low-level optimizations.
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
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="fancy-link inline-block mt-2 font-semibold"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mythical-divider mx-auto w-3/4 mt-12"></div>
        
        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto mythical-border p-6">
            <h3 className="text-xl font-trojan mb-4">Subscribe to Newsletter</h3>
            <p className="mb-6">
              Get notified when I publish new articles on game development techniques and performance optimization.
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