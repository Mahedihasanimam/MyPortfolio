import React from 'react';
import Hero from './Hero';
import About from '../aboutpage/About';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div className=''>
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
        </div>
    );
};

export default Home;