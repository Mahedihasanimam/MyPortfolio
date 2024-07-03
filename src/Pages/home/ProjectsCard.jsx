import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
const ProjectsCard = ({ project }) => {
    const { image, title, description } = project;

    return (
        <div className="relative max-h-96 overflow-hidden group">
            {/* Background overlay on hover */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10 top-1/2 cursor-pointer ">
            <div className='p-6 max-w-xl text-center mx-auto space-y-4'>
            <p className='text-xl font-bold text-center '>{title}</p>
            <p>{description.slice(0,100)}</p>
            <Link className='text-green-400  w-fit font-bold flex items-center mx-auto justify-between gap-2'>See Details <FaArrowRightLong/> </Link>
            </div>
            </div>

            {/* Container for scrolling image */}
            <div className="relative h-full overflow-y-scroll">
                <img src={image} alt={title} className="w-full h-auto" />
            </div>
        </div>
    );
};

export default ProjectsCard;
