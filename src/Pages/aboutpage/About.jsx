import heroimg from "../../assets/profile-pic (8).png";
const About = () => {
    return (
        <section id="about" className="bg-[#1D232A] shadow-lg text-white">
        <div className="container  flex  justify-between  p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row flex-col-reverse lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={heroimg}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-4xl lg:text-left">
            <h1 className="text-4xl border-b-2 border-green-500 w-fit font-bold leading-none lg:text-6xl sm:text-4xl">
              About me
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-50 text-opacity-80">
            hello i am mahedi hasan. i am a passionate front-end web developer. Recently i have completed diploma in computer science and technology . During my studies I developed a strong foundation about front-end technology's like html CSS tailwind CSS bootstrap js react and also i am familiar with express node mongo for backend i have successfully done so many full stack projects   which have given me hands-on experience in developing  web applications . i want to start my career as a front-end developer

            </p>
            <a
              rel="noopener noreferrer"
              
              className="px-8 py-3 btn w-fit text-lg font-semibold border rounded border-green-500 bg-green-500 hover:text-white hover:border-2 hover:bg-transparent hover:border-green-500 text-white transition-all duration-500"
            >
              contact now
            </a>
          </div>
          
        </div>
      </section>
    );
};

export default About;