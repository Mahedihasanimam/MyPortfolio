"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaBootstrap, FaReact, 
  FaNode, FaJsSquare, FaGitAlt, FaFigma 
} from "react-icons/fa";
import { 
  RiTailwindCssFill, 
  RiArrowRightSLine,
  RiArrowLeftSLine
} from "react-icons/ri";
import { 
  SiExpress, SiMongodb, SiJsonwebtokens, 
  SiTypescript, SiNextdotjs, SiRedux,
  SiFirebase, SiVisualstudiocode
} from "react-icons/si";

const skillsData = [
  { 
    name: "HTML", 
    icon: <FaHtml5 className="text-[#E34F26]" />,
    level: 95,
    category: "Frontend"
  },
  { 
    name: "CSS", 
    icon: <FaCss3Alt className="text-[#1572B6]" />,
    level: 90,
    category: "Frontend"
  },
  { 
    name: "Tailwind CSS", 
    icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
    level: 92,
    category: "Frontend"
  },
  { 
    name: "Bootstrap", 
    icon: <FaBootstrap className="text-[#7952B3]" />,
    level: 88,
    category: "Frontend"
  },
  { 
    name: "JavaScript", 
    icon: <FaJsSquare className="text-[#F7DF1E]" />,
    level: 90,
    category: "Language"
  },
  { 
    name: "React", 
    icon: <FaReact className="text-[#61DAFB]" />,
    level: 92,
    category: "Frontend"
  },
  { 
    name: "Next.js", 
    icon: <SiNextdotjs className="text-white" />,
    level: 85,
    category: "Frontend"
  },
  { 
    name: "TypeScript", 
    icon: <SiTypescript className="text-[#3178C6]" />,
    level: 80,
    category: "Language"
  },
  { 
    name: "Redux", 
    icon: <SiRedux className="text-[#764ABC]" />,
    level: 85,
    category: "State"
  },
  { 
    name: "Node.js", 
    icon: <FaNode className="text-[#339933]" />,
    level: 85,
    category: "Backend"
  },
  { 
    name: "Express", 
    icon: <SiExpress className="text-white" />,
    level: 83,
    category: "Backend"
  },
  { 
    name: "MongoDB", 
    icon: <SiMongodb className="text-[#47A248]" />,
    level: 80,
    category: "Database"
  },
  { 
    name: "Firebase", 
    icon: <SiFirebase className="text-[#FFCA28]" />,
    level: 82,
    category: "Backend"
  },
  { 
    name: "JWT", 
    icon: <SiJsonwebtokens className="text-white" />,
    level: 78,
    category: "Security"
  },
  { 
    name: "Git", 
    icon: <FaGitAlt className="text-[#F05032]" />,
    level: 87,
    category: "Tool"
  },
  { 
    name: "VS Code", 
    icon: <SiVisualstudiocode className="text-[#007ACC]" />,
    level: 95,
    category: "Tool"
  },
  { 
    name: "Figma", 
    icon: <FaFigma className="text-[#F24E1E]" />,
    level: 75,
    category: "Design"
  },
];

const categoryColors = {
  Frontend: "from-blue-500 to-cyan-500",
  Language: "from-yellow-500 to-amber-500",
  Backend: "from-green-500 to-emerald-500",
  Database: "from-emerald-500 to-teal-500",
  State: "from-purple-500 to-indigo-500",
  Security: "from-red-500 to-orange-500",
  Tool: "from-gray-500 to-slate-500",
  Design: "from-pink-500 to-rose-500",
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState(null);
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  
  // Get unique categories
  const categories = ["All", ...new Set(skillsData.map(skill => skill.category))];
  
  // Filter skills based on category
  const filteredSkills = activeCategory === "All" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);
  
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
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical <span className="text-emerald-400">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              My proficiency across the modern development stack, with continuous growth in emerging technologies
            </p>
          </motion.div>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r " + (categoryColors[category] || "from-emerald-500 to-teal-500") + " text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group"
              onClick={() => setSelectedSkill(skill)}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm h-full rounded-2xl p-6 border border-gray-700/50 flex flex-col items-center cursor-pointer transition-all duration-300 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-400 mt-2">{skill.level}% Proficiency</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Skill Details Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div 
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div 
                className="bg-gray-800/90 backdrop-blur-lg rounded-2xl max-w-md w-full p-8 border border-emerald-500/30 relative"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                  onClick={() => setSelectedSkill(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="text-6xl mb-6 flex justify-center">
                  {selectedSkill.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white text-center mb-2">
                  {selectedSkill.name}
                </h3>
                
                <div className="flex justify-between items-center mb-6">
                  <span className="text-emerald-400 font-medium">{selectedSkill.category}</span>
                  <span className="text-gray-400">{selectedSkill.level}% Proficiency</span>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-3 mb-8">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full"
                    style={{ width: `${selectedSkill.level}%` }}
                  ></div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Experience Level</h4>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-5 h-5 ${i < Math.floor(selectedSkill.level / 20) ? 'text-emerald-400' : 'text-gray-700'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-gray-400">
                        {selectedSkill.level >= 90 ? 'Expert' : 
                         selectedSkill.level >= 75 ? 'Advanced' : 
                         selectedSkill.level >= 60 ? 'Intermediate' : 'Beginner'}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Projects Applied</h4>
                    <p className="text-gray-400">
                      {selectedSkill.level >= 80 
                        ? 'Multiple complex projects with production deployment'
                        : selectedSkill.level >= 60 
                          ? 'Several projects with practical implementation'
                          : 'Learning projects and small implementations'}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;