'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { DollarSign, Users, Headphones, ThumbsUp } from 'lucide-react'
import Experience from '../../../public/Experience.png'

export default function SoftwareDevelopment() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-blue-500 text-white p-4 rounded-lg z-10">
                <h3 className="text-2xl font-bold">3+</h3>
                <p className="text-sm">Years Of Experience</p>
              </div>
              <Image
                src={Experience}
                alt="Team working"
                width={350}
                height={250}
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Your Reliable Partner for IT Services Dedicated to Your Success</h2>
            <p className="text-gray-300 mb-6">
              At Zidio, we're your trusted IT services partner, ensuring your success with reliable solutions tailored to your business needs. Count on us for robust software development, comprehensive IT support, and cutting-edge technology solutions that empower your business to thrive.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: DollarSign, text: 'Cost Effective Solutions' },
                { icon: Users, text: 'Expert & Dedicated Team Members' },
                { icon: Headphones, text: '24/7 Free Technical Support' },
                { icon: ThumbsUp, text: '100% Customers Satisfaction' }
              ].map((item, index) => (
                <div key={index} className="flex items-center text-white">
                  <item.icon className="w-5 h-5 mr-2 text-blue-400" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
            >
              About More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}