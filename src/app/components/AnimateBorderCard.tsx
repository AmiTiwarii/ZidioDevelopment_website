'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import StartAProject from "../../../public/StartAProject.png"
import ProjectAnalysis from "../../../public/ProjectAnalysis.png"
import DeliverToSuccess from "../../../public/DeliverToSuccess.png"

const steps = [
  {
    title: 'Start A Project',
    description: 'Kick off your project with a clear understanding of your goals and requirements, setting the foundation for success.',
    image: StartAProject
  },
  {
    title: 'Project Analysis',
    description: 'Conduct a thorough analysis to create a tailored strategy, ensuring all aspects align with your business objectives.',
    image: ProjectAnalysis
  },
  {
    title: 'Deliver to Success',
    description: 'Execute and deliver the project with precision, ensuring it meets your expectations and drives your success.',
    image: DeliverToSuccess
  }
]

const AnimatedBorderCard: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-40 p-8">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: index * 0.1 }}
          className="flex flex-col items-center text-center w-full md:w-1/3 max-w-xs"
        >
          <div className="relative mb-4">
            <div className="absolute -top-4 -left-4 bg-blue-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold z-20">
              {index + 1}
            </div>
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-300"></div>
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, transparent 50%, #3b82f6 50%)',
                  backgroundSize: '200% 100%',
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '200% 0%'],
                }}
                transition={{
                  duration: 2,
                  ease: 'linear',
                  repeat: Infinity,
                }}
              ></motion.div>
              <div className="absolute inset-2 rounded-full overflow-hidden bg-white z-10">
                <Image
                  src={step.image}
                  alt={step.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <h3 className="text-xl text-gray-900 mb-2 font-extrabold">{step.title}</h3>
          <p className="text-black font-bold">{step.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default AnimatedBorderCard