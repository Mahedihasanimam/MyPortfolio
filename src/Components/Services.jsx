import { motion } from "framer-motion";
import {
  FaReact,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaChartLine,
} from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

const services = [
  {
    id: 1,
    title: "Mobile App Development",
    icon: <FaMobileAlt className="text-4xl" />,
    desc: "Building high-performance, cross-platform iOS & Android apps using React Native and Expo. I ensure native-like feel and smooth 60fps animations.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Modern Web Development",
    icon: <FaLaptopCode className="text-4xl" />,
    desc: "Creating fast, SEO-friendly web applications with Next.js, React, and TypeScript. Focused on responsiveness and modern UI/UX standards.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    title: "Backend & API Integration",
    icon: <FaServer className="text-4xl" />,
    desc: "Developing robust Node.js/Express APIs and integrating them seamlessly with your mobile and web apps using RTK Query or Axios.",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 4,
    title: "Figma to Code",
    icon: <FaCode className="text-4xl" />,
    desc: "Translating your design files into pixel-perfect code. I specialize in converting Figma designs to both React Native (Mobile) and React.js (Web).",
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 5,
    title: "Full-Stack Solutions",
    icon: <FaDatabase className="text-4xl" />,
    desc: "End-to-end development handling the entire stack—from database architecture (MongoDB) to the client-side interface.",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 6,
    title: "Performance Optimization",
    icon: <FaChartLine className="text-4xl" />,
    desc: "Auditing and improving existing applications. I optimize load times, reduce bundle sizes, and fix rendering issues for maximum speed.",
    color: "from-yellow-500 to-orange-500",
  },
];

const Services = () => {
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
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center mb-4">
              <RiCustomerService2Fill className="text-emerald-500 text-3xl mr-3" />
              <span className="text-emerald-400 font-semibold tracking-wider">
                SERVICES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-emerald-400">Specializations</span>
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Delivering tailored digital solutions with a focus on Mobile Apps
              and Scalable Web Architecture.
            </p>
          </motion.div>
        </div>

        {/* Services Grid - Changed to grid-cols-3 for a cleaner look with 6 items */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              className="group relative h-full"
              whileHover={{ y: -10 }}
            >
              {/* Hover Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-xl blur opacity-0 group-hover:opacity-50 transition-all duration-500`}
              ></div>

              <div className="relative h-full bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 flex flex-col hover:border-gray-600 transition-colors">
                <div
                  className={`mb-6 p-4 rounded-xl bg-gradient-to-r ${service.color} w-fit shadow-lg`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed flex-1">
                  {service.desc}
                </p>

                <div className="mt-8 pt-6 border-t border-gray-700/50 flex items-center">
                  <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                    Discuss Project
                  </span>
                  <svg
                    className="ml-2 w-4 h-4 text-emerald-400 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-10 border border-emerald-500/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">
                Have a mobile app idea?
              </h3>
              <p className="text-gray-300">
                Let's turn your concept into a live application on the App Store
                and Play Store.
              </p>
            </div>
            <div>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300"
              >
                Start Building
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
