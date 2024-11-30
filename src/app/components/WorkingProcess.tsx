'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import StartAProject from "../../../public/StartAProject.png"
import ProjectAnalysis from "../../../public/ProjectAnalysis.png"
import DeliverToSuccess from "../../../public/DeliverToSuccess.png"
import AnimatedBorderCard from './AnimateBorderCard'

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

export default function WorkingProcess() {
  return (
    <section className="py-20 bg-gradient-to-t from-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">We Follow the Easy Working Steps</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <AnimatedBorderCard/>
        </div>
      </div>
    </section>
  )
}