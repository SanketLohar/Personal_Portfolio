import React from 'react'
import { FaGithub } from 'react-icons/fa'

function ProjectCard({ title, description, image, tech, code }) {
  return (
    <div className='flex flex-col h-full bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer border border-white/5 hover:border-purple/30 group'>
      <div className='relative overflow-hidden'>
        <img src={image} alt={title} className='w-full h-60 object-cover transition duration-500 group-hover:scale-110' />
        <div className='absolute inset-0 bg-gradient-to-t from-dark-300/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      </div>
      <div className='p-6 flex flex-col flex-grow'>
        <h3 className='text-xl font-semibold mb-2 group-hover:text-purple transition-colors'>{title}</h3>
        <p className='text-gray-400 mb-4 text-sm leading-relaxed'>{description}</p>
        <div className='flex flex-wrap gap-2 mb-6'>
          {tech && tech.map((item, index) => (
            <span key={index} className='px-3 py-1 bg-dark-400/50 text-gray-300 rounded-full text-xs border border-white/5'>{item}</span>
          ))}
        </div>
        <div className='mt-auto flex gap-4'>
            <a 
              href={code} 
              target="_blank" 
              rel="noopener noreferrer"
              className='w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-purple rounded-xl font-medium hover:bg-purple-700 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300'
            >
              <FaGithub className='text-lg' />
              <span>View Code</span>
            </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard