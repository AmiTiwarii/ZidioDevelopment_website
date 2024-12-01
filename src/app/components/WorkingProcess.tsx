'use client'

import AnimatedBorderCard from './AnimateBorderCard'


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