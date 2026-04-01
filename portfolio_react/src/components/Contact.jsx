import React from 'react'
import { motion as Motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt,FaPhone,FaGithub, FaLinkedin, FaWhatsapp, FaInstagram} from 'react-icons/fa'

export default function Contact() {
  return (
    <Motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:1,ease:'easeOut'}}
    viewport={{once:false,amount:0.2}}
    id='contact'
    className='relative min-h-screen overflow-hidden bg-[#05020a] text-white'>
        <div className='container mx-auto px-6 py-20 md:py-32'>
         <h2 className='text-3xl font-bold text-center mb-4'>
            Get In
            <span className='text-purple ml-3'>Touch</span>
         </h2>
         
         <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? Feel free to reach out!</p>
         <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
            <div>
                <form className='space-y-6'>
                    <div>
                        <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                      <input className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type="text"/>    
                    </div>
                     <div>
                        <label htmlFor="email" className='block text-gray-300 mb-2'>Email Address</label>
                      <input className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type="email"/>    
                    </div>
                     <div>
                        <label htmlFor="message" className='block text-gray-300 mb-2'>Your Message</label>
                      <textarea className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type="text"/>    
                    </div>
                    <button type='submit' className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'>Send</button>

                </form>
            </div>
            <div className='space-y-8'>
                <div className='flex items-start'>
                    <div className='text-purple text-2xl mr-4'>
                        <FaMapMarkerAlt />
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-2'>Location</h3>
                        <p>Sangli, Maharashtra</p>
                    </div>

                </div>
                 <div className='flex items-start'>
                    <div className='text-purple text-2xl mr-4'>
                        <FaEnvelope />
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-2'>Email</h3>
                        <p>loharsanket105@gmail.com</p>
                    </div>

                </div>
                 <div className='flex items-start'>
                    <div className='text-purple text-2xl mr-4'>
                        <FaPhone />
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                        <p>+91 9356773491</p>
                    </div>

                </div>
                 <div className='pt-4'>
                  <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                  <div className='flex space-x-4'>
                    <a 
                      href='https://github.com/SanketLohar' 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='w-12 h-12 rounded-xl bg-dark-300 border border-white/5 flex items-center justify-center text-white hover:bg-purple hover:border-purple/50 hover:-translate-y-1 transition duration-300'
                    >
                      <FaGithub className='text-xl' />
                    </a>
                    <a 
                      href='https://www.linkedin.com/in/sanket-lohar-7b2541365' 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='w-12 h-12 rounded-xl bg-dark-300 border border-white/5 flex items-center justify-center text-blue hover:bg-blue hover:text-white hover:border-blue/50 hover:-translate-y-1 transition duration-300'
                    >
                      <FaLinkedin className='text-xl' />
                    </a>
                    <a 
                      href='https://instagram.com/sanketlohar_10' 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='w-12 h-12 rounded-xl bg-dark-300 border border-white/5 flex items-center justify-center text-pink hover:bg-pink-500 hover:text-white hover:border-pink/50 hover:-translate-y-1 transition duration-300'
                    >
                      <FaInstagram className='text-xl' />
                    </a>
                  </div>
                 </div>
            </div>
         </div>
        </div>
        </Motion.div>
  )
}
