import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProjectsCard from "./ProjectsCard";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const { data: projects, isLoading, isError, error } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data } = await axios.get("projects.json");
      return data;
    },
    refetchOnWindowFocus: false,
    staleTime: 300000, // 5 minutes cache
  });

  // Extract unique categories
  const categories = useMemo(() => {
    if (!projects) return [];
    const allTags = projects.flatMap(project => project.tags || []);
    return ["all", ...new Set(allTags)];
  }, [projects]);

  // Filter projects based on selection
  const filteredProjects = useMemo(() => {
    if (!projects) return [];
    return activeFilter === "all" 
      ? projects 
      : projects.filter(project => project.tags?.includes(activeFilter));
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
       

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, idx) => (
              <div 
                key={idx} 
                className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 animate-pulse"
              >
                <div className="h-48 bg-gray-800" />
                <div className="p-6">
                  <div className="h-6 bg-gray-800 rounded mb-4 w-3/4" />
                  <div className="h-4 bg-gray-800 rounded mb-2 w-full" />
                  <div className="h-4 bg-gray-800 rounded mb-2 w-5/6" />
                  <div className="h-4 bg-gray-800 rounded mb-2 w-4/6" />
                  <div className="flex flex-wrap gap-2 mt-6">
                    <div className="h-6 bg-gray-800 rounded-full w-16" />
                    <div className="h-6 bg-gray-800 rounded-full w-16" />
                    <div className="h-6 bg-gray-800 rounded-full w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {isError && (
          <motion.div 
            className="text-center py-16 rounded-xl bg-gray-800/50 border border-gray-700/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-5xl mb-6">⚠️</div>
            <h3 className="text-2xl font-bold text-white mb-3">Data Loading Error</h3>
            <p className="text-gray-400 max-w-xl mx-auto mb-6">
              {error.message || "Failed to load projects. Please check your network connection."}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-emerald-600 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
            >
              Reload Projects
            </button>
          </motion.div>
        )}

        {/* Projects Grid */}
        <AnimatePresence>
          {!isLoading && !isError && (
            <motion.div
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
          )}
        </AnimatePresence>

        {/* Empty State */}
        {!isLoading && !isError && filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16 rounded-xl bg-gray-800/50 border border-gray-700/50"
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