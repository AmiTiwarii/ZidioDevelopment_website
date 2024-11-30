'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Mail, Clock, Facebook, Twitter, Linkedin, Youtube, Search } from 'lucide-react'
import Image from 'next/image'
import ZidioLogo from "../../../public/ZidioLogo.png"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed w-full z-50 font-sans">
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <MapPin size={16} className="mr-2" />
              <span className="text-sm">Bengaluru, Karnataka, India</span>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-2" />
              <span className="text-sm">support@zidio.in</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span className="text-sm">9:00 am - 5:30 pm</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Facebook size={16} className="cursor-pointer hover:text-blue-300 transition-colors" />
            <Twitter size={16} className="cursor-pointer hover:text-blue-300 transition-colors" />
            <Linkedin size={16} className="cursor-pointer hover:text-blue-300 transition-colors" />
            <Youtube size={16} className="cursor-pointer hover:text-blue-300 transition-colors" />
          </div>
        </div>
      </div>
      <nav className={`py-4 transition-all duration-300 bg-white shadow-md }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            <Image src={ZidioLogo} alt='Logo' width={200} height={200} className='ml-7'/>
          </Link>
          <div className="flex items-center space-x-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <Search 
              size={20} 
              className="cursor-pointer transition-colors
                text-blue-600 hover:text-blue-800" 
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              <Link href="/contact">
                Get A Quote
              </Link>
            </motion.button>
          </div>
        </div>
      </nav>
    </header>
  )
}

function NavLink({ href, children }: any) {
  return (
    <Link href={href} className="relative group">
      <span className="text-blue-600 hover:text-blue-800 transition-colors">
        {children}
      </span>
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
    </Link>
  )
}