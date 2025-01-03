
import React from 'react'
import HeroSec from './component/Hero'
import Hero2 from './component/Latestposts'
import TopPosts from './component/TopPosts'
import TestimonialHero from './component/testimonials'


const Home = () => {
  return ( <div> 
    <HeroSec/>
    <Hero2/>
    <TopPosts/>
    <TestimonialHero/>
    </div>
  )
}

export default Home