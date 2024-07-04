import heroimg from "../../../src/assets/profile-pic (7) (1).png";

const Hero = () => {
  return (
    <section className="bg-[#1D232A] shadow-lg text-white">
      <div className="container  flex  justify-between  p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row flex-col-reverse lg:justify-between">
        <div className="flex flex-col justify-center   rounded-sm lg:max-w-md xl:max-w-2xl max-w-full text-left">
          <h1 className="text-4xl font-bold leading-none lg:text-6xl sm:text-4xl"data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
           <span className="text-sm">I'M</span> Mehedi, a<br />
            
            <span className="text-green-400">Front-End Developer</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-50 text-opacity-80">
          Passionate front-end developer and junior MERN stack developer skilled in building dynamic, user-friendly web applications.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-start sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="about"
              className="px-8 py-3 w-fit text-lg font-semibold border rounded border-green-500  bg-green-500 text-white transition-all duration-500"
            >
              More about me
            </a>
            <a
              rel="noopener noreferrer no wraper"
              href="/src/assets/Mehedi_resume(front-end developer).pdf"
              download={"mehedi resume"}
              className="px-8 py-3 w-fit text-lg font-semibold border rounded border-green-500 text-green-400 hover:bg-green-500 hover:text-white transition-all duration-500"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={heroimg}
            alt=""
            className="object-contain  h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            data-aos="zoom-in-left"
            data-aos-duration="3000"
          />
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
