import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
const 
ProjectsCard = ({ project }) => {
    const { image, title, description,id,liveLink,client_github,server_github} = project;

    return (
        <div className="relative max-h-96 overflow-hidden group">
            {/* Background overlay on hover */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10 lg:top-1/2 top-1/3 cursor-pointer ">
            <div className='p-6 max-w-xl text-center mx-auto space-y-4'>
            <p className='text-xl font-bold text-center '>{title}</p>
            <p>{description.slice(0,100)}</p>
            <div className='flex justify-around'>
            <Link target='_blank' to={liveLink} className='text-green-400  w-fit font-bold flex items-center mx-auto justify-between gap-2'>Live Preview <FaArrowRightLong/> </Link>
            <Link target='_blank' to={client_github} className='text-green-400  w-fit font-bold flex items-center mx-auto justify-between gap-2'>Client site <FaArrowRightLong/> </Link>
            {
                server_github&&<Link target='_blank' to={server_github} className='text-green-400  w-fit font-bold flex items-center mx-auto justify-between gap-2'>Server site<FaArrowRightLong/> </Link>
            }
            </div>
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
