import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaArrowRight, FaBookOpen } from 'react-icons/fa';

const Blogs = () => {
  const [expandedId, setExpandedId] = useState(null);
  
  const blogsData = [
    {
      id: 1,
      title: "Mastering React Components",
      author: "Mehedi Hasan",
      date: "May 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      content: [
        "React components are the building blocks of any React application. They allow you to split the UI into independent, reusable pieces that can be managed independently. Understanding component architecture is crucial for building scalable applications.",
        "There are two main types of components: functional components and class components. Functional components are simpler and recommended for most use cases, especially with the introduction of hooks.",
        "Props allow you to pass data from parent to child components, while state enables components to manage their own data and re-render when that data changes. Mastering the interplay between props and state is key to effective React development.",
      ]
    },
    {
      id: 2,
      title: "JavaScript Performance Optimization",
      author: "Mehedi Hasan",
      date: "April 28, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1300&q=80",
      content: [
        "JavaScript performance is critical for creating smooth, responsive web applications. Even small optimizations can lead to significant improvements in user experience.",
        "One of the most impactful optimizations is reducing the complexity of algorithms. Understanding Big O notation helps identify inefficient code paths that can be optimized.",
        "Memory management is another crucial aspect. Avoiding memory leaks by properly cleaning up event listeners, timeouts, and intervals prevents performance degradation over time.",
      ]
    },
    {
      id: 3,
      title: "Modern CSS Techniques",
      author: "Mehedi Hasan",
      date: "April 12, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      content: [
        "CSS has evolved significantly in recent years, offering powerful new features that simplify complex layouts and animations.",
        "CSS Grid and Flexbox have revolutionized layout design, making it possible to create responsive interfaces with minimal code and without relying on frameworks.",
        "Custom properties (CSS variables) allow you to define reusable values throughout your stylesheets, making theming and consistency much easier to manage.",
      ]
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <FaBookOpen className="text-emerald-500 text-2xl mr-3" />
            <span className="text-emerald-400 font-semibold tracking-wider">BLOG & ARTICLES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest <span className="text-emerald-400">Insights</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my latest articles on web development, design principles, and industry best practices
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog) => (
            <motion.div
              key={blog.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-all duration-300"></div>
              <div className="relative h-full bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden flex flex-col">
                {/* Blog Image */}
                <div className="h-56 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Blog Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-gray-400 text-sm">
                      <FaCalendarAlt className="mr-2 text-emerald-400" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <FaClock className="mr-2 text-emerald-400" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {blog.title}
                  </h3>
                  
                  <div className="text-gray-300 mb-6 flex-1">
                    {expandedId === blog.id ? (
                      <div className="space-y-3 text-sm">
                        {blog.content.map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))}
                      </div>
                    ) : (
                      <p className="line-clamp-3 text-sm">{blog.content[0]}</p>
                    )}
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-700/50 flex justify-between items-center">
                    <span className="text-sm text-gray-400">By {blog.author}</span>
                    <button
                      onClick={() => toggleExpand(blog.id)}
                      className="text-sm font-medium text-emerald-400 hover:text-emerald-300 flex items-center"
                    >
                      {expandedId === blog.id ? "Show Less" : "Read Full Article"}
                      <FaArrowRight className={`ml-2 text-xs transition-transform ${expandedId === blog.id ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-10 border border-emerald-500/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with My Latest Articles</h3>
            <p className="text-gray-300 mb-8">
              Subscribe to my newsletter to receive the latest articles, tutorials, and resources directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-5 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 flex-1 max-w-md"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-xl hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;