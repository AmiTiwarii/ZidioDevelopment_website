'use client'

import React, { useState } from 'react'
import {  motion, useMotionValue, useTransform } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { Facebook, Twitter, Linkedin } from 'lucide-react'
interface TeamMemberProps {
  name: string
  role: string
  imageSrc: string | StaticImageData
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, role, imageSrc }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  const handleMouseEnter = () => setIsFlipped(true)
  const handleMouseLeave = () => setIsFlipped(false)

  return (
    <div className="w-full gap-10">
      
      <motion.div
        className="relative w-80 h-96 cursor-pointer perspective-1000"
        onMouseMove={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-xl"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Front of the card */}
          <div className="absolute inset-0 backface-hidden transform rotateY-180">
            <div className="p-6 flex flex-col items-center h-full">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white">
                <Image src={imageSrc} alt={name} className="object-cover fill-current" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">{name}</h2>
              <p className="text-purple-200 mb-4">{role}</p>
              <div className="mt-auto">
                <motion.button
                  className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold transform rotateY-180"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsFlipped(true)}
                >
                  {isFlipped ? (
                    <div className="flex items-center space-x-4 transform rotateY-180">
                    <Facebook size={16} className="cursor-pointer hover:text-blue-300 transition-colors" />
                    <Twitter size={16} className="cursor-pointer hover:text-blue-300 transition-colors" />
                    <Linkedin size={16} className="cursor-pointer hover:text-blue-300 transition-colors" />
                  </div>
                  ) : (
                    <div className="">Read More </div>
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default TeamMemberCard
