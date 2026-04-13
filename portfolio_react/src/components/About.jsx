import React from 'react'
import {motion as Motion} from 'framer-motion'
import { assets, aboutInfo } from '../assets/assets'


const About =() => {
  return (
    <Motion.div
    initial={{opacity:0, y:20}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.5, ease:[0.16, 1, 0.3, 1]}}
    viewport={{once:true, amount: 0.1}}
    id='about'
    className='relative min-h-screen overflow-hidden bg-[#05020a] text-white'>
        <div className='container mx-auto px-6 py-20 md:py-32'>
            <h2 className='text-3xl font-bold text-center mb-4'>
                About
                <span className='text-purple ml-3'>
                    Me
                </span>
            </h2>
            <p className='text-grey-400 text-center max-w-2xl mx-auto mb-16'>
                Get to know more about my background and passion.
            </p>
            <div className='flex flex-col md:flex-row items-center gap-12'>
              <div className='md:w-1/2 rounded-2xl overflow-hidden'>
               <Motion.img
               initial={{opacity:0, y:50}}
               whileInView={{opacity:1, y:0}}
                transition={{duration:0.9,ease:'easeOut'}}
                 viewport={{once:false ,amount:0.2}}
                 className='w-full h-full object-cover'
                src={assets.profileImg1} alt="profile" />
              </div>
              <Motion.div 
               initial={{opacity:0, y:50}}
               whileInView={{opacity:1, y:0}}
                transition={{duration:0.9,ease:'easeOut'}}
                 viewport={{once:false ,amount:0.2}}
                 className='md:w-1/2'>
                  <div className='rounded-2xl p-8'>
                    <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                    <p className='text-grey-300 mb-12'>I'm a passionate developer with a strong foundation in both frontend and backend technologies. My journey began with a curiosity about how things work, leading me to explore programming languages and frameworks.Over the years, I've refined my skills in creating responsive and user-friendly web applications, always ready to deliver high-quality solutions that meet client needs.</p>
                    <p>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or gaining knowledge from blogs and tutorials.I believe in continuous learning and pushing the boundaries of development.</p>
                   

                   <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-6'>
                    {
                       aboutInfo.map((data,index)=>(<div key={index} className='bg-dark-300 p-6 rounded-2xl transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                        <div className='text-purple text-4xl mb-4' >
                          <data.icon />

                       </div>
                       <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                       <p className='text-gray-400'>{data.description}</p>
                        </div>))
                    }

                  
                  </div>

                  </div>

              </Motion.div>

            </div>
            </div>

    </Motion.div>
  )
  
}

export default About