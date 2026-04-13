import React from 'react'
import {motion as Motion } from 'framer-motion'
import { workData } from '../assets/assets'


export default function Work() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <Motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      id="experience"
      className="relative min-h-screen overflow-hidden bg-[#05020a] text-white"
    >
      <div className="container mx-auto px-6 py-20 md:py-32">
        <h2 className="text-3xl font-bold text-center mb-4">
          Work
          <span className="text-purple ml-3">Experience</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          My professional journey and the roles I've undertaken
        </p>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {workData.map((data, index) => (
              <Motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-purple cursor-pointer hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute left-[-0.5rem] top-0 w-6 h-6 rounded-full bg-purple shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                <div className="bg-dark-300 rounded-2xl p-6 border border-white/5 hover:border-purple/20 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{data.role}</h3>
                    <span className="px-3 py-1 bg-purple/20 text-purple rounded-full text-xs md:text-sm font-medium">
                      {data.duration}
                    </span>
                  </div>
                  <p className="text-purple/80 mb-2 font-medium">{data.company}</p>
                  <p className="text-gray-400 leading-relaxed">{data.description}</p>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </Motion.div>
  );
}
