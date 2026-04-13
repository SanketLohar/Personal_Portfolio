import React from 'react'
import{motion as Motion } from 'framer-motion'
import {  skills } from '../assets/assets'


export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <Motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      id="skills"
      className="relative min-h-screen overflow-hidden bg-[#05020a] text-white"
    >
      <div className="container mx-auto px-6 py-20 md:py-32">
        <h2 className="text-3xl font-bold text-center mb-4">
          My
          <span className="text-purple ml-3">Skills</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Technologies I work with to bring ideas to life
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto ">
          {skills.map((skill, index) => (
            <Motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark-300 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-white/5 hover:border-purple/30 group"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-12 h-12 text-purple mr-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-dark-400 rounded-full text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </Motion.div>
  );
};
