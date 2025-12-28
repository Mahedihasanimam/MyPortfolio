import { useEffect, useState, useMemo, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import heroimg from "../../../public/bannerimg.jpg";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const typingStrings = [
  "Front-End Developer",
  "Mobile App Developer",
  "React/React-Native Specialist",
  "UI/UX Enthusiast",
];
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenWords = 1500;

const Hero = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Cursor animation states
  const cursorRef = useRef(null);
  const cursorOuterRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    setIsMounted(true);

    // Cursor animation setup
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive elements
      const interactiveElements = document.querySelectorAll(
        "a, button, [data-cursor-hover]"
      );
      let hovering = false;

      interactiveElements.forEach((el) => {
        if (el.contains(e.target)) {
          hovering = true;
        }
      });

      setIsHoveringInteractive(hovering);
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);
    const handleMouseEnter = () => setIsCursorVisible(true);
    const handleMouseLeave = () => setIsCursorVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      setIsMounted(false);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Update cursor position with animation
  useEffect(() => {
    if (cursorRef.current && cursorOuterRef.current) {
      cursorRef.current.style.transform = `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`;
      cursorOuterRef.current.style.transform = `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`;
    }
  }, [cursorPosition]);

  useEffect(() => {
    if (!isMounted) return;

    const currentWord = typingStrings[wordIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, erasingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText((prev) => currentWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % typingStrings.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, isMounted]);

  const particlesOptions = useMemo(
    () => ({
      background: { opacity: 0 },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 2 },
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#10b981" },
        links: {
          color: "#10b981",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          outModes: "out",
        },
        number: {
          density: { enable: true, area: 1000 },
          value: 50,
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: {
          value: { min: 1, max: 3 },
          animation: {
            enable: true,
            speed: 3,
            minimumValue: 0.1,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-6 cursor-none">
      {/* Custom Cursor Elements */}
      <div
        ref={cursorRef}
        className={`fixed z-[9999] w-2 h-2 rounded-full bg-emerald-400 pointer-events-none transition-all duration-100 ease-out ${
          isHoveringInteractive ? "scale-150 bg-white mix-blend-difference" : ""
        } ${isMouseDown ? "scale-75" : ""} ${
          !isCursorVisible ? "opacity-0" : "opacity-100"
        }`}
        style={{
          transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`,
          left: "-4px",
          top: "-4px",
          transitionProperty:
            "transform, width, height, background-color, opacity",
          willChange: "transform, width, height, background-color, opacity",
        }}
      />

      <div
        ref={cursorOuterRef}
        className={`fixed z-[9998] w-10 h-10 rounded-full border-2 border-emerald-400 pointer-events-none transition-all duration-300 ease-out ${
          isHoveringInteractive ? "scale-150 border-emerald-300 opacity-50" : ""
        } ${isMouseDown ? "scale-75 border-emerald-500" : ""} ${
          !isCursorVisible ? "opacity-0" : "opacity-100"
        }`}
        style={{
          transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`,
          left: "-20px",
          top: "-20px",
          transitionProperty: "transform, width, height, border-color, opacity",
          willChange: "transform, width, height, border-color, opacity",
        }}
      />

      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroimg})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-emerald-900/80"></div>

      {/* Particle Background */}
      <Particles
        className="absolute inset-0 opacity-40"
        init={particlesInit}
        options={particlesOptions}
      />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl animate-pulse-slow"></div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-emerald-900/30 backdrop-blur-sm border border-emerald-500/30 mb-6 animate-fade-in">
              <span className="text-sm uppercase tracking-widest text-emerald-400">
                Hello, I'm
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tighter">
              <span className="block mb-2 text-white">Mehedi Hasan</span>
              <span className="block mt-4 text-emerald-400 min-h-[1.5em]">
                {text}
                <span
                  className={`inline-block w-1 h-8 ml-1 bg-emerald-400 align-middle ${
                    !isDeleting ? "animate-pulse" : ""
                  }`}
                ></span>
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              I create{" "}
              <span className="text-emerald-400">
                engaging digital experiences
              </span>{" "}
              with clean, efficient code and intuitive user interfaces that
              bring visions to life.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              <div className="text-center p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <div className="text-3xl font-bold text-emerald-400">27+</div>
                <div className="text-sm text-gray-400 mt-1">Projects</div>
              </div>
              <div className="text-center p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <div className="text-3xl font-bold text-emerald-400">1+</div>
                <div className="text-sm text-gray-400 mt-1">
                  Years Experience
                </div>
              </div>
              <div className="text-center p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <div className="text-3xl font-bold text-emerald-400">10+</div>
                <div className="text-sm text-gray-400 mt-1">Technologies</div>
              </div>
              <div className="text-center p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <div className="text-3xl font-bold text-emerald-400">80%</div>
                <div className="text-sm text-gray-400 mt-1">Satisfaction</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/about"
                className="px-8 py-4 text-lg font-semibold rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20 transform hover:-translate-y-0.5 focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50 flex items-center group"
                data-cursor-hover
              >
                More about me
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              </Link>

              <a
                href="/public/mehediResume.pdf"
                download="Mehedi_Hasan_Resume.pdf"
                className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 transform hover:-translate-y-0.5 focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50 flex items-center group"
                data-cursor-hover
              >
                Download Resume
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-y-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Section - Decorative Element */}
          <div className="relative hidden lg:block">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-xl animate-pulse-slow"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-xl animate-pulse-slow"></div>

              <div className="relative bg-gradient-to-br from-gray-800/50 to-emerald-900/30 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8 transform rotate-3">
                <div className="text-emerald-400 text-xl font-semibold mb-4">
                  Technologies I Use
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    "React",
                    "TypeScript",
                    "Tailwind",
                    "Node.js",
                    "MongoDB",
                    "Expo",
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className="bg-gray-900/50 backdrop-blur-sm py-3 px-4 rounded-lg text-center text-white border border-gray-700/50 hover:border-emerald-500/50 transition-colors"
                      data-cursor-hover
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow z-10">
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-300 tracking-widest mb-2">
            SCROLL
          </span>
          <svg
            className="w-5 h-5 text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
