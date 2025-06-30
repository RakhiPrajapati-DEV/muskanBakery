import { useState } from 'react'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar'
import Marquee from './components/marquee'
import Slider from './components/Slider'
import MainSegment from './components/MainSegment'
import Footer from './components/Footer'
import SignatureProducts from './components/SignatureProducts';
import About from './components/About';
import SecondSection from './components/secondSection';
import Testimonial from './components/Testimonial';
import Count from './components/count';




function App() {
  

  return (
    <>
    <Navbar/>
    <Marquee/>
    <Slider/>
    <SecondSection/>
    <MainSegment/>
    <SignatureProducts/>
    <About/>
    <Testimonial/>
    <Count/>
    <Footer/>
    </>
  )
}

export default App;
