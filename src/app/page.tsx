import Navbar from './components/Header'
import HeroSection from './components/HeroSection'
import WhatWeOffer from './components/WhatWeOffer'
import Testimonials from './components/Testimonial'
import Footer from './components/Footer'
import WorkingProcess from './components/WorkingProcess'
import SoftwareDevelopment from './components/SoftwareDevelopment'
import TeamMemberCard from './components/TeamMemberCard'
import AnimeshSingh from "../../public/AnimeshSingh.png"
import SalmaHusna from "../../public/SalmaHusna.png"
import ChandanMishra from "../../public/ChandanMishra.png"
import HarshDash from "../../public/HarshDash.png"

const team = [
  { name: 'Animesh Singh', role: 'Full Stack Web Developer', image: AnimeshSingh},
  { name: 'Salma Husna Salsabila', role: 'UI/UX Designer', image: SalmaHusna},
  { name: 'Chandan Mishra', role: 'Data Scientist', image: ChandanMishra },
  { name: 'Harsa Dash', role: 'Developer Team Lead', image: HarshDash },
]


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <Navbar />
      <HeroSection />
      <SoftwareDevelopment/>
      <WhatWeOffer />
      <div className="flex w-full flex-col p-10">
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
      <WorkingProcess/>
      <Testimonials />
      <Footer />
    </div>
  )
}