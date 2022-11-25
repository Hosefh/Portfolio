import React, { useEffect } from 'react';
import Typed from 'react-typed'
import HeroImage from '../assets/heroImage.png';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import { Link } from 'react-scroll';
import Aos from 'aos';
import "aos/dist/aos.css";




const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

  return (
    <div name = "home" 
    className='h-screen w-full bg-gradient-to-t from-black via-black to-cyan-900'
    >
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'
        >
            <div data-aos="fade-right" className='flex flex-col justify-center h-full animated-typing text-white'>
            <h2 className='text-2xl sm:text-4xl font-bold text-white'>
            <Typed
                strings={[
                    "I'm a Web Developer"
                ]}
                typeSpeed={150}
                backSpeed={120}
                loop
             />
             </h2>
                {/* <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Web Developer
                    </h2> */}
                <p className='text-gray-500 py-4 max-w-md'>
                    Currently working at the Bohol Information and Communication Technology Office (BICTO) as a Web Developer.
                    I use React, Tailwind, Semantic UI, Material UI,  Node JS for the development.
                </p>

                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-black to-cyan-900' cursor-pointer>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>

            <div data-aos="fade-left">
                <img src={HeroImage} 
                alt="my profile" 
                className='rounded-full  mx-auto max-w-sm md:w-full hover:scale-110 transition duration-500 ease-in-out' />
            </div>

        </div>
    </div>
  );
};

export default Home
