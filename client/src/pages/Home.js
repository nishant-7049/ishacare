import React from 'react'
import Blogs from '../components/Home/Blogs'
import FAQ from '../components/Home/FAQ'
import Hero from '../components/Home/Hero'
import Process from '../components/Home/Process'
import Testimonial from '../components/Home/Testimonial'
import Therapist from '../components/Home/Therapist'
import Vision from '../components/Home/Vision'

const Home = () => {
  return (
    <div>
      <Hero />
      <Vision/>
      <Process />
      <Therapist />
      <Blogs />
      <Testimonial />
      <FAQ/>
    </div>
  )
}

export default Home
