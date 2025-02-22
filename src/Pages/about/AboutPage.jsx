import React from "react";
import heroimg from "../../assets/profile-pic (8).png";

const AboutPage = () => {
  return (
    <div>
      <section id="about" className="bg-[#1D232A] shadow-lg text-white container mx-auto">
        <div className="flex justify-between p-6 sm:py-12 lg:py-24 lg:flex-row flex-col-reverse lg:justify-between">
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
          <div className="flex flex-col justify-center lg:p-6 rounded-sm lg:max-w-md xl:max-w-4xl w-full text-left">
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
              Hello, I am Mahedi Hasan. I am a passionate front-end web developer. Recently, I have completed a diploma in computer science
              and technology. During my studies, I developed a strong foundation in front-end technologies like HTML, CSS, Tailwind CSS, Bootstrap,
              JavaScript, and React. I am also familiar with Express, Node, and MongoDB for backend development. I have successfully completed many full-stack
              projects, which have given me hands-on experience in developing web applications. I want to start my career as a front-end developer.
            </p>
            <a
              href={'/contact'}
              rel="noopener noreferrer"
              className="px-8 py-3 btn w-fit text-lg font-semibold border rounded border-green-500 bg-green-500 hover:text-white hover:border-2 hover:bg-transparent hover:border-green-500 text-white transition-all duration-500"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Contact Now
            </a>
          </div>
        </div>
        
        <div className="px-6 mb-12 space-y-2">
          <h1 className="text-4xl border-b-2 border-green-500 pb-3 w-fit font-bold leading-none lg:text-6xl sm:text-4xl mb-4">
            Working Experience
          </h1>
          <span className="text-xl font-bold">Front-End Developer</span>
          <p>Working at BDCalling IT Ltd for the past one year, specializing in front-end development, creating responsive and dynamic web applications.</p>
        </div>

        <div className="px-6 mb-12 space-y-2">
          <h1 className="text-4xl border-b-2 border-green-500 pb-3 w-fit font-bold leading-none lg:text-6xl sm:text-4xl mb-4">
            Education
          </h1>
          <span className="text-xl font-bold">Diploma</span>
          <p>
            Studying Diploma (Engg.) in Computer Science and Technology at Kishorganj Polytechnic
            Institute, Kishorganj, Korimganj - From 2021 to Present
          </p>
          <hr />
          <br />
          <span className="text-xl font-bold">PROFESSIONAL TRAINING</span>
          <p>Complete Web Development Course with Jhankar Mahbub - Programming Hero - 2024</p>
          <br />
          <a
            rel="noopener noreferrer"
            href="/src/assets/cirtificate.pdf"
            download={"mehedi's certificate"}
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
