"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNode,
  FaJsSquare,
  FaGitAlt,
  FaFigma,
  FaMobileAlt,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiFirebase,
  SiVisualstudiocode,
  SiExpo,
  SiPostman,
} from "react-icons/si";

// 1. Updated Data Structure: Removed numbers, added descriptive levels
const skillsData = [
  // --- Mobile ---
  {
    name: "React Native",
    icon: <FaReact className="text-[#61DAFB]" />,
    level: "Advanced",
    category: "Mobile",
    desc: "Building cross-platform iOS & Android apps with shared codebases.",
  },
  {
    name: "Expo",
    icon: <SiExpo className="text-white" />,
    level: "Advanced",
    category: "Mobile",
    desc: "Rapid prototyping, EAS Build, and OTA updates management.",
  },
  {
    name: "NativeWind",
    icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
    level: "Intermediate",
    category: "Mobile",
    desc: "Styling mobile apps using utility-first classes (Tailwind for Native).",
  },

  // --- Frontend ---
  {
    name: "React",
    icon: <FaReact className="text-[#61DAFB]" />,
    level: "Expert",
    category: "Frontend",
    desc: "Component-based architecture, Hooks, and performance optimization.",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white" />,
    level: "Advanced",
    category: "Frontend",
    desc: "SSR, SSG, App Router, and server-side optimizations.",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#3178C6]" />,
    level: "Advanced",
    category: "Language",
    desc: "Static typing, interfaces, and generic types for robust code.",
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
    level: "Expert",
    category: "Frontend",
    desc: "Responsive design systems and complex layouts.",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-[#F7DF1E]" />,
    level: "Expert",
    category: "Language",
    desc: "ES6+, Async/Await, DOM manipulation, and logic.",
  },
  {
    name: "Redux Toolkit",
    icon: <SiRedux className="text-[#764ABC]" />,
    level: "Advanced",
    category: "State",
    desc: "Global state management, RTK Query for data fetching.",
  },

  // --- Backend ---
  {
    name: "Node.js",
    icon: <FaNode className="text-[#339933]" />,
    level: "Intermediate",
    category: "Backend",
    desc: "Runtime environment for scalable server-side logic.",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-white" />,
    level: "Intermediate",
    category: "Backend",
    desc: "Building RESTful APIs and middleware integration.",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#47A248]" />,
    level: "Intermediate",
    category: "Database",
    desc: "NoSQL schema design, aggregation pipelines, and Mongoose.",
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-[#FFCA28]" />,
    level: "Intermediate",
    category: "Backend",
    desc: "Authentication, Firestore, and Realtime Database.",
  },

  // --- Tools ---
  {
    name: "Git & GitHub",
    icon: <FaGitAlt className="text-[#F05032]" />,
    level: "Advanced",
    category: "Tool",
    desc: "Version control, branching strategies, and collaboration.",
  },
  {
    name: "VS Code",
    icon: <SiVisualstudiocode className="text-[#007ACC]" />,
    level: "Expert",
    category: "Tool",
    desc: "Extensions, debugging, and productivity workflows.",
  },
  {
    name: "Figma",
    icon: <FaFigma className="text-[#F24E1E]" />,
    level: "Intermediate",
    category: "Design",
    desc: "UI/UX translation to code and asset extraction.",
  },
];

const categoryColors = {
  Mobile: "from-purple-500 to-indigo-500",
  Frontend: "from-blue-500 to-cyan-500",
  Language: "from-yellow-500 to-amber-500",
  Backend: "from-green-500 to-emerald-500",
  Database: "from-emerald-500 to-teal-500",
  State: "from-pink-500 to-rose-500",
  Tool: "from-gray-500 to-slate-500",
  Design: "from-orange-500 to-red-500",
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Custom sorting to put Mobile first when "All" is selected
  const categories = ["All", "Mobile", "Frontend", "Backend", "Tools"];

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => {
          if (activeCategory === "Tools")
            return ["Tool", "Design"].includes(skill.category);
          return skill.category === activeCategory;
        });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  // Helper to determine badge color
  const getLevelColor = (level) => {
    switch (level) {
      case "Expert":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "Advanced":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-gray-700/50 text-gray-300 border-gray-600/30";
    }
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical <span className="text-emerald-400">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A comprehensive toolkit for building scalable web and mobile
              applications.
            </p>
          </motion.div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-emerald-500 border-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                  : "bg-gray-800/50 border-gray-700 text-gray-400 hover:border-emerald-500/50 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid - No Progress Bars, Clean Cards */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
          variants={container}
          initial="hidden"
          animate="show"
          key={activeCategory} // Rerender animation on category change
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group cursor-pointer"
              onClick={() => setSelectedSkill(skill)}
            >
              <div className="h-full bg-gray-800/40 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 flex flex-col items-center justify-center gap-4 transition-all duration-300 group-hover:border-emerald-500/50 group-hover:bg-gray-800/80 group-hover:-translate-y-1 shadow-lg">
                {/* Icon with glow effect on hover */}
                <div className="text-5xl transition-transform duration-300 group-hover:scale-110 drop-shadow-lg">
                  {skill.icon}
                </div>

                <div className="text-center">
                  <h3 className="text-white font-semibold mb-2">
                    {skill.name}
                  </h3>
                  {/* Badge instead of Progress Bar */}
                  <span
                    className={`text-xs px-2 py-1 rounded-md border ${getLevelColor(
                      skill.level
                    )}`}
                  >
                    {skill.level}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Details Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                className="bg-gray-900 rounded-2xl max-w-md w-full p-8 border border-gray-700 shadow-2xl relative overflow-hidden"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Decorative background gradient */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                    categoryColors[selectedSkill.category] ||
                    "from-emerald-500 to-teal-500"
                  }`}
                ></div>

                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                  onClick={() => setSelectedSkill(null)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="flex flex-col items-center text-center mb-6">
                  <div className="text-6xl mb-4 p-4 bg-gray-800 rounded-2xl border border-gray-700">
                    {selectedSkill.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {selectedSkill.name}
                  </h3>
                  <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
                    {selectedSkill.category}
                  </span>
                </div>

                <div className="space-y-4 bg-gray-800/50 p-5 rounded-xl border border-gray-700/50">
                  <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span className="text-gray-400 text-sm">Proficiency</span>
                    <span
                      className={`text-sm font-semibold px-2 py-0.5 rounded ${getLevelColor(
                        selectedSkill.level
                      )}`}
                    >
                      {selectedSkill.level}
                    </span>
                  </div>

                  <div>
                    <span className="text-gray-400 text-sm block mb-1">
                      Overview
                    </span>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {selectedSkill.desc}
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
