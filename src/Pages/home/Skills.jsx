import React from 'react';
import SkilCard from '../../Components/SkilCard';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNode, FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiJsonwebtokens } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

const Skills = () => {
    return (
        <div className="container mx-auto mb-12">
            <h1 className="text-4xl border-b-2 border-green-500 pb-3 container lg:mx-auto md:mx-auto 
             w-fit font-bold leading-none lg:text-6xl sm:text-4xl mb-12">
             My Skills
            </h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                <SkilCard name={'HTML'} icon={<FaHtml5 size={200} color="#E34F26"/>}/>
                <SkilCard name={'CSS'} icon={<FaCss3Alt size={200} color="#1572B6"/>}/>
                <SkilCard name={'Tailwind CSS'} icon={<RiTailwindCssFill size={200} color="#06B6D4"/>}/>
                <SkilCard name={'Bootstrap'} icon={<FaBootstrap size={200} color="#7952B3"/>}/>
                <SkilCard name={'React'} icon={<FaReact size={200} color="#61DAFB"/>}/>
                <SkilCard name={'Express'} icon={<SiExpress size={200} color="#ffffff"/>}/>
                <SkilCard name={'Node.js'} icon={<FaNode size={200} color="#339933"/>}/>
                <SkilCard name={'MongoDB'} icon={<SiMongodb size={200} color="#47A248"/>}/>
                <SkilCard name={'Firebase'} icon={<IoLogoFirebase size={200} color="#FFCA28"/>}/>
                <SkilCard name={'JavaScript'} icon={<FaJsSquare size={200} color="#F7DF1E"/>}/>
                <SkilCard name={'JWT'} icon={<SiJsonwebtokens size={200} color="#ffffff"/>}/>
            </div>
        </div>
    );
};

export default Skills;
