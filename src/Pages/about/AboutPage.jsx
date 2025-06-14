import React from "react";
import heroimg from "../../assets/profile-pic (8).png";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCertificate, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const AboutPage = () => {
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
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4 lg:px-8">
      <div className="container mx-auto pt-4">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <img
                src={heroimg}
                alt="Mahedi Hasan"
                className="rounded-2xl object-cover w-full h-auto max-h-[600px] border-4 border-emerald-500/20 shadow-2xl"
              />
              <div className="absolute -inset-8 border-2 border-emerald-500/30 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-6 -right-6 bg-emerald-500 w-32 h-32 rounded-full -z-10 blur-3xl opacity-30"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-1 bg-emerald-500 mr-4"></div>
              <h2 className="text-emerald-400 font-semibold tracking-wider">ABOUT ME</h2>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Front-End Developer & <span className="text-emerald-400">UI Specialist</span>
            </h1>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Hello, I'm Mahedi Hasan, a passionate front-end developer with expertise in creating modern, 
              responsive web applications. I hold a diploma in Computer Science and Technology and have 
              professional training in full-stack development. I specialize in React, JavaScript, and modern 
              CSS frameworks, crafting intuitive user experiences with clean, efficient code.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div>
                <h3 className="text-emerald-400 font-semibold mb-2">Front-End</h3>
                <p className="text-gray-300">HTML, CSS, JavaScript, React</p>
              </div>
              <div>
                <h3 className="text-emerald-400 font-semibold mb-2">Styling</h3>
                <p className="text-gray-300">Tailwind CSS, Bootstrap, SASS</p>
              </div>
              <div>
                <h3 className="text-emerald-400 font-semibold mb-2">Back-End</h3>
                <p className="text-gray-300">Node.js, Express, MongoDB</p>
              </div>
              <div>
                <h3 className="text-emerald-400 font-semibold mb-2">Tools</h3>
                <p className="text-gray-300">Git, VS Code, Figma, npm</p>
              </div>
            </div>
            
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/20"
            >
              Contact Me
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
          </motion.div>
        </div>

        {/* Experience & Education */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl"
          >
            <div className="flex items-center mb-10">
              <div className="p-3 bg-emerald-900/20 rounded-lg mr-4">
                <FaBriefcase className="text-emerald-400 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-white">Work Experience</h2>
            </div>
            
            <motion.div variants={item} className="relative pl-10 pb-10 border-l-2 border-emerald-500/30 ml-5">
              <div className="absolute -left-[18px] top-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Front-End Developer</h3>
              <div className="flex items-center text-gray-400 mb-3">
                <FaCalendarAlt className="mr-2" />
                <span>2024 - Present</span>
                <span className="mx-2">•</span>
                <FaMapMarkerAlt className="mr-2" />
                <span>BDCalling IT Ltd</span>
              </div>
              
              <p className="text-gray-300 mb-4">
                Developing responsive web applications using React and modern JavaScript. Collaborating with 
                design teams to implement UI/UX designs, optimizing performance, and ensuring cross-browser 
                compatibility.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-sm">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-sm">
                  Tailwind CSS
                </span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Education */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl"
          >
            <div className="flex items-center mb-10">
              <div className="p-3 bg-emerald-900/20 rounded-lg mr-4">
                <FaGraduationCap className="text-emerald-400 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-white">Education & Training</h2>
            </div>
            
            {/* Diploma */}
            <motion.div variants={item} className="relative pl-10 pb-10 border-l-2 border-emerald-500/30 ml-5">
              <div className="absolute -left-[18px] top-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Diploma in Computer Science</h3>
              <div className="flex items-center text-gray-400 mb-3">
                <FaCalendarAlt className="mr-2" />
                <span>2021 - 2025</span>
                <span className="mx-2">•</span>
                <FaMapMarkerAlt className="mr-2" />
                <span>Kishorganj Polytechnic Institute</span>
              </div>
              
              <p className="text-gray-300 mb-4">
                Comprehensive study of computer science fundamentals, software development methodologies, 
                and practical application of programming concepts.
              </p>
            </motion.div>
            
            {/* Professional Training */}
            <motion.div variants={item} className="relative pl-10 border-l-2 border-emerald-500/30 ml-5">
              <div className="absolute -left-[18px] top-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Complete Web Development Course</h3>
              <div className="flex items-center text-gray-400 mb-3">
                <FaCalendarAlt className="mr-2" />
                <span>2024</span>
                <span className="mx-2">•</span>
                <FaMapMarkerAlt className="mr-2" />
                <span>Programming Hero</span>
              </div>
              
              <p className="text-gray-300 mb-6">
                Intensive training in full-stack web development covering front-end technologies 
                (HTML, CSS, JavaScript, React) and back-end (Node.js, Express, MongoDB).
              </p>
              
              <a
                href="/src/assets/cirtificate.pdf"
                download="mehedi_hasan_certificate"
                className="inline-flex items-center px-5 py-2.5 bg-gray-700/50 hover:bg-emerald-600 text-white rounded-lg transition-colors"
              >
                <FaCertificate className="mr-2" />
                View Certificate
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Career Goals */}
        <motion.div 
          className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-10 border border-emerald-500/20 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Career Aspirations</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
            My goal is to establish myself as a professional front-end developer, creating 
            impactful digital experiences that solve real-world problems. I'm passionate about 
            staying current with industry trends and continuously improving my skills. I thrive 
            in collaborative environments where I can contribute to innovative projects while 
            learning from experienced professionals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;