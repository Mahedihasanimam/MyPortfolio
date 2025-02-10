import { useEffect, useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import heroimg from "../../../public/bannerimg.jpg";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const typingStrings = ["Front-End Developer", "React Specialist", "UI/UX Enthusiast"];
const typingSpeed = 100; // Speed for typing letters
const erasingSpeed = 50; // Speed for deleting letters
const delayBetweenWords = 1500; // Delay before switching to the next word

const Hero = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
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
  }, [text, isDeleting, wordIndex]);

  // Memoized Particles Options
  const particlesOptions = useMemo(
    () => ({
      background: { opacity: 0 },
      fpsLimit: 120,
      interactivity: {
        events: { onClick: { enable: true, mode: "push" }, onHover: { enable: true, mode: "repulse" } },
        modes: { push: { quantity: 4 }, repulse: { distance: 200, duration: 0.4 } },
      },
      particles: {
        color: { value: "#ffffff" },
        links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1 },
        move: { enable: true, speed: 2 },
        number: { density: { enable: true, area: 800 }, value: 80 },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }),
    []
  );

  // Memoized Particle Loader
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white min-h-screen flex items-center overflow-hidden"
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      {/* Particle Background */}
      <Particles className="absolute inset-0" init={particlesInit} options={particlesOptions} />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold leading-tight lg:text-6xl">
              <span className="text-sm uppercase tracking-wider block mb-2">I'M</span>
              Mehedi
              <span className="block mt-2 text-green-400">{text} |</span> {/* Typing effect */}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Passionate front-end developer and junior MERN stack developer skilled in building dynamic, user-friendly web applications.
            </p>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/about"
                className="px-8 py-3 text-lg font-semibold rounded bg-green-500 text-white hover:bg-green-600 transition-colors duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                More about me
              </Link>
              <a
                href="/public/mehedi-resumeUpdated (1).pdf"
                download="Mehedi_resume"
                className="px-8 py-3 text-lg font-semibold rounded border border-green-500 text-green-400 hover:bg-green-500 hover:text-white transition-colors duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="hidden lg:block">
            <img
              src={heroimg || "/placeholder.svg"}
              alt="Mehedi's profile picture"
              className="rounded-full w-[600px] h-[600px] border-4 border-green-500 shadow-xl transition-transform duration-300 hover:scale-105 hover:rotate-3"
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
