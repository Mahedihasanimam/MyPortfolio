import React from "react";
import heroimg from "../../assets/profile-pic (8).png";

const AboutPage = () => {
  return (
    <div>
      <section id="about" className="bg-[#1D232A] shadow-lg text-white container mx-auto">
        <div className="  flex  justify-between  p-6 sm:py-12 lg:py-24 lg:flex-row flex-col-reverse lg:justify-between">
          <div className="flex items-center justify-start lg:p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={heroimg}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-easing="ease-in-sine"
            />
          </div>
          <div className="flex flex-col justify-center lg:p-6   rounded-sm lg:max-w-md xl:max-w-4xl w-full text-left">
            <h1
              className="text-4xl border-b-2 border-green-500 w-fit font-bold leading-none lg:text-6xl sm:text-4xl"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              About me
            </h1>
            <p
              className="mt-6 mb-8 text-lg sm:mb-12 text-gray-50 text-opacity-80"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="2000"
            >
              hello i am mahedi hasan. i am a passionate front-end web
              developer. Recently i have completed diploma in computer science
              and technology . During my studies I developed a strong foundation
              about front-end technology's like html CSS tailwind CSS bootstrap
              js react and also i am familiar with express node mongo for
              backend i have successfully done so many full stack projects which
              have given me hands-on experience in developing web applications .
              i want to start my career as a front-end developer
            </p>
            <a
            href={'/contact'}
              rel="noopener noreferrer"
              className="px-8 py-3 btn w-fit text-lg font-semibold border rounded border-green-500 bg-green-500 hover:text-white hover:border-2 hover:bg-transparent hover:border-green-500 text-white transition-all duration-500"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              contact now
            </a>
          </div>
        </div>
        <div className="px-6  mb-12 space-y-2">
          <h1
            className="text-4xl border-b-2 border-green-500 pb-3 
     w-fit font-bold leading-none lg:text-6xl sm:text-4xl mb-4 "
          >
            Education
          </h1>
          <span className="text-xl font-bold">Diploma</span>
          <p>
            Study in Diploma (Engg.) in computer science and technology at
            Kishorganj polytechnic <br /> institute, kishorganj,korimganj- From
            2021 to Present
          </p> <hr /> <br />
          <span className="text-xl font-bold">PROFESSIONAL TRAINING</span>
          <p>Complete Web Development Course with Jhankar Mahbub Programming Hero - 2024</p> <br />
          <a
              rel="noopener noreferrer"
              href="/src/assets/cirtificate.pdf"
              download={"mehedi's cirtificate"}
              className="px-8 py-3 w-fit text-lg font-semibold border rounded border-green-500 text-green-400 hover:bg-green-500 hover:text-white transition-all duration-500"
            >
              View Certificate
            </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
