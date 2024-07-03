import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ydxgtpr', 'template_yxrrpp4', form.current, {
            publicKey: 'rJV8DbjidT1YSon1o',
          })
          .then(
            () => {
               
             toast.success('message sent')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div>
      <h1
        className="text-4xl border-b-2 border-green-500 pb-3 container lg:mx-auto 
     w-fit font-bold leading-none lg:text-4xl sm:text-4xl mb-4 mx-6 uppercase"
      >
        sent me a message
      </h1>
      <div className="hero ">
        <div className="hero-content w-full justify-between flex-col lg:flex-row-reverse">
          <section class="w-1/2 px-6 text-white rounded-md shadow-md ">
            <form ref={form} onSubmit={sendEmail}>
              <div class="">
                <div className="text-white">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your name"
                    className=" text-white w-full bg-transparent px-3 py-3 mt-2   border border-green-200 rounded-sm  focus:border-green-400 focus:ring-green-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    className=" w-full bg-transparent px-3 py-3 mt-2 text-white border border-green-200 rounded-sm  focus:border-green-400 focus:ring-green-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                  <textarea
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="Your Email"
                    className=" w-full bg-transparent px-3 py-3 mt-2 text-white  border border-green-200 rounded-sm  focus:border-green-400 focus:ring-green-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  ></textarea>
                </div>
              </div>

              <div class="flex justify-end mt-6">
              <button
          
              className="px-8 py-3 w-fit text-lg font-semibold border rounded border-green-500  bg-green-500 text-white transition-all duration-500"
            >
              Send message
            </button>
              </div>
            </form>
          </section>
          <div className="text-center max-w-lg lg:text-left">
            <h1 className="text-4xl font-bold">Getting in touch is easy!</h1>
            <div className="space-y-4 mt-4">
              <p className="">mymensingh,bangladesh</p>
              <p>+8801860650703</p>
              <p>mdmehedihasen678@gmail.com</p>
            </div>
            <div className="space-y-3">
              <div className="uppercase dark:text-gray-900"></div>
              <div className="flex justify-start space-x-6">
                <Link
                  target="_blank"
                  to={"https://www.facebook.com/profile.php?id=100064053792788"}
                >
                  <FaFacebook size={25} />
                </Link>
                <Link target="_blank" to={"https://github.com/Mahedihasanimam"}>
                  <FaGithub size={25} />
                </Link>

                <Link
                  target="_blank"
                  to={"https://www.linkedin.com/in/mehedi60/"}
                >
                  <CiLinkedin size={25} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
