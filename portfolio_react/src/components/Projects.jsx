import React from 'react'
import {motion as Motion } from 'framer-motion'
import { projects } from '../assets/assets'
import { FaArrowRight } from 'react-icons/fa'
import ProjectCard from './ProjectCard'

export const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <Motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      id="projects"
      className="relative min-h-screen overflow-hidden bg-[#05020a] text-white"
    >
      <div className="container mx-auto px-6 py-20 md:py-32">
        <h2 className="text-3xl font-bold text-center mb-4  ">
          My
          <span className="text-purple ml-3">Projects</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 ">
          A selection of my recent work
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Motion.div key={index} variants={itemVariants}>
              <ProjectCard {...project} />
            </Motion.div>
          ))}
        </div>
        <Motion.div variants={itemVariants} className="text-center mt-12">
          <a
            href="https://github.com/SanketLohar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 border border-purple/30 rounded-xl font-medium hover:bg-purple/10 hover:border-purple transition-all duration-300 group"
          >
            <span>View All Projects</span>
            <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
          </a>
        </Motion.div>
      </div>
    </Motion.div>
  );
};
