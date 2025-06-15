// import React from "react";
// import { motion } from "framer-motion";
// import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import { SiGithub } from "react-icons/si";

// const ProjectsCard = ({ project }) => {
//   const {
//     image,
//     title,
//     description,
//     liveLink,
//     client_github,
//     server_github,
//     technology,
//     category,
//   } = project;

//   return (
//     <motion.div 
//       className="group relative rounded-2xl overflow-hidden border border-gray-700/50 shadow-xl h-full flex flex-col"
//       whileHover={{ y: -10 }}
//       transition={{ duration: 0.3 }}
//     >
//       {/* Image Container */}
//       <div className="h-60 relative overflow-hidden">
        // {image ? (
        //   <img
        //     src={image}
        //     alt={title}
        //     className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        //   />
        // ) : (
        //   <div className="bg-gradient-to-br from-gray-800 to-gray-900 w-full h-full flex items-center justify-center">
        //     <div className="text-5xl text-gray-600">📁</div>
        //   </div>
        // )}
        
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-80"></div>
        
//         {/* Hover Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
//           <div className="space-y-4 w-full">
//             <p className="text-gray-200 line-clamp-3 text-sm">{description}</p>
            
//             <div className="flex flex-wrap gap-2">
//               <a
//                 href={liveLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
//               >
//                 <FaExternalLinkAlt className="text-xs" /> Live Preview
//               </a>
//               <a
//                 href={client_github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
//               >
//                 <SiGithub /> Client Code
//               </a>
//               {server_github && (
//                 <a
//                   href={server_github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
//                 >
//                   <SiGithub /> Server Code
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
        
//         {/* Category Badge */}
//         <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
//           {category}
//         </div>
//       </div>

//       {/* Card Content */}
//       <div className="bg-gray-800/50 backdrop-blur-sm p-6 flex-1 flex flex-col border-t border-gray-700/50 group-hover:border-emerald-500/30 transition-colors">
//         <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
//           {title}
//         </h3>
        
//         <div className="flex flex-wrap gap-2 mb-4">
//           {technology.map((tech, index) => (
//             <span
//               key={index}
//               className="text-xs text-emerald-400 bg-emerald-900/30 px-3 py-1 rounded-full"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
        
//         <div className="mt-auto pt-4 border-t border-gray-700/50">
//           <a
//             href={liveLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-emerald-400 transition-colors group/link"
//           >
//             View project details
//             <FaArrowRight className="ml-2 text-xs group-hover/link:translate-x-1 transition-transform" />
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectsCard;



import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectsCard = ({ project }) => {
  return (
    <motion.div 
      className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-emerald-500/30 transition-all duration-300 h-full flex flex-col"
      whileHover={{ y: -10 }}
    >
      <div className="relative h-48 overflow-hidden">
        {/* <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" /> */}
        {project?.image ? (
          <img
            src={project?.image}
            alt={project?.title}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 w-full h-full flex items-center justify-center">
            <div className="text-5xl text-gray-600">📁</div>
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-700/50 text-emerald-400 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between mt-auto">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors"
          >
            <FaGithub /> Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;