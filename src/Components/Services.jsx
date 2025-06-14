import { motion } from "framer-motion";
import { 
  FaReact, FaCode, FaLaptopCode, 
  FaServer, FaDatabase, FaShoppingCart,
  FaMobileAlt, FaChartLine, FaShieldAlt
} from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

const services = [
  { 
    id: 1, 
    title: "Frontend Development", 
    icon: <FaReact className="text-4xl" />, 
    desc: "Building stunning, responsive, and interactive UIs using React and modern frameworks with optimized performance.",
    color: "from-cyan-500 to-blue-500"
  },
  { 
    id: 2, 
    title: "Custom Web Solutions", 
    icon: <FaLaptopCode className="text-4xl" />, 
    desc: "Crafting unique, fast, and SEO-friendly websites tailored to your business requirements and goals.",
    color: "from-violet-500 to-purple-500"
  },
  { 
    id: 3, 
    title: "Full-Stack Development", 
    icon: <FaCode className="text-4xl" />, 
    desc: "Developing complete web applications with seamless frontend-backend integration and scalable architecture.",
    color: "from-emerald-500 to-teal-500"
  },
  { 
    id: 4, 
    title: "Backend Development", 
    icon: <FaServer className="text-4xl" />, 
    desc: "Creating robust, secure, and scalable backend systems using Node.js, Express, and modern databases.",
    color: "from-orange-500 to-amber-500"
  },
  { 
    id: 5, 
    title: "Database Solutions", 
    icon: <FaDatabase className="text-4xl" />, 
    desc: "Designing and optimizing databases for efficient data storage, retrieval, and management.",
    color: "from-pink-500 to-rose-500"
  },
  { 
    id: 6, 
    title: "E-Commerce Platforms", 
    icon: <FaShoppingCart className="text-4xl" />, 
    desc: "Building scalable, secure online stores with seamless payment integration and inventory management.",
    color: "from-blue-500 to-indigo-500"
  },
  { 
    id: 7, 
    title: "Mobile-First Development", 
    icon: <FaMobileAlt className="text-4xl" />, 
    desc: "Creating responsive designs that prioritize mobile experience with progressive enhancement.",
    color: "from-green-500 to-emerald-500"
  },
  { 
    id: 8, 
    title: "Performance Optimization", 
    icon: <FaChartLine className="text-4xl" />, 
    desc: "Enhancing application speed, efficiency, and user experience through advanced optimization techniques.",
    color: "from-yellow-500 to-amber-500"
  }
];

const Services = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center mb-4">
              <RiCustomerService2Fill className="text-emerald-500 text-3xl mr-3" />
              <span className="text-emerald-400 font-semibold tracking-wider">SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Professional <span className="text-emerald-400">Solutions</span>
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to elevate your online presence and business performance
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={item}
              className="group relative"
              whileHover={{ y: -10 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r rounded-xl from-emerald-500 to-teal-500 blur opacity-0 group-hover:opacity-75 transition-all duration-300"></div>
              <div className="relative h-full bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 flex flex-col">
                <div className={`mb-6 p-4 rounded-xl bg-gradient-to-r ${service.color} w-fit`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 flex-1">{service.desc}</p>
                
                <div className="mt-8 pt-6 border-t border-gray-700/50 flex items-center">
                  <span className="text-emerald-400 group-hover:text-white transition-colors">
                    Learn more
                  </span>
                  <svg 
                    className="ml-2 w-4 h-4 text-emerald-400 group-hover:translate-x-1 group-hover:text-white transition-all" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-10 border border-emerald-500/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to elevate your digital presence?</h3>
              <p className="text-gray-300 max-w-2xl">
                Let's discuss how my services can help you achieve your business goals with custom digital solutions.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/20"
              >
                Get Started
                <svg 
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;