import React from "react";
import heroimg from "../../assets/profile-pic (8).png";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaCode,
} from "react-icons/fa";

const AboutPage = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4 lg:px-8 "
    >
      <div className="container mx-auto pt-4 mt-10">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <img
                src={heroimg}
                alt="Mahedi Hasan"
                className="rounded-2xl object-cover w-full h-auto max-h-[600px] border-4 border-emerald-500/20 shadow-2xl z-10 relative"
              />
              <div className="absolute -inset-6 border-2 border-emerald-500/30 rounded-2xl z-0"></div>
              <div className="absolute -bottom-10 -right-10 bg-emerald-500 w-40 h-40 rounded-full blur-[80px] opacity-20"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-1 bg-emerald-500 mr-4"></div>
              <h2 className="text-emerald-400 font-semibold tracking-wider">
                WHO I AM
              </h2>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Mobile App Developer & <br />
              <span className="text-emerald-400">Web Specialist</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Hello! I'm Mahedi Hasan, a dedicated developer bridging the gap
              between mobile and web. Currently pursuing my{" "}
              <strong>BSc in CSE</strong>, I combine academic foundations with
              practical expertise in <strong>React Native</strong> and{" "}
              <strong>Next.js</strong>.
              <br />
              <br />I don't just write code; I build seamless cross-platform
              experiences that run smoothly on iOS, Android, and the Web. My
              focus is on performance, clean architecture, and intuitive UI.
            </p>

            {/* Quick Tech Specs */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center mb-2">
                  <FaMobileAlt className="text-emerald-400 mr-2" />
                  <h3 className="text-white font-semibold">Mobile Stack</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  React Native, Expo, NativeWind, iOS & Android
                </p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center mb-2">
                  <FaCode className="text-emerald-400 mr-2" />
                  <h3 className="text-white font-semibold">Web Stack</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  React.js, Next.js, TypeScript, Tailwind CSS
                </p>
              </div>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all transform hover:-translate-y-1"
            >
              Let's Work Together
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Experience & Education */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600 transition-colors"
          >
            <div className="flex items-center mb-10">
              <div className="p-3 bg-emerald-900/20 rounded-xl mr-4 border border-emerald-500/20">
                <FaBriefcase className="text-emerald-400 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-white">Experience</h2>
            </div>

            <motion.div
              variants={item}
              className="relative pl-10 pb-2 border-l-2 border-emerald-500/30 ml-3"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-emerald-500 rounded-full border-4 border-gray-900"></div>

              <h3 className="text-xl font-bold text-white mb-1">
                Front-End Developer
              </h3>
              <div className="flex flex-wrap items-center text-gray-400 text-sm mb-4 gap-3">
                <span className="flex items-center">
                  <FaBriefcase className="mr-1.5 text-emerald-500" /> Sparktech
                  Agency
                </span>
                <span className="flex items-center">
                  <FaCalendarAlt className="mr-1.5 text-emerald-500" /> Aug 2024
                  - Present
                </span>
              </div>

              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Spearheading the development of client-facing features using{" "}
                <strong>React & Next.js</strong>. Optimized web performance
                utilizing Redux Toolkit for state management and code-splitting
                techniques, resulting in 40% faster load times.
              </p>

              <div className="flex flex-wrap gap-2">
                {["React Native", "Next.js", "Redux", "API Integration"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700/50 text-emerald-300 rounded-full text-xs font-medium border border-gray-600"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600 transition-colors"
          >
            <div className="flex items-center mb-10">
              <div className="p-3 bg-emerald-900/20 rounded-xl mr-4 border border-emerald-500/20">
                <FaGraduationCap className="text-emerald-400 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>

            {/* BSc */}
            <motion.div
              variants={item}
              className="relative pl-10 pb-10 border-l-2 border-emerald-500/30 ml-3"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-emerald-500 rounded-full border-4 border-gray-900"></div>

              <h3 className="text-lg font-bold text-white">
                BSc in CSE (Running)
              </h3>
              <div className="flex items-center text-gray-400 text-sm mb-2">
                <span>Uttara University</span>
              </div>
              <p className="text-gray-400 text-sm">
                Focusing on Advanced Algorithms, Data Structures, and Software
                Engineering patterns.
              </p>
            </motion.div>

            {/* Diploma */}
            <motion.div
              variants={item}
              className="relative pl-10 pb-10 border-l-2 border-emerald-500/30 ml-3"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-600 rounded-full border-4 border-gray-900"></div>

              <h3 className="text-lg font-bold text-white">
                Diploma in Computer Technology
              </h3>
              <div className="flex items-center text-gray-400 text-sm mb-2">
                <span>Kishoreganj Polytechnic Institute • 2021 - 2024</span>
              </div>
            </motion.div>

            {/* Course */}
            <motion.div variants={item} className="relative pl-10 ml-3">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-600 rounded-full border-4 border-gray-900"></div>

              <h3 className="text-lg font-bold text-white">
                Complete Web Development
              </h3>
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <span>Programming Hero • 2024</span>
              </div>

              <a
                href="#"
                className="inline-flex items-center px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-sm rounded-lg transition-colors border border-emerald-500/20"
              >
                <FaCertificate className="mr-2" />
                Verified Certification
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Career Statement */}
        <motion.div
          className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 rounded-2xl p-8 border border-emerald-500/20 mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto italic">
            "My mission is to build software that is not only functional but
            also intuitive and delightful to use. Whether it's a complex mobile
            application or a high-performance web dashboard, I bring technical
            precision and creative problem-solving to every project."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
