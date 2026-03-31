// import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar/Navbar"
import HeroSection from "./Components/Navbar/HeroSection/HeroSection"
import Border from "./Components/Border/Border"
import CardSection from './Components/CardSection/CardSection'
import Footer from './Components/Footer/Footer'
import FooterTop from './Components/FooterTop/FooterTop'
import GetStarted from './Components/GetStarted/GetStarted'
import PricingCard from './Components/PricingCard/PricingCard'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <HeroSection></HeroSection>
    <Border></Border>
    <CardSection></CardSection>
    <GetStarted></GetStarted>
    <PricingCard></PricingCard>



     <FooterTop></FooterTop>
     <Footer></Footer>
    </>
  )
}

export default App
