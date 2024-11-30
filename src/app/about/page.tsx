'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import PersonSitting from "../../../public/Person_sitting.png"
import Boy from "../../../public/Boy.png"
import Navbar from "../components/Header"
import BusinessGrowth from "../../../public/BusinessGrowth.png"
import Ecommerce from "../../../public/Ecommerce.png"
import AudienceGrowth from "../../../public/AudienceGrowth.png"
import SecureDatabse from "../../../public/SecureDatabase.png"
import TeamMemberCard from '../components/TeamMemberCard'
import AnimeshSingh from "../../../public/AnimeshSingh.png"
import SalmaHusna from "../../../public/SalmaHusna.png"
import ChandanMishra from "../../../public/ChandanMishra.png"
import HarshDash from "../../../public/HarshDash.png"
import Footer from '../components/Footer'

const team = [
    { name: 'Animesh Singh', role: 'Full Stack Web Developer', image: AnimeshSingh},
    { name: 'Salma Husna Salsabila', role: 'UI/UX Designer', image: SalmaHusna},
    { name: 'Chandan Mishra', role: 'Data Scientist', image: ChandanMishra },
    { name: 'Harsa Dash', role: 'Developer Team Lead', image: HarshDash },
  ]

const services = [
    {
        name: "Business Growth",
        imageSrc: BusinessGrowth
    },
    {
        name: "eCommerce",
        imageSrc: Ecommerce
    },
    {
        name: "Secure Database",
        imageSrc: SecureDatabse
    },
    {
        name: "Audience Growth",
        imageSrc: AudienceGrowth
    },
]

const CircleBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-70"
        style={{
          background: `radial-gradient(circle, ${['#4299E1', '#9F7AEA', '#ED64A6'][i % 3]} 0%, transparent 70%)`,
          width: `${Math.random() * 40 + 20}%`,
          height: `${Math.random() * 40 + 20}%`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, Math.random() * 100 - 50],
          y: [0, Math.random() * 100 - 50],
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: Math.random() * 10 + 10,
        }}
      />
    ))}
  </div>
)

const AboutPage = () => {
  return (
    <div className='min-h-screen'>
        <Navbar/>

        <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center mb-20">
            <CircleBackground />

            <div className="flex flex-row h-full justify-center items-center gap-28 mb-14">
                <div className="relative z-10 text-center">
                <motion.h1 
                    className="text-6xl font-bold mb-6 text-gray-800"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    About Us
                </motion.h1>
                <motion.p 
                    className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Welcome to Zidio Development Pvt. Ltd. We are a trailblazing software development company where innovation meets expertise.
                </motion.p>
                <motion.button
                    className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Learn More
                </motion.button>
                </div>

                <div className="">
                    <Image src={Boy} alt='Hero' width={300} height={300} />
                </div>
            </div>

            {/* Services Section */}
            <section className="absolute py-20 px-6 bg-transparent top-2/3 z-10">
                <div className="max-w-6xl mx-auto">
                {/* <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Our Services</h2> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                    <motion.div 
                        key={service.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1, delay: 0.1 }}
                        whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-slate-900"
                    >
                        <div className="w-full flex items-center justify-center p-2">
                            <Image src={service.imageSrc} alt={service.name} width={50} height={50} />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800 flex justify-center">{service.name}</h3>
                        <div className="w-full text-gray-600 flex justify-between items-center">
                        Enhance your business with our specialized {service.name.toLowerCase()} solutions.
                        </div>
                    </motion.div>
                    ))}
                </div>
                </div>
            </section>
        </section>

        {/* Who We Are Section */}
        <section className="min-h-screen relative w-full h-full py-20 px-6 bg-white">
            <div className="relative w-full h-full flex flex-col md:flex-row items-center outline-none">
            <div className="absolute md:w-[1000px] md:h-[1000px] mb-10 md:mb-0  md:mt-[450px] object-center">
                <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                >
                <Image 
                    src={PersonSitting}
                    alt="Animated" 
                    width={500} 
                    height={600} 
                    className="rounded-lg w-full h-full object-fill"
                />
                </motion.div>
            </div>
            <div className="md:w-1/2 md:ml-[700px] right-0">
                <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                >
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Who we are and What we do?</h2>
                <p className="mb-6 text-gray-600">
                    Our team of skilled developers and creative thinkers specializes in turning complex ideas into user-friendly digital solutions. From custom software to cutting-edge mobile apps, we're dedicated to engineering excellence and pushing the boundaries of technology.
                </p>
                <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-green-500 mr-2" />
                    <span>Innovative Software Solutions</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-green-500 mr-2" />
                    <span>Expert Development Team</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-green-500 mr-2" />
                    <span>Cutting-edge Technologies</span>
                    </li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <blockquote className="italic text-gray-600">
                    "The true sign of intelligence is not knowledge but imagination —Albert Einstein"
                    </blockquote>
                </div>
                <motion.button
                    className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    More About <ArrowRight className="ml-2" />
                </motion.button>
                </motion.div>
            </div>
            </div>
        </section>


        
        </div>

        <div className="flex w-full flex-col p-10 bg-gray-100 text-black">
        <div className="flex flex-col p-5 pb-10">
            <span className='bg-blue-400 text-transparent bg-clip-text'>Dedicated Team</span>
            <span className='font-semibold text-3xl'>Meet Our Dedicated Member</span>
            <span className='font-semibold text-3xl'>For any enquery</span>
        </div>
        <div className="flex flex-row">
          {team.map((props) => (
            <TeamMemberCard 
              key={props.name}
              name={props.name} 
              role={props.role}
              imageSrc={props.image}
            />
          ))}
        </div>
      </div>

      <Footer/>        

    </div>
  )
}

export default AboutPage