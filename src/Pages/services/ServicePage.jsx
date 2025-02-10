import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaServer, FaGlobe } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode size={50} className="text-green-500" />, 
    title: "Front-End Development",
    description: "Crafting responsive and engaging user interfaces with modern technologies like React and Next.js.",
  },
  {
    icon: <FaCode size={50} className="text-green-500" />, 
    title: "Full-Stack Development",
    description: "Building complete web applications with seamless integration between front-end and back-end.",
  },
  {
    icon: <FaServer size={50} className="text-green-500" />, 
    title: "Back-End Development",
    description: "Developing robust APIs and server-side applications with Node.js, Express, and MongoDB.",
  },
  {
    icon: <FaGlobe size={50} className="text-green-500" />, 
    title: "Custom Website Development",
    description: "Creating tailored web solutions that meet your business needs and brand identity.",
  },
];

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl lg:text-6xl font-bold text-center text-white mb-10"
      >
        My Services
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold text-white text-center mb-3">{service.title}</h2>
            <p className="text-gray-400 text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-16 text-center"
      >
        <h3 className="text-3xl font-semibold text-white mb-4">Ready to Build Something Amazing?</h3>
        <p className="text-gray-400 mb-6">Let’s work together to create stunning web applications.</p>
        <a href="/contact" className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-medium">Contact Me</a>
      </motion.div>
    </div>
  );
};

export default ServicesPage;
