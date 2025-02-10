"use client";
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNode, FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiJsonwebtokens } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

const skillsData = [
  { name: "HTML", icon: <FaHtml5 size={60} color="#E34F26" />, yOffset: -20 },
  { name: "CSS", icon: <FaCss3Alt size={60} color="#1572B6" />, yOffset: 10 },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill size={60} color="#06B6D4" />, yOffset: -15 },
  { name: "Bootstrap", icon: <FaBootstrap size={60} color="#7952B3" />, yOffset: 5 },
  { name: "React", icon: <FaReact size={60} color="#61DAFB" />, yOffset: -20 },
  { name: "Express", icon: <SiExpress size={60} color="#ffffff" />, yOffset: 10 },
  { name: "Node.js", icon: <FaNode size={60} color="#339933" />, yOffset: -15 },
  { name: "MongoDB", icon: <SiMongodb size={60} color="#47A248" />, yOffset: 5 },
  { name: "Firebase", icon: <IoLogoFirebase size={60} color="#FFCA28" />, yOffset: -10 },
  { name: "JavaScript", icon: <FaJsSquare size={60} color="#F7DF1E" />, yOffset: 8 },
  { name: "JWT", icon: <SiJsonwebtokens size={60} color="#ffffff" />, yOffset: -10 },
];

const Skills = () => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(true);

  return (
    <section className="py-16 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto text-center px-6">
        {/* Title */}
        <motion.h1
          className="text-5xl font-bold border-b-4 border-green-500 inline-block pb-2 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Skills
        </motion.h1>

        {/* Infinite Scrolling Animation */}
        <div className="relative w-full ">
          <motion.div
            className="flex space-x-10 whitespace-nowrap"
            animate={{ x: ["0%", "-100%"] }} // Animation starts automatically
            transition={{
              ease: "linear",
              duration: 20, // Slower animation
              repeat: Infinity,
            }}
            style={{ display: "flex", width: "200%" }} // Ensures smooth looping
            onMouseEnter={() => {
              controls.stop();
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              controls.start({ x: ["0%", "-100%"] });
            }}
          >
            {/* Duplicate skills list to make looping seamless */}
            {[...skillsData, ...skillsData].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center hover:scale-110 transition-all duration-300"
                style={{ transform: `translateY(${skill.yOffset}px)` }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 15px rgba(255,255,255,0.2)",
                  border: "2px solid #00FF00", // Border animation on hover
                }}
              >
                {skill.icon}
                <p className="mt-4 text-lg font-semibold">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
