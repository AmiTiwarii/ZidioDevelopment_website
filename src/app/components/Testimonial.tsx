'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import David from "../../../public/David.png"
import Ranjan from "../../../public/RanjanKumar.png"
import Suraj from "../../../public/SurajAdhikari.png"
import Andy from "../../../public/AndyTessa.png"

export default function Testimonials() {
  const testimonials = [
    { name: 'Mr. Ranjan Kumar Senapati', comment: 'Zidio exceeded our expectations. Their team was professional, responsive, and delivered a high-quality solution that perfectly aligned with our needs. We couldn’t be happier with the results..', image: Ranjan },
    { name: 'Mr. Suraj Adhikari', comment: 'Working with Zidio was a game-changer for our business. Their expertise and attention to detail ensured that our project was not only completed on time but also surpassed our initial vision.', image: Suraj },
    { name: 'David', comment: 'The team at Zidio is exceptional. From start to finish, they demonstrated a deep understanding of our goals and provided invaluable guidance throughout the process. We highly recommend their services.', image: David },
    { name: 'Andy Tessa',  comment: 'Zidio’s commitment to excellence is unmatched. Their seamless working process and expert leadership delivered a final product that truly sets our business apart. We’re thrilled with the outcome.', image: Andy },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-t from-indigo-900 to-purple-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Client Testimonials</h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 text-center"
            >
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full transform -rotate-6"></div>
                <Image 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  width={100} 
                  height={100} 
                  className="rounded-full mx-auto relative z-10"
                />
              </div>
              <p className="text-white mb-6 text-lg italic">"{testimonials[currentIndex].comment}"</p>
              <p className="font-semibold text-pink-300">{testimonials[currentIndex].name}</p>
            </motion.div>
          </AnimatePresence>
          <button onClick={prevTestimonial} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white rounded-full p-3 hover:bg-pink-600 transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={nextTestimonial} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white rounded-full p-3 hover:bg-pink-600 transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}