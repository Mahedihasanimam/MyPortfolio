import { useState, useMemo } from "react";
import ProjectsCard from "./ProjectsCard";
import { motion, AnimatePresence } from "framer-motion";

// Images (Keeping your existing imports)
import travel from "../../../src/assets/travel.png";
import course from "../../../src/assets/course.png";
import property from "../../../src/assets/property.png";
import assets from "../../../src/assets/assets.png";
import bookingdashboard from "../../../src/assets/bookingdashboard.png";
import pantogonostisdashboard from "../../../src/assets/pantogonostisdashboard.png";
import ai from "../../../src/assets/ai.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = useMemo(
    () => [
      {
        id: 101, // New ID
        title: "RetailPulse - Mobile POS",
        description:
          "A production-grade Mobile Point of Sale (POS) application used by retail stores. Features offline database synchronization, barcode scanning, and sales analytics.",
        technologies: ["React Native", "Expo", "SQLite", "Node.js"],
        image: bookingdashboard, // Placeholder: Use a mobile screenshot here
        liveLink: "#", // Link to App Store or demo video
        githubLink: null,
        isSensitive: true, // <--- MARKED SENSITIVE
        tags: ["all", "mobile", "professional"],
      },
      {
        id: 102, // New ID
        title: "TaskFlow - Team Management",
        description:
          "Cross-platform productivity app allowing teams to manage tasks, chat in real-time, and track project progress. Published on Play Store.",
        technologies: [
          "React Native",
          "Firebase",
          "Redux Toolkit",
          "NativeWind",
        ],
        image: assets, // Placeholder
        liveLink: "#",
        githubLink: "https://github.com/Mahedihasanimam/taskflow",
        isSensitive: false,
        tags: ["all", "mobile"],
      },
      {
        id: 5,
        title: "Assets Management System",
        description:
          "Enterprise-level admin dashboard for tracking corporate assets, depreciation cycles, and maintenance schedules.",
        technologies: ["React", "Redux Toolkit", "Chart.js", "Ant Design"],
        image: assets,
        liveLink: "https://nico-silk.vercel.app/inspections-activity",
        githubLink: null,
        isSensitive: true, // <--- MARKED SENSITIVE
        tags: ["all", "dashboard", "professional"],
      },
      {
        id: 1,
        title: "Ai Chatbot SaaS",
        description:
          "A subscription-based AI Chatbot platform with survey capabilities, featuring a modern, high-conversion UI/UX.",
        technologies: ["React.js", "Tailwind", "OpenAI API", "Stripe"],
        image: ai,
        liveLink: "https://chatbotai-wine.vercel.app",
        githubLink: "https://github.com/Mahedihasanimam/chatbot-ai",
        isSensitive: false,
        tags: ["all", "frontend", "fullstack"],
      },
      {
        id: 3,
        title: "Circooles - eLearning LMS",
        description:
          "A comprehensive Learning Management System (LMS) with student dashboards, instructor portals, and video streaming.",
        technologies: ["React", "Tailwind CSS", "Redux", "Firebase"],
        image: course,
        liveLink: "https://circooles-groth.vercel.app/",
        githubLink: "https://github.com/Mahedihasanimam/circooles-Groth",
        isSensitive: false,
        tags: ["all", "fullstack", "web"],
      },
      {
        id: 4,
        title: "Appartly - Rental Platform",
        description:
          "Full-stack property booking platform handling user authentication, property listings, and reservation management.",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        image: property,
        liveLink: "https://appartly-frontend.vercel.app/",
        githubLink: "https://github.com/Mahedihasanimam/appartly-frontend",
        isSensitive: false,
        tags: ["all", "fullstack", "web"],
      },
      {
        id: 6,
        title: "Property Admin Panel",
        description:
          "Back-office dashboard for real estate managers to visualize booking trends and manage user data.",
        technologies: ["React", "Redux", "Recharts", "Ant Design"],
        image: pantogonostisdashboard,
        liveLink: "https://appartly-dashboard.vercel.app/",
        githubLink: null,
        isSensitive: true, // <--- MARKED SENSITIVE
        tags: ["all", "dashboard"],
      },
    ],
    []
  );

  // Extract unique categories
  const categories = useMemo(() => {
    // Custom order to prioritize Mobile & Professional
    return ["all", "mobile", "professional", "fullstack", "dashboard", "web"];
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return activeFilter === "all"
      ? projects
      : projects.filter((project) =>
          project.tags?.some(
            (tag) => tag.toLowerCase() === activeFilter.toLowerCase()
          )
        );
  }, [projects, activeFilter]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-24 bg-gray-900 px-6 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-emerald-400">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A curated collection of mobile applications, enterprise
              dashboards, and full-stack web solutions.
            </p>
          </motion.div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold capitalize transition-all duration-300 border ${
                activeFilter === category
                  ? "bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-500/20"
                  : "bg-gray-800 border-gray-700 text-gray-400 hover:border-emerald-500/50 hover:text-white"
              }`}
            >
              {category === "all" ? "All Work" : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={item} layout>
                <ProjectsCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16 rounded-xl bg-gray-800/50 border border-gray-700/50 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-5xl mb-6">📂</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              No Projects Found
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto">
              Projects for this category are currently being updated.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
