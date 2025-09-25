import React from 'react';
import Aboutus from '../components/Aboutus';
import Teammember from '../components/Team';
import Blog from '../components/Blog';

const About:React.FC = () => {
    return (
        <div className='lg:mt-[143px]'>
            <Aboutus />
            <Teammember />
            <Blog />
            
        </div>
    );
};

export default About;