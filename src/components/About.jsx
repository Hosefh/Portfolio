import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
  <div name='about' className='w-full h-screen bg-gradient-to-b from-black to-slate-900 text-white'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p  data-aos="fade-right" className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            <p data-aos="fade-left" className='py-6'>Know more about me. </p>
        </div>
        <p data-aos="fade-up" className='text-xl mt-20'>
        I’m Joseph Brendon Jon I. Loremia,
         I do Web Development and other stuffs like UI/UX Design, Computer hardware Servicing,
          Photo & Video Editing and Hair Styling and Dancing as my passion where I and my group competes anywhere in the province. Currently working as a Web Developer at Bohol Information and Communication Technology Offic (BICTO). 
        </p>
    </div>
    </div>
  )
}

export default About