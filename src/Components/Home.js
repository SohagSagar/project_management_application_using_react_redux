import React from 'react';
import Navbar from './Navbar';
import ProjectCard from './ProjectCard';

const Home = () => {
    return (
        <div className='min-h-screen '>
            <Navbar/>
            <ProjectCard/>
            <ProjectCard/>

            
        </div>
    );
};

export default Home;