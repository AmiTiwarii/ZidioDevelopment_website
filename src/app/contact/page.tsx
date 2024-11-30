'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Clock } from 'lucide-react'
import Image from 'next/image'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '../components/Footer'
import contactus from "../../../public/Contactus.png"
import Header from '../components/Header'

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        toast.success('Message sent successfully!')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.')
    }
  }

  return (
    <>
      <Header/>
      <div className="min-h-screen relative flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Image
          src={contactus}
          alt="Contactus"
          layout="fill"
          objectFit="cover"
          className="opacity-30 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 to-purple-600/50"></div>
        <div className="max-w-4xl w-full space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mt-6 text-center text-4xl font-extrabold text-white">
              Contact Us
            </h2>
            <p className="mt-2 text-center text-xl text-gray-200">
              We're here to help and answer any question you might have
            </p>
          </motion.div>
          <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/3 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="Enter E-Mail"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    >
                      <option value="">Select Subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Sales">Sales</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="Write Message"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              <div className="w-full md:w-1/3 bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="mr-3" />
                    <div>
                      <p className="font-semibold">Call Us</p>
                      <p>+918455807965</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-3" />
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p>support@zidio.in</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-3" />
                    <div>
                      <p className="font-semibold">Office Hours</p>
                      <p>9.00 AM to 5.00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position="bottom-right" />
      </div>

      <Footer/>
    </>
  )
}

export default ContactPage