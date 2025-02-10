import { motion } from "framer-motion";
import { FaReact, FaCode, FaLaptopCode, FaServer, FaDatabase, FaShoppingCart } from "react-icons/fa";

const services = [
  { id: 1, title: "Frontend Development", icon: <FaReact />, desc: "Building stunning, responsive, and interactive UIs using React and modern frameworks." },
  { id: 2, title: "Custom Website Development", icon: <FaLaptopCode />, desc: "Crafting unique, fast, and SEO-friendly websites tailored to your needs." },
  { id: 3, title: "Full-Stack Development", icon: <FaCode />, desc: "Developing complete web applications with both frontend and backend integration." },
  { id: 4, title: "Backend Development", icon: <FaServer />, desc: "Creating robust and scalable backend systems using Node.js, Express, and MongoDB." },
  { id: 5, title: "Database Management", icon: <FaDatabase />, desc: "Optimizing and managing databases for efficient data storage and retrieval." },
  { id: 6, title: "E-Commerce Solutions", icon: <FaShoppingCart />, desc: "Building scalable and secure online stores with seamless payment integration." }
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-4xl font-bold text-green-400 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Services
        </motion.h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-12">
          I specialize in developing high-quality web applications with a focus on performance, security, and user experience.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl text-green-400 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
