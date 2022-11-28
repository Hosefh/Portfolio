import React, { useEffect } from 'react';
// import notes from '../assets/portfolio/notes.jpeg'
import inventory from '../assets/portfolio/inventory_system.png'
import pgbh from '../assets/portfolio/pgbhmonitoring.png'
import tree from '../assets/portfolio/tree.png'
import Aos from 'aos';
import "aos/dist/aos.css";

const Portfolio = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    const portfolios = [
        {
            id: 1,
            src: inventory,
        },
        {
            id: 2,
            src: tree
        },
        {
            id: 3,
            src: pgbh
        }
    ]

  return (
    <div name='portfolio'
    className='bg-gradient-to-b from-slate-900 to-black w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p data-aos="fade-right" className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p data-aos="fade-left" className='py-6'>Check out some of my work</p>
            </div>

            

            <div data-aos="fade-up" className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                portfolios.map(({id, src ,url}) =>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                    {/* <div className='flex items-center justify-center'>
                        <button onClick={url} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        <button onClick={url} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                    </div> */}
                </div> 
                ))
            }
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio