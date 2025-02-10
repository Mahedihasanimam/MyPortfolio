import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const ProjectsCard = ({ project }) => {
  const {
    image,
    title,
    description,
    liveLink,
    client_github,
    server_github,
    technology,
    category,
  } = project;

  return (
    <div className="relative group rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 bg-white border border-gray-200 ">
      {/* Image with Overlay */}
      <div className="h-[400px] relative w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F766E] via-[#0F766E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-start items-center  p-6 space-y-4">
          <p className="text-2xl font-bold text-white">{title}</p>
          <p className="text-sm text-gray-200 line-clamp-3">{description}</p>
          <div className="flex flex-col space-y-2">
            <Link
              target="_blank"
              to={liveLink}
              className="text-white font-semibold flex items-center gap-2 bg-green-500 px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300"
            >
              Live Preview <FaArrowRightLong />
            </Link>
            <Link
              target="_blank"
              to={client_github}
              className="text-white font-semibold flex items-center gap-2 bg-green-500 px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300"
            >
              Client Code <FaArrowRightLong />
            </Link>
            {server_github && (
              <Link
                target="_blank"
                to={server_github}
                className="text-white font-semibold flex items-center gap-2 bg-green-500 px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300"
              >
                Server Code <FaArrowRightLong />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-6 bg-white  transition-all duration-300 group-hover:bg-gray-100">
        <p className="text-xl font-semibold text-gray-900">{title}</p>
        <p className="text-sm text-gray-700 line-clamp-3">{description.slice(0, 120)}...</p>
        
        {/* Category Tag */}
        <p className="mt-2 text-sm font-medium text-white bg-[#0F766E] px-3 py-1 rounded-full inline-block">
          {category}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {technology.map((tech, index) => (
            <span
              key={index}
              className="text-sm text-[#0F766E] bg-[#E6F4F1] px-3 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
