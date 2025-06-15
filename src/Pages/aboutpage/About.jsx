import { Link } from "react-router-dom";
import heroimg from "../../assets/smile.jpg";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaServer, FaTools } from "react-icons/fa";

const About = () => {
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

  const skills = [
    { 
      category: "Frontend", 
      icon: <FaCode className="text-emerald-400 text-xl" />,
      items: ["HTML5", "CSS3", "JavaScript", "React","Next.js", "Tailwind CSS", "Bootstrap"]
    },
    { 
      category: "Backend", 
      icon: <FaServer className="text-emerald-400 text-xl" />,
      items: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
    },
    { 
      category: "Tools", 
      icon: <FaTools className="text-emerald-400 text-xl" />,
      items: ["Git", "VS Code", "Figma", "npm","RTK QUERY"]
    },
    { 
      category: "Currently Learning", 
      icon: <FaLaptopCode className="text-emerald-400 text-xl" />,
      items: ["Figma", "Fremar motion", "Mobile app publishing"]
    }
  ];

  return (
    <section id="about" className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500 to-teal-500 rounded-2xl transform rotate-6 z-0"></div>
              <img
                src={heroimg}
                alt="Mahedi Hasan"
                className="relative rounded-2xl object-cover w-full h-auto border-4 border-gray-800 z-10"
              />
            </div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 px-6 rounded-xl shadow-lg z-20">
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">1+ Year</span>
                <span className="text-sm">Experience</span>
              </div>
            </div>
          </motion.div>
          
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-1 bg-emerald-500 mr-4"></div>
              <h2 className="text-emerald-400 font-semibold tracking-wider">ABOUT ME</h2>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Front-End Developer & <span className="text-emerald-400">UI Specialist</span>
            </h1>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Hello, I'm Mahedi Hasan, a passionate front-end developer with expertise in creating modern, 
              responsive web applications. I hold a diploma in Computer Science and Technology and have 
              professional training in full-stack development.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              I specialize in crafting intuitive user experiences with clean, efficient code using React, 
              JavaScript, and modern CSS frameworks. With hands-on experience in full-stack projects, 
              I bring both frontend expertise and backend understanding to create comprehensive web solutions.
            </p>
            
            {/* Skills Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-6 mb-10"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-800/50 p-5 rounded-xl border border-gray-700/50"
                  variants={item}
                >
                  <div className="flex items-center mb-3">
                    {skill.icon}
                    <h3 className="text-white font-semibold ml-3">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, idx) => (
                      <span 
                        key={idx} 
                        className="text-sm bg-gray-900/50 text-gray-300 px-3 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <Link to="/contact">
              <motion.button 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/20"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
                <svg 
                  className="ml-2 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        </div>
        
        {/* Career Statement */}
        <motion.div 
          className="mt-24 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-10 border border-emerald-500/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">Career Focus</h3>
              <p className="text-gray-300 max-w-3xl">
                I'm passionate about creating intuitive, responsive user interfaces with clean, 
                maintainable code. My goal is to deliver exceptional digital experiences that 
                solve real problems while staying current with evolving web technologies.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link to="/projects">
                <button className="px-6 py-3 bg-transparent border-2 border-emerald-500 text-emerald-400 font-medium rounded-lg hover:bg-emerald-500 hover:text-white transition-colors">
                  View Projects
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;