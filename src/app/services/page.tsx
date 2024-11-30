'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Cloud, Settings, RefreshCw, Brain, BarChart2, Globe, Shield, PieChart } from 'lucide-react'
import Footer from '../components/Footer'
import Service from "../../../public/Services.png"
import Header from '../components/Header'
import Image from 'next/image'

const services = [
  { icon: Cloud, title: 'Cloud Services', description: 'Deliver scalable cloud solutions to enhance your business\'s flexibility and operational efficiency.' },
  { icon: Settings, title: 'IT Management', description: 'Provide comprehensive IT infrastructure management to ensure smooth and uninterrupted business operations.' },
  { icon: RefreshCw, title: 'Software Renew', description: 'Manage and streamline software renewals, ensuring your systems are always up-to-date and secure.' },
  { icon: Brain, title: 'Machine Learning', description: 'Develop and implement machine learning models to automate processes and drive intelligent decision-making.' },
  { icon: BarChart2, title: 'Digital Marketing', description: 'Boost your online presence with targeted digital marketing strategies that drive engagement and growth.' },
  { icon: Globe, title: 'Web Development', description: 'Design and build responsive, high-performance websites using the latest web technologies.' },
  { icon: Shield, title: 'Cyber Security', description: 'Safeguard your digital assets with robust cybersecurity solutions tailored to protect against emerging threats.' },
  { icon: PieChart, title: 'Data Analytic', description: 'Transform raw data into valuable insights, enabling informed and strategic business decisions.' },
]

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => (
  <motion.div
    className="relative bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="relative flex items-center mb-4">
      <div className="absolute top-[-50px] left-24 bg-blue-100 p-4 mt-0 border border-blue-700 rounded-full mr-4 hover:animate-spin hover:shadow-border hover:border-b shadow-blue-500">
        <Icon className="text-blue-600 w-6 h-6 hover:shadow-border hover:border-b shadow-blue-500" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 md:mt-5">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <motion.div
      className="inline-flex items-center text-blue-600 font-semibold cursor-pointer group"
      whileHover={{ x: 5 }}
    >
      Learn More
      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
      <motion.div
        className="h-0.5 bg-blue-600 mt-0.5"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  </motion.div>
)

const ServicesPage: React.FC = () => {
  return (
    <>
        <Header/>
        <div className="relative min-h-full">
            <div className="absolute text-5xl font-bold text-black top-48 pl-16">Our Services</div>
            <div className="absolute text-5xl font-semibold text-black top-64 ml-16 border-2 flex items-center p-3 border-black bg-gray-300 rounded-xl w-80 justify-center gap-3  ">
                <span className='text-3xl'>Home</span>
                <ArrowRight/> 
                <span className='text-3xl'>Services</span>
            </div>
            <div className="h-full pt-16">
                <Image src={Service} alt='Services'  className='w-full h-full'/>
            </div>
        </div>


        <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                <motion.h2
                    className="text-base text-blue-600 font-semibold tracking-wide uppercase"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    What We Provide?
                </motion.h2>
                <motion.h1
                    className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Provide Interactive IT Solution &<br />Business Services
                </motion.h1>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((service, index) => (
                    <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
                ))}
                </div>
            </div>
        </div>

        <Footer/>
    
    </>
  )
}

export default ServicesPage