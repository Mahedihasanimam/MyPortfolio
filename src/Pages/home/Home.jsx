import React from 'react';
import Hero from './Hero';
import About from '../aboutpage/About';
import Projects from './Projects';
import Skills from './Skills';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Contact from './Contact';
import ServiceSection from '../../Components/Services';
// ..
AOS.init();
const Home = () => {
    return (
        <div className=''>
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>

            <ServiceSection/>
            <Contact/>
        </div>
    );
};

export default Home;