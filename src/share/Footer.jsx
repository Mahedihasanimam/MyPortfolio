import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-4">
            <div className="mb-6">
              <Link to="/" className="text-3xl font-bold">
                <span className="text-green-500">M</span>EHEDI
                <span className="text-green-500">.</span>
              </Link>
            </div>
            <p className="mb-6 max-w-xs text-gray-400">
              Front-end developer specializing in React applications with clean 
              code and pixel-perfect implementations.
            </p>
            <div className="flex space-x-4">
              <SocialIcon 
                href="https://www.facebook.com/profile.php?id=100064053792788"
                icon={<FaFacebook size={20} />}
              />
              <SocialIcon 
                href="https://github.com/Mahedihasanimam"
                icon={<FaGithub size={20} />}
              />
              <SocialIcon 
                href="https://www.linkedin.com/in/mehedi60/"
                icon={<FaLinkedin size={20} />}
              />
            </div>
          </div>

          {/* Navigation Section */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              <FooterLink path="/" label="Home" />
              <FooterLink path="/about" label="About" />
              <FooterLink path="/blog" label="Blog" />
              <FooterLink 
                path="/src/assets/Mehedi_resume(front-end developer).pdf" 
                label="Resume"
                download="mehedi_resume"
              />
            </ul>
          </div>

          {/* Skills Section */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4 text-white uppercase tracking-wider">
              Top Skills
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Front-end Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>MERN Stack Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Responsive UI Design</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Performance Optimization</span>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4 text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-4">
              <ContactItem 
                icon={<MdEmail className="text-green-500 flex-shrink-0" size={20} />}
                text="mdmehedihasen678@gmail.com"
                href="mailto:mdmehedihasen678@gmail.com"
              />
              <ContactItem 
                icon={<FaPhoneAlt className="text-green-500 flex-shrink-0" size={16} />}
                text="+8801860650703"
                href="tel:+8801860650703"
              />
              <ContactItem 
                icon={<IoLocation className="text-green-500 flex-shrink-0" size={20} />}
                text="Mymensingh, Bangladesh"
              />
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-green-500">M</span>EHEDI
          <span className="text-green-500">.</span> All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// Reusable Social Icon Component
const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-all duration-300 hover:scale-110"
  >
    {icon}
  </a>
);

// Reusable Footer Link Component
const FooterLink = ({ path, label, download }) => (
  <li>
    {download ? (
      <a
        href={path}
        download={download}
        className="hover:text-green-500 transition-colors duration-300 flex items-center"
      >
        {label}
      </a>
    ) : (
      <Link
        to={path}
        className="hover:text-green-500 transition-colors duration-300 flex items-center"
      >
        {label}
      </Link>
    )}
  </li>
);

// Reusable Contact Item Component
const ContactItem = ({ icon, text, href }) => (
  <li className="flex items-start">
    <span className="mt-0.5 mr-3">{icon}</span>
    {href ? (
      <a href={href} className="hover:text-white transition-colors">
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </li>
);

export default Footer;