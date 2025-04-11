import React from 'react';

const Blog: React.FC = () => {
  const posts = [
    {
      title: "Optimizing Memory Allocation in Game Engines",
      excerpt: "Exploring custom memory allocators and their impact on game performance...",
      date: "March 15, 2024",
      symbol: "📜"
    },
    {
      title: "Building a Modern Graphics Pipeline",
      excerpt: "A deep dive into implementing a Vulkan-based graphics pipeline...",
      date: "February 28, 2024",
      symbol: "🎨"
    },
    {
      title: "SIMD Optimization Techniques",
      excerpt: "How to leverage SIMD instructions for better performance in game physics...",
      date: "February 10, 2024",
      symbol: "⚡"
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-['Trojan_Pro'] text-[#2F4F4F] text-center mb-12 mythical-border">
          Blog
        </h2>
        <div className="max-w-3xl mx-auto">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="card mb-12 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl text-[#556B2F]">
                  {post.symbol}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-['Trojan_Pro'] text-[#556B2F] mb-2">
                    {post.title}
                  </h3>
                  <p className="text-[#696969] font-['Open_Sans'] mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#696969]">
                      {post.date}
                    </span>
                    <button className="text-[#556B2F] hover:text-[#2F4F4F] transition-colors duration-300">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog; 