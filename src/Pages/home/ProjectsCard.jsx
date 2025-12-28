import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaLock } from "react-icons/fa";

const ProjectsCard = ({ project }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-emerald-500/40 transition-all duration-300 h-full flex flex-col group shadow-lg"
      whileHover={{ y: -8 }}
    >
      {/* Image Container */}
      <div className="relative h-52 overflow-hidden">
        {project?.image ? (
          <img
            src={project?.image}
            alt={project?.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="bg-gray-700 w-full h-full flex items-center justify-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />

        {/* Client Project Badge (Top Right) */}
        {project.isSensitive && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-emerald-500/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-sm flex items-center gap-1">
              <FaLock size={10} /> Client Project
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex-grow flex flex-col relative z-10 -mt-2 bg-gray-800">
        {/* Title */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-5 leading-relaxed flex-grow line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-gray-700/50 border border-gray-600/50 text-emerald-100/80 text-xs font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2.5 py-1 text-gray-500 text-xs">+more</span>
          )}
        </div>

        {/* Links Section */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
          {/* Live Demo Link */}
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-white hover:text-emerald-400 transition-colors"
          >
            <FaExternalLinkAlt size={14} /> Live Demo
          </a>

          {/* Logic: If Sensitive, Show Lock. If Open, Show GitHub */}
          {project.isSensitive ? (
            <div
              className="flex items-center gap-2 text-sm font-medium text-gray-500 cursor-not-allowed"
              title="Source code is private due to NDA/Client Agreement"
            >
              <FaLock size={14} />
              <span className="hidden sm:inline">Code Private</span>
              <span className="sm:hidden">Private</span>
            </div>
          ) : (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={16} /> Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
