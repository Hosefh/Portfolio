import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

  return (
    <div name='contact' 
    className='w-full h-screen bg-gradient-to-b from-slate-900 to-cyan-900 p-4
    text-white'>
        <div className='flex flex-col p-4 justify-center 
        max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p data-aos="fade-right" className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p data-aos="fade-left" className='py-6'>Submit in the form below to get in touch. </p>
            </div>
            <div data-aos="fade-up" className='flex justify-center items-center'>

                <form action="https://getform.io/f/52cb75be-eb1a-4f45-954f-bb11b111bde2" 
                method='POST' 
                className='flex flex-col w-full md:w-1/2'>
                    
                    <input type="text" name='name' 
                    placeholder='Enter you name' 
                    className='p-2 bg-transparent border-2 rounded-md
                    text-white focus:outline-none'
                    />
                    <input type="text" name='email' 
                    placeholder='Enter you email' 
                    className='my-4 p-2 bg-transparent border-2 rounded-md
                    text-white focus:outline-none'
                    />
                    <textarea name="message"
                    placeholder='Enter your message' 
                    rows="10" 
                    className='p-2 bg-transparent border-2 rounded-md
                    text-white focus:outline-none'>
                    </textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-900 to-slate-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'
                    >
                        Let's Talk
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact