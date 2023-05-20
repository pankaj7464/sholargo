import React from 'react'
import Footer from '../component/Footer'
import FAQ from '../component/FAQ'
import ExpertAdvice from '../component/ExpertAdvice'
import ScholarshipCard from '../component/ScholarshipCard'
import Header from '../component/Header'
import Hero from '../component/Hero'
import Working from '../component/Working'


const Home = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Working />
    <ScholarshipCard/>
    <ExpertAdvice/>
    <FAQ/>
    <Footer/>
    </>
  )
}

export default Home