import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const loadingToast = toast.loading('Sending message...');

    emailjs
      .sendForm('service_ydxgtpr', 'template_yxrrpp4', form.current, {
        publicKey: 'rJV8DbjidT1YSon1o',
      })
      .then(
        () => {
          toast.dismiss(loadingToast);
          toast.success('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          toast.dismiss(loadingToast);
          toast.error('Failed to send message. Please try again.');
          console.error('Email sending failed:', error.text);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" className="py-20 px-4 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <Toaster position="top-center" toastOptions={{ 
        style: { 
          background: '#1f2937', 
          color: 'white',
          border: '1px solid #374151'
        } 
      }} />
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="text-emerald-400">Connect</span>
          </h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6" />
          <p className="text-xl text-gray-300">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you. Fill out the form or use my contact details.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold text-white mb-8">
              Contact <span className="text-emerald-400">Information</span>
            </h2>
            
            <motion.div 
              className="space-y-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {/* Location */}
              <motion.div className="flex items-start" variants={item}>
                <div className="bg-emerald-900/20 p-3 rounded-xl mr-4">
                  <FaMapMarkerAlt className="text-emerald-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                  <p className="text-gray-300">Mymensingh, Bangladesh</p>
                </div>
              </motion.div>
              
              {/* Phone */}
              <motion.div className="flex items-start" variants={item}>
                <div className="bg-emerald-900/20 p-3 rounded-xl mr-4">
                  <FaPhone className="text-emerald-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                  <p className="text-gray-300">+880 1860 650 703</p>
                </div>
              </motion.div>
              
              {/* Email */}
              <motion.div className="flex items-start" variants={item}>
                <div className="bg-emerald-900/20 p-3 rounded-xl mr-4">
                  <FaEnvelope className="text-emerald-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <p className="text-gray-300">mdmehedihasan678@gmail.com</p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Social Links */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-white mb-6">Connect With Me</h3>
              <div className="flex space-x-6">
                <motion.a 
                  href="https://www.facebook.com/profile.php?id=100064053792788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700/50 hover:bg-emerald-600 p-4 rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaFacebook className="text-white text-xl" />
                </motion.a>
                
                <motion.a 
                  href="https://github.com/Mahedihasanimam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700/50 hover:bg-emerald-600 p-4 rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub className="text-white text-xl" />
                </motion.a>
                
                <motion.a 
                  href="https://www.linkedin.com/in/mehedi60/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700/50 hover:bg-emerald-600 p-4 rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <CiLinkedin className="text-white text-2xl" />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold text-white mb-8">
              Send Me a <span className="text-emerald-400">Message</span>
            </h2>
            
            <form ref={form} onSubmit={sendEmail}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    placeholder="John Doe"
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl py-4 px-5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    placeholder="john@example.com"
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl py-4 px-5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Hello, I'd like to discuss..."
                    rows="5"
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl py-4 px-5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all ${
                    isSubmitting 
                      ? 'bg-gray-700 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;