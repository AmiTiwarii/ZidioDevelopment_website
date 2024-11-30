'use client'

import { motion } from 'framer-motion'
import { Pen, Cloud, Globe, Megaphone, Layers, Server } from 'lucide-react'

const services = [
  { icon: Pen, title: 'Graphic Design', description: 'Monotonectally synergize grants to business visualize strategic infomediaries' },
  { icon: Cloud, title: 'Cloud Solutions', description: 'Deliver scalable cloud solutions to enhance your business flexibility and operational efficiency.' },
  { icon: Globe, title: 'Web Development', description: 'Design and build responsive, high-performance websites using the latest web technologies.' },
  { icon: Megaphone, title: 'Digital Marketing', description: 'Boost your online presence with tailored digital marketing strategies that drive engagement and growth.' },
  { icon: Layers, title: '3D Vector Illustration', description: 'Monotonectally synergize grants to business visualize strategic infomediaries' },
  { icon: Server, title: 'Hosting Services', description: 'Monotonectally synergize grants to business visualize strategic infomediaries' }
]

export default function WhatWeOffer() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">What we are Offering</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay:0.01 }}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 hover:bg-opacity-20 transition-all duration-900 transform hover:-translate-y-2 cursor-pointer hover:shadow-md hover:shadow-slate-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 rounded-full p-3 mr-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300">{service.description}</p>
              <motion.a
                href="#"
                className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors"
                whileHover={{ x: 5 }}
              >
                Read More →
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}