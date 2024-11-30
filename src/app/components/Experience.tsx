'use client'

import { motion } from 'framer-motion'
import { Briefcase, Users, Headphones } from 'lucide-react'

const experiences = [
  {
    icon: Briefcase,
    title: '3+ Year Experience',
    description: 'Over 3 years of expertise delivering unparalleled solutions and insights for your success'
  },
  {
    icon: Users,
    title: 'Dedicated Members',
    description: 'Passionate team members dedicated to exceeding expectations and achieving mutual success'
  },
  {
    icon: Headphones,
    title: 'Valuable Supports',
    description: 'Tailored support and guidance ensuring reliability and innovation every step of the way'
  }
]

export default function Experience() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 rounded-full p-3 mr-4">
                  <exp.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
              </div>
              <p className="text-gray-600">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}