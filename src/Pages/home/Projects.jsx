import { useState, useMemo } from "react";
import ProjectsCard from "./ProjectsCard";
import { motion, AnimatePresence } from "framer-motion";
import travel from '../../../src/assets/travel.png'
import course from '../../../src/assets/course.png'
import property from '../../../src/assets/property.png'
import assets from '../../../src/assets/assets.png'
import bookingdashboard from '../../../src/assets/bookingdashboard.png'
import pantogonostisdashboard from '../../../src/assets/pantogonostisdashboard.png'
import ai from '../../../src/assets/ai.png'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  // Static projects data with unique IDs and consistent tags
  const projects = useMemo(() => [
    {
      id: 1,
      title: "Ai Chatbot Website",
      description: "A AI CHATBOT and sarvey website with awesome ui/ux ",
      technologies: ["React js", "Tailwind", "Ant Design", "JavaScript"],
      image: ai,
      liveLink: "https://chatbotai-wine.vercel.app",
      githubLink: "https://github.com/Mahedihasanimam/chatbot-ai",
      tags: ["all", "frontend"]
    },
    {
      id: 2,
      title: "Adventure Travel",
      description: "A responsive travel website with modern UI components and smooth animations built with pure HTML, CSS, and JavaScript.",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      image: travel,
      liveLink: "https://mahedihasanimam.github.io/adventure-travel",
      githubLink: "https://github.com/Mahedihasanimam/adventure-travel",
      tags: ["all", "frontend"]
    },
    {
      id: 3,
      title: "Circooles - Online Course Platform",
      description: "Modern e-learning platform with dashboard, course management, and user authentication.",
      technologies: ["React", "Tailwind CSS", "Redux", "Firebase"],
      image: course,
      liveLink: "https://circooles-groth.vercel.app/",
      githubLink: "https://github.com/Mahedihasanimam/circooles-Groth",
      tags: ["all", "fullstack", "frontend"]
    },
    {
      id: 4,
      title: "Appartly - Property Booking",
      description: "Full-stack property rental platform with search filters, booking system, and user profiles.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      image: property,
      liveLink: "https://appartly-frontend.vercel.app/",
      githubLink: "https://github.com/Mahedihasanimam/appartly-frontend",
      tags: ["all", "fullstack"]
    },
    {
      id: 5,
      title: "Assets Management Dashboard",
      description: "Admin dashboard with analytics, assets management.",
      technologies: ["React", "Redux Toolkit", "Chart.js", "Ant Design"],
      image: assets,
      liveLink: "https://nico-silk.vercel.app/inspections-activity",
      githubLink: "https://github.com/Mahedihasanimam/nico",
      tags: ["all", "dashboard"]
    },
    {
      id: 6,
      title: "Property Booking Dashboard",
      description: "Admin dashboard with analytics, user and property management.",
      technologies: ["React", "Redux Toolkit", "Rechart js", "Ant Design"],
      image: bookingdashboard,
      liveLink: "https://appartly-dashboard.vercel.app/",
      githubLink: "https://github.com/Mahedihasanimam/appartly-dashboard",
      tags: ["all", "dashboard"]
    },
    {
      id: 7,
      title: "Course Manage Admin Dashboard",
      description: "Course maintain Admin Dashboard",
      technologies: ["React", "Redux Toolkit", "Rechart js", "Ant Design"],
      image: pantogonostisdashboard,
      liveLink: "https://dimitriz-user-dashboard.vercel.app/",
      githubLink: "https://github.com/Mahedihasanimam/dimitriz-dshboard",
      tags: ["all", "dashboard"]
    },
  ], []);

  // Extract unique categories with case normalization
  const categories = useMemo(() => {
    const tagSet = new Set();
    const uniqueTags = [];
    
    projects.forEach(project => {
      project.tags?.forEach(tag => {
        const normalizedTag = tag.toLowerCase();
        if (!tagSet.has(normalizedTag)) {
          tagSet.add(normalizedTag);
          uniqueTags.push(tag); // Preserve original casing for display
        }
      });
    });
    
    // Move "all" to the front
    return ["all", ...uniqueTags.filter(tag => tag !== "all")];
  }, [projects]);

  // Filter projects based on selection
  const filteredProjects = useMemo(() => {
    return activeFilter === "all" 
      ? projects 
      : projects.filter(project => 
          project.tags?.some(tag => 
            tag.toLowerCase() === activeFilter.toLowerCase()
          )
        );
  }, [projects, activeFilter]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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
              A curated collection of my professional work showcasing technical expertise, 
              clean design principles, and innovative solutions.
            </p>
          </motion.div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories?.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                activeFilter === category
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/20"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category === "all" ? "All Projects" : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects?.map((project) => (
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
            <div className="text-5xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-3">No Projects Found</h3>
            <p className="text-gray-400 max-w-xl mx-auto">
              No projects match the selected category. Try another filter or check back later.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;