import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="section bg-[#F5F5DC]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-['Trojan_Pro'] text-[#2F4F4F] text-center mb-12 mythical-border">
          Contact
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="card p-8">
            <form className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-[#2F4F4F] font-['Open_Sans'] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-[#ADD8E6] focus:outline-none focus:ring-2 focus:ring-[#556B2F]"
                />
              </div>
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-[#2F4F4F] font-['Open_Sans'] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-[#ADD8E6] focus:outline-none focus:ring-2 focus:ring-[#556B2F]"
                />
              </div>
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-[#2F4F4F] font-['Open_Sans'] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-[#ADD8E6] focus:outline-none focus:ring-2 focus:ring-[#556B2F]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#556B2F] text-white py-3 rounded-lg hover:bg-[#2F4F4F] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
            <div className="mt-12 text-center">
              <p className="text-[#696969] font-['Open_Sans']">
                Or reach out directly at:{" "}
                <a 
                  href="mailto:your.email@example.com" 
                  className="text-[#556B2F] hover:text-[#2F4F4F] transition-colors duration-300"
                >
                  your.email@example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 